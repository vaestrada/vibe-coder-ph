#!/usr/bin/env node
/**
 * Certificate Generation & Email Send Script
 * Generates personalized PNG certificates for checked-in attendees and emails them.
 * 
 * Usage:
 *   node scripts/send-certificates.mjs              # Dry run (no emails, no DB inserts)
 *   node scripts/send-certificates.mjs --send        # Actually send
 *   node scripts/send-certificates.mjs --send --limit=5  # Send to first 5 only (test)
 *   node scripts/send-certificates.mjs --send --email=someone@example.com  # Single recipient
 * 
 * Certificate specs (from pixel analysis of Canva template):
 *   Template: 2000x1414px landscape PNG
 *   Name position: center X=1002, center Y=703
 *   Font: Alex Brush, size 60px, color: #FFFFFF (white)
 *   Name text region: x=324-1680, y=641-766
 */

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { createCanvas, loadImage, GlobalFonts } from '@napi-rs/canvas';
import QRCode from 'qrcode';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { config } from 'dotenv';

config({ path: '.env.local' });

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// ─── Config ────────────────────────────────────────────────────────────────────
const EVENT_SLUG = 'gen-ai-to-z';
const EVENT_TITLE = 'Gen AI to Z: A Career Summit in an AI-Driven World';
const EVENT_DATE = 'March 17, 2026';
const BASE_URL = 'https://www.vibecoders.ph';
const CERT_VERIFICATION_BASE = `${BASE_URL}/cert`;

// Certificate layout constants (from pixel diff analysis)
const NAME_CENTER_X = 1002;
const NAME_CENTER_Y = 748;
const NAME_FONT_SIZE = 120;
const NAME_FONT_COLOR = '#FFFFFF';
const MAX_NAME_WIDTH = 1200; // max text width, will scale down if longer

// QR code position — bottom-right, above partner logos row (~y=1340)
// Cert is 2000x1414; axolotl starts ~x=1780
const QR_SIZE = 160;
const QR_X = 1560; // left edge
const QR_Y = 1120; // top edge (bottom at 1280, clear of partner logos)

// Human-readable certificate code prefix
const CERT_CODE_PREFIX = 'GAI2Z26';

// ─── CLI args ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const DRY_RUN = !args.includes('--send');
const limitArg = args.find(a => a.startsWith('--limit='));
const LIMIT = limitArg ? parseInt(limitArg.split('=')[1]) : null;
const emailArg = args.find(a => a.startsWith('--email='));
const SINGLE_EMAIL = emailArg ? emailArg.split('=')[1].toLowerCase() : null;

// ─── Clients ───────────────────────────────────────────────────────────────────
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendKey = process.env.RESEND_API_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}
if (!resendKey && !DRY_RUN) {
  console.error('❌ Missing RESEND_API_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const resend = resendKey ? new Resend(resendKey) : null;

// ─── Font registration ─────────────────────────────────────────────────────────
const fontPath = join(projectRoot, 'public/fonts/AlexBrush-Regular.ttf');
GlobalFonts.registerFromPath(fontPath, 'Alex Brush');
console.log('✅ Registered Alex Brush font');

// ─── Load certificate template once ────────────────────────────────────────────
const templatePath = join(projectRoot, 'public/events/gen-ai-to-z/certificate-template.png');
const templateImage = await loadImage(readFileSync(templatePath));
console.log(`✅ Loaded template: ${templateImage.width}x${templateImage.height}px`);

// ─── Certificate generation ─────────────────────────────────────────────────────
function makeCertCode(uuid) {
  // Last 4 hex chars of UUID, uppercase
  const suffix = uuid.replace(/-/g, '').slice(-4).toUpperCase();
  return `${CERT_CODE_PREFIX}-${suffix}`;
}

function generateCertificate(recipientName, certId) {
  const canvas = createCanvas(templateImage.width, templateImage.height);
  const ctx = canvas.getContext('2d');

  // Draw the base template
  ctx.drawImage(templateImage, 0, 0);

  // Determine font size — scale down for very long names
  let fontSize = NAME_FONT_SIZE;
  ctx.font = `${fontSize}px "Alex Brush"`;
  let textWidth = ctx.measureText(recipientName).width;
  while (textWidth > MAX_NAME_WIDTH && fontSize > 30) {
    fontSize -= 2;
    ctx.font = `${fontSize}px "Alex Brush"`;
    textWidth = ctx.measureText(recipientName).width;
  }

  // Draw the name
  ctx.fillStyle = NAME_FONT_COLOR;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(recipientName, NAME_CENTER_X, NAME_CENTER_Y);

  // Generate & draw QR code — white modules on transparent background
  const verifyUrl = `${CERT_VERIFICATION_BASE}/${certId}`;
  const qrData = QRCode.create(verifyUrl, { errorCorrectionLevel: 'M' });
  const modules = qrData.modules;
  const moduleCount = modules.size;
  const moduleSize = QR_SIZE / moduleCount;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
  for (let row = 0; row < moduleCount; row++) {
    for (let col = 0; col < moduleCount; col++) {
      if (modules.get(row, col)) {
        ctx.fillRect(
          QR_X + col * moduleSize,
          QR_Y + row * moduleSize,
          moduleSize,
          moduleSize
        );
      }
    }
  }

  // Draw cert code below QR
  const certCode = makeCertCode(certId);
  ctx.font = '22px sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(certCode, QR_X + QR_SIZE / 2, QR_Y + QR_SIZE + 10);

  return canvas.toBuffer('image/png');
}

// ─── Email builder ──────────────────────────────────────────────────────────────
function buildCertificateEmail(fullName, certId, certPngBuffer) {
  const firstName = fullName.split(' ')[0];
  const verifyUrl = `${CERT_VERIFICATION_BASE}/${certId}`;
  const storageBase = 'https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/events';
  const mainPosterUrl = `${storageBase}/gen-ai-to-z-main-poster.png`;

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Certificate — Gen AI to Z</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0a0a0a; color: #ffffff; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">

    <!-- Header -->
    <div style="text-align: center; margin-bottom: 32px;">
      <h1 style="font-size: 28px; font-weight: bold; background: linear-gradient(to right, #8b5cf6, #d946ef, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0;">
        Gen AI to Z
      </h1>
      <p style="color: #a1a1aa; margin-top: 8px; font-size: 14px;">A Career Summit in an AI-Driven World</p>
    </div>

    <!-- Main Poster -->
    <div style="text-align: center; margin-bottom: 28px;">
      <img src="${mainPosterUrl}" alt="Gen AI to Z" style="width: 100%; max-width: 560px; border-radius: 12px; border: 1px solid rgba(139, 92, 246, 0.3);" />
    </div>

    <!-- Certificate Banner -->
    <div style="text-align: center; background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(217, 70, 239, 0.3)); border: 1px solid rgba(139, 92, 246, 0.5); border-radius: 12px; padding: 24px; margin-bottom: 28px;">
      <p style="font-size: 30px; font-weight: 800; margin: 0; background: linear-gradient(to right, #c084fc, #f0abfc, #67e8f9); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🎓 YOUR CERTIFICATE IS HERE!</p>
      <p style="color: #d8b4fe; font-size: 15px; margin: 8px 0 0 0; font-weight: 600;">March 17, 2026 • UP Diliman</p>
    </div>

    <!-- Main Content -->
    <div style="background: linear-gradient(to bottom, rgba(139, 92, 246, 0.1), transparent); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 32px; margin-bottom: 24px;">
      <h2 style="font-size: 20px; margin: 0 0 16px 0;">Hey ${firstName}! 🎉</h2>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 16px 0;">
        Congratulations on attending <strong>Gen AI to Z: A Career Summit in an AI-Driven World</strong>! 🚀
      </p>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 16px 0;">
        Your Certificate of Participation is attached to this email as a PNG image. You can download it, share it on LinkedIn, or add it to your portfolio!
      </p>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 24px 0;">
        Your certificate includes a QR code that links to a <strong>permanent verification page</strong> — so anyone can confirm its authenticity.
      </p>

      <!-- Verify button -->
      <div style="text-align: center;">
        <a href="${verifyUrl}" style="display: inline-block; background: linear-gradient(to right, #8b5cf6, #d946ef); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 700; font-size: 15px;">
          🔍 Verify Certificate Online
        </a>
      </div>
    </div>

    <!-- Tips box -->
    <div style="background: rgba(139, 92, 246, 0.08); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
      <h3 style="color: #c084fc; font-size: 15px; margin: 0 0 12px 0;">💡 Share your achievement</h3>
      <ul style="color: #a1a1aa; font-size: 13px; line-height: 1.7; margin: 0; padding-left: 20px;">
        <li>Add to your <strong style="color: #d4d4d8;">LinkedIn profile</strong> under Certificates & Licenses</li>
        <li>Share on social media with <strong style="color: #d4d4d8;">#VibeCoderPH</strong> and <strong style="color: #d4d4d8;">#GenAItoZ</strong></li>
        <li>Include in your <strong style="color: #d4d4d8;">resume or portfolio</strong></li>
      </ul>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding-top: 24px; border-top: 1px solid rgba(139, 92, 246, 0.2);">
      <p style="color: #52525b; font-size: 13px; margin: 0 0 8px 0;">
        <strong style="color: #8b5cf6;">Vibe Coder Philippines</strong> · <a href="https://www.vibecoders.ph" style="color: #8b5cf6; text-decoration: none;">vibecoders.ph</a>
      </p>
      <p style="color: #3f3f46; font-size: 11px; margin: 0;">
        This certificate is issued to ${fullName} for attending ${EVENT_TITLE} on ${EVENT_DATE}.<br>
        Certificate ID: ${certId}
      </p>
    </div>
  </div>
</body>
</html>`;

  return {
    from: 'Vibe Coder PH <noreply@updates.vibecoders.ph>',
    subject: `🎓 Your Certificate — Gen AI to Z, March 17`,
    html: htmlBody,
    attachments: [
      {
        filename: `certificate-gen-ai-to-z-${firstName.toLowerCase().replace(/\s+/g, '-')}.png`,
        content: certPngBuffer,
        type: 'image/png',
      },
    ],
  };
}

// ─── Main ───────────────────────────────────────────────────────────────────────
console.log('\n📜 Certificate Generation & Send Script');
console.log('========================================');
console.log(`Mode: ${DRY_RUN ? '🧪 DRY RUN (use --send to actually send)' : '🚀 LIVE SEND'}`);
if (LIMIT) console.log(`Limit: ${LIMIT} recipients`);
if (SINGLE_EMAIL) console.log(`Single recipient: ${SINGLE_EMAIL}`);
console.log();

// Fetch checked-in attendees
let query = supabase
  .from('event_registrations')
  .select('id, full_name, email')
  .eq('event_slug', EVENT_SLUG)
  .eq('checked_in', true)
  .order('full_name');

if (SINGLE_EMAIL) {
  query = query.ilike('email', SINGLE_EMAIL);
}

const { data: attendees, error: fetchError } = await query;

if (fetchError) {
  console.error('❌ Failed to fetch attendees:', fetchError.message);
  process.exit(1);
}

if (!attendees || attendees.length === 0) {
  console.error('❌ No checked-in attendees found');
  process.exit(1);
}

const recipients = LIMIT ? attendees.slice(0, LIMIT) : attendees;
console.log(`Found ${attendees.length} checked-in attendees. Processing ${recipients.length}.`);

// Check which have already received certificates (avoid re-send)
const { data: existingCerts } = await supabase
  .from('event_certificates')
  .select('registration_id')
  .eq('event_slug', EVENT_SLUG)
  .eq('revoked', false);

const alreadySent = new Set((existingCerts || []).map(c => c.registration_id));
const toProcess = recipients.filter(a => !alreadySent.has(a.id));
const skipped = recipients.length - toProcess.length;

if (skipped > 0) {
  console.log(`⏭️  Skipping ${skipped} already-sent certificates.`);
}
console.log(`📤 Will process ${toProcess.length} recipients.\n`);

// ─── Process each recipient ────────────────────────────────────────────────────
let sent = 0;
let failed = 0;
const errors = [];

for (const attendee of toProcess) {
  try {
    process.stdout.write(`[${sent + failed + 1}/${toProcess.length}] ${attendee.full_name} <${attendee.email}>... `);

    // 1. Create cert record in DB to get UUID first (needed for QR code)
    let certId;
    if (!DRY_RUN) {
      // Insert cert record, read back UUID, derive cert_code and update
      const { data: certRecord, error: insertError } = await supabase
        .from('event_certificates')
        .insert({
          event_slug: EVENT_SLUG,
          registration_id: attendee.id,
          recipient_name: attendee.full_name,
          recipient_email: attendee.email,
          issued_at: new Date().toISOString(),
        })
        .select('id')
        .single();

      if (!insertError && certRecord) {
        // Derive and store the human-readable code
        const code = makeCertCode(certRecord.id);
        await supabase.from('event_certificates').update({ cert_code: code }).eq('id', certRecord.id);
      }

      if (insertError) {
        throw new Error(`DB insert failed: ${insertError.message}`);
      }
      certId = certRecord.id;
    } else {
      certId = '00000000-0000-0000-0000-000000000000'; // placeholder for dry run
    }

    // 2. Generate certificate PNG
    const certBuffer = generateCertificate(attendee.full_name, certId);

    // 3. Send email
    if (!DRY_RUN) {
      const emailPayload = buildCertificateEmail(attendee.full_name, certId, certBuffer);
      const { error: sendError } = await resend.emails.send({
        ...emailPayload,
        to: attendee.email,
      });

      if (sendError) {
        // Rollback: delete the cert record if email fails
        await supabase.from('event_certificates').delete().eq('id', certId);
        throw new Error(`Email send failed: ${sendError.message}`);
      }
    } else {
      // In dry run, save one sample PNG for visual inspection
      if (sent === 0) {
        const { writeFileSync } = await import('fs');
        const samplePath = join(projectRoot, 'public/events/gen-ai-to-z/cert-sample-output.png');
        writeFileSync(samplePath, certBuffer);
        console.log(`\n  💾 Sample saved to: public/events/gen-ai-to-z/cert-sample-output.png`);
        process.stdout.write('  ');
      }
    }

    console.log(`✅`);
    sent++;

    // Rate limit: Resend allows 2 req/sec on free tier
    if (!DRY_RUN && toProcess.length > 1) {
      await new Promise(resolve => setTimeout(resolve, 550));
    }
  } catch (err) {
    console.log(`❌ ${err.message}`);
    errors.push({ name: attendee.full_name, email: attendee.email, error: err.message });
    failed++;
  }
}

// ─── Summary ───────────────────────────────────────────────────────────────────
console.log('\n========================================');
console.log(`📊 ${DRY_RUN ? 'Dry run' : 'Send'} complete`);
console.log(`   ✅ Processed: ${sent}`);
console.log(`   ⏭️  Skipped (already sent): ${skipped}`);
if (failed > 0) {
  console.log(`   ❌ Failed: ${failed}`);
  console.log('\nFailed recipients:');
  for (const e of errors) {
    console.log(`   - ${e.name} <${e.email}>: ${e.error}`);
  }
}
if (DRY_RUN) {
  console.log('\n💡 This was a dry run. Run with --send to actually send emails.');
}

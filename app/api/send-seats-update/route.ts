import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY is not configured');
  return new Resend(apiKey);
}

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) throw new Error('Missing Supabase configuration');
  return createClient(supabaseUrl, serviceRoleKey);
}

/**
 * Partner org matching patterns — maps org names to SQL ILIKE patterns
 */
const PARTNER_ORG_PATTERNS: Record<string, string[]> = {
  'UP Data Science Society': ['%UP Data Science%', '%UPDSS%'],
  'GDG on Campus PUP': ['%GDG%PUP%', '%GDGoC PUP%', '%GDGoC-PUP%', '%Google Developer Group%PUP%'],
  'GDG on Campus NU Manila': ['%GDG%National University%', '%GDG%NU Manila%', '%GDGoC NU%', '%GDGoC-NU%', '%Google Developer Group%NU%', '%GDG on Campus NU%', '%GDGOC%NU%', '%GDGoC National%'],
  'AWS Cloud Club PUP': ['%AWS Cloud Club PUP%', '%AWS%Cloud%Club%PUP%'],
  'AWS Cloud Clubs Philippines': ['%AWS Cloud Club%Philippines%'],
  'AWS UG e:Novators PH': ['%AWS%eNovators%', '%AWS%e:Novators%', '%AWS User Group%', '%AWS%Novator%'],
  'Microsoft Azure Community PH': ['%Microsoft Azure%', '%Azure Community%'],
  'Power BI Pilipinas': ['%Power BI%'],
  'DEVCON Manila': ['%DEVCON%'],
  'JPCS TIP QC': ['%JPCS%TIP%', '%JPCS TIP%'],
  'JPCS FEU Tech': ['%JPCS%FEU%'],
  'COMSA – EARIST': ['%COMSA%', '%Computer Science Student Association%'],
  'PUP ASCII': ['%ASCII%', '%PUP ASCII%'],
  'Hack Club Philippines': ['%Hack Club%'],
  'FWDP': ['%FWDP%', '%Filipino Web Dev%', '%Filipino Web Development%'],
};

function buildSeatsUpdateEmail(fullName: string, isPartnerOrg: boolean, orgName?: string): string {
  const firstName = fullName.split(' ')[0];
  const posterUrl = 'https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/events/gen-ai-to-z-poster.png';

  const partnerOrgNote = isPartnerOrg && orgName
    ? `<p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 20px 0;">
        As part of <strong style="color: #c084fc;">${orgName}'s delegation</strong>, we want to make sure you and your org-mates get seats. Coordinate with your group and plan to arrive together early!
      </p>`
    : '';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Limited Seats — Arrive Early! | Gen AI to Z</title>
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
    <div style="text-align: center; margin-bottom: 24px;">
      <a href="https://www.vibecoders.ph/events/gen-ai-to-z">
        <img src="${posterUrl}" alt="Gen AI to Z: A Career Summit in an AI-Driven World — March 17, 2026 at UP Diliman" style="width: 100%; max-width: 560px; height: auto; border-radius: 12px; border: 1px solid rgba(139, 92, 246, 0.3);" />
      </a>
    </div>

    <!-- LIMITED SEATS Banner -->
    <div style="text-align: center; background: linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(234, 88, 12, 0.25)); border: 1px solid rgba(239, 68, 68, 0.5); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
      <p style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #fca5a5; margin: 0 0 8px 0;">⚠️ Important Update</p>
      <p style="font-size: 28px; font-weight: 800; margin: 0; color: #ffffff;">Limited Seats Only</p>
      <p style="font-size: 15px; color: #fca5a5; margin: 8px 0 0 0;">First-come, first-served — arrive early!</p>
    </div>

    <!-- Main Content -->
    <div style="background: linear-gradient(to bottom, rgba(139, 92, 246, 0.1), transparent); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 32px;">
      <h2 style="font-size: 20px; margin: 0 0 16px 0;">Hi ${firstName}! 👋</h2>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 20px 0;">
        We're thrilled by the overwhelming response — <strong style="color: #c084fc;">over 500 people</strong> have registered for Gen AI to Z! 🎉
      </p>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 20px 0;">
        Due to the high demand, <strong>seating inside the David M. Consunji Theater is limited to 250</strong>. Entry will be on a <strong>first-come, first-served basis</strong>. We strongly encourage you to arrive early to secure your seat.
      </p>

      ${partnerOrgNote}

      <!-- Key Info Card -->
      <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #f87171; margin: 0 0 16px 0;">🚪 Doors &amp; Seating</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="color: #a1a1aa; padding: 8px 0; vertical-align: top; width: 30px;">📝</td>
            <td style="color: #d4d4d8; padding: 8px 0;"><strong>Registration opens at 7:00 AM</strong> — line up early!</td>
          </tr>
          <tr>
            <td style="color: #a1a1aa; padding: 8px 0; vertical-align: top;">⏰</td>
            <td style="color: #d4d4d8; padding: 8px 0;"><strong>Program starts at exactly 8:00 AM</strong></td>
          </tr>
          <tr>
            <td style="color: #a1a1aa; padding: 8px 0; vertical-align: top;">💺</td>
            <td style="color: #d4d4d8; padding: 8px 0;"><strong>250 theater seats</strong> — once full, remaining attendees can enjoy the lobby area with sponsor booths</td>
          </tr>
          <tr>
            <td style="color: #a1a1aa; padding: 8px 0; vertical-align: top;">🪪</td>
            <td style="color: #d4d4d8; padding: 8px 0;">Bring a <strong>valid ID</strong> for check-in</td>
          </tr>
        </table>
      </div>

      <!-- Event Details Card -->
      <div style="background: rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #8b5cf6; margin: 0 0 16px 0;">📋 Event Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="color: #a1a1aa; padding: 6px 0; vertical-align: top; width: 30px;">📅</td>
            <td style="color: #d4d4d8; padding: 6px 0;"><strong>March 17, 2026</strong> (Tuesday)</td>
          </tr>
          <tr>
            <td style="color: #a1a1aa; padding: 6px 0; vertical-align: top;">📍</td>
            <td style="color: #d4d4d8; padding: 6px 0;"><strong>David M. Consunji Theater</strong><br>Institute of Civil Engineering (ICE), UP Diliman, Quezon City</td>
          </tr>
          <tr>
            <td style="color: #a1a1aa; padding: 6px 0; vertical-align: top;">💰</td>
            <td style="color: #d4d4d8; padding: 6px 0;"><strong>FREE admission</strong></td>
          </tr>
        </table>
      </div>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 16px 0;">
        Get ready for insightful talks, hands-on workshops, and conversations with industry leaders on how AI is reshaping careers across every field.
      </p>

      <!-- CTA -->
      <div style="text-align: center; margin: 32px 0 16px 0;">
        <a href="https://www.vibecoders.ph/events/gen-ai-to-z" style="display: inline-block; background: linear-gradient(to right, #8b5cf6, #d946ef); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
          View Full Schedule
        </a>
      </div>
    </div>

    <!-- Follow Us -->
    <div style="text-align: center; margin-top: 24px; padding: 20px;">
      <p style="color: #a1a1aa; font-size: 13px; margin: 0 0 16px 0;">Follow us for updates and announcements</p>
      <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
        <tr>
          <td align="center" style="padding: 0 14px;">
            <a href="https://www.facebook.com/vibecodersph" style="text-decoration: none;">
              <img src="https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/icons/facebook.png" alt="Facebook" width="32" height="32" style="display: block; border: 0;" />
            </a>
          </td>
          <td align="center" style="padding: 0 14px;">
            <a href="https://www.instagram.com/vibecodersph" style="text-decoration: none;">
              <img src="https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/icons/instagram.png" alt="Instagram" width="32" height="32" style="display: block; border: 0;" />
            </a>
          </td>
          <td align="center" style="padding: 0 14px;">
            <a href="https://www.tiktok.com/@vibecodersph_" style="text-decoration: none;">
              <img src="https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/icons/tiktok.png" alt="TikTok" width="32" height="32" style="display: block; border: 0;" />
            </a>
          </td>
        </tr>
      </table>
      <p style="color: #71717a; font-size: 13px; margin: 12px 0 0 0;">@vibecodersph</p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
      <p style="color: #a1a1aa; font-size: 13px; margin: 0 0 8px 0; font-weight: 600;">
        See you on March 17! 🚀
      </p>
      <p style="color: #71717a; font-size: 12px; margin: 0 0 4px 0;">
        Organized by EMC² Fraternity &amp; Vibe Coders PH
      </p>
      <p style="color: #52525b; font-size: 11px; margin: 16px 0 0 0;">
        You're receiving this because you registered for Gen AI to Z.<br>
        If you have questions, reply to this email or contact us at <a href="mailto:hello@vibecoders.ph" style="color: #8b5cf6;">hello@vibecoders.ph</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const { adminKey, dryRun, testEmail, partnersOnly } = await request.json();
    const expectedKey = process.env.ADMIN_API_KEY;

    if (!expectedKey || adminKey !== expectedKey) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const resend = getResendClient();
    const supabase = getSupabaseClient();

    // ── Test mode: send one test email ──
    if (testEmail) {
      let recipientName = 'Friend';
      const { data: registrant } = await supabase
        .from('event_registrations')
        .select('full_name')
        .eq('email', testEmail)
        .eq('event_slug', 'gen-ai-to-z')
        .single();

      if (registrant?.full_name) {
        recipientName = registrant.full_name;
      }

      const { data, error } = await resend.emails.send({
        from: 'Vibe Coders PH <noreply@updates.vibecoders.ph>',
        to: testEmail,
        replyTo: 'hello@vibecoders.ph',
        subject: `[TEST] ⚠️ Limited Seats — Arrive Early! | Gen AI to Z Summit`,
        html: buildSeatsUpdateEmail(recipientName, true, 'Your Org'),
        tags: [
          { name: 'type', value: 'seats-update-test' },
          { name: 'event', value: 'gen-ai-to-z' },
        ],
      });

      if (error) {
        return NextResponse.json(
          { error: `Failed to send test email: ${error.message}` },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        test: true,
        sentTo: testEmail,
        recipientName,
        emailId: data?.id,
      });
    }

    // ── Fetch registrants ──
    const { data: registrants, error: dbError } = await supabase
      .from('event_registrations')
      .select('id, full_name, email, organization, status')
      .eq('event_slug', 'gen-ai-to-z')
      .in('status', ['confirmed', 'pending']);

    if (dbError) {
      return NextResponse.json({ error: 'Failed to fetch registrants' }, { status: 500 });
    }

    if (!registrants || registrants.length === 0) {
      return NextResponse.json({ success: true, message: 'No registrants found', sent: 0 });
    }

    // ── Match partner orgs ──
    function matchPartnerOrg(org: string | null): string | null {
      if (!org) return null;
      const orgLower = org.toLowerCase();
      for (const [orgName, patterns] of Object.entries(PARTNER_ORG_PATTERNS)) {
        for (const pattern of patterns) {
          const cleanPattern = pattern.replace(/%/g, '').toLowerCase();
          if (orgLower.includes(cleanPattern)) {
            return orgName;
          }
        }
      }
      return null;
    }

    // Build recipient list with partner org info
    const recipients = registrants.map(r => ({
      ...r,
      partnerOrg: matchPartnerOrg(r.organization),
    }));

    const partnerRecipients = recipients.filter(r => r.partnerOrg);
    const targetRecipients = partnersOnly ? partnerRecipients : recipients;

    // Dry run
    if (dryRun) {
      const orgCounts: Record<string, number> = {};
      partnerRecipients.forEach(r => {
        if (r.partnerOrg) {
          orgCounts[r.partnerOrg] = (orgCounts[r.partnerOrg] || 0) + 1;
        }
      });

      return NextResponse.json({
        success: true,
        dryRun: true,
        partnersOnly: !!partnersOnly,
        totalRegistrants: registrants.length,
        totalPartnerOrg: partnerRecipients.length,
        targetRecipients: targetRecipients.length,
        partnerOrgBreakdown: Object.entries(orgCounts)
          .sort((a, b) => b[1] - a[1])
          .map(([org, count]) => ({ org, count })),
        recipients: targetRecipients.map(r => ({
          name: r.full_name,
          email: r.email,
          org: r.organization,
          partnerOrg: r.partnerOrg,
          status: r.status,
        })),
      });
    }

    // ── Send emails in batches ──
    const BATCH_SIZE = 100;
    const results = { sent: 0, failed: 0, errors: [] as string[] };

    for (let i = 0; i < targetRecipients.length; i += BATCH_SIZE) {
      const batch = targetRecipients.slice(i, i + BATCH_SIZE);

      const emailPayloads = batch.map(r => ({
        from: 'Vibe Coders PH <noreply@updates.vibecoders.ph>' as const,
        to: r.email,
        replyTo: 'hello@vibecoders.ph',
        subject: '⚠️ Limited Seats — Arrive Early! | Gen AI to Z Summit, March 17',
        html: buildSeatsUpdateEmail(r.full_name, !!r.partnerOrg, r.partnerOrg || undefined),
        tags: [
          { name: 'type', value: 'seats-update' },
          { name: 'event', value: 'gen-ai-to-z' },
        ],
      }));

      try {
        const { data, error } = await resend.batch.send(emailPayloads);
        if (error) {
          results.failed += batch.length;
          results.errors.push(`Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${error.message}`);
        } else {
          results.sent += data?.data?.length || batch.length;
        }
      } catch (batchError) {
        results.failed += batch.length;
        results.errors.push(`Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${String(batchError)}`);
      }
    }

    return NextResponse.json({
      success: true,
      partnersOnly: !!partnersOnly,
      totalRecipients: targetRecipients.length,
      sent: results.sent,
      failed: results.failed,
      errors: results.errors.length > 0 ? results.errors : undefined,
    });
  } catch (error) {
    console.error('Send seats update error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

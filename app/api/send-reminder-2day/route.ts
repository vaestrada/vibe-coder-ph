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

function buildEmail(fullName: string): string {
  const firstName = fullName.split(' ')[0];
  const posterUrl = 'https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/events/gen-ai-to-z-poster.png';
  const rulesUrl = 'https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/events/rules-and-reminders.png';
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>2 Days to Go — Gen AI to Z!</title>
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

    <!-- Countdown Banner -->
    <div style="text-align: center; background: linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(217, 70, 239, 0.25)); border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
      <p style="font-size: 36px; font-weight: 800; margin: 0; background: linear-gradient(to right, #f87171, #f0abfc); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">2 Days to Go! 🔥</p>
      <p style="color: #fca5a5; font-size: 14px; margin: 8px 0 0 0; font-weight: 600;">This Tuesday, March 17 — Are you ready?</p>
    </div>

    <!-- Main Content -->
    <div style="background: linear-gradient(to bottom, rgba(139, 92, 246, 0.1), transparent); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 32px;">
      <h2 style="font-size: 20px; margin: 0 0 16px 0;">Hey ${firstName}! 👋</h2>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 20px 0;">
        The wait is almost over! <strong>Gen AI to Z</strong> is <strong>2 days away</strong>. Here's everything you need to prepare for Tuesday.
      </p>

      <!-- Speaker Lineup -->
      <div style="background: rgba(139, 92, 246, 0.08); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #8b5cf6; margin: 0 0 16px 0;">🎤 Full Speaker Lineup</h3>

        <p style="color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px 0;">Opening</p>
        <ul style="color: #d4d4d8; line-height: 1.8; margin: 0 0 16px 0; padding-left: 20px;">
          <li><strong>Dean Maria Antonia N. Tanchuling</strong> — Opening Remarks</li>
        </ul>

        <p style="color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px 0;">AI Leadership Talks</p>
        <ul style="color: #d4d4d8; line-height: 1.8; margin: 0 0 16px 0; padding-left: 20px;">
          <li><strong>Jimbo Jose Emmanuel Reverente</strong> — AI innovation, research commercialization & technopreneurship</li>
          <li><strong>Lois Anne Leal</strong> — AI in earth observation & satellite applications</li>
          <li><strong>Jaemark Tordecilla</strong> — Generative AI, media innovation & responsible AI use</li>
        </ul>

        <p style="color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px 0;">Creative AI Talks</p>
        <ul style="color: #d4d4d8; line-height: 1.8; margin: 0 0 16px 0; padding-left: 20px;">
          <li><strong>Darryll Rapacon</strong> — AI-assisted filmmaking & creative workflows</li>
          <li><strong>Rodson Verr Suarez</strong> — Balancing AI tools with creative intent</li>
        </ul>

        <p style="color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px 0;">Industry AI Talks</p>
        <ul style="color: #d4d4d8; line-height: 1.8; margin: 0 0 0 0; padding-left: 20px;">
          <li><strong>Jean Madrid</strong> — AI-driven business transformation & scaling organizations</li>
          <li><strong>Bryl Lim</strong> — AI tools & career leverage in enterprise</li>
          <li><strong>Aurelien Chu</strong> — AI education & workforce development</li>
          <li><strong>Jayson Cunanan, Ph.D.</strong> — Applied AI & startup building</li>
        </ul>

        <p style="color: #a1a1aa; font-size: 13px; margin: 16px 0 0 0; text-align: center;">
          + <strong style="color: #c084fc;">3 panel discussions</strong> &amp; <strong style="color: #c084fc;">community Show &amp; Tell</strong>
        </p>
      </div>

      <!-- Day-Of Timeline -->
      <div style="background: rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #06b6d4; margin: 0 0 16px 0;">⏰ Day-of Timeline</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="color: #8b5cf6; padding: 8px 0; font-weight: bold; width: 100px; vertical-align: top; font-family: monospace;">7:00 AM</td>
            <td style="color: #d4d4d8; padding: 8px 0;">🚪 Doors open — Registration starts</td>
          </tr>
          <tr>
            <td style="color: #8b5cf6; padding: 8px 0; font-weight: bold; vertical-align: top; font-family: monospace;">8:00 AM</td>
            <td style="color: #d4d4d8; padding: 8px 0;">🎬 Program starts <strong>sharp!</strong></td>
          </tr>
          <tr>
            <td style="color: #8b5cf6; padding: 8px 0; font-weight: bold; vertical-align: top; font-family: monospace;">12:00 PM</td>
            <td style="color: #d4d4d8; padding: 8px 0;">🍱 Lunch break — BYOB or visit nearby canteens</td>
          </tr>
          <tr>
            <td style="color: #8b5cf6; padding: 8px 0; font-weight: bold; vertical-align: top; font-family: monospace;">1:10 PM</td>
            <td style="color: #d4d4d8; padding: 8px 0;">🔥 Afternoon talks, panels & raffle draws</td>
          </tr>
          <tr>
            <td style="color: #8b5cf6; padding: 8px 0; font-weight: bold; vertical-align: top; font-family: monospace;">5:00 PM</td>
            <td style="color: #d4d4d8; padding: 8px 0;">📸 Networking & photos</td>
          </tr>
        </table>
      </div>

      <!-- Rules & Reminders Image -->
      <div style="text-align: center; margin-bottom: 24px;">
        <img src="${rulesUrl}" alt="Rules and Reminders: Bring Your Own Baon, First Come First Serve, Please Follow Rules" style="width: 100%; max-width: 500px; height: auto; border-radius: 12px; border: 1px solid rgba(139, 92, 246, 0.2);" />
      </div>

      <!-- Checklist -->
      <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #22c55e; margin: 0 0 12px 0;">✅ Pack Tonight Checklist</h3>
        <ul style="color: #d4d4d8; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li>✅ Valid ID for check-in</li>
          <li>✅ Baon or lunch money (nearby: ICE Canteen, NIGS Canteen, CS Library Canteen)</li>
          <li>✅ Notebook or laptop for notes</li>
          <li>✅ Comfortable outfit — it's a full day!</li>
          <li>✅ Fully charged phone</li>
        </ul>
      </div>

      <!-- Venue Directions -->
      <div style="background: rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #f59e0b; margin: 0 0 12px 0;">📍 How to Get There</h3>
        <ol style="color: #d4d4d8; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li>Ride <strong>UP Ikot</strong> and get off in front of <strong>NIGS</strong> (National Institute of Geological Sciences)</li>
          <li>Cross towards <strong>Engg Complex</strong> and walk uphill to <strong>DMMME</strong></li>
          <li>Continue past <strong>Dept. of Chemical Engineering (DChE)</strong> and turn right at the end</li>
          <li>Enter the <strong>Institute of Civil Engineering (ICE)</strong> through the main doors — head to the lobby to register!</li>
        </ol>
        <div style="text-align: center; margin-top: 16px;">
          <a href="https://www.google.com/maps/dir/?api=1&destination=Institute+of+Civil+Engineering,+David+M.+Consunji+Theater,+T.H.+Pardo+de+Tavera+St,+Diliman,+Quezon+City,+1101+Metro+Manila" style="display: inline-block; background: linear-gradient(to right, #f59e0b, #f97316); color: #ffffff; text-decoration: none; padding: 10px 24px; border-radius: 8px; font-weight: 600; font-size: 14px;">
            📍 Open in Google Maps
          </a>
        </div>
      </div>

      <!-- Urgency -->
      <div style="text-align: center; background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(239, 68, 68, 0.05)); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="color: #fca5a5; font-size: 15px; font-weight: 600; margin: 0;">
          🚨 Seats are filling up fast — arrive early to guarantee your spot!
        </p>
      </div>

      <!-- CTA -->
      <div style="text-align: center; margin: 32px 0 16px 0;">
        <a href="https://www.vibecoders.ph/events/gen-ai-to-z" style="display: inline-block; background: linear-gradient(to right, #8b5cf6, #d946ef); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
          View Full Program
        </a>
      </div>
    </div>

    <!-- Social CTA -->
    <div style="text-align: center; margin-top: 32px; padding: 24px; background: rgba(139, 92, 246, 0.06); border: 1px solid rgba(139, 92, 246, 0.15); border-radius: 12px;">
      <p style="color: #d4d4d8; font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">
        📣 Share the excitement!
      </p>
      <p style="color: #a1a1aa; font-size: 14px; line-height: 1.6; margin: 0 0 12px 0;">
        Invite your friends! Walk-ins are welcome but seats are limited — come early!
      </p>
      <p style="color: #d4d4d8; font-size: 14px; margin: 0;">
        Follow <strong style="color: #8b5cf6;">@vibecodersph</strong> for live updates on the day
      </p>
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
        See you on Tuesday! 🚀
      </p>
      <p style="color: #71717a; font-size: 12px; margin: 0 0 4px 0;">
        Organized by EMC² Fraternity & Vibe Coders PH
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
    const { adminKey, dryRun, testEmail } = await request.json();
    const expectedKey = process.env.ADMIN_API_KEY;

    if (!expectedKey || adminKey !== expectedKey) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const resend = getResendClient();

    // Test mode
    if (testEmail) {
      const supabase = getSupabaseClient();
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

        const { data: _data, error } = await resend.emails.send({
        from: 'Vibe Coders PH <noreply@updates.vibecoders.ph>',
        to: testEmail,
        replyTo: 'hello@vibecoders.ph',
        subject: `[TEST ${new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' })}] 2 Days to Go! 🔥 Gen AI to Z — This Tuesday, March 17!`,
        html: buildEmail(recipientName),
        tags: [
          { name: 'type', value: '2day-reminder-test' },
          { name: 'event', value: 'gen-ai-to-z' },
        ],
      });

      if (error) {
        return NextResponse.json({ error: `Failed: ${error.message}` }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        test: true,
        sentTo: testEmail,
        recipientName,
        emailId: _data?.id,
      });
    }

    // Production mode
    const supabase = getSupabaseClient();
    const { data: registrants, error: dbError } = await supabase
      .from('event_registrations')
      .select('id, full_name, email, status')
      .eq('event_slug', 'gen-ai-to-z')
      .in('status', ['confirmed', 'pending']);

    if (dbError) {
      return NextResponse.json({ error: 'Failed to fetch registrants' }, { status: 500 });
    }

    if (!registrants || registrants.length === 0) {
      return NextResponse.json({ success: true, message: 'No registrants found', sent: 0 });
    }

    if (dryRun) {
      return NextResponse.json({
        success: true,
        dryRun: true,
        totalRecipients: registrants.length,
        confirmed: registrants.filter(r => r.status === 'confirmed').length,
        pending: registrants.filter(r => r.status === 'pending').length,
        recipients: registrants.map(r => ({
          name: r.full_name,
          email: r.email,
          status: r.status,
        })),
      });
    }

    // Send in batches of 100
    const BATCH_SIZE = 100;
    const results = { sent: 0, failed: 0, errors: [] as string[] };

    for (let i = 0; i < registrants.length; i += BATCH_SIZE) {
      const batch = registrants.slice(i, i + BATCH_SIZE);

      const emailPayloads = batch.map(registrant => ({
        from: 'Vibe Coders PH <noreply@updates.vibecoders.ph>',
        to: registrant.email,
        replyTo: 'hello@vibecoders.ph',
        subject: '2 Days to Go! 🔥 Gen AI to Z — This Tuesday, March 17!',
        html: buildEmail(registrant.full_name),
        tags: [
          { name: 'type', value: '2day-reminder' },
          { name: 'event', value: 'gen-ai-to-z' },
        ],
      }));

      try {
        const { data, error } = await resend.batch.send(emailPayloads);
        if (error) {
          results.failed += batch.length;
          results.errors.push(`Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${error.message}`);
        } else {
          results.sent += batch.length;
        }
      } catch (batchError) {
        results.failed += batch.length;
        results.errors.push(`Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${String(batchError)}`);
      }
    }

    return NextResponse.json({
      success: true,
      totalRecipients: registrants.length,
      ...results,
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

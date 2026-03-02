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
 * Build the reminder email HTML for a registrant
 */
function buildReminderEmail(fullName: string): string {
  const firstName = fullName.split(' ')[0];
  const posterUrl = 'https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/events/gen-ai-to-z-poster.png';
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>See You at Gen AI to Z!</title>
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
    <div style="text-align: center; background: linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(217, 70, 239, 0.25)); border: 1px solid rgba(139, 92, 246, 0.4); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
      <p style="font-size: 36px; font-weight: 800; margin: 0; background: linear-gradient(to right, #c084fc, #f0abfc); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">2 Days to Go! 🔥</p>
    </div>

    <!-- Main Content -->
    <div style="background: linear-gradient(to bottom, rgba(139, 92, 246, 0.1), transparent); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 32px;">
      <h2 style="font-size: 20px; margin: 0 0 16px 0;">Hi ${firstName}! 👋</h2>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 20px 0;">
        We hope you're as excited as we are! <strong>Gen AI to Z: A Career Summit in an AI-Driven World</strong> is just <strong>2 days to go</strong>, and we can't wait to see you there.
      </p>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 24px 0;">
        Here's a quick recap of what to expect:
      </p>

      <!-- Event Details Card -->
      <div style="background: rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #8b5cf6; margin: 0 0 16px 0;">📋 Event Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="color: #a1a1aa; padding: 6px 0; vertical-align: top; width: 30px;">📅</td>
            <td style="color: #d4d4d8; padding: 6px 0;"><strong>March 17, 2026</strong> (Tuesday)</td>
          </tr>
          <tr>
            <td style="color: #a1a1aa; padding: 6px 0; vertical-align: top;">📝</td>
            <td style="color: #d4d4d8; padding: 6px 0;"><strong>Registration opens at 7:00 AM</strong></td>
          </tr>
          <tr>
            <td style="color: #a1a1aa; padding: 6px 0; vertical-align: top;">⏰</td>
            <td style="color: #d4d4d8; padding: 6px 0;"><strong>Event starts at exactly 8:00 AM</strong></td>
          </tr>
          <tr>
            <td style="color: #a1a1aa; padding: 6px 0; vertical-align: top;">📍</td>
            <td style="color: #d4d4d8; padding: 6px 0;"><strong>David M. Consunji Theater</strong><br>Institute of Civil Engineering (ICE), UP Diliman, Quezon City</td>
          </tr>
          <tr>
            <td style="color: #a1a1aa; padding: 6px 0; vertical-align: top;">💰</td>
            <td style="color: #d4d4d8; padding: 6px 0;"><strong>FREE admission</strong> — open to all</td>
          </tr>
        </table>
      </div>

      <!-- Reminders -->
      <div style="background: rgba(6, 182, 212, 0.08); border: 1px solid rgba(6, 182, 212, 0.2); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #06b6d4; margin: 0 0 12px 0;">🎒 Quick Reminders</h3>
        <ul style="color: #d4d4d8; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li>Bring a <strong>valid ID</strong> for check-in at the registration desk</li>
          <li><strong>Arrive early!</strong> Registration starts at 7:00 AM — the event begins at exactly 8:00 AM</li>
          <li>Wear something comfortable — it's going to be a full day of learning!</li>
          <li>Bring a notebook or laptop if you'd like to take notes</li>
          <li><strong>Bring your friends and family!</strong> Walk-ins are welcome — the more, the merrier 🎉</li>
          <li>Connect with fellow attendees — networking is half the fun!</li>
        </ul>
      </div>

      <!-- What to Expect -->
      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 16px 0;">
        Get ready for insightful talks, hands-on workshops, and conversations with industry leaders on how AI is reshaping careers across every field. Whether you're a student, professional, or career shifter — there's something for you.
      </p>

      <!-- CTA -->
      <div style="text-align: center; margin: 32px 0 16px 0;">
        <a href="https://www.vibecoders.ph/events/gen-ai-to-z" style="display: inline-block; background: linear-gradient(to right, #8b5cf6, #d946ef); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
          View Full Schedule
        </a>
      </div>
    </div>

    <!-- Share & Invite -->
    <div style="text-align: center; margin-top: 32px; padding: 24px; background: rgba(139, 92, 246, 0.06); border: 1px solid rgba(139, 92, 246, 0.15); border-radius: 12px;">
      <p style="color: #d4d4d8; font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">
        📣 Share this with friends & family!
      </p>
      <p style="color: #a1a1aa; font-size: 14px; line-height: 1.6; margin: 0 0 16px 0;">
        Know someone who'd benefit from this summit? Invite them!<br>
        Walk-ins are welcome — they can register or just show up on the day.
      </p>
      <p style="color: #d4d4d8; font-size: 14px; margin: 0;">
        Registration link: <a href="https://www.vibecoders.ph/events/gen-ai-to-z/register" style="color: #8b5cf6; text-decoration: underline; font-weight: 600;">vibecoders.ph/events/gen-ai-to-z/register</a>
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
        See you on March 17! 🚀
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
    // Authenticate with admin key
    const { adminKey, dryRun, testEmail } = await request.json();
    const expectedKey = process.env.ADMIN_API_KEY;

    if (!expectedKey || adminKey !== expectedKey) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const resend = getResendClient();

    // ── Test mode: send a single test email, pull real name from Supabase ──
    if (testEmail) {
      const supabase = getSupabaseClient();

      // Try to find the registrant's real name from Supabase
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

      try {
        const { data, error } = await resend.emails.send({
          from: 'Vibe Coders PH <noreply@updates.vibecoders.ph>',
          to: testEmail,
          replyTo: 'hello@vibecoders.ph',
          subject: `[TEST ${new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' })}] 2 Days to Go! 🚀 Gen AI to Z Summit — See You on March 17!`,
          html: buildReminderEmail(recipientName),
          tags: [
            { name: 'type', value: 'event-reminder-test' },
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
      } catch (testError) {
        return NextResponse.json(
          { error: `Test email error: ${String(testError)}` },
          { status: 500 }
        );
      }
    }

    // ── Production mode: send to all registrants ──
    const supabase = getSupabaseClient();

    // Get all confirmed AND pending registrants for gen-ai-to-z
    // (many registrants forget to verify their email but still intend to attend)
    const { data: registrants, error: dbError } = await supabase
      .from('event_registrations')
      .select('id, full_name, email, status')
      .eq('event_slug', 'gen-ai-to-z')
      .in('status', ['confirmed', 'pending']);

    if (dbError) {
      console.error('Failed to fetch registrants:', dbError);
      return NextResponse.json(
        { error: 'Failed to fetch registrants' },
        { status: 500 }
      );
    }

    if (!registrants || registrants.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No registrants found',
        sent: 0,
      });
    }

    const confirmed = registrants.filter(r => r.status === 'confirmed').length;
    const pending = registrants.filter(r => r.status === 'pending').length;

    // Dry run mode: just return the list without sending
    if (dryRun) {
      return NextResponse.json({
        success: true,
        dryRun: true,
        totalRecipients: registrants.length,
        confirmed,
        pending,
        recipients: registrants.map(r => ({
          name: r.full_name,
          email: r.email,
          status: r.status,
        })),
      });
    }

    // Send in batches of 100 (Resend batch limit)
    const BATCH_SIZE = 100;
    const results: { sent: number; failed: number; errors: string[] } = {
      sent: 0,
      failed: 0,
      errors: [],
    };

    for (let i = 0; i < registrants.length; i += BATCH_SIZE) {
      const batch = registrants.slice(i, i + BATCH_SIZE);

      const emailPayloads = batch.map(registrant => ({
        from: 'Vibe Coders PH <noreply@updates.vibecoders.ph>',
        to: registrant.email,
        replyTo: 'hello@vibecoders.ph',
        subject: '2 Days to Go! 🚀 Gen AI to Z Summit — See You on March 17!',
        html: buildReminderEmail(registrant.full_name),
        tags: [
          { name: 'type', value: 'event-reminder' },
          { name: 'event', value: 'gen-ai-to-z' },
        ],
      }));

      try {
        const { data, error } = await resend.batch.send(emailPayloads);

        if (error) {
          console.error(`Batch ${Math.floor(i / BATCH_SIZE) + 1} error:`, error);
          results.failed += batch.length;
          results.errors.push(`Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${error.message}`);
        } else {
          results.sent += data?.data?.length || batch.length;
        }
      } catch (batchError) {
        console.error(`Batch ${Math.floor(i / BATCH_SIZE) + 1} exception:`, batchError);
        results.failed += batch.length;
        results.errors.push(`Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${String(batchError)}`);
      }
    }

    return NextResponse.json({
      success: true,
      totalRecipients: registrants.length,
      confirmed,
      pending,
      sent: results.sent,
      failed: results.failed,
      errors: results.errors.length > 0 ? results.errors : undefined,
    });
  } catch (error) {
    console.error('Send reminder error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

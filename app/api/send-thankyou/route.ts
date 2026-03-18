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
  const storageBase = 'https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/events';
  const mainPosterUrl = `${storageBase}/gen-ai-to-z-main-poster.png`;
  const feedbackQrUrl = `${storageBase}/feedback-qr-v2.png`;
  const pixelQrUrl = `${storageBase}/pixel-qr-v2.png`;
  const feedbackFormUrl = 'https://vibe-coder-ph.vercel.app/events/gen-ai-to-z/feedback';
  const eventPageUrl = 'https://vibe-coder-ph.vercel.app/events/gen-ai-to-z';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You! Gen AI to Z</title>
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
      <a href="${eventPageUrl}">
        <img src="${mainPosterUrl}" alt="Gen AI to Z: A Career Summit in an AI-Driven World — March 17, 2026 at UP Diliman" style="width: 100%; max-width: 560px; height: auto; border-radius: 12px; border: 1px solid rgba(139, 92, 246, 0.3);" />
      </a>
    </div>

    <!-- THANK YOU Banner -->
    <div style="text-align: center; background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(217, 70, 239, 0.3)); border: 1px solid rgba(139, 92, 246, 0.5); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
      <p style="font-size: 36px; font-weight: 800; margin: 0; background: linear-gradient(to right, #c084fc, #f0abfc, #67e8f9); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">THANK YOU! 💜</p>
      <p style="color: #d8b4fe; font-size: 15px; margin: 8px 0 0 0; font-weight: 600;">March 17, 2026 • UP Diliman • 333 Checked In</p>
    </div>

    <!-- Main Content -->
    <div style="background: linear-gradient(to bottom, rgba(139, 92, 246, 0.1), transparent); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 32px;">
      <h2 style="font-size: 20px; margin: 0 0 16px 0;">Hey ${firstName}! 👋</h2>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 20px 0;">
        <strong>Gen AI to Z</strong> has officially wrapped, and we just wanted to say — <strong>THANK YOU</strong> for being part of it! 🎉
      </p>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 20px 0;">
        Whether you stayed from opening to closing or caught a few sessions in between, your presence made the summit truly special. We had <strong>333 people check in</strong> out of nearly <strong>800 registrants</strong> — and the energy inside the David M. Consunji Theater was incredible.
      </p>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 24px 0;">
        From thought-provoking AI leadership talks, to creative showcases, to industry panels, to the community Show &amp; Tell — you helped make this more than just an event. You made it a <strong>movement</strong>. 🚀
      </p>

      <!-- FEEDBACK FORM CTA -->
      <div style="background: linear-gradient(135deg, rgba(234, 179, 8, 0.12), rgba(217, 70, 239, 0.12)); border: 1px solid rgba(234, 179, 8, 0.35); border-radius: 12px; padding: 24px; margin-bottom: 24px; text-align: center;">
        <h3 style="font-size: 20px; color: #fbbf24; margin: 0 0 8px 0;">📝 WE WANT TO HEAR FROM YOU!</h3>
        <p style="color: #d4d4d8; font-size: 14px; line-height: 1.6; margin: 0 0 16px 0;">
          Your feedback helps us build even better events. It only takes 2–3 minutes!
        </p>
        <a href="${feedbackFormUrl}" style="display: inline-block; background: linear-gradient(to right, #eab308, #f59e0b); color: #0a0a0a; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 700; font-size: 16px; margin-bottom: 16px;">
          Share Your Feedback →
        </a>
        <div style="margin-top: 16px;">
          <p style="color: #a1a1aa; font-size: 12px; margin: 0 0 8px 0;">Or scan this QR code:</p>
          <img src="${feedbackQrUrl}" alt="Feedback Form QR Code" style="width: 180px; height: 180px; border-radius: 8px; border: 2px solid rgba(234, 179, 8, 0.3);" />
        </div>
      </div>

      <!-- CERTIFICATES -->
      <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.25); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 16px; color: #22c55e; margin: 0 0 10px 0;">🎓 Certificates Coming This Week!</h3>
        <p style="color: #d4d4d8; font-size: 14px; line-height: 1.7; margin: 0;">
          We'll be sending out <strong>e-certificates of attendance</strong> later this week. We just need to take a quick break and celebrate with the organizing team first! 🥳 Keep an eye on your inbox.
        </p>
      </div>

      <!-- SPONSORS -->
      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; color: #d4d4d8; margin: 0 0 16px 0; text-align: center;">🙏 This Summit Was Made Possible By</h3>

        <!-- Gold Sponsors -->
        <div style="background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.25); border-radius: 8px; padding: 20px; margin-bottom: 12px;">
          <h4 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #eab308; margin: 0 0 10px 0;">🥇 Gold Sponsors</h4>
          <p style="color: #d4d4d8; font-size: 15px; line-height: 2; margin: 0; text-align: center;">
            <strong>Alibaba Cloud</strong> &nbsp;•&nbsp; <strong>SP Madrid</strong> &nbsp;•&nbsp; <strong>PIXEL for Creators</strong> &nbsp;•&nbsp; <strong>InLife Foundation</strong> &nbsp;•&nbsp; <strong>Nature Spring</strong>
          </p>
        </div>

        <!-- Bronze Sponsors -->
        <div style="background: rgba(180, 83, 9, 0.08); border: 1px solid rgba(180, 83, 9, 0.25); border-radius: 8px; padding: 20px; margin-bottom: 12px;">
          <h4 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #d97706; margin: 0 0 10px 0;">🥉 Bronze Sponsors</h4>
          <p style="color: #d4d4d8; font-size: 15px; line-height: 2; margin: 0; text-align: center;">
            <strong>JoyRide</strong> &nbsp;•&nbsp; <strong>Eskwelabs</strong> &nbsp;•&nbsp; <strong>Tito&rsquo;s Latin BBQ &amp; Brew</strong> &nbsp;•&nbsp; <strong>FlowerStore.ph</strong> &nbsp;•&nbsp; <strong>Potico.ph</strong>
          </p>
        </div>

        <!-- Community & School Org Partners -->
        <div style="background: rgba(139, 92, 246, 0.06); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 8px; padding: 20px;">
          <h4 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #a78bfa; margin: 0 0 4px 0;">🤝 Community &amp; School Org Partners</h4>
          <p style="color: #71717a; font-size: 12px; margin: 0 0 14px 0;">This summit wouldn&rsquo;t have happened without our amazing partners!</p>
          <p style="color: #a1a1aa; font-size: 13px; line-height: 2; margin: 0; text-align: center;">
            UP Data Science Society &nbsp;•&nbsp;
            GDG on Campus PUP &nbsp;•&nbsp;
            GDG on Campus NU Manila &nbsp;•&nbsp;
            AWS Cloud Club PUP &nbsp;•&nbsp;
            AWS Cloud Clubs Philippines &nbsp;•&nbsp;
            AWS User Group e:Novators PH &nbsp;•&nbsp;
            Microsoft Azure Community PH &nbsp;•&nbsp;
            Power BI Pilipinas &nbsp;•&nbsp;
            DEVCON Manila &nbsp;•&nbsp;
            JPCS TIP QC &nbsp;•&nbsp;
            JPCS FEU Tech &nbsp;•&nbsp;
            COMSA &ndash; EARIST &nbsp;•&nbsp;
            PUP ASCII &nbsp;•&nbsp;
            Hack Club Philippines &nbsp;•&nbsp;
            FWDP &nbsp;•&nbsp;
            PSYSC
          </p>
        </div>
      </div>

      <!-- Organized By -->
      <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 16px; margin-bottom: 24px; text-align: center;">
        <p style="color: #a1a1aa; font-size: 13px; margin: 0;">
          Organized by <strong style="color: #d4d4d8;">EMC² Fraternity</strong> &amp; <strong style="color: #d4d4d8;">Vibe Coders PH</strong>
        </p>
      </div>

      <!-- FOLLOW PIXEL -->
      <div style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1)); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 12px; padding: 24px; margin-bottom: 24px; text-align: center;">
        <h3 style="font-size: 18px; color: #67e8f9; margin: 0 0 8px 0;">📱 Follow Us on PIXEL!</h3>
        <p style="color: #a1a1aa; font-size: 13px; margin: 0 0 16px 0;">
          Stay connected and get the latest updates from Vibe Coders PH and our community on PIXEL for Creators.
        </p>
        <img src="${pixelQrUrl}" alt="Follow us on PIXEL - QR Code" style="width: 180px; height: 180px; border-radius: 8px; border: 2px solid rgba(6, 182, 212, 0.3);" />
      </div>

      <!-- SEE YOU NEXT TIME -->
      <div style="text-align: center; background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(217, 70, 239, 0.15)); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 24px; margin-bottom: 16px;">
        <p style="color: #d4d4d8; font-size: 16px; line-height: 1.7; margin: 0 0 12px 0;">
          See you all at our future events! 🎯
        </p>
        <p style="font-size: 22px; font-weight: 700; margin: 0; background: linear-gradient(to right, #c084fc, #f0abfc); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Maybe Gen AI 2.0 Z? 👀
        </p>
      </div>

      <!-- View Event Page CTA -->
      <div style="text-align: center; margin: 24px 0 16px 0;">
        <a href="${eventPageUrl}" style="display: inline-block; background: linear-gradient(to right, #8b5cf6, #d946ef); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
          View Event Page &amp; Report
        </a>
      </div>
    </div>

    <!-- Follow Us -->
    <div style="text-align: center; margin-top: 32px; padding: 24px; background: rgba(139, 92, 246, 0.06); border: 1px solid rgba(139, 92, 246, 0.15); border-radius: 12px;">
      <p style="color: #d4d4d8; font-size: 14px; margin: 0 0 12px 0;">
        Follow <strong style="color: #8b5cf6;">@vibecodersph</strong> for updates
      </p>
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
        Thank you for being part of Gen AI to Z! 💜
      </p>
      <p style="color: #71717a; font-size: 12px; margin: 0 0 4px 0;">
        Organized by EMC&sup2; Fraternity &amp; Vibe Coders PH
      </p>
      <p style="color: #52525b; font-size: 11px; margin: 16px 0 0 0;">
        You&rsquo;re receiving this because you registered for Gen AI to Z.<br>
        If you have questions, reply to this email or contact us at <a href="mailto:hello@vibecoders.ph" style="color: #8b5cf6;">hello@vibecoders.ph</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const { adminKey, dryRun, testEmail, skipFirst } = await request.json();
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
        subject: `[TEST ${new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' })}] Thank You for Gen AI to Z! 💜 Certificates + Feedback`,
        html: buildEmail(recipientName),
        tags: [
          { name: 'type', value: 'post-event-thankyou-test' },
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validRegistrants = registrants.filter(r => emailRegex.test(r.email));
    const invalidCount = registrants.length - validRegistrants.length;

    if (dryRun) {
      return NextResponse.json({
        success: true,
        dryRun: true,
        totalRecipients: validRegistrants.length,
        invalidEmails: invalidCount,
        confirmed: validRegistrants.filter(r => r.status === 'confirmed').length,
        pending: validRegistrants.filter(r => r.status === 'pending').length,
      });
    }

    const BATCH_SIZE = 100;
    const BATCH_DELAY_MS = 1500;
    const skip = typeof skipFirst === 'number' ? skipFirst : 0;
    const toSend = skip > 0 ? validRegistrants.slice(skip) : validRegistrants;
    const results = { sent: 0, failed: 0, skipped: skip, invalidEmails: invalidCount, errors: [] as string[] };

    for (let i = 0; i < toSend.length; i += BATCH_SIZE) {
      const batch = toSend.slice(i, i + BATCH_SIZE);

      const emailPayloads = batch.map(registrant => ({
        from: 'Vibe Coders PH <noreply@updates.vibecoders.ph>',
        to: registrant.email,
        replyTo: 'hello@vibecoders.ph',
        subject: 'Thank You for Gen AI to Z! 💜 Certificates + Feedback',
        html: buildEmail(registrant.full_name),
        tags: [
          { name: 'type', value: 'post-event-thankyou' },
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

      if (i + BATCH_SIZE < toSend.length) {
        await new Promise(resolve => setTimeout(resolve, BATCH_DELAY_MS));
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

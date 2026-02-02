import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Create Resend client lazily to avoid build-time initialization
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
  try {
    const { email, fullName, verificationToken, eventSlug } = await request.json();

    if (!email || !fullName || !verificationToken || !eventSlug) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const resend = getResendClient();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vibecoders.ph';
    const verificationUrl = `${baseUrl}/api/verify-email?token=${verificationToken}&event=${eventSlug}`;
    
    const { data, error } = await resend.emails.send({
      from: 'Vibe Coders PH <noreply@updates.vibecoders.ph>',
      to: email,
      subject: 'Confirm your registration for Gen AI to Z',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirm Your Registration</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0a0a0a; color: #ffffff; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px;">
      <h1 style="font-size: 24px; font-weight: bold; background: linear-gradient(to right, #8b5cf6, #d946ef, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0;">
        Gen AI to Z
      </h1>
      <p style="color: #a1a1aa; margin-top: 8px;">A Career Guide in an AI-Driven Workplace</p>
    </div>
    
    <!-- Main Content -->
    <div style="background: linear-gradient(to bottom, rgba(139, 92, 246, 0.1), transparent); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 32px;">
      <h2 style="font-size: 20px; margin: 0 0 16px 0;">Hi ${fullName}! 👋</h2>
      
      <p style="color: #d4d4d8; line-height: 1.6; margin: 0 0 24px 0;">
        Thank you for registering for <strong>Gen AI to Z: A Career Guide in an AI-Driven Workplace</strong>. 
        Please confirm your email address to complete your registration.
      </p>
      
      <!-- CTA Button -->
      <div style="text-align: center; margin: 32px 0;">
        <a href="${verificationUrl}" style="display: inline-block; background: linear-gradient(to right, #8b5cf6, #d946ef); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
          Confirm My Registration
        </a>
      </div>
      
      <!-- Event Details -->
      <div style="background: rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 20px; margin-top: 24px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #8b5cf6; margin: 0 0 12px 0;">Event Details</h3>
        <p style="color: #d4d4d8; margin: 0 0 8px 0;">📅 <strong>March 17, 2026</strong> | 9:00 AM - 5:00 PM</p>
        <p style="color: #d4d4d8; margin: 0;">📍 David M. Consunji Theater, ICE, UP Diliman</p>
      </div>
      
      <!-- Alternative Link -->
      <p style="color: #71717a; font-size: 12px; margin-top: 24px; word-break: break-all;">
        If the button doesn't work, copy and paste this link into your browser:<br>
        <a href="${verificationUrl}" style="color: #8b5cf6;">${verificationUrl}</a>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
      <p style="color: #71717a; font-size: 12px; margin: 0 0 8px 0;">
        This verification link expires in 24 hours.
      </p>
      <p style="color: #71717a; font-size: 12px; margin: 0;">
        Organized by UP EMC² Fraternity in partnership with Vibe Coders PH
      </p>
    </div>
  </div>
</body>
</html>
      `,
    });

    if (error) {
      console.error('Failed to send verification email:', error);
      return NextResponse.json(
        { error: 'Failed to send verification email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

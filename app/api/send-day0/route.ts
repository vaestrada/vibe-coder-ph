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
  const mainPosterUrl = 'https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/events/gen-ai-to-z-main-poster.png';
  const storageBase = 'https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/events';
  const reminderUrls = [1,2,3,4].map(i => `${storageBase}/reminder-${i}.png`);
  const merchUrls = [1,2,3,4].map(i => `${storageBase}/merch-${i}.png`);
  const joyrideUrl = `${storageBase}/joyride.png`;
  const flowerstoreUrl = `${storageBase}/flowerstore.png`;
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>It's TODAY! Gen AI to Z</title>
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
        <img src="${mainPosterUrl}" alt="Gen AI to Z: A Career Summit in an AI-Driven World — March 17, 2026 at UP Diliman" style="width: 100%; max-width: 560px; height: auto; border-radius: 12px; border: 1px solid rgba(139, 92, 246, 0.3);" />
      </a>
    </div>

    <!-- TODAY Banner -->
    <div style="text-align: center; background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(6, 182, 212, 0.3)); border: 1px solid rgba(34, 197, 94, 0.5); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
      <p style="font-size: 40px; font-weight: 800; margin: 0; background: linear-gradient(to right, #4ade80, #22d3ee); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">IT'S TODAY! 🚀</p>
      <p style="color: #86efac; font-size: 15px; margin: 8px 0 0 0; font-weight: 700;">Tuesday, March 17, 2026 • UP Diliman</p>
    </div>

    <!-- Main Content -->
    <div style="background: linear-gradient(to bottom, rgba(139, 92, 246, 0.1), transparent); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 32px;">
      <h2 style="font-size: 20px; margin: 0 0 16px 0;">Good morning, ${firstName}! ☀️</h2>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 20px 0;">
        The wait is over — <strong>Gen AI to Z</strong> is happening <strong>TODAY!</strong> 🎉 We're so excited to have you join us at the <strong>David M. Consunji Theater, Institute of Civil Engineering, UP Diliman.</strong>
      </p>

      <p style="color: #d4d4d8; line-height: 1.7; margin: 0 0 24px 0;">
        Doors open at <strong>7:00 AM</strong> and the program starts at <strong>8:00 AM sharp</strong>. Come early to secure your seat — it's first come, first served!
      </p>

      <!-- PROGRAM FLOW -->
      <div style="background: rgba(139, 92, 246, 0.08); border: 1px solid rgba(139, 92, 246, 0.25); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #a78bfa; margin: 0 0 16px 0;">📋 Program Flow</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <!-- Registration & Opening -->
          <tr>
            <td colspan="2" style="padding: 10px 0 4px 0;">
              <strong style="color: #8b5cf6; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">🚩 Registration &amp; Opening (7:00 – 8:45 AM)</strong>
            </td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; width: 120px; vertical-align: top; font-family: monospace; font-size: 13px;">7:00 AM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">🚪 Registration &amp; Guest Arrival</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">8:00 AM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">🎬 Opening Ceremonies</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">8:20 AM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">🎤 Opening Remarks — Dean Maria Antonia N. Tanchuling</td>
          </tr>
          <!-- AI Leadership Talks -->
          <tr>
            <td colspan="2" style="padding: 14px 0 4px 0;">
              <strong style="color: #d946ef; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">✨ AI Leadership Talks (8:45 – 10:15 AM)</strong>
            </td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">8:45 AM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">Jimbo Jose Emmanuel Reverente — AI Innovation &amp; Technopreneurship</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">9:05 AM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">Lois Anne Leal — AI in Earth Observation &amp; Satellite Applications</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">9:25 AM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">Jaemark Tordecilla — Generative AI &amp; Responsible AI Use</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">9:45 AM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">💬 AI Leadership Panel Discussion</td>
          </tr>
          <!-- Creative AI Talks -->
          <tr>
            <td colspan="2" style="padding: 14px 0 4px 0;">
              <strong style="color: #06b6d4; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">🎙️ Creative AI Talks (10:25 AM – 12:00 PM)</strong>
            </td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">10:25 AM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">Eplayment × Pixel — Industry Showcase</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">10:40 AM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">Darryll Rapacon — AI-Assisted Filmmaking</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">11:00 AM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">Rodson Verr Suarez — Balancing AI Tools with Creative Intent</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">11:20 AM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">💬 Creative Panel Discussion</td>
          </tr>
          <!-- Lunch -->
          <tr>
            <td colspan="2" style="padding: 14px 0 4px 0;">
              <strong style="color: #f59e0b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">☕ Lunch &amp; Networking (12:00 – 1:10 PM)</strong>
            </td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">12:00 PM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">🍱 Lunch Break &amp; Sponsor Engagement</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">12:45 PM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">🎰 Program Reopening &amp; Early Raffle Draw</td>
          </tr>
          <!-- Industry AI Talks -->
          <tr>
            <td colspan="2" style="padding: 14px 0 4px 0;">
              <strong style="color: #22c55e; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">💼 Industry AI Talks (1:10 – 3:10 PM)</strong>
            </td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">1:10 PM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">Alibaba Cloud — Industry Showcase</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">1:20 PM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">Jean Madrid — AI-Driven Business Transformation</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">1:40 PM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">Bryl Lim — AI Tools &amp; Career Leverage</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">2:00 PM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">Aurelien Chu — AI Education &amp; Workforce Development</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">2:20 PM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">Jayson Cunanan, Ph.D. — Applied AI &amp; Startup Building</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">2:40 PM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">💬 Industry Panel Discussion</td>
          </tr>
          <!-- Community & Closing -->
          <tr>
            <td colspan="2" style="padding: 14px 0 4px 0;">
              <strong style="color: #f43f5e; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">👥 Community &amp; Closing (3:10 – 5:00 PM+)</strong>
            </td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">3:20 PM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">🎤 Show &amp; Tell — Org Partner Presentations</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">4:30 PM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">📣 Closing Remarks — Viron Gil Estrada</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">4:50 PM</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">🎰 Grand Raffle &amp; Announcements</td>
          </tr>
          <tr>
            <td style="color: #a78bfa; padding: 4px 0; font-weight: bold; vertical-align: top; font-family: monospace; font-size: 13px;">5:00 PM+</td>
            <td style="color: #d4d4d8; padding: 4px 0; font-size: 14px;">📸 Networking &amp; Photos</td>
          </tr>
        </table>
      </div>

      <!-- EXCLUSIVE PROMO CODES -->
      <div style="background: linear-gradient(135deg, rgba(234, 179, 8, 0.1), rgba(217, 70, 239, 0.1)); border: 1px solid rgba(234, 179, 8, 0.3); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <h3 style="font-size: 16px; color: #fbbf24; margin: 0 0 6px 0;">🎁 Exclusive Promo Codes for Attendees!</h3>
        <p style="color: #a1a1aa; font-size: 13px; margin: 0 0 20px 0;">These are special perks from our sponsors — just for Gen AI to Z attendees.</p>

        <!-- JoyRide Promo -->
        <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 8px; padding: 16px; margin-bottom: 12px;">
          <div style="text-align: center; margin-bottom: 12px;">
            <img src="${joyrideUrl}" alt="JoyRide Promo" style="width: 100%; max-width: 480px; height: auto; border-radius: 8px;" />
          </div>
          <h4 style="color: #c084fc; margin: 0 0 8px 0; font-size: 15px;">🛵 JoyRide MC Taxi</h4>
          <div style="background: rgba(139, 92, 246, 0.15); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 6px; padding: 10px; text-align: center; margin-bottom: 10px;">
            <span style="font-family: monospace; font-size: 20px; font-weight: 800; color: #e9d5ff; letter-spacing: 0.1em;">JOYRIDEGENAITOZ</span>
          </div>
          <ul style="color: #d4d4d8; font-size: 13px; line-height: 1.8; margin: 0; padding-left: 18px;">
            <li><strong>20% OFF</strong> per booking (capped at ₱20.00)</li>
            <li>Valid for <strong>2 uses</strong></li>
            <li>Valid on <strong>March 17, 2026 only</strong> (today!)</li>
          </ul>
        </div>

        <!-- FlowerStore Promo -->
        <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(217, 70, 239, 0.2); border-radius: 8px; padding: 16px; margin-bottom: 12px;">
          <div style="text-align: center; margin-bottom: 12px;">
            <img src="${flowerstoreUrl}" alt="FlowerStore.ph Promo" style="width: 100%; max-width: 480px; height: auto; border-radius: 8px;" />
          </div>
          <h4 style="color: #f0abfc; margin: 0 0 8px 0; font-size: 15px;">💐 FlowerStore.ph (App-Exclusive)</h4>
          <div style="background: rgba(217, 70, 239, 0.15); border: 1px solid rgba(217, 70, 239, 0.3); border-radius: 6px; padding: 10px; text-align: center; margin-bottom: 10px;">
            <span style="font-family: monospace; font-size: 20px; font-weight: 800; color: #f5d0fe; letter-spacing: 0.1em;">UPSUMMIT20</span>
          </div>
          <ul style="color: #d4d4d8; font-size: 13px; line-height: 1.8; margin: 0; padding-left: 18px;">
            <li><strong>20% OFF + Free Shipping</strong></li>
            <li>Max discount: ₱200 per transaction</li>
            <li>Valid for multiple uses, until <strong>December 31, 2026</strong></li>
          </ul>
        </div>

        <!-- Potico Promo -->
        <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(6, 182, 212, 0.2); border-radius: 8px; padding: 16px;">
          <h4 style="color: #67e8f9; margin: 0 0 8px 0; font-size: 15px;">🎁 Potico.ph — Gifts for All Occasions</h4>
          <div style="background: rgba(6, 182, 212, 0.15); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 6px; padding: 10px; text-align: center; margin-bottom: 10px;">
            <span style="font-family: monospace; font-size: 20px; font-weight: 800; color: #cffafe; letter-spacing: 0.1em;">UPSUMMIT25</span>
          </div>
          <ul style="color: #d4d4d8; font-size: 13px; line-height: 1.8; margin: 0; padding-left: 18px;">
            <li><strong>25% OFF + Free Shipping</strong></li>
            <li>Max discount: ₱200 per transaction</li>
            <li>Valid for multiple uses, until <strong>December 31, 2026</strong></li>
          </ul>
        </div>
      </div>

      <!-- Reminders Images -->
      <div style="margin-bottom: 24px;">
        ${reminderUrls.map((url, i) => `<div style="text-align: center; margin-bottom: ${i < 3 ? '8' : '0'}px;"><img src="${url}" alt="Reminder ${i + 1}" style="width: 100%; max-width: 500px; height: auto; border-radius: 12px; border: 1px solid rgba(139, 92, 246, 0.2);" /></div>`).join('\n        ')}
      </div>

      <!-- Checklist -->
      <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #22c55e; margin: 0 0 12px 0;">✅ Before You Leave Checklist</h3>
        <ul style="color: #d4d4d8; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li>✅ Valid ID for check-in</li>
          <li>✅ Baon or lunch money (nearby: ICE Canteen, NIGS Canteen, CS Library Canteen)</li>
          <li>✅ Notebook or laptop for notes</li>
          <li>✅ Comfortable outfit — it's a full day!</li>
          <li>✅ Fully charged phone</li>
          <li>✅ Umbrella or rain gear (just in case!)</li>
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

      <!-- Gold Sponsors -->
      <div style="background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.25); border-radius: 8px; padding: 20px; margin-bottom: 16px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #eab308; margin: 0 0 12px 0;">🥇 Gold Sponsors</h3>
        <p style="color: #d4d4d8; font-size: 15px; line-height: 2; margin: 0; text-align: center;">
          <strong>Alibaba Cloud</strong> &nbsp;•&nbsp; <strong>SP Madrid</strong> &nbsp;•&nbsp; <strong>PIXEL for Creators</strong> &nbsp;•&nbsp; <strong>InLife Foundation</strong>
        </p>
      </div>

      <!-- Bronze Sponsors -->
      <div style="background: rgba(180, 83, 9, 0.08); border: 1px solid rgba(180, 83, 9, 0.25); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #d97706; margin: 0 0 12px 0;">🥉 Bronze Sponsors</h3>
        <p style="color: #d4d4d8; font-size: 15px; line-height: 2; margin: 0; text-align: center;">
          <strong>Joyride</strong> &nbsp;•&nbsp; <strong>Eskwelabs</strong> &nbsp;•&nbsp; <strong>Tito's Latin BBQ &amp; Brew</strong> &nbsp;•&nbsp; <strong>FlowerStore.ph</strong> &nbsp;•&nbsp; <strong>Potico.ph</strong>
        </p>
      </div>

      <!-- Merch -->
      <div style="background: rgba(6, 182, 212, 0.07); border: 1px solid rgba(6, 182, 212, 0.25); border-radius: 8px; padding: 20px; margin-bottom: 16px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #06b6d4; margin: 0 0 10px 0;">👕 Official Merch — Available On-site!</h3>
        <p style="color: #a1a1aa; font-size: 13px; margin: 0 0 14px 0;">We have official Gen AI to Z merch available at the event. Grab yours while supplies last!</p>
        <div style="text-align: center;">
          ${merchUrls.map((url, i) => `<img src="${url}" alt="Gen AI to Z Merch ${i + 1}" style="width: 100%; max-width: 400px; height: auto; border-radius: 10px; border: 1px solid rgba(6, 182, 212, 0.2); margin-bottom: ${i < 3 ? '8px' : '0'};" />`).join('\n          ')}
        </div>
      </div>

      <!-- Community Partners -->
      <div style="background: rgba(139, 92, 246, 0.06); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #a78bfa; margin: 0 0 4px 0;">🤝 Community &amp; School Org Partners</h3>
        <p style="color: #71717a; font-size: 12px; margin: 0 0 16px 0;">This summit wouldn't be possible without our amazing partners!</p>
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
          COMSA – EARIST &nbsp;•&nbsp;
          PUP ASCII &nbsp;•&nbsp;
          Hack Club Philippines &nbsp;•&nbsp;
          FWDP &nbsp;•&nbsp;
          PSYSC
        </p>
      </div>

      <!-- Urgency -->
      <div style="text-align: center; background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.08)); border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="color: #fca5a5; font-size: 16px; font-weight: 700; margin: 0;">
          🚨 Seats are first come, first served — arrive early to save your spot!
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
        📣 See you in a few hours!
      </p>
      <p style="color: #a1a1aa; font-size: 14px; line-height: 1.6; margin: 0 0 12px 0;">
        Don't forget to use <strong style="color: #fbbf24;">#GenAItoZ</strong> when posting on socials today!
      </p>
      <p style="color: #d4d4d8; font-size: 14px; margin: 0;">
        Follow <strong style="color: #8b5cf6;">@vibecodersph</strong> for live updates
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
        See you TODAY! 🚀
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
        subject: `[TEST ${new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' })}] It's TODAY! 🚀 Gen AI to Z — See You at UP Diliman!`,
        html: buildEmail(recipientName),
        tags: [
          { name: 'type', value: 'day0-reminder-test' },
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

    // Filter out invalid email addresses
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
        recipients: validRegistrants.map(r => ({
          name: r.full_name,
          email: r.email,
          status: r.status,
        })),
      });
    }

    // Send in batches of 100 with delay to avoid rate limits
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
        subject: "It's TODAY! 🚀 Gen AI to Z — See You at UP Diliman!",
        html: buildEmail(registrant.full_name),
        tags: [
          { name: 'type', value: 'day0-reminder' },
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

      // Delay between batches to respect Resend rate limits
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

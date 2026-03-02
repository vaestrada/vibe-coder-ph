#!/usr/bin/env node

/**
 * Send event reminder emails to confirmed Gen AI to Z registrants.
 *
 * Usage:
 *   node scripts/send-reminder.mjs                  # Dry run (preview only)
 *   node scripts/send-reminder.mjs --send            # Actually send emails
 *
 * Required environment variables (automatically loaded from .env.local):
 *   ADMIN_API_KEY          – secret key to authorize the API call
 *   NEXT_PUBLIC_SITE_URL   – base URL (defaults to https://www.vibecoders.ph)
 */

import 'dotenv/config';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vibecoders.ph';
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;
const SEND_FLAG = process.argv.includes('--send');

if (!ADMIN_API_KEY) {
  console.error('❌ ADMIN_API_KEY is not set. Add it to your .env.local file.');
  process.exit(1);
}

async function main() {
  const endpoint = `${BASE_URL}/api/send-reminder`;
  const mode = SEND_FLAG ? '📨 SENDING emails' : '👀 DRY RUN (preview only — pass --send to actually send)';

  console.log(`\n🚀 Gen AI to Z — Event Reminder\n`);
  console.log(`   Mode:     ${mode}`);
  console.log(`   Endpoint: ${endpoint}\n`);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        adminKey: ADMIN_API_KEY,
        dryRun: !SEND_FLAG,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error(`❌ API error (${response.status}):`, result.error);
      process.exit(1);
    }

    if (result.dryRun) {
      console.log(`✅ Found ${result.totalRecipients} confirmed registrant(s):\n`);
      result.recipients.forEach((r, i) => {
        console.log(`   ${String(i + 1).padStart(3)}. ${r.name} <${r.email}>`);
      });
      console.log(`\n💡 To send for real, run:  node scripts/send-reminder.mjs --send\n`);
    } else {
      console.log(`✅ Done!`);
      console.log(`   Total recipients: ${result.totalRecipients}`);
      console.log(`   Sent:   ${result.sent}`);
      console.log(`   Failed: ${result.failed}`);
      if (result.errors) {
        console.log(`\n⚠️  Errors:`);
        result.errors.forEach(e => console.log(`   - ${e}`));
      }
      console.log('');
    }
  } catch (err) {
    console.error('❌ Failed to reach the API:', err.message);
    console.error('   Make sure the dev server or production site is running.\n');
    process.exit(1);
  }
}

main();

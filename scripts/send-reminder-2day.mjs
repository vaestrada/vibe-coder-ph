#!/usr/bin/env node

/**
 * Send 2 Days to Go reminder emails to Gen AI to Z registrants.
 *
 * Usage:
 *   node scripts/send-reminder-2day.mjs                  # Dry run
 *   node scripts/send-reminder-2day.mjs --send            # Mass send
 *   node scripts/send-reminder-2day.mjs --test email@x.com # Test to one email
 *
 * Required env vars (from .env.local):
 *   ADMIN_API_KEY, NEXT_PUBLIC_SITE_URL
 */

import 'dotenv/config';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vibecoders.ph';
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;
const SEND_FLAG = process.argv.includes('--send');
const TEST_INDEX = process.argv.indexOf('--test');
const TEST_EMAIL = TEST_INDEX !== -1 ? process.argv[TEST_INDEX + 1] : null;

if (!ADMIN_API_KEY) {
  console.error('❌ ADMIN_API_KEY is not set.');
  process.exit(1);
}

async function main() {
  const endpoint = `${BASE_URL}/api/send-reminder-2day`;

  if (TEST_EMAIL) {
    console.log(`\n🧪 Sending TEST to: ${TEST_EMAIL}\n`);
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ adminKey: ADMIN_API_KEY, testEmail: TEST_EMAIL }),
    });
    const result = await response.json();
    if (!response.ok) { console.error('❌', result.error); process.exit(1); }
    console.log(`✅ Test sent to ${result.sentTo} (${result.recipientName})`);
    console.log(`   Email ID: ${result.emailId}\n`);
    return;
  }

  const mode = SEND_FLAG ? '📨 SENDING emails' : '👀 DRY RUN';
  console.log(`\n🔥 Gen AI to Z — 2 Days to Go Reminder\n`);
  console.log(`   Mode:     ${mode}`);
  console.log(`   Endpoint: ${endpoint}\n`);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ adminKey: ADMIN_API_KEY, dryRun: !SEND_FLAG }),
  });

  const result = await response.json();
  if (!response.ok) { console.error('❌', result.error); process.exit(1); }

  if (result.dryRun) {
    console.log(`✅ Found ${result.totalRecipients} registrant(s):`);
    console.log(`   Confirmed: ${result.confirmed} | Pending: ${result.pending}\n`);
    result.recipients.forEach((r, i) => {
      console.log(`   ${String(i + 1).padStart(3)}. ${r.name} <${r.email}>`);
    });
    console.log(`\n💡 To send: node scripts/send-reminder-2day.mjs --send\n`);
  } else {
    console.log(`✅ Done!`);
    console.log(`   Total: ${result.totalRecipients} | Sent: ${result.sent} | Failed: ${result.failed}`);
    if (result.errors?.length) {
      console.log(`\n⚠️  Errors:`);
      result.errors.forEach(e => console.log(`   - ${e}`));
    }
    console.log('');
  }
}

main().catch(err => { console.error('❌', err.message); process.exit(1); });

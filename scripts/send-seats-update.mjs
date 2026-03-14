#!/usr/bin/env node

/**
 * Send "Limited Seats — Arrive Early" email to Gen AI to Z registrants.
 *
 * Usage:
 *   node scripts/send-seats-update.mjs                      # Dry run (all registrants)
 *   node scripts/send-seats-update.mjs --partners            # Dry run (partner orgs only)
 *   node scripts/send-seats-update.mjs --partners --send      # Send to partner orgs only
 *   node scripts/send-seats-update.mjs --send                 # Send to ALL registrants
 *   node scripts/send-seats-update.mjs --test you@email.com   # Send test to one email
 *
 * Required environment variables (loaded from .env.local):
 *   ADMIN_API_KEY
 *   NEXT_PUBLIC_SITE_URL (defaults to https://www.vibecoders.ph)
 */

import 'dotenv/config';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vibecoders.ph';
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;
const SEND_FLAG = process.argv.includes('--send');
const PARTNERS_FLAG = process.argv.includes('--partners');
const TEST_INDEX = process.argv.indexOf('--test');
const TEST_EMAIL = TEST_INDEX !== -1 ? process.argv[TEST_INDEX + 1] : null;

if (!ADMIN_API_KEY) {
  console.error('❌ ADMIN_API_KEY is not set. Add it to your .env.local file.');
  process.exit(1);
}

async function main() {
  const endpoint = `${BASE_URL}/api/send-seats-update`;

  console.log(`\n⚠️  Gen AI to Z — Limited Seats Update Email\n`);

  // Test mode
  if (TEST_EMAIL) {
    console.log(`   Mode:     🧪 TEST — sending to ${TEST_EMAIL}`);
    console.log(`   Endpoint: ${endpoint}\n`);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ adminKey: ADMIN_API_KEY, testEmail: TEST_EMAIL }),
    });

    const result = await response.json();
    if (!response.ok) {
      console.error(`❌ API error (${response.status}):`, result.error);
      process.exit(1);
    }

    console.log(`✅ Test email sent to ${result.sentTo} (${result.recipientName})`);
    console.log(`   Email ID: ${result.emailId}\n`);
    return;
  }

  // Dry run or send mode
  const mode = SEND_FLAG ? '📨 SENDING' : '👀 DRY RUN';
  const audience = PARTNERS_FLAG ? '🤝 Partner org registrants only' : '📣 ALL registrants';

  console.log(`   Mode:     ${mode}`);
  console.log(`   Audience: ${audience}`);
  console.log(`   Endpoint: ${endpoint}\n`);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      adminKey: ADMIN_API_KEY,
      dryRun: !SEND_FLAG,
      partnersOnly: PARTNERS_FLAG,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error(`❌ API error (${response.status}):`, result.error);
    process.exit(1);
  }

  if (result.dryRun) {
    console.log(`📊 Summary:`);
    console.log(`   Total registrants:     ${result.totalRegistrants}`);
    console.log(`   Partner org members:   ${result.totalPartnerOrg}`);
    console.log(`   Target for this send:  ${result.targetRecipients}\n`);

    if (result.partnerOrgBreakdown?.length > 0) {
      console.log(`🤝 Partner Org Breakdown:`);
      result.partnerOrgBreakdown.forEach(({ org, count }) => {
        console.log(`   ${String(count).padStart(3)} — ${org}`);
      });
      console.log('');
    }

    console.log(`📋 Recipients (${result.targetRecipients}):\n`);
    result.recipients.forEach((r, i) => {
      const orgTag = r.partnerOrg ? ` [${r.partnerOrg}]` : '';
      console.log(`   ${String(i + 1).padStart(3)}. ${r.name} <${r.email}>${orgTag}`);
    });

    const sendCmd = PARTNERS_FLAG
      ? 'node scripts/send-seats-update.mjs --partners --send'
      : 'node scripts/send-seats-update.mjs --send';
    console.log(`\n💡 To send for real, run:  ${sendCmd}\n`);
  } else {
    console.log(`✅ Done!`);
    console.log(`   Audience:    ${result.partnersOnly ? 'Partner orgs only' : 'All registrants'}`);
    console.log(`   Total sent:  ${result.sent}`);
    console.log(`   Failed:      ${result.failed}`);
    if (result.errors) {
      console.log(`\n⚠️  Errors:`);
      result.errors.forEach(e => console.log(`   - ${e}`));
    }
    console.log('');
  }
}

main().catch(err => {
  console.error('❌ Failed:', err.message);
  process.exit(1);
});

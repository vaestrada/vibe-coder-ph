#!/usr/bin/env node

/**
 * Gen AI to Z — Post-Event Thank You Email CLI
 *
 * Usage:
 *   node scripts/send-thankyou.mjs              # Dry run (shows count)
 *   node scripts/send-thankyou.mjs --test email  # Send test to specific email
 *   node scripts/send-thankyou.mjs --send        # Mass send to all registrants
 *   node scripts/send-thankyou.mjs --send --skip N  # Skip first N registrants
 *
 * Environment:
 *   ADMIN_API_KEY         - Admin key for the API
 *   NEXT_PUBLIC_SITE_URL  - Base URL (default: http://localhost:3000)
 */

const args = process.argv.slice(2);
const adminKey = process.env.ADMIN_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const endpoint = `${baseUrl}/api/send-thankyou`;

const isSend = args.includes('--send');
const testIdx = args.indexOf('--test');
const testEmail = testIdx !== -1 ? args[testIdx + 1] : null;
const skipIdx = args.indexOf('--skip');
const skipFirst = skipIdx !== -1 ? parseInt(args[skipIdx + 1], 10) : 0;

console.log("\n💜 Gen AI to Z — Post-Event Thank You Email\n");
console.log(`   Mode:     ${testEmail ? `🧪 TEST → ${testEmail}` : isSend ? '📨 SENDING emails' : '📋 DRY RUN (use --send to send, --test email to test)'}`);
console.log(`   Endpoint: ${endpoint}\n`);

const body = { adminKey };
if (testEmail) body.testEmail = testEmail;
else if (!isSend) body.dryRun = true;
if (skipFirst > 0) body.skipFirst = skipFirst;

try {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error('❌ Error:', data.error || res.statusText);
    process.exit(1);
  }

  if (data.test) {
    console.log(`✅ Test email sent to ${data.sentTo} (${data.recipientName})`);
    console.log(`   Email ID: ${data.emailId}`);
  } else if (data.dryRun) {
    console.log(`📋 Dry Run Results:`);
    console.log(`   Total: ${data.totalRecipients} | Confirmed: ${data.confirmed} | Pending: ${data.pending}`);
    if (data.invalidEmails) console.log(`   Invalid emails skipped: ${data.invalidEmails}`);
  } else {
    console.log(`✅ Done!`);
    console.log(`   Total: ${data.totalRecipients} | Sent: ${data.sent} | Failed: ${data.failed}`);
    if (data.invalidEmails) console.log(`   Invalid emails skipped: ${data.invalidEmails}`);
    if (data.errors?.length) {
      console.log(`\n⚠️  Errors:`);
      data.errors.forEach(e => console.log(`   - ${e}`));
    }
  }
} catch (err) {
  console.error('❌ Failed:', err.message);
  process.exit(1);
}

console.log('');

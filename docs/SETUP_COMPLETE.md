# ✅ Event Registration System - Setup Complete

## Summary

Successfully configured event registration system with:
- ✅ Cloudflare Turnstile CAPTCHA
- ✅ Email verification via Resend
- ✅ Consolidated Supabase database
- ✅ All environment variables configured

---

## 🗄️ Database Consolidation

**Changed from:** `gen-ai-to-z` (ectfclsrvvzgycreftig) → **To:** `vibe-coder-ph-projects` (qxxlzffjeruemlsbfefv)

### Why?
- Saves costs (free tier limits)
- Single source of truth for all data
- Easier management

### What was migrated?
Tables added to `vibe-coder-ph-projects`:
- `event_registrations` - stores user registrations
- `event_feedback` - post-event feedback
- `registration_rate_limits` - spam prevention

**Action Required:** You can delete the `gen-ai-to-z` project to free up resources.

---

## 🔐 Environment Variables

### Local Development (`.env.local`)
All credentials are now configured in `.env.local` (gitignored for security).

### Vercel Production
All environment variables configured via Vercel CLI:

| Variable | Status | Visibility |
|----------|--------|------------|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ Set | Public |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ Set | Public |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ Set | Secret |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | ✅ Set | Public |
| `TURNSTILE_SECRET_KEY` | ✅ Set | Secret |
| `RESEND_API_KEY` | ✅ Set | Secret |
| `NEXT_PUBLIC_SITE_URL` | ✅ Set | Public |

---

## 📧 Resend Configuration

### ⚠️ Important: Domain Verification Required

Your Resend API key is active, but to send emails from `events@vibecoders.ph`, you must:

1. **Go to:** [resend.com/domains](https://resend.com/domains)
2. **Add domain:** `vibecoders.ph`
3. **Add DNS records** to your domain registrar:
   ```
   Type: TXT
   Name: _resend
   Value: [value from Resend dashboard]
   
   Type: MX
   Name: @
   Value: mx.resend.com
   Priority: 10
   ```
4. **Verify** domain in Resend dashboard

**Until verified:** Emails will be sent from `onboarding@resend.dev` (works for testing)

---

## 🛡️ Cloudflare Turnstile

Configuration:
- **Site Key:** `0x4AAAAAACWYagSF55JVjkEy` (public, visible in HTML)
- **Secret Key:** `0x4AAAAAACWYaoALLFUJbXewew3i87wWYmM` (secret, server-side)

The CAPTCHA widget will appear on the registration form automatically.

---

## 🚀 Vercel CLI Commands

You now have Vercel CLI installed. Useful commands:

```bash
# Deploy to production
vercel --prod

# View environment variables
vercel env ls

# Add new environment variable
printf "value" | vercel env add VAR_NAME production

# Remove environment variable
vercel env rm VAR_NAME --yes

# View logs
vercel logs

# Open project in browser
vercel open
```

---

## 📝 Next Steps

### 1. Trigger a new deployment
Your environment variables are set, but Vercel needs to rebuild:

```bash
# Option A: Trigger via CLI
vercel --prod

# Option B: Push any change to main branch
git commit --allow-empty -m "chore: trigger redeploy"
git push origin main
```

### 2. Verify Resend domain
See "Resend Configuration" section above.

### 3. Test registration form
Once deployed, visit:
- https://www.vibecoders.ph/events/gen-ai-to-z/register

### 4. Monitor registrations
Check your Supabase dashboard:
- https://supabase.com/dashboard/project/qxxlzffjeruemlsbfefv/editor

### 5. Optional: Delete old project
To save resources:
```bash
# Via Supabase dashboard
# Or via MCP (if you want me to do it)
```

---

## 🔍 Testing Checklist

After deployment, test:
- [ ] Registration form loads
- [ ] Turnstile CAPTCHA appears
- [ ] Form submits successfully
- [ ] Verification email received
- [ ] Email link works and confirms registration
- [ ] Check Supabase for new registration record

---

## 📊 Project Structure

```
vibe-coder-ph/
├── app/
│   ├── api/
│   │   ├── send-verification/route.ts  # Sends verification email
│   │   └── verify-email/route.ts       # Confirms email token
│   ├── events/gen-ai-to-z/
│   │   ├── page.tsx                    # Event landing page
│   │   └── register/
│   │       ├── page.tsx                # Registration wrapper
│   │       ├── registration-form.tsx   # Main form with Turnstile
│   │       └── verification-status.tsx # Success/error messages
├── lib/
│   ├── event-registration.ts           # Supabase helpers
│   ├── email.ts                        # Email API wrapper
│   └── supabase.ts                     # Supabase client
└── supabase/
    └── migrations/
        └── 002_add_event_tables.sql    # Event tables migration
```

---

## 🆘 Troubleshooting

### Registration fails with RLS error
- Check Supabase project ID in `.env.local` matches `qxxlzffjeruemlsbfefv`
- Verify environment variables in Vercel dashboard

### Email not received
- Check spam folder
- Verify `RESEND_API_KEY` is set on Vercel
- Check Resend logs: https://resend.com/logs
- Domain not verified? Emails will come from `onboarding@resend.dev`

### Turnstile not showing
- Check `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set
- Verify site key matches Cloudflare dashboard
- Check browser console for errors

### Service role key error
- Make sure `SUPABASE_SERVICE_ROLE_KEY` is set on Vercel
- Redeploy after adding environment variables

---

## 📞 Support

- **Supabase Dashboard:** https://supabase.com/dashboard/project/qxxlzffjeruemlsbfefv
- **Vercel Dashboard:** https://vercel.com/virons-projects-b2923a7c/vibe-coder-ph
- **Resend Dashboard:** https://resend.com/dashboard
- **Cloudflare Turnstile:** https://dash.cloudflare.com/?to=/:account/turnstile

---

**Last Updated:** February 1, 2026

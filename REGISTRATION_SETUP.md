# Gen AI to Z Event Registration System Setup

## 1. Database Setup

1. Go to your Supabase project: https://ectfclsrvvzgycreftig.supabase.co
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the contents of `supabase/migrations/001_event_registrations.sql`
5. Click **Run** to execute the migration
6. Verify tables created:
   - `event_registrations`
   - `event_feedback`

## 2. Environment Variables (Already Updated)

✅ `.env.local` has been updated with new Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://ectfclsrvvzgycreftig.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 3. Test the Registration

1. Restart dev server: `pnpm dev`
2. Visit: http://localhost:3000/events/gen-ai-to-z
3. Click "Register Free" button
4. Fill out the form
5. **Important**: Check the consent checkbox (required by DPA 2012)
6. Submit registration
7. Check Supabase Table Editor to verify data was inserted

## 4. Data Privacy Compliance (RA 10173)

✅ **Implemented Features:**
- Privacy Notice displayed before data collection
- Explicit consent checkbox (opt-in, not pre-checked)
- Data minimization (only necessary fields required)
- Encryption at rest and in transit (Supabase default)
- Row-level security (RLS) policies
- Audit trail (IP address, timestamps)
- Data retention policy (1 year, stated in notice)

## 5. Next Steps

### Create Admin Dashboard (Optional)
To view registrations, you'll need to:
1. Set up authentication (Supabase Auth)
2. Add organizer emails to RLS policy
3. Create admin page at `/admin/registrations`

### Or Use Supabase Table Editor
For now, view registrations directly in Supabase:
1. Go to **Table Editor** → `event_registrations`
2. Filter by `event_slug = 'gen-ai-to-z'`

### Email Confirmations (Optional)
To send confirmation emails:
1. Set up Resend or SendGrid
2. Create API route at `/api/send-confirmation`
3. Call after successful registration

## 6. Testing Checklist

- [ ] Form loads correctly
- [ ] Privacy notice is readable
- [ ] Consent checkbox is required
- [ ] Form validation works
- [ ] Registration submits successfully
- [ ] Data appears in Supabase
- [ ] Error handling works (try registering twice with same email)

## 7. Feedback Form (Coming Next)

Location: `/events/gen-ai-to-z/feedback`
- Will be built after the event
- Optional anonymous feedback
- Rating scales for different aspects
- Open-ended questions

## 8. Security Notes

🔐 **RLS Policies:**
- Public can INSERT (with consent)
- Only authenticated organizers can SELECT all
- Users can view their own registration via email

⚠️ **Important:**
- Never commit `.env.local` to git (already in .gitignore)
- Service role key is for server-side only (not used in frontend)
- Anon key is safe for client-side use

## 9. Legal Compliance

📜 **Data Privacy Act 2012 (RA 10173) Checklist:**
- [x] Privacy notice before collection
- [x] Explicit consent mechanism
- [x] Purpose limitation
- [x] Data minimization
- [x] Security measures (encryption, access control)
- [x] Retention period stated
- [x] Data subject rights mentioned (access, correction, deletion)
- [x] Contact for privacy concerns

## 10. Support

For issues:
- Supabase errors: Check browser console
- Form not submitting: Check network tab
- Data privacy questions: Review `/lib/event-registration.ts`

---

**Status:** ✅ Registration system ready to deploy!
**Next:** Run SQL migration in Supabase

-- Certificate of participation for event attendees
CREATE TABLE IF NOT EXISTS event_certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_slug TEXT NOT NULL,
  registration_id UUID NOT NULL REFERENCES event_registrations(id) ON DELETE CASCADE,
  recipient_name TEXT NOT NULL,
  recipient_email TEXT NOT NULL,
  issued_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  cert_png_url TEXT, -- Supabase Storage URL (optional, generate on-the-fly if null)
  revoked BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_event_certificates_event_slug ON event_certificates(event_slug);
CREATE INDEX IF NOT EXISTS idx_event_certificates_registration_id ON event_certificates(registration_id);
CREATE INDEX IF NOT EXISTS idx_event_certificates_recipient_email ON event_certificates(recipient_email);

-- RLS: public can read (for verification page), only service role can insert/update
ALTER TABLE event_certificates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read for verification" ON event_certificates
  FOR SELECT USING (true);

CREATE POLICY "Allow service role all access" ON event_certificates
  FOR ALL USING (auth.role() = 'service_role');

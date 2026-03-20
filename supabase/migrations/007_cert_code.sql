-- Add human-readable cert_code column (e.g. GAI2Z26-3F2A)
ALTER TABLE event_certificates ADD COLUMN IF NOT EXISTS cert_code TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS idx_event_certificates_cert_code ON event_certificates(cert_code) WHERE cert_code IS NOT NULL;

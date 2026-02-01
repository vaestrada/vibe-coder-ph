-- Event Registrations Table
-- Compliant with Data Privacy Act 2012 (RA 10173)

CREATE TABLE IF NOT EXISTS event_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Personal Data (minimized as per DPA requirements)
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  affiliation TEXT CHECK (affiliation IN (
    'College Student',
    'Senior High Student',
    'Faculty/Staff',
    'Professional',
    'Independent Creator',
    'Career Shifter',
    'Other'
  )),
  organization TEXT, -- School/Company name
  year_level TEXT, -- For students
  
  -- Event Specific
  event_slug TEXT DEFAULT 'gen-ai-to-z' NOT NULL,
  dietary_restrictions TEXT,
  accessibility_needs TEXT,
  how_did_you_hear TEXT, -- Marketing attribution
  
  -- Privacy Compliance (DPA 2012)
  consent_given BOOLEAN DEFAULT FALSE NOT NULL,
  consent_timestamp TIMESTAMP WITH TIME ZONE,
  privacy_notice_version TEXT DEFAULT 'v1.0',
  ip_address INET, -- For audit trail
  
  -- Status Management
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'waitlist')),
  checked_in BOOLEAN DEFAULT FALSE,
  checked_in_at TIMESTAMP WITH TIME ZONE,
  
  -- Constraints
  CONSTRAINT unique_email_per_event UNIQUE(email, event_slug)
);

-- Create indexes for performance
CREATE INDEX idx_event_registrations_event_slug ON event_registrations(event_slug);
CREATE INDEX idx_event_registrations_email ON event_registrations(email);
CREATE INDEX idx_event_registrations_status ON event_registrations(status);
CREATE INDEX idx_event_registrations_created_at ON event_registrations(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Public can insert their own registration (with consent)
CREATE POLICY "Anyone can register for events"
  ON event_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (consent_given = true);

-- Only authenticated users with specific role can view all registrations
-- (You'll need to set up auth and roles for organizers)
CREATE POLICY "Organizers can view all registrations"
  ON event_registrations
  FOR SELECT
  TO authenticated
  USING (
    auth.jwt() ->> 'email' IN (
      -- Add organizer emails here
      'admin@vibecoders.ph'
    )
  );

-- Registrants can view their own registration
CREATE POLICY "Users can view own registration"
  ON event_registrations
  FOR SELECT
  TO anon, authenticated
  USING (email = current_setting('request.headers')::json->>'x-user-email');

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER update_event_registrations_updated_at
  BEFORE UPDATE ON event_registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Event Feedback Table (Post-event)
CREATE TABLE IF NOT EXISTS event_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Link to registration (optional for anonymous feedback)
  registration_id UUID REFERENCES event_registrations(id) ON DELETE SET NULL,
  event_slug TEXT DEFAULT 'gen-ai-to-z' NOT NULL,
  
  -- Feedback Data
  is_anonymous BOOLEAN DEFAULT FALSE,
  overall_rating INTEGER CHECK (overall_rating BETWEEN 1 AND 5),
  content_rating INTEGER CHECK (content_rating BETWEEN 1 AND 5),
  speakers_rating INTEGER CHECK (speakers_rating BETWEEN 1 AND 5),
  venue_rating INTEGER CHECK (venue_rating BETWEEN 1 AND 5),
  organization_rating INTEGER CHECK (organization_rating BETWEEN 1 AND 5),
  
  -- Open-ended feedback
  what_worked_well TEXT,
  what_needs_improvement TEXT,
  topics_for_future TEXT,
  would_recommend BOOLEAN,
  additional_comments TEXT,
  
  -- Privacy
  consent_for_testimonial BOOLEAN DEFAULT FALSE,
  ip_address INET
);

-- Create index
CREATE INDEX idx_event_feedback_event_slug ON event_feedback(event_slug);
CREATE INDEX idx_event_feedback_created_at ON event_feedback(created_at DESC);

-- Enable RLS
ALTER TABLE event_feedback ENABLE ROW LEVEL SECURITY;

-- RLS Policy for feedback
CREATE POLICY "Anyone can submit feedback"
  ON event_feedback
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Organizers can view all feedback"
  ON event_feedback
  FOR SELECT
  TO authenticated
  USING (
    auth.jwt() ->> 'email' IN (
      'admin@vibecoders.ph'
    )
  );

-- Comments
COMMENT ON TABLE event_registrations IS 'Event registrations compliant with PH Data Privacy Act 2012 (RA 10173)';
COMMENT ON COLUMN event_registrations.consent_given IS 'Explicit consent required by RA 10173';
COMMENT ON COLUMN event_registrations.ip_address IS 'Audit trail for compliance';
COMMENT ON TABLE event_feedback IS 'Post-event feedback with optional anonymity';

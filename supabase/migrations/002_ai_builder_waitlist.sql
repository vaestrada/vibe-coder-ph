-- AI Builder Cohort Waitlist Table

CREATE TABLE IF NOT EXISTS ai_builder_waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Submission data
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN (
    'student',
    'junior_dev',
    'career_shifter',
    'freelancer',
    'working_dev',
    'other'
  )),
  what_to_build TEXT
);

-- Indexes
CREATE INDEX idx_ai_builder_waitlist_email ON ai_builder_waitlist(email);
CREATE INDEX idx_ai_builder_waitlist_created_at ON ai_builder_waitlist(created_at DESC);

-- Enable Row Level Security
ALTER TABLE ai_builder_waitlist ENABLE ROW LEVEL SECURITY;

-- Anyone can join the waitlist
CREATE POLICY "Anyone can join waitlist"
  ON ai_builder_waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only organizers can read entries
CREATE POLICY "Organizers can view waitlist"
  ON ai_builder_waitlist
  FOR SELECT
  TO authenticated
  USING (
    auth.jwt() ->> 'email' IN (
      'admin@vibecoders.ph'
    )
  );

COMMENT ON TABLE ai_builder_waitlist IS 'Early access waitlist for the AI Builder Cohort program';

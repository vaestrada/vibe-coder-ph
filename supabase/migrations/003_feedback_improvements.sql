-- Add respondent name and testimonial featured flag to event_feedback
-- Run this migration to support named testimonials and manual curation

ALTER TABLE event_feedback
  ADD COLUMN IF NOT EXISTS respondent_name TEXT,
  ADD COLUMN IF NOT EXISTS testimonial_featured BOOLEAN DEFAULT NULL;

COMMENT ON COLUMN event_feedback.respondent_name IS 'Optional: submitted name shown on testimonials when not anonymous';
COMMENT ON COLUMN event_feedback.testimonial_featured IS 'NULL = not reviewed, TRUE = feature this testimonial, FALSE = suppress';

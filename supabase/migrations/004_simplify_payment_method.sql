-- Simplify payment_method to credit card yes/no
ALTER TABLE ai_builder_waitlist
  DROP CONSTRAINT IF EXISTS ai_builder_waitlist_payment_method_check;

ALTER TABLE ai_builder_waitlist
  ADD CONSTRAINT ai_builder_waitlist_payment_method_check
  CHECK (payment_method IN ('yes', 'no'));

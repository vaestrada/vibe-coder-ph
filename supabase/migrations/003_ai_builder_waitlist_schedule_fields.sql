-- Add scheduling and payment fields to ai_builder_waitlist

ALTER TABLE ai_builder_waitlist
  ADD COLUMN IF NOT EXISTS preferred_time TEXT CHECK (preferred_time IN ('morning', 'afternoon', 'evening', 'flexible')),
  ADD COLUMN IF NOT EXISTS ai_experience TEXT CHECK (ai_experience IN ('never', 'chatgpt', 'copilot', 'claude_codex')),
  ADD COLUMN IF NOT EXISTS payment_method TEXT CHECK (payment_method IN ('credit_card', 'gcash', 'maya', 'bank_transfer'));

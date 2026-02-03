"use client";

import { useState, useRef } from "react";
import { registerForEvent } from "@/lib/event-registration";
import { Check, Loader2, AlertCircle, CheckCircle2, Info } from "lucide-react";
import Link from "next/link";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

type AffiliationType = '' | 'College Student' | 'Senior High Student' | 'Faculty/Staff' | 'Professional' | 'Independent Creator' | 'Career Shifter' | 'Other';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "" as string | undefined,
    affiliation: "" as AffiliationType,
    organization: "",
    year_level: "",
    expectations: "",
    how_did_you_hear: "",
    consent_given: false,
  });

  // Honeypot field to catch bots (should remain empty)
  const [honeypot, setHoneypot] = useState("");
  
  // Cloudflare Turnstile
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const [showPrivacyNotice, setShowPrivacyNotice] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Bot detection: if honeypot is filled, silently reject
    if (honeypot) {
      setSubmitStatus({ type: 'success', message: "Registration successful!" });
      return;
    }

    // Verify Turnstile token
    if (!turnstileToken) {
      setSubmitStatus({
        type: 'error',
        message: "Please complete the security verification"
      });
      return;
    }
    
    if (!formData.consent_given) {
      setSubmitStatus({
        type: 'error',
        message: "You must consent to data processing to register (required by Data Privacy Act 2012)"
      });
      return;
    }

    if (!formData.affiliation) {
      setSubmitStatus({
        type: 'error',
        message: "Please select your occupation"
      });
      return;
    }

    if (!formData.phone) {
      setSubmitStatus({
        type: 'error',
        message: "Please enter your phone number"
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Cast formData with validated affiliation
      const registrationData = {
        ...formData,
        affiliation: formData.affiliation as Exclude<AffiliationType, ''>,
        event_slug: 'gen-ai-to-z',
      };
      await registerForEvent(registrationData);

      setSubmitStatus({
        type: 'success',
        message: "Almost there! We've sent a verification email to your inbox. Please click the link to confirm your registration."
      });

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        phone: "" as string | undefined,
        affiliation: "" as AffiliationType,
        organization: "",
        year_level: "",
        expectations: "",
        how_did_you_hear: "",
        consent_given: false,
      });
      
      // Reset Turnstile
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } catch (error: unknown) {
      // Check for duplicate email error
      const err = error as { message?: string; code?: string };
      const errorMessage = err.message || "";
      const isDuplicate = errorMessage.includes("duplicate") || 
                          errorMessage.includes("unique") ||
                          errorMessage.includes("already registered") ||
                          err.code === "23505"; // PostgreSQL unique violation
      
      setSubmitStatus({
        type: 'error',
        message: isDuplicate 
          ? "This email is already registered for this event. If you need to update your registration, please contact us."
          : errorMessage || "Registration failed. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - invisible to users, catches bots */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute -left-[9999px] opacity-0 pointer-events-none"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Personal Information */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
        
        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Juan Dela Cruz"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="juan@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              international
              defaultCountry="PH"
              value={formData.phone}
              onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
              className="phone-input-custom w-full"
              numberInputProps={{
                className: "w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500",
                required: true,
              }}
            />
          </div>

          {/* Occupation */}
          <div>
            <label htmlFor="affiliation" className="block text-sm font-medium mb-2">
              Occupation <span className="text-red-500">*</span>
            </label>
            <select
              id="affiliation"
              name="affiliation"
              value={formData.affiliation}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="">Select your occupation</option>
              <option value="College Student">College Student</option>
              <option value="Senior High Student">Senior High Student</option>
              <option value="Faculty/Staff">Faculty/Staff</option>
              <option value="Professional">Professional</option>
              <option value="Independent Creator">Independent Creator</option>
              <option value="Career Shifter">Career Shifter</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Affiliation */}
          <div>
            <label htmlFor="organization" className="block text-sm font-medium mb-2">
              Affiliation <span className="text-muted-foreground text-xs">(Optional)</span>
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="UP Diliman, Company Inc., etc."
            />
          </div>

          {/* Year Level (conditional) */}
          {(formData.affiliation === 'College Student' || formData.affiliation === 'Senior High Student') && (
            <div>
              <label htmlFor="year_level" className="block text-sm font-medium mb-2">
                Year Level <span className="text-muted-foreground text-xs">(Optional)</span>
              </label>
              <input
                type="text"
                id="year_level"
                name="year_level"
                value={formData.year_level}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="1st Year, 3rd Year, Grade 12, etc."
              />
            </div>
          )}
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
        
        <div className="space-y-4">
          {/* Expectations */}
          <div>
            <label htmlFor="expectations" className="block text-sm font-medium mb-2">
              What are your expectations for this event? <span className="text-muted-foreground text-xs">(Optional)</span>
            </label>
            <textarea
              id="expectations"
              name="expectations"
              value={formData.expectations}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
              placeholder="What topics or insights are you hoping to learn about? What would make this event valuable for you?"
            />
          </div>

          {/* How did you hear */}
          <div>
            <label htmlFor="how_did_you_hear" className="block text-sm font-medium mb-2">
              How did you hear about this event? <span className="text-muted-foreground text-xs">(Optional)</span>
            </label>
            <select
              id="how_did_you_hear"
              name="how_did_you_hear"
              value={formData.how_did_you_hear}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="">Select an option</option>
              <option value="Social Media">Social Media (Facebook, Twitter, etc.)</option>
              <option value="Friend/Colleague">Friend or Colleague</option>
              <option value="University Announcement">University Announcement</option>
              <option value="Email">Email Newsletter</option>
              <option value="Website">Vibe Coders Website</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-violet-950/30 border border-violet-500/30 rounded-lg p-6">
        <div className="flex items-start gap-3 mb-4">
          <Info className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-lg mb-2">Data Privacy Notice</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Your personal data is protected under the Data Privacy Act of 2012 (Republic Act 10173).
            </p>
            
            {!showPrivacyNotice ? (
              <button
                type="button"
                onClick={() => setShowPrivacyNotice(true)}
                className="text-sm text-violet-400 hover:text-violet-300 underline"
              >
                Read Full Privacy Notice
              </button>
            ) : (
              <div className="text-sm text-muted-foreground space-y-3 mt-4">
                <p><strong className="text-foreground">Data Controller:</strong> UP EMC² Fraternity, UP College of Engineering</p>
                
                <p><strong className="text-foreground">Purpose:</strong> We collect your personal information to process your registration for the &ldquo;Gen AI to Z&rdquo; event on March 17, 2026, and to communicate event-related information.</p>
                
                <p><strong className="text-foreground">Data Collected:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name, email, phone number</li>
                  <li>Affiliation and organization</li>
                  <li>Your expectations and feedback (optional)</li>
                </ul>
                
                <p><strong className="text-foreground">Processing:</strong> Your data will be stored securely in our database (Supabase) with encryption at rest and in transit. Access is limited to authorized event organizers only.</p>
                
                <p><strong className="text-foreground">Retention:</strong> Your data will be retained for 1 year after the event for record-keeping purposes, then securely deleted unless you request earlier deletion.</p>
                
                <p><strong className="text-foreground">Your Rights under RA 10173:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Right to access your data</li>
                  <li>Right to request correction of inaccurate data</li>
                  <li>Right to request deletion of your data</li>
                  <li>Right to withdraw consent (before the event)</li>
                </ul>
                
                <p><strong className="text-foreground">Contact:</strong> For data privacy concerns or to exercise your rights, email us at{" "}
                  <a href="mailto:privacy@vibecoders.ph" className="text-violet-400 hover:text-violet-300">
                    privacy@vibecoders.ph
                  </a>
                </p>
                
                <button
                  type="button"
                  onClick={() => setShowPrivacyNotice(false)}
                  className="text-sm text-violet-400 hover:text-violet-300 underline mt-3"
                >
                  Hide Privacy Notice
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Consent Checkbox */}
        <label className="flex items-start gap-3 cursor-pointer mt-4 p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
          <input
            type="checkbox"
            name="consent_given"
            checked={formData.consent_given}
            onChange={handleChange}
            required
            className="mt-1 w-5 h-5 rounded border-white/20 text-violet-600 focus:ring-2 focus:ring-violet-500"
          />
          <span className="text-sm">
            <strong>I consent</strong> to the collection, processing, and storage of my personal data as described in the Privacy Notice above, in accordance with the Data Privacy Act of 2012 (RA 10173). <span className="text-red-500">*</span>
          </span>
        </label>
      </div>

      {/* Cloudflare Turnstile CAPTCHA */}
      <div className="flex justify-center">
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
          onSuccess={(token) => setTurnstileToken(token)}
          onError={() => {
            setTurnstileToken(null);
            setSubmitStatus({
              type: 'error',
              message: "Security verification failed. Please try again."
            });
          }}
          onExpire={() => setTurnstileToken(null)}
          options={{
            theme: "dark",
            size: "normal",
          }}
        />
      </div>

      {/* Status Messages */}
      {submitStatus.type && (
        <div className={`flex items-start gap-3 p-4 rounded-lg ${
          submitStatus.type === 'success' 
            ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
            : 'bg-red-500/20 border border-red-500/30 text-red-400'
        }`}>
          {submitStatus.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          )}
          <div>
            <p className="font-semibold">{submitStatus.type === 'success' ? 'Success!' : 'Error'}</p>
            <p className="text-sm">{submitStatus.message}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || !formData.consent_given}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-lg text-lg font-semibold shadow-lg shadow-violet-500/50 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/60 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Registering...
          </>
        ) : (
          <>
            <Check className="w-5 h-5" />
            Complete Registration
          </>
        )}
      </button>

      <p className="text-xs text-center text-muted-foreground">
        By registering, you agree to our{" "}
        <Link href="/privacy" className="text-violet-400 hover:text-violet-300 underline">
          Privacy Policy
        </Link>
        {" "}and{" "}
        <Link href="/terms" className="text-violet-400 hover:text-violet-300 underline">
          Terms of Service
        </Link>
      </p>
    </form>
  );
}

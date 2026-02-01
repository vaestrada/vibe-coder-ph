import { supabase } from "./supabase";

export interface EventRegistration {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  phone?: string;
  affiliation: 'College Student' | 'Senior High Student' | 'Faculty/Staff' | 'Professional' | 'Independent Creator' | 'Career Shifter' | 'Other';
  organization?: string;
  year_level?: string;
  event_slug: string;
  expectations?: string;
  how_did_you_hear?: string;
  consent_given: boolean;
  consent_timestamp?: string;
  privacy_notice_version?: string;
  status?: 'pending' | 'confirmed' | 'cancelled' | 'waitlist';
}

export interface EventFeedback {
  id?: string;
  registration_id?: string;
  event_slug: string;
  is_anonymous: boolean;
  overall_rating: number;
  content_rating: number;
  speakers_rating: number;
  venue_rating: number;
  organization_rating: number;
  what_worked_well?: string;
  what_needs_improvement?: string;
  topics_for_future?: string;
  would_recommend?: boolean;
  additional_comments?: string;
  consent_for_testimonial: boolean;
}

/**
 * Register for an event
 * Compliant with Data Privacy Act 2012 (RA 10173)
 */
export async function registerForEvent(data: EventRegistration) {
  if (!data.consent_given) {
    throw new Error("Consent is required to process registration (Data Privacy Act 2012)");
  }

  const registrationData = {
    ...data,
    consent_timestamp: new Date().toISOString(),
    privacy_notice_version: 'v1.0',
    status: 'pending',
  };

  const { data: result, error } = await supabase
    .from('event_registrations')
    .insert(registrationData)
    .select()
    .single();

  if (error) {
    if (error.code === '23505') { // Unique constraint violation
      throw new Error("You have already registered for this event.");
    }
    throw error;
  }

  return result;
}

/**
 * Get registration by email (for user to view their own registration)
 */
export async function getRegistrationByEmail(email: string, eventSlug: string) {
  const { data, error } = await supabase
    .from('event_registrations')
    .select('*')
    .eq('email', email)
    .eq('event_slug', eventSlug)
    .single();

  if (error) {
    if (error.code === 'PGRST116') { // No rows returned
      return null;
    }
    throw error;
  }

  return data;
}

/**
 * Get all registrations for an event (admin only)
 */
export async function getAllRegistrations(eventSlug: string) {
  const { data, error } = await supabase
    .from('event_registrations')
    .select('*')
    .eq('event_slug', eventSlug)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

/**
 * Get registration statistics
 */
export async function getRegistrationStats(eventSlug: string) {
  const { data, error } = await supabase
    .from('event_registrations')
    .select('status, affiliation')
    .eq('event_slug', eventSlug);

  if (error) throw error;

  const total = data.length;
  const confirmed = data.filter(r => r.status === 'confirmed').length;
  const pending = data.filter(r => r.status === 'pending').length;
  const byAffiliation = data.reduce((acc, r) => {
    acc[r.affiliation] = (acc[r.affiliation] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return { total, confirmed, pending, byAffiliation };
}

/**
 * Update registration status (admin only)
 */
export async function updateRegistrationStatus(
  id: string, 
  status: 'pending' | 'confirmed' | 'cancelled' | 'waitlist'
) {
  const { data, error } = await supabase
    .from('event_registrations')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Check-in attendee (admin only)
 */
export async function checkInAttendee(id: string) {
  const { data, error } = await supabase
    .from('event_registrations')
    .update({ 
      checked_in: true,
      checked_in_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Submit event feedback
 */
export async function submitEventFeedback(feedback: EventFeedback) {
  const { data, error } = await supabase
    .from('event_feedback')
    .insert(feedback)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Get all feedback for an event (admin only)
 */
export async function getEventFeedback(eventSlug: string) {
  const { data, error } = await supabase
    .from('event_feedback')
    .select('*')
    .eq('event_slug', eventSlug)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

/**
 * Exercise data subject rights (RA 10173)
 * - Right to access
 * - Right to rectification
 * - Right to erasure
 */
export async function deleteRegistration(email: string, eventSlug: string) {
  const { error } = await supabase
    .from('event_registrations')
    .delete()
    .eq('email', email)
    .eq('event_slug', eventSlug);

  if (error) throw error;
  return { success: true, message: "Your data has been permanently deleted as per your request." };
}

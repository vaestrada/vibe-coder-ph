import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createClient(url, key);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      overall_rating,
      content_rating,
      speakers_rating,
      venue_rating,
      organization_rating,
      what_worked_well,
      what_needs_improvement,
      topics_for_future,
      would_recommend,
      additional_comments,
      consent_for_testimonial,
      is_anonymous,
      respondent_name,
    } = body;

    // Basic validation
    if (!overall_rating || overall_rating < 1 || overall_rating > 5) {
      return NextResponse.json({ error: 'Overall rating is required (1–5).' }, { status: 400 });
    }

    const supabase = getSupabaseClient();

    // Get IP for audit trail
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || null;

    const { error } = await supabase.from('event_feedback').insert({
      event_slug: 'gen-ai-to-z',
      is_anonymous: is_anonymous ?? false,
      respondent_name: is_anonymous ? null : (respondent_name?.trim() || null),
      overall_rating,
      content_rating: content_rating || null,
      speakers_rating: speakers_rating || null,
      venue_rating: venue_rating || null,
      organization_rating: organization_rating || null,
      what_worked_well: what_worked_well?.trim() || null,
      what_needs_improvement: what_needs_improvement?.trim() || null,
      topics_for_future: topics_for_future?.trim() || null,
      would_recommend: would_recommend ?? null,
      additional_comments: additional_comments?.trim() || null,
      consent_for_testimonial: consent_for_testimonial ?? false,
      ip_address: ip,
    });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save feedback.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Feedback API error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}

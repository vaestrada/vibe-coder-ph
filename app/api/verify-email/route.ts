import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client lazily to avoid build-time initialization
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Missing Supabase configuration');
  }
  
  return createClient(supabaseUrl, serviceRoleKey);
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get('token');
  const eventSlug = searchParams.get('event');

  if (!token || !eventSlug) {
    return NextResponse.redirect(
      new URL('/events/gen-ai-to-z/register?error=invalid_link', request.url)
    );
  }

  try {
    const supabase = getSupabaseClient();
    
    // Find registration with this verification token
    const { data: registration, error: fetchError } = await supabase
      .from('event_registrations')
      .select('id, email, email_verified_at, status')
      .eq('verification_token', token)
      .eq('event_slug', eventSlug)
      .single();

    if (fetchError || !registration) {
      return NextResponse.redirect(
        new URL('/events/gen-ai-to-z/register?error=invalid_token', request.url)
      );
    }

    // Check if already verified
    if (registration.email_verified_at) {
      return NextResponse.redirect(
        new URL('/events/gen-ai-to-z/register?verified=already', request.url)
      );
    }

    // Update registration as verified
    const { error: updateError } = await supabase
      .from('event_registrations')
      .update({
        email_verified_at: new Date().toISOString(),
        status: 'confirmed'
      })
      .eq('id', registration.id);

    if (updateError) {
      console.error('Error verifying email:', updateError);
      return NextResponse.redirect(
        new URL('/events/gen-ai-to-z/register?error=verification_failed', request.url)
      );
    }

    // Redirect to confirmed/thank you page
    return NextResponse.redirect(
      new URL('/events/gen-ai-to-z/register/confirmed', request.url)
    );
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.redirect(
      new URL('/events/gen-ai-to-z/register?error=server_error', request.url)
    );
  }
}

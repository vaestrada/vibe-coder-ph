import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) throw new Error('Missing Supabase configuration');
  return createClient(supabaseUrl, serviceRoleKey);
}

function verifyAdminKey(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const expectedKey = process.env.ADMIN_API_KEY;
  if (!expectedKey) return false;
  return authHeader === `Bearer ${expectedKey}`;
}

/**
 * GET /api/check-in?event=gen-ai-to-z
 * Returns all registrations for the event (admin only)
 */
export async function GET(request: NextRequest) {
  if (!verifyAdminKey(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const eventSlug = request.nextUrl.searchParams.get('event');
  if (!eventSlug) {
    return NextResponse.json({ error: 'Missing event parameter' }, { status: 400 });
  }

  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('event_registrations')
      .select('id, full_name, email, phone, affiliation, organization, status, checked_in, checked_in_at')
      .eq('event_slug', eventSlug)
      .in('status', ['confirmed', 'pending'])
      .order('full_name', { ascending: true });

    if (error) throw error;

    return NextResponse.json({ registrations: data });
  } catch (error) {
    console.error('Check-in GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch registrations' }, { status: 500 });
  }
}

/**
 * POST /api/check-in
 * Body: { id, action: "check-in" | "undo" }
 */
export async function POST(request: NextRequest) {
  if (!verifyAdminKey(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, action } = await request.json();

    if (!id || !action) {
      return NextResponse.json({ error: 'Missing id or action' }, { status: 400 });
    }

    const supabase = getSupabaseClient();

    if (action === 'check-in') {
      const { data, error } = await supabase
        .from('event_registrations')
        .update({
          checked_in: true,
          checked_in_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select('id, full_name, email, checked_in, checked_in_at')
        .single();

      if (error) throw error;
      return NextResponse.json({ success: true, registration: data });
    }

    if (action === 'undo') {
      const { data, error } = await supabase
        .from('event_registrations')
        .update({
          checked_in: false,
          checked_in_at: null,
        })
        .eq('id', id)
        .select('id, full_name, email, checked_in, checked_in_at')
        .single();

      if (error) throw error;
      return NextResponse.json({ success: true, registration: data });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Check-in POST error:', error);
    return NextResponse.json({ error: 'Failed to update check-in' }, { status: 500 });
  }
}

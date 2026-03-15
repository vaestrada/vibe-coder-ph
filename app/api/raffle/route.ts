import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const { adminKey } = await request.json();
    const expectedKey = process.env.ADMIN_API_KEY;

    if (!expectedKey || adminKey !== expectedKey) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabase
      .from('event_registrations')
      .select('id, full_name')
      .eq('event_slug', 'gen-ai-to-z')
      .eq('checked_in', true)
      .order('checked_in_at');

    if (error) {
      return NextResponse.json({ error: 'Failed to fetch registrants' }, { status: 500 });
    }

    return NextResponse.json({ success: true, registrants: data });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

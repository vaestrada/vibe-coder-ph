import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  'https://qxxlzffjeruemlsbfefv.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const { data } = await sb
  .from('event_registrations')
  .select('id, full_name, email, status')
  .eq('event_slug', 'gen-ai-to-z')
  .in('status', ['confirmed', 'pending']);

const subset = data.slice(600);
console.log('Total in last batch:', subset.length);

const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const bad = subset.filter(r => !re.test(r.email));
console.log('Bad emails:', bad.length);
bad.forEach(r => console.log(' -', r.id, '|', r.full_name, '|', JSON.stringify(r.email)));

const weird = subset.filter(r => r.email.includes(' ') || r.email.includes(','));
console.log('Emails with spaces/commas:', weird.length);
weird.forEach(r => console.log(' -', r.id, '|', r.full_name, '|', JSON.stringify(r.email)));

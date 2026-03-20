import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

interface CertRecord {
  id: string;
  event_slug: string;
  recipient_name: string;
  recipient_email: string;
  issued_at: string;
  revoked: boolean;
}

async function getCertificate(id: string): Promise<CertRecord | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) return null;

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await supabase
    .from('event_certificates')
    .select('id, event_slug, recipient_name, recipient_email, issued_at, revoked')
    .eq('id', id)
    .single();

  if (error || !data) return null;
  return data as CertRecord;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const cert = await getCertificate(id);

  if (!cert || cert.revoked) {
    return {
      title: 'Certificate Not Found | Vibe Coder PH',
      description: 'This certificate could not be found or has been revoked.',
    };
  }

  return {
    title: `${cert.recipient_name}'s Certificate | Gen AI to Z | Vibe Coder PH`,
    description: `Verified certificate of participation for ${cert.recipient_name} — Gen AI to Z: A Career Summit in an AI-Driven World, March 17, 2026.`,
    openGraph: {
      title: `${cert.recipient_name} — Gen AI to Z Certificate`,
      description: `Certificate of Participation issued by Vibe Coder Philippines`,
      url: `https://www.vibecoders.ph/cert/${id}`,
      type: 'website',
    },
    robots: { index: false, follow: false }, // Don't index individual cert pages
  };
}

const EVENT_LABELS: Record<string, { title: string; date: string; location: string }> = {
  'gen-ai-to-z': {
    title: 'Gen AI to Z: A Career Summit in an AI-Driven World',
    date: 'March 17, 2026',
    location: 'UP Diliman, Quezon City',
  },
};

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Manila',
  });
}

function maskEmail(email: string): string {
  const [local, domain] = email.split('@');
  if (local.length <= 2) return `${local[0]}***@${domain}`;
  return `${local[0]}${local[1]}***@${domain}`;
}

export default async function CertVerificationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Basic UUID format validation to avoid unnecessary DB calls
  const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!UUID_REGEX.test(id)) {
    notFound();
  }

  const cert = await getCertificate(id);

  if (!cert) {
    notFound();
  }

  const event = EVENT_LABELS[cert.event_slug] ?? {
    title: cert.event_slug,
    date: 'Unknown',
    location: 'Unknown',
  };

  const isRevoked = cert.revoked;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-2xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-8 text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            ← vibecoders.ph
          </Link>
          <p className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-2">
            Certificate Verification
          </p>
          <h1 className="text-3xl font-bold text-white">
            {isRevoked ? 'Certificate Revoked' : 'Certificate Verified ✓'}
          </h1>
        </div>

        {/* Status card */}
        <div className={`rounded-2xl border p-8 mb-6 ${
          isRevoked
            ? 'border-red-500/40 bg-red-500/10'
            : 'border-purple-500/40 bg-gradient-to-b from-purple-500/10 to-transparent'
        }`}>
          {isRevoked ? (
            <div className="text-center">
              <div className="text-5xl mb-4">❌</div>
              <p className="text-red-400 font-semibold text-lg">This certificate has been revoked.</p>
              <p className="text-zinc-500 text-sm mt-2">Please contact us if you believe this is an error.</p>
            </div>
          ) : (
            <>
              {/* Valid indicator */}
              <div className="flex items-center gap-3 mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-bold text-green-400">Valid Certificate</p>
                  <p className="text-zinc-400 text-sm">This certificate is authentic and was issued by Vibe Coder Philippines.</p>
                </div>
              </div>

              {/* Certificate details */}
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-1">Recipient</dt>
                  <dd className="text-2xl font-bold text-white">{cert.recipient_name}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-1">Email</dt>
                  <dd className="text-zinc-300 font-mono text-sm">{maskEmail(cert.recipient_email)}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-1">Event</dt>
                  <dd className="text-zinc-200 font-medium">{event.title}</dd>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-1">Date</dt>
                    <dd className="text-zinc-300">{event.date}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-1">Location</dt>
                    <dd className="text-zinc-300">{event.location}</dd>
                  </div>
                </div>
                <div>
                  <dt className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-1">Issued On</dt>
                  <dd className="text-zinc-300">{formatDate(cert.issued_at)}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-1">Certificate ID</dt>
                  <dd className="text-zinc-500 font-mono text-xs break-all">{cert.id}</dd>
                </div>
              </dl>
            </>
          )}
        </div>

        {/* Issuer info */}
        {!isRevoked && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
            <p className="text-sm text-zinc-400 mb-1">Issued by</p>
            <Link href="/" className="text-purple-400 font-bold hover:text-purple-300 transition-colors">
              Vibe Coder Philippines
            </Link>
            <p className="text-xs text-zinc-500 mt-1">vibecoders.ph</p>
          </div>
        )}
      </div>
    </main>
  );
}

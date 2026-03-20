import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import Link from 'next/link';
import { CertActions } from './cert-actions';

interface CertRecord {
  id: string;
  event_slug: string;
  recipient_name: string;
  recipient_email: string;
  issued_at: string;
  revoked: boolean;
  cert_code: string | null;
}

async function getCertificate(idOrCode: string): Promise<CertRecord | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) return null;

  const supabase = createClient(supabaseUrl, supabaseKey);

  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(idOrCode);
  const filter = isUuid
    ? { column: 'id', value: idOrCode }
    : { column: 'cert_code', value: idOrCode.toUpperCase() };

  const { data, error } = await supabase
    .from('event_certificates')
    .select('id, event_slug, recipient_name, recipient_email, issued_at, revoked, cert_code')
    .eq(filter.column, filter.value)
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

  const certImageUrl = cert.cert_code
    ? `https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/events/certs/${cert.cert_code}.png`
    : undefined;

  return {
    title: `${cert.recipient_name}'s Certificate | Gen AI to Z | Vibe Coder PH`,
    description: `Verified certificate of participation for ${cert.recipient_name} — Gen AI to Z: A Career Summit in an AI-Driven World, March 17, 2026.`,
    openGraph: {
      title: `${cert.recipient_name} — Gen AI to Z Certificate`,
      description: 'Certificate of Participation issued by Vibe Coder Philippines',
      url: `https://www.vibecoders.ph/cert/${cert.cert_code ?? id}`,
      type: 'website',
      ...(certImageUrl && {
        images: [{ url: certImageUrl, width: 2000, height: 1414, alt: `${cert.recipient_name}'s certificate` }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cert.recipient_name} — Gen AI to Z Certificate`,
      ...(certImageUrl && { images: [certImageUrl] }),
    },
    robots: { index: false, follow: false },
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
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Manila',
  });
}

function maskEmail(email: string): string {
  const [local, domain] = email.split('@');
  if (local.length <= 2) return `${local[0]}***@${domain}`;
  return `${local[0]}${local[1]}***@${domain}`;
}

export default async function CertVerificationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  const CODE_REGEX = /^[A-Z0-9]+-[A-F0-9]{4}$/i;
  if (!UUID_REGEX.test(id) && !CODE_REGEX.test(id)) notFound();

  const cert = await getCertificate(id);
  if (!cert) notFound();

  const event = EVENT_LABELS[cert.event_slug] ?? {
    title: cert.event_slug,
    date: 'Unknown',
    location: 'Unknown',
  };

  const certCode = cert.cert_code;
  const isRevoked = cert.revoked;

  // Supabase direct URL (in remotePatterns) for next/image optimization
  const certImageUrl = certCode
    ? `https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/events/certs/${certCode}.png`
    : null;

  // Same-origin proxy path for the download link (download attribute requires same-origin)
  const certDownloadPath = certCode ? `/media/events/certs/${certCode}.png` : null;
  const certDownloadName = certCode
    ? `certificate-gen-ai-to-z-${cert.recipient_name.toLowerCase().replace(/\s+/g, '-')}.png`
    : 'certificate.png';

  // LinkedIn "Add to Profile" deep link
  const linkedInUrl = certCode
    ? `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME` +
      `&name=${encodeURIComponent('Gen AI to Z: Certificate of Participation')}` +
      `&organizationName=${encodeURIComponent('Vibe Coder Philippines')}` +
      `&issueYear=2026&issueMonth=3` +
      `&certUrl=${encodeURIComponent(`https://www.vibecoders.ph/cert/${certCode}`)}` +
      `&certId=${encodeURIComponent(certCode)}`
    : '#';

  if (isRevoked) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="text-6xl mb-6">❌</div>
          <h1 className="text-2xl font-bold text-red-400 mb-3">Certificate Revoked</h1>
          <p className="text-zinc-500 text-sm mb-8">This certificate has been revoked. Please contact us if you believe this is an error.</p>
          <Link href="/" className="text-violet-400 hover:text-violet-300 text-sm transition-colors">← vibecoders.ph</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Top nav strip */}
      <div className="border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="15 18 9 12 15 6" />
            </svg>
            vibecoders.ph
          </Link>
          <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase">Certificate Verification</span>
          <div className="w-24" aria-hidden /> {/* spacer */}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

        {/* Verified banner */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Verified Certificate
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            {cert.recipient_name}
          </h1>
          <p className="text-zinc-400 text-sm">{event.title}</p>
        </div>

        {/* Certificate image — hero of the page like Coursera/Google */}
        {certImageUrl ? (
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600/30 via-fuchsia-500/20 to-cyan-500/30 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" aria-hidden />
            <div className="relative rounded-2xl overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-900/40">
              <Image
                src={certImageUrl}
                alt={`Certificate of Participation for ${cert.recipient_name} — Gen AI to Z`}
                width={2000}
                height={1414}
                className="w-full h-auto block"
                priority
                quality={90}
              />
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 aspect-[2000/1414] flex items-center justify-center">
            <p className="text-zinc-500 text-sm">Certificate image unavailable</p>
          </div>
        )}

        {/* Action buttons — Download, LinkedIn, Copy Link */}
        {certCode && certDownloadPath && (
          <CertActions
            certCode={certCode}
            downloadPath={certDownloadPath}
            downloadName={certDownloadName}
            linkedInUrl={linkedInUrl}
          />
        )}

        {/* Verification details card */}
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950/50 overflow-hidden">
          <div className="px-6 py-4 border-b border-zinc-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Valid Certificate</p>
              <p className="text-zinc-500 text-xs">Authentic and issued by Vibe Coder Philippines</p>
            </div>
          </div>

          <dl className="divide-y divide-zinc-800/60">
            <div className="px-6 py-4 grid grid-cols-[140px_1fr] gap-4">
              <dt className="text-xs font-semibold tracking-widest text-zinc-500 uppercase self-center">Recipient</dt>
              <dd className="text-white font-semibold">{cert.recipient_name}</dd>
            </div>
            <div className="px-6 py-4 grid grid-cols-[140px_1fr] gap-4">
              <dt className="text-xs font-semibold tracking-widest text-zinc-500 uppercase self-center">Email</dt>
              <dd className="text-zinc-400 font-mono text-sm">{maskEmail(cert.recipient_email)}</dd>
            </div>
            <div className="px-6 py-4 grid grid-cols-[140px_1fr] gap-4">
              <dt className="text-xs font-semibold tracking-widest text-zinc-500 uppercase self-center">Event</dt>
              <dd className="text-zinc-300">{event.title}</dd>
            </div>
            <div className="px-6 py-4 grid grid-cols-[140px_1fr] gap-4 sm:grid-cols-[140px_1fr_140px_1fr]">
              <dt className="text-xs font-semibold tracking-widest text-zinc-500 uppercase self-center">Date</dt>
              <dd className="text-zinc-300">{event.date}</dd>
              <dt className="text-xs font-semibold tracking-widest text-zinc-500 uppercase self-center sm:pl-4">Location</dt>
              <dd className="text-zinc-300">{event.location}</dd>
            </div>
            <div className="px-6 py-4 grid grid-cols-[140px_1fr] gap-4">
              <dt className="text-xs font-semibold tracking-widest text-zinc-500 uppercase self-center">Certificate Code</dt>
              <dd className="font-mono font-bold text-violet-300 text-base tracking-wider">{certCode ?? '—'}</dd>
            </div>
            <div className="px-6 py-4 grid grid-cols-[140px_1fr] gap-4">
              <dt className="text-xs font-semibold tracking-widest text-zinc-500 uppercase self-center">Issued On</dt>
              <dd className="text-zinc-300">{formatDate(cert.issued_at)}</dd>
            </div>
            <div className="px-6 py-4 grid grid-cols-[140px_1fr] gap-4">
              <dt className="text-xs font-semibold tracking-widest text-zinc-500 uppercase self-center">Certificate ID</dt>
              <dd className="text-zinc-600 font-mono text-xs break-all">{cert.id}</dd>
            </div>
          </dl>
        </div>

        {/* Issuer */}
        <div className="text-center pb-8">
          <p className="text-zinc-600 text-xs mb-1">Issued by</p>
          <Link href="/" className="text-violet-400 hover:text-violet-300 font-semibold transition-colors">
            Vibe Coder Philippines
          </Link>
          <p className="text-zinc-600 text-xs mt-0.5">vibecoders.ph</p>
        </div>

      </div>
    </main>
  );
}

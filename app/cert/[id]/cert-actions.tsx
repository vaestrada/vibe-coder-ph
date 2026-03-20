'use client';

import { useState } from 'react';

interface CertActionsProps {
  certCode: string;
  pdfPath: string;
  imagePath: string | null;
  downloadName: string;
  linkedInUrl: string;
}

export function CertActions({ certCode, pdfPath, imagePath, downloadName, linkedInUrl }: CertActionsProps) {
  const [copied, setCopied] = useState(false);

  const certUrl = `https://www.vibecoders.ph/cert/${certCode}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(certUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard not available — silently ignore
    }
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {/* Download PDF — primary action */}
      <a
        href={pdfPath}
        download={`${downloadName}.pdf`}
        className="flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-violet-900/30"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download PDF
      </a>

      {/* LinkedIn Add to Profile */}
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 bg-[#0077b5] hover:bg-[#006aa3] active:bg-[#005f91] text-white rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-blue-900/30"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        Add to LinkedIn
      </a>

      {/* Copy verification link */}
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-900 text-zinc-200 rounded-xl font-semibold text-sm transition-colors border border-zinc-700 cursor-pointer"
        aria-label="Copy verification link to clipboard"
      >
        {copied ? (
          <>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-green-400">Copied!</span>
          </>
        ) : (
          <>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy Link
          </>
        )}
      </button>

      {/* Download Image — secondary */}
      {imagePath && (
        <a
          href={imagePath}
          download={`${downloadName}.jpg`}
          className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-900 text-zinc-200 rounded-xl font-semibold text-sm transition-colors border border-zinc-700"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          Save Image
        </a>
      )}
    </div>
  );
}

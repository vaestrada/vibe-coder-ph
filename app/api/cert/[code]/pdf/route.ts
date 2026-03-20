import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument } from 'pdf-lib';

const SUPABASE_STORAGE_BASE =
  'https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/events/certs';

// Certificate dimensions: 2000×1414px → landscape PDF at 72 DPI ≈ 2000×1414 points
// We'll use a standard ratio-preserving page size
const CERT_WIDTH = 2000;
const CERT_HEIGHT = 1414;

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;

  // Validate cert code format (e.g. GAI2Z26-8AA4)
  if (!/^[A-Z0-9]+-[A-F0-9]{4}$/i.test(code)) {
    return NextResponse.json({ error: 'Invalid certificate code' }, { status: 400 });
  }

  const certCode = code.toUpperCase();
  const imageUrl = `${SUPABASE_STORAGE_BASE}/${certCode}.jpg`;

  // Fetch the certificate JPEG from Supabase
  const imageResponse = await fetch(imageUrl);
  if (!imageResponse.ok) {
    return NextResponse.json({ error: 'Certificate image not found' }, { status: 404 });
  }

  const imageBytes = new Uint8Array(await imageResponse.arrayBuffer());

  // Create PDF with the certificate image as full page
  const pdfDoc = await PDFDocument.create();
  const jpgImage = await pdfDoc.embedJpg(imageBytes);

  // Add a page matching the certificate aspect ratio
  const page = pdfDoc.addPage([CERT_WIDTH, CERT_HEIGHT]);
  page.drawImage(jpgImage, {
    x: 0,
    y: 0,
    width: CERT_WIDTH,
    height: CERT_HEIGHT,
  });

  // Set PDF metadata
  pdfDoc.setTitle(`Certificate of Participation — Gen AI to Z`);
  pdfDoc.setAuthor('Vibe Coder Philippines');
  pdfDoc.setSubject('Certificate of Participation');
  pdfDoc.setCreator('vibecoders.ph');

  const pdfBytes = await pdfDoc.save();

  return new NextResponse(Buffer.from(pdfBytes), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="certificate-gen-ai-to-z-${certCode}.pdf"`,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

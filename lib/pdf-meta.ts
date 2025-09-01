// lib/pdf-meta.ts
import 'server-only';
import fs from 'node:fs';
import path from 'node:path';

export type PdfMeta = {
  filename: string;
  sizeBytes: number | null;
  lastModifiedISO: string | null;
};

/**
 * Accepts a public URL path like "/pdfs/file.pdf"
 * Returns metadata from the local filesystem at build time.
 */
export function getPdfMetaSync(publicUrlPath: string): PdfMeta {
  // If it's an absolute URL (CDN/external), we can't stat it at build time
  if (/^https?:\/\//i.test(publicUrlPath)) {
    const filename =
      decodeURIComponent(new URL(publicUrlPath).pathname.split('/').pop() || 'document.pdf');
    return { filename, sizeBytes: null, lastModifiedISO: null };
  }

  const rel = publicUrlPath.replace(/^\/+/, ''); // remove leading slash
  const fullPath = path.join(process.cwd(), 'public', rel);

  try {
    const stats = fs.statSync(fullPath);
    const filename = decodeURIComponent(rel.split('/').pop() || 'document.pdf');
    return {
      filename,
      sizeBytes: stats.size,
      lastModifiedISO: stats.mtime.toISOString(),
    };
  } catch {
    const filename = decodeURIComponent(rel.split('/').pop() || 'document.pdf');
    return { filename, sizeBytes: null, lastModifiedISO: null };
  }
}

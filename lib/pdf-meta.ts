// // lib/pdf-meta.ts
// import 'server-only';
// import fs from 'node:fs';
// import path from 'node:path';

// export type PdfMeta = {
//   filename: string;
//   sizeBytes: number | null;
//   lastModifiedISO: string | null;
// };

// /**
//  * Accepts a public URL path like "/pdfs/file.pdf"
//  * Returns metadata from the local filesystem at build time.
//  */
// export function getPdfMetaSync(publicUrlPath: string): PdfMeta {
//   // If it's an absolute URL (CDN/external), we can't stat it at build time
//   if (/^https?:\/\//i.test(publicUrlPath)) {
//     const filename =
//       decodeURIComponent(new URL(publicUrlPath).pathname.split('/').pop() || 'document.pdf');
//     return { filename, sizeBytes: null, lastModifiedISO: null };
//   }

//   const rel = publicUrlPath.replace(/^\/+/, ''); // remove leading slash
//   const fullPath = path.join(process.cwd(), 'public', rel);

//   try {
//     const stats = fs.statSync(fullPath);
//     const filename = decodeURIComponent(rel.split('/').pop() || 'document.pdf');
//     return {
//       filename,
//       sizeBytes: stats.size,
//       lastModifiedISO: stats.mtime.toISOString(),
//     };
//   } catch {
//     const filename = decodeURIComponent(rel.split('/').pop() || 'document.pdf');
//     return { filename, sizeBytes: null, lastModifiedISO: null };
//   }
// }






// lib/pdf-meta.ts
import 'server-only';
import fs from 'node:fs';
import path from 'node:path';

export type PdfMeta = {
  filename: string;
  sizeBytes: number | null;        // raw bytes (null if unknown/external)
  lastModifiedISO: string | null;  // ISO string (null if unknown/external)
};

/**
 * publicUrlPath: a public path like "/pdfs/file.pdf" or an absolute URL.
 * Returns metadata from the local filesystem when possible.
 */
export function getPdfMetaSync(publicUrlPath: string): PdfMeta {
  // External URL -> cannot stat at build time
  if (/^https?:\/\//i.test(publicUrlPath)) {
    const filename = decodeURIComponent(new URL(publicUrlPath).pathname.split('/').pop() || 'document.pdf');
    return { filename, sizeBytes: null, lastModifiedISO: null };
  }

  // Remove leading slash
  const rel = publicUrlPath.replace(/^\/+/, '');
  const fullPath = path.join(process.cwd(), 'public', rel);

  try {
    const stats = fs.statSync(fullPath);
    const filename = decodeURIComponent(rel.split('/').pop() || 'document.pdf');
    return {
      filename,
      sizeBytes: stats.size,
      lastModifiedISO: stats.mtime.toISOString(),
    };
  } catch (err) {
    // File missing or permission issue — return nulls so UI can fall back
    console.log(err)
    const filename = decodeURIComponent(rel.split('/').pop() || 'document.pdf');
    return { filename, sizeBytes: null, lastModifiedISO: null };
  }
}

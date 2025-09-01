// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import dynamic from 'next/dynamic';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { ArrowDownTrayIcon, EyeIcon } from '@heroicons/react/24/outline';
// import clsx from 'clsx';
// import FuturisticHeading from './FuturisticHeading';

// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// const PdfModal = dynamic(() => import('@/components/PdfViewer').then(mod => mod.PdfModal), { ssr: false });

// interface PDFCardProps {
//   fileUrl: string;
//   lang: 'en' | 'ar';
//   animation : string;
//   onPreview: () => void;
// }

// function PDFCard({ fileUrl, lang, onPreview , animation}: PDFCardProps) {
//   const [hover, setHover] = useState(false);
//   const [meta, setMeta] = useState({
//     title: '',
//     size: '',
//     lastUpdated: '',
//   });

//   // Animation visibility state
//   const [visible, setVisible] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisible(false); // reset before triggering
//             requestAnimationFrame(() => setVisible(true));
//           } else {
//             setVisible(false);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );
//     if (cardRef.current) observer.observe(cardRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     async function fetchMetadata() {
//       try {
//         const res = await fetch(fileUrl, { method: 'HEAD' });
//         const sizeBytes = res.headers.get('Content-Length');
//         const lastModified = res.headers.get('Last-Modified');

//         const sizeMB = sizeBytes
//           ? (parseInt(sizeBytes, 10) / (1024 * 1024)).toFixed(2) + ' MB'
//           : lang === 'ar' ? 'غير معروف' : 'Unknown';

//         const dateStr = lastModified
//           ? new Date(lastModified).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric',
//             })
//           : lang === 'ar' ? 'غير متاح' : 'Unavailable';

//         const filename = decodeURIComponent(fileUrl.split('/').pop() || 'document.pdf');

//         setMeta({
//           title: filename,
//           size: sizeMB,
//           lastUpdated: dateStr,
//         });
//       } catch (error) {
//         console.error('Failed to fetch file metadata:', error);
//       }
//     }

//     fetchMetadata();
//   }, [fileUrl, lang]);

//   return (
//     <div
//       ref={cardRef}
//       className={clsx(
//         "overflow-x-hidden cursor-pointer bg_Beige_reversed dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-lg transition-shadow xxxs:w-[290px] xxs:w-[360px]",
//         visible ? animation : "opacity-0 translate-x-10"
//       )}
//     >
//       {/* Thumbnail */}
//       <div
//         className="relative bg-white flex justify-center items-center"
//         style={window.innerWidth >= 400 ? { height: 500 } : { height: 370 }}
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//       >
//         <Document file={fileUrl} loading={<span className="text-gray-400">{lang === 'ar' ? 'جاري التحميل...' : 'Loading...'}</span>}>
//           <Page pageNumber={1} width={window.innerWidth >= 400 ? 350 : 290} renderTextLayer={false} renderAnnotationLayer={false} />
//         </Document>

//         {/* Eye icon overlay */}
//         <div
//           className={clsx(
//             'absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity',
//             hover ? 'opacity-100' : 'opacity-0'
//           )}
//         >
//           <EyeIcon
//             className="w-10 h-10 text-white"
//             onClick={(e) => {
//               e.stopPropagation();
//               onPreview();
//             }}
//           />
//         </div>
//       </div>

//       {/* Info */}
//       <div className="p-4 space-y-2">
//         <h3 className="text-lg font-extrabold line-clamp-2">{meta.title}</h3>
//         <div className={clsx(
//           "text-black grid font-extrabold",
//           lang === 'ar' ? 'Grid_Ar text-lg' : 'Grid_En xxxs:text-sm xxs:text-lg'
//         )}>
//           <p className='flex flex-col'>
//             {lang === 'ar'
//               ? <><span>نوع الملف:</span><span className='mt-3'>PDF</span></>
//               : <><span> File Type:</span><span className='mt-3'>PDF</span></>
//             }
//           </p>
//           <p className='flex flex-col'>
//             {lang === 'ar'
//               ? <><span>آخر تحديث:</span><span className='mt-3'>{meta.lastUpdated}</span></>
//               : <><span> Last Updated:</span><span className='mt-3'>{meta.lastUpdated}</span></>
//             }
//           </p>
//           <p className='flex flex-col'>
//             {lang === 'ar'
//               ? <><span>حجم الملف:</span><span dir='ltr' className='mt-3'>{meta.size}</span></>
//               : <><span> File Size:</span><span className='mt-3'>{meta.size}</span></>
//             }
//           </p>
//         </div>

//         {/* Actions */}
//         <div className={clsx(
//           "flex justify-between items-center pt-2 font-extrabold",
//           lang === 'ar' ? 'flex-row-reverse' : 'flex-row'
//         )}>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               onPreview();
//             }}
//             className="bg-black text-white px-3 py-1.5 rounded hover:bg-white hover:text-black text-lg"
//           >
//             {lang === 'ar' ? 'عرض' : 'View'}
//           </button>
//           <a
//             href={fileUrl}
//             download
//             onClick={(e) => e.stopPropagation()}
//             className={clsx(
//               "flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded hover:bg-white hover:text-black text-lg",
//               lang === 'ar' ? "flex-row-reverse" : "flex-row"
//             )}
//           >
//             <ArrowDownTrayIcon className="w-4 h-4" />
//             {lang === 'ar' ? 'تحميل' : 'Download'}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ClientPDFSection({
//   pdf,
//   isArabic,
//   animation,
//   title,

// }: {
//   pdf: string;
//   animation: string;
//   isArabic: boolean;
//   title : string;
// }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <section className="p-0 flex flex-col items-center">

//         <FuturisticHeading rtl={isArabic}>{title}</FuturisticHeading>

//         <div className="flex flex-wrap justify-center gap-6 mt-6">
//           <PDFCard
//             fileUrl={pdf}
//             lang={isArabic ? 'ar' : 'en'}
//             animation={animation}
//             onPreview={() => setIsOpen(true)}
//           />
//         </div>
//       </section>

//       <PdfModal
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//         fileUrl={pdf}
//         lang={isArabic ? 'ar' : 'en'}
//       />
//     </>
//   );
// }
















// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import dynamic from 'next/dynamic';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { ArrowDownTrayIcon, EyeIcon } from '@heroicons/react/24/outline';
// import clsx from 'clsx';
// import FuturisticHeading from './FuturisticHeading';
// import type { PdfMeta } from '@/lib/pdf-meta';

// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// const PdfModal = dynamic(() => import('@/components/PdfViewer').then(mod => mod.PdfModal), { ssr: false });

// interface PDFCardProps {
//   fileUrl: string;
//   lang: 'en' | 'ar';
//   animation: string;
//   onPreview: () => void;
//   preMeta?: PdfMeta; // NEW
// }

// function PDFCard({ fileUrl, lang, onPreview, animation, preMeta }: PDFCardProps) {
//   const [hover, setHover] = useState(false);
//   const [meta, setMeta] = useState({
//     title: '',
//     size: '',
//     lastUpdated: '',
//   });

//   // Animation visibility state
//   const [visible, setVisible] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisible(false);
//             requestAnimationFrame(() => setVisible(true));
//           } else {
//             setVisible(false);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );
//     if (cardRef.current) observer.observe(cardRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // If preMeta exists, prefer it; otherwise fall back to HEAD fetch
//   useEffect(() => {
//     function applyPreMeta(m: PdfMeta) {
//       const sizeMB =
//         m.sizeBytes != null
//           ? (m.sizeBytes / (1024 * 1024)).toFixed(2) + ' MB'
//           : lang === 'ar' ? 'غير معروف' : 'Unknown';

//       const dateStr =
//         m.lastModifiedISO
//           ? new Date(m.lastModifiedISO).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric',
//             })
//           : lang === 'ar' ? 'غير متاح' : 'Unavailable';

//       setMeta({
//         title: m.filename || decodeURIComponent(fileUrl.split('/').pop() || 'document.pdf'),
//         size: sizeMB,
//         lastUpdated: dateStr,
//       });
//     }

//     async function fetchMetadataFromHead() {
//       try {
//         const res = await fetch(fileUrl, { method: 'HEAD' });
//         const sizeBytes = res.headers.get('Content-Length');
//         const lastModified = res.headers.get('Last-Modified');

//         const sizeMB = sizeBytes
//           ? (parseInt(sizeBytes, 10) / (1024 * 1024)).toFixed(2) + ' MB'
//           : lang === 'ar' ? 'غير معروف' : 'Unknown';

//         const dateStr = lastModified
//           ? new Date(lastModified).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric',
//             })
//           : lang === 'ar' ? 'غير متاح' : 'Unavailable';

//         const filename = decodeURIComponent(fileUrl.split('/').pop() || 'document.pdf');

//         setMeta({
//           title: filename,
//           size: sizeMB,
//           lastUpdated: dateStr,
//         });
//       } catch (error) {
//         console.error('Failed to fetch file metadata:', error);
//         setMeta({
//           title: decodeURIComponent(fileUrl.split('/').pop() || 'document.pdf'),
//           size: lang === 'ar' ? 'غير معروف' : 'Unknown',
//           lastUpdated: lang === 'ar' ? 'غير متاح' : 'Unavailable',
//         });
//       }
//     }

//     if (preMeta) {
//       applyPreMeta(preMeta);
//     } else {
//       fetchMetadataFromHead();
//     }
//   }, [fileUrl, lang, preMeta]);

//   return (
//     <div
//       ref={cardRef}
//       className={clsx(
//         "overflow-x-hidden cursor-pointer bg_Beige_reversed dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-lg transition-shadow xxxs:w-[290px] xxs:w-[360px]",
//         visible ? animation : "opacity-0 translate-x-10"
//       )}
//     >
//       {/* Thumbnail */}
//       <div
//         className="relative bg-white flex justify-center items-center"
//         style={typeof window !== 'undefined' && window.innerWidth >= 400 ? { height: 500 } : { height: 370 }}
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//       >
//         <Document file={fileUrl} loading={<span className="text-gray-400">{lang === 'ar' ? 'جاري التحميل...' : 'Loading...'}</span>}>
//           <Page pageNumber={1} width={typeof window !== 'undefined' && window.innerWidth >= 400 ? 350 : 290} renderTextLayer={false} renderAnnotationLayer={false} />
//         </Document>

//         {/* Eye icon overlay */}
//         <div
//           className={clsx(
//             'absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity',
//             hover ? 'opacity-100' : 'opacity-0'
//           )}
//         >
//           <EyeIcon
//             className="w-10 h-10 text-white"
//             onClick={(e) => {
//               e.stopPropagation();
//               onPreview();
//             }}
//           />
//         </div>
//       </div>

//       {/* Info */}
//       <div className="p-4 space-y-2">
//         <h3 className="text-lg font-extrabold line-clamp-2">{meta.title}</h3>
//         <div className={clsx(
//           "text-black grid font-extrabold",
//           lang === 'ar' ? 'Grid_Ar text-lg' : 'Grid_En xxxs:text-sm xxs:text-lg'
//         )}>
//           <p className='flex flex-col'>
//             {lang === 'ar'
//               ? <><span>نوع الملف:</span><span className='mt-3'>PDF</span></>
//               : <><span> File Type:</span><span className='mt-3'>PDF</span></>
//             }
//           </p>
//           <p className='flex flex-col'>
//             {lang === 'ar'
//               ? <><span>آخر تحديث:</span><span className='mt-3'>{meta.lastUpdated}</span></>
//               : <><span> Last Updated:</span><span className='mt-3'>{meta.lastUpdated}</span></>
//             }
//           </p>
//           <p className='flex flex-col'>
//             {lang === 'ar'
//               ? <><span>حجم الملف:</span><span dir='ltr' className='mt-3'>{meta.size}</span></>
//               : <><span> File Size:</span><span className='mt-3'>{meta.size}</span></>
//             }
//           </p>
//         </div>

//         {/* Actions */}
//         <div className={clsx(
//           "flex justify-between items-center pt-2 font-extrabold",
//           lang === 'ar' ? 'flex-row-reverse' : 'flex-row'
//         )}>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               onPreview();
//             }}
//             className="bg-black text-white px-3 py-1.5 rounded hover:bg-white hover:text-black text-lg"
//           >
//             {lang === 'ar' ? 'عرض' : 'View'}
//           </button>
//           <a
//             href={fileUrl}
//             download
//             onClick={(e) => e.stopPropagation()}
//             className={clsx(
//               "flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded hover:bg-white hover:text-black text-lg",
//               lang === 'ar' ? "flex-row-reverse" : "flex-row"
//             )}
//           >
//             <ArrowDownTrayIcon className="w-4 h-4" />
//             {lang === 'ar' ? 'تحميل' : 'Download'}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ClientPDFSection({
//   pdf,
//   isArabic,
//   animation,
//   title,
//   preMeta, // NEW
// }: {
//   pdf: string;
//   animation: string;
//   isArabic: boolean;
//   title: string;
//   preMeta?: PdfMeta; // NEW
// }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <section className="p-0 flex flex-col items-center">
//         <FuturisticHeading rtl={isArabic}>{title}</FuturisticHeading>
//         <div className="flex flex-wrap justify-center gap-6 mt-6">
//           <PDFCard
//             fileUrl={pdf}
//             lang={isArabic ? 'ar' : 'en'}
//             animation={animation}
//             onPreview={() => setIsOpen(true)}
//             preMeta={preMeta} // NEW
//           />
//         </div>
//       </section>

//       <PdfModal
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//         fileUrl={pdf}
//         lang={isArabic ? 'ar' : 'en'}
//       />
//     </>
//   );
// }









'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Document, Page, pdfjs } from 'react-pdf';
import { ArrowDownTrayIcon, EyeIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import FuturisticHeading from './FuturisticHeading';
import type { PdfMeta } from '@/lib/pdf-meta';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfModal = dynamic(() => import('@/components/PdfViewer').then(mod => mod.PdfModal), { ssr: false });

interface PDFCardProps {
  fileUrl: string;
  lang: 'en' | 'ar';
  animation: string;
  onPreview: () => void;
  preMeta?: PdfMeta;
}

function PDFCard({ fileUrl, lang, onPreview, animation, preMeta }: PDFCardProps) {
  const [hover, setHover] = useState(false);
  const [meta, setMeta] = useState({
    title: '',
    size: '',
    pages: '',
  });

  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Track number of pages
  const [numPages, setNumPages] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(false);
            requestAnimationFrame(() => setVisible(true));
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function applyPreMeta(m: PdfMeta) {
      const sizeMB =
        m.sizeBytes != null
          ? (m.sizeBytes / (1024 * 1024)).toFixed(2) + ' MB'
          : lang === 'ar' ? 'غير معروف' : 'Unknown';

      setMeta({
        title: m.filename || decodeURIComponent(fileUrl.split('/').pop() || 'document.pdf'),
        size: sizeMB,
        pages: numPages ? `${numPages}` : lang === 'ar' ? 'غير متاح' : 'Unavailable',
      });
    }

    if (preMeta) {
      applyPreMeta(preMeta);
    } else {
      const filename = decodeURIComponent(fileUrl.split('/').pop() || 'document.pdf');
      setMeta({
        title: filename,
        size: lang === 'ar' ? 'غير معروف' : 'Unknown',
        pages: numPages ? `${numPages}` : lang === 'ar' ? 'غير متاح' : 'Unavailable',
      });
    }
  }, [fileUrl, lang, preMeta, numPages]);

  return (
    <div
      ref={cardRef}
      className={clsx(
        "overflow-x-hidden cursor-pointer bg_Beige_reversed dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-lg transition-shadow xxxs:w-[290px] xxs:w-[360px]",
        visible ? animation : "opacity-0 translate-x-10"
      )}
    >
      {/* Thumbnail */}
      <div
        className="relative bg-white flex justify-center items-center"
        style={typeof window !== 'undefined' && window.innerWidth >= 400 ? { height: 500 } : { height: 370 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Document
          file={fileUrl}
          loading={<span className="text-gray-400">{lang === 'ar' ? 'جاري التحميل...' : 'Loading...'}</span>}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)} // 👈 here
        >
          <Page
            pageNumber={1}
            width={typeof window !== 'undefined' && window.innerWidth >= 400 ? 350 : 290}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>

        {/* Eye icon overlay */}
        <div
          className={clsx(
            'absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity',
            hover ? 'opacity-100' : 'opacity-0'
          )}
        >
          <EyeIcon
            className="w-10 h-10 text-white"
            onClick={(e) => {
              e.stopPropagation();
              onPreview();
            }}
          />
        </div>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-extrabold line-clamp-2">{meta.title}</h3>
        <div
          className={clsx(
            "text-black grid font-extrabold",
            lang === 'ar' ? 'Grid_Ar text-lg' : 'Grid_En xxxs:text-sm xxs:text-lg'
          )}
        >
          <p className="flex flex-col">
            {lang === 'ar'
              ? <><span>نوع الملف:</span><span className="mt-3">PDF</span></>
              : <><span> File Type:</span><span className="mt-3">PDF</span></>
            }
          </p>
          <p className="flex flex-col">
            {lang === 'ar'
              ? <><span>عدد الصفحات:</span><span className="mt-3">{numPages ?? 'غير متاح'}</span></>
              : <><span> Pages:</span><span className="mt-3">{numPages ?? 'Unavailable'}</span></>
            }
          </p>
          <p className="flex flex-col">
            {lang === 'ar'
              ? <><span>حجم الملف:</span><span dir="ltr" className="mt-3">{meta.size}</span></>
              : <><span> File Size:</span><span className="mt-3">{meta.size}</span></>
            }
          </p>
        </div>

        {/* Actions */}
        <div
          className={clsx(
            "flex justify-between items-center pt-2 font-extrabold",
            lang === 'ar' ? 'flex-row-reverse' : 'flex-row'
          )}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPreview();
            }}
            className="bg-black text-white px-3 py-1.5 rounded hover:bg-white hover:text-black text-lg"
          >
            {lang === 'ar' ? 'عرض' : 'View'}
          </button>
          <a
            href={fileUrl}
            download
            onClick={(e) => e.stopPropagation()}
            className={clsx(
              "flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded hover:bg-white hover:text-black text-lg",
              lang === 'ar' ? "flex-row-reverse" : "flex-row"
            )}
          >
            <ArrowDownTrayIcon className="w-4 h-4" />
            {lang === 'ar' ? 'تحميل' : 'Download'}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ClientPDFSection({
  pdf,
  isArabic,
  animation,
  title,
  preMeta,
}: {
  pdf: string;
  animation: string;
  isArabic: boolean;
  title: string;
  preMeta?: PdfMeta;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="p-0 flex flex-col items-center">
        <FuturisticHeading rtl={isArabic}>{title}</FuturisticHeading>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <PDFCard
            fileUrl={pdf}
            lang={isArabic ? 'ar' : 'en'}
            animation={animation}
            onPreview={() => setIsOpen(true)}
            preMeta={preMeta}
          />
        </div>
      </section>

      <PdfModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        fileUrl={pdf}
        lang={isArabic ? 'ar' : 'en'}
      />
    </>
  );
}

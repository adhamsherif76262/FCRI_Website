// 'use client';

// import { useEffect, useState } from 'react';
// import { Document, Page,pdfjs } from 'react-pdf';
// // import type { PDFDocumentProxy } from 'react-pdf';
// // import type { PDFDocumentProxy } from 'pdfjs-dist';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';
// // import './GlobalPdfWorker';

// interface PdfViewerProps {
//   fileUrl: string;
//   lang: 'en' | 'ar';
// }

// const onDocumentLoadSuccess = (document: any) => {
//   setNumPages(document.numPages);
// };

// export default function PdfViewer({ fileUrl, lang }: PdfViewerProps) {
//     {
//     useEffect(() => {
//         pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// }, []);

//   const [numPages, setNumPages] = useState<number | null>(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [isRendering, setIsRendering] = useState(false);

//   const onDocumentLoadSuccess = (pdf: PDFDocumentProxy) => {
//     setNumPages(pdf.numPages);
//   };

//   const isRTL = lang === 'ar';

//   const goToPrevPage = () => {
//     if (pageNumber > 1) {
//       setIsRendering(true);
//       setPageNumber(prev => prev - 1);
//     }
//   };

//   const goToNextPage = () => {
//     if (pageNumber < (numPages || 1)) {
//       setIsRendering(true);
//       setPageNumber(prev => prev + 1);
//     }
//   };

//   return (
//     <div className={`w-full flex flex-col items-center space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
//       <div className="border shadow rounded-md overflow-hidden w-full max-w-4xl mx-auto">
//         <Document
//           file={fileUrl}
//           onLoadSuccess={onDocumentLoadSuccess}
//           loading={<p className="text-center py-4">{isRTL ? 'جاري التحميل...' : 'Loading...'}</p>}
//           error={<p className="text-red-600 text-center py-4">{isRTL ? 'فشل التحميل' : 'Failed to load PDF'}</p>}
//         >
//           {/* <Page pageNumber={pageNumber} width={800}/> */}
//             <Page
//           pageNumber={pageNumber}
//           width={800}
//           onRenderSuccess={() => setIsRendering(false)}
//           onRenderError={() => setIsRendering(false)}
//         />
//         </Document>
//       </div>

//       <div className="flex items-center space-x-4">
//         <button
//         //   onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages || 1))}
//           onClick={goToPrevPage}
//           disabled={pageNumber >= (numPages || 1) || isRendering}
          
//           className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//           >
//           {isRTL ? 'السابق' : 'Previous'}
//         </button>
//         <span>
//           {isRTL ? 'صفحة' : 'Page'} {pageNumber} / {numPages}
//         </span>
//         <button
//         //   onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages || 1))}
//           onClick={goToNextPage}
//           disabled={pageNumber >= (numPages || 1)}
//           className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//         >
//           {isRTL ? 'التالي' : 'Next'}
//         </button>
//       </div>
//     </div>
//   );
// }
// }

// 'use client';

// import { useEffect, useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import type { PDFDocumentProxy } from 'pdfjs-dist';

// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

// interface PdfViewerProps {
//   fileUrl: string;
//   lang: 'en' | 'ar';
// }

// export default function PdfViewer({ fileUrl, lang }: PdfViewerProps) {
//   const [numPages, setNumPages] = useState<number | null>(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [isRendering, setIsRendering] = useState(false);

//   const isRTL = lang === 'ar';

//   useEffect(() => {
//     pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
//   }, []);

//   const onDocumentLoadSuccess = (pdf: PDFDocumentProxy) => {
//     setNumPages(pdf.numPages);
//   };

//   const goToPrevPage = () => {
//     if (pageNumber > 1) {
//       setIsRendering(true);
//       setPageNumber(prev => prev - 1);
//     }
//   };

//   const goToNextPage = () => {
//     if (pageNumber < (numPages || 1)) {
//       setIsRendering(true);
//       setPageNumber(prev => prev + 1);
//     }
//   };

//   return (
//     <div className={`w-full flex flex-col items-center space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
//       <div className="border shadow rounded-md overflow-hidden w-full max-w-4xl mx-auto">
//         <Document
//           file={fileUrl}
//           onLoadSuccess={onDocumentLoadSuccess}
//           loading={<p className="text-center py-4">{isRTL ? 'جاري التحميل...' : 'Loading...'}</p>}
//           error={<p className="text-red-600 text-center py-4">{isRTL ? 'فشل التحميل' : 'Failed to load PDF'}</p>}
//         >
//           <Page
//             pageNumber={pageNumber}
//             width={800}
//             onRenderSuccess={() => setIsRendering(false)}
//             onRenderError={() => setIsRendering(false)}
//           />
//         </Document>
//       </div>

//       <div className="flex items-center space-x-4">
//         <button
//           onClick={goToPrevPage}
//           disabled={pageNumber <= 1 || isRendering}
//           className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//         >
//           {isRTL ? 'السابق' : 'Previous'}
//         </button>
//         <span>
//           {isRTL ? 'صفحة' : 'Page'} {pageNumber} / {numPages}
//         </span>
//         <button
//           onClick={goToNextPage}
//           disabled={pageNumber >= (numPages || 1) || isRendering}
//           className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//         >
//           {isRTL ? 'التالي' : 'Next'}
//         </button>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import { useEffect, useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

// interface PdfViewerProps {
//   fileUrl: string;
//   lang: 'en' | 'ar';
// }

// const PAGES_PER_CHUNK = 10;

// export default function PdfViewer({ fileUrl, lang }: PdfViewerProps) {
//   const [numPages, setNumPages] = useState<number | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [chunkStart, setChunkStart] = useState(1);

//   const isRTL = lang === 'ar';

//   useEffect(() => {
//     pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
//   }, []);

//   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//     setNumPages(numPages);
//     setCurrentPage(1);
//     setChunkStart(1);
//   };

//   const goToPage = (page: number) => {
//     const newChunkStart = Math.floor((page - 1) / PAGES_PER_CHUNK) * PAGES_PER_CHUNK + 1;
//     setChunkStart(newChunkStart);
//     setCurrentPage(page);
//   };

//   const handleNext = () => {
//     if (!numPages) return;
//     const nextPage = currentPage + 1;
//     if (nextPage <= numPages) {
//       goToPage(nextPage);
//     }
//   };

//   const handlePrev = () => {
//     const prevPage = currentPage - 1;
//     if (prevPage >= 1) {
//       goToPage(prevPage);
//     }
//   };

//   const renderPages = () => {
//     const pages = [];
//     for (let i = chunkStart; i < chunkStart + PAGES_PER_CHUNK && i <= (numPages || 0); i++) {
//       pages.push(
//         <div
//           key={`page_${i}`}
//           style={{
//             display: i === currentPage ? 'block' : 'none',
//             transition: 'opacity 0.2s ease',
//           }}
//         >
//           <Page pageNumber={i} width={800} />
//         </div>
//       );
//     }
//     return pages;
//   };

//   return (
//     <div className={`w-full flex flex-col items-center ${isRTL ? 'text-right' : 'text-left'}`}>
//       <div className="w-full max-w-4xl mx-auto">
//         <Document
//           file={fileUrl}
//           onLoadSuccess={onDocumentLoadSuccess}
//           loading={<p className="text-center py-4">{isRTL ? 'جاري التحميل...' : 'Loading PDF...'}</p>}
//           error={<p className="text-red-600 text-center py-4">{isRTL ? 'فشل التحميل' : 'Failed to load PDF'}</p>}
//         >
//           {renderPages()}
//         </Document>

//         {/* Navigation Buttons */}
//         <div className="mt-6 flex justify-center gap-4">
//           <button
//             onClick={handlePrev}
//             disabled={currentPage === 1}
//             className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
//           >
//             {isRTL ? 'السابق' : 'Previous'}
//           </button>

//           <span className="px-4 py-2">
//             {isRTL ? `صفحة ${currentPage} من ${numPages}` : `Page ${currentPage} of ${numPages}`}
//           </span>

//           <button
//             onClick={handleNext}
//             disabled={currentPage === numPages}
//             className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
//           >
//             {isRTL ? 'التالي' : 'Next'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




// 'use client';

// import { useEffect, useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

// interface PdfViewerProps {
//   fileUrl: string;
//   lang: 'en' | 'ar';
// }

// const PAGES_PER_CHUNK = 10;

// export default function PdfViewer({ fileUrl, lang }: PdfViewerProps) {
//   const [numPages, setNumPages] = useState<number | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [chunkStart, setChunkStart] = useState(1);

//   const isRTL = lang === 'ar';

//   useEffect(() => {
//       // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//       pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

//   }, []);
//   // useEffect(() => {
//   //   pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
//   // }, []);

//   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//     setNumPages(numPages);
//     setCurrentPage(1);
//     setChunkStart(1);
//   };

//   const goToPage = (page: number) => {
//     const newChunkStart = Math.floor((page - 1) / PAGES_PER_CHUNK) * PAGES_PER_CHUNK + 1;
//     setChunkStart(newChunkStart);
//     setCurrentPage(page);
//   };

//   const handleNext = () => {
//     if (!numPages) return;
//     const nextPage = currentPage + 1;
//     if (nextPage <= numPages) {
//       goToPage(nextPage);
//     }
//   };

//   const handlePrev = () => {
//     const prevPage = currentPage - 1;
//     if (prevPage >= 1) {
//       goToPage(prevPage);
//     }
//   };

// const renderPages = () => {
//   const pages = [];
//   for (let i = chunkStart; i < chunkStart + PAGES_PER_CHUNK && i <= (numPages || 0); i++) {
//     const isVisible = i === currentPage;
//     pages.push(
//       <div
//         key={`page_${i}`}
//         className={`absolute inset-0 transition-opacity duration-300 ease-in-out flex justify-center ${
//           isVisible ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
//         }`}
//       >
//         <Page pageNumber={i} width={800} />
//       </div>
//     );
//   }
//   return pages;
// };


//   return (
//     <div className={`w-full flex flex-col items-center ${isRTL ? 'text-right' : 'text-left'}`}>
//       <div className="w-full max-w-4xl mx-auto relative min-h-[1100px]">
//         <Document
//           file={fileUrl}
//           onLoadSuccess={onDocumentLoadSuccess}
//           loading={<p className="text-center py-4">{isRTL ? 'جاري التحميل...' : 'Loading PDF...'}</p>}
//           error={<p className="text-red-600 text-center py-4">{isRTL ? 'فشل التحميل' : 'Failed to load PDF'}</p>}
//         >
//           {renderPages()}
//         </Document>
//       </div>

// {/* <div className="w-full max-w-4xl mx-auto relative min-h-[1100px]">
//   <Document
//     file={fileUrl}
//     onLoadSuccess={onDocumentLoadSuccess}
//     loading={<p className="text-center py-4">{isRTL ? 'جاري التحميل...' : 'Loading PDF...'}</p>}
//     error={<p className="text-red-600 text-center py-4">{isRTL ? 'فشل التحميل' : 'Failed to load PDF'}</p>}
//   >
//       {renderPages()}
//     <div className="relative w-full h-full">
//     </div>
//   </Document>
// </div> */}

//       {/* Navigation Buttons */}
//       <div className="mt-6 flex justify-center gap-4">
//         <button
//           onClick={handlePrev}
//           disabled={currentPage === 1}
//           className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
//         >
//           {isRTL ? 'السابق' : 'Previous'}
//         </button>

//         <span className="px-4 py-2">
//           {isRTL ? `صفحة ${currentPage} من ${numPages}` : `Page ${currentPage} of ${numPages}`}
//         </span>

//         <button
//           onClick={handleNext}
//           disabled={currentPage === numPages}
//           className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
//         >
//           {isRTL ? 'التالي' : 'Next'}
//         </button>
//       </div>
//     </div>
//   );
// }

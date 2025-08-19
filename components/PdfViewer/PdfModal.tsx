// components/PdfViewer/PdfModal.tsx
'use client';

import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Document, Page, pdfjs } from 'react-pdf';
import { XMarkIcon, ArrowLeftIcon, ArrowRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
  lang: 'en' | 'ar';
}

const PAGES_PER_CHUNK = 5;

export default function PdfModal({ isOpen, onClose, fileUrl, lang }: PdfModalProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [chunkStart, setChunkStart] = useState(1);

  const isRTL = lang === 'ar';

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setCurrentPage(1);
    setChunkStart(1);
  };

  const goToPage = (page: number) => {
    const newChunkStart = Math.floor((page - 1) / PAGES_PER_CHUNK) * PAGES_PER_CHUNK + 1;
    setChunkStart(newChunkStart);
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (!numPages) return;
    const nextPage = currentPage + 1;
    if (nextPage <= numPages) goToPage(nextPage);
    // console.log("currentPage is " + currentPage)
    // console.log("numpages is " + numPages)
  };

  const handlePrev = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 1) goToPage(prevPage);
  };

const renderPages = () => {
  const pages = [];
  for (
    let i = chunkStart;
    i < chunkStart + PAGES_PER_CHUNK && i <= (numPages || 0);
    i++
  ) {
    pages.push(
      <div
        key={`page_${i}`}
        className={clsx(
          i === currentPage ? 'flex justify-center' : 'hidden',
          'w-full' // make sure it takes full width of modal
        )}
      >
        <Page
          pageNumber={i}
          renderAnnotationLayer={false} // 🔹 Removes annotation layer & its extra space
          renderTextLayer={true}        // Keep text layer for selectable/searchable text
          className={lang === "ar" ? "" : "mt-5"}
          width={
            window.innerWidth >= 1000 ? 900 
            : window.innerWidth < 1000 && window.innerWidth >= 700 ? 700 
            : window.innerWidth < 700 && window.innerWidth >= 500? 450 
            : window.innerWidth < 500 && window.innerWidth >= 400 ? 375 
            : window.innerWidth < 400 ? 275 : 0
          } 
        />
      </div>
    );
  }
  return pages;
};

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden">
        <div className="max-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70" /> */}
            <div className="bg-black/30 fixed inset-0" aria-hidden="true" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-5xl p-4 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-900 shadow-xl rounded-lg relative">
              {/* Close Button */}
              <button title='Modal Close Button' onClick={onClose} className="duration-1000 font-extrabold absolute xxxs:top-1 xxxs:right-1 xxs:top-5 xxs:right-5 text-black hover:text-red-600">
                <XMarkIcon className="md:w-10 md:h-10 sm:w-8 sm:h-8 xxxs:h-6 xxxs:w-6" />
                
              </button>
                <a
                  href={fileUrl}
                  download
                  className={clsx(
                    "duration-1000 font-extrabold flex items-center gap-4 bg-black text-white px-3 py-2 rounded hover:bg_Beige hover:text-black justify-center mx-auto xxs:flex",
                    lang === "ar" ? "flex-row-reverse w-28" : "flex-row w-40 xxxs:hidden ",
                  )}
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  {isRTL ? 'تحميل' : 'Download'}
                </a>
              {/* PDF Content */}
              <div className="relative">
                <Document
                  file={fileUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={<p className="text-center">{isRTL ? 'جاري التحميل...' : 'Loading PDF...'}</p>}
                  error={<p className="text-center text-red-500">{isRTL ? 'فشل التحميل' : 'Failed to load PDF'}</p>}
                >
                  {renderPages()}
                </Document>
              </div>

              {/* Controls */}
              <div className={clsx(
                "mt-6 flex flex-wrap items-center justify-between gap-4 px-2 ",
                lang === "ar" ?  "flex-row-reverse xxxs:px-0" : "flex-row xxxs:px-0"
              )}>
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className={clsx(
                    "duration-1000 font-extrabold flex items-center gap-4 bg-black text-white hover:bg_Beige hover:text-black px-3 py-2 rounded disabled:opacity-50 ",
                    lang === "ar" ? "flex-row-reverse xxs:w-24 xxxs:w-16 xxxs:gap-2 xxxs:px-1 xxs:px-4 xxs:gap-3" : "flex-row  xxxs:w-28 xxxs:gap-2 xxxs:px-2"
                  )}
                  // className="duration-1000 font-extrabold flex flex-row-reverse items-center gap-4 bg-black text-white hover:bg_Beige hover:text-black px-3 py-2 rounded disabled:opacity-50 "
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                  {isRTL ? 'السابق' : 'Previous'}
                </button>

                <span className="text-sm font-extrabold">
                  {isRTL
                    ? `صفحة ${currentPage} من ${numPages}`
                    : `Page ${currentPage} of ${numPages}`}
                </span>

                <button
                  onClick={handleNext}
                  disabled={currentPage === numPages}
                  className={clsx(
                    "duration-1000 font-extrabold flex items-center gap-4 bg-black text-white hover:bg_Beige hover:text-black px-3 py-2 rounded disabled:opacity-50 ",
                    lang === "ar" ? "flex-row-reverse xxs:w-24 xxxs:w-16 xxxs:gap-2 xxxs:px-1 xxs:px-5 xxs:gap-3" : "flex-row xxxs:w-[93px] xxxs:gap-3 xxxs:px-3 xxs:w-[100px] xxs:px-4 xxs:gap-3"
                  )}
                >
                  {isRTL ? 'التالي' : 'Next'}
                  <ArrowRightIcon className="w-5 h-5" />
                </button>

                <a
                  href={fileUrl}
                  download
                  className={clsx(
                    "duration-1000 font-extrabold flex items-center gap-4 bg-black text-white px-3 py-2 rounded hover:bg_Beige hover:text-black xxs:hidden",
                    lang === "ar" ? "flex-row-reverse w-28 xxxs:hidden" : "flex-row xxs:w-40 xxxs:w-32 xxxs:gap-2 xxxs:px-2 xxxs:flex xxxs:justify-center",
                    window.innerWidth >= 385 ? "mx-auto" : "mx-0"
                  )}
                  // className="duration-1000 font-extrabold flex items-center gap-2 px-3 py-2 rounded bg-black text-white hover:bg_Beige hover:text-black justify-center xxxs:flex xxs:hidden"
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  {isRTL ? 'تحميل' : 'Download'}
                </a>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
// // types/react-pdf.d.ts
// declare module 'react-pdf' {
//   import * as React from 'react';

//   export interface DocumentProps {
//     file?: string | File | { url: string };
//     onLoadSuccess?: (pdf: any) => void;
//     onLoadError?: (error: Error) => void;
//     renderMode?: 'canvas' | 'svg' | 'none';
//     className?: string;
//     children?: React.ReactNode;
//   }

//   export interface PageProps {
//     pageNumber: number;
//     scale?: number;
//     renderTextLayer?: boolean;
//     renderAnnotationLayer?: boolean;
//     className?: string;
//   }

//   export const Document: React.FC<DocumentProps>;
//   export const Page: React.FC<PageProps>;
//   export const pdfjs: any;
// }



// types/react-pdf.d.ts
declare module 'react-pdf' {
  import * as React from 'react';

  export interface DocumentProps {
    file?: string | File | { url: string };
    onLoadSuccess?: (params: { numPages: number }) => void;
    onLoadError?: (error: Error) => void;
    loading?: React.ReactNode;
    error?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
  }

  export interface PageProps {
    pageNumber: number;
    scale?: number;
    renderTextLayer?: boolean;
    renderAnnotationLayer?: boolean;
    width?: number;
    className?: string;
  }

  export const Document: React.FC<DocumentProps>;
  export const Page: React.FC<PageProps>;
  export const pdfjs: {
    version: string;
    GlobalWorkerOptions: {
      workerSrc: string;
    };
  };
}

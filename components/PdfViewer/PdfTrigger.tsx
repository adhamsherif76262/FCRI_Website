// components/PdfViewer/PdfTrigger.tsx
'use client';

import { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/outline'; // or any icon set you prefer

interface PdfTriggerProps {
  fileName: string;
  onClick: () => void;
}

export default function PdfTrigger({ fileName, onClick }: PdfTriggerProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full max-w-sm border border-gray-300 rounded-md p-4 cursor-pointer transition hover:shadow-lg bg-white dark:bg-gray-800"
    >
      <p className="text-center truncate">{fileName}</p>

      <div
        className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <EyeIcon className="w-8 h-8 text-white" />
      </div>
    </div>
  );
}

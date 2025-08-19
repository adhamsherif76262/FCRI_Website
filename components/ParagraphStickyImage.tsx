'use client';

import clsx from 'clsx';
import Image from 'next/image';

interface ParagraphStickyImageProps {
  rtl?: boolean; // if true → rtl, else → ltr
  imageSrc: string;
  title: string;
  paragraphs: string[];
}

const ParagraphStickyImage: React.FC<ParagraphStickyImageProps> = ({ rtl = false, imageSrc, title , paragraphs}) => {
  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="p-6 bg_Beige rounded-3xl shadow-2xl border border-cyan-700/40 xl:min-width-sm mx-auto">
      <h2 className={clsx(
        "font-bold mb-6 text-center",
        rtl ? 'sm:text-4xl xs:text-3xl xxxs:text-2xl' : 'lg:text-4xl sm:text-3xl xs:text-2xl xxxs:text-xl'
      )}>{title}</h2>

      <div className="flex flex-col md:flex-row shadow-2xl items-center md:items-start">
        {/* Responsive Sticky/Top Image */}
        <div className="w-[100%] md:w-auto md:sticky md:top-4 md:self-start p-0">
          <Image
            src={imageSrc}
            alt="Illustration"
            width={500}
            height={500}
            className="xxxs:w-96 xl:w-[800px] lg:w-[700px] md:w-[500px] mx-auto rounded border max-h-[550px]"
          />
        </div>

        {/* Scrollable Paragraph */}
        <div className={clsx(
            "overflow-y-auto max-h-[500px] p-4 text-justify leading-relaxed w-full bg_Gray font-black",
            rtl ? 'lg:text-3xl md:text-[26px] sm:text-2xl xs:text-xl xxxs:text-lg' : 'sm:text-2xl xs:text-xl xxxs:text-lg'
        )}>
         {paragraphs.map((p,i)=>
         <p key={i} className='text-center mb-8 sm:leading-snug md:leading-relaxed xs:leading-[2.5rem]'>
            {p}
         </p>
        )}
        </div>
      </div>
    </section>
  );
};

export default ParagraphStickyImage;

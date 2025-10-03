"use client"
import ParagraphStickyImage from '@/components/ParagraphStickyImage';
import { usePathname } from "next/navigation";
import arProduction from '../../../locales/ar/production_Ar.json';
import enProduction from '../../../locales/en/production_En.json';
import FuturisticHeading from '@/components/FuturisticHeading';
import OrganicPlantListV3Compatible from '@/components/organic-plant-list';
import EnhancedCircularImageList from '@/components/enhanced-circular-image-list';
import ClientPDFSection from '@/components/ClientPDFSection';

export default function ProductionPage() {
    const pathname = usePathname();
    const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
    const isRTL = currentLang === 'ar';
    const t = currentLang === 'ar' ? arProduction : enProduction;
  return (

    <main className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-1000 xxxs:OVERFLOW-X xl:overflow-x-visible">
      <FuturisticHeading rtl={isRTL}>
        {currentLang === 'ar' ? "قطاع الانتاج بالمعهد" : "The Institute’s Production Sector"}
      </FuturisticHeading>

      <div className="mt-10 xxxs:min-w-[100%] mb-10">
          <ParagraphStickyImage title={t.B1_Title} imageSrc={t.Img_Source} paragraphs={t.B1} rtl={isRTL}></ParagraphStickyImage>
      </div>
      <div className="mt-16 mb-8 w-full max-w-8xl mx-auto">
        <section className="bg_Beigse bg-green-500 bg-opacity-50 backdrop-blur-sm rounded-3xl px-4 py-8 shadow-xl">
          <div className="flex justify-center">
            <EnhancedCircularImageList Title={isRTL ? "اهمية قطاع الانتاج بالمعهد" : "The Institute's Production Sector Importance"} data={t.Production_Mission} language={currentLang}></EnhancedCircularImageList>
          </div>
        </section>
      </div>
      <OrganicPlantListV3Compatible data={t.Futuristic_Vision_Array} language={currentLang} Main_Title={t.Main_Title} Sub_Title={t.Sub_Title}></OrganicPlantListV3Compatible>
      <div className='space-y-10 py-6 xxxs:overflow-hidden xxs:overflow-visible'>
        <ClientPDFSection
          title={isRTL ? 'كتاب الأصناف' : 'Varaities Book'}
          pdf={t.Production_File_PDF_Path}
          isArabic={isRTL}
          animation="rotate-in-blur"
          // preMeta={projectsMeta}
          />
      </div>
    </main>
  )
}

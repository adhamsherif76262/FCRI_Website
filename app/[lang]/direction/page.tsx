"use client"
import ParagraphStickyImage from '@/components/ParagraphStickyImage';
// import { Metadata } from 'next';
import { usePathname } from "next/navigation";
import arDirection from '../../../locales/ar/direction_Ar.json';
import enDirection from '../../../locales/en/direction_En.json';
import FuturisticHeading from '@/components/FuturisticHeading';
import EnhancedCircularImageList from '@/components/enhanced-circular-image-list';
// Define the expected resolved type of params
// interface PageParams {
//   lang: 'en' | 'ar';
// }

// // Update the type of params in your component props
// interface PageProps {
//   params: Promise<PageParams>; // params is now a Promise
// }
// export async function generateMetadata({params,}: PageProps): Promise<Metadata> {
//     const resolvedParams = await params;
//   const { lang } = resolvedParams;
//   const isArabic = lang === 'ar';

//   return {
//     title: isArabic ? 'صفحة الارشاد' : 'Direction Page',
//   };
// }
export default function DirectionPage() {
    const pathname = usePathname();
    const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
    const isRTL = currentLang === 'ar';
    const t = currentLang === 'ar' ? arDirection : enDirection;
  return (

    <main className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-1000 xxxs:OVERFLOW-X xl:overflow-x-visible">
        <FuturisticHeading rtl={isRTL}>
          {currentLang === 'ar' ? "التريب و الارشاد الزراعي بالمعهد" : "The Institute’s Agricultural Training & Extension"}
        </FuturisticHeading>

        <div className="mt-10 xxxs:min-w-[100%] mb-10">
            <ParagraphStickyImage title={t.B1_Title} imageSrc={t.Img_Source} paragraphs={t.B1} rtl={isRTL}></ParagraphStickyImage>
        </div>

          <div className="my-16 w-full max-w-8xl mx-auto">
          <section className="bg_Beigse bg-green-500 bg-opacity-50 backdrop-blur-sm rounded-3xl px-4 py-8 shadow-xl">
            <div className="flex justify-center">
              {/* <EnhancedCircularImageList /> */}
              <EnhancedCircularImageList data={t.Direction_Mission} language={currentLang}></EnhancedCircularImageList>
            </div>
          </section>
        </div>
    </main>
  )
}

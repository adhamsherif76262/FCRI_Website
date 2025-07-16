"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import enHome from '@/locales/en/Home_En.json';
import arHome from '@/locales/ar/Home_Ar.json';
import FuturisticBulletSection from "@/components/FuturisticBulletSection";
import FuturisticParagraphSection from "@/components/FuturisticParagraphSection";
import FuturisticHeading from "@/components/FuturisticHeading";
export default function Home() {
  
    const pathname = usePathname();
    const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
    const t = currentLang === 'ar' ? arHome : enHome;
    const isRTL = currentLang === 'ar';

  return (
    <main className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-1000">

      <FuturisticHeading rtl={isRTL}>
        {currentLang === 'ar' ? "معهد بحوث المحاصيل الحقلية" : "Field Crops Research Institute"}
      </FuturisticHeading>

      <div className="xxxs:mt-4 md:mt-10">

            <FuturisticParagraphSection
              title={t.P1_Title}
              paragraphs={[t.P1]}
              rtl={isRTL}
            />
      </div>

      <div className="mt-8">

            <FuturisticParagraphSection
              title={t.P2_Title}
              paragraphs={[t.P2]}
              rtl={isRTL}
            />
      </div>

      <div className="mt-8">

            <FuturisticParagraphSection
              title={t.P3_Title}
              paragraphs={[t.P3]}
              rtl={isRTL}
            />
      </div>

      <Image src="/images/Dr_Alaa/Dr_Alaa_Pic_3_With_NewBg_Enhanced.png"
              alt="FCRI Logo"
              width={600}
              height={1000}
              className="mx-auto my-auto mt-12"
              >
      </Image>

      <div className="mt-8">
      <FuturisticBulletSection
                title={t.B1_Title}
                bullets={t.B1}
                grid ={false}
                icon="bolt" // or "dot", "star", "bolt", etc.
                rtl={isRTL}
              />
      </div>

      <div className="mt-8">
      <FuturisticBulletSection
                title={t.B2_Title}
                bullets={t.B2}
                grid ={true}
                icon="bookOpen" // or "dot", "star", "bolt", etc.
                rtl={isRTL}
              />
      </div>

      <div className="mt-8">
      <FuturisticBulletSection
                title={t.B3_Title}
                bullets={t.B3}
                grid ={false}
                icon="flame" // or "dot", "star", "bolt", etc.
                rtl={isRTL}
              />
      </div>

      <div className="mt-8">
      <FuturisticBulletSection
                title={t.B4_Title}
                bullets={t.B4}
                grid ={true}
                icon="hammer" // or "dot", "star", "bolt", etc.
                rtl={isRTL}
              />
      </div>

      <div className="mt-8">

            <FuturisticParagraphSection
              title={t.P4_Title}
              paragraphs={[t.P4]}
              rtl={isRTL}
            />
      </div>

    </main>
  );
}

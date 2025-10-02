"use client"

// import Image from "next/image";
import { usePathname } from "next/navigation";
import enHome from '@/locales/en/Home_En.json';
import arHome from '@/locales/ar/Home_Ar.json';
import FuturisticBulletSection from "@/components/FuturisticBulletSection";
import FuturisticParagraphSection from "@/components/FuturisticParagraphSection";
import FuturisticHeading from "@/components/FuturisticHeading";
import ParagraphStickyImage from "@/components/ParagraphStickyImage";
import Marquee3D from "@/components/Marquee3D";
import AnimatedCounter, { CounterData } from "@/components/AnimatedCounters";
import HexagonalMissionList from "@/components/hexagonal-mission-list";
// import CircularNetworkList from "@/components/circular-network-list";
import LayeredVisionList from "@/components/layered-vision-list";
import TimeLineList from "@/components/timeline-list";
// import OrganicPlantList from "@/components/organic-plant-list";
import clsx from "clsx";
// import TreeBranchHirarchyList from "@/components/tree-branch-hierarchy-list";
// import FlowingAchievementsList from "@/components/flowing-achievements-list";
// import {Department_Mission_Inner} from "@/locales/ar/departments/cell-biology_Ar.json"
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
// import 'pdfjs-dist/web/pdf_viewer.css'; 
// export const countersAR = [
//   { id: 1, title: 'الأبحاث العلمية', value: '700' },
//   { id: 2, title: 'التجارب الحقلية', value: '300' },
//   { id: 3, title: 'براءات الاختراع', value: '1500' },
//   { id: 4, title: 'التعاونات', value: '20' },
// ];

// export const  countersEN= [
//   { id: 1, title: 'Research Papers', value: '200' },
//   { id: 2, title: 'Field Trials', value: '90' },
//   { id: 3, title: 'Patents', value: '12' },
//   { id: 4, title: 'Collaborations', value: '40' },
// ];

const myCounters: CounterData[] = [
  { title_en: "Years of Experience", title_ar: "سنوات الخبرة", value: 52 },
  { title_en: "Number of Varieties", title_ar: "عدد الاصناف", value: 350 },
  { title_en: "Guidance Fields", title_ar: "حقول ارشادية(في العقد الأخير)", value: 100000 },
  { title_en: "National Campaigns", title_ar: "حملات قومية", value: 6 },
  { title_en: "General Staff", title_ar: "الكادر العام", value: 670 },
  { title_en: "Specialized Staff", title_ar: "الكادر الخاص", value: 730 },
]

export default function Home() {
  
    const pathname = usePathname();
    const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
    const isRTL = currentLang === 'ar';
    const t = currentLang === 'ar' ? arHome : enHome;
    // const Default_Circular_Design_Items : NetworkItem[] = Department_Mission
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-1000 xxxs:OVERFLOW-X xl:overflow-x-visible">

      
    {/* <CircularNetworkList items={[]} centerTitle="أهداف القسم" lang={currentLang}/> */}
    {/* <FlowingAchievementsList items={[]} lang={currentLang === 'ar' ? "ar" : "en"} Tree={true} Circular_Design_CenterTitle="Hello From Home Page Now now" Circular_Design_Items={Department_Mission_Inner}/> */}
    {/* <OrganicPlantList language={currentLang}/> */}
    <TimeLineList items={[]} />
    {/* <TreeBranchHirarchyList items={[]} /> */}

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
      <FuturisticBulletSection
                title={t.B2_Title}
                bullets={t.B2}
                grid ={true}
                icon="bookOpen" // or "dot", "star", "bolt", etc.
                rtl={isRTL}
              />
      </div>
      
          <FuturisticHeading rtl={isRTL}>
            {t.B6_Title}
          </FuturisticHeading>
          <LayeredVisionList isArabic={isRTL} items={t.B6} />

      {/* <div className="mt-8">

            <FuturisticParagraphSection
              title={t.P2_Title}
              paragraphs={[t.P2]}
              rtl={isRTL}
            />
      </div> */}


      <FuturisticHeading rtl={isRTL}>
        {t.B5_Title}
      </FuturisticHeading>
        <div className="font-black w-full mt-12 rounded-3xl shadow-2xl border border-cyan-700/40 xl:min-width bg_Beige">
          <h3 className={clsx(
            "xxxs:py-4 sm:py-8 text-center",
            isRTL ? "xxxs:text-3xl xs:text-3xl sm:text-4xl" : "xxxs:text-xl xxs:text-2xl md:text-2xl lg:text-3xl"
          )}>{isRTL ? "تخصصات المحاصيل" : "Crop Specializations"}</h3>
          <ol className="grid md:grid-cols-6  xxxs:grid-cols-2 gap-2">
            <li className={`bg_Gray hover:text-black ${isRTL ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isRTL ? "• الحبوب" : "• Cereals"}</li>
            <li className={`bg_Gray hover:text-black ${isRTL ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isRTL ? "• البقول" : "• Legumes"}</li>
            <li className={`bg_Gray hover:text-black ${isRTL ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isRTL ? "• الزيوت" : "• Oil Crops"}</li>
            <li className={`bg_Gray hover:text-black ${isRTL ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isRTL ? "• الالياف" : "• Fibers"}</li>
            <li className={`bg_Gray hover:text-black ${isRTL ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isRTL ? "• العلف" :  "• Fodder"}</li>
            <li className={`bg_Gray hover:text-black ${isRTL ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isRTL ? "• البصل" :  "• Onion"}</li>
          </ol>
          <h3 className={clsx(
            "xxxs:py-4 sm:py-8 text-center",
            isRTL ? "xxxs:text-3xl xs:text-3xl sm:text-4xl" : "xxxs:text-xl xxs:text-2xl md:text-2xl lg:text-3xl"
          )}>{isRTL ? "التخصصات الفنية" : "Technical Specializations"}</h3>
          <ol className="grid lg:grid-cols-4 xxs:grid-cols-2 xxxs:grid-cols-1 gap-y-2 sm:gap-x-8 xs:gap-x-1 xxs:gap-x-0 mb-10">
            <li className={`bg_Gray hover:text-black ${isRTL ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isRTL ? "• دراسة الخلية" : "• Cell Studies"}</li>
            <li className={`bg_Gray hover:text-black ${isRTL ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isRTL ? "• فسسولوجيا المحاصيل" : "• Cell Physiology"}</li>
            <li className={`bg_Gray hover:text-black ${isRTL ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isRTL ? "• تكنولوجيا البذور" : "• Seed Technology"}</li>
            <li className={`bg_Gray hover:text-black ${isRTL ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isRTL ? "• الاصول الوراثيه" : "• Genetic Resources"}</li>
          </ol>
        </div>
        
      <FuturisticHeading rtl={isRTL}>
        {t.B3_Title}
      </FuturisticHeading>

    <HexagonalMissionList isArabic={isRTL} items={t.B3}></HexagonalMissionList>

      {/* <div className="mt-8">

            <FuturisticParagraphSection
              title={t.P3_Title}
              paragraphs={[t.P3]}
              rtl={isRTL}
            />
      </div> */}
<div className="xxxs:min-w-[100%]">
  
<AnimatedCounter counters={myCounters}/>
</div>

    <div className="mt-10 max-width">
      <FuturisticHeading rtl={isRTL}>
        {currentLang === 'ar' ? "نحو اصناف وهجن تتحدي التغيرات المناخية" : "Towards varieties and hybrids that challenge climate change"}
      </FuturisticHeading>
      <Marquee3D 
        // isRTL={isRTL}
        images={[
          "/images/Home Hybrids/hybrid_1.jpg",
          "/images/Home Hybrids/hybrid_2.jpg",
          "/images/Home Hybrids/hybrid_3.png",
          "/images/Home Hybrids/hybrid_4.jpg",
          "/images/Home Hybrids/hybrid_5.png",
          "/images/Home Hybrids/hybrid_6.png",
          "/images/Home Hybrids/hybrid_7.png",
          "/images/Home Hybrids/hybrid_8.png",
          "/images/Home Hybrids/hybrid_9.png",
          "/images/Home Hybrids/hybrid_10.png",
          "/images/Home Hybrids/hybrid_11.jpg",
          "/images/Home Hybrids/hybrid_12.jpg",
          "/images/Home Hybrids/hybrid_13.jpg",
          "/images/Home Hybrids/hybrid_14.jpg",
          "/images/Home Hybrids/hybrid_15.png",
          "/images/Home Hybrids/hybrid_16.png",
          "/images/Home Hybrids/hybrid_17.png",
          "/images/Home Hybrids/hybrid_18.jpg",
          "/images/Home Hybrids/hybrid_19.jpg",
          "/images/Home Hybrids/hybrid_20.jpg"
        ]}
      />
    </div>



    <div className="mt-10 xxxs:min-w-[100%] mb-10">
      <ParagraphStickyImage
       paragraphs={t.P5}
       imageSrc={"/images/Dr_Alaa/Dr_Alaa_Pic_3_With_NewBg_Enhanced.png"}
       title={t.P5_Title}
       rtl={isRTL}/>
    </div>


      <FuturisticHeading rtl={isRTL}>
        {t.B4_Title}
      </FuturisticHeading>

    {/* <LayeredVisionList isArabic={isRTL} items={t.B4} /> */}

      <div className="xxxs:my-4 md:my-10">
        <FuturisticParagraphSection title="" paragraphs={t.B4} rtl={isRTL}></FuturisticParagraphSection>
      </div>

      {/* <div className="mt-8">

            <FuturisticParagraphSection
              title={t.P4_Title}
              paragraphs={[t.P4]}
              rtl={isRTL}
            />
      </div> */}
    </main>
  );
}

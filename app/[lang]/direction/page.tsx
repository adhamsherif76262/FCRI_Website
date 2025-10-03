"use client"
import ParagraphStickyImage from '@/components/ParagraphStickyImage';
// import { Metadata } from 'next';
import { usePathname } from "next/navigation";
import arDirection from '../../../locales/ar/direction_Ar.json';
import enDirection from '../../../locales/en/direction_En.json';
import FuturisticHeading from '@/components/FuturisticHeading';
import EnhancedCircularImageList from '@/components/enhanced-circular-image-list';
import OrganicPlantListV3Compatible from '@/components/organic-plant-list';
import CinematicVideoGallery from '@/components/cinematic-video-gallery';
// import OrganicPlantListV3Compatible from '@/components/organic-plant-list';

export default function DirectionPage() {
    const pathname = usePathname();
    const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
    const isRTL = currentLang === 'ar';
    const t = currentLang === 'ar' ? arDirection : enDirection;
  return (

    <main className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-1000 xxxs:OVERFLOW-X xl:overflow-x-visible">
      {/* <OrganicPlantListV3Compatible data={[]} language={currentLang}></OrganicPlantListV3Compatible> */}
        <FuturisticHeading rtl={isRTL}>
          {currentLang === 'ar' ? "التريب و الارشاد الزراعي بالمعهد" : "The Institute’s Agricultural Training & Extension Sector"}
        </FuturisticHeading>

        <div className="mt-10 xxxs:min-w-[100%] mb-10">
            <ParagraphStickyImage title={t.B1_Title} imageSrc={t.Img_Source} paragraphs={t.B1} rtl={isRTL}></ParagraphStickyImage>
        </div>

          <div className="mt-16 mb-8 w-full max-w-8xl mx-auto">
          <section className="bg_Beigse bg-green-500 bg-opacity-50 backdrop-blur-sm rounded-3xl px-4 py-8 shadow-xl">
            <div className="flex justify-center">
              {/* <EnhancedCircularImageList /> */}
              <EnhancedCircularImageList Title={isRTL ? "اهم مهام النشاط الارشادى للمعهد" : "The most important tasks of the institute's extension activities"} data={t.Direction_Mission} language={currentLang}></EnhancedCircularImageList>
            </div>
          </section>
        </div>
        
        {/* <FuturisticHeading rtl={isRTL}>
          {currentLang === 'ar' ? "فيديو يوم الحقل للقمح" : "The Field Day Of Wheat Video"}
        </FuturisticHeading>
        <div className="my-8 w-full max-w-8xl mx-auto">
          <div className='pt-[50%] pb-0 px-0 relative'>
            <iframe className='absolute top-0 left-0 w-full h-full' loading='lazy' src="https://player.vimeo.com/video/1123489285?badge=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="The Wheat Field Day Video"></iframe>
            </div>
        </div>
        <FuturisticHeading rtl={isRTL}>
          {currentLang === 'ar' ? "اللقاء التليفزيوني لدكتور خالد جاد في يوم الفلاح" : "Dr. Khaled Gad's TV Interview On The Farmer's Day"}
        </FuturisticHeading>
        <div className="my-8 w-full max-w-8xl mx-auto">
          <div className='pt-[45%] pb-0 px-0 relative'>
            <iframe className='absolute top-0 left-0 w-[98%] h-full mx-[1%]' loading='lazy' src="https://www.youtube.com/embed/Vz5NRqDhn78?si=pcY6fh17mcZYi3sy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen;" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div> */}
          {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
          {/* <video className='mx-auto' width={1200} src="https://player.vimeo.com/video/1123489285?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1" preload='none' controls playsInline loop muted autoPlay ></video> */}
        <OrganicPlantListV3Compatible data={t.Futuristic_Vision_Array} language={currentLang} Main_Title={t.Main_Title} Sub_Title={t.Sub_Title}></OrganicPlantListV3Compatible>
        <CinematicVideoGallery Title={t.Video_Gallery_Main_Title} Sub_Title={t.Video_Gallery_Sub_Title} videos={t.Video_Gallery_Array} language={currentLang}/>
    </main>
  )
}

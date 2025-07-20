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
export const countersAR = [
  { id: 1, title: 'الأبحاث العلمية', value: '700' },
  { id: 2, title: 'التجارب الحقلية', value: '300' },
  { id: 3, title: 'براءات الاختراع', value: '1500' },
  { id: 4, title: 'التعاونات', value: '20' },
];

export const  countersEN= [
  { id: 1, title: 'Research Papers', value: '200' },
  { id: 2, title: 'Field Trials', value: '90' },
  { id: 3, title: 'Patents', value: '12' },
  { id: 4, title: 'Collaborations', value: '40' },
];

const myCounters: CounterData[] = [
  { title_en: "Years of Experience", title_ar: "سنوات الخبرة", value: 52 },
  { title_en: "Number of Varieties", title_ar: "عدد الاصناف", value: 350 },
  { title_en: "Guidance Fields (2025)", title_ar: "حقول ارشادية(٢٠٢٥)", value: 21000 },
  { title_en: "National Campaigns", title_ar: "حملات قومية", value: 6 },
  { title_en: "General Staff", title_ar: "الكادر العام", value: 670 },
  { title_en: "Specialized Staff", title_ar: "الكادر الخاص", value: 730 },
]

export default function Home() {
  
    const pathname = usePathname();
    const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
    const t = currentLang === 'ar' ? arHome : enHome;
    const isRTL = currentLang === 'ar';

  return (
    <main className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-1000 xxxs:OVERFLOW-X xl:overflow-x-visible">

      <FuturisticHeading rtl={isRTL}>
        {currentLang === 'ar' ? "معهد بحوث المحاصيل الحقلية" : "Field Crops Research Institute"}
      </FuturisticHeading>

      <div className="xxxs:mt-4 md:mt-10 ">

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
<div className="min-w-[110%]">
  
<AnimatedCounter counters={myCounters}/>
</div>

    <div className="mt-10 max-width xl:max-width-lg">
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



    <div className="mt-10">
      <ParagraphStickyImage
       paragraphs={t.P5}
       imageSrc={"/images/Dr_Alaa/Dr_Alaa_Pic_3_With_NewBg_Enhanced.png"}
       title={t.P5_Title}
       rtl={isRTL}/>
    </div>

      <div className="mt-8">
      <FuturisticBulletSection
                title={t.B2_Title}
                bullets={t.B2}
                grid ={true}
                icon="bookOpen" // or "dot", "star", "bolt", etc.
                rtl={isRTL}
                animation="slide"
              />
      </div>

      <div className="mt-8">
      <FuturisticBulletSection
                title={t.B3_Title}
                bullets={t.B3}
                grid ={false}
                icon="flame" // or "dot", "star", "bolt", etc.
                rtl={isRTL}
                animation="pulse"
              />
      </div>

      <div className="mt-8">
      <FuturisticBulletSection
                title={t.B4_Title}
                bullets={t.B4}
                grid ={true}
                icon="hammer" // or "dot", "star", "bolt", etc.
                rtl={isRTL}
                animation="slide"
              />
      </div>

      <div className="mt-8">

            <FuturisticParagraphSection
              title={t.P4_Title}
              paragraphs={[t.P4]}
              rtl={isRTL}
            />
      </div>
{/* 
<ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-40">
  {['يتطلع المعهد إلى الاستمرار في تطوير أصناف أكثر تحملًا وكفاءة، وتوظيف التكنولوجيا الحيوية الآمنة في برامج التحسين الوراثي، مع تعزيز التعاون الدولي والإقليمي، وتكثيف البرامج التدريبية لدعم قدرات الباحثين والكوادر الزراعية المحلية والإفريقية والآسيوية.', 'يتطلع المعهد إلى الاستمرار في تطوير أصناف أكثر تحملًا وكفاءة، وتوظيف التكنولوجيا الحيوية الآمنة في برامج التحسين الوراثي، مع تعزيز التعاون الدولي والإقليمي، وتكثيف البرامج التدريبية لدعم قدرات الباحثين والكوادر الزراعية المحلية والإفريقية والآسيوية.', 'يتطلع المعهد إلى الاستمرار في تطوير أصناف أكثر تحملًا وكفاءة، وتوظيف التكنولوجيا الحيوية الآمنة في برامج التحسين الوراثي، مع تعزيز التعاون الدولي والإقليمي، وتكثيف البرامج التدريبية لدعم قدرات الباحثين والكوادر الزراعية المحلية والإفريقية والآسيوية.'].map((item, i) => (
    <li
      key={i}
      className="bg-black text-white border border-cyan-400 relative p-5 rounded-xl shadow-lg hover:shadow-cyan-400 transition group"
    >
      <div className="absolute inset-0 border-8 border-cyan-400 opacity-1 group-hover:opacity-100 animate-pulse rounded-xl pointer-events-none" />
      <p className="text-2xl leading-relaxed tracking-wide">{item}</p>
    </li>
  ))}
</ul> */}

{/* <ul className=" relative border-l-2 border-cyan-600/30 pl-6 space-y-8 mt-40">
  {['Wheat Research', 'Maize Research', 'Barley Studies'].map((item, i) => (
    <li key={i} className=" relative">
      <div className="absolute left-[-1.25rem] top-0 w-5 h-5 bg-cyan-500 rounded-full shadow-md" />
      <p className="text-red-600 text-sm leading-relaxed tracking-wide">
        <span className="text-cyan-400 font-bold mr-2">{i + 1}.</span>
        {item}
      </p>
    </li>
  ))}
</ul>

<ul className="space-y-6">
  {['يتطلع المعهد إلى الاستمرار في تطوير أصناف أكثر تحملًا وكفاءة، وتوظيف التكنولوجيا الحيوية الآمنة في برامج التحسين الوراثي، مع تعزيز التعاون الدولي والإقليمي، وتكثيف البرامج التدريبية لدعم قدرات الباحثين والكوادر الزراعية المحلية والإفريقية والآسيوية.يتطلع المعهد إلى الاستمرار في تطوير أصناف أكثر تحملًا وكفاءة، وتوظيف التكنولوجيا الحيوية الآمنة في برامج التحسين الوراثي، مع تعزيز التعاون الدولي والإقليمي، وتكثيف البرامج التدريبية لدعم قدرات الباحثين والكوادر الزراعية المحلية والإفريقية والآسيوية.يتطلع المعهد إلى الاستمرار في تطوير أصناف أكثر تحملًا وكفاءة، وتوظيف التكنولوجيا الحيوية الآمنة في برامج التحسين الوراثي، مع تعزيز التعاون الدولي والإقليمي، وتكثيف البرامج التدريبية لدعم قدرات الباحثين والكوادر الزراعية المحلية والإفريقية والآسيوية.يتطلع المعهد إلى الاستمرار في تطوير أصناف أكثر تحملًا وكفاءة، وتوظيف التكنولوجيا الحيوية الآمنة في برامج التحسين الوراثي، مع تعزيز التعاون الدولي والإقليمي، وتكثيف البرامج التدريبية لدعم قدرات الباحثين والكوادر الزراعية المحلية والإفريقية والآسيوية.يتطلع المعهد إلى الاستمرار في تطوير أصناف أكثر تحملًا وكفاءة، وتوظيف التكنولوجيا الحيوية الآمنة في برامج التحسين الوراثي، مع تعزيز التعاون الدولي والإقليمي، وتكثيف البرامج التدريبية لدعم قدرات الباحثين والكوادر الزراعية المحلية والإفريقية والآسيوية.', 'Maize Research', 'Barley Studies'].map((item, i) => (
    <li
      key={i}
      className="relative group bg-gradient-to-r from-black via-zinc-900 to-black text-white p-6 rounded-xl border border-cyan-500/20 overflow-hidden"
    >
      <div className="text-cyan-400 font-semibold text-sm mb-2">
        Section {i + 1}
      </div>
      <p className="line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out">
        {item}
      </p>
    </li>
  ))}
</ul>

<li className="mt-40 bg-zinc-950 text-white p-6 border-8 border-cyan-600 rounded-lg relative hover:shadow-cyan-500 hover:scale-[1.02] transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:border before:border-cyan-500 before:animate-pulse before:rounded-lg">
  <p className="text-sm leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nesciunt natus provident iure cum, quisquam ipsam nam reiciendis ullam eveniet quod sapiente fugiat, porro quia, accusantium distinctio inventore maxime. Commodi!</p>
</li>

<ul className="mt-40 flex flex-col gap-8 overflow-y-auto max-h-[400px] snap-y snap-mandatory pr-2">
  {['Wheat Research', 'Maize Researchssssss', 'Barley Studies'].map((item, i) => (
    <li
      key={i}
      className="snap-start bg-black border-l-4 border-cyan-500 p-8 py-4 text-white text-sm shadow-md hover:bg-zinc-900 transition"
    >
      <span className="font-mono text-cyan-300">[{i + 1}]</span> {item}
    </li>
  ))}
</ul> */}

{/* <ul className="flex flex-wrap justify-center gap-6 py-10">
  {[
    "معهد بحوث المحـاصيل الحقليه هو القلـب النابض لمـركز البحوث الزراعيه ويلعـب دوراً كبيراً فى  الحفاظ على الأمن الغذائى للدوله المصريه وتحقيق التنميه الزراعيه المستدامه ويضم المعهد خمسة عشر قسماً علمياً تقوم بأنشطة المعهد المختلفه.",
    "وقد بدأ الإهتمام بالأنشطة البحثيه لمختلف المحاصيل الحقلية تحت ما يسمى قسم تربية النبات خلال الفتره من 1903 حتى 1959 ثم تحويل إلى مراقبة بحوث المحاصيل الحقلية من 1959 حتى 1972 ثم أصبح معهدا بحثياً متخصصاً في بحوث المحاصيل الحقلية منذ عام 1973.",
    "وقد قام المعهد على مدار تاريخه بإستنباط أكثر من 350 صنفاً وهجيناً عالية الإنتاجيه والمقاومة للإجهادات الحيوية وغير الحيوية والمتأقلمه مع التغيرات المناخيه وذات جوده عاليه.",
    "نشر زراعة أصناف القمح عالية الإنتاجيه والمقاومه للأصداء خاصة مرض الصدأ الأصفر وإستنباط أصناف جديدة مقاومة للصدأ الأسود ونشر زراعة القمح على مصاطب لتوفير 25 % من المياه بالإضافة لتوفير كمية التقاوى وزيادة الإنتاجيه لوحدة المساحه.",
    "التوسع فى زراعة أصناف الأرز مبكرة النضج عالية الإنتاجيه قليلة الأستهلاك المائي للحفاظ على الإنتاج الكلى من أقل مساحة مما يسهم في توفير مياه الرى لمشروعات التوسع الأفقي والمحاصيل الصيفية الأخرى.",
    "تغطية المساحه المنزرعه بهجن الذره الشاميه عالية الإنتاجيه بنسبة 100% من المساحه المنزرعه ورفع نسبة التغطية بالتقاوي المعتمده للمحاصيل الذاتيه التلقيح.",
    "تعميم زراعة هجن الذرة الرفيعة مبكرة النضج عالية الإنتاجيه.",
    "إستنباط هجن زهرة الشمس لتقليص الفجوة بين الإنتاج والإستهلاك في الزيوت النباتية.",
    "إستنباط أصناف بصل لها مواصفات تخزينية وتصديرية عآلية.",
    "إستنباط أصناف من الفول السوداني بغرض التصدير.",
    "إستنباط أصناف من البرسيم المصري عالية الإنتاجيه والجودة لإحلالها محل الأصناف القديمة المتداولة مما يوفرمساحة من البرسيم تضاف إلى مساحة القمح والمحاصيل الشتوية الأخرى.",
    "التحــديث المستمر لحزمة التوصيات الفنية للهجــن والأصناف الجــديدة ونقلها للمزارعين بالتعــاون مع جهاز الإرشاد الزراعي من خلال برامج نقل التكنولوجيا والحملات القوميه للنهوض بالمحاصيل الحقليه الإستراتيجيه لتقليل الفجوه بين القدره الإنتاجيه للأصناف ومتوسط إنتاجية الحقول الإرشادية ومتوسط عام الجمهورية.",
    "زيادة معدل التكثيف الزراعي لزراعة أكثرمن محصولين في السنة وتعظيم الإستفادة من وحدتي الأرض والمياه."
  ].map((item, i) => (
    <li
      key={i}
      className="w-full sm:w-[45%] md:w-[30%] min-h-[220px] bg-zinc-950 text-white rounded-2xl p-6 shadow-[0_0_20px_rgba(0,255,255,0.3)] border border-cyan-500/30 hover:shadow-cyan-500/60 transition-all duration-300 leading-loose text-right"
      dir="rtl"
    >
      <div className="text-cyan-400 text-xs font-mono mb-2">البيان رقم {i + 1}</div>
      <p className="text-sm tracking-wide">{item}</p>
    </li>
  ))}
</ul>



<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 perspective-[1000px]">
  {['Wheat Research', 'Maize Research', 'Barley Studies'].map((item, i) => (
    <div
      key={i}
      className="relative h-56 w-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180"
    >
      <div className="absolute inset-0 bg-zinc-900 text-white rounded-xl p-6 shadow-md backface-hidden flex items-center justify-center text-center text-sm font-light tracking-wider" dir="rtl">
        <span className="text-cyan-400 font-semibold">↺ أقرأ المزيد</span>
      </div>
      <div className="absolute inset-0 bg-black text-white rounded-xl p-6 shadow-lg rotate-y-180 backface-hidden flex items-center justify-center text-right text-sm leading-relaxed" dir="rtl">
        {item}
      </div>
    </div>
  ))}
</div>


<ul className="space-y-6 p-4 bg-black">
  {[
    "معهد بحوث المحـاصيل الحقليه هو القلـب النابض لمـركز البحوث الزراعيه ويلعـب دوراً كبيراً فى  الحفاظ على الأمن الغذائى للدوله المصريه وتحقيق التنميه الزراعيه المستدامه ويضم المعهد خمسة عشر قسماً علمياً تقوم بأنشطة المعهد المختلفه.",
    "وقد بدأ الإهتمام بالأنشطة البحثيه لمختلف المحاصيل الحقلية تحت ما يسمى قسم تربية النبات خلال الفتره من 1903 حتى 1959 ثم تحويل إلى مراقبة بحوث المحاصيل الحقلية من 1959 حتى 1972 ثم أصبح معهدا بحثياً متخصصاً في بحوث المحاصيل الحقلية منذ عام 1973.",
    "وقد قام المعهد على مدار تاريخه بإستنباط أكثر من 350 صنفاً وهجيناً عالية الإنتاجيه والمقاومة للإجهادات الحيوية وغير الحيوية والمتأقلمه مع التغيرات المناخيه وذات جوده عاليه.",
    "نشر زراعة أصناف القمح عالية الإنتاجيه والمقاومه للأصداء خاصة مرض الصدأ الأصفر وإستنباط أصناف جديدة مقاومة للصدأ الأسود ونشر زراعة القمح على مصاطب لتوفير 25 % من المياه بالإضافة لتوفير كمية التقاوى وزيادة الإنتاجيه لوحدة المساحه.",
    "التوسع فى زراعة أصناف الأرز مبكرة النضج عالية الإنتاجيه قليلة الأستهلاك المائي للحفاظ على الإنتاج الكلى من أقل مساحة مما يسهم في توفير مياه الرى لمشروعات التوسع الأفقي والمحاصيل الصيفية الأخرى.",
    "تغطية المساحه المنزرعه بهجن الذره الشاميه عالية الإنتاجيه بنسبة 100% من المساحه المنزرعه ورفع نسبة التغطية بالتقاوي المعتمده للمحاصيل الذاتيه التلقيح.",
    "تعميم زراعة هجن الذرة الرفيعة مبكرة النضج عالية الإنتاجيه.",
    "إستنباط هجن زهرة الشمس لتقليص الفجوة بين الإنتاج والإستهلاك في الزيوت النباتية.",
    "إستنباط أصناف بصل لها مواصفات تخزينية وتصديرية عآلية.",
    "إستنباط أصناف من الفول السوداني بغرض التصدير.",
    "إستنباط أصناف من البرسيم المصري عالية الإنتاجيه والجودة لإحلالها محل الأصناف القديمة المتداولة مما يوفرمساحة من البرسيم تضاف إلى مساحة القمح والمحاصيل الشتوية الأخرى.",
    "التحــديث المستمر لحزمة التوصيات الفنية للهجــن والأصناف الجــديدة ونقلها للمزارعين بالتعــاون مع جهاز الإرشاد الزراعي من خلال برامج نقل التكنولوجيا والحملات القوميه للنهوض بالمحاصيل الحقليه الإستراتيجيه لتقليل الفجوه بين القدره الإنتاجيه للأصناف ومتوسط إنتاجية الحقول الإرشادية ومتوسط عام الجمهورية.",
    "زيادة معدل التكثيف الزراعي لزراعة أكثرمن محصولين في السنة وتعظيم الإستفادة من وحدتي الأرض والمياه."
  ].map((item, i) => (
    <li
      key={i}
      className="relative p-6 bg-gradient-to-br from-zinc-800 to-zinc-950 border-l-4 border-cyan-500 text-white rounded-md overflow-hidden text-sm group"
      dir="rtl"
    >
      <div className="absolute top-0 left-0 w-1 bg-cyan-500 h-full animate-pulse" />
      <p className="leading-relaxed tracking-wide group-hover:text-cyan-300 transition">
        {item}
      </p>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/10 via-cyan-400/40 to-cyan-500/10 animate-glitch opacity-20"></div>
    </li>
  ))}
</ul>


<ul className="relative border-r-2 border-cyan-500/30 pr-6 space-y-8 mt-52">
  {[
    "معهد بحوث المحـاصيل الحقليه هو القلـب النابض لمـركز البحوث الزراعيه ويلعـب دوراً كبيراً فى  الحفاظ على الأمن الغذائى للدوله المصريه وتحقيق التنميه الزراعيه المستدامه ويضم المعهد خمسة عشر قسماً علمياً تقوم بأنشطة المعهد المختلفه.",
    "وقد بدأ الإهتمام بالأنشطة البحثيه لمختلف المحاصيل الحقلية تحت ما يسمى قسم تربية النبات خلال الفتره من 1903 حتى 1959 ثم تحويل إلى مراقبة بحوث المحاصيل الحقلية من 1959 حتى 1972 ثم أصبح معهدا بحثياً متخصصاً في بحوث المحاصيل الحقلية منذ عام 1973.",
    "وقد قام المعهد على مدار تاريخه بإستنباط أكثر من 350 صنفاً وهجيناً عالية الإنتاجيه والمقاومة للإجهادات الحيوية وغير الحيوية والمتأقلمه مع التغيرات المناخيه وذات جوده عاليه.",
    "نشر زراعة أصناف القمح عالية الإنتاجيه والمقاومه للأصداء خاصة مرض الصدأ الأصفر وإستنباط أصناف جديدة مقاومة للصدأ الأسود ونشر زراعة القمح على مصاطب لتوفير 25 % من المياه بالإضافة لتوفير كمية التقاوى وزيادة الإنتاجيه لوحدة المساحه.",
    "التوسع فى زراعة أصناف الأرز مبكرة النضج عالية الإنتاجيه قليلة الأستهلاك المائي للحفاظ على الإنتاج الكلى من أقل مساحة مما يسهم في توفير مياه الرى لمشروعات التوسع الأفقي والمحاصيل الصيفية الأخرى.",
    "تغطية المساحه المنزرعه بهجن الذره الشاميه عالية الإنتاجيه بنسبة 100% من المساحه المنزرعه ورفع نسبة التغطية بالتقاوي المعتمده للمحاصيل الذاتيه التلقيح.",
    "تعميم زراعة هجن الذرة الرفيعة مبكرة النضج عالية الإنتاجيه.",
    "إستنباط هجن زهرة الشمس لتقليص الفجوة بين الإنتاج والإستهلاك في الزيوت النباتية.",
    "إستنباط أصناف بصل لها مواصفات تخزينية وتصديرية عآلية.",
    "إستنباط أصناف من الفول السوداني بغرض التصدير.",
    "إستنباط أصناف من البرسيم المصري عالية الإنتاجيه والجودة لإحلالها محل الأصناف القديمة المتداولة مما يوفرمساحة من البرسيم تضاف إلى مساحة القمح والمحاصيل الشتوية الأخرى.",
    "التحــديث المستمر لحزمة التوصيات الفنية للهجــن والأصناف الجــديدة ونقلها للمزارعين بالتعــاون مع جهاز الإرشاد الزراعي من خلال برامج نقل التكنولوجيا والحملات القوميه للنهوض بالمحاصيل الحقليه الإستراتيجيه لتقليل الفجوه بين القدره الإنتاجيه للأصناف ومتوسط إنتاجية الحقول الإرشادية ومتوسط عام الجمهورية.",
    "زيادة معدل التكثيف الزراعي لزراعة أكثرمن محصولين في السنة وتعظيم الإستفادة من وحدتي الأرض والمياه."
  ].map((item, i) => (
    <li key={i} className="relative group text-right" dir="rtl">
      <div className="absolute right-[-1.2rem] top-2 w-4 h-4 bg-cyan-500 rounded-full shadow-md group-hover:scale-125 transition" />
      <div className="bg-zinc-900 p-5 rounded-lg text-white text-sm leading-relaxed shadow-md border border-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300">
        {item}
      </div>
    </li>
  ))}
</ul>


<ul className="space-y-10 mt-52">
  {[
    "معهد بحوث المحـاصيل الحقليه هو القلـب النابض لمـركز البحوث الزراعيه ويلعـب دوراً كبيراً فى  الحفاظ على الأمن الغذائى للدوله المصريه وتحقيق التنميه الزراعيه المستدامه ويضم المعهد خمسة عشر قسماً علمياً تقوم بأنشطة المعهد المختلفه.",
    "وقد بدأ الإهتمام بالأنشطة البحثيه لمختلف المحاصيل الحقلية تحت ما يسمى قسم تربية النبات خلال الفتره من 1903 حتى 1959 ثم تحويل إلى مراقبة بحوث المحاصيل الحقلية من 1959 حتى 1972 ثم أصبح معهدا بحثياً متخصصاً في بحوث المحاصيل الحقلية منذ عام 1973.",
    "وقد قام المعهد على مدار تاريخه بإستنباط أكثر من 350 صنفاً وهجيناً عالية الإنتاجيه والمقاومة للإجهادات الحيوية وغير الحيوية والمتأقلمه مع التغيرات المناخيه وذات جوده عاليه.",
    "نشر زراعة أصناف القمح عالية الإنتاجيه والمقاومه للأصداء خاصة مرض الصدأ الأصفر وإستنباط أصناف جديدة مقاومة للصدأ الأسود ونشر زراعة القمح على مصاطب لتوفير 25 % من المياه بالإضافة لتوفير كمية التقاوى وزيادة الإنتاجيه لوحدة المساحه.",
    "التوسع فى زراعة أصناف الأرز مبكرة النضج عالية الإنتاجيه قليلة الأستهلاك المائي للحفاظ على الإنتاج الكلى من أقل مساحة مما يسهم في توفير مياه الرى لمشروعات التوسع الأفقي والمحاصيل الصيفية الأخرى.",
    "تغطية المساحه المنزرعه بهجن الذره الشاميه عالية الإنتاجيه بنسبة 100% من المساحه المنزرعه ورفع نسبة التغطية بالتقاوي المعتمده للمحاصيل الذاتيه التلقيح.",
    "تعميم زراعة هجن الذرة الرفيعة مبكرة النضج عالية الإنتاجيه.",
    "إستنباط هجن زهرة الشمس لتقليص الفجوة بين الإنتاج والإستهلاك في الزيوت النباتية.",
    "إستنباط أصناف بصل لها مواصفات تخزينية وتصديرية عآلية.",
    "إستنباط أصناف من الفول السوداني بغرض التصدير.",
    "إستنباط أصناف من البرسيم المصري عالية الإنتاجيه والجودة لإحلالها محل الأصناف القديمة المتداولة مما يوفرمساحة من البرسيم تضاف إلى مساحة القمح والمحاصيل الشتوية الأخرى.",
    "التحــديث المستمر لحزمة التوصيات الفنية للهجــن والأصناف الجــديدة ونقلها للمزارعين بالتعــاون مع جهاز الإرشاد الزراعي من خلال برامج نقل التكنولوجيا والحملات القوميه للنهوض بالمحاصيل الحقليه الإستراتيجيه لتقليل الفجوه بين القدره الإنتاجيه للأصناف ومتوسط إنتاجية الحقول الإرشادية ومتوسط عام الجمهورية.",
    "زيادة معدل التكثيف الزراعي لزراعة أكثرمن محصولين في السنة وتعظيم الإستفادة من وحدتي الأرض والمياه."
  ].map((item, i) => (
    <li
      key={i}
      className="relative bg-gradient-to-br from-black to-zinc-900 border-l-[6px] border-cyan-400 rounded-xl p-6 text-white text-sm leading-relaxed shadow-xl text-right"
      dir="rtl"
    >
      <span className="absolute top-0 right-0 bg-cyan-600 text-black text-xs px-2 py-1 rounded-bl-xl font-bold">
        📢 {i + 1}
      </span>
      {item}
    </li>
  ))}
</ul> */}

    </main>
  );
}

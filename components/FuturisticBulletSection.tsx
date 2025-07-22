// components/FuturisticBulletSection.tsx
// import {
//   CheckCircle2,
//   Dot,
//   Star,
//   Zap,
//   Circle,
//   Trophy,
//   ArrowRight,
//   ArrowLeft,
//   Flame,
//   AlertTriangle,
//   Info,
//   ShieldCheck,
//   Lightbulb,
//   Hammer,
//   BookOpen,
//   Leaf,
//   Beaker,
//   Globe,
//   WandSparkles
// } from 'lucide-react';

import clsx from "clsx";

type Props = {
  title: string;
  bullets: string[];
  rtl?: boolean;
  grid?: boolean; // ✅ NEW
  animation : "slide" | "pulse";
  // Indexes : number[];
  icon?: 
  'check' 
  |'dot' 
  |'star' 
  |'bolt' 
  |'circle' 
  |'trophy' 
  |'arrowRight' 
  |"arrowLeft" 
  |"flame"
  |"alertTriangle"
  |"info"
  |"shieldCheck"
  |"lightbulb"
  |"hammer"
  |"bookOpen"
  |"leaf"
  |"beaker"
  |"globe"
  |"wandSparkles"
};

// const iconMap = {
//   check: <CheckCircle2 className="text-cyan-500 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   dot: <Dot className="text-cyan-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   star: <Star className="text-yellow-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   bolt: <Zap className="text-indigo-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   circle: <Circle className="text-gray-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   trophy: <Trophy className="text-amber-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   arrowRight: <ArrowRight className="text-teal-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   arrowLeft: <ArrowLeft className="text-teal-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   flame: <Flame className="text-red-500 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   alertTriangle: <AlertTriangle className="text-orange-500 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   info: <Info className="text-blue-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   shieldCheck: <ShieldCheck className="text-emerald-500 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   lightbulb: <Lightbulb className="text-yellow-300 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   hammer: <Hammer className="text-gray-300 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   beaker: <Beaker className="text-purple-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   bookOpen: <BookOpen className="text-indigo-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   leaf: <Leaf className="text-green-500 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   globe: <Globe className="text-sky-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
//   wandSparkles: <WandSparkles className="text-fuchsia-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />
// };

// export default function FuturisticBulletSection({ title, bullets, rtl = false , icon = 'check',grid = false}: Props) {
export default function FuturisticBulletSection({ title, bullets, rtl = false , animation}: Props) {
    // const BulletIcon = iconMap[icon];

    return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="w-full px-4 sm:px-6 lg:px-12 py-12 rounded-3xl shadow-2xl xl:min-width mx-auto bg_Beige font-black"
    >
      <h2 className={clsx(
        "font-black text-cyan-400 mb-6 tracking-wider text-center bg_Green",
        rtl ? "md:text-5xl xs:text-4xl xxxs:text-3xl" : "md:text-4xl xs:text-3xl xxxs:text-2xl"
      )}>
        {title}
      </h2>


{/* <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
  {bullets.map((item, i) => (
    <li
      key={i}
      className=" rounded-3xl shadow-2xl mx-auto bg_Beige bg_Gray border border-cyan-400 relative p-5 hover:shadow-cyan-400 cursor-pointer transition group font-black"
    >
      <div className="absolute inset-0 border-8 border-cyan-400 opacity-1 group-hover:opacity-100 animate-pulse rounded-3xl pointer-events-none" />
      <p className="text-2xl leading-relaxed tracking-wide">{item}</p>
    </li>
  ))}
</ul> */}

<ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
  {bullets.map((item, i) => {
    const totalItems = bullets.length;
    const columns = 3; // md:grid-cols-3
    const fullRows = Math.floor(totalItems / columns);
    const isInLastRow = i >= fullRows * columns;
    const itemsInLastRow = totalItems % columns;

    let colSpan = '';
    if (isInLastRow) {
      if (itemsInLastRow === 1) {
        colSpan = 'md:col-span-3'; // take full width
      } else if (itemsInLastRow === 2) {
        colSpan = 'md:col-span-3 sm:col-span-2'; // divide row in half
      }
    }

    return (
      <li
        key={i}
        className={`rounded-3xl shadow-2xl mx-auto bg_Beige bg_Gray border border-black relative p-5 hover:shadow-black cursor-pointer transition group font-black ${colSpan}`}
      >
        <div className={clsx(
          "absolute inset-0 border-8 border-black opacity-1 group-hover:opacity-100 rounded-3xl pointer-events-none",
          animation === "pulse" ? "animate-pulse" : rtl ? "animate_slide_Fade_Right" : "animate_slide_Fade_Left"
        )} />
        <p className={clsx(
          "tracking-wide",
          rtl ? "xs:text-3xl xxxs:text-xl xs:lineHeight align-middle" : "xs:text-2xl xxxs:text-sm xs:lineHeight align-middle",
          // Indexes[i] == i ? "whitespace-pre" : ""
        )}>{item}</p>
      </li>
    );
  })}
</ul>

      {/* <ul className={`bg_Gray text-sm sm:text-base md:text-lg leading-loose
        ${grid
      ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6'
      : 'space-y-4'}
      `}>
        {bullets.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 hover:text-black transition-colors xxxs:text-lg xxs:text-xl xs:text-2xl md:text-2xl lg:text-3xl ">
            {BulletIcon}
            <span className='sm:Line-Height xxxs:leading-10 font-black'>{item}</span>
          </li>
        ))}
      </ul> */}
    </section>
  );
}

// components/FuturisticBulletSection.tsx
import {
  CheckCircle2,
  Dot,
  Star,
  Zap,
  Circle,
  Trophy,
  ArrowRight,
  ArrowLeft,
  Flame,
  AlertTriangle,
  Info,
  ShieldCheck,
  Lightbulb,
  Hammer,
  BookOpen,
  Leaf,
  Beaker,
  Globe,
  WandSparkles
} from 'lucide-react';

type Props = {
  title: string;
  bullets: string[];
  rtl?: boolean;
  grid?: boolean; // ✅ NEW
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

const iconMap = {
  check: <CheckCircle2 className="text-cyan-500 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  dot: <Dot className="text-cyan-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  star: <Star className="text-yellow-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  bolt: <Zap className="text-indigo-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  circle: <Circle className="text-gray-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  trophy: <Trophy className="text-amber-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  arrowRight: <ArrowRight className="text-teal-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  arrowLeft: <ArrowLeft className="text-teal-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  flame: <Flame className="text-red-500 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  alertTriangle: <AlertTriangle className="text-orange-500 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  info: <Info className="text-blue-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  shieldCheck: <ShieldCheck className="text-emerald-500 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  lightbulb: <Lightbulb className="text-yellow-300 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  hammer: <Hammer className="text-gray-300 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  beaker: <Beaker className="text-purple-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  bookOpen: <BookOpen className="text-indigo-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  leaf: <Leaf className="text-green-500 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  globe: <Globe className="text-sky-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />,
  wandSparkles: <WandSparkles className="text-fuchsia-400 sm:mt-5 xxxs:mt-2 shrink-0 xs:w-7  xs:h-7 xxxs:h-5 xxxs:w-5" />
};

export default function FuturisticBulletSection({ title, bullets, rtl = false , icon = 'check',grid = false}: Props) {
    const BulletIcon = iconMap[icon];

    return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-gradient-to-tr from-gray-950 to-gray-900 text-white rounded-3xl shadow-2xl border border-cyan-700/40 xl:min-width mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-cyan-400 mb-6 tracking-wider text-center">
        {title}
      </h2>

      <ul className={`text-gray-300 text-sm sm:text-base md:text-lg leading-loose
        ${grid
      ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6'
      : 'space-y-4'}
      `}>
        {bullets.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 hover:text-cyan-200 transition-colors xxxs:text-lg xxs:text-xl xs:text-2xl md:text-2xl lg:text-3xl ">
            {BulletIcon}
            <span className='sm:Line-Height xxxs:leading-10 font-black'>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

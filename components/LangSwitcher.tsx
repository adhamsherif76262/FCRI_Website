'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import clsx from 'clsx';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
];

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const currentLang = pathname?.split('/')[1] || 'en';

  const handleSwitch = (lang: string) => {
    const segments = pathname.split('/');
    segments[1] = lang;
    startTransition(() => router.push(segments.join('/')));
  };

  return (
    <div className={clsx(
      " xl:w-36 lg:w-36 sm:w-36 xs:w-28 xxs:w-28 xxxs:w-24 flex items-center overflow-hidden rounded-full border border-cyan-500 shadow-md text-sm font-semibold bg-zinc-900 dark:bg-zinc-800",
      currentLang === 'ar' ?"md:w-32":"md:w-32"
    )}>
      {/* EN Button */}
      <button
        onClick={() => handleSwitch('en')}
        disabled={currentLang === 'en' || isPending}
        className={clsx(
          'px-4 py-1 xs:px-2 xxs:px-1 xxxs:px-0 xxxs:w-10 xxs:w-16 sm:px-4 transition-all duration-300 w-[60px] text-center rounded-full',
          currentLang === 'en'
            ? 'bg-cyan-500 text-black cursor-default'
            : 'hover:bg-cyan-400 hover:text-black text-cyan-400'
        )}
      >
        EN
      </button>

      {/* 🌐 Icon */}
      <div dir='ltr'  className="px-1 text-cyan-400 text-base pointer-events-none animate-spin-slow origin-center">🌐</div>

{/* 🌐 Icon */}
{/* <div dir="ltr" className="w-[40px] h-[40px] flex items-center justify-center">
  <span className="block animate-spin-slow origin-center text-cyan-400 text-lg pointer-events-none">
    🌐
  </span>
</div> */}


      {/* AR Button */}
      <button
        onClick={() => handleSwitch('ar')}
        disabled={currentLang === 'ar' || isPending}
        className={clsx(
          'px-4 py-1 xs:px-2 xxs:px-1 xxxs:px-0 xxxs:mx-0 xxxs:w-10 xxs:w-16 transition-all duration-300 w-[60px] text-center rounded-full',
          currentLang === 'ar'
            ? 'bg-cyan-500 text-black cursor-default'
            : 'hover:bg-cyan-400 hover:text-black text-cyan-400'
        )}
      >
        AR
      </button>
    </div>
  );
}

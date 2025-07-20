'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
// import ThemeSwitcher from './ThemeSwitcher';
import LangSwitcher from './LangSwitcher';
import clsx from 'clsx';

const navLabels = {
  en: {
    home: 'Home',
    departments: 'Departments',
    production: 'Production',
    research: 'Research',
    direction: 'Extension',
  },
  ar: {
    home: 'الرئيسية',
    departments: 'الأقسام',
    production: 'الإنتاج',
    research: 'البحوث',
    direction: 'الارشاد',
  },
};

type NavKey = 'home' | 'departments' | 'production' | 'research' | 'direction';

export default function NavbarFuturistic() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';

  const navLinks: { href: string; key: NavKey }[] = [
    { href: `/${currentLang}`, key: 'home' },
    { href: `/${currentLang}/departments`, key: 'departments' },
    { href: `/${currentLang}/production`, key: 'production' },
    { href: `/${currentLang}/research`, key: 'research' },
    { href: `/${currentLang}/direction`, key: 'direction' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-green-950 border-b border-green-300 bg_Beige shadow-xl backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="relative group w-[100px] h-[100px] cursor-pointer">
          <div className="relative w-full h-full rounded-full ring-4 ring-black group-hover:ring-black dark:invert shadow-md transition-all duration-700 group-hover:ring-[12px] group-hover:shadow-cyan-500/40 animate-ripple-fade-in">
            <Image
              src="/images/logos/FCRI_Logo.jpg"
              alt="FCRI Logo"
              width={100}
              height={100}
              className={clsx(
                "rounded-full object-cover",
                currentLang === "ar" ? "" : ""

              )}
            />
            <span className="absolute -inset-[12px] rounded-full border-[6px] border-transparent border-t-black opacity-100 group-hover:opacity-0 animate-border-spin transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Navigation */}
        <nav className={clsx(
          'flex gap-6 md:gap-10 items-center justify-center',
          isVisible ? 'opacity-100' : 'opacity-0',
          currentLang === 'ar' ? 
          'lg:gap-16 md:gap-14 sm:gap-8 xs:gap-8' 
          :
          'xl:gap-20 lg:gap-16 md:gap-8 sm:gap-6',
        )}>
          {navLinks.map((link, idx) => (
            <Link
              key={link.key}
              href={link.href}
              style={{ animationDelay: `${0.2 * idx}s` }}
              className={clsx(
                'relative text-base font-bold tracking-wide transition-all duration-500',
                currentLang === 'ar'
                  ? 'text-black lg:text-2xl md:text-xl sm:text-lg hover:bg_Gray before:absolute before:-bottom-1 before:right-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-500 hover:before:w-full'
                  : 'text-black lg:text-lg md:text-sm sm:text-xs hover:bg_Gray before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-500 hover:before:w-full',
                'opacity-0 animate-staggered-link'
              )}

            >
              {navLabels[currentLang][link.key]}
            </Link>
          ))}
        </nav>

        {/* Right: Switchers */}
        <div className="flex flex-col items-end gap-2">
          {/* <ThemeSwitcher /> */}
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}

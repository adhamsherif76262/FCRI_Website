'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import LangSwitcher from './LangSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
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

export default function MobileNavbar() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { href: `/${currentLang}`, key: 'home' },
    { href: `/${currentLang}/departments`, key: 'departments' },
    { href: `/${currentLang}/production`, key: 'production' },
    { href: `/${currentLang}/research`, key: 'research' },
    { href: `/${currentLang}/direction`, key: 'direction' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when menu is open
useEffect(() => {
  if (isOpen) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }

  return () => {
    document.body.classList.remove('overflow-hidden'); // Clean up on unmount
  };
}, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    mounted && (
      <div className="md:hidden sticky top-0 left-0 w-full z-50">
        
        {/* Top bar */}
        <div className="flex justify-between items-center px-4 py-3 bg-zinc-950 border-b border-zinc-800 shadow-lg">
            
          <button
            onClick={toggleMenu}
            className="text-cyan-400 xs:text-5xl focus:outline-none z-50 xxs:text-3xl xxxs:text-3xl"
            aria-label="Toggle menu"
          >
            {isOpen ? '✖' : '☰'}
          </button>

            {/* Logo */}
            <div id='FCRI_Logo'  className={clsx(
                "relative group w-[100px] h-[100px] cursor-pointer",
                currentLang === "ar" ? "xs:mr-10 xxs:mr-10 xxxs:mr-10" : "sm:ml-24 xs:ml-12 xxs:ml-10 xxxs:ml-10",
            )}>
                  <div className="relative w-full h-full rounded-full ring-4 ring-black group-hover:ring-cyan-400 dark:invert shadow-md transition-all duration-700 group-hover:ring-[12px] group-hover:shadow-cyan-500/40 animate-ripple-fade-in">
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
                    <span className="absolute -inset-[12px] rounded-full border-[6px] border-transparent border-t-cyan-400 opacity-100 group-hover:opacity-0 animate-border-spin transition-opacity duration-300 pointer-events-none" />
                  </div>
            </div>
        {/* Switchers */}
            <div className="flex gap-4">
              <LangSwitcher />
              {/* <ThemeSwitcher /> */}
            </div>



        </div>

        {/* Animated Full-Screen Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -500 }}
              transition={{ duration: 1 }}
              className="fixed inset-0 bg-zinc-950 text-cyan-300 flex flex-col items-center justify-center gap-10 p-6"
            >
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, y: 300 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 * idx }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                'text-2xl font-bold text-cyan-300 transition-all duration-500 tracking-wide relative',
                currentLang === 'ar'
                  ? 'hover:text-white before:absolute before:-bottom-1 before:right-0 before:w-0 before:h-[2px] before:bg-cyan-400 before:transition-all before:duration-500 hover:before:w-full'
                  : 'hover:text-white before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-cyan-400 before:transition-all before:duration-500 hover:before:w-full'
              )}
                  >
                    <span className="relative z-10">{navLabels[currentLang][link.key]}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-500"></span>
                  </Link>
                </motion.div>
              ))}

              
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  );
}
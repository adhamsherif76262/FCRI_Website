'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import LangSwitcher from './LangSwitcher';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/departments', label: 'Departments' },
  { href: '/production', label: 'Production' },
  { href: '/research', label: 'Research' },
  { href: '/direction', label: 'Direction' },
];

const animations = [
  'animate-fade-down',
  'animate-fade-up',
  'animate-fade-left',
  'animate-fade-right',
];

export default function NavbarAcademic() {
  const pathname = usePathname();
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const random = Math.floor(Math.random() * animations.length);
    setAnimationClass(animations[random]);
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 shadow-sm backdrop-blur',
        animationClass
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center pt-4 pb-2 gap-2">
        {/* Logo */}
        <Link href="/" className="transition-transform hover:scale-105">
          <Image
            src="/images/logos/FCRI_Logo.jpg"
            alt="FCRI Logo"
            width={125}
            height={125}
            className="dark:invert object-contain"
          />
        <Image
          src="/images/logos/FCRI_LOGO-removebg-preview.png"
          alt="FCRI Logo"
          width={100}
          height={100}
          className="object-contain dark:invert group-hover:scale-105 transition-transform duration-300"
        />
        </Link>

        {/* Language and Theme Switchers */}
        <div className="flex items-center gap-4 mt-2">
          <LangSwitcher />
          <ThemeSwitcher />
        </div>

        {/* Nav links */}
        <nav className="mt-4 flex flex-wrap justify-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'text-lg font-semibold transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400',
                pathname === href && 'border-blue-600 text-blue-700 dark:text-blue-400'
              )}
            >
              {label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

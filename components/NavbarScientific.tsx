'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from './ThemeSwitcher';
import LangSwitcher from './LangSwitcher';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/departments', label: 'Departments' },
  { href: '/production', label: 'Production' },
  { href: '/research', label: 'Research' },
  { href: '/direction', label: 'Direction' },
];

const animations = [
  'animate-slide-top',
  'animate-fade-up',
  'animate-fade-left',
  'animate-fade-right',
];


export default function NavbarScientific() {
  const pathname = usePathname();
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const random = Math.floor(Math.random() * animations.length);
    setAnimationClass(animations[random]);
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 h-40 bg-zinc-950 text-white shadow-xl border-b border-zinc-800',
        'backdrop-blur-lg backdrop-saturate-150',
        animationClass
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <Image
          
            src="/images/logos/FCRI_Logo.jpg"
            alt="FCRI Logo"
            width={125}
            height={125}
            className="object-cover rounded-full dark:invert shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <span className="text-xl tracking-widest font-bold uppercase text-white group-hover:text-blue-500">
            FCRI
          </span>
        </Link>

        {/* Center: Nav links */}
        <nav className="hidden md:flex gap-10 justify-center text-sm tracking-wider uppercase font-semibold">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-4 decoration-blue-500',
                pathname === href ? 'text-blue-500' : 'text-white'
              )}
            >
              {label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()}
            </Link>
          ))}
        </nav>

        {/* Right: Switchers stacked like console toggles */}
        <div className="hidden md:flex flex-col items-end gap-2">
          <LangSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

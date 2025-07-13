'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from './ThemeSwitcher';
import LangSwitcher from './LangSwitcher';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/departments', label: 'Departments' },
  { href: '/production', label: 'Production' },
  { href: '/research', label: 'Research' },
  { href: '/direction', label: 'Direction' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 w-full backdrop-blur border-b transition-all',
        scrolled ? 'bg-white/80 dark:bg-zinc-900/70 border-zinc-200 dark:border-zinc-700 shadow-sm' : 'border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logos/FCRI_Logo.jpg"
            alt="FCRI Logo"
            width={120}
            height={120}
            className="object-contain dark:invert"
          />
          <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 hidden sm:inline">
            FCRI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'text-sm font-medium transition hover:text-blue-600',
                pathname === href ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-700 dark:text-zinc-300'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Switchers */}
        <div className="flex items-center gap-4">
          <LangSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

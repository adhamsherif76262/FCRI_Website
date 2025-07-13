// components/Header.tsx
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import LangSwitcher from './LangSwitcher';

export default function Header() {
  return (
    <header className="border-b bg-white dark:bg-black sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-white">
          FCRI
        </Link>
        <div className="flex gap-4 items-center">
          <LangSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

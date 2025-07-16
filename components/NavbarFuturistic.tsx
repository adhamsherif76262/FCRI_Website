// // 'use client';

// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';
// // import { useEffect, useState } from 'react';
// // import ThemeSwitcher from './ThemeSwitcher';
// // import LangSwitcher from './LangSwitcher';
// // import clsx from 'clsx';

// // const navLinks = [
// //   { href: '/', label: 'Home' },
// //   { href: '/departments', label: 'Departments' },
// //   { href: '/production', label: 'Production' },
// //   { href: '/research', label: 'Research' },
// //   { href: '/direction', label: 'Direction' },
// // ];

// // export default function NavbarFuturistic() {
// //   const pathname = usePathname();
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     // Delayed trigger for animation
// //     const timer = setTimeout(() => setIsVisible(true), 200);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <header className="relative z-50 w-full flex flex-col items-center py-6 bg-zinc-950 border-b border-zinc-800 shadow-xl overflow-hidden">
// //       {/* Logo in center */}
// //       <div className="relative mb-4 animate-ripple-fade-in">
// //         <Image
// //           src="/images/logos/FCRI_Logo.jpg"
// //           alt="FCRI Logo"
// //           width={125}
// //           height={125}
// //           className="rounded-full object-cover dark:invert ring-4 ring-cyan-400 shadow-lg"
// //         />
// //       </div>

// //       {/* Switchers: far left and right below the logo */}
// //       <div className="absolute left-4 top-1/2 -translate-y-1/2">
// //         <ThemeSwitcher />
// //       </div>
// //       <div className="absolute right-4 top-1/2 -translate-y-1/2">
// //         <LangSwitcher />
// //       </div>

// //       {/* Fan-out Nav */}
// //       <nav className={clsx(
// //         'mt-4 flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl',
// //         isVisible ? 'opacity-100' : 'opacity-0'
// //       )}>
// //         {navLinks.map((link, idx) => (
// //           <Link
// //             key={link.href}
// //             href={link.href}
// //             style={{ animationDelay: `${0.2 * idx}s` }}
// //             className={clsx(
// //               'relative text-base md:text-lg font-bold text-cyan-300 hover:text-white tracking-wide transition-all duration-500',
// //               'before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-cyan-400 before:transition-all before:duration-500 hover:before:w-full',
// //               'opacity-0 animate-staggered-link'
// //             )}
// //           >
// //             {link.label.charAt(0).toUpperCase() + link.label.slice(1).toLowerCase()}
// //           </Link>
// //         ))}
// //       </nav>
// //     </header>
// //   );
// // }




// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import ThemeSwitcher from './ThemeSwitcher';
// import LangSwitcher from './LangSwitcher';
// import clsx from 'clsx';

// const navLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/departments', label: 'Departments' },
//   { href: '/production', label: 'Production' },
//   { href: '/research', label: 'Research' },
//   { href: '/direction', label: 'Direction' },
// ];


// export default function NavbarFuturistic() {
//   const pathname = usePathname();
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 300);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <header className="sticky top-0 z-50 w-full bg-zinc-950 border-b border-zinc-800 shadow-xl backdrop-blur-lg">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Left: Logo */}
        
//         {/* <div className="animate-ripple-fade-in">
//           <Image
//             src="/images/logos/FCRI_Logo.jpg"
//             alt="FCRI Logo"
//             width={125}
//             height={125}
//             className="rounded-full object-cover dark:invert ring-4 ring-cyan-400 shadow-md rounded-full object-cover dark:invert ring-4 ring-cyan-400 shadow-md hover:ring-[12px] hover:ring-cyan-300 hover:shadow-cyan-500/40 transition-all duration-700"
//           />
//         </div> */}
       

//           {/* <div className="perspective-1000 animate-ripple-fade-in">
//   <Image
//     src="/images/logos/FCRI_Logo.jpg"
//     alt="FCRI Logo"
//     width={125}
//     height={125}
//     className="rounded-full object-cover dark:invert ring-4 ring-cyan-400 shadow-md hover:rotate-y-12 transition-transform duration-700"
//   />
// </div> */}


//         {/* <div className="group relative w-[125px] h-[125px] animate-ripple-fade-in">
//   <div className="glitch-hover absolute inset-0 z-10">
//     <Image
//       src="/images/logos/FCRI_Logo.jpg"
//       alt="FCRI Logo"
//       width={125}
//       height={125}
//       className="rounded-full object-cover dark:invert shadow-md"
//     />
//   </div>
// </div> */}


// {/* <div className="relative group w-[125px] h-[125px] animate-ripple-fade-in cursor-pointer">
//   <div className="relative w-full h-full rounded-full">
//     <Image
//       src="/images/logos/FCRI_Logo.jpg"
//       alt="FCRI Logo"
//       width={125}
//       height={125}
//       className="rounded-full object-cover dark:invert ring-4 ring-black shadow-md"
//     />
//     <span className="absolute -inset-[12px] rounded-full border-[6px] border-transparent border-t-cyan-400 opacity-0 group-hover:opacity-100 animate-border-spin pointer-events-none" />
//   </div>
// </div> */}

// <div className="relative group w-[100px] h-[100px] cursor-pointer">
//   <div className="relative w-full h-full rounded-full ring-4 ring-black group-hover:ring-cyan-400 dark:invert shadow-md transition-all duration-700 group-hover:ring-[12px] group-hover:shadow-cyan-500/40 animate-ripple-fade-in">
//     <Image
//       src="/images/logos/FCRI_Logo.jpg"
//       alt="FCRI Logo"
//       width={100}
//       height={100}
//       className="rounded-full object-cover"
//     />

//     {/* Spinning ring: visible by default, hidden on hover */}
//     <span className="absolute -inset-[12px] rounded-full border-[6px] border-transparent border-t-cyan-400 opacity-100 group-hover:opacity-0 animate-border-spin transition-opacity duration-300 pointer-events-none" />
//   </div>
// </div>



//         {/* Center: Navigation */}
//         <nav className={clsx(
//           'flex gap-6 md:gap-10 items-center justify-center',
//           isVisible ? 'opacity-100' : 'opacity-0'
//         )}>
//           {navLinks.map((link, idx) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               style={{ animationDelay: `${0.2 * idx}s` }}
//               className={clsx(
//                 'relative text-base md:text-lg font-bold text-cyan-300 hover:text-white tracking-wide transition-all duration-500',
//                 'before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-cyan-400 before:transition-all before:duration-500 hover:before:w-full',
//                 'opacity-0 animate-staggered-link'
//               )}
//             >
//               {link.label.charAt(0).toUpperCase() + link.label.slice(1).toLowerCase()}
//             </Link>
//           ))}
//         </nav>

//         {/* Right: Switchers */}
//         <div className="flex flex-col items-end gap-2">
//           {/* <ThemeSwitcher /> */}
//           <LangSwitcher />
//         </div>
//       </div>
//     </header>
//   );
// }



'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
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

export default function NavbarFuturistic() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';

  const navLinks = [
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
    <header className="sticky top-0 z-50 w-full bg-zinc-950 border-b border-zinc-800 shadow-xl backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="relative group w-[100px] h-[100px] cursor-pointer">
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
                  ? 'text-cyan-300 lg:text-2xl md:text-xl sm:text-lg hover:text-white before:absolute before:-bottom-1 before:right-0 before:w-0 before:h-[2px] before:bg-cyan-400 before:transition-all before:duration-500 hover:before:w-full'
                  : 'text-cyan-300 lg:text-lg md:text-sm sm:text-xs hover:text-white before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-cyan-400 before:transition-all before:duration-500 hover:before:w-full',
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

// app/[lang]/layout.tsx
import '../globals.css';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';
import Navbar from '@/components/Navbar';
import NavbarAcademic from '@/components/NavbarAcademic';
import NavbarScientific from '@/components/NavbarScientific';
import NavbarFuturistic from '@/components/NavbarFuturistic';

// layout.tsx or root layout
import { Cairo } from 'next/font/google';
import { Geist, Geist_Mono } from 'next/font/google';
import clsx from 'clsx';
import { Tajawal } from 'next/font/google';
import { Amiri } from 'next/font/google';
import { Metadata } from 'next';
import MobileNavbar from '@/components/MobileNavbar';

const metadataMap = {
  en: {
    title: {
      home: 'Home',
      departments: 'Departments',
      production: 'Production',
      research: 'Research',
      direction: 'Direction',
    },
    description: {
      home: 'Welcome to the Field Crops Research Institute.',
      departments: 'Learn about the departments of FCRI.',
      production: 'Explore FCRI’s agricultural production.',
      research: 'Discover FCRI’s research programs.',
      direction: 'Meet the direction and management team.',
    },
  },
  ar: {
    title: {
      home: 'الرئيسية',
      departments: 'الأقسام',
      production: 'الإنتاج',
      research: 'البحوث',
      direction: 'الإدارة',
    },
    description: {
      home: 'مرحبًا بكم في معهد بحوث المحاصيل الحقلية.',
      departments: 'تعرف على أقسام المعهد.',
      production: 'اكتشف إنتاج المعهد الزراعي.',
      research: 'تعرف على برامج البحوث بالمعهد.',
      direction: 'تعرف على الإدارة وفريق العمل.',
    },
  },
};


const amiri = Amiri({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['400', '700'], // You can customize weights as needed
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['400', '500', '700'], // Customize as needed
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['400', '600', '700'],
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
    // ✅ Await anything (Next.js now considers params "safe")
  await Promise.resolve();
  const dir = params.lang === 'ar' ? 'rtl' : 'ltr';

  return (
    // <html lang={params.lang} dir={dir}>
    <html lang={params.lang} dir={dir}>
      <body  className={clsx(
        // cairo.variable,                // 👈 Arabic font variable
        // tajawal.variable,         // 👈 Arabic font
        amiri.variable,         // 👈 Arabic font

        geist.variable,                // 👈 Your existing font variable
        params.lang === 'ar' ? 'font-arabic' : 'font-sans',  // 👈 Conditional font class
        "bg-white text-black dark:bg-zinc-950 dark:text-white transition-colors duration-300 "
        )}>
        {/* <Header /> */}
        {/* <Navbar></Navbar> */}
        {/* <NavbarAcademic></NavbarAcademic> */}
        {/* <NavbarScientific></NavbarScientific> */}
        <div className="hidden md:block">
          <NavbarFuturistic></NavbarFuturistic>
        </div>
        <div className="block md:hidden">
          <MobileNavbar></MobileNavbar>
        </div>
        <main className="flex-grow">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata(  {params,}: {params: { lang: string };
}): Promise<Metadata> {
  const lang = params.lang === 'ar' ? 'ar' : 'en';
  const path = typeof window !== 'undefined'
    ? window.location.pathname.split('/')[2] || 'home'
    : 'home' ; {
    console.log('[Metadata] lang:', params.lang); // 🔍 confirm it's running

  return {
    title: metadataMap[lang].title[path as keyof typeof metadataMap['en']['title']],
    description: metadataMap[lang].description[path as keyof typeof metadataMap['en']['description']],
    metadataBase: new URL('https://fcri.gov.eg'), // replace with your domain
    alternates: {
      canonical: `/${lang}`,
    },
    other: {},
    // ✅ Required structure for html tag customization
    htmlAttributes: {
      lang: params.lang,
      dir: params.lang === 'ar' ? 'rtl' : 'ltr',
    },
  };
}
}


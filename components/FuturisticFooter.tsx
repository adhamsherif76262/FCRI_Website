// components/FuturisticFooter.tsx
'use client';
import {
  Phone, Printer, Mail, MapPin, ArrowUp,
} from 'lucide-react';
// import { usePathname } from 'next/navigation';
import LangSwitcher from './LangSwitcher';
import clsx from 'clsx';
import Link from 'next/link'
import { useState, useEffect } from 'react';

// const departmentsEn = [
//   'Wheat', 'Maize', 'Rice', 'Barley', 'Sorghum',
//   'Legumes', 'Fibers','Onion', 'Forage', 'Crop Physiology',
//   'Oil Crops','Cell biology', 'Genetic Resources','Seed Technology', 'Crop Intensification'
// ];

// const departmentsAr = [
//   'القمح', 'الذرة الشامية', 'الأرز', 'الشعير', 'الذرة الرفيعة',
//   'البقوليات', 'الألياف', 'المحاصيل الزيتية', 'العلف', 'دراسة الخلية',
//   'الأصول الوراثيه', 'البصل', 'فسيولوجيا المحاصيل', 'تكنولوجيا البذور', 'التكثيف المحصولى'
// ];
// components/FuturisticParagraphSection.tsx
type Props = {
  rtl?: boolean;
};
interface Department {
  name: string;
  slug: string; // ✅ Always in English
  image: string;
  footerName: string;
}
  function Handle_To_Top_Click(){
     window.scrollTo({ top: 0, behavior: 'smooth' })
  }

export default function FuturisticFooter( {rtl} : Props) {
    // const pathname = usePathname();
    // const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
    // const departments = currentLang === 'ar' ? departmentsAr : departmentsEn;
    const currentLang =   rtl ? 'ar' : 'en';

      const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    async function fetchDepartments() {
      const deps: Department[] = await import(
        `@/locales/${currentLang}/departments_${currentLang === 'ar' ? 'Ar' : 'En'}.json`
      ).then((mod) => mod.default);
      setDepartments(deps);
    }
    fetchDepartments();
  }, [currentLang]);

    return (
    <footer
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
      className={clsx(
        "font-black mt-16 xxxs:text-center w-full px-4 sm:px-6 lg:px-12 py-6 bg-black text-green-300 border-t border-green-300/40",
        currentLang === 'ar' ? "md:text-right" : "md:text-left"
      )}
    >
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:Grid-Columns gap-8">
        {/* Contact Info */}
        <div className=''>
          <h3 className=" text-green-300 xxxs:text-2xl md:T-Scale md:ml-10 xxxs:ml-0  mb-10">📡 {currentLang === 'ar' ? 'معلومات الاتصال' : 'Contact Info'}</h3>
          <ul className="space-y-2 xxxs:text-xl xxxs:mx-auto xxxs:w-fit md:mx-0">
            <li className="flex items-center xxxs:justify-center md:justify-start gap-3">
              <Phone className="animate-bounce text-green-300 w-6 h-6 mt-1" />
              <span>{currentLang === 'ar' ? "٣٥٧٣٨٤٢٥ /  ٣٥٧٢٦١٢٧(٢٠٢)" : "(202) 35726127 / 35738425"}</span>
            </li>
            <li className="flex items-center xxxs:justify-center md:justify-start  gap-3">
              <Printer className="animate-bounce text-green-300 w-6 h-6 mt-1" />
              <span>{currentLang === 'ar' ? "٣٥٧٣٨٤٢٥ / ٣٧٧٤٣٢٥٦ (٢٠٢)" : "(202) 37743256 / 35738425"}</span>
            </li>
            <li className="flex items-center xxxs:justify-center md:justify-start gap-3">
              <MapPin className="animate-bounce text-green-300 min-w-6 min-h-6 mt-1" />
              <span className=''>
                {currentLang === 'ar'
                  ? '٩ شارع جامعة القاهرة، الجيزة ١٢٦١٩'
                  : '9, Cairo University Road, Giza 12619'}
              </span>
            </li>
            <li className="flex items-center xxxs:justify-center md:justify-start gap-3 xxxs:text-2xl">
              <Mail className="animate-bounce text-green-300 w-6 h-6 mt-1" />
                <a
                  href="mailto:iu.fcri@yahoo.com?subject=Contact%20Request%20Concerning?body=Dear%20FCRI%20Team%3B"
                  className="hover:underline text-green-300 break-all"
                >
                  iu.fcri@yahoo.com
                </a>
            </li>
          </ul>
                  {/* To Top */}
            <div className="xxxs:hidden md:block text-xl mx-10 my-10">
              <button
              onClick={Handle_To_Top_Click}
                className="flex items-center gap-2 text-green-300  hover:text-blue-950 mt-4 md:mt-0 border border-green-300 px-4 py-2 rounded-lg transition-all hover:bg-green-300 hover:shadow-green-300 shadow-sm"
              >
                <ArrowUp className="w-5 h-5 animate-bounce" />
                {currentLang === 'ar' ? 'إلى الأعلى' : 'To Top'}
              </button>
              <div className='xxxs:mt-10'>
                <LangSwitcher />
              </div>
            </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className={clsx(
            "text-green-300 xxxs:text-2xl mb-10 text-center  xxxs:ml-0",
            currentLang === 'ar' ? "lg:ml-44 md:ml-32":"lg:mr-60s xl:mr-14 lg:-ml-52 md:-ml-40"
          )}>🧬 {currentLang === 'ar' ? 'الأقسام' : 'Departments'}</h3>
          <ul className={clsx(
            "grid grid-cols-1  text-sm sm:text-base",
            currentLang === 'ar' ? "xxxs:grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 gap-5 xxs:gap-x-0 md:gap-x-5":"xxxs:grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 xxs:gap-x-0 md:gap-x-5"
          )}>
            {departments.map((dep, i) => (

                <li
                  key={i}
                  className="xxxs:text-2xl group relative cursor-pointer text-green-300 hover:text-white transition-all duration-300 font-black"
                >
                  <Link
                    href={`/${currentLang}/departments/${dep.slug}`}
                  >

                  <span className='p-auto'>{dep.footerName}</span>
                  <span className={clsx(
                    "absolute -bottom-1 h-0.5 w-0 bg-green-300 transition-all duration-300 group-hover:w-full",
                    currentLang === 'ar' ? "right-0" : "left-0 "
                  )}   />
                  </Link>
                </li>
            ))}
          </ul>
        </div>

        {/* To Top */}
        <div className="md:hidden flex flex-col justify-between xxxs:items-center md:items-start text-center md:text-right text-xl">
          <button
          onClick={Handle_To_Top_Click}
            className="flex items-center gap-2 text-green-300 hover:text-blue-600 mt-4 md:mt-0 border border-green-300 px-4 py-2 rounded-lg transition-all hover:bg-green-300 hover:shadow-green-300 shadow-sm"
          >
            <ArrowUp className="w-5 h-5 animate-bounce" />
            {currentLang === 'ar' ? 'إلى الأعلى' : 'To Top'}
          </button>
          <div className='xxxs:mt-10 mb-14'>
            <LangSwitcher />
          </div>
        </div>
      </div>
      <p className="text-2xl xxxs:mt-0 md:mt-10 mb-0 pb-0 text-green-300 xxxs:text-center hover:text-white">
            &copy; {new Date().getFullYear()} {currentLang === 'ar' ? 'معــهد بــحوث المحــاصيل الحقلية' : 'Field Crops Research Institute'}
      </p>
    </footer>
  );
}

// components/FuturisticFooter.tsx
'use client';
import {
  Phone, Printer, Mail, MapPin, ArrowUp,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import LangSwitcher from './LangSwitcher';
import clsx from 'clsx';

const departmentsEn = [
  'Wheat', 'Maize', 'Rice', 'Barley', 'Sorghum',
  'Legumes', 'Fiber Crops', 'Oil Crops', 'Forages', 'Millets',
  'Quinoa', 'Sugar Crops', 'Fodder', 'Breeding', 'Crop Protection'
];

const departmentsAr = [
  'القمح', 'الذرة الشامية', 'الأرز', 'الشعير', 'الذرة الرفيعة',
  'البقوليات', 'محاصيل الألياف', 'محاصيل الزيت', 'محاصيل العلف', 'الدخن',
  'الكينوا', 'محاصيل السكر', 'مراعي العلف', 'التربية', 'وقاية المحاصيل'
];

  function Handle_To_Top_Click(){
     window.scrollTo({ top: 0, behavior: 'smooth' })
  }
export default function FuturisticFooter() {
    const pathname = usePathname();
    const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
    const departments = currentLang === 'ar' ? departmentsAr : departmentsEn;

  return (
    <footer
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
      className={clsx(
        "font-black mt-16 xxxs:text-center w-full px-4 sm:px-6 lg:px-12 py-12 bg_Beige text-black border-t border-black/40",
        currentLang === 'ar' ? "md:text-right" : "md:text-left"
      )}
    >
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:Grid-Columns gap-8">
        {/* Contact Info */}
        <div className=''>
          <h3 className=" text-black xxxs:text-3xl md:T-Scale ml-10 mb-10">📡 {currentLang === 'ar' ? 'معلومات الاتصال' : 'Contact Info'}</h3>
          <ul className="space-y-2 xxxs:text-xl xxxs:mx-auto xxxs:w-fit md:mx-0">
            <li className="flex items-center xxxs:justify-center md:justify-start gap-3">
              <Phone className="animate-bounce bg_Gray w-6 h-6 mt-1" />
              <span>٣٥٧٣٨٤٢٥ /  ٣٥٧٢٦١٢٧(٢٠٢)</span>
            </li>
            <li className="flex items-center xxxs:justify-center md:justify-start  gap-3">
              <Printer className="animate-bounce bg_Gray w-6 h-6 mt-1" />
              <span>٣٥٧٣٨٤٢٥ / ٣٧٧٤٣٢٥٦ (٢٠٢)</span>
            </li>
            <li className="flex items-center xxxs:justify-center md:justify-start  gap-3">
              <MapPin className="animate-bounce bg_Gray w-6 h-6 mt-1" />
              <span>
                {currentLang === 'ar'
                  ? '٩ شارع جامعة القاهرة، الجيزة ١٢٦١٩'
                  : '9, Cairo University Road (Gamaa Street), Giza 12619'}
              </span>
            </li>
            <li className="flex items-center xxxs:justify-center md:justify-start gap-3 xxxs:text-2xl">
              <Mail className="animate-bounce bg_Gray w-6 h-6 mt-1" />
                <a
                  href="mailto:iu.fcri@yahoo.com?subject=Contact%20Request%20Concerning?body=Dear%20FCRI%20Team%3B"
                  className="hover:underline bg_Gray break-all"
                >
                  iu.fcri@yahoo.com
                </a>
            </li>
          </ul>
                  {/* To Top */}
            <div className="xxxs:hidden md:block text-xl mx-10 my-20">
              <button
              onClick={Handle_To_Top_Click}
                className="flex items-center gap-2 text-black hover:text-blue-600 mt-4 md:mt-0 border border-black px-4 py-2 rounded-lg transition-all hover:bg-black hover:shadow-black shadow-sm"
              >
                <ArrowUp className="w-5 h-5 animate-bounce" />
                {currentLang === 'ar' ? 'إلى الأعلى' : 'To Top'}
              </button>
              <div className='xxxs:mt-20'>
                <LangSwitcher />
              </div>
            </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className={clsx(
            "text-black xxxs:text-3xl mb-10 text-center  xxxs:ml-0",
            currentLang === 'ar' ? "lg:ml-44 md:ml-32":"lg:mr-60s xl:mr-14 lg:-ml-52 md:-ml-40"
          )}>🧬 {currentLang === 'ar' ? 'الأقسام' : 'Departments'}</h3>
          <ul className="grid grid-cols-1 xxxs:grid-cols-2 gap-5 xxs:gap-x-0 md:gap-x-5 text-sm sm:text-base">
            {departments.map((dep, i) => (
                <li
                  key={i}
                  className="xxxs:text-2xl group relative cursor-pointer text-black hover:bg_Gray transition-all duration-300 font-black"
                >
                  <span>{dep}</span>
                  <span className={clsx(
                    "absolute -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full",
                    currentLang === 'ar' ? "right-0" : "left-0"
                  )} />
                </li>
            ))}
          </ul>
        </div>

        {/* To Top */}
        <div className="md:hidden flex flex-col justify-between xxxs:items-center md:items-start text-center md:text-right text-xl">
          <button
          onClick={Handle_To_Top_Click}
            className="flex items-center gap-2 text-black hover:text-blue-600 mt-4 md:mt-0 border border-black px-4 py-2 rounded-lg transition-all hover:bg-black hover:shadow-black shadow-sm"
          >
            <ArrowUp className="w-5 h-5 animate-bounce" />
            {currentLang === 'ar' ? 'إلى الأعلى' : 'To Top'}
          </button>
          <div className='xxxs:mt-10 mb-14'>
            <LangSwitcher />
          </div>
        </div>
      </div>
      <p className="text-3xl mt-0 text-gray-100 xxxs:text-center">
            &copy; {new Date().getFullYear()} {currentLang === 'ar' ? 'معهد بحوث المحاصيل الحقلية' : 'Field Crops Research Institute'}
      </p>
    </footer>
  );
}

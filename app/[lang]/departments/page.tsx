// import Image from 'next/image';
// import Link from 'next/link';
// import slugify from 'slugify';

// interface Department {
//   name: string;
//   image: string;
// }

// interface Props {
//   params: { lang: string };
// }

// export default async function DepartmentsPage({ params: { lang } }: Props) {
//   const isArabic = lang === 'ar';

//   // Dynamically import localized JSON
//   const departments: Department[] = await import(
//     `@/locales/${isArabic ? 'ar' : 'en'}/departments_${isArabic ? 'Ar' : 'En'}.json`
//   ).then((mod) => mod.default);

//   return (
//     <section
//       dir={isArabic ? 'rtl' : 'ltr'}
//       className="min-h-screen w-full px-4 sm:px-0 py-16 bg-white dark:bg-gray-950"
//     >
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-cyan-600 mb-12">
//         {isArabic ? 'الأقسام البحثية' : 'Research Departments'}
//       </h1>

//       <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
//         {departments.map((dept, index) => {
//           const slug = slugify(dept.name, { lower: true, strict: true });

//           return (
//             <Link
//               href={`/${lang}/departments/${slug}`}
//               key={index}
//               className="group relative rounded-3xl shadow-xl border border-cyan-300 bg-white dark:bg-gray-800 overflow-hidden transition-transform hover:scale-[1.03]"
//             >
//               <Image
//                 src={dept.image}
//                 alt={dept.name}
//                 width={700}
//                 height={700}
//                 className="w-full h-[500px] object-cover transition duration-500 group-hover:blur-[1px] group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-cyan-600/10 opacity-0 group-hover:opacity-100 transition duration-300" />
//               <h2 className="absolute bottom-0 w-full text-center bg-cyan-600/80 text-white font-bold text-lg py-3 tracking-wide group-hover:bg-cyan-700">
//                 {dept.name}
//               </h2>
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// }




import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import FuturisticHeading from '@/components/FuturisticHeading';

interface Department {
  name: string;
  slug: string; // ✅ Always in English
  image: string;
}

interface Props {
  params: { lang: string };
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const isArabic = params.lang === 'ar';

  return {
    title: isArabic ? 'الأقسام البحثية' : 'Research Departments',
  };
}

export default async function DepartmentsPage({ params: { lang } }: Props) {
  const isArabic = lang === 'ar';

  const departments: Department[] = await import(
    `@/locales/${isArabic ? 'ar' : 'en'}/departments_${isArabic ? 'Ar' : 'En'}.json`
  ).then((mod) => mod.default);

  return (
    <section
      dir={isArabic ? 'rtl' : 'ltr'}
      className="min-h-screen w-full px-4 sm:px-0 py-16 bg-none dark:bg-gray-950"
    >
      <div className='max-w-max mx-auto'>
    <FuturisticHeading rtl={isArabic}>
     {isArabic ? 'الأقسام البحثية' : 'Research Departments'}
    </FuturisticHeading>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {departments.map((dept, index) => (
          <Link
            key={index}
            href={`/${lang}/departments/${dept.slug}`}
            className="group relative rounded-3xl shadow-xl border border-cyan-300 bg-white dark:bg-gray-800 overflow-hidden transition-transform hover:scale-[1.03]"
          >
            <Image
              src={dept.image}
              alt={dept.name}
              width={700}
              height={700}
              className="w-full h-[500px] object-cover transition duration-500 group-hover:blur-[1px] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-cyan-600/10 opacity-0 group-hover:opacity-100 transition duration-300" />
            <h2 className="absolute bottom-0 w-full text-center bg-cyasn-600/80 bg_Beige text-black font-black text-lg py-3 tracking-wide group-hover:bg-cyan-700">
              {dept.name}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}

  // "Department_Achieviements" : [    
  //   {
  //     "id": "1",
  //     "text": "",
  //     "level": 1,
  //     "isExpanded": false,
  //     "children": [
  //       {
  //         "id": "1.1",
  //         "text": "",
  //         "level": 2,
  //         "parentId": "1",
  //         "isExpanded": false,
  //         "children": [
  //           {
  //             "id": "1.1.1",
  //             "text": "",
  //             "level": 3,
  //             "parentId": "1.1"
  //           },
  //           {
  //             "id": "1.1.2",
  //             "text": "",
  //             "level": 3,
  //             "parentId": "1.1"
  //           },
  //           {
  //             "id": "1.1.3",
  //             "text": "",
  //             "level": 3,
  //             "parentId": "1.1"
  //           }
  //         ]
  //       },
  //       {
  //         "id": "1.2",
  //         "text": "",
  //         "level": 2,
  //         "parentId": "1",
  //         "isExpanded": false,
  //         "children": [
  //           {
  //             "id": "1.2.1",
  //             "text": "",
  //             "level": 3,
  //             "parentId": "1.2"
  //           },
  //           {
  //             "id": "1.2.2",
  //             "text": "",
  //             "level": 3,
  //             "parentId": "1.2"
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     "id": "2",
  //     "text": "",
  //     "level": 1,
  //     "isExpanded": false,
  //     "children": [
  //       {
  //         "id": "2.1",
  //         "text": "",
  //         "level": 2,
  //         "parentId": "2",
  //         "isExpanded": false,
  //         "children": [
  //           {
  //             "id": "2.1.1",
  //             "text": "",
  //             "level": 3,
  //             "parentId": "2.1"
  //           },
  //           {
  //             "id": "2.1.2",
  //             "text": "",
  //             "level": 3,
  //             "parentId": "2.1"
  //           }
  //         ]
  //       },
  //       {
  //         "id": "2.2",
  //         "text": "",
  //         "level": 2,
  //         "parentId": "2",
  //         "isExpanded": false,
  //         "children": [
  //           {
  //             "id": "2.2.1",
  //             "text": "",
  //             "level": 3,
  //             "parentId": "2.2"
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ]

// import { notFound } from 'next/navigation'
// // import Image from 'next/image'
// import { Metadata } from 'next';
// import departmentsEn from '@/locales/en/departments_En.json';
// import departmentsAr from '@/locales/ar/departments_Ar.json';
// import FuturisticHeading from '@/components/FuturisticHeading';
// import ParagraphStickyImage from '@/components/ParagraphStickyImage';
// import TreeBranchHirarchyList from '@/components/tree-branch-hierarchy-list';
// import PdfViewer from '@/components/pdf/PdfViewerWrapper';
// import { PdfTrigger, PdfModal } from '@/components/PdfViewer';
// import { useState } from 'react';

// type Props = {
//   params: {
//     lang: 'en' | 'ar';
//     slug: string;
//   };
// };

// // Slug type
// interface Params {
//   params: {
//     lang: string
//     slug: string
//   }
// }
// interface HierarchyItem {
//   id: string
//   text: string
//   level: 1 | 2 | 3
//   parentId?: string
//   isExpanded?: boolean
//   children?: HierarchyItem[]
// }
// // Department types
// interface DepartmentMeta {
//   name: string
//   image: string
//   slug: string
// }

// interface DepartmentContent {
//   P1: string[];
//   P1_Title: string;
//   Director_Image: string;
//   Department_Achieviements : HierarchyItem[];
//   name: string
//   description: string
//   image: string
// }
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { lang, slug } = params;

//   const departments = lang === 'ar' ? departmentsAr : departmentsEn;
//   const department = departments.find((dep) => dep.slug === slug);

//   if (!department) notFound();

//   return {
//     title: department.name,
//   };
// }
// const [isOpen, setIsOpen] = useState(false);

// export default async function DepartmentPage({ params: { lang, slug } }: Params) {
//   const isArabic = lang === 'ar'
//   const current_Lang = isArabic ? "ar" : "en"
//   // const pdf1 = '/pdfs/file1.pdf';
//   const pdf1 = '/pdfs/Research Data/Cell_Biology.pdf';
//   const pdf2 = '/pdfs/HR Data/قسم القمح.pdf';
//   // 1. Load department metadata (to verify valid slug and get English slug list)
//   const departments: DepartmentMeta[] = await import(`@/locales/${isArabic ? 'ar' : 'en'}/departments_${isArabic ? 'Ar' : 'En'}.json`).then(mod => mod.default)
//   const departmentMeta = departments.find(dep => dep.slug === slug)

//   if (!departmentMeta) return notFound()

//     const newSlug = slug.slice(0, -2);
//   // 2. Load localized content
//   const departmentData: DepartmentContent = await import(
//     `@/locales/${isArabic ? 'ar' : 'en'}/departments/${newSlug}${isArabic ? 'Ar' : 'En'}.json`
//   ).then(mod => mod.default)

//   return (
//     <section
//       dir={isArabic ? 'rtl' : 'ltr'}
//       className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-1000 xxxs:OVERFLOW-X xl:overflow-x-visible "
//     >
//           <div className="space-y-10 py-6">
//       <section>
//         <h2 className="text-xl font-semibold mb-4">{lang === 'ar' ? 'القسم الأول' : 'Section One'}</h2>
//         {/* <PdfViewer fileUrl={pdf1} lang={current_Lang} /> */}
//       <PdfTrigger fileName="Research.pdf" onClick={() => setIsOpen(true)} />
//       <PdfModal isOpen={isOpen} onClose={() => setIsOpen(false)} fileUrl={pdf1} lang={current_Lang} />
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold mb-4">{lang === 'ar' ? 'القسم الثاني' : 'Section Two'}</h2>
//         {/* <PdfViewer fileUrl={pdf2} lang={current_Lang} /> */}
//       </section>
//     </div>
    
//       <FuturisticHeading rtl={isArabic}>
//         {departmentMeta.name}
//       </FuturisticHeading>
      
//       <div className='mt-10 xxxs:min-w-[100%]'>
//         <ParagraphStickyImage
//          paragraphs={departmentData.P1}
//          imageSrc={departmentData.Director_Image}
//          title={departmentData.P1_Title}
//          rtl={isArabic}/>
//        </div>
// {/* 
//       <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
//         <div className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-lg border border-cyan-400">
//           <Image
//             src={departmentData.image}
//             alt={departmentData.name}
//             width={1000}
//             height={700}
//             className="object-cover w-full h-[400px]"
//           />
//         </div>

//         <div className="w-full md:w-1/2 text-lg leading-8">
//           <p className="whitespace-pre-line">{departmentData.description}</p>
//         </div>
//       </div> */}

//   <FuturisticHeading rtl={isArabic}>
//         {
//           isArabic ? "انجازات القسم" : "Department's Achieviements"
//         }
        
//   </FuturisticHeading>

//   <div className=''>

//     <TreeBranchHirarchyList items={departmentData.Department_Achieviements} />
//   </div>

//     </section>
//   )
// }




// // app/[lang]/departments/[slug]/page.tsx
// import { notFound } from 'next/navigation';
// import { Metadata } from 'next';
// import departmentsEn from '@/locales/en/departments_En.json';
// import departmentsAr from '@/locales/ar/departments_Ar.json';
// import FuturisticHeading from '@/components/FuturisticHeading';
// import ParagraphStickyImage from '@/components/ParagraphStickyImage';
// import TreeBranchHirarchyList from '@/components/tree-branch-hierarchy-list';
// import dynamic from 'next/dynamic';

// // Dynamically import client-only PDF components
// const PdfTrigger = dynamic(() => import('@/components/PdfViewer').then(mod => mod.PdfTrigger), { ssr: false });
// const PdfModal = dynamic(() => import('@/components/PdfViewer').then(mod => mod.PdfModal), { ssr: false });
// import { useState } from 'react';

// type Props = {
//   params: {
//     lang: 'en' | 'ar';
//     slug: string;
//   };
// };

// interface Params {
//   params: {
//     lang: string;
//     slug: string;
//   };
// }

// interface HierarchyItem {
//   id: string;
//   text: string;
//   level: 1 | 2 | 3;
//   parentId?: string;
//   isExpanded?: boolean;
//   children?: HierarchyItem[];
// }

// interface DepartmentMeta {
//   name: string;
//   image: string;
//   slug: string;
// }

// interface DepartmentContent {
//   P1: string[];
//   P1_Title: string;
//   Director_Image: string;
//   Department_Achieviements: HierarchyItem[];
//   name: string;
//   description: string;
//   image: string;
// }

// // Metadata for SEO
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { lang, slug } = params;
//   const departments = lang === 'ar' ? departmentsAr : departmentsEn;
//   const department = departments.find((dep) => dep.slug === slug);

//   if (!department) notFound();

//   return {
//     title: department.name,
//   };
// }

// // Wrapper component to handle useState safely on the client
// function ClientPDFSection({
//   // currentLang,
//   pdf1,
//   isArabic,
// }: {
//   currentLang: string;
//   pdf1: string;
//   isArabic: boolean;
// }) {

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <section>
//         <h2 className="text-xl font-semibold mb-4">{isArabic ? 'القسم الأول' : 'Section One'}</h2>
//         <PdfTrigger fileName="Research.pdf" onClick={() => setIsOpen(true)} />
//         <PdfModal isOpen={isOpen} onClose={() => setIsOpen(false)} fileUrl={pdf1} lang={isArabic ? "ar" : "en"} />
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold mb-4">{isArabic ? 'القسم الثاني' : 'Section Two'}</h2>
//         {/* Future PDF viewer for second section can go here */}
//       </section>
//     </>
//   );
// }

// // Main page component
// export default async function DepartmentPage({ params: { lang, slug } }: Params) {
//   const isArabic = lang === 'ar';
//   const currentLang = isArabic ? 'ar' : 'en';
//   const pdf1 = '/pdfs/Research Data/Cell_Biology.pdf';

//   const departments: DepartmentMeta[] = await import(`@/locales/${currentLang}/departments_${isArabic ? 'Ar' : 'En'}.json`).then(
//     (mod) => mod.default
//   );
//   const departmentMeta = departments.find((dep) => dep.slug === slug);
//   if (!departmentMeta) return notFound();

//   const newSlug = slug.slice(0, -2);
//   const departmentData: DepartmentContent = await import(
//     `@/locales/${currentLang}/departments/${newSlug}${isArabic ? 'Ar' : 'En'}.json`
//   ).then((mod) => mod.default);

//   return (
//     <section
//       dir={isArabic ? 'rtl' : 'ltr'}
//       className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-1000"
//     >
//       <div className="space-y-10 py-6">
//         {/* Client-side PDF preview section */}
//         <ClientPDFSection currentLang={currentLang} pdf1={pdf1} isArabic={isArabic} />
//       </div>

//       <FuturisticHeading rtl={isArabic}>{departmentMeta.name}</FuturisticHeading>

//       <div className="mt-10 xxxs:min-w-[100%]">
//         <ParagraphStickyImage
//           paragraphs={departmentData.P1}
//           imageSrc={departmentData.Director_Image}
//           title={departmentData.P1_Title}
//           rtl={isArabic}
//         />
//       </div>

//       <FuturisticHeading rtl={isArabic}>
//         {isArabic ? 'انجازات القسم' : "Department's Achievements"}
//       </FuturisticHeading>

//       <div>
//         <TreeBranchHirarchyList items={departmentData.Department_Achieviements} />
//       </div>
//     </section>
//   );
// }






// import { notFound } from 'next/navigation';
// import { Metadata } from 'next';
// import departmentsEn from '@/locales/en/departments_En.json';
// import departmentsAr from '@/locales/ar/departments_Ar.json';
// import FuturisticHeading from '@/components/FuturisticHeading';
// import ParagraphStickyImage from '@/components/ParagraphStickyImage';
// import TreeBranchHirarchyList from '@/components/tree-branch-hierarchy-list';
// import ClientPDFSection from '@/components/ClientPDFSection';
// import FlowingAchievementsList from '@/components/flowing-achievements-list';
// import FuturisticParagraphSection from '@/components/FuturisticParagraphSection';
// import SpiralGalaxyList from '@/components/spiral-galaxy-list';
// import ConstellationMobileList from '@/components/constellation-mobile-list';

// type Props = {
//   params: {
//     lang: 'en' | 'ar';
//     slug: string;
//   };
// };

// interface Params {
//   params: {
//     lang: string;
//     slug: string;
//   };
// }

// interface HierarchyItem {
//   id: string;
//   text: string;
//   level: 1 | 2 | 3;
//   parentId?: string;
//   isExpanded?: boolean;
//   children?: HierarchyItem[];
// }

// interface DepartmentMeta {
//   name: string;
//   image: string;
//   slug: string;
// }

// type NetworkItemData = {
//   id: string;
//   title: string;
//   description: string;
//   category: string;
//   connections: string[];
//   strength: number;
// };
// type CircularDesignItemsType = {
//   [key: string]: NetworkItemData[]; // allows Array_1, Array_2, ...
// };
// interface SubItem {
//   text: string
//   children?: SubItem[]
// }
// interface GalaxyItem {
//   id: string
//   title: string
//   Sub_title: string
//   content: string
//   subItems?: SubItem[]
//   priority: "high" | "medium" | "low"
//   category: string
// }

// interface ConstellationItem {
//   id: string
//   title: string
//   Sub_title: string
//   content: string
//   subItems?: SubItem[]
//   priority: "high" | "medium" | "low"
//   category: string
// }
// interface DepartmentContent {
//   P1: string[];
//   P2: string[];
//   P1_Title: string;
//   Director_Image: string;
//   Department_Achieviements: HierarchyItem[];
//   Department_Mission_Inner_Central : string;
//   Department_Mission_Inner : CircularDesignItemsType;
//   Department_Mission_Outer : [];
//   Department_Vision : ConstellationItem[] | GalaxyItem[];
//   HR_File_PDF_Path : string;
//   Research_File_PDF_Path : string;
//   name: string;
//   description: string;
//   image: string;
// }

// // Metadata for SEO
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { lang, slug } = params;
//   const departments = lang === 'ar' ? departmentsAr : departmentsEn;
//   const department = departments.find((dep) => dep.slug === slug);

//   if (!department) notFound();

//   return {
//     title: department.name,
//   };
// }

// // Main page component
// export default async function DepartmentPage({ params: { lang, slug } }: Params) {
//   const isArabic = lang === 'ar';
//   const currentLang = isArabic ? 'ar' : 'en';

//   const departments: DepartmentMeta[] = await import(`@/locales/${currentLang}/departments_${isArabic ? 'Ar' : 'En'}.json`).then(
//     (mod) => mod.default
//   );
//   const departmentMeta = departments.find((dep) => dep.slug === slug);
//   if (!departmentMeta) return notFound();

//   const newSlug = slug.slice(0, -2);
//   const departmentData: DepartmentContent = await import(
//     `@/locales/${currentLang}/departments/${newSlug}${isArabic ? 'Ar' : 'En'}.json`
//   ).then((mod) => mod.default);

//   return (
//     <section
//       dir={isArabic ? 'rtl' : 'ltr'}
//       className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-1000"
//     >

//       <FuturisticHeading rtl={isArabic}>{departmentMeta.name}</FuturisticHeading>

//       <div className="mt-10 xxxs:min-w-[100%]">
//         <ParagraphStickyImage
//           paragraphs={departmentData.P1}
//           imageSrc={departmentData.Director_Image}
//           title={departmentData.P1_Title}
//           rtl={isArabic}
//         />
//       </div>

//       <div className='hidden 2xl:block'>
//         <SpiralGalaxyList isRTL={isArabic} items={departmentData.Department_Vision}></SpiralGalaxyList>
//       </div>

//       <ConstellationMobileList isRTL={isArabic} items={departmentData.Department_Vision}></ConstellationMobileList>

//       <FuturisticHeading rtl={isArabic}>{isArabic ? "مهمة القسم" : "Department Mission"}</FuturisticHeading>
      
//       {
//         departmentData.P2 && (
//           <div className='xxxs:min-w-[100%] mt-10'>
//             <FuturisticParagraphSection title={""} paragraphs={departmentData.P2} rtl={isArabic}/>
//           </div>
//         )
//       }

//     <FlowingAchievementsList items={departmentData.Department_Mission_Outer} lang={currentLang === 'ar' ? "ar" : "en"} Tree={true} Circular_Design_CenterTitle={departmentData.Department_Mission_Inner_Central} Circular_Design_Items={departmentData.Department_Mission_Inner}/>

//       <FuturisticHeading rtl={isArabic}>
//         {isArabic ? 'انجازات القسم' : "Department's Achievements"}
//       </FuturisticHeading>

//       <div>
//         <TreeBranchHirarchyList items={departmentData.Department_Achieviements} />
//       </div>

//       <div className="space-y-10 py-6 xxxs:overflow-hidden xxs:overflow-visible">
//         <ClientPDFSection title={isArabic ? "ملف الأبحاث" : "Researches File"} pdf={departmentData.Research_File_PDF_Path} isArabic={isArabic} animation='rotate-in-blur'/>
//       </div>

//       <div className="space-y-10 py-6 xxxs:overflow-hidden xxs:overflow-visible">
//         <ClientPDFSection title={isArabic ? "ملف الموارد البشرية" : "Human Resources File"} pdf={departmentData.HR_File_PDF_Path} isArabic={isArabic} animation='animate-bounceIn'/>
//       </div>

//     </section>
//   );
// }




















import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import departmentsEn from '@/locales/en/departments_En.json';
import departmentsAr from '@/locales/ar/departments_Ar.json';
import FuturisticHeading from '@/components/FuturisticHeading';
import ParagraphStickyImage from '@/components/ParagraphStickyImage';
import TreeBranchHirarchyList from '@/components/tree-branch-hierarchy-list';
import ClientPDFSection from '@/components/ClientPDFSection';
import FlowingAchievementsList from '@/components/flowing-achievements-list';
import FuturisticParagraphSection from '@/components/FuturisticParagraphSection';
import SpiralGalaxyList from '@/components/spiral-galaxy-list';
import ConstellationMobileList from '@/components/constellation-mobile-list';

// Define the expected resolved type of params
interface PageParams {
  lang: 'en' | 'ar';
  slug: string;
}

// Update the type of params in your component props
interface PageProps {
  params: Promise<PageParams>; // params is now a Promise
}



interface HierarchyItem {
  id: string;
  text: string;
  level: 1 | 2 | 3;
  parentId?: string;
  isExpanded?: boolean;
  children?: HierarchyItem[];
}

interface DepartmentMeta {
  name: string;
  image: string;
  slug: string;
}

type NetworkItemData = {
  id: string;
  title: string;
  description: string;
  category: string;
  connections: string[];
  strength: number;
};

type CircularDesignItemsType = {
  [key: string]: NetworkItemData[];
};

interface SubItem {
  text: string;
  children?: SubItem[];
}

interface GalaxyItem {
  id: string;
  title: string;
  Sub_title: string;
  content: string;
  subItems?: SubItem[];
  priority: 'high' | 'medium' | 'low';
  category: string;
}

interface ConstellationItem {
  id: string;
  title: string;
  Sub_title: string;
  content: string;
  subItems?: SubItem[];
  priority: 'high' | 'medium' | 'low';
  category: string;
}

interface DepartmentContent {
  P1: string[];
  P2: string[];
  P1_Title: string;
  Director_Image: string;
  Department_Achieviements: HierarchyItem[];
  Department_Mission_Inner_Central: string;
  Department_Mission_Inner: CircularDesignItemsType;
  Department_Mission_Outer: [];
  Department_Vision: ConstellationItem[] | GalaxyItem[];
  HR_File_PDF_Path: string;
  Research_File_PDF_Path: string;
  name: string;
  description: string;
  image: string;
}

// ✅ Metadata for SEO
// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const { lang, slug } = params;
//   const departments = lang === 'ar' ? departmentsAr : departmentsEn;
//   const department = departments.find((dep) => dep.slug === slug);

//   if (!department) notFound();

//   return {
//     title: department.name,
//   };
// }


export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  // const { lang, slug } = params;
    const resolvedParams = await params;
  const { lang, slug } = resolvedParams;
  const departments = lang === 'ar' ? departmentsAr : departmentsEn;
  const department = departments.find((dep) => dep.slug === slug);

  if (!department) notFound();

  return {
    title: department.name,
  };
}

// app/[lang]/departments/[slug]/page.tsx

// export async function generateStaticParams() {
//   // const langs = ["en", "ar"];

//   // Import both language JSON files for departments
//   const enDepartments = (await import("@/locales/en/departments_En.json")).default;
//   const arDepartments = (await import("@/locales/ar/departments_Ar.json")).default;

//   return [
//     ...enDepartments.map((dep) => ({ lang: "en", slug: dep.slug })),
//     ...arDepartments.map((dep) => ({ lang: "ar", slug: dep.slug })),
//   ];
// }



// export async function generateStaticParams() {
//   const langs = ["en", "ar"];
//   const slugs = ["dep1_En", "dep2_En", "dep1_Ar", "dep2_Ar"]; // adjust to your slugs

//   return langs.flatMap((lang) =>
//     slugs.map((slug) => ({
//       lang,
//       slug,
//     }))
//   );
// }



// ✅ Main page component
export default async function DepartmentPage({params} : PageProps) {
    const resolvedParams = await params;

  const { lang, slug } = resolvedParams;
  const isArabic = lang === 'ar';

  const departments: DepartmentMeta[] = await import(
    `@/locales/${lang}/departments_${isArabic ? 'Ar' : 'En'}.json`
  ).then((mod) => mod.default);

  const departmentMeta = departments.find((dep) => dep.slug === slug);
  if (!departmentMeta) return notFound();

  // Strip the last 2 chars (_En or _Ar)
  const newSlug = slug.slice(0, -2);

  const departmentData: DepartmentContent = await import(
    `@/locales/${lang}/departments/${newSlug}${isArabic ? 'Ar' : 'En'}.json`
  ).then((mod) => mod.default);

  return (
    <section
      dir={isArabic ? 'rtl' : 'ltr'}
      className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-1000"
    >
      <FuturisticHeading rtl={isArabic}>{departmentMeta.name}</FuturisticHeading>

      <div className="mt-10 xxxs:min-w-[100%]">
        <ParagraphStickyImage
          paragraphs={departmentData.P1}
          imageSrc={departmentData.Director_Image}
          title={departmentData.P1_Title}
          rtl={isArabic}
        />
      </div>

      <div className="hidden 2xl:block">
        <SpiralGalaxyList isRTL={isArabic} items={departmentData.Department_Vision} />
      </div>

      <ConstellationMobileList isRTL={isArabic} items={departmentData.Department_Vision} />

      <FuturisticHeading rtl={isArabic}>
        {isArabic ? 'مهمة القسم' : 'Department Mission'}
      </FuturisticHeading>

      {departmentData.P2 && (
        <div className="xxxs:min-w-[100%] mt-10">
          <FuturisticParagraphSection
            title={''}
            paragraphs={departmentData.P2}
            rtl={isArabic}
          />
        </div>
      )}

      <FlowingAchievementsList
        items={departmentData.Department_Mission_Outer}
        lang={isArabic ? 'ar' : 'en'}
        Tree={true}
        Circular_Design_CenterTitle={departmentData.Department_Mission_Inner_Central}
        Circular_Design_Items={departmentData.Department_Mission_Inner}
      />

      <FuturisticHeading rtl={isArabic}>
        {isArabic ? 'انجازات القسم' : "Department's Achievements"}
      </FuturisticHeading>

      <div>
        <TreeBranchHirarchyList items={departmentData.Department_Achieviements} />
      </div>

      <div className="space-y-10 py-6 xxxs:overflow-hidden xxs:overflow-visible">
        <ClientPDFSection
          title={isArabic ? 'ملف الأبحاث' : 'Researches File'}
          pdf={departmentData.Research_File_PDF_Path}
          isArabic={isArabic}
          animation="rotate-in-blur"
        />
      </div>

      <div className="space-y-10 py-6 xxxs:overflow-hidden xxs:overflow-visible">
        <ClientPDFSection
          title={isArabic ? 'ملف الموارد البشرية' : 'Human Resources File'}
          pdf={departmentData.HR_File_PDF_Path}
          isArabic={isArabic}
          animation="animate-bounceIn"
        />
      </div>
    </section>
  );
}

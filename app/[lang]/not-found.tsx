// // app/not-found.tsx (or app/[lang]/not-found.tsx if localized)

// export default function NotFound() {
//   return (
//     // <div className="h-screen w-full flex items-center justify-center text-center p-6">
//     //   <div>
//     //     <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
//     //     <p className="text-gray-700 text-lg">Sorry, the page you’re looking for doesn’t exist.</p>
//     //   </div>
//     // </div>

//         <div className="bg-black relative overflow-hidden min-w-[90rem] mx-auto">
//            <img src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9" alt="404_Image"  className="absolute h-full w-full object-cover"/>
// {/*            <div className="inset-0 bg-black opacity-25 absolute">
//            </div> */}
//            <div className="mx-auto z-10 flex  py-32 xl:pb-40 xl:pt-0">
//                <div className="w-full font-mono flex flex-col justify-center items-center z-10">
//                    <h1 className="font-extrabold text-5xl text-left text-white leading-tight mt-0 mr-[30%]">
//                      You are all alone here
//                  </h1>
//                    <p className="font-black text-8xl my-44 text-white animate-bossunce text-center">
//                        404
//                    </p>
//                </div>
//            </div>
//       </div>
//   );
// }









// // app/[lang]/not-found.tsx
// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// const NotFoundPage = () => {
//   return (
//     <div
//       className="relative flex h-screen w-full items-center justify-center text-center text-white"
//       style={{
//         backgroundImage:
//           "url('https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 200 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//         className="relative z-10 px-6"
//       >
//         <motion.h1
//           initial={{ scale: 0 }}
//           animate={{ scale: 2 }}
//           transition={{ duration: 2 }}
//           className="text-8xl md:text-9xl font-extrabold drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-green-500 to-lime-400"
//         >
//           404
//         </motion.h1>

//         <p className="mt-6 text-xl md:text-2xl font-light">
//           Oops! The page you are looking for has gone out to the fields 🌾
//         </p>
//         <p className="mt-2 text-sm md:text-base text-gray-300">
//           But don’t worry, we’ll help you get back on track.
//         </p>

//         {/* Buttons */}
//         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
//           <Link href="/en">
//             <button className="px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-600 transition shadow-lg text-black font-black">
//               Go Home
//             </button>
//           </Link>
//           <Link href="/en/departments">
//             <button className="px-6 py-3 rounded-2xl bg-white hover:bg-white/30 transition shadow-lg text-black font-black">
//               Explore Departments
//             </button>
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default NotFoundPage;







// app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NotFoundPage = () => {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  return (
    <div
      className="relative flex h-screen w-full items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="relative z-10 px-6"
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="text-8xl md:text-9xl font-extrabold drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-green-500 to-lime-400 xs:pb-52 xxs:pb-32 xxxs:pb-24"
        >
          {isArabic ? "٤٠٤" : "404"}
        </motion.h1>

        <p className={clsx(
          "mt-12 font-black",
          isArabic ? "text-2xl md:text-4xl" : "xxs:text-xl md:text-2xl xxxs:text-lg"
        )}>
          {isArabic
            ? "عذرًا! الصفحة التي تبحث عنها غير موجودة 🌾"
            : "Oops! The page you are looking for has gone out to the fields 🌾"}
        </p>
        <p className={clsx(
          "mt-2 text-gray-300",
          isArabic ? "text-lg md:text-2xl" : "text-lg md:text-2xl"
        )}>
          {isArabic
            ? "لكن لا تقلق، سنساعدك للعودة من جديد."
            : "But don’t worry, we’ll help you get back on track."}
        </p>

        {/* Buttons */}
        <div
          className={`mt-8 flex flex-col sm:flex-row gap-4 justify-center ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          <Link href={isArabic ? "/ar" : "/en"}>
            <button className={clsx(
              "px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-800 hover:text-white transition shadow-lg text-black font-black",
              isArabic ? "text-xl md:text-2xl" : ""
            )}>
              {isArabic ? "العودة للرئيسية" : "Go Home"}
            </button>
          </Link>
          <Link href={isArabic ? "/ar/departments" : "/en/departments"}>
            <button className={clsx(
              "px-6 py-3 rounded-2xl bg-white hover:bg-white/30 hover:text-white transition shadow-lg text-black font-black",
              isArabic ? "text-xl md:text-2xl" : ""
            )}>
              {isArabic ? "استكشف الأقسام" : "Explore Departments"}
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;

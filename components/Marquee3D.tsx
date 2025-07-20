// // 'use client';

// // import Image from 'next/image';
// // import { useEffect, useState } from 'react';

// // interface Marquee3DProps {
// //   images: string[]; // array of image URLs
// // }

// // const Marquee3D: React.FC<Marquee3DProps> = ({ images }) => {
// //   const [duplicatedImages, setDuplicatedImages] = useState<string[]>([]);

// //   useEffect(() => {
// //     // Duplicate images for seamless loop
// //     setDuplicatedImages([...images, ...images]);
// //   }, [images]);

// //   return (
// //     <div className="overflow-hidden relative w-full py-10 bg-black max-w-[85rem]">
// //       <div
// //         className="animate-marquee flex whitespace-nowrap will-change-transform"
// //         style={{ animationDuration: `${images.length * 2}s` }} // Dynamic speed
// //       >
// //         {duplicatedImages.map((src, idx) => (
// //           <div
// //             key={idx}
// //             className="mx-4 flex-shrink-0 group transform transition-transform duration-700 ease-in-out hover:scale-110 hover:rotate-y-6 perspective-1000"
// //             style={{ width: '150px', height: '150px' }}
// //           >
// //             <Image
// //               src={src}
// //               alt={`logo-${idx}`}
// //               width={150}
// //               height={150}
// //               className="rounded-xl shadow-lg group-hover:rotate-y-[25deg] transition-transform duration-500"
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Marquee3D;





// // 'use client';

// // import Image from 'next/image';
// // import { useEffect, useState } from 'react';
// // import '../styles/marquee.css'; // We'll add custom 3D rotation here

// // interface Marquee3DProps {
// //   images: string[];
// // }

// // const Marquee3D: React.FC<Marquee3DProps> = ({ images }) => {
// //   const [duplicatedImages, setDuplicatedImages] = useState<string[]>([]);

// //   useEffect(() => {
// //     setDuplicatedImages([...images, ...images]); // Duplicate for infinite loop
// //   }, [images]);

// //   return (
// //     <div className="relative overflow-hidden w-full bg-black py-10 max-w-[85rem]">
// //       <div className="marquee-track">
// //         {duplicatedImages.map((src, idx) => (
// //           <div key={idx} className="marquee-item">
// //             <Image
// //               src={src}
// //               alt={`logo-${idx}`}
// //               width={200}
// //               height={200}
// //               className="rounded-xl object-contain"
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
    
// //   );
// // };

// // export default Marquee3D;














// // 'use client';

// // import Image from 'next/image';
// // import { useEffect, useState } from 'react';
// // import '../styles/marquee.css'; // Make sure this file is created as shown below

// // interface Marquee3DProps {
// //   images: string[];
// // }

// // const Marquee3D: React.FC<Marquee3DProps> = ({ images }) => {
// //   const [duplicatedImages, setDuplicatedImages] = useState<string[]>([]);

// //   useEffect(() => {
// //     setDuplicatedImages([...images, ...images   ]); // duplicate for continuous scrolling
// //   }, [images]);

// //   return (
// //     <div className="relative overflow-hidden bg-white py-10 max-w-[85rem] mx-auto">
// //       {/* Inner shadow left */}
// //       <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
// //       {/* Inner shadow right */}
// //       <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

// //       {/* Marquee track */}
// //       <div className="marquee-track">
// //         {duplicatedImages.map((src, idx) => {
// //     //   const style: React.CSSProperties = {
// //     //     ['--i' as any]: idx.toString(),
// //     //   };

// //   return (
// //     <div key={idx} className="marquee-item" style={{ ['--i' as keyof React.CSSProperties]: idx as unknown as string }}
// // >
// //       <Image
// //         src={src}
// //         alt={`logo-${idx}`}
// //         width={200}
// //         height={200}
// //         className="rounded-xl object-contain"
// //       />
// //     </div>
// //   );
// // })}

// //       </div>
// //     </div>
// //   );
// // };

// // export default Marquee3D;



// 'use client';

// import Image from 'next/image';
// import '../styles/marquee.css';
// import { usePathname } from 'next/navigation';

// interface Marquee3DProps {
//   images: string[],
// //   isRTL : boolean
// }

// const Marquee3D: React.FC<Marquee3DProps> = ({ images }) => {
//   const duplicatedImages = [...images, ...images];
// //   const direction = isRTL ? "true" : "false";
//   const pathname = usePathname();
//   const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';

//   return (
//     <div className="relative overflow-hidden bg-white py-10 max-w-[85rem] mx-auto">
//       {/* Left & Right Shadows */}
//       <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
//       <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

//       {/* Marquee */}
//       <div className={`marquee-track ${currentLang === 'ar' ? 'rtl-marquee' : 'ltr-marquee'}`}>
//         {duplicatedImages.map((src, idx) => (
//           <div key={idx} className="marquee-item" style={{ ['--i' as keyof React.CSSProperties]: idx as unknown as string }}>
//             <Image
//               src={src}
//               alt={`logo-${idx}`}
//               width={160}
//               height={160}
//               className="rounded-xl object-contain w-[160px] h-[160px]"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marquee3D;


// 'use client';

// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import '../styles/marquee.css'; // Ensure this file exists and is correctly configured

// interface Marquee3DProps {
//   images: string[];
// }

// const Marquee3D: React.FC<Marquee3DProps> = ({ images }) => {
//   const [duplicatedImages, setDuplicatedImages] = useState<string[]>([]);
//   const [isRTL, setIsRTL] = useState<boolean>(false);

//   useEffect(() => {
//     setDuplicatedImages([...images, ...images]); // duplicate for loop effect

//     if (typeof window !== 'undefined') {
//       const dir = document.documentElement.getAttribute('dir');
//       setIsRTL(dir === 'rtl');
//     }
//   }, [images]);

//   return (
//     <div className="relative overflow-hidden py-10 bg-white max-w-[85rem] rounded-3xl shadow-2xl border border-cyan-700/40 xl:min-width xxxs:min-width-sm mx-auto mt-10">
//       {/* Side shadows */}
//       <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-green-300 to-transparent z-10 pointer-events-none" />
//       <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-green-300 to-transparent z-10 pointer-events-none" />

//       {/* Marquee container */}
//       <div className={`marquee-track ${isRTL ? 'rtl-marquee' : 'ltr-marquee'}`}>
//         {duplicatedImages.map((src, index) => (
//           <div key={index}  className="marquee-item" >
//             <Image
//               src={src}
//               alt={`marquee-img-${index}`}
//               width={300}
//               height={300}
//               className="object-contain w-[300px] h-[300px] rounded-xl transition-transform duration-300 hover:scale-110 hover:rotate-3"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marquee3D;


'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import '../styles/marquee.css';

interface Marquee3DProps {
  images: string[];
}

const Marquee3D: React.FC<Marquee3DProps> = ({ images }) => {
  const [duplicatedImages, setDuplicatedImages] = useState<string[]>([]);
  const [isRTL, setIsRTL] = useState<boolean>(false);
  const [animate, setAnimate] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDuplicatedImages([...images, ...images]);

    if (typeof window !== 'undefined') {
      const dir = document.documentElement.getAttribute('dir');
      setIsRTL(dir === 'rtl');
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    return () => {
      if (marqueeRef.current) {
        observer.unobserve(marqueeRef.current);
      }
    };
  }, [images]);

  return (
    <div
      ref={marqueeRef}
      className="relative overflow-hidden py-10 bg-white w-full rounded-3xl shadow-2xl border border-cyan-700/40 xl:min-width xxxs:min-width-sm mx-auto mt-10"
    >
      <div className="absolute top-0 left-0 xl:w-24 lg:w-20 sm:w-10 xs:w-8 xxxs:w-4 h-full bg-gradient-to-r from-green-300 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 xl:w-24 lg:w-20 sm:w-10 xs:w-8 xxxs:w-4 h-full bg-gradient-to-l from-green-300 to-transparent z-10 pointer-events-none" />

      <div className={`marquee-track ${isRTL ? 'rtl-marquee' : 'ltr-marquee'} ${animate ? 'animate-scroll' : ''}`}>
        {duplicatedImages.map((src, index) => (
          <div key={index} className={`marquee-item ${animate ? 'fade-in' : ''}`}>
            <Image
              src={src}
              alt={`marquee-img-${index}`}
              width={300}
              height={300}
              className="object-contain lg:w-[300px] lg:h-[300px] xxxs:w-[200px] xxxs:h-[200px] rounded-xl transition-transform duration-300 hover:scale-110 hover:rotate-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee3D;

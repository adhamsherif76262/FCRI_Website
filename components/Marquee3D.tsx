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
      className="relative overflow-hidden py-10 bg-white w-full rounded-3xl shadow-2xl border border-cyan-700/40 xl:min-width mx-auto mt-10"
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

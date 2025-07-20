// 'use client'
// import { useEffect, useState } from 'react'
// import { useInView } from 'react-intersection-observer'
// import { usePathname } from 'next/navigation'
// import { motion } from 'framer-motion'
// import clsx from 'clsx'

// const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']

// type CounterData = {
//   // en: { title: string; value: number }
//   // ar: { title: string; value: number } // Arabic numbers stored as strings
//   title: string,
//   value:number
// }

// function toArabicNumber(num: number): string {
//   return num.toString().split('').map(d => arabicDigits[parseInt(d)] ?? d).join('')
// }

// function SingleCounter({
//   title,
//   value,
//   isArabic,
//   direction,
//   startCount,
// }: {
//   title: string
//   value: number
//   isArabic: boolean
//   direction: 'left' | 'right'
//   startCount: boolean
// }) {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     if (!startCount) return

//     let start = 0
//     const duration = 2000 + value * 10 // duration scales with number
//     const stepTime = Math.max(0, duration / value)

//     const counter = setInterval(() => {
//       const L = value.toString().length
//       let stepValue = 1
//       if(L>2 && L<=4){stepValue = 10; if(value>5000){stepValue=25}}
//       else if(L>4){stepValue = 100}
//       start += stepValue
//       setCount(start)
//       if (start >= value) clearInterval(counter)
//     }, stepTime/10)

//     return () => clearInterval(counter)
//   }, [startCount, value])

//   const translatedNumber = isArabic ? toArabicNumber(count) : count.toString()

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
//       animate={{ opacity: startCount ? 1 : 0, x: 0 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       className="flex flex-col items-center justify-center  md:px-3 xxxs:px-1 py-4"
//     >
//       <div className={clsx(
//         "font-black text-cyan-400 animate-glow",
//         isArabic === true ? "lg:text-6xl md:text-4xl sm:text-3xl xxxs:text-2xl" : "lg:text-5xl md:text-3xl sm:text-2xl xxxs:text-xl"
//       )}>
//         {translatedNumber}
//       </div>
//       <div className="mt-2 text-center text-white text-sm md:text-lg font-bold">
//         {title}
//       </div>
//     </motion.div>
//   )
// }

// export default function CounterSection() {
//   const pathname = usePathname()
//   const lang = pathname.includes('/ar') ? 'ar' : 'en'
//   const isArabic = lang === 'ar'

// const counters: CounterData[] = [
//   {
//       title: isArabic ? "اخر موسم حقل ارشادى قمح" : "Research Papers Research Papers",
//       value:21000
//     // en: { title: 'Research Papers Research Papers', value: 21000 },
//     // ar: { title: 'اخر موسم حقل ارشادى قمح', value: 21000 },
//   },
//   {
//       title: isArabic ? "مشروعات بحثية" : "Projects",
//       value:8500
//     // en: { title: 'Projects', value: 8500 },
//     // ar: { title: 'مشروعات بحثية', value: 8500 },
//   },
//   {
//       title: isArabic ? "باحثين" : "Researchers",
//       value:120
//     // en: { title: 'Researchers', value: 120 },
//     // ar: { title: 'باحثين', value: 1200 },
//   },
//   {
//       title: isArabic ? "شراكات علمية" : "Collaborations",
//       value:600
//     // en: { title: 'Collaborations', value: 600 },
//     // ar: { title: 'شراكات علمية', value: 600 },
//   },
//   {
//       title: isArabic ? "براءات اختراع" : "Patents",
//       value:12
//     // en: { title: 'Patents', value: 12 },
//     // ar: { title: 'براءات اختراع', value: 12 },
//   },
// ]
//   const { ref, inView } = useInView({
//     threshold: 0.3,
//     triggerOnce: false,
//   })

//   const half = Math.ceil(counters.length / 2)
//   const leftSide = counters.slice(0, half)
//   const rightSide = counters.slice(half)
  
//   return (
//     <section
//       key={lang} // important for re-triggering on lang switch
//       ref={ref}
//       className="mt-10 bg_Beige rounded-3xl shadow-2xl border border-cyan-700/40 w-full xl:min-width py-4 px-0 flex flex-wrap justify-center gap-0 md:gap-0"
//     >
//       {[...leftSide.map((counter, i) => (
//         <SingleCounter
//           key={i}
//           title={counter.title}
//           value={counter.value}

//           isArabic={isArabic}
//           direction="left"
//           startCount={inView}
//         />
//       )),
//       ...rightSide.map((counter, i) => (
//         <SingleCounter
//           key={i + half}
//           title={counter.title}
//          value={counter.value}
//           isArabic={isArabic}
//           direction="right"
//           startCount={inView}
//         />
//       ))]}
//     </section>
//   )
// }







'use client'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']

function toArabicNumber(num: number): string {
  return num.toString().split('').map(d => arabicDigits[parseInt(d)] ?? d).join('')
}

type SingleCounterProps = {
  title: string
  value: number
  isArabic: boolean
  direction: 'left' | 'right'
  startCount: boolean
}

function SingleCounter({ title, value, isArabic, direction, startCount }: SingleCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCount) return

    let start = 0
    const duration = 2000 + value * 10
    const stepTime = Math.max(0, duration / value)

    const counter = setInterval(() => {
      const L = value.toString().length
      let stepValue = 1
      if (L > 2 && L <= 4) {
        stepValue = 10
        if (value > 5000) stepValue = 25
      } else if (L > 4) {
        stepValue = 100
      }
      start += stepValue
      setCount(Math.min(start, value))
      if (start >= value) clearInterval(counter)
    }, stepTime / 10)

    return () => clearInterval(counter)
  }, [startCount, value])

  const translatedNumber = isArabic ? toArabicNumber(count) : count.toString()

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
      animate={{ opacity: startCount ? 1 : 0, x: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center md:px-3 xxxs:px-1 py-4 overflow-x-hidden"
    >
      <div className={clsx(
        "font-black text-cyan-400 animate-glow",
        isArabic ? "lg:text-6xl md:text-4xl sm:text-3xl xxxs:text-2xl" : "lg:text-5xl md:text-3xl sm:text-2xl xxxs:text-xl"
      )}>
        {translatedNumber}
      </div>
      <div className="mt-2 text-center text-blue-900 text-sm md:text-lg font-black">
        {title}
      </div>
    </motion.div>
  )
}

export type CounterData = {
  title_en: string
  title_ar: string
  value: number
}

export default function CounterSection({ counters }: { counters: CounterData[] }) {
  const pathname = usePathname()
  const lang = pathname.includes('/ar') ? 'ar' : 'en'
  const isArabic = lang === 'ar'

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  // Localized counters
  const localizedCounters = counters.map(counter => ({
    title: isArabic ? counter.title_ar : counter.title_en,
    value: counter.value,
  }))

  const half = Math.ceil(localizedCounters.length / 2)
  const leftSide = localizedCounters.slice(0, half)
  const rightSide = localizedCounters.slice(half)

  return (
    <section
      key={lang}
      ref={ref}
      className="mt-10 bg_Beige rounded-3xl shadow-2xl border border-cyan-700/40 w-full xl:min-width mx-auto py-4 px-0 flex flex-wrap justify-center gap-0 md:gap-0"
    >
      {[...leftSide.map((counter, i) => (
        <SingleCounter
          key={i}
          title={counter.title}
          value={counter.value}
          isArabic={isArabic}
          direction={lang === "ar" ? "right" : "left"}
          startCount={inView}
        />
      )),
      ...rightSide.map((counter, i) => (
        <SingleCounter
          key={i + half}
          title={counter.title}
          value={counter.value}
          isArabic={isArabic}
          direction={lang === "ar" ? "left" : "right"}
          startCount={inView}
        />
      ))]}
    </section>
  )
}

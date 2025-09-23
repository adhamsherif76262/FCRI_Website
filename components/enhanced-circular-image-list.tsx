/* eslint-disable @next/next/no-img-element */
"use client"

import type React from "react"
import { useState, useEffect, useRef, ReactNode } from "react"
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
//   RotateCcw,
  Wheat,
  Sprout,
  TreePine,
  Apple,
  Flower2,
  X,
} from "lucide-react"

interface ListItem {
  id: string
  title: string
  titleEn: string
  small_title: string
  small_titleEn: string
  subtitle?: string
  subtitleEn?: string
  items: string[]
  itemsEn: string[]
  images: string[]
  color: string
//   icon: React.ReactNode
  icon: string
}

interface StandaloneEnhancedCircularImageListProps {
  data?: ListItem[]
  language?: "ar" | "en"
  className?: string
}

interface ModalCarouselState {
  images: string[]
  currentIndex: number
  itemTitle: string
}

const Button = ({
  children,
  onClick,
  variant = "default",
  size = "default",
  className = "",
  ...props
}: {
  children: React.ReactNode
  onClick?: () => void
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "default" | "sm" | "lg"
  className?: string
  [key: string]: unknown
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  }

  const sizeClasses = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-4 rounded-md",
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

const Card = ({
  children,
  className = "",
  ...props
}: { children: React.ReactNode; className?: string; [key: string]: unknown }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardHeader = ({
  children,
  className = "",
  ...props
}: { children: React.ReactNode; className?: string; [key: string]: unknown }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({
  children,
  className = "",
  ...props
}: { children: React.ReactNode; className?: string; [key: string]: unknown }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
)

const CardContent = ({
  children,
  className = "",
  ...props
}: { children: React.ReactNode; className?: string; [key: string]: unknown }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

const sampleData: ListItem[] = [
//   {
//     id: "national-campaigns",
//     title: "الحملات القومية: المحاصيل الاستراتيجية",
//     titleEn: "National Campaigns: Strategic Crops",
//     subtitle: "القمح – الذرة – الأرز تشمل:",
//     subtitleEn: "Wheat - Corn - Rice includes:",
//     items: [
//       "زراعة حقول نموذجية متطورة",
//       "ندوات إرشادية تفاعلية",
//       "أيام حقل تطبيقية",
//       "أيام حصاد احتفالية",
//       "حفلات تكريم للمزارعين المتميزين",
//       "برامج التدريب المتخصصة",
//     ],
//     itemsEn: [
//       "Advanced model field cultivation",
//       "Interactive extension seminars",
//       "Practical field days",
//       "Celebratory harvest days",
//       "Distinguished farmer recognition ceremonies",
//       "Specialized training programs",
//     ],
//     images: [
//       "/wheat-field-golden-harvest.jpg",
//       "/corn-plantation-rows.jpg",
//       "/rice-paddy-fields.jpg",
//       "/farmers-working.png",
//       "/harvest-celebration-ceremony.jpg",
//       "/plant-breeding-laboratory.jpg",
//       "/wheat-field-golden-harvest.jpg",
//       "/corn-plantation-rows.jpg",
//       "/rice-paddy-fields.jpg",
//       "/farmers-working.png",
//       "/harvest-celebration-ceremony.jpg",
//       "/plant-breeding-laboratory.jpg",
//     ],
//     color: "from-amber-400 via-yellow-500 to-orange-500",
//     icon: <Wheat className="w-7 h-7" />,
//   },
//   {
//     id: "research-programs",
//     title: "برامج البحوث الزراعية المتقدمة",
//     titleEn: "Advanced Agricultural Research Programs",
//     subtitle: "تطوير وابتكار تتضمن:",
//     subtitleEn: "Development and innovation contains:",
//     items: [
//       "تطوير أصناف محسنة مقاومة للجفاف",
//       "تقنيات الري الذكية والمستدامة",
//       "مكافحة الآفات المتكاملة بيولوجياً",
//       "تحسين خصوبة التربة طبيعياً",
//       "الزراعة العضوية المعتمدة",
//       "تقنيات الاستشعار عن بعد",
//     ],
//     itemsEn: [
//       "Drought-resistant improved variety development",
//       "Smart and sustainable irrigation techniques",
//       "Integrated biological pest management",
//       "Natural soil fertility improvement",
//       "Certified organic farming",
//       "Remote sensing technologies",
//     ],
//     images: [
//       "/plant-breeding-laboratory.jpg",
//       "/drip-irrigation.png",
//       "/pest-control-research.jpg",
//       "/soil-testing-laboratory.jpg",
//       "/organic-farming-methods.jpg",
//       "/smart-farming-technology.jpg",
//     ],
//     color: "from-emerald-400 via-green-500 to-teal-500",
//     icon: <Sprout className="w-7 h-7" />,
//   },
//   {
//     id: "technology-innovation",
//     title: "الابتكار التكنولوجي في الزراعة",
//     titleEn: "Technological Innovation in Agriculture",
//     subtitle: "تقنيات المستقبل تشمل:",
//     subtitleEn: "Future technologies include:",
//     items: [
//       "الزراعة الذكية بالذكاء الاصطناعي",
//       "استخدام الطائرات بدون طيار للمراقبة",
//       "أنظمة الاستشعار عن بعد المتطورة",
//       "تطبيقات الذكاء الاصطناعي في التشخيص",
//       "البيوت المحمية المتطورة ذكياً",
//       "تقنيات البلوك تشين في التتبع",
//     ],
//     itemsEn: [
//       "AI-powered smart farming",
//       "Drone utilization for monitoring",
//       "Advanced remote sensing systems",
//       "AI applications in diagnostics",
//       "Smart advanced greenhouses",
//       "Blockchain technologies in tracking",
//     ],
//     images: [
//       "/smart-farming-technology.jpg",
//       "/agricultural-drone-monitoring.jpg",
//       "/remote-sensing-agriculture.jpg",
//       "/ai-in-agriculture.jpg",
//       "/modern-greenhouse-technology.jpg",
//       "/wheat-field-golden-harvest.jpg",
//     ],
//     color: "from-blue-400 via-cyan-500 to-indigo-500",
//     icon: <TreePine className="w-7 h-7" />,
//   },
//   {
//     id: "sustainable-practices",
//     title: "الممارسات الزراعية المستدامة",
//     titleEn: "Sustainable Agricultural Practices",
//     subtitle: "حماية البيئة تتضمن:",
//     subtitleEn: "Environmental protection contains:",
//     items: [
//       "الحفاظ على الموارد المائية الثمينة",
//       "إدارة النفايات الزراعية بكفاءة",
//       "استخدام الطاقة المتجددة النظيفة",
//       "الحفاظ على التنوع البيولوجي",
//       "الزراعة المحافظة على البيئة",
//       "تقليل البصمة الكربونية",
//     ],
//     itemsEn: [
//       "Precious water resource conservation",
//       "Efficient agricultural waste management",
//       "Clean renewable energy utilization",
//       "Biodiversity preservation",
//       "Environmentally friendly farming",
//       "Carbon footprint reduction",
//     ],
//     images: [
//       "/water-conservation-agriculture.jpg",
//       "/agricultural-waste-recycling.jpg",
//       "/organic-farming-methods.jpg",
//       "/drip-irrigation.png",
//       "/soil-testing-laboratory.jpg",
//       "/rice-paddy-fields.jpg",
//     ],
//     color: "from-teal-400 via-emerald-500 to-green-500",
//     icon: <Apple className="w-7 h-7" />,
//   },
//   {
//     id: "farmer-education",
//     title: "برامج تعليم وتدريب المزارعين",
//     titleEn: "Farmer Education and Training Programs",
//     subtitle: "التطوير المهني يشمل:",
//     subtitleEn: "Professional development includes:",
//     items: [
//       "ورش العمل التطبيقية المتخصصة",
//       "التدريب على التقنيات الحديثة",
//       "برامج الإرشاد الزراعي المتقدمة",
//       "المدارس الحقلية التفاعلية",
//       "شهادات التخصص الزراعي المعتمدة",
//       "برامج التبادل الدولي",
//     ],
//     itemsEn: [
//       "Specialized practical workshops",
//       "Modern technology training",
//       "Advanced agricultural extension programs",
//       "Interactive field schools",
//       "Certified agricultural specialization certificates",
//       "International exchange programs",
//     ],
//     images: [
//       "/farmers-working.png",
//       "/harvest-celebration-ceremony.jpg",
//       "/plant-breeding-laboratory.jpg",
//       "/smart-farming-technology.jpg",
//       "/corn-plantation-rows.jpg",
//       "/agricultural-drone-monitoring.jpg",
//     ],
//     color: "from-purple-400 via-pink-500 to-rose-500",
//     icon: <Flower2 className="w-7 h-7" />,
//   },
]

// utils/iconMapper.tsx

const iconMap: Record<string, React.ElementType> = {
  Wheat,
  Sprout,
  TreePine,
  Apple,
  Flower2,
};

export function getIcon(iconName: string, className = "w-7 h-7"):ReactNode {
  const Icon = iconMap[iconName || ""];
  if (!Icon) return null;
  return <Icon className={className} />;
}

export default function StandaloneEnhancedCircularImageList({
  data = sampleData,
  language = "ar",
  className = "",
}: StandaloneEnhancedCircularImageListProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [closingItems, setClosingItems] = useState<Set<string>>(new Set())
  const [modalCarousel, setModalCarousel] = useState<ModalCarouselState | null>(null)
  const [carouselPaused, setCarouselPaused] = useState<{ [key: string]: boolean }>({})
  const [mounted, setMounted] = useState(false)
  const [currentTransition, setCurrentTransition] = useState("slide")
  const carouselRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const modalCarouselRef = useRef<HTMLDivElement | null>(null)

  const transitionAnimations = ["slide", "fade", "zoom", "flip", "rotate", "bounce"]

  const getRandomTransition = () => {
    const randomIndex = Math.floor(Math.random() * transitionAnimations.length)
    return transitionAnimations[randomIndex]
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleImageClick = (image: string, itemTitle: string, imageIndex: number, allImages: string[]) => {
    setCurrentTransition(getRandomTransition())

    setModalCarousel({
      images: allImages,
      currentIndex: imageIndex,
      itemTitle,
    })

    setTimeout(() => {
      if (modalCarouselRef.current) {
        modalCarouselRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        })
      }
    }, 100)
  }

  const navigateCarousel = (direction: "prev" | "next") => {
    if (!modalCarousel) return

    setCurrentTransition(getRandomTransition())

    const newIndex =
      direction === "next"
        ? (modalCarousel.currentIndex + 1) % modalCarousel.images.length
        : (modalCarousel.currentIndex - 1 + modalCarousel.images.length) % modalCarousel.images.length

    setModalCarousel({
      ...modalCarousel,
      currentIndex: newIndex,
    })
  }

  const handleModalClose = () => {
    setModalCarousel(null)
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!modalCarousel) return

      switch (e.key) {
        case "ArrowLeft":
          navigateCarousel("prev")
          break
        case "ArrowRight":
          navigateCarousel("next")
          break
        case "Escape":
          handleModalClose()
          break
      }
    }

    if (modalCarousel) {
      document.addEventListener("keydown", handleKeyPress)
      return () => document.removeEventListener("keydown", handleKeyPress)
    }
  }, [modalCarousel])

  const toggleItem = (id: string) => {
    if (expandedItems.has(id)) {
      setClosingItems((prev) => new Set(prev).add(id))
      setTimeout(() => {
        setExpandedItems((prev) => {
          const newSet = new Set(prev)
          newSet.delete(id)
          return newSet
        })
        setClosingItems((prev) => {
          const newSet = new Set(prev)
          newSet.delete(id)
          return newSet
        })
      }, 400)
    } else {
      setExpandedItems((prev) => new Set(prev).add(id))
    }
  }

  const toggleCarousel = (id: string) => {
    setCarouselPaused((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

//   const resetCarousel = (id: string) => {
//     const carousel = carouselRefs.current[id]
//     if (carousel) {
//       carousel.style.animation = "none"
//       if (carousel.offsetHeight !== undefined) {
//         carousel.offsetHeight // Trigger reflow
//       }
//       carousel.style.animation = ""
//     }
//   }

  const isRTL = language === "ar"

  if (!mounted) {
    return <div className="animate-pulse bg-gray-200 rounded-lg h-96" />
  }

  return (
    <div className={`w-full max-w-7xl mx-auto p-0 space-y-8 ${className}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="text-center mb-12">
        <h1 className={`font-bold text-gray-900 mb-4 animate-title-glow ${isRTL ? "xxxs:text-3xl xxs:text-4xl" : "xxxs:text-2xl xxs:text-3xl sm:text-4xl"}`}>
          {isRTL ? "اهم مهام النشاط الارشادى للمعهد" : "The most important tasks of the institute's extension activities"}
        </h1>
        {/* <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${isRTL ? "font-arabic" : ""}`}>
          {isRTL
            ? "استكشف المحتوى الزراعي المتطور من خلال معارض دائرية تفاعلية مع صور عالية الجودة وتجربة بصرية مميزة"
            : "Explore advanced agricultural content through interactive circular galleries with high-quality images and distinctive visual experience"}
        </p> */}
      </div>

      <div className="space-y-8">
        {data.map((item, index) => (
          <Card
            key={item.id}
            className={`
              overflow-hidden border-2 border-gray-200 bg-white/80 backdrop-blur-md
              hover:border-blue-300 transition-all duration-500 hover:shadow-2xl
              animate-elegant-slide-in
            `}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <CardHeader className="pb-6 bg-gradient-to-r from-gray-50 to-transparent">
              <CardTitle
                className={`
                  flex xxxs:flex-col xs:flex-row items-center justify-center gap-4 cursor-pointer group transition-all duration-500
                  ${isRTL ? "flex-row-reverse xxxs:text-center xs:text-right" : "flex-row xxxs:text-center xs:text-left"}
                  hover:scale-[1.02] transform-gpu 
                `}
                onClick={() => toggleItem(item.id)}
              >
                <div
                  className={`
                    p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl
                    group-hover:scale-110 group-hover:rotate-12 transition-all duration-500
                    relative overflow-hidden
                  `}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {getIcon(item.icon)}
                </div>

                <div className="flex-1 min-w-0">
                  <h2
                    className={`
                      text-2xl font-bold text-gray-900 group-hover:text-blue-600 
                      transition-all duration-500 ${isRTL ? "font-arabic" : ""}
                      group-hover:tracking-wide
                    `}
                  >
                    {isRTL ? item.title : item.titleEn}
                  </h2>
                  {(item.subtitle || item.subtitleEn) && (
                    <p className={`text-base text-gray-600 mt-2 ${isRTL ? "font-arabic" : ""}`}>
                      {isRTL ? item.subtitle : item.subtitleEn}
                    </p>
                  )}
                </div>

                <Button
                  variant="ghost"
                  size="lg"
                  className="shrink-0 group-hover:bg-blue-50 transition-all duration-500 rounded-xl"
                >
                  {expandedItems.has(item.id) ? (
                    <ChevronDown className="w-6 h-6 transition-transform duration-500 group-hover:scale-125" />
                  ) : (
                    <ChevronRight
                      className={`w-6 h-6 transition-transform duration-500 group-hover:scale-125 ${isRTL ? "rotate-180" : ""}`}
                    />
                  )}
                </Button>
                
              </CardTitle>
            </CardHeader>

            {(expandedItems.has(item.id) || closingItems.has(item.id)) && (
              <CardContent
                className={`
                  pt-0 overflow-hidden
                  ${closingItems.has(item.id) ? "animate-sophisticated-collapse" : "animate-sophisticated-expand"}
                `}
              >
                <div className="mb-8">
                  <h3
                    className={`text-lg font-semibold text-gray-900 mb-6 ${isRTL ? "font-arabic text-right" : "text-left"}`}
                  >
                    {isRTL ? "المحتويات الرئيسية:" : "Main Contents:"}
                  </h3>
                  <div dir={isRTL ? "rtl" : "ltr"} className={`grid gap-4 ${isRTL ? "text-right" : "text-left"}`}>
                    {(isRTL ? item.items : item.itemsEn).map((listItem, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`
                          flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 hover:cursor-pointer
                          transition-all duration-300 hover:scale transform-gpu
                          animate-bullet-cascade border border-gray-100 hover:border-blue-200
                        `}
                        style={{ animationDelay: `${itemIndex * 0.1}s` }}
                      >
                        <div
                          className={`
                          w-3 h-3 rounded-full bg-gradient-to-br ${item.color} mt-2 shrink-0
                          shadow-lg animate-image-float
                        `}
                          style={{ animationDelay: `${itemIndex * 0.2}s` }}
                        />
                        <span className={`${isRTL ? "font-arabic" : ""} leading-relaxed text-gray-800 font-medium`}>
                          {listItem}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className={`text-lg font-semibold text-gray-900 ${isRTL ? "font-arabic" : ""}`}>
                      {isRTL ? "معرض الصور التفاعلي:" : "Interactive Image Gallery:"}
                    </h3>
                    <div className="hidden sm:flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCarousel(item.id)}
                        className="rounded-full"
                      >
                        {carouselPaused[item.id] ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                      </Button>
                      {/* <Button
                        variant="outline"
                        size="sm"
                        onClick={() => resetCarousel(item.id)}
                        className="rounded-full"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </Button> */}
                    </div>
                  </div>

                  <div className="hidden sm:block">
                    <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-transparent rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none max-w-[100px] mx-auto">
                        <div className="text-center p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200 shadow-xl">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-3 inline-block`}
                          >
                            {getIcon(item.icon)}
                          </div>
                          <h4 className={`text-lg font-bold text-gray-900 mb-2 ${isRTL ? "font-arabic" : ""}`}>
                            {isRTL ? item.small_title.split(":")[0] : item.small_titleEn.split(":")[0]}
                          </h4>
                          <p className={`text-sm text-gray-600 ${isRTL ? "font-arabic" : ""}`}>
                            {isRTL ? `${item.images.length} عنصر` : `${item.images.length} items`}
                          </p>
                        </div>
                      </div>

                      <div
                        ref={(el) => {(carouselRefs.current[item.id] = el)}}
                        className={`
                          absolute inset-0 animate-circular-orbit
                          ${carouselPaused[item.id] ? "animation-play-state-paused" : ""}
                        `}
                        style={{
                          animationDuration: "60s",
                          animationPlayState: carouselPaused[item.id] ? "paused" : "running",
                        }}
                      >
                        {item.images.map((image, imageIndex) => {
                          const angle = (imageIndex / item.images.length) * 360
                          const radius = 180 // Distance from center
                          const x = Math.cos((angle * Math.PI) / 180) * radius
                          const y = Math.sin((angle * Math.PI) / 180) * radius

                          return (
                            <div
                              key={imageIndex}
                              className="absolute w-20 h-20 md:w-24 md:h-24 animate-circular-counter-orbit cursor-pointer z-20"
                              style={{
                                left: `calc(50% + ${x}px - 40px)`,
                                top: `calc(50% + ${y}px - 40px)`,
                                animationDuration: "60s",
                                animationPlayState: carouselPaused[item.id] ? "paused" : "running",
                              }}
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                handleImageClick(image, item.title, imageIndex, item.images)
                              }}
                            >
                              <div className="relative w-full h-full group pointer-events-auto">
                                <img
                                  src={image || "/placeholder.svg"}
                                  alt={`${isRTL ? item.title : item.titleEn} - ${imageIndex + 1}`}
                                  className="w-full h-full object-cover rounded-xl shadow-lg border-2 border-white/50 group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110 animate-image-float pointer-events-none"
                                  style={{ animationDelay: `${imageIndex * 0.5}s` }}
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="block sm:hidden">
                    <div className="grid grid-cols-1 gap-4 p-4 bg-gradient-to-br from-gray-50 to-transparent rounded-2xl">
                      {item.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="relative cursor-pointer group animate-elegant-slide-in max-[400px]:aspect-auto aspect-video"
                          style={{ animationDelay: `${imageIndex * 0.1}s` }}
                          onClick={(e) => {
                            e.stopPropagation()
                            handleImageClick(image, item.title, imageIndex, item.images)
                          }}
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${isRTL ? item.title : item.titleEn} - ${imageIndex + 1}`}
                            className="w-full max-[400px]:h-auto h-full object-cover rounded-xl shadow-lg border-2 border-white/50 group-hover:border-blue-400 transition-all duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {modalCarousel && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleModalClose}
        >
          <div
            ref={modalCarouselRef}
            className={`relative max-w-6xl max-h-[90vh] w-full animate-carousel-appear-${currentTransition}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`flex justify-between items-center mb-4 ${isRTL ? "flex-row-reverse" : "flex-row"}`}>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigateCarousel("prev")}
                className="rounded-full bg-white/90 hover:bg-white text-black shadow-xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="text-center">
                <h3 className={`text-xl font-bold text-white mb-1 ${isRTL ? "font-arabic" : ""}`}>
                  {modalCarousel.itemTitle}
                </h3>
                <p className="text-white/70">
                  {modalCarousel.currentIndex + 1} / {modalCarousel.images.length}
                </p>
              </div>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigateCarousel("next")}
                className="rounded-full bg-white/90 hover:bg-white text-black shadow-xl"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            <div className="relative">
              <img
                src={modalCarousel.images[modalCarousel.currentIndex] || "/placeholder.svg"}
                alt={`${modalCarousel.itemTitle} - ${modalCarousel.currentIndex + 1}`}
                className={`w-full h-full object-contain rounded-2xl shadow-2xl max-h-[70vh] transition-all duration-500 animate-image-transition-${currentTransition}`}
              />

              <Button
                variant="secondary"
                size="sm"
                onClick={handleModalClose}
                className="absolute top-4 right-4 rounded-full bg-white/90 hover:bg-white text-black"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex justify-center gap-2 mt-4 flex-wrap max-w-full overflow-x-auto overflow-y-hidden">
              {modalCarousel.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTransition(getRandomTransition())
                    setModalCarousel({ ...modalCarousel, currentIndex: index })
                  }}
                  className={`
                    w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300
                    ${
                      index === modalCarousel.currentIndex
                        ? "border-white shadow-lg scale-110"
                        : "border-white/30 hover:border-white/60"
                    }
                  `}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

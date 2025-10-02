"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, X, Sprout, TreePine, Leaf, Wheat, Apple, Flower2 } from "lucide-react"
import clsx from "clsx"

interface PlantItem {
  id: string
  title: string
  description: string
  details: string[]
  type: string
  priority: string
}

const defaultPlantData: PlantItem[] = [
  {
    id: "1",
    title: "الرؤية الأساسية",
    description: "أن نكون روادًا في البحث والتطوير في مجالات البيولوجيا الخلوية والجزيئية النباتية",
    details: [
      "تحقيق زراعة مستدامة وأمن غذائي",
      "تطوير محاصيل متكيفة مع التغيرات المناخية",
      "الابتكار العلمي والتقنيات الحيوية المتقدمة",
      "أن يصبح القسم مرجعية علمية رائدة",
    ],
    type: "leaf",
    priority: "high",
  },
  {
    id: "2",
    title: "التميز البحثي",
    description: "تطوير تقنيات متقدمة في زراعة الأنسجة النباتية لتحسين إنتاج المحاصيل",
    details: [
      "دراسة الآليات الخلوية والجزيئية لتحمل الإجهادات البيئية",
      "مقاومة الملوحة والجفاف وارتفاع الحرارة",
      "تحسين إنتاج المحاصيل الاستراتيجية",
      "البحث في التقنيات الحيوية المتطورة",
    ],
    type: "branch",
    priority: "high",
  },
  {
    id: "3",
    title: "الابتكار في تحسين المحاصيل",
    description: "استخدام التعديل الجيني وهندسة الجينات لتطوير أصناف نباتية عالية الإنتاجية",
    details: [
      "استخدام تقنية CRISPR في التعديل الجيني",
      "تطوير أصناف مقاومة للأمراض",
      "تحليل التنوع الوراثي للمحاصيل",
      "برامج التربية النباتية المتقدمة",
    ],
    type: "branch",
    priority: "medium",
  },
  {
    id: "4",
    title: "التطبيقات الزراعية والتكنولوجيا الحيوية",
    description: "نقل التقنيات الحديثة من المختبر إلى الحقل لخدمة المزارعين",
    details: [
      "الزراعة النسيجية والعلامات الجزيئية",
      "تعزيز الزراعة الذكية مناخيًا",
      "تطوير نباتات تتكيف مع التحديات البيئية",
      "خدمة قطاع الزراعة والمزارعين",
    ],
    type: "leaf",
    priority: "medium",
  },
  {
    id: "5",
    title: "الحفاظ على الموارد الوراثية",
    description: "إنشاء بنوك للأنسجة النباتية والأصول الوراثية لحماية الأنواع المهددة",
    details: [
      "حماية الأنواع المحلية من الانقراض",
      "توثيق الخصائص الجزيئية للنباتات النادرة",
      "استخدام الموارد في برامج التكاثر",
      "بناء قواعد بيانات وراثية شاملة",
    ],
    type: "leaf",
    priority: "low",
  },
]

interface OrganicPlantListProps {
  data?: PlantItem[]
  language?: "ar" | "en",
  Main_Title?: string,
  Sub_Title?: string
}

export default function OrganicPlantListV3Compatible({
  data = defaultPlantData,
  language = "ar",
  Main_Title,
  Sub_Title
}: OrganicPlantListProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [selectedItem, setSelectedItem] = useState<PlantItem | null>(null)
  const [animatingItems, setAnimatingItems] = useState<Set<string>>(new Set())
  const [closingItems, setClosingItems] = useState<Set<string>>(new Set())

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
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
      }, 1000)
    } else {
      newExpanded.add(id)
      setAnimatingItems((prev) => new Set(prev).add(id))
      setTimeout(() => {
        setAnimatingItems((prev) => {
          const newSet = new Set(prev)
          newSet.delete(id)
          return newSet
        })
      }, 1000)
      setExpandedItems(newExpanded)
    }
  }

  const openModal = (item: PlantItem) => {
    setSelectedItem(item)
    document.body.style.overflowX = "hidden"
  }

  const closeModal = () => {
    setSelectedItem(null)
    document.body.style.overflowX = "unset"
  }

  const getPlantIcon = (itemId: string) => {
    switch (itemId) {
      case "1":
        return <Sprout className="w-5 h-5 sm:w-6 sm:h-6" />
      case "2":
        return <TreePine className="w-5 h-5 sm:w-6 sm:h-6" />
      case "3":
        return <Wheat className="w-5 h-5 sm:w-6 sm:h-6" />
      case "4":
        return <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
      case "5":
        return <Flower2 className="w-5 h-5 sm:w-6 sm:h-6" />
      default:
        return <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
    }
  }

  const getUniqueColorClass = (index: number) => {
    const colorClasses = [
      "bg-plant-gradient-1", // Deep green
      "bg-plant-gradient-2", // Teal
      "bg-plant-gradient-3", // Green
      "bg-plant-gradient-5", // Lime
      "bg-plant-gradient-4", // Cyan
    ]
    return colorClasses[index % colorClasses.length]
  }

  const getText = (arText: string, enText: string) => {
    return language === "ar" ? arText : enText
  }

  return (
    <div className="my-16 w-full max-w-[90rem] mx-auto plant-container p-6 sm:p-8 rounded-2xl shadow-lg backdrop-blur-md bg-gray-200 bg-opacity-25" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className={`text-center mb-6 sm:mb-8 mt-0`}>
        <h2 className={clsx(
          "text-xl font-black text-plant-primary text-center",
          language === "ar" ? "xs:text-4xl xxxs:text-3xl mb-8" : "xs:text-3xl xxxs:text-2xl mb-4"
        )}>
          {Main_Title ? Main_Title : getText("قائمة النمو العضوي", "Organic Growth List")}
        </h2>
        <p className={clsx(
          "text-gray-600 text-center",
          language === "ar" ? "font-black xs:text-3xl xxxs:text-xl xxs:text-2xl xs:leading-relaxed xxxs:leading-relaxed xxs:leading-relaxed" 
          : "xs:text-2xl xxxs:text-lg xxs:text-xl xs:leading-normal xxxs:leading-tight xxs:leading-snug"
        )}>
          { Sub_Title ? Sub_Title : getText(
            "استكشف رؤية القسم من خلال هيكل نباتي تفاعلي",
            "Explore the department's vision through an interactive plant structure",
          )}
        </p>
      </div>

      <div className="relative" dir={language === "ar" ? "rtl" : "ltr"}>
        {/* Main plant stem */}
        <div className="absolute left-4 sm:left-8 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b bg-black rounded-full bg-opacity-50"></div>

        {data.map((item, index) => (
          <div key={item.id} className="relative mb-6 sm:mb-8 group">
            {/* Connector branch */}
            {index > 0 && (
              <div className="absolute left-4 sm:left-8 top-6 sm:top-8 w-0.5 h-12 bg-gradient-to-b from-black via-gray-500 to-white animate-branch-extend"></div>
            )}

            {/* Horizontal branch to item */}
            <div className="absolute left-4 sm:left-8 top-6 sm:top-8 w-8 sm:w-12 h-0.5 bg-gradient-to-r bg-black animate-branch-extend"></div>

            {/* Plant item */}
            <div
              className={`
                relative plant-item ml-12 sm:ml-20 p-4 sm:p-6 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-500 transform
                ${getUniqueColorClass(index)}
                plant-item-hover
                ${animatingItems.has(item.id) ? "animate-plant-grow" : ""}
                group-hover:translate-x-1 sm:group-hover:translate-x-2
              `}
              onClick={() => openModal(item)}
            >
              {/* Plant icon */}
              <div className={clsx(
                "rounded-full bg-plant-primary text-white shadow-lg",
                language === "ar" ? "absolute -right-3 sm:-right-4 top-4 sm:top-6 p-1.5 sm:p-2" : "absolute -left-3 sm:-left-4 top-4 sm:top-6 p-1.5 sm:p-2"
              )} dir={language === "ar" ? "rtl" : "ltr"}>
                {getPlantIcon(item.id)}
              </div>

              {/* <div className={language === "ar" ? "text-right" : "text-left"}> */}
              <div className="text-center">
                <h3 className={clsx(
                  "text-lg font-bold text-white mb-2",
                  language === "ar" ? "xs:text-3xl xxxs:text-2xl xxxs:leading-relaxed px-2" : "px-2 xs:text-xl xxxs:text-lg xxxs:leading-normal"
                )}>{item.title}</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{item.description}</p>

                {/* Expandable details */}
                <div className="mt-3 sm:mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleExpand(item.id)
                    }}
                    className={clsx(
                      "text-black hover:text-white transition-colors hover:scale-105",
                      language === "ar" ? "flex items-center gap-2 flex-row-reverse" : "flex items-center gap-2"
                    )}
                  >
                    {expandedItems.has(item.id) ? (
                      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                    <span className={clsx(
                                language === "ar" ? "text-lg sm:text-xl" : "text-md sm:text-lg"
                    )}>{getText("التفاصيل", "Details")}</span>
                  </button>

                  {(expandedItems.has(item.id) || closingItems.has(item.id)) && (
                    <div
                      className={`mt-3 space-y-2 overflow-hidden ${
                        closingItems.has(item.id) ? "animate-leaf-fold" : "animate-leaf-unfold"
                      }`}
                    >
                      {item.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className={`flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white/10 rounded-lg backdrop-blur-sm 
                                   plant-detail-hover transition-all duration-300 cursor-pointer
                                   ${closingItems.has(item.id) ? "animate-slide-out-stagger" : "animate-slide-in-stagger"}`}
                          style={{
                            animationDelay: closingItems.has(item.id)
                              ? `${(item.details.length - detailIndex - 1) * 0.1}s`
                              : `${detailIndex * 0.15}s`,
                            animationFillMode: "both",
                          }}
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-plant-secondary mt-1.5 sm:mt-2 flex-shrink-0 animate-pulse"></div>
                          <p className={clsx(
                            "text-white/90",
                            language === "ar" ? "text-xl xs:text-2xl xs:leading-relaxed xxxs:leading-normal" 
                            : "text-lg xs:text-xl xs:leading-snug xxxs:leading-tight"
                          )}>{detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Growth indicator */}
              <div className={clsx(
                "w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-plant-secondary animate-pulse",
                language === "ar" ? "absolute top-1 sm:top-2 right-1 sm:right-2" : "absolute top-1 sm:top-2 left-1 sm:left-2"
              )}></div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
        dir={language === "ar" ? "rtl" : "ltr"} 
          className="fixed inset-0 modal-backdrop flex items-center justify-center p-2 sm:p-4 z-50"
          style={{ minHeight: "100vh" }}
          onClick={closeModal}
        >
          <div
            className="plant-modal bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 w-full  xxxs:max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl  
                       overflow-y-auto shadow-2xl animate-modal-appear
                       my-auto mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`flex justify-between items-start mb-4 sm:mb-6`}
            >
              <div
                className={`flex items-center gap-2 sm:gap-3`}
              >
                <div className="p-2 sm:p-3 rounded-full bg-plant-primary text-white">
                  {getPlantIcon(selectedItem.id)}
                </div>
                <div className={language === "ar" ? "text-right" : "text-left"}>
                  <h3 className={clsx(
                    "font-bold text-plant-primary",
                    language === "ar" ? "text-xl sm:text-3xl xxs:text-2xl leading-relaxed" : "text-lg sm:text-2xl xxs:text-xl leading-normal"
                  )}>{selectedItem.title}</h3>
                  {/* <span className="text-xs sm:text-sm text-gray-500 capitalize">
                    {selectedItem.type} • {selectedItem.priority} priority
                  </span> */}
                </div>
              </div>
              <button
              title={language === "ar" ? "اغلاق النافذة" : "Close Modal"}
                onClick={closeModal}
                className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer hover:scale-110"
              >
                <X className="w-4 h-4 sm:w-6 sm:h-6 text-gray-500" />
              </button>
            </div>

            <div className={`space-y-4 sm:space-y-6 ${language === "ar" ? "text-right" : "text-left"}`}>
              <p className="text-gray-800 leading-relaxed text-sm sm:text-lg">{selectedItem.description}</p>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-plant-primary mb-3 sm:mb-4">
                  {getText("التفاصيل الكاملة:", "Full Details:")}
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {selectedItem.details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl animate-leaf-unfold
                               hover:bg-gray-100 hover:scale-[1.01] hover:shadow-sm transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-plant-secondary mt-1 sm:mt-2 flex-shrink-0 animate-pulse"></div>
                      <p className={clsx(
                        "text-gray-800 leading-relaxed",
                        language === "ar" ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                      )}>{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

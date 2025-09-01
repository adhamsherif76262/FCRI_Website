"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, X, Sprout, TreePine, Leaf, Wheat, Apple, Flower2 } from "lucide-react"

interface PlantItem {
  id: string
  title: string
  description: string
  details: string[]
  type: "root" | "branch" | "leaf"
  priority: "high" | "medium" | "low"
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
    type: "root",
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
  language?: "ar" | "en"
}

export default function OrganicPlantListV3Compatible({
  data = defaultPlantData,
  language = "ar",
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
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedItem(null)
    document.body.style.overflow = "unset"
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
      "bg-plant-gradient-4", // Lime
      "bg-plant-gradient-5", // Cyan
    ]
    return colorClasses[index % colorClasses.length]
  }

  const getText = (arText: string, enText: string) => {
    return language === "ar" ? arText : enText
  }

  return (
    <div className="w-full max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto plant-container p-3 sm:p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-xl sm:rounded-2xl shadow-lg">
      <div className={`text-center mb-6 sm:mb-8 ${language === "ar" ? "text-right" : "text-left"}`}>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-plant-primary mb-2">
          {getText("قائمة النمو العضوي", "Organic Growth List")}
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          {getText(
            "استكشف رؤية القسم من خلال هيكل نباتي تفاعلي",
            "Explore the department's vision through an interactive plant structure",
          )}
        </p>
      </div>

      <div className="relative">
        {/* Main plant stem */}
        <div className="absolute left-4 sm:left-8 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-green-600 via-green-500 to-green-400 rounded-full opacity-60"></div>

        {data.map((item, index) => (
          <div key={item.id} className="relative mb-6 sm:mb-8 group">
            {/* Connector branch */}
            {index > 0 && (
              <div className="absolute left-4 sm:left-8 top-6 sm:top-8 w-0.5 h-16 sm:h-20 bg-gradient-to-b from-green-500 to-green-400 animate-branch-extend"></div>
            )}

            {/* Horizontal branch to item */}
            <div className="absolute left-4 sm:left-8 top-6 sm:top-8 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-green-500 to-green-400 animate-branch-extend"></div>

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
              <div className="absolute -left-3 sm:-left-4 top-4 sm:top-6 p-1.5 sm:p-2 rounded-full bg-plant-primary text-white shadow-lg">
                {getPlantIcon(item.id)}
              </div>

              <div className={language === "ar" ? "text-right" : "text-left"}>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{item.description}</p>

                {/* Expandable details */}
                <div className="mt-3 sm:mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleExpand(item.id)
                    }}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors hover:scale-105"
                  >
                    {expandedItems.has(item.id) ? (
                      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                    <span className="text-xs sm:text-sm">{getText("التفاصيل", "Details")}</span>
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
                          <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Growth indicator */}
              <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-plant-secondary animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 modal-backdrop flex items-center justify-center p-2 sm:p-4 z-50"
          style={{ minHeight: "100vh", minWidth: "100vw" }}
          onClick={closeModal}
        >
          <div
            className="plant-modal bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 w-full max-w-xs sm:max-w-2xl 
                       max-h-[85vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl animate-modal-appear
                       my-auto mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`flex justify-between items-start mb-4 sm:mb-6 ${language === "ar" ? "flex-row-reverse" : "flex-row"}`}
            >
              <div
                className={`flex items-center gap-2 sm:gap-3 ${language === "ar" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div className="p-2 sm:p-3 rounded-full bg-plant-primary text-white">
                  {getPlantIcon(selectedItem.id)}
                </div>
                <div className={language === "ar" ? "text-right" : "text-left"}>
                  <h3 className="text-lg sm:text-2xl font-bold text-plant-primary">{selectedItem.title}</h3>
                  <span className="text-xs sm:text-sm text-gray-500 capitalize">
                    {selectedItem.type} • {selectedItem.priority} priority
                  </span>
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
                <h4 className="text-base sm:text-lg font-semibold text-plant-primary mb-3 sm:mb-4">
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
                      <p className="text-gray-800 leading-relaxed text-xs sm:text-base">{detail}</p>
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

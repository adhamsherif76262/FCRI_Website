import { Eye, Lightbulb, Rocket, Globe } from "lucide-react"

interface VisionItem {
  id: string
  title: string
  description: string
  timeline: string
  impact: string
  theme: string
}

interface LayeredVisionListProps {
  items: VisionItem[]
  isArabic : boolean
}

export default function LayeredVisionList({ items , isArabic}: LayeredVisionListProps) {
  const defaultItems: VisionItem[] = [
    {
      id: "1",
      title: "",
      description : "",
      timeline: "2025-2030",
      impact: "",
      theme: "sustainability",
    },
    {
      id: "2",
      title: "",
      description : "",
      timeline: "2024-2027",
      impact: "",
      theme: "excellence",
    },
    {
      id: "3",
      title: "",
      description : "",
      timeline: "2024-2035",
      impact: "",
      theme: "innovation",
    },
    {
      id: "4",
      title: "",
      description : "",
      timeline: "2025-2028",
      impact: "",
      theme: "development",
    },
    {
      id: "5",
      title: "",
      description : "",
      timeline: "2025-2028",
      impact: "",
      theme: "support",
    },
    {
      id: "6",
      title: "",
      description : "",
      timeline: "2025-2028",
      impact: "",
      theme: "growth",
    },
    {
      id: "7",
      title: "",
      description : "",
      timeline: "2025-2028",
      impact: "",
      theme: "",
    }
  ]

  const displayItems = items.length > 0 ? items : defaultItems

  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case "innovation":
        return <Lightbulb className="h-6 w-6" />
      case "growth":
        return <Rocket className="h-6 w-6" />
      case "sustainability":
        return <Globe className="h-6 w-6" />
      case "excellence":
        return <Eye className="h-6 w-6" />
      case "development":
        return <Rocket className="h-6 w-6" />
      case "support":
        return <Globe className="h-6 w-6" />
      default:
        return <Eye className="h-6 w-6" />
    }
  }

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case "innovation":
        return {
          primary: "from-cyan-500 to-blue-600",
          secondary: "bg-cyan-100",
          accent: "text-cyan-700",
          border: "border-cyan-200",
        }
      case "growth":
        return {
          primary: "from-green-500 to-emerald-600",
          secondary: "bg-green-100",
          accent: "text-green-700",
          border: "border-green-200",
        }
      case "sustainability":
        return {
          primary: "from-teal-500 to-green-600",
          secondary: "bg-teal-100",
          accent: "text-teal-700",
          border: "border-teal-200",
        }
      case "excellence":
        return {
          primary: "from-purple-500 to-indigo-600",
          secondary: "bg-purple-100",
          accent: "text-purple-700",
          border: "border-purple-200",
        }
      case "development":
        return {
          primary: "from-red-500 to-black",
          secondary: "bg-red-100",
          accent: "text-red-700",
          border: "border-red-200",
        }
      case "support":
        return {
          primary: "from-blue-800 to-yellow-400",
          secondary: "bg-blue-100",
          accent: "text-blue-700",
          border: "border-red-200",
        }
      default:
        return {
          primary: "from-gray-500 to-gray-600",
          secondary: "bg-gray-100",
          accent: "text-gray-700",
          border: "border-gray-200",
        }
    }
  }

  // const getImpactSize = (impact: string) => {
  //   switch (impact) {
  //     case "local":
  //       return "text-xl"
  //     case "national":
  //       return "text-2xl"
  //     case "global":
  //       return "text-3xl"
  //     default:
  //       return "text-2xl"
  //   }
  // }

  return (
    <div className="relative py-12 px-4" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto">
        {/* Fixed Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {displayItems.map((item, index) => {
            const colors = getThemeColors(item.theme)
            const rotation = (index % 2 === 0 ? 2 : -2) * (Math.random() * 2 + 1)

            return (
              <div
                key={item.id}
                className="group relative"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: "center center",
                }}
              >
                {/* Paper Stack Effect */}
                <div className="relative">
                  {/* Shadow Layers */}
                  <div className="absolute inset-0 bg-gray-300 rounded-2xl transform translate-x-3 translate-y-3 opacity-20" />
                  <div className="absolute inset-0 bg-gray-400 rounded-2xl transform translate-x-1.5 translate-y-1.5 opacity-30" />

                  {/* Main Card */}
                  <div
                    className={`relative bg-white rounded-2xl border-2 ${colors.border} shadow-2xl transform transition-all duration-700 hover:rotate-0 hover:scale-105 hover:z-50 group-hover:shadow-3xl`}
                  >
                    {/* Header Gradient */}
                    <div className={`h-4 bg-gradient-to-r ${colors.primary} rounded-t-2xl`} />

                    <div className="p-8">
                      {/* Icon and Impact Badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 ${colors.secondary} rounded-xl`}>
                          <div className={colors.accent}>{getThemeIcon(item.theme)}</div>
                        </div>

                        <div className="text-left">
                          <div
                            className={`inline-block px-3 py-1 ${colors.secondary} ${colors.accent} rounded-full text-lg font-black`}
                          >
                            {/* {item.impact === "local" ? "محلي" : item.impact === "national" ? "وطني" : "عالمي"} */}
                            {item.id}
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`font-black mb-4 ${colors.accent} ${isArabic ? "xxxs:text-2xl xxxs:leading-relaxed sm:text-3xl sm:leading-relaxed" : "xxxs:text-lg xxs:text-xl sm:text-2xl md:text-xl lg:text-2xl"}`}>{item.title}</h3>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-6 text-base">{item.description}</p>

                      {/* Timeline */}
                      <div className="flex items-center justify-between">
                        <div
                          dir="ltr"
                          className={`px-4 py-2 bg-gradient-to-r ${colors.primary} text-white rounded-full text-md font-black`}
                        >
                          {item.timeline}
                        </div>

                        {/* Decorative Elements */}
                        <div className="flex space-x-2">
                          <div className={`w-3 h-3 ${colors.secondary} rounded-full`} />
                          <div className={`w-2 h-2 ${colors.secondary} rounded-full opacity-60`} />
                          <div className={`w-1 h-1 ${colors.secondary} rounded-full opacity-40`} />
                        </div>
                      </div>
                    </div>

                    {/* Corner Fold Effect */}
                    <div className="absolute top-0 left-0 w-8 h-8 bg-gray-100 transform rotate-45 -translate-x-4 -translate-y-4 border border-gray-200" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

import clsx from "clsx"
import { Network, Users, Target, Sparkles, Heart } from "lucide-react"

interface NetworkItem {
  id: string
  title: string
  description: string
  category: string
  // category: "core" | "support" | "innovation" | "community"
  connections: string[]
  strength: number
}

interface CircularNetworkListProps {
  items: NetworkItem[]
  centerTitle?: string
  lang : string
}

export default function CircularNetworkList({ items , centerTitle, lang }: CircularNetworkListProps) {
  // const defaultItems: NetworkItem[] = [
  //   {
  //     id: "1",
  //     title: "التميز التقني",
  //     description: "تطوير الحلول التقنية المتقدمة",
  //     category: "core",
  //     connections: ["2", "3"],
  //     strength: 95,
  //   },
  //   {
  //     id: "2",
  //     title: "خدمة المجتمع",
  //     description: "تقديم خدمات عالية الجودة للمواطنين",
  //     category: "community",
  //     connections: ["1", "4"],
  //     strength: 88,
  //   },
  //   {
  //     id: "3",
  //     title: "الابتكار المستمر",
  //     description: "تطوير أفكار وحلول إبداعية",
  //     category: "innovation",
  //     connections: ["1", "4", "5"],
  //     strength: 92,
  //   },
  //   {
  //     id: "4",
  //     title: "بناء الشراكات",
  //     description: "تعزيز التعاون مع الجهات المختلفة",
  //     category: "support",
  //     connections: ["2", "3", "6"],
  //     strength: 85,
  //   },
  //   {
  //     id: "5",
  //     title: "التطوير المهني",
  //     description: "تنمية قدرات الموظفين والكوادر",
  //     category: "support",
  //     connections: ["3", "6"],
  //     strength: 90,
  //   },
  //   {
  //     id: "6",
  //     title: "الاستدامة البيئية",
  //     description: "تطبيق ممارسات صديقة للبيئة",
  //     category: "innovation",
  //     connections: ["4", "5"],
  //     strength: 87,
  //   },
  //   {
  //     id: "7",
  //     title: "الاستدامة البيئية",
  //     description: "تطبيق ممارسات صديقة للبيئة",
  //     category: "innovation",
  //     connections: ["4", "5"],
  //     strength: 87,
  //   },
  //   {
  //     id: "8",
  //     title: "الاستدامة البيئية",
  //     description: "تطبيق ممارسات صديقة للبيئة",
  //     category: "innovation",
  //     connections: ["4", "5"],
  //     strength: 87,
  //   },
  //   {
  //     id: "9",
  //     title: "الاستدامة البيئية",
  //     description: "تطبيق ممارسات صديقة للبيئة",
  //     category: "innovation",
  //     connections: ["4", "5"],
  //     strength: 87,
  //   },
  //   {
  //     id: "10",
  //     title: "الاستدامة البيئية",
  //     description: "تطبيق ممارسات صديقة للبيئة",
  //     category: "innovation",
  //     connections: ["4", "5"],
  //     strength: 87,
  //   },
  // ]

  const displayItems = items
  // const displayItems = items.length > 0 ? items : defaultItems

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "core":
        return <Target className="xxxs:h-5 xxxs:w-5" />
      case "support":
        return <Users className="xxxs:h-5 xxxs:w-5" />
      case "innovation":
        return <Sparkles className="xxxs:h-5 xxxs:w-5" />
      case "community":
        return <Heart className="xxxs:h-5 xxxs:w-5" />
      default:
        return <Network className="lg:h-5 lg:w-5" />
    }
  }

  const getCategoryColors = (category: string) => {
    switch (category) {
      case "core":
        return {
          bg: "from-red-500 to-pink-600",
          solid: "bg-red-500",
          ring: "ring-red-200",
          glow: "shadow-red-500/50",
        }
      case "support":
        return {
          bg: "from-blue-500 to-indigo-600",
          solid: "bg-blue-500",
          ring: "ring-blue-200",
          glow: "shadow-blue-500/50",
        }
      case "innovation":
        return {
          bg: "from-purple-500 to-violet-600",
          solid: "bg-purple-500",
          ring: "ring-purple-200",
          glow: "shadow-purple-500/50",
        }
      case "community":
        return {
          bg: "from-green-500 to-emerald-600",
          solid: "bg-green-500",
          ring: "ring-green-200",
          glow: "shadow-green-500/50",
        }
      default:
        return {
          bg: "from-gray-500 to-gray-600",
          solid: "bg-gray-500",
          ring: "ring-gray-200",
          glow: "shadow-gray-500/50",
        }
    }
  }

  // Responsive layout - switch to grid on smaller screens
  // const isSmallScreen = displayItems.length > 4

  return (
    <div className={`relative w-[100%] sm:max-h-max ${displayItems.length == 0 ? "hidden" : displayItems.length > 3 ? "lg:max-h-[725px]" : "lg:max-h-[625px]"} overflow-hidden p-0 m-0`} dir={lang === 'ar' ? "rtl" : "ltr"}>
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100" />
      </div> */}

      {/* Mobile/Tablet Grid Layout */}
      <div className="block lg:hidden">
        <div className="max-w-4xl mx-auto">
          {/* Center Title */}
          <div className={clsx(
            "text-center mb-8 font-black text-white",
            lang === 'ar' ? "xxxs:text-3xl" : "xxxs:text-lg"
          )}>
            <div className="inline-flex items-center justify-center xxxs:w-52 xxxs:h-52 xxs:w-60 lg:w-32 xxs:h-60 lg:h-32 rounded-full bg-gradient-to-br from-black to-red-700 shadow-xl">
              <div className="flex flex-col items-center justify-content-between p-2">
                <Network className="h-6 w-6 sm:h-8 sm:w-8 mb-3 -mt-3" />
                <div className="text-center leading-loose">{centerTitle}</div>
              </div>
            </div>
          </div>
      
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-1 xxxs:pb-5">
            {displayItems.map((item , i) => {
              const colors = getCategoryColors(item.category)
              const totalItems = displayItems.length;
              const columns = 2; // md:grid-cols-3
              const fullRows = Math.floor(totalItems / columns);
              const isInLastRow = i >= fullRows * columns;
              const itemsInLastRow = totalItems % columns;
                      
              let colSpan = '';
              if (isInLastRow) {
                if (itemsInLastRow === 1) {
                  colSpan = 'md:col-span-3'; // take full width
                } else if (itemsInLastRow === 2) {
                  colSpan = 'md:col-span-2'; // divide row in half
                }
              }
              return (
                <div key={item.id} className={`group relative ${colSpan}`}>
                  <div
                    className={`relative w-full rounded-2xl bg-gradient-to-br ${colors.bg} ${colors.glow} shadow-xl ring-2
                       ${colors.ring} transform transition-all duration-500 hover:scale-105 group-hover:shadow-2xl
                       ${lang === "ar" ? "xxxs:min-h-[250px] xxs:min-h-[200px] xs:min-h-[150px]" : "xxxs:min-h-[350px] xxs:min-h-[250px] xs:min-h-[200px]"}`}
                  >
                    {/* Strength Indicator */}
                    {/* <div className="absolute top-2 right-2 text-white/80 text-xs font-semibold">{item.strength}%</div> */}

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-black text-center p-4">
                      <div className="flex flex-col">
                        <div className="mb-2 mx-auto">{getCategoryIcon(item.category)}</div>
                        <div className={clsx(
                          "font-black mb-1",
                          lang === "ar" ? "xxxs:text-xl xxs:text-2xl xxxs:leading-relaxed" : "xxxs:text-lg xxs:text-xl xxxs:leading-relaxed"
                        )}>{item.title}</div>
                        <div className="text-lg opacity-80 leading-tight">{item.description}</div>
                      </div>
                    </div>

                    {/* Pulse Effect */}
                    <div className={`absolute inset-0 rounded-2xl ${colors.solid} animate-ping opacity-20`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Desktop Circular Layout */}
      <div className="hidden lg:block ">
        <div className={`relative w-full ${displayItems.length > 2 ?" h-[725px]" : "h-[250px]"}`}>
          {/* Center Node */}
          {
            displayItems.length !== 0 ? 
              <div
            className={clsx(
              "absolute transform -translate-x-1/2 -translate-y-1/2 z-20 font-black text-black",
              lang === 'ar' ? "text-xl" : "text-sm"
            )}
            style={{ left: "50%", top: "50%" }}
          >
            <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-black to-red-700 shadow-2xl flex items-center justify-center">
              <div className="w-36 h-36 rounded-full bg-white/90 flex flex-col items-center justify-center">
                <Network className={clsx(
                  "text-black mb-2",
                  lang === 'ar' ? "h-8 w-8" : "h-5 w-5 -mt-4"
                )} />
                <div className={clsx(
                  "text-black text-center px-3",
                  lang === 'ar' ? "leading-10" : "leading-5"
                )}>{centerTitle}</div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 animate-ping opacity-20" />
            </div>
          </div>
            : ""
          }

          {/* Item Nodes in Circle */}
          {displayItems.map((item, index) => {
            const angle = (index * 2 * Math.PI) / displayItems.length - Math.PI / 2
            const radius = 225
            // const radius = window.innerWidth >= 1024 ? 250 : 0
            const x = displayItems.length >= 3 ? Math.cos(angle) * radius : Math.sin(angle) * radius
            const y = displayItems.length >= 3 ? Math.sin(angle) * radius : Math.cos(angle) * radius
            const colors = getCategoryColors(item.category)

            return (
              <div
                key={item.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                {/* Node Circle */}
                <div
                  className={`relative w-56 h-56 rounded-full bg-gradient-to-br ${colors.bg} ${colors.glow} shadow-2xl ring-4 ${colors.ring} transform transition-all duration-500 hover:scale-110 hover:rotate-90 hover:cursor-pointer group-hover:shadow-3xl`}
                >
                  {/* Strength Indicator */}
                  <div className="absolute inset-2 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-0 rounded-full border-4 border-white/30"
                      style={{
                        // background: `conic-gradient(rgba(255,255,255,0.8) 0deg, rgba(255,255,255,0.8) ${item.strength * 3.6}deg, transparent ${item.strength * 3.6}deg, transparent 360deg)`,
                        background: `conic-gradient(rgba(255,255,255,0.8) 0deg, rgba(255,255,255,0.8) ${item.strength * 30}deg, transparent ${item.strength * 30}deg, transparent 360deg)`,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="font-extrabold absolute inset-0 flex flex-col items-center justify-center text-black text-center p-2 z-10">
                    <div className="mb-1">{getCategoryIcon(item.category)}</div>
                    <div className={clsx(
                      "font-bold leading-6 px-5 py-2",
                      lang === 'ar' ? "text-lg" : "text-sm"
                    )}>{item.title}</div>
                    {/* <div className="text-md opacity-80 mt-1">{item.strength}%</div> */}
                  </div>

                  {/* Pulse Effect */}
                  <div className={`absolute inset-0 rounded-full ${colors.solid} animate-ping opacity-20`} />
                </div>

                {/* Tooltip */}
                {
                  item.description !== "" ? 
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  <div className="bg-white rounded-lg shadow-xl p-3 max-w-xs border">
                    {/* <div className="text-sm font-semibold text-gray-900 mb-1">{item.title}</div> */}
                    <div className="text-xs text-gray-600">{item.description}</div>
                  </div>
                </div> 
                : ""
                }

              </div>
            )
          })}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

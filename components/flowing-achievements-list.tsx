import { TrendingUp, Star, Trophy, Sparkles } from "lucide-react"
import CircularNetworkList from "./circular-network-list"
import clsx from "clsx"

interface AchievementItem {
  id: string
  title: string
  description: string
  metric: string
  value: string
  date: string
  category: "growth" | "excellence" | "innovation" | "recognition"
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
  [key: string]: NetworkItemData[]; // allows Array_1, Array_2, ...
};

interface FlowingAchievementsListProps {
  items: AchievementItem[],
  lang : string,
  Tree : boolean,
  Circular_Design_Items?: CircularDesignItemsType
  Circular_Design_CenterTitle?: string
}

export default function FlowingAchievementsList({ items = [] , lang ,Tree,Circular_Design_Items,Circular_Design_CenterTitle}: FlowingAchievementsListProps) {
  // const defaultItems: AchievementItem[] = [
  //   {
  //     id: "1",
  //     title: "زيادة رضا العملاء",
  //     description: "تحسين مستوى الخدمة المقدمة وزيادة معدل رضا المستفيدين",
  //     metric: "نسبة الرضا",
  //     value: "95%",
  //     date: "2024",
  //     category: "excellence",
  //   },
  //   {
  //     id: "2",
  //     title: "تطوير النظام الرقمي",
  //     description: "إطلاق منصة رقمية متطورة لتسهيل الخدمات",
  //     metric: "المستخدمين",
  //     value: "50K+",
  //     date: "2024",
  //     category: "innovation",
  //   },
  //   {
  //     id: "3",
  //     title: "جائزة التميز الحكومي",
  //     description: "الحصول على جائزة التميز في الأداء الحكومي",
  //     metric: "المركز",
  //     value: "الأول",
  //     date: "2023",
  //     category: "recognition",
  //   },
  //   {
  //     id: "4",
  //     title: "نمو الإنتاجية",
  //     description: "تحسين الكفاءة التشغيلية وزيادة الإنتاجية",
  //     metric: "الزيادة",
  //     value: "40%",
  //     date: "2024",
  //     category: "growth",
  //   },
  // ]

  const data = Circular_Design_Items

  const displayItems = items
  // const displayItems = items.length > 0 ? items : defaultItems

  const getIcon = (category: string) => {
    switch (category) {
      case "growth":
        return <TrendingUp className="h-8 w-8" />
      case "excellence":
        return <Star className="h-8 w-8" />
      case "innovation":
        return <Sparkles className="h-8 w-8" />
      case "recognition":
        return <Trophy className="h-8 w-8" />
      default:
        return <Star className="h-8 w-8" />
    }
  }

  const getCategoryColors = (category: string) => {
    switch (category) {
      case "growth":
        return { bg: "from-emerald-400 to-teal-600", accent: "bg-emerald-500" }
      case "excellence":
        return { bg: "from-blue-400 to-indigo-600", accent: "bg-blue-500" }
      case "innovation":
        return { bg: "from-purple-400 to-pink-600", accent: "bg-purple-500" }
      case "recognition":
        return { bg: "from-amber-400 to-orange-600", accent: "bg-amber-500" }
      default:
        return { bg: "from-gray-400 to-gray-600", accent: "bg-gray-500" }
    }
  }
  return (
    <div className="relative py-12 xxxs:px-0 sm:px-4 w-full mx-auto lg:w-[900px]" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Flowing Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M0,200 Q300,100 600,200 T1200,200 L1200,800 L0,800 Z" fill="url(#flowGradient1)" opacity="0.1" />
          <path d="M0,400 Q400,300 800,400 T1200,400 L1200,800 L0,800 Z" fill="url(#flowGradient2)" opacity="0.1" />
          <defs>
            <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="space-y-8">
          {displayItems.map((item, index) => {
            const colors = getCategoryColors(item.category)
            const isEven = index % 2 === 0
            return (
              <div key={item.id} className={`flex items-center gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                {/* Content Bubble */}
                <div className="flex-1 relative">
                  <div className="relative group">
                    {/* Main Content */}
                    <div
                      className={`relative p-2 pt-6 rounded-3xl bg-gradient-to-br ${colors.bg} text-white transform transition-all duration-500 hover:scales-105 hover:rotate-1s`}
                    >
                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/30 rounded-full animate-bounce" />
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-500" />
                        
                      <div className="relative z-10 m-0 p-0 w-full h-full">
                        <div className="flex xxxs:flex-col-reverse xs:flex-row items-center justify-between mb-4">
                          <div className="flex-1">
                            <h3 className={clsx(
                              "font-bold mb-2 xxxs:mt-5 xs:mt-0",
                              lang === "ar" ? "xxs:text-3xl xxs:leading-loose xxxs:text-2xl xxxs:leading-relaxed" : "text-xl leading-snug"
                            )}>{item.title}</h3>
                            <p className="text-white/90 leading-relaxed">{item.description}</p>
                          </div>
                          <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                            {getIcon(item.category)}
                          </div>
                        </div>
                        {
                          Tree && data?  
                            
                            // Iterate over top-level keys and map the items
                                  <CircularNetworkList items={Object.values(data)[index]} centerTitle={Circular_Design_CenterTitle} lang={lang}/>
                                  // <CircularNetworkList items={data.NetworkItem[Object.keys(data.NetworkItem)[index]]} centerTitle={Circular_Design_CenterTitle} />
                                :""  
                        }
                          
                        {/* <div className="flex items-center justify-between">
                          <div className="text-right">
                            <div className="text-3xl font-bold">{item.value}</div>
                            <div className="text-sm text-white/80">{item.metric}</div>
                          </div>
                          <div className="text-left">
                            <div className="text-sm text-white/80">السنة</div>
                            <div className="text-lg font-semibold">{item.date}</div>
                          </div>
                        </div> */}
                      </div>

                      {/* Tail */}
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 ${
                          isEven
                            ? "right-full border-t-[15px] border-b-[15px] border-r-[20px] border-transparent border-r-current"
                            : "left-full border-t-[15px] border-b-[15px] border-l-[20px] border-transparent border-l-current"
                        }`}
                        style={{ color: colors.accent }}
                      />
                    </div>

                    {/* Shadow */}
                    <div
                      className={`absolute inset-0 bg-black/20 rounded-3xl transform translate-x-2 translate-y-2 -z-10`}
                    />
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="flex-shrink-0">
                  <div className={`w-1 h-24 ${colors.accent} rounded-full relative`}>
                    <div
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${colors.accent} rounded-full border-4 border-white shadow-lg`}
                    />
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

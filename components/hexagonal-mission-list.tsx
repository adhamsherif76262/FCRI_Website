// import { Target, Zap, Users, Award } from "lucide-react"

// interface MissionItem {
//   id: string
//   title: string
//   description: string
//   priority: "high" | "medium" | "low"
//   icon: "target" | "zap" | "users" | "award"
// }

// interface HexagonalMissionListProps {
//   items: MissionItem[]
// }

// export default function HexagonalMissionList({ items = [] }: HexagonalMissionListProps) {
//   const defaultItems: MissionItem[] = [
//     {
//       id: "1",
//       title: "تطوير الخدمات الرقمية",
//       description: "تحسين وتطوير الخدمات الإلكترونية المقدمة للمواطنين والمؤسسات",
//       priority: "high",
//       icon: "zap",
//     },
//     {
//       id: "2",
//       title: "بناء الكوادر المتخصصة",
//       description: "تدريب وتأهيل الموظفين في أحدث التقنيات والممارسات",
//       priority: "high",
//       icon: "users",
//     },
//     {
//       id: "3",
//       title: "ضمان الجودة والامتياز",
//       description: "تطبيق معايير الجودة العالمية في جميع العمليات والخدمات",
//       priority: "medium",
//       icon: "award",
//     },
//     {
//       id: "4",
//       title: "تحقيق الأهداف الاستراتيجية",
//       description: "العمل على تحقيق رؤية المؤسسة وأهدافها طويلة المدى",
//       priority: "high",
//       icon: "target",
//     },
//   ]

//   const displayItems = items.length > 0 ? items : defaultItems

//   const getIcon = (iconType: string) => {
//     switch (iconType) {
//       case "target":
//         return <Target className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
//       case "zap":
//         return <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
//       case "users":
//         return <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
//       case "award":
//         return <Award className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
//       default:
//         return <Target className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
//     }
//   }

//   const getPriorityColors = (priority: string) => {
//     switch (priority) {
//       case "high":
//         return "from-red-500 to-pink-600"
//       case "medium":
//         return "from-yellow-500 to-orange-600"
//       case "low":
//         return "from-blue-500 to-indigo-600"
//       default:
//         return "from-gray-500 to-gray-600"
//     }
//   }

//   return (
//     <div className="relative p-2 sm:p-4 lg:p-8" dir="rtl">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="w-full h-full"
//           style={{
//             // backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l15 15v-30l-15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }}
//         />
//       </div>

//       <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
//         {displayItems.map((item, index) => (
//           <div
//             key={item.id}
//             className="group relative flex justify-center"
//             style={{
//               transform: index % 2 === 0 ? "translateY(0)" : "translateY(1rem)",
//             }}
//           >
//             {/* Hexagonal Container */}
//             <div className="relative transform rotate-0 group-hover:rotate-2">
//               {/* Main Hexagon - Responsive sizes */}
//               <div
//                 className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80  transition-all duration-1000"
//                 style={{
//                   clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
//                 }}
//               >
//                 <div className={`w-full h-full bg-gradient-to-br ${getPriorityColors(item.priority)} opacity-90`} />

//                 {/* Content */}
//                 <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-white text-center">
//                   {/* Icon */}
//                   <div className="mb-2 sm:mb-3 lg:mb-4 p-2 sm:p-2.5 lg:p-3 bg-white/20 rounded-full backdrop-blur-sm">
//                     {getIcon(item.icon)}
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-sm sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 leading-tight">{item.title}</h3>

//                   {/* Description */}
//                   <p className="text-xs sm:text-sm opacity-90 leading-relaxed">{item.description}</p>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-4 sm:h-4 bg-white/30 rounded-full animate-pulse" />
//                 <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-1.5 h-1.5 sm:w-3 sm:h-3 bg-white/20 rounded-full animate-pulse delay-300" />
//               </div>

//               {/* Shadow Hexagon - Reduced size */}
//               <div
//                 className="absolute top-1 left-1 sm:top-2 sm:left-2 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-black/5 -z-10"
//                 style={{
//                   clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
//                 }}
//               />
//             </div>

//             {/* Priority Indicator */}
//             <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
//               <div
//                 className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getPriorityColors(item.priority)}`}
//               >
//                 {item.priority === "high" ? "عالية" : item.priority === "medium" ? "متوسطة" : "منخفضة"}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



import clsx from "clsx"
import { Target, Zap, Users, Award } from "lucide-react"

interface MissionItem {
  id: string
  title: string
  description: string
  priority: string
  icon: string
}

interface HexagonalMissionListProps {
  items: MissionItem[]
  isArabic : boolean
}

export default function HexagonalMissionList({ items = [] , isArabic}: HexagonalMissionListProps) {
  const defaultItems: MissionItem[] = [
    {
      id: "1",
      title: "تطوير الخدمات الرقمية",
      description: "",
      priority: "high",
      icon: "zap",
    },
    {
      id: "2",
      title: "بناء الكوادر المتخصصة",
      description: "",
      priority: "medium",
      icon: "users",
    },
    {
      id: "3",
      title: "ضمان الجودة والامتياز",
      description: "",
      priority: "high",
      icon: "award",
    },
    {
      id: "4",
      title: "تحقيق الأهداف الاستراتيجية",
      description: "",
      priority: "medium",
      icon: "target",
    },
    {
      id: "5",
      title: "تطوير الخدمات الرقمية",
      description: "",
      priority: "high",
      icon: "zap",
    },
    {
      id: "6",
      title: "بناء الكوادر المتخصصة",
      description: "",
      priority: "medium",
      icon: "users",
    },
  ]

  const displayItems = items.length > 0 ? items : defaultItems

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "target":
        return <Target className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
      case "zap":
        return <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
      case "users":
        return <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
      case "award":
        return <Award className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
      default:
        return <Target className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
    }
  }

  const getPriorityColors = (priority: string) => {
    switch (priority) {
      case "high":
        return "from-red-500 to-pink-600"
      case "medium":
        return "from-yellow-500 to-orange-600"
      case "low":
        return "from-blue-500 to-indigo-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  return (
    <div className="relative p-2 sm:p-4 lg:p-8 mt-12" dir={isArabic ? "rtl" : "ltr"}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
        />
      </div>

      <div className="relative grid xxxs:grid-cols-1 xxxs:gap-y-2 xl:grid-cols-3 sm:grid-cols-2 gap-8 sm:gap-x-20 sm:gap-y-10 xl:gap-12 max-w-6xl mx-auto">
        {displayItems.map((item) => (
          <div
            key={item.id}
            className="group relative flex justify-center min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]"
          >
            {/* Hexagonal Container */}
            <div className="relative hover:scale-105 transition-transform duration-300 ease-out">
              {/* Main Hexagon - Responsive sizes */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 xl:w-80 xl:h-80 transition-all duration-500 ease-out"
                style={{
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${getPriorityColors(item.priority)} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 xl:p-8 text-white text-center">
                  {/* Icon */}
                  <div className="mb-2 sm:mb-3 xl:mb-4 p-2 sm:p-2.5 lg:p-3 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                    {getIcon(item.icon)}
                  </div>

                  {/* Title */}
                  <h3 className={clsx(
                    "font-black px-8 mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-1000",
                    isArabic ? "text-2xl" : "sm:text-lg xxxs:text-md"
                  )}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-4 sm:h-4 bg-white/30 rounded-full animate-pulse group-hover:bg-white/50 transition-colors duration-300" />
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-1.5 h-1.5 sm:w-3 sm:h-3 bg-white/20 rounded-full animate-pulse delay-300 group-hover:bg-white/40 transition-colors duration-300" />
              </div>

              {/* Shadow Hexagon - Reduced size */}
              <div
                className="absolute top-1 left-1 sm:top-2 sm:left-2 w-64 h-64 sm:w-72 sm:h-72 xl:w-80 xl:h-80 bg-black/5 group-hover:bg-black/10 transition-colors duration-300 -z-10"
                style={{
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              />
            </div>

            {/* Priority Indicator */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
              <div
                className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getPriorityColors(item.priority)}`}
              >
                {/* {item.priority === "high" ? "عالية" : item.priority === "medium" ? "متوسطة" : "منخفضة"} */}
                {item.id}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

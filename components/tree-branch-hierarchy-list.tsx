"use client"

import clsx from 'clsx'
import { ChevronDown, ChevronRight,ChevronLeft, Leaf, TreePine, Sprout } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from "react"

interface HierarchyItem {
  id: string
  text: string
  level: 1 | 2 | 3
  parentId?: string
  isExpanded?: boolean
  children?: HierarchyItem[]
}

interface TreeBranchHierarchyListProps {
  items: HierarchyItem[]
}

export default function TreeBranchHierarchyList({ items = [] }: TreeBranchHierarchyListProps) {
  const defaultItems: HierarchyItem[] = [
    // {
    //   id: "1",
    //   text: "الأهداف الاستراتيجية للقسم",
    //   level: 1,
    //   isExpanded: false,
    //   children: [
    //     {
    //       id: "1.1",
    //       text: "تطوير الخدمات الرقمية",
    //       level: 2,
    //       parentId: "1",
    //       isExpanded: false,
    //       children: [
    //         {
    //           id: "1.1.1",
    //           text: "تحديث المنصات الإلكترونية",
    //           level: 3,
    //           parentId: "1.1",
    //         },
    //         {
    //           id: "1.1.2",
    //           text: "تطوير تطبيقات الهاتف المحمول",
    //           level: 3,
    //           parentId: "1.1",
    //         },
    //         {
    //           id: "1.1.3",
    //           text: "تحسين تجربة المستخدم",
    //           level: 3,
    //           parentId: "1.1",
    //         },
    //       ],
    //     },
    //     {
    //       id: "1.2",
    //       text: "تعزيز الأمن السيبراني",
    //       level: 2,
    //       parentId: "1",
    //       isExpanded: false,
    //       children: [
    //         {
    //           id: "1.2.1",
    //           text: "تطبيق بروتوكولات الأمان",
    //           level: 3,
    //           parentId: "1.2",
    //         },
    //         {
    //           id: "1.2.2",
    //           text: "تدريب الموظفين على الأمن",
    //           level: 3,
    //           parentId: "1.2",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   id: "2",
    //   text: "خطط التطوير المؤسسي",
    //   level: 1,
    //   isExpanded: false,
    //   children: [
    //     {
    //       id: "2.1",
    //       text: "تطوير الموارد البشرية",
    //       level: 2,
    //       parentId: "2",
    //       isExpanded: false,
    //       children: [
    //         {
    //           id: "2.1.1",
    //           text: "برامج التدريب المتخصص",
    //           level: 3,
    //           parentId: "2.1",
    //         },
    //         {
    //           id: "2.1.2",
    //           text: "تطوير المسار الوظيفي",
    //           level: 3,
    //           parentId: "2.1",
    //         },
    //       ],
    //     },
    //     {
    //       id: "2.2",
    //       text: "تحسين البنية التحتية",
    //       level: 2,
    //       parentId: "2",
    //       isExpanded: false,
    //       children: [
    //         {
    //           id: "2.2.1",
    //           text: "ترقية الأجهزة والمعدات",
    //           level: 3,
    //           parentId: "2.2",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ]

  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [collapsingItems, setCollapsingItems] = useState<Set<string>>(new Set())
  const [animatingItems, setAnimatingItems] = useState<Map<string, string>>(new Map())

  const displayItems = items.length > 0 ? items : defaultItems

  const toggleExpanded = (itemId: string, level: number) => {
    const isCurrentlyExpanded = expandedItems.has(itemId)
    const newExpanded = new Set(expandedItems)
    const newCollapsing = new Set(collapsingItems)
    const newAnimating = new Map(animatingItems)

    if (isCurrentlyExpanded) {
      // Start collapsing
      const collapseAnimation = level === 2 ? "tree-collapse-wave" : "tree-collapse-spiral"
      newCollapsing.add(itemId)
      newAnimating.set(itemId, collapseAnimation)
      
      setCollapsingItems(newCollapsing)
      setAnimatingItems(newAnimating)

      // Remove from expanded after collapse animation completes
      const collapseTimeout = level === 2 ? 500 : 600 // Match animation durations
      setTimeout(() => {
        const finalExpanded = new Set(expandedItems)
        const finalCollapsing = new Set(collapsingItems)
        const finalAnimating = new Map(animatingItems)
        
        finalExpanded.delete(itemId)
        finalCollapsing.delete(itemId)
        finalAnimating.delete(itemId)
        
        setExpandedItems(finalExpanded)
        setCollapsingItems(finalCollapsing)
        setAnimatingItems(finalAnimating)
      }, collapseTimeout)
    } else {
      // Start expanding
      const expandAnimation = level === 2 ? "tree-expand-wave" : "tree-expand-spiral"
      newExpanded.add(itemId)
      newAnimating.set(itemId, expandAnimation)
      
      setExpandedItems(newExpanded)
      setAnimatingItems(newAnimating)

      // Clear expand animation after completion
      const expandTimeout = level === 2 ? 600 : 800 // Match animation durations
      setTimeout(() => {
        const finalAnimating = new Map(animatingItems)
        finalAnimating.delete(itemId)
        setAnimatingItems(finalAnimating)
      }, expandTimeout)
    }
  }

  const getLevelIcon = (level: number) => {
    if (level === 1) return <TreePine className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
    if (level === 2) return <Sprout className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
    return <Leaf className="h-2 w-2 sm:h-3 sm:w-3 lg:h-4 lg:w-4" />
  }

  const getLevelColors = (level: number) => {
    switch (level) {
      case 1:
        return {
          bg: "from-emerald-600 via-green-600 to-teal-700",
          border: "border-emerald-300",
          text: "text-white",
          shadow: "shadow-emerald-500/30",
        }
      case 2:
        return {
          bg: "from-blue-500 via-indigo-500 to-purple-600",
          border: "border-blue-300",
          text: "text-white",
          shadow: "shadow-blue-500/30",
        }
      case 3:
        return {
          bg: "from-amber-500 via-orange-500 to-red-500",
          border: "border-amber-300",
          text: "text-white",
          shadow: "shadow-amber-500/30",
        }
      default:
        return {
          bg: "from-gray-500 to-gray-600",
          border: "border-gray-300",
          text: "text-white",
          shadow: "shadow-gray-500/30",
        }
    }
  }
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';

  const renderItem = (item: HierarchyItem) => {
    const colors = getLevelColors(item.level)
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.has(item.id)
    const isCollapsing = collapsingItems.has(item.id)
    const currentAnimation = animatingItems.get(item.id)
    const margin = item.level === 1 ? 0 : item.level === 2 ? 20 : 0
    
    // Show children if expanded OR currently collapsing (to show collapse animation)
    const shouldShowChildren = isExpanded || isCollapsing

    return (
      <div key={item.id} className="relative" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
        {/* Item Container */}
        <div
          className="relative mb-3 sm:mb-4 lg:mb-6"
          style={currentLang === 'ar' ? {marginLeft: `${margin}px`} : {marginRight: `${margin}px`}}
        >
          {/* Main Item */}
          <div
            className={clsx(
              `max-w-[1500px] mx-auto group relative overflow-hidden rounded-3xl bg-gradient-to-r ${colors.bg} ${colors.shadow} shadow-xl border-2 ${colors.border} transform transition-all duration-300 hover:scale-105 hover:rotate-1 cursor-pointer w-full`,
              item.level === 1 ? "xl:min-width-sm lg:min-w-[800px] md:min-w-[650px] sm:min-w-[550px] xs:min-w-[450px] xxs:min-w-[350px] xxxs:min-w-[275px]" : "",
              item.level===2 && currentLang === 'ar' ? "xl:mr-[0%] xl:max-w-[1000px] lg:max-w-[600px] lg:mr-[10%] md:max-w-[500px] md:mr-[12%] sm:max-w-[400px] sm:mr-[15%] xs:max-w-[350px] xs:mr-[12%] xxs:max-w-[300px] xxxs:max-w-[250px] xxxs:mr-[10%]" 
            : item.level===2 && currentLang === 'en' ? "xl:ml-[0%] xl:max-w-[1000px]  lg:max-w-[600px] lg:ml-[10%] md:max-w-[500px] md:ml-[12%] sm:max-w-[400px] sm:ml-[15%] xs:max-w-[350px] xs:ml-[12%] xxs:ml-[12%] xxs:max-w-[300px] xxxs:max-w-[250px] xxxs:ml-[10%]" : "",
              item.level===3 && currentLang === 'ar' ? "xl:mr-[22%]  lg:max-w-[500px] lg:mr-[15%]  md:max-w-[400px] md:mr-[18%] sm:max-w-[300px] xs:max-w-[300px] xxs:max-w-[250px] xxxs:max-w-[225px] xxxs:mr-[20%]" 
            :item.level===3 && currentLang === 'en' ? "xl:ml-[22%] lg:max-w-[500px] lg:ml-[15%]  md:max-w-[400px] md:ml-[18%] sm:max-w-[300px] xs:ml-[24%] xs:max-w-[250px] xxs:ml-[24%] xxs:max-w-[250px] xxxs:max-w-[225px] xxxs:ml-[20%]" : "",
              isExpanded && item.level===2 && currentLang === 'en' ? " xxxs:ml-[15%]" : "",
              isExpanded && item.level===3 && currentLang === 'en' ? "xxxs:-ml-[45%]" : "",
              currentLang === 'ar' ? "xl:-mr-[27%] lg:-mr-[0%]" : "xl:-ml-[27%]"
            )}
            onClick={() => hasChildren && toggleExpanded(item.id, item.level)}
          >
            {/* Organic Shape Overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                <path
                  d="M0,50 Q50,10 100,50 T200,50 L200,100 L0,100 Z"
                  fill="rgba(255,255,255,0.3)"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-between p-3 sm:p-4 lg:p-6">
              <div className="flex items-center space-x-3 space-x-reverse">
                {/* Level Icon */}
                <div className="flex-shrink-0 p-2 sm:p-2.5 lg:p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  {getLevelIcon(item.level)}
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 space-x-reverse mb-1">
                    <span className="text-xs sm:text-sm font-mono bg-white/20 px-2 py-1 rounded-full">{item.id}</span>
                  </div>
                  <p className={clsx(
                    `${colors.text} font-extrabold`,
                    currentLang === 'ar' ? "lg:text-3xl lg:lineHeight md:text-2xl md:lineHeight xs:text-2xl xs:lineHeight xxxs:text-xl xxxs:leading-10" 
                    : "sm:text-2xl sm:lineHeight xs:text-xl xs:lineHeight xxxs:text-md xxxs:leading-6",
                  )}>
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Expand/Collapse Button */}
              {hasChildren && (
                <div className="flex-shrink-0 p-2 bg-white/20 rounded-full backdrop-blur-sm">
                  {isExpanded ? (
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-white transition-transform duration-200" />
                  ) : currentLang === 'ar'? <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-white transition-transform duration-200"/> : <ChevronLeft  className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-white transition-transform duration-200"/>
                  }
                </div>
              )}
            </div>

            {/* Floating Particles - Optimized */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/60 rounded-full animate-ping"
                  style={currentLang === 'ar' ? {
                    right: `${15 + i * 20}%`,
                    top: `${20 + i * 15}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: "1.2s",
                  } :
                  {
                    left: `${15 + i * 20}%`,
                    top: `${20 + i * 15}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: "1.2s",
                  }
                }
                />
              ))}
            </div>

            {/* Growth Animation - Optimized */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>

          {/* Children - Show during expand OR collapse */}
          {hasChildren && shouldShowChildren && (
            <div
              className={`mt-2 sm:mt-3 lg:mt-4 space-y-2 sm:space-y-3 lg:space-y-4 mx-auto ${
                currentAnimation ? currentAnimation : ""
              }`}
            >
              {item.children?.map((child) =>
                renderItem(child),
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="relative p-4 sm:p-6 lg:p-8" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background Forest Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fillOpacity='0.1'%3E%3Cpath d='M50 10 L60 30 L40 30 Z M50 30 L55 50 L45 50 Z M50 50 L50 70'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Tree Structure */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {displayItems.map((item) => renderItem(item))}
        </div>
      </div>

      {/* Floating Elements - Optimized */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            
            style={
              currentLang === 'ar' ? {
              right: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }
            :
            {
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }
            }
          >
            <Leaf
              className="h-2 w-2 sm:h-3 sm:w-3 lg:h-4 lg:w-4 text-green-500 animate-bounce"
              style={{
                animationDuration: `${0.8 + Math.random() * 1.2}s`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Star, Sparkles, Zap, ChevronRight, Telescope } from "lucide-react"
import clsx from "clsx"
import Modal from "./Modal"

interface SubItem {
  text: string
  children?: SubItem[]
}

interface ConstellationItem {
  id: string
  title: string
  Sub_title: string
  content: string
  subItems?: SubItem[]
  priority: "high" | "medium" | "low"
  category: string
}

interface ConstellationMobileListProps {
  items: ConstellationItem[]
  title?: string
  className?: string
  isRTL: boolean
}

const NestedSubItem: React.FC<{
  item: SubItem
  level: number
  screenSize: "mobile" | "tablet" | "desktop"
}> = ({ item, level, screenSize }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  return (
    <div className={`${level > 0 ? "mr-4" : ""}`}>
      <div
        className={`group relative bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 hover:from-emerald-100 hover:via-teal-100 hover:to-green-100 rounded-xl p-3 border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 ${
          hasChildren ? "cursor-pointer" : ""
        }`}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between gap-3 flex-row-reverse">
          {hasChildren && (
            <button
              title={isExpanded && window.location.href.endsWith("Ar") ? "طي القائمة" 
                : !isExpanded && window.location.href.endsWith("Ar") ? "توسيع القائمة" 
                : isExpanded && window.location.href.endsWith("En") ? "Collapse Dropdown List"
                :!isExpanded && window.location.href.endsWith("En") ? "Expand Dropdown List" : ""}
              className="mt-1 text-emerald-600 hover:text-emerald-800 transition-all duration-300 transform hover:scale-110"
            >
              <div className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}>
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          )}
          <div className="flex-1">
            <div className="flex items-end gap-2 mb-1">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
              <div className="w-6 h-0.5 bg-gradient-to-r from-emerald-300 to-transparent"></div>
            </div>
            <p
              className={clsx(
                `text-gray-800 group-hover:text-gray-900 transition-colors duration-500 font-black`,
                window.location.href.endsWith("Ar") ? "xxxs:text-lg xxxs:leading-normal xs:text-2xl xs:leading-loose" 
                : "xxxs:text-sm xxs:text-[16px] xs:text-xl xxxs:leading-snug xxs:leading-relaxed xs:leading-loose"
              )}
            >
              {item.text}
            </p>
          </div>
        </div>

        {!hasChildren && (
          <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
      </div>

      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`mt-3 space-y-2 transform transition-all duration-500 ${
              isExpanded ? "translate-y-0" : "-translate-y-4"
            }`}
          >
            {item.children!.map((child, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 ${
                  isExpanded ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 500}ms` }}
              >
                <NestedSubItem item={child} level={level + 1} screenSize={screenSize} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function ConstellationMobileList({
  isRTL,
  items,
  title = isRTL ? "رؤية قسم" : "Department Vision",
  className = "",
}: ConstellationMobileListProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop")
  const [animatingStars, setAnimatingStars] = useState(true)
  const modalRef = useRef<HTMLDivElement>(null)
  const displayItems = items ?? [];
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) setScreenSize("mobile")
      else if (width < 1024) setScreenSize("tablet")
      else setScreenSize("desktop")
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (expandedItem) {
      setAnimatingStars(false)
    } else {
      const timer = setTimeout(() => setAnimatingStars(true), 300)
      return () => clearTimeout(timer)
    }
  }, [expandedItem])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setExpandedItem(null)
      }
    }

    if (expandedItem) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [expandedItem])

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <Star className="w-6 h-6" />
      case "medium":
        return <Sparkles className="w-6 h-6" />
      case "low":
        return <Zap className="w-6 h-6" />
      default:
        return <Star className="w-6 h-6" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "from-emerald-400 to-green-500"
      case "medium":
        return "from-teal-400 to-emerald-500"
      case "low":
        return "from-green-400 to-teal-500"
      default:
        return "from-gray-400 to-gray-500"
    }
  }

  const handleClosePanel = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setExpandedItem(null)
  }

  // const getModalPosition = (itemIndex: number) => {
  //   const totalItems = displayItems.length
  //   // Calculate vertical position based on item index
  //   const baseTop = 20 + itemIndex * (60 / totalItems) // Distribute vertically

  //   return {
  //       //   bottom: itemIndex !== 0 ? "" : `${Math.min(Math.max(baseTop, 10), -20)}%`, // Keep within 10-80% of viewport
  //         bottom: baseTop-(475-(100*itemIndex)), // Keep within 10-80% of viewport
  //   }
  // }

  return (
    <div
      className={`2xl:hidden relative w-full mt-10 mx-auto bg-gradient-to-br from-slate-900 via-red-900 to-slate-800 rounded-3xl overflow-hidden ${className}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {[...Array(window.innerWidth >= 640 ? 500 : window.innerWidth >= 400 ? 200 : 100)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full ${animatingStars ? "animate-pulse" : ""}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="relative z-10 text-center pt-6 pb-4 px-8">
        <div className="flex xxxs:flex-col sm:flex-row items-center justify-center sm:gap-8 xxxs:gap-3 mb-2">
          <Telescope className="md:w-[5%] md:h-[5%] xxs:w-[12%] xxxs:w-[20%] sm:w-[8%] xxs:h-[12%] xxxs:h-[20%] sm:h-[8%] text-emerald-400" />
          <h2
            className={clsx(
                `font-black text-white font-sans`,
                isRTL ? "xxxs:text-2xl xs:text-3xl md:text-4xl" : "xxxs:text-xl xs:text-2xl md:text-3xl"
            )}
          >
            {title}
          </h2>
        </div>
        <div className="bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full w-[95%] h-1"></div>
      </div>

      {/* Constellation Container */}
      <div className="relative px-4 pb-16 flex-1" id="Constellation_Container">
        <div
          className={`flex flex-col gap-${screenSize === "mobile" ? "8" : "12"} items-center justify-center min-h-full py-8`}
        >
          {displayItems.map((item, index) => {
            const isExpanded = expandedItem === item.id
            // const modalPosition = getModalPosition(index)

            return (
              <div key={item.id} className="relative flex justify-center w-full">
                <div
                  className="cursor-pointer group relative z-10"
                  onClick={
                    () => {
                      setExpandedItem(isExpanded ? null : item.id)
                      setTimeout(() => {
                        const Constellation_Container = document.getElementById("Constellation_Container")
                        Constellation_Container?.scrollIntoView({behavior: "smooth" , block : "start"})
                      }, 0);
                    }
                  }
                >
                  <div
                    className={`bg-gradient-to-br ${getPriorityColor(item.priority)} rounded-full shadow-2xl border-2 border-white/30 
                        flex items-center justify-center text-white font-bold transition-all duration-300 
                        group-hover:scale-110 ${animatingStars ? "animate-pulse" : ""} 
                        ${isRTL ? "xs:w-52 xxxs:w-36 xs:h-52 xxxs:h-36 " : "xs:w-52 xs:h-52 xxxs:w-48 xxxs:h-48"}`}
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getPriorityColor(item.priority)} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                    ></div>

                    {/* Star content */}
                    <div className={clsx(
                        "relative text-center px-5 flex flex-col items-center justify-center font-extrabold",
                        isRTL ? "xs:text-3xl xxxs:text-2xl gap-4" : "xs:text-2xl xxxs:text-xl gap-0"
                    )}>
                      <div className="mb-1">{getPriorityIcon(item.priority)}</div>
                      <span className="block leading-snug">{item.category}</span>
                    </div>
                  </div>

                  {index < displayItems.length - 1 && (
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-400 to-transparent opacity-30 animate-pulse"
                      style={{ height: screenSize === "mobile" ? "2rem" : "3rem" }}
                    ></div>
                  )}
                </div>
                  <Modal
                    isArabic = {isRTL}
                    isOpen={isExpanded}
                    onClose={handleClosePanel}
                    item={item}
                    screenSize={screenSize}
                  />
              </div>
            )
          })}
        </div>
      </div>

      {/* Control Panel */}
      <div className="xxxs:min-w-[240px] xxs:min-w-[300px] xxxs:w-auto absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-6 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => setAnimatingStars(!animatingStars)}
          className="text-white/70 hover:text-white transition-colors duration-200 xxs:text-lg xxxs:text-sm text-center"
          disabled={!!expandedItem}
        >
          {animatingStars && isRTL ? "إيقاف التأثيرات" : !animatingStars && isRTL ? "تشغيل التأثيرات" 
          :animatingStars && !isRTL ? "Stop Animation" : !animatingStars && !isRTL ? "Play Animation" : ""}
        </button>
        <div className="w-px h-4 bg-white/30"></div>
        <span className="text-white/70 xxs:text-lg xxxs:text-sm text-center">{displayItems.length} {isRTL ? "كواكب" : "Planets"}</span>
      </div>
    </div>
  )
}

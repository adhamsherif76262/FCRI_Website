"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {ChevronRight } from "lucide-react"
import clsx from "clsx"
import Modal from "./Modal"

interface SubItem {
  text: string
  children?: SubItem[]
}

interface GalaxyItem {
  id: string
  title: string
  Sub_title: string
  content: string
  subItems?: SubItem[]
  priority: "high" | "medium" | "low"
  category: string
}

interface SpiralGalaxyListProps {
  items: GalaxyItem[]
  title?: string
  className?: string
  isRTL?: boolean
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
        className={`group relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 hover:from-indigo-100 hover:via-purple-100 hover:to-pink-100 rounded-xl p-4 border border-purple-200 hover:border-purple-400 transition-all duration-500 hover:shadow-lg transform hover:-translate-y-0.5 ${
          hasChildren ? "cursor-pointer" : ""
        }`}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-3">
          {hasChildren && (
            <button title={isExpanded ? "Collapse List" : "Expand List"}  className="mt-1 text-purple-600 hover:text-purple-800 transition-all duration-500 transform hover:scale-110">
              <div className={`transition-transform duration-500 ${isExpanded ? "rotate-90" : ""}`}>
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
            </div>
            <p
              className={`text-gray-800 leading-loose group-hover:text-gray-900 transition-colors duration-500 ${
                screenSize === "mobile" ? "text-xs" : "text-2xl font-black"
              }`}
            >
              {item.text}
            </p>
          </div>
        </div>

        {!hasChildren && (
          <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        )}
      </div>

      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
                style={{ transitionDelay: `${index * 100}ms` }}
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


export default function SpiralGalaxyList({
  isRTL = true,
  items,
  title = isRTL ? "رؤية القسم" : "Department Vision",
  className = "",
}: SpiralGalaxyListProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [visibleItem, setVisibleItem] = useState<number>(1)
  const [isRotating, setIsRotating] = useState(true)
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop")
  const modalRef = useRef<HTMLDivElement>(null)
  const defaultItems = items ?? [];
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
      setIsRotating(false)
    } else {
      // Restart rotation when modal closes
      const timer = setTimeout(() => setIsRotating(true), 0)
      return () => clearTimeout(timer)
    }
  }, [expandedItem])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setExpandedItem(null) // close modal
        setVisibleItem(1)
      }
    }

    if (expandedItem) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [expandedItem])

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "from-yellow-400 to-orange-500"
      case "medium":
        return "from-blue-400 to-purple-500"
      case "low":
        return "from-green-400 to-teal-500"
      default:
        return "from-gray-400 to-gray-500"
    }
  }

  const handleClosePanel = (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
        setExpandedItem(null);
        setVisibleItem(1);
        // Restart rotation when modal closes
        setIsRotating(true);
//   setModalCoords(null);
  }

  const containerHeight = screenSize === "mobile" ? "500px" : screenSize === "tablet" ? "600px" : defaultItems.length > 1 ? `calc(${350 * defaultItems.length}px)` : "700px"
  const containerWidth = screenSize === "mobile" ? "320px" : screenSize === "tablet" ? "640px" : "800px"
  const galaxyHeight = screenSize === "mobile" ? "400px" : screenSize === "tablet" ? "500px" : expandedItem ? "500px" : defaultItems.length > 1 ? `calc(${275 * defaultItems.length}px)` : "400px"
//   : defaultItems.length <= 2 ? "600px" : 

  return (
    <div
      className={`${expandedItem ? 'lg:min-w-[400px] xl:min-w-[700px] lg:h-[700px]' : ''} duration-1000 xl:min-w-[1360px] lg:min-w-[1000px] mt-12 relative w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl ${className}`}
      style={{
        maxHeight: containerHeight,
        maxWidth: "500px",
        overflow: "hidden",
        // borderRadius : "50% "
      }}
      dir={isRTL ? "rtl" : "ltr"}
      id="Galaxy_Container"
    >
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {[...Array(screenSize === "mobile" ? 350 : 500)].map((_, i) => (
          <div
          
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1}s`,
              animationDuration: `${2 + Math.random() * 1}s`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="relative z-10 text-center pt-4 sm:pt-6 lg:pt-8 pb-2 sm:pb-4">
        <h2
          className={`font-bold text-white mb-2 font-serif ${
            isRTL ? "text-5xl" : "text-4xl"
          }`}
        >
          {title}
        </h2>
        <div
          className={`bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full w-[30%] h-1`}
        ></div>
      </div>

      {/* Galaxy Container */}
      <div
        className={`relative mx-auto transition-all animate-spin-slow ${!isRotating && "animate-orbit-paused" }`}
        style={{
          width: !expandedItem ? containerWidth : "500px",
          height: galaxyHeight,
          maxWidth: "100%",
          minHeight : "500px"
        }}

      >

        {/* Spiral Items */}
        
        <div className={`relative w-full h-full ${isRotating && !expandedItem ? "animate-spin-versy-slow" : ""}`}>
                {/* Galaxy Container */}
<div className="relative w-full h-full">

        {/* Central Core */}

        {
            visibleItem > 0 ?
                        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full shadow-2xl animate-pulse z-0 ${
            screenSize === "mobile" ? "w-10 h-10" : screenSize === "tablet" ? "w-12 h-12" : "w-32 h-32"
          }`}
        >
          <div
            className={`absolute bg-gradient-to-r from-yellow-200 to-orange-300 rounded-full ${
              isRotating && !expandedItem ? "animate-spin-slow" : !isRotating && "animate-orbit-paused"
            } ${screenSize === "mobile" ? "inset-1" : "inset-2"}`}
          ></div>
        </div>
          : ""
        }

  {/* Planets & Orbits */}
  {items.map((item, index) => {
      const orbitRadius = 130 + (index == 0 ? index+0.25 : index) * 130; // distance from Sun
    // const orbitRadius = getOrbitRadiusOffset(window.innerWidth) + (index == 0 ? index+0.25 : index) * getOrbitRadiusOffset(window.innerWidth); // distance from Sun
    // const orbitRadius = index > 0 ? 130 + (index+1) * 130 : 130 + (index+2) * 130 ; // distance from Sun
    const orbitTime = 100 + index * 100; // speed
    const isExpanded = expandedItem === item.id;
    const startAngle = (index / items.length) * 2 * Math.PI;
    // const startX = Math.cos(startAngle) * orbitRadius;
    // const startY = Math.sin(startAngle) * orbitRadius;
    const startX = items.length > 1 && items.length < 5 ? Math.cos(startAngle) * orbitRadius : Math.cos(startAngle) * orbitRadius - (300*index);
    const startY = items.length > 1 && items.length < 5 ?  Math.sin(startAngle) * orbitRadius :  Math.sin(startAngle) * orbitRadius - (20*index);

    return (
      <div key={item.id}>
          {/* Orbit Ring */}
        {!expandedItem ?
        <div
          className="absolute rounded-full border border-white/50"
          style={{
            width: `${orbitRadius * 2}px`,
            height: `${orbitRadius * 2}px`,
            top: `calc(50% - ${orbitRadius}px)`,
            left: `calc(50% - ${orbitRadius}px)`,
        }}
        ></div> : ""
    }
{/* Rotating Wrapper (rotation only) */}
<div
  className="absolute pointer-events-none"
  style={{
    width: `${orbitRadius * 2}px`,
    height: `${orbitRadius * 2}px`,
    top: `calc(50% - ${orbitRadius}px)`,
    left: `calc(50% - ${orbitRadius}px)`,
    animation: !isExpanded && isRotating ? `orbit ${orbitTime}s linear infinite` : "none",
    transformOrigin: "center",
    zIndex: -1000, // orbit is always behind
    // position : "absolute",
    pointerEvents : "none"
  }}
>
    {/* <div className="text-4xl">{orbitTime}</div> */}

</div>
  {/* Inner container for planet (clickable, high z-index) */}
  {/* Planet */}
  
<div
  style={{
    // top: "50%",
    // left: `50%`,
    // top: `calc(50% + ${startY})`,
    // left: `calc(50% + ${startX})`,
    
    top: index == 0 ? `calc(50% + ${startY}px)`: index == 2 ? `calc(50% + ${startY * (index-2.25)}px)`
    : index == 1 ? `calc(50% + ${startY * (index-(2.05 + ((defaultItems.length * -0.1) + 0.6)))}px)` 
    : index == 3 ? `calc(50% + ${startY * (index-3)}px)` : index == 4 ? `calc(50% + ${startY * (index-3.5)}px)` : 0,
    
    left: index == 0 ? `calc(50% + ${startX * 0.5}px)` : index == 1 ? `calc(50% + ${startX * (index+0.3)}px)` 
    : index == 2 ? "-5%" : index == 3 ? "-23%" : index == 4 ? "-30%" : 0,
    
    // ['--orbit-time' as never]: `${orbitTime}s`,

    transform: `translate(-50%, -50%)`,
    // transform: `translate(${(index * -70)}%, -50%)`,
    // transform: `translate(calc(-15% * ${5}), -50%)`,
    // zIndex: !isExpanded && defaultItems.length - index == 1 ? 0 : 10,
    zIndex: isExpanded ? 9999*index : 999-index,
    pointerEvents : "auto",
    position : "absolute",
    // opacity : visibleItem,
    // position: "relative",
    // animation: `counter-orbit ${orbitTime} linear infinite`
  }}
//   onClick={handlePlanetClick(item.id , )}
  onClick={()=>{
    
    setExpandedItem(isExpanded ? null : item.id)
    setVisibleItem(!isExpanded ? 0 : parseInt(item.id+1))
    // setIsRotating(!isRotating)
      // Pause rotation when opening modal
  if (!isExpanded) setIsRotating(false);
    setTimeout(() => {
      const Galaxy_Container = document.getElementById("Galaxy_Container")
      Galaxy_Container?.scrollIntoView({behavior: "smooth" , block : "start"})
    }, 0);
  }}
  
  className={clsx(
    "absolute pointer-events-auto cursor-pointer animate-counter-orbit",
    !isRotating && "animate-counter-orbit-none"
  )}
>
{
    visibleItem > 0 ?
    <div
    className={`bg-gradient-to-br ${getPriorityColor(item.priority)} p-3 rounded-full shadow-2xl border-2 border-white/30 flex items-center justify-center text-center font-extrabold text-white group relative overflow-hidden ${
      screenSize === "mobile"
        ? "w-16 h-16 text-xs"
        : screenSize === "tablet"
        ? "w-20 h-20 text-sm"
        : `w-36 h-36 ${isRTL ? "text-3xl" : "text-xl"}`
    }`}
    style={{
        transform: "rotate(0deg)",
         opacity : visibleItem,
}}

  >
    {/* Glow */}
    <div
      className={`absolute inset-0 bg-gradient-to-br ${getPriorityColor(item.priority)} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}
    ></div>

    {/* Text directly on planet */}
    <span className="relative drop-shadow-lg">
      {item.category}
    </span>
  </div>
  : ""
}

<Modal
  isArabic = {isRTL}
  isOpen={isExpanded}
  onClose={handleClosePanel}
  item={item}
  screenSize={screenSize}
/>

</div>

      </div>
    );
  })}
</div>

        </div>
        
      </div>

      {/* Control Panel */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/30 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 xxxs:min-w-[175px] ${
          screenSize === "mobile" ? "bottom-4" : "bottom-6"
        }`}
      >
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`text-white/70 hover:text-white transition-colors duration-500 ${
            screenSize === "mobile" ? "text-sm" : "text-lg"
          }`}
          disabled={!!expandedItem}
        >
          {isRotating && isRTL ? "إيقاف الدوران" : !isRotating && isRTL ? "تشغيل الدوران" 
          : isRotating && !isRTL ? "Pause Rotation" : !isRotating && !isRTL ? "Contiue Rotation" : ""}
        </button>
        <div className="w-px h-4 bg-white/30"></div>
        <span className={`text-white/70 ${screenSize === "mobile" ? "text-xs" : "text-sm"}`}>{items.length} {isRTL && items.length <= 1 ? "كوكب" : isRTL && items.length > 1 ? "كواكب" 
        : !isRTL && items.length <= 1 ? "Planet" : !isRTL && items.length > 1 ? "Planets" : ""}</span>
      </div>
    </div>
  )
}
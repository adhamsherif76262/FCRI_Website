import clsx from "clsx";
import { Star, Sparkles, Zap, X, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: GalaxyItem;       // make sure GalaxyItem is defined in your code
  screenSize: "mobile" | "tablet" | "desktop";
  isArabic : boolean;
}

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <Star className={`${"w-4 h-4"} my-auto`} />
      case "medium":
        return <Sparkles className={`${"w-4 h-4"} my-auto`} />
      case "low":
        return <Zap className={`${"w-4 h-4"} my-auto`} />
      default:
        return <Star className={`${"w-4 h-4"} my-auto`} />
    }
  }
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
  
const NestedSubItem: React.FC<{
  item: SubItem
  level: number
  screenSize: "mobile" | "tablet" | "desktop"
  isArabic : boolean
}> = ({ item, level, screenSize , isArabic}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  return (
    <div className={`${level > 0 ? "mr-4" : ""}`}>
      <div
        className={`group relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 hover:from-indigo-100 hover:via-purple-100 hover:to-pink-100 rounded-xl p-4 border border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 ${
          hasChildren ? "cursor-pointer" : ""
        }`}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-3">
          {hasChildren && (
            <button title={isExpanded ? "Collapse List" : "Expand List"}  className="mt-1 text-purple-600 hover:text-purple-800 transition-all duration-300 transform hover:scale-110">
              <div className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}>
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
              className={`text-gray-800 leading-loose group-hover:text-gray-900 transition-colors duration-200 font-black ${
                isArabic ? "xxxs:text-2xl xxxs:leading-relaxed sm:text-3xl sm:leading-loose" : "xxxs:text-lg xs:text-xl"
              }`}
            >
              {item.text}
            </p>
          </div>
        </div>

        {!hasChildren && (
          <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                className={`transform transition-all duration-300 ${
                  isExpanded ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <NestedSubItem isArabic={isArabic} item={child} level={level + 1} screenSize={screenSize} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


export default function Modal({ isOpen, onClose, item, screenSize , isArabic }: ModalProps) {
  const [mounted, setMounted] = useState(false);
useEffect(() => {
  if (isOpen) {
    // Lock background scroll
    document.body.style.overflow = "hidden";
  } else {
    // Restore scroll
    document.body.style.overflow = "";
  }
  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/40 "
          onClick={onClose}
      >
        <div
          className={`xxxs:w-[250px] xxs:w-[300px] xs:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] fixed bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-4 sm:p-6 animate-fade-in-up`}
          onClick={(e) => e.stopPropagation()}
          style={{
              maxHeight: "580px",
              overflowY: "auto",
              zIndex: 9999,
          }}
      >
              <button
                  title="Modal Close Button"
                    onClick={onClose}
                  className="absolute top-1 right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-200 z-50 shadow-lg cursor-pointer"
              >
                  <X className="w-3 h-3" />
              </button>

              <div className="flex sm:flex-row items-center justify-center xxxs:flex-col gap-3 mb-4">
                  <div
                      className={`p-2 mt-auto bg-gradient-to-br ${getPriorityColor(item.priority)} items-center justify-center my-auto rounded-lg text-white flex-shrink-0`}
                  >
                      {getPriorityIcon(item.priority)}
                  </div>
                  <div className="flex-1 min-w-0">
                      <h3
                          className={`text-gray-800 mb-2 leading-tight font-black text-center ${isArabic ? "xxxs:text-3xl xxs:text-4xl sm:ml-8" : "text-2xl sm:mr-8"}`}
                      >
                          {item.title}
                      </h3>
                      <p
                          className={clsx(
                            `text-gray-600 leading-loose font-black`,
                            isArabic ? "xxxs:text-2xl xs:text-3xl xs:leading-normal sm:text-right xxxs:text-center" 
                            : "xxxs:text-md xxxs:leading-snug xxs:text-xl sm:text-left xxxs:text-center"
                          )}
                      >
                          {item.content}
                      </p>
                  </div>
              </div>

              {item.subItems && item.subItems.length > 0 && (
                  <div className="space-y-3">
                      <div
                          className={`flex items-center gap-2 font-semibold text-gray-700 ${isArabic ? "xxxs:text-2xl sm:text-3xl" : "text-xl"}`}
                      >
                          {item.Sub_title && (<div className="w-4 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full font-extrabold text-2xl"></div>)}
                          {item.Sub_title}
                      </div>
                      <div className={clsx(
                        "space-y-2",
                        isArabic ? "text-2xl" : "text-xl"
                      )}>
                          {item.subItems.map((subItem, subIndex) => (
                              <NestedSubItem isArabic={isArabic} key={subIndex} item={subItem} level={0} screenSize={screenSize} />
                          ))}
                      </div>
                  </div>
              )}
        </div>
    </div>
    ,
    // document.getElementById("main-container")!
    document.body
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import LayeredVisionList from "./layered-vision-list";
import HexagonalMissionList from "./hexagonal-mission-list";
import FuturisticBulletSection from "./FuturisticBulletSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function UnifiedTabsSection({ isArabic , t } : any) {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const tabs = [
    { id: "vision", label: t.B6_Title },
    { id: "specializations", label: isArabic ? "التخصصات" : "Specializations" },
    { id: "goals", label: isArabic ? "الأهداف" : "Objectives" },
    { id: "mission", label: t.B3_Title},
  ];
console.log(t)
  return (
    <section className="w-full px-4 mt-4">
      
      {/* Tabs Header */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() =>
              setActiveTab((prev) => (prev === tab.id ? null : tab.id))
            }
            className={`px-6 py-3 rounded-full border font-bold transition
              ${activeTab === tab.id
                ? "bg-cyan-60s0 bg_Beige font-black text-black text-2xl"
                : "bg-white text-gray-700 hover:bg-gray-100 font-black text-2xl"}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="max-w-8xl mx-auto min-h-fit">
        <AnimatePresence mode="wait">
          {activeTab && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === "vision" && (
                <LayeredVisionList items={t.B6} isArabic={isArabic} />
              )}

              {activeTab === "specializations" && (
                    <div className="font-black w-full mt-12 rounded-3xl shadow-2xl border border-cyan-700/40 xl:smin-width bg_Beige">
                      <h3 className={clsx(
                        "xxxs:py-4 sm:py-8 text-center",
                        isArabic ? "xxxs:text-3xl xs:text-3xl sm:text-4xl" : "xxxs:text-xl xxs:text-2xl md:text-2xl lg:text-3xl"
                      )}>{isArabic ? "تخصصات المحاصيل" : "Crop Specializations"}</h3>
                      <ol className="grid md:grid-cols-6  xxxs:grid-cols-2 gap-2">
                        <li className={`bg_Gray hover:text-black ${isArabic ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isArabic ? "• الحبوب" : "• Cereals"}</li>
                        <li className={`bg_Gray hover:text-black ${isArabic ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isArabic ? "• البقول" : "• Legumes"}</li>
                        <li className={`bg_Gray hover:text-black ${isArabic ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isArabic ? "• الزيوت" : "• Oil Crops"}</li>
                        <li className={`bg_Gray hover:text-black ${isArabic ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isArabic ? "• الالياف" : "• Fibers"}</li>
                        <li className={`bg_Gray hover:text-black ${isArabic ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isArabic ? "• العلف" :  "• Fodder"}</li>
                        <li className={`bg_Gray hover:text-black ${isArabic ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isArabic ? "• البصل" :  "• Onion"}</li>
                      </ol>
                      <h3 className={clsx(
                        "xxxs:py-4 sm:py-8 text-center",
                        isArabic ? "xxxs:text-3xl xs:text-3xl sm:text-4xl" : "xxxs:text-xl xxs:text-2xl md:text-2xl lg:text-3xl"
                      )}>{isArabic ? "التخصصات الفنية" : "Technical Specializations"}</h3>
                      <ol className="grid lg:grid-cols-4 xxs:grid-cols-2 xxxs:grid-cols-1 gap-y-2 sm:gap-x-8 xs:gap-x-1 xxs:gap-x-0 mb-10">
                        <li className={`bg_Gray hover:text-black ${isArabic ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isArabic ? "• دراسة الخلية" : "• Cell Studies"}</li>
                        <li className={`bg_Gray hover:text-black ${isArabic ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isArabic ? "• فسسولوجيا المحاصيل" : "• Cell Physiology"}</li>
                        <li className={`bg_Gray hover:text-black ${isArabic ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isArabic ? "• تكنولوجيا البذور" : "• Seed Technology"}</li>
                        <li className={`bg_Gray hover:text-black ${isArabic ? "sm:text-3xl xxxs:text-2xl"  : "xxs:text-xl xxxs:text-md"}`}>{isArabic ? "• الاصول الوراثيه" : "• Genetic Resources"}</li>
                      </ol>
                    </div>
                // <SpecializationsSection isRTL={isArabic} />
              )}

              {activeTab === "goals" && (
                <FuturisticBulletSection
                    // title={t.B2_Title}
                    title={""}
                    bullets={t.B2}
                    grid ={true}
                    icon="bookOpen" // or "dot", "star", "bolt", etc.
                    rtl={isArabic}
                />
              )}

              {activeTab === "mission" && (
                <HexagonalMissionList items={t.B3} isArabic={isArabic} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
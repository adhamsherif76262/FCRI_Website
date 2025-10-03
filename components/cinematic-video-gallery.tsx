"use client"

import { useState, useRef, useEffect } from "react"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import clsx from "clsx"

interface Video {
  id: string
  title: string
  titleAr: string
  embedUrl: string
  thumbnail?: string // Made thumbnail optional since we'll auto-generate it
}

interface CinematicVideoGalleryProps {
  videos?: Video[]
  language?: "en" | "ar"
  Title?:string
  Sub_Title?:string
}

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return null
}

function extractVimeoId(url: string): string | null {
  // Decode HTML entities like &amp; to &
  const decodedUrl = url.replace(/&amp;/g, "&")

  const patterns = [/player\.vimeo\.com\/video\/(\d+)/, /vimeo\.com\/video\/(\d+)/, /vimeo\.com\/(\d+)/]

  for (const pattern of patterns) {
    const match = decodedUrl.match(pattern)
    if (match) return match[1]
  }

  return null
}

function getVideoThumbnail(embedUrl: string, customThumbnail?: string): string {
  // If custom thumbnail is provided, use it
  if (customThumbnail) return customThumbnail

  // Try YouTube
  const youtubeId = extractYouTubeId(embedUrl)
  if (youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
  }

  // Try Vimeo with improved thumbnail URL
  const vimeoId = extractVimeoId(embedUrl)
  if (vimeoId) {
    // Use Vimeo CDN thumbnail format which is more reliable
    return `https://i.vimeocdn.com/video/${vimeoId}_640x360.jpg`
  }

  // Fallback to placeholder
  return "/placeholder.svg?height=720&width=1280"
}

const defaultVideos: Video[] = [
  {
    id: "1",
    title: "Dr. Khaled Gad's TV Interview On The Farmer's Day",
    titleAr: "اللقاء التليفزيوني لدكتور خالد جاد في يوم الفلاح",
    embedUrl: "https://www.youtube.com/embed/Vz5NRqDhn78?si=pcY6fh17mcZYi3sy",
  },
  {
    id: "2",
    title: "Sustainable Farming Practices",
    titleAr: "ممارسات الزراعة المستدامة",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Irrigation Systems Overview",
    titleAr: "نظرة عامة على أنظمة الري",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Crop Rotation Benefits",
    titleAr: "فوائد تناوب المحاصيل",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "Pest Management Solutions",
    titleAr: "حلول إدارة الآفات",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "6",
    title: "Greenhouse Technology",
    titleAr: "تكنولوجيا الصوبات الزراعية",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "7",
    title: "Soil Health Management",
    titleAr: "إدارة صحة التربة",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "8",
    title: "Precision Agriculture",
    titleAr: "الزراعة الدقيقة",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "9",
    title: "Organic Fertilizers Guide",
    titleAr: "دليل الأسمدة العضوية",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "10",
    title: "Water Conservation Methods",
    titleAr: "طرق الحفاظ على المياه",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "11",
    title: "Vertical Farming Innovation",
    titleAr: "ابتكار الزراعة العمودية",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "12",
    title: "The Field Day Of Wheat Video",
    titleAr: "فيديو يوم الحقل للقمح",
    embedUrl: "https://player.vimeo.com/video/1123489285?badge=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1",
  }
]

export default function CinematicVideoGallery({ videos = defaultVideos, language = "ar"  , Title , Sub_Title}: CinematicVideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [featuredVideo,] = useState<Video>(videos[0])
  const [isTheaterMode, setIsTheaterMode] = useState(false)
  const [currentTheaterIndex, setCurrentTheaterIndex] = useState(0)
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set())
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)
  const theaterRef = useRef<HTMLDivElement>(null)

  const isRTL = language === "ar"

  const handleVideoClick = (video: Video, index: number) => {
    setSelectedVideo(video)
    setCurrentTheaterIndex(index)
    setIsTheaterMode(true)
    setPlayingVideoId(video.id)
    setLoadedVideos((prev) => new Set(prev).add(video.id))

    setTimeout(() => {
      theaterRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 100)
  }

  const handleFeaturedClick = () => {
    const index = videos.findIndex((v) => v.id === featuredVideo.id)
    handleVideoClick(featuredVideo, index)
  }

  const closeTheater = () => {
    setIsTheaterMode(false)
    setSelectedVideo(null)
    setPlayingVideoId(null)
  }

  const previousVideo = () => {
    const newIndex = currentTheaterIndex > 0 ? currentTheaterIndex - 1 : videos.length - 1
    setCurrentTheaterIndex(newIndex)
    setSelectedVideo(videos[newIndex])
    setPlayingVideoId(videos[newIndex].id)
    setLoadedVideos((prev) => new Set(prev).add(videos[newIndex].id))
  }

  const nextVideo = () => {
    const newIndex = currentTheaterIndex < videos.length - 1 ? currentTheaterIndex + 1 : 0
    setCurrentTheaterIndex(newIndex)
    setSelectedVideo(videos[newIndex])
    setPlayingVideoId(videos[newIndex].id)
    setLoadedVideos((prev) => new Set(prev).add(videos[newIndex].id))
  }

  useEffect(() => {
    if (isTheaterMode) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "0px"
    } else {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }, [isTheaterMode])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isTheaterMode) return

      if (e.key === "Escape") {
        closeTheater()
      } else if (e.key === "ArrowLeft") {
        if (isRTL) {
          nextVideo()
        } else {
          previousVideo()
        }
      } else if (e.key === "ArrowRight") {
        if (isRTL) {
          previousVideo()
        } else {
          nextVideo()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isTheaterMode, currentTheaterIndex, isRTL])

  return (
    <div className="w-full min-h-screen bg-gradient-to-br text-black font-bold bg_Beige mb-24 mt-12 rounded-3xl shadow-2xl">
    {/* <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mb-24 mt-12 rounded-3xl shadow-2xl"> */}
      <div className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <h1
            className={clsx(
                "text-3xl font-bold mb-3 sm:mb-4 text-balance",
                isRTL ? "xs:text-4xl xxxs:leading-normal" : "xxxs:text-2xl xs:text-3xl xxxs:leading-normal"
            )}
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            {Title}
            {/* {isRTL ? "مكتبة الفيديو الزراعية" : "Agricultural Video Library"} */}
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-slate-400 text-pretty"
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            {Sub_Title}
            {/* {  
             isRTL
              ? "اكتشف أحدث التقنيات والممارسات الزراعية من خلال مجموعتنا المختارة من الفيديوهات التعليمية"
              : "Discover the latest agricultural techniques and practices through our curated collection of educational videos"
            } */}
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="relative group cursor-pointer" onClick={handleFeaturedClick}>
                <div
                  className={`relative aspect-video rounded-2xl overflow-hidden bg-slate-800 ${
                    playingVideoId === featuredVideo.id ? "ring-4 ring-emerald-500 animate-video-playing" : ""
                  }`}
                >
                  <img
                    src={getVideoThumbnail(featuredVideo.embedUrl, featuredVideo.thumbnail) || "/placeholder.svg"}
                    alt={isRTL ? featuredVideo.titleAr : featuredVideo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white fill-white" />
                    </div>
                  </div>

                  {playingVideoId === featuredVideo.id && (
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                      <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-500/90 backdrop-blur-sm">
                        <div className="flex gap-1">
                          <div className="w-1 h-3 bg-white rounded-full animate-sound-wave-1" />
                          <div className="w-1 h-3 bg-white rounded-full animate-sound-wave-2" />
                          <div className="w-1 h-3 bg-white rounded-full animate-sound-wave-3" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">{isRTL ? "قيد التشغيل" : "Playing"}</span>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-500/90 backdrop-blur-sm text-xs sm:text-sm font-semibold">
                      {isRTL ? "مميز" : "Featured"}
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6" style={{ direction: isRTL ? "rtl" : "ltr" }}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-balance">
                    {isRTL ? featuredVideo.titleAr : featuredVideo.title}
                  </h2>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-1 gap-4">
                {videos.slice(1, 3).map((video, index) => (
                  <div
                    key={video.id}
                    className="relative group cursor-pointer"
                    onClick={() => handleVideoClick(video, index + 1)}
                    style={{
                      animation: `video-fade-in 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div
                      className={`relative aspect-video rounded-xl overflow-hidden bg-slate-800 ${
                        playingVideoId === video.id ? "ring-4 ring-emerald-500 animate-video-playing" : ""
                      }`}
                    >
                      <img
                        src={getVideoThumbnail(video.embedUrl, video.thumbnail) || "/placeholder.svg"}
                        alt={isRTL ? video.titleAr : video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                      </div>

                      {playingVideoId === video.id && (
                        <div className="absolute top-2 right-2">
                          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/90 backdrop-blur-sm">
                            <div className="flex gap-0.5">
                              <div className="w-0.5 h-2 bg-white rounded-full animate-sound-wave-1" />
                              <div className="w-0.5 h-2 bg-white rounded-full animate-sound-wave-2" />
                              <div className="w-0.5 h-2 bg-white rounded-full animate-sound-wave-3" />
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="absolute top-2 left-2">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white backdrop-blur-sm flex items-center justify-center text-xs font-bold">
                        {/* <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-xs font-bold"> */}
                          {String(index + 2).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    <div className="mt-2" style={{ direction: isRTL ? "rtl" : "ltr" }}>
                      <h3 className="text-sm sm:text-base font-semibold line-clamp-2 text-balance">
                        {isRTL ? video.titleAr : video.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ direction: isRTL ? "rtl" : "ltr" }}>
              {isRTL ? "المزيد من الفيديوهات" : "More Videos"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {videos.slice(3).map((video, index) => (
                <div
                  key={video.id}
                  className="relative group cursor-pointer"
                  onClick={() => handleVideoClick(video, index + 3)}
                  style={{
                    animation: `video-fade-in 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div
                    className={`relative aspect-video rounded-xl overflow-hidden bg-slate-800 ${
                      playingVideoId === video.id ? "ring-4 ring-emerald-500 animate-video-playing" : ""
                    }`}
                  >
                    <img
                      src={getVideoThumbnail(video.embedUrl, video.thumbnail) || "/placeholder.svg"}
                      alt={isRTL ? video.titleAr : video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>

                    {playingVideoId === video.id && (
                      <div className="absolute top-2 right-2">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/90 backdrop-blur-sm">
                          <div className="flex gap-0.5">
                            <div className="w-0.5 h-2 bg-white rounded-full animate-sound-wave-1" />
                            <div className="w-0.5 h-2 bg-white rounded-full animate-sound-wave-2" />
                            <div className="w-0.5 h-2 bg-white rounded-full animate-sound-wave-3" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="absolute top-2 left-2">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white backdrop-blur-sm flex items-center justify-center text-xs font-bold">
                      {/* <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-xs font-bold"> */}
                        {String(index + 4).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  <div className="mt-2" style={{ direction: isRTL ? "rtl" : "ltr" }}>
                    <h3 className="text-sm sm:text-base font-semibold line-clamp-2 text-balance">
                      {isRTL ? video.titleAr : video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isTheaterMode && selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-start justify-center p-4 pt-8 pb-20 overflow-y-auto"
          onClick={closeTheater}
          style={{ animation: "theater-open 0.3s ease-out" }}
        >
          <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()} ref={theaterRef}>
            <div className="flex items-center justify-between mb-6 gap-4">
              <button
                onClick={isRTL ? nextVideo : previousVideo}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110 flex-shrink-0"
                aria-label="Previous video"
              >
                {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
              </button>

              <div className="flex-1 text-center px-4">
                <p className="text-sm text-slate-400">
                  {currentTheaterIndex + 1} / {videos.length}
                </p>
              </div>

              <button
                onClick={isRTL ? previousVideo : nextVideo}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110 flex-shrink-0"
                aria-label="Next video"
              >
                {isRTL ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
              </button>

              <button
                onClick={closeTheater}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 flex-shrink-0"
                aria-label="Close theater mode"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
              {loadedVideos.has(selectedVideo.id) ? (
                <iframe
                  src={`${selectedVideo.embedUrl}?autoplay=1`}
                  title={isRTL ? selectedVideo.titleAr : selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-pulse text-slate-400">Loading video...</div>
                </div>
              )}
            </div>

            <div className="mt-6" style={{ direction: isRTL ? "rtl" : "ltr" }}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-balance">
                {isRTL ? selectedVideo.titleAr : selectedVideo.title}
              </h2>
              <p className="text-slate-400">
                {isRTL ? "فيديو رقم" : "Video"} {currentTheaterIndex + 1}
              </p>
            </div>

            <div className="mt-6 overflow-x-auto pb-2">
              <div className="flex gap-3 min-w-max">
                {videos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => {
                      setCurrentTheaterIndex(index)
                      setSelectedVideo(video)
                      setPlayingVideoId(video.id)
                      setLoadedVideos((prev) => new Set(prev).add(video.id))
                    }}
                    className={`relative flex-shrink-0 w-32 sm:w-40 aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentTheaterIndex
                        ? "ring-2 ring-emerald-500 scale-105"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={getVideoThumbnail(video.embedUrl, video.thumbnail) || "/placeholder.svg"}
                      alt={isRTL ? video.titleAr : video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-1 left-1 right-1">
                      <p className="text-xs font-semibold line-clamp-2 text-balance">
                        {isRTL ? video.titleAr : video.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Play, Youtube, Facebook, BookOpen, ChevronRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

type Platform = "youtube" | "facebook"

type Sermon = {
  id: string
  title: string
  speaker: string
  date: string
  platform: Platform
  youtubeId?: string
  facebookVideoUrl?: string
  /** Local artwork for the ministry library */
  thumbnail: string
}

const sermons: Sermon[] = [
  {
    id: "1",
    title: "Walking in Divine Purpose",
    speaker: "Prophetess Tracey Pilime",
    date: "Jan 2026",
    platform: "youtube",
    youtubeId: "M7lc1UVf-VE",
    thumbnail: "/images/prophetess.jpg",
  },
  {
    id: "2",
    title: "The Power of Prophetic Declaration",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 2025",
    platform: "youtube",
    youtubeId: "M7lc1UVf-VE",
    thumbnail: "/images/prophetess-3.jpg",
  },
  {
    id: "3",
    title: "Breaking Generational Curses",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 2025",
    platform: "facebook",
    facebookVideoUrl: "https://www.facebook.com/facebook/videos/10153231379946729/",
    thumbnail: "/church-deliverance-service.jpg",
  },
  {
    id: "4",
    title: "The Anointing That Breaks Yokes",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 2025",
    platform: "facebook",
    facebookVideoUrl: "https://www.facebook.com/facebook/videos/10153231379946729/",
    thumbnail: "/anointing-prayer-church.jpg",
  },
  {
    id: "5",
    title: "Releasing Your Faith",
    speaker: "Prophetess Tracey Pilime",
    date: "Nov 2025",
    platform: "youtube",
    youtubeId: "M7lc1UVf-VE",
    thumbnail: "/faith-teaching-church.jpg",
  },
  {
    id: "6",
    title: "Positioning for Divine Visitation",
    speaker: "Prophetess Tracey Pilime",
    date: "Nov 2025",
    platform: "facebook",
    facebookVideoUrl: "https://www.facebook.com/facebook/videos/10153231379946729/",
    thumbnail: "/divine-presence-worship.jpg",
  },
]

const declarations: { text: string; scripture: string; verse?: string }[] = [
  { text: "I am healed by His stripes; divine health is my portion.", scripture: "Isaiah 53:5", verse: "But he was wounded for our transgressions… and with his stripes we are healed." },
  { text: "The Lord makes my way straight; no weapon formed against me prospers.", scripture: "Isaiah 54:17", verse: "No weapon that is formed against thee shall prosper." },
  { text: "I am more than a conqueror through Christ who loves me.", scripture: "Romans 8:37", verse: "Nay, in all these things we are more than conquerors through him that loved us." },
  { text: "My steps are ordered by the Lord; He delights in my way.", scripture: "Psalm 37:23", verse: "The steps of a good man are ordered by the Lord: and he delighteth in his way." },
  { text: "I dwell in the secret place of the Most High; I abide under His shadow.", scripture: "Psalm 91:1", verse: "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty." },
  { text: "The joy of the Lord is my strength; I rise above every heaviness.", scripture: "Nehemiah 8:10", verse: "The joy of the Lord is your strength." },
  { text: "I cast every care on Him; His peace guards my heart and mind.", scripture: "Philippians 4:6-7", verse: "Be careful for nothing… And the peace of God… shall keep your hearts and minds." },
  { text: "I decree open doors that no man can shut.", scripture: "Revelation 3:8", verse: "I have set before thee an open door, and no man can shut it." },
  { text: "The Lord fights for me; I hold my peace and see His salvation.", scripture: "Exodus 14:14", verse: "The Lord shall fight for you, and ye shall hold your peace." },
  { text: "I am the head and not the tail; above only, not beneath.", scripture: "Deuteronomy 28:13", verse: "The Lord shall make thee the head, and not the tail; and thou shalt be above only." },
  { text: "My household serves the Lord; salvation has come to my house.", scripture: "Joshua 24:15", verse: "As for me and my house, we will serve the Lord." },
  { text: "I walk in wisdom; the Spirit of God teaches me all things.", scripture: "John 14:26", verse: "The Holy Ghost… shall teach you all things." },
  { text: "I am strong in the Lord and in the power of His might.", scripture: "Ephesians 6:10", verse: "Be strong in the Lord, and in the power of his might." },
  { text: "The Lord supplies all my need according to His riches in glory.", scripture: "Philippians 4:19", verse: "My God shall supply all your need according to his riches in glory." },
  { text: "I decree fruitfulness in every dry place He sends me.", scripture: "Isaiah 44:4", verse: "They shall spring up as among the grass, as willows by the water courses." },
  { text: "The light of God shines on my path; I do not walk in darkness.", scripture: "Psalm 119:105", verse: "Thy word is a lamp unto my feet, and a light unto my path." },
  { text: "I am accepted in the Beloved; shame has no seat in my life.", scripture: "Ephesians 1:6", verse: "Wherein he hath made us accepted in the beloved." },
  { text: "Angels encamp around me; I am kept in all my ways.", scripture: "Psalm 34:7", verse: "The angel of the Lord encampeth round about them that fear him." },
  { text: "I speak life; my words align with heaven’s counsel.", scripture: "Proverbs 18:21", verse: "Death and life are in the power of the tongue." },
  { text: "The Lord restores what was lost; my latter end increases more than my former.", scripture: "Haggai 2:9", verse: "The glory of this latter house shall be greater than of the former." },
]

function embedSrc(sermon: Sermon): string | null {
  if (sermon.platform === "youtube" && sermon.youtubeId) {
    return `https://www.youtube.com/embed/${sermon.youtubeId}?rel=0`
  }
  if (sermon.platform === "facebook" && sermon.facebookVideoUrl) {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(sermon.facebookVideoUrl)}&show_text=false&width=1280&height=720`
  }
  return null
}

export default function SermonsPage() {
  const [tab, setTab] = useState<"watch" | "declarations">("watch")
  const [selected, setSelected] = useState<Sermon>(sermons[0])
  const [filter, setFilter] = useState<"all" | Platform>("all")

  const filtered = useMemo(() => {
    if (filter === "all") return sermons
    return sermons.filter((s) => s.platform === filter)
  }, [filter])

  const src = embedSrc(selected)

  return (
    <div className="relative bg-background min-h-screen text-white overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[44vh] sm:min-h-[50vh] flex flex-col justify-end overflow-hidden">
        <Image
          src="/hero2.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pb-12 sm:pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-gold/75 font-medium">Media library</span>
            <h1 className="mt-3 font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Sermons &amp; declarations</h1>
            <p className="mt-4 max-w-xl text-white/45 text-sm sm:text-base leading-relaxed">
              Teaching and worship from our house — watch in-page, then declare God’s Word over your life.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-linear-to-r from-transparent via-gold/20 to-transparent" />

      <main className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 pb-24">
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
          {(
            [
              { id: "watch" as const, label: "Watch", sub: "Sermons & messages" },
              { id: "declarations" as const, label: "Declarations", sub: "With scripture" },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`relative px-6 sm:px-8 py-3.5 text-left rounded-sm border transition-all duration-300 ${
                tab === t.id
                  ? "border-gold/40 bg-gold/10 text-white shadow-[0_0_40px_-12px_rgba(200,170,80,0.35)]"
                  : "border-white/8 bg-white/2 text-white/45 hover:text-white/75 hover:border-white/15"
              }`}
            >
              <span className="block font-heading font-semibold text-sm sm:text-base tracking-tight">{t.label}</span>
              <span className="block text-[11px] text-white/30 mt-1">{t.sub}</span>
              {tab === t.id && (
                <motion.span
                  layoutId="sermon-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "watch" && (
            <motion.div
              key="watch"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Featured player + meta */}
              <div className="grid lg:grid-cols-[1fr_380px] gap-6 lg:gap-8 items-start">
                <div className="space-y-0 rounded-sm overflow-hidden border border-white/8 bg-black/40 shadow-2xl shadow-black/40">
                  <div className="relative aspect-video w-full bg-black">
                    {src ? (
                      <iframe
                        title={selected.title}
                        src={src}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm">No embed available</div>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 border-t border-white/6 bg-white/2">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {selected.platform === "youtube" ? (
                        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm bg-red-500/15 text-red-300 border border-red-500/20">
                          <Youtube className="w-3 h-3" /> YouTube
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm bg-[#1877F2]/15 text-blue-300 border border-[#1877F2]/25">
                          <Facebook className="w-3 h-3" /> Facebook
                        </span>
                      )}
                      <span className="text-[11px] text-white/35">{selected.date}</span>
                    </div>
                    <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">{selected.title}</h2>
                    <p className="text-white/40 text-sm mt-2">{selected.speaker}</p>
                  </div>
                </div>

                {/* Sidebar: filters + list */}
                <aside className="flex flex-col gap-4 lg:sticky lg:top-28">
                  <div className="flex flex-wrap gap-2">
                    {(["all", "youtube", "facebook"] as const).map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => {
                          setFilter(f)
                          const next = f === "all" ? sermons : sermons.filter((s) => s.platform === f)
                          if (next.length && !next.find((s) => s.id === selected.id)) setSelected(next[0])
                        }}
                        className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] rounded-sm border transition-colors ${
                          filter === f ? "border-gold/50 text-gold bg-gold/8" : "border-white/10 text-white/35 hover:border-white/20"
                        }`}
                      >
                        {f === "all" ? "All" : f === "youtube" ? "YouTube" : "Facebook"}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] uppercase tracking-widest text-white/25">Library</p>
                  <div className="flex flex-col gap-2 max-h-[min(62vh,560px)] overflow-y-auto pr-1 scrollbar-hide">
                    {filtered.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelected(s)}
                        className={`group relative flex gap-3 p-2 rounded-sm border text-left transition-all duration-300 ${
                          selected.id === s.id
                            ? "border-gold/35 bg-gold/6"
                            : "border-transparent hover:border-white/10 hover:bg-white/3"
                        }`}
                      >
                        <div className="relative w-28 sm:w-32 shrink-0 aspect-video rounded-sm overflow-hidden bg-black/50">
                          <Image src={s.thumbnail} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="128px" />
                          <span className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-8 h-8 text-white fill-white drop-shadow-md" />
                          </span>
                          {s.platform === "youtube" && (
                            <span className="absolute bottom-1 right-1 w-5 h-5 rounded bg-red-600/90 flex items-center justify-center">
                              <Youtube className="w-3 h-3 text-white" />
                            </span>
                          )}
                          {s.platform === "facebook" && (
                            <span className="absolute bottom-1 right-1 w-5 h-5 rounded bg-[#1877F2]/90 flex items-center justify-center">
                              <Facebook className="w-3 h-3 text-white" />
                            </span>
                          )}
                        </div>
                        <div className="min-w-0 flex-1 py-0.5 flex flex-col justify-center">
                          <p className="font-heading text-sm font-semibold text-white line-clamp-2 leading-snug group-hover:text-gold transition-colors">
                            {s.title}
                          </p>
                          <p className="text-[11px] text-white/30 mt-1">{s.date}</p>
                        </div>
                        <ChevronRight className={`w-4 h-4 shrink-0 self-center ${selected.id === s.id ? "text-gold" : "text-white/10"}`} />
                      </button>
                    ))}
                  </div>
                </aside>
              </div>

              {/* Full-width strip: more ministry visuals */}
              <div className="pt-4 border-t border-white/6">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/25 mb-4">From our services</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {[
                    "/services.png",
                    "/images/prophetess.jpeg",
                    "/church-sermon-worship-service.jpg",
                    "/images/prophetess-6.jpg",
                  ].map((srcImg) => (
                    <div key={srcImg} className="relative aspect-16/10 rounded-sm overflow-hidden border border-white/8 opacity-90 hover:opacity-100 transition-opacity">
                      <Image src={srcImg} alt="" fill className="object-cover" sizes="25vw" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {tab === "declarations" && (
            <motion.div
              key="declarations"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-white/40 text-sm max-w-2xl mb-10">
                Prophetic declarations from Prophetess Tracey Pilime — speak these aloud and anchor them in Scripture.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                {declarations.map((d, i) => (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: (i % 6) * 0.04 }}
                    className="group relative border border-white/6 bg-white/2 p-5 sm:p-6 hover:border-gold/25 hover:bg-white/3 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <BookOpen className="w-4 h-4 text-gold/60 shrink-0 mt-0.5" />
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gold/70 font-medium">{d.scripture}</span>
                    </div>
                    <p className="font-heading text-base sm:text-lg text-white leading-snug mb-4">{d.text}</p>
                    {d.verse && (
                      <blockquote className="text-white/35 text-xs sm:text-sm leading-relaxed border-l-2 border-gold/25 pl-4 italic">{d.verse}</blockquote>
                    )}
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

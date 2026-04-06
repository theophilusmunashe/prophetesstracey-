"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, Facebook, ExternalLink, Radio } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import NextLiveService from "@/components/next-live-service"

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const

const servicesByDay: Record<string, { title: string; time: string; description: string }[]> = {
  Sunday: [
    { title: "Sunday Service", time: "10:00 — 13:00", description: "A powerful time of worship, prayer, and life-changing teaching of the Word." },
  ],
  Monday: [
    { title: "Word Service", time: "13:00 — 14:00", description: "An hour dedicated to in-depth study of the Bible." },
    { title: "School of Spirit", time: "17:30 — 18:30", description: "Practical training and equipping for ministry and service in the house of God." },
  ],
  Tuesday: [
    { title: "Prophetic Service", time: "13:00 — 14:00", description: "A time to receive personal prophetic ministry and direction from the Lord." },
  ],
  Wednesday: [
    { title: "Deliverance Service", time: "13:00 — 14:00", description: "Experience freedom from bondage through the power of prayer and deliverance." },
    { title: "Worship Service", time: "17:30 — 18:30", description: "An evening of intimate worship and communion with the Holy Spirit." },
  ],
  Thursday: [
    { title: "Prophetic Service", time: "13:00 — 14:00", description: "Encounter the supernatural power of God through personal prophetic ministry." },
    { title: "Partners Service", time: "17:30 — 18:30", description: "A special service for partners of the ministry. Receive impartation and vision updates." },
    { title: "Diaspora Zoom Service", time: "20:00 — 21:00", description: "Connect with our international family through our online Zoom service." },
  ],
  Friday: [
    { title: "PUSH Prayer", time: "13:00 — 14:00", description: "Pray Until Something Happens — fervent prayer for personal, national, and global revival." },
  ],
  Saturday: [
    { title: "PUSH Prayer", time: "14:30 — 15:30", description: "Pray Until Something Happens — persistent prayer for breakthrough and revival." },
  ],
}

function getTodayIndex() {
  return new Date().getDay()
}

const FACEBOOK_PAGE = "https://www.facebook.com/prophetesstraceypilime"

export default function ServicesPage() {
  const [activeDay, setActiveDay] = useState<string>(days[getTodayIndex()])
  const services = servicesByDay[activeDay] || []

  return (
    <div className="relative bg-background min-h-screen text-white">
      <Navigation />

      {/* ── Hero Banner ── */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/services.png"
          alt="Congregation worshipping"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 sm:pb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-medium mb-3"
          >
            Weekly Schedule
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]"
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* ── Next Live Service ── */}
      <section className="relative py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex justify-center">
          <NextLiveService />
        </div>
      </section>

      {/* ── Day Selector + Services ── */}
      <section className="relative py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Day tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-1 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide mb-10 sm:mb-14"
          >
            {days.map((day) => {
              const isActive = activeDay === day
              const isToday = days[getTodayIndex()] === day
              return (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`relative shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-background bg-gold"
                      : "text-white/40 hover:text-white/70 bg-white/5 hover:bg-white/8"
                  }`}
                >
                  <span className="hidden sm:inline">{day}</span>
                  <span className="sm:hidden">{day.slice(0, 3)}</span>
                  {isToday && !isActive && (
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-gold" />
                  )}
                </button>
              )
            })}
          </motion.div>

          {/* Active day heading */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center gap-4 mb-8 sm:mb-10">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {activeDay}
                </h2>
                <div className="flex-1 h-px bg-white/8" />
                <span className="text-xs sm:text-sm text-white/30 uppercase tracking-widest">
                  {services.length} {services.length === 1 ? "Service" : "Services"}
                </span>
              </div>

              {/* Service cards */}
              <div className="space-y-4 sm:space-y-5">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title + service.time}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group relative grid sm:grid-cols-[1fr_auto] gap-4 sm:gap-8 items-start p-6 sm:p-8 border border-white/6 hover:border-gold/25 bg-white/2 hover:bg-white/4 transition-all duration-500"
                  >
                    {/* Left gold accent */}
                    <div className="absolute left-0 top-6 bottom-6 w-px bg-gold/0 group-hover:bg-gold/50 transition-colors duration-500" />

                    <div>
                      <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/45 text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-2.5 text-white/50 sm:pt-1">
                      <Clock className="w-4 h-4 text-gold/60" />
                      <span className="text-sm sm:text-base font-medium whitespace-nowrap">{service.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Facebook: page preview + live embed ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/2 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/15 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-14"
          >
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold/70 font-medium">Live & replays</span>
            <h3 className="mt-3 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Facebook — Prophetess Tracey Pilime
            </h3>
            <p className="mt-3 text-white/40 text-sm sm:text-base max-w-2xl mx-auto">
              Follow the official page for live services, clips, and updates. Preview below matches how your page appears on Facebook; the panel loads Meta’s embedded timeline.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-8 lg:gap-10 items-start">
            {/* Stylized Facebook page representation */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-lg overflow-hidden border border-white/10 bg-[#18191a] shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="h-9 bg-[#242526] flex items-center px-3 gap-2 border-b border-white/5">
                <Facebook className="w-4 h-4 text-[#1877F2]" />
                <span className="text-[11px] text-white/45">Page preview</span>
              </div>
              <div className="relative h-36 sm:h-40 bg-[#1c1e21]">
                <Image
                  src="/hero2.png"
                  alt=""
                  fill
                  className="object-cover object-[center_25%]"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#18191a] via-transparent to-black/20" />
              </div>
              <div className="px-4 pb-5 -mt-11 relative">
                <div className="flex items-end gap-3">
                  <div className="relative w-[88px] h-[88px] shrink-0 rounded-full border-[3px] border-[#18191a] bg-[#0d2818] overflow-hidden shadow-lg">
                    <Image
                      src="/images/hogim logo.png"
                      alt="Hope Of Glory"
                      fill
                      className="object-contain p-2"
                      sizes="88px"
                    />
                  </div>
                  <div className="min-w-0 pb-1">
                    <p className="font-heading font-bold text-white text-base leading-tight line-clamp-2">
                      Hope Of Glory International Ministries
                    </p>
                    <p className="text-[13px] text-white/45 mt-0.5 truncate">@prophetesstraceypilime</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <a
                    href={FACEBOOK_PAGE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md bg-[#1877F2] hover:bg-[#166fe5] text-white text-sm font-semibold transition-colors"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                    Follow
                  </a>
                  <a
                    href={FACEBOOK_PAGE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md bg-white/8 hover:bg-white/12 text-white/90 text-sm font-medium transition-colors"
                  >
                    <Radio className="w-3.5 h-3.5 text-red-400" />
                    Watch
                  </a>
                </div>
                <p className="text-[11px] text-white/30 mt-4 leading-relaxed border-t border-white/6 pt-3">
                  Same public page as{" "}
                  <a href={FACEBOOK_PAGE} className="text-[#1877F2] hover:underline break-all">
                    facebook.com/prophetesstraceypilime
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Embedded Facebook Page (official plugin) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="flex flex-col min-h-[480px] rounded-lg overflow-hidden border border-white/8 bg-white/2"
            >
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/6 bg-white/3">
                <span className="text-xs text-white/50 uppercase tracking-wider">Page timeline</span>
                <a
                  href={FACEBOOK_PAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold-light transition-colors"
                >
                  Open in Facebook
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex-1 min-h-[420px] bg-[#0a0a0a]">
                <iframe
                  title="Prophetess Tracey Pilime on Facebook"
                  src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FACEBOOK_PAGE)}&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                  width={500}
                  height={700}
                  className="w-full h-full min-h-[420px] border-0"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <p className="text-[10px] text-white/25 px-4 py-2 text-center border-t border-white/6">
                If the feed doesn’t load, your browser may block third-party cookies — use “Open in Facebook” above.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

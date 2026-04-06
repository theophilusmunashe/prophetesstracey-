"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin, Sparkles } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const events = [
  {
    id: "easter",
    title: "Easter Conference",
    tagline: "Resurrection power · Word · Worship",
    dateLabel: "3 — 5 April 2026",
    days: [
      { label: "Thu 3 Apr", detail: "Opening night" },
      { label: "Fri 4 Apr", detail: "Full day sessions" },
      { label: "Sat 5 Apr", detail: "Closing celebration" },
    ],
    location: "Hope Of Glory International Ministries",
    description:
      "A three-day gathering to celebrate the risen Christ with powerful teaching, prophetic ministry, and corporate worship.",
    featured: true,
  },
  {
    id: "passover",
    title: "Passover Night",
    tagline: "A sacred evening of remembrance",
    dateLabel: "3 April 2026",
    days: [{ label: "Thu 3 Apr", detail: "Evening service" }],
    location: "Main Sanctuary & streamed online",
    description:
      "Join us as we remember the Lamb and encounter God in a night of covenant, prayer, and expectation.",
    featured: false,
  },
] as const

export default function EventsPage() {
  return (
    <div className="relative bg-background min-h-screen text-white overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[52vh] min-h-[320px] sm:h-[58vh] flex flex-col justify-end overflow-hidden">
        <Image
          src="/services.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/55 to-black/40" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pb-12 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.35em] text-gold/80 font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold/60" />
              Gatherings
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Events
            </h1>
            <p className="mt-4 max-w-xl text-white/45 text-sm sm:text-base leading-relaxed">
              Mark your calendar — moments that shape faith, family, and the nations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Decorative line */}
      <div className="h-px bg-linear-to-r from-transparent via-gold/25 to-transparent" />

      <main className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        {/* Easter — featured */}
        {events
          .filter((e) => e.featured)
          .map((event, idx) => (
            <motion.article
              key={event.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="relative mb-16 sm:mb-24 group"
            >
              <div className="relative border border-gold/25 bg-gold/10 backdrop-blur-sm overflow-hidden transition-colors duration-300 group-hover:border-gold/35 group-hover:bg-gold/12">
                <div className="relative p-8 sm:p-10 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="max-w-2xl">
                      <span className="text-[11px] uppercase tracking-[0.28em] text-gold/70 font-medium">
                        Featured
                      </span>
                      <h2 className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        {event.title}
                      </h2>
                      <p className="mt-2 text-gold/80 text-sm sm:text-base font-medium">{event.tagline}</p>
                      <p className="mt-6 text-white/50 text-sm sm:text-base leading-relaxed">{event.description}</p>
                    </div>
                    <div className="shrink-0 lg:text-right">
                      <div className="inline-flex items-center gap-2 text-gold font-heading text-xl sm:text-2xl font-semibold">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 opacity-80" />
                        {event.dateLabel}
                      </div>
                      <div className="mt-3 flex items-start gap-2 text-white/35 text-sm justify-end">
                        <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                        {event.location}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 grid sm:grid-cols-3 gap-4">
                    {event.days.map((d, i) => (
                      <motion.div
                        key={d.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                        className="relative p-5 border border-white/6 bg-background/40 hover:border-gold/25 transition-colors duration-300"
                      >
                        <p className="font-heading font-semibold text-white">{d.label}</p>
                        <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">{d.detail}</p>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

        {/* Passover */}
        {events
          .filter((e) => !e.featured)
          .map((event, idx) => (
            <motion.article
              key={event.id}
              custom={idx + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="relative group transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute -inset-px rounded-sm bg-linear-to-br from-white/10 via-transparent to-gold/10 opacity-50 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="relative border border-white/8 bg-white/2 p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
                <div className="max-w-xl">
                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {event.title}
                  </h2>
                  <p className="mt-2 text-gold/75 text-sm font-medium">{event.tagline}</p>
                  <p className="mt-5 text-white/50 text-sm sm:text-base leading-relaxed">{event.description}</p>
                </div>
                <div className="mt-8 lg:mt-0 lg:text-right shrink-0 space-y-3">
                  <p className="font-heading text-lg sm:text-xl text-white flex items-center gap-2 lg:justify-end">
                    <Calendar className="w-5 h-5 text-gold/70" />
                    {event.dateLabel}
                  </p>
                  <p className="text-sm text-white/35 flex items-start gap-2 lg:justify-end">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    {event.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 sm:mt-20 text-center text-white/25 text-xs uppercase tracking-[0.2em]"
        >
          More gatherings announced soon
        </motion.p>
      </main>

      <Footer />
    </div>
  )
}

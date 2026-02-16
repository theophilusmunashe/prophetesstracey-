"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Play, Clock, Eye } from "lucide-react"

const sermons = [
  {
    title: "Walking in Divine Purpose",
    speaker: "Prophetess Tracey Pilime",
    date: "Jan 5, 2026",
    duration: "1:24:00",
    views: "2.3K",
    thumbnail: "/church-sermon-worship.jpg",
  },
  {
    title: "The Power of Prophetic Declaration",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 29, 2025",
    duration: "1:15:00",
    views: "3.1K",
    thumbnail: "/prophet-preaching.jpg",
  },
  {
    title: "Breaking Generational Curses",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 22, 2025",
    duration: "1:32:00",
    views: "4.5K",
    thumbnail: "/church-deliverance-service.jpg",
  },
]

export default function SermonsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sermons" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            Watch & Listen
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Recent <span className="text-gold">Sermons</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Catch up on powerful messages and prophetic teachings from our services.
          </p>
        </motion.div>

        {/* Sermons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon, index) => (
            <motion.div
              key={sermon.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Thumbnail */}
              <div className="relative rounded-xl overflow-hidden mb-4 aspect-video">
                <img
                  src={sermon.thumbnail || "/placeholder.svg"}
                  alt={sermon.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg"
                  >
                    <Play className="w-6 h-6 text-background ml-1" fill="currentColor" />
                  </motion.button>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-white text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {sermon.duration}
                </div>
              </div>

              {/* Info */}
              <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors line-clamp-2">
                {sermon.title}
              </h3>
              <p className="text-gold text-sm mb-2">{sermon.speaker}</p>
              <div className="flex items-center gap-4 text-white/50 text-sm">
                <span>{sermon.date}</span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" /> {sermon.views} views
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
          >
            View All Sermons
          </a>
        </motion.div>
      </div>
    </section>
  )
}

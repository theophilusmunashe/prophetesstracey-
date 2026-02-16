"use client"

import { motion } from "framer-motion"
import { Play, Clock, Eye } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const sermons = [
  {
    title: "Walking in Divine Purpose",
    speaker: "Prophetess Tracey Pilime",
    date: "Jan 5, 2026",
    duration: "1:24:00",
    views: "2.3K",
    thumbnail: "/church-sermon-worship-service.jpg",
  },
  {
    title: "The Power of Prophetic Declaration",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 29, 2025",
    duration: "1:15:00",
    views: "3.1K",
    thumbnail: "/prophet-preaching-pulpit.jpg",
  },
  {
    title: "Breaking Generational Curses",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 22, 2025",
    duration: "1:32:00",
    views: "4.5K",
    thumbnail: "/church-deliverance-service.jpg",
  },
  {
    title: "The Anointing That Breaks Yokes",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 15, 2025",
    duration: "1:18:00",
    views: "2.8K",
    thumbnail: "/anointing-prayer-church.jpg",
  },
  {
    title: "Releasing Your Faith",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 8, 2025",
    duration: "1:22:00",
    views: "3.5K",
    thumbnail: "/faith-teaching-church.jpg",
  },
  {
    title: "Positioning for Divine Visitation",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 1, 2025",
    duration: "1:30:00",
    views: "4.1K",
    thumbnail: "/divine-presence-worship.jpg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function SermonsPage() {
  return (
    <div className="relative bg-background min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="absolute inset-0 bg-background" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 container mx-auto px-6 lg:px-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
              Watch & Listen
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Recent <span className="text-gold">Sermons</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Catch up on powerful messages and prophetic teachings from our services.
            </p>
          </motion.div>

          {/* Sermons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon) => (
              <motion.div
                key={sermon.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
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
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              View All Sermons
            </a>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

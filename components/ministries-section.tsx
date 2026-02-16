"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Radio, Sparkles, Heart, BookOpen, Users, Globe } from "lucide-react"

const ministries = [
  {
    icon: Radio,
    title: "Daily Livestreams",
    description: "Join us every day for live worship, teachings, and prophetic encounters that transform lives.",
    color: "from-emerald-500/20 to-emerald-600/20",
  },
  {
    icon: Sparkles,
    title: "Prophetic Ministry",
    description: "Experience accurate prophetic words that bring direction, healing, and breakthrough to your life.",
    color: "from-gold/20 to-amber-600/20",
  },
  {
    icon: Heart,
    title: "Healing Services",
    description: "Witness miraculous healings and deliverances as God's power flows through His servant.",
    color: "from-rose-500/20 to-rose-600/20",
  },
  {
    icon: BookOpen,
    title: "Bible Teaching",
    description: "Deep, revelatory teachings that unlock the mysteries of God's Word for practical application.",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: Users,
    title: "Counseling",
    description: "Personal and group counseling sessions for spiritual growth and life challenges.",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: Globe,
    title: "Global Outreach",
    description: "Missionary work and partnerships extending God's kingdom across continents.",
    color: "from-cyan-500/20 to-cyan-600/20",
  },
]

export default function MinistriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ministries" ref={ref} className="relative py-32 overflow-hidden">
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
            Our Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ministries & <span className="text-gold">Services</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Discover the various ways we serve God's people and spread His glory across the nations.
          </p>
        </motion.div>

        {/* Ministries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <ministry.icon className="w-7 h-7 text-gold" />
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {ministry.title}
                </h3>

                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {ministry.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

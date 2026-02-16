"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react"

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "10:00 AM CAT",
    location: "Main Sanctuary & Online",
    type: "Weekly",
    featured: true,
  },
  {
    title: "Midweek Power Hour",
    date: "Every Wednesday",
    time: "6:00 PM CAT",
    location: "Online Livestream",
    type: "Weekly",
    featured: false,
  },
  {
    title: "Night of Prophecy",
    date: "Last Friday of Month",
    time: "8:00 PM CAT",
    location: "Main Sanctuary & Online",
    type: "Monthly",
    featured: true,
  },
  {
    title: "Morning Glory Prayer",
    date: "Daily",
    time: "5:00 AM CAT",
    location: "Online Livestream",
    type: "Daily",
    featured: false,
  },
]

export default function EventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="events" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/30 to-background" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            Join Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Upcoming <span className="text-gold">Events</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Be part of our powerful gatherings, both in-person and online. Experience God's presence with us.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative p-6 rounded-2xl border transition-all duration-500 ${
                event.featured
                  ? "bg-gradient-to-br from-gold/10 to-gold/5 border-gold/30 hover:border-gold/50"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {/* Type Badge */}
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  event.featured ? "bg-gold/20 text-gold" : "bg-white/10 text-white/60"
                }`}
              >
                {event.type}
              </span>

              <h3 className="font-heading text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                {event.title}
              </h3>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3 text-white/60">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-gold font-medium text-sm group-hover:underline">
                Join Service <ExternalLink className="w-4 h-4" />
              </button>
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-background font-bold rounded-xl hover:bg-gold-light transition-colors"
          >
            View Full Calendar
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

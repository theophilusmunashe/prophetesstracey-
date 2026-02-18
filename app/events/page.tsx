"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const events = [
  {
    title: "February Fasting",
    date: "18 - 28 February 2026",
    time: "6:00 AM - 6:00 PM",
    location: "Main Sanctuary & Online",
    type: "Special",
    featured: true,
    description: "Join us for a powerful season of prayer and fasting as we seek God's direction and breakthrough for the year ahead.",
  },
  {
    title: "Prophetess' Visit to Pakistan",
    date: "February 2026",
    time: "To be announced",
    location: "Pakistan",
    type: "Special",
    featured: true,
    description: "Prophetess Tracey Pilime will be ministering in Pakistan this February. Join us in prayer for this powerful outreach.",
  },
  {
    title: "All Night Prayer",
    date: "Date to be announced",
    time: "8:00 PM - 6:00 AM",
    location: "Main Sanctuary",
    type: "Special",
    featured: false,
    description: "An overnight prayer meeting for deep spiritual warfare and breakthrough. Come expecting divine encounters.",
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

export default function EventsPage() {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-20 transform -translate-y-1/2 w-48 h-48 bg-gold/3 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />
      </div>

      <Navigation />

      <main className="relative z-10 pt-32 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 lg:px-12"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Upcoming <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Experience divine encounters and powerful worship services that will transform your life
            </p>
          </motion.div>

          {/* Events */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 20px 40px rgba(255, 215, 0, 0.15)" 
                  }}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-gold/20 hover:border-gold/40 transition-all duration-500 overflow-hidden"
                >
                  <div className="p-8">
                    <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                      {event.title}
                    </h3>
                    
                    {event.description && (
                      <p className="text-white/70 mb-6 leading-relaxed">
                        {event.description}
                      </p>
                    )}

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-white/60">
                        <Calendar className="w-5 h-5 text-gold" />
                        <span className="text-white/90 font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/60">
                        <Clock className="w-5 h-5 text-gold" />
                        <span className="text-white/90 font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/60">
                        <MapPin className="w-5 h-5 text-gold" />
                        <span className="text-white/90 font-medium">{event.location}</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gold to-gold-light text-background font-bold rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Join Event
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          
          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gold via-gold to-gold-light text-background font-bold text-lg rounded-2xl hover:shadow-2xl transition-all duration-300"
            >
              View Full Calendar
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

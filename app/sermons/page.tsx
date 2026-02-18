"use client"

import { motion } from "framer-motion"
import { Play, Clock, Eye, Facebook, ExternalLink, Calendar } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"

// Facebook Page ID for Hope Of Glory International Ministries
const FACEBOOK_PAGE_ID = "prophetesstraceypilime"

// Sample sermon data - in production, this would come from Facebook API
const facebookSermons = [
  {
    id: "123456789",
    title: "Walking in Divine Purpose",
    description: "Discover your God-given destiny and walk in divine purpose as Prophetess Tracey Pilime shares powerful insights on fulfilling your calling.",
    speaker: "Prophetess Tracey Pilime",
    date: "Jan 5, 2026",
    duration: "1:24:00",
    views: "2.3K",
    thumbnail: "/church-sermon-worship-service.jpg",
    videoUrl: "https://www.facebook.com/prophetesstraceypilime/videos/123456789",
  },
  {
    id: "987654321",
    title: "The Power of Prophetic Declaration",
    description: "Learn how to speak life and destiny into existence through prophetic declarations that align with God's divine purpose.",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 29, 2025",
    duration: "1:15:00",
    views: "3.1K",
    thumbnail: "/prophet-preaching-pulpit.jpg",
    videoUrl: "https://www.facebook.com/prophetesstraceypilime/videos/987654321",
  },
  {
    id: "456789123",
    title: "Breaking Generational Curses",
    description: "Break free from generational limitations and step into the freedom that Christ has purchased for you on the cross.",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 22, 2025",
    duration: "1:32:00",
    views: "4.5K",
    thumbnail: "/church-deliverance-service.jpg",
    videoUrl: "https://www.facebook.com/prophetesstraceypilime/videos/456789123",
  },
  {
    id: "789123456",
    title: "The Anointing That Breaks Yokes",
    description: "Experience the liberating power of God's anointing that breaks every yoke and removes every burden.",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 15, 2025",
    duration: "1:18:00",
    views: "2.8K",
    thumbnail: "/anointing-prayer-church.jpg",
    videoUrl: "https://www.facebook.com/prophetesstraceypilime/videos/789123456",
  },
  {
    id: "321654987",
    title: "Releasing Your Faith",
    description: "Learn how to activate your faith and release it into the atmosphere for supernatural manifestations.",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 8, 2025",
    duration: "1:22:00",
    views: "3.5K",
    thumbnail: "/faith-teaching-church.jpg",
    videoUrl: "https://www.facebook.com/prophetesstraceypilime/videos/321654987",
  },
  {
    id: "654987321",
    title: "Positioning for Divine Visitation",
    description: "Prepare your heart and position your life for divine visitation and supernatural encounters with God.",
    speaker: "Prophetess Tracey Pilime",
    date: "Dec 1, 2025",
    duration: "1:30:00",
    views: "4.1K",
    thumbnail: "/divine-presence-worship.jpg",
    videoUrl: "https://www.facebook.com/prophetesstraceypilime/videos/654987321",
  },
]

export default function SermonsPage() {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <Navigation />

      <main className="relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 lg:px-12"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Latest <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Sermons</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Experience powerful prophetic teachings and divine messages streamed live from our services
            </p>
          </motion.div>

          {/* Watch on Facebook Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8"
          >
              <motion.a
                href={`https://www.facebook.com/${FACEBOOK_PAGE_ID}/videos`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-2xl transition-all duration-300"
              >
                <Facebook className="w-6 h-6" />
                Watch on Facebook
              </motion.a>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Users, Radio, Heart } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Globe, value: "5+", label: "Countries Reached" },
  { icon: Users, value: "10K+", label: "Global Members" },
  { icon: Radio, value: "Daily", label: "Livestreams" },
  { icon: Heart, value: "1000s", label: "Lives Transformed" },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/50 to-background" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d4af37' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            About The Ministry
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hope Of Glory <span className="text-gold">International</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A global prophetic ministry bridging the physical and digital realms to bring the transformative power of
            God to nations.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/whatsapp-20image-202026-01-10-20at-2013.jpeg"
                alt="2026 - Christ at the Centre"
                width={800}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <p className="text-background font-heading font-bold text-lg mb-1">2026 Theme</p>
              <p className="text-background/80 text-sm">Christ at the Centre - Galatians 2:20</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
              A Voice Raised for the Nations
            </h3>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                <strong className="text-gold">Prophetess Tracey Pilime</strong> is the founder of Hope Of Glory
                International Ministries (HOGIM), a prophetic ministry headquartered in Zimbabwe with a mandate to reach
                the nations.
              </p>
              <p>
                Operating as a voice of <strong className="text-white">prophecy, healing, and deliverance</strong>, the
                ministry has touched thousands of lives across Zimbabwe, the United Kingdom, United States, Canada, and
                South Africa.
              </p>
              <p>
                What sets HOGIM apart is its digital-first approach—bridging the physical and spiritual gap through
                daily livestreams, bringing the presence of God directly into homes and hearts worldwide.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#ministries"
                className="px-6 py-3 bg-gold text-background font-semibold rounded-xl hover:bg-gold-light transition-colors"
              >
                Our Ministries
              </a>
              <a
                href="#giving"
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-heading text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

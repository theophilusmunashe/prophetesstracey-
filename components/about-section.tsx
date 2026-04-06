"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Mobile portrait image */}
      <Image
        src="/hero2mini.png"
        alt="Prophetess Tracey ministering to the nations"
        fill
        className="object-cover object-[center_20%] md:hidden"
        sizes="100vw"
      />
      {/* Desktop landscape image */}
      <Image
        src="/hero2.png"
        alt="Prophetess Tracey ministering to the nations"
        fill
        className="hidden md:block object-cover object-[center_30%]"
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 sm:mb-8"
          >
            Prophetess Tracy
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-px bg-gold/60 mb-6 sm:mb-8 origin-left"
          />

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-gold mb-4 sm:mb-6"
          >
            A Voice Anointed for the Nations
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 sm:space-y-5 mb-8 sm:mb-10"
          >
            <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed">
              Prophetess Tracey Pilime is the visionary founder of Hope Of Glory International Ministries. With a divine mandate to reach the nations, she operates as a powerful voice of prophecy, healing, and deliverance.
            </p>
            <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed">
              Her ministry has transcended geographical boundaries, touching thousands of lives across the globe—from the UK and USA to Canada and South Africa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="/about"
              className="inline-block px-8 py-3 text-[13px] uppercase tracking-[0.18em] font-semibold text-background bg-gold hover:bg-gold-light transition-colors duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import NextLiveService from './next-live-service';

export default function HeroSection() {
  return (
    <section className="relative min-h-svh flex flex-col overflow-hidden bg-background">
      {/* Mobile portrait image */}
      <Image
        src="/Copy of Prophetess Tracy.png"
        alt="Prophetess Tracey Pilime"
        fill
        priority
        className="object-cover object-[center_30%] md:hidden"
        sizes="100vw"
      />
      {/* Desktop landscape image */}
      <Image
        src="/Prophetess Tracy.png"
        alt="Prophetess Tracey Pilime"
        fill
        priority
        className="hidden md:block object-cover object-[center_top]"
        sizes="100vw"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-background from-5% via-background/60 via-40% to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-background/10" />

      {/* Spacer to push content to the bottom */}
      <div className="flex-1" />

      {/* Bottom content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 w-full max-w-5xl mx-auto pb-8 sm:pb-12 gap-5 sm:gap-6">
        {/* Next Live Service */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <NextLiveService />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="/services"
            className="w-full sm:w-auto px-8 py-3 text-[13px] uppercase tracking-[0.18em] font-semibold text-background bg-gold hover:bg-gold-light transition-colors duration-300 text-center"
          >
            Join A Service
          </a>
          <a
            href="/about"
            className="w-full sm:w-auto px-8 py-3 text-[13px] uppercase tracking-[0.18em] font-medium text-white/60 border border-white/15 hover:text-white hover:border-white/30 transition-all duration-300 text-center"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}

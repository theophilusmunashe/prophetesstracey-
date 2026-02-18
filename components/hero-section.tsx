"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import NextLiveService from './next-live-service';

const heroTitles = [
  'A Voice To The Nations',
  '2026 - Christ At The Centre',
  'It\'s A Done Deal',
];

const tickerImages = [
  { src: "/images/prophetess.jpeg", alt: "Prophetess ministering" },
  { src: "/images/prophetess7.jpeg", alt: "Prophetess praying for congregants" },
  { src: "/images/prophetess-8.jpg", alt: "Prophetess preaching passionately" },
  { src: "/images/prophetess2.jpeg", alt: "Prophetess at a conference" },
  { src: "/images/prophetess-3.jpg", alt: "Prophetess in worship" },
];

function ImageTicker() {
  const duplicatedImages = [...tickerImages, ...tickerImages]
  return (
    <div className="w-full overflow-hidden relative py-12">
      <motion.div
        className="flex gap-4"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedImages.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-80 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
    </div>
  )
}

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % heroTitles.length);
    }, 5000);
    
    return () => {
      clearInterval(titleInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Background Image - Watermark Effect */}
      <Image
        src="/images/hero1.jpg"
        alt="Hope Of Glory International Ministries"
        fill
        className="absolute inset-0 object-cover opacity-20"
        priority
        sizes="100vw"
      />
      
      {/* Overlay - Above background, below content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

      {/* Hero Title - Closer to nav */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-20 sm:mt-24">
        <AnimatePresence mode="wait">
          <motion.h1
            key={titleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            {heroTitles[titleIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Image Ticker - Below title */}
      <div className="relative z-20">
        <ImageTicker />
      </div>

      {/* NextLiveService - Revert to original positioning */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20">
        <NextLiveService />
      </div>
    </section>
  );
}

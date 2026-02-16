"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import NextLiveService from './next-live-service';

const slides = [
  {
    image: '/images/hero1.jpg',
    text: 'A voice to Nations!',
    className: 'whitespace-nowrap',
  },
  {
    image: '/images/hero2.jpg',
    text: '2026 - <br /> Christ At The Centre',
    className: 'text-center',
  },
  {
    image: '/images/hero3.jpg',
    text: 'It\'s A Done Deal',
    className: '',
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emerald-950">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt={slides[index].text}
            fill
            className="object-cover object-center md:object-center sm:object-top"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/60 to-emerald-950/80 md:bg-gradient-to-r md:from-emerald-950/80 md:to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-tight ${slides[index].className}`}
            dangerouslySetInnerHTML={{ __html: slides[index].text }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20">
        <NextLiveService />
      </div>
    </section>
  );
}

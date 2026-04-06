"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const PRELOAD_MS = 12000
/** One scripture shown every 3s — four verses fill the full 12s cycle */
const SCRIPTURE_INTERVAL_MS = 3000

const scriptures = [
  {
    ref: "Psalm 23:1",
    text: "The Lord is my shepherd; I shall not want.",
  },
  {
    ref: "Jeremiah 29:11",
    text: "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.",
  },
  {
    ref: "Philippians 4:13",
    text: "I can do all things through Christ which strengtheneth me.",
  },
  {
    ref: "Isaiah 40:31",
    text: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles.",
  },
]

type PreloaderProps = {
  onReveal?: () => void
}

export default function Preloader({ onReveal }: PreloaderProps) {
  const [index, setIndex] = useState(0)
  const [mounted, setMounted] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const onRevealRef = useRef(onReveal)
  onRevealRef.current = onReveal

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const scriptureId = window.setInterval(() => {
      setIndex((i) => (i + 1) % scriptures.length)
    }, SCRIPTURE_INTERVAL_MS)

    const doneId = window.setTimeout(() => {
      window.clearInterval(scriptureId)
      onRevealRef.current?.()
      setFadeOut(true)
    }, PRELOAD_MS)

    return () => {
      window.clearInterval(scriptureId)
      window.clearTimeout(doneId)
      document.body.style.overflow = ""
    }
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      className="fixed inset-0 z-100 flex flex-col items-center justify-center px-6"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => {
        if (fadeOut) {
          setMounted(false)
          document.body.style.overflow = ""
        }
      }}
    >
      {/* Background image + blur + overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero2.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_30%] scale-105 blur-md sm:blur-lg"
          sizes="100vw"
        />
        {/* Light overlays so the photo stays readable but visible */}
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-background/25 to-background/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_45%,transparent,rgba(0,0,0,0.22))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10 sm:mb-12"
        >
          <div
            className="absolute inset-[-16px] rounded-full opacity-30 blur-xl bg-gold/15"
            aria-hidden
          />
          <div className="absolute inset-[-6px] rounded-3xl opacity-25 blur-lg bg-gold/10" aria-hidden />
          <div className="relative drop-shadow-[0_0_14px_rgba(200,170,80,0.22)]">
            <Image
              src="/images/hogim logo.png"
              alt="Hope Of Glory International Ministries"
              width={220}
              height={80}
              className="w-48 sm:w-56 md:w-64 h-auto object-contain mx-auto"
              priority
            />
          </div>
        </motion.div>

        <div className="min-h-[100px] sm:min-h-[120px] flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(3px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-light italic px-2">
                &ldquo;{scriptures[index].text}&rdquo;
              </p>
              <p className="text-gold/80 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium">
                {scriptures[index].ref}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex gap-1.5 justify-center"
          aria-hidden
        >
          {scriptures.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-700 ${
                i === index ? "w-6 bg-gold" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

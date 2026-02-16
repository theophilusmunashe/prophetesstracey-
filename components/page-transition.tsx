"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 20,
  },
  enter: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const overlayVariants = {
  initial: { scaleY: 1 },
  enter: {
    scaleY: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Transition Overlay */}
        <motion.div
          variants={overlayVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="fixed inset-0 z-[100] bg-gradient-to-b from-gold via-emerald-900 to-background origin-top pointer-events-none"
        />

        {/* Page Content */}
        <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

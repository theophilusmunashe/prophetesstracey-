"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Sermons", href: "/sermons" },
  { label: "Giving", href: "/giving" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? "top-1 sm:top-2" : "top-2 sm:top-4"
        }`}
      >
        {/* Desktop Navigation - Glassmorphism */}
        <div className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <Link href="/" className="px-4 py-2 flex items-center">
            <Image
              src="/images/hogim logo.png"
              alt="Hope Of Glory International Ministries"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  pathname === item.href ? "text-gold bg-white/10" : "text-white/80 hover:text-gold hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/giving"
              className="px-4 py-2 bg-gold text-background font-semibold text-sm rounded-full hover:bg-gold-light transition-all duration-300"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-12 px-3 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {/* Logo in Mobile Menu */}
              <div className="flex justify-center mb-2">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/hogim logo.png"
                    alt="Hope Of Glory International Ministries"
                    width={180}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </Link>
              </div>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`block text-lg font-heading font-bold transition-colors py-1 border-b border-white/10 ${
                      pathname === item.href ? "text-gold" : "text-white hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <Link
                  href="/giving"
                  className="block mt-1 py-2 bg-gold text-background font-bold text-center rounded-xl"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

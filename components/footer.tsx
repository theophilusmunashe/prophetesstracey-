"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Sermons", href: "/sermons" },
  { label: "Giving", href: "/giving" },
]

const phoneNumbers = [
  "0781333706",
  "0781333708",
  "0781333909",
  "0781333707",
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background">
      {/* Gold accent line */}
      <div className="h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-8 sm:pb-10">
        {/* Top: Logo + tagline centered */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14 sm:mb-16"
        >
          <Link href="/" className="mb-5">
            <Image
              src="/images/hogim logo.png"
              alt="Hope Of Glory International Ministries"
              width={160}
              height={54}
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-white/40 text-sm sm:text-base max-w-md leading-relaxed">
            A prophetic ministry reaching the nations with the message of hope, healing, and deliverance.
          </p>

          {/* Social row */}
          <div className="flex items-center gap-4 mt-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-gold hover:border-gold/40 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Grid: Links + Contact + Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-12 mb-14 sm:mb-16">
          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/30 font-medium mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/30 font-medium mb-5">
              Location
            </h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold/70 shrink-0 mt-0.5" />
              <div className="text-white/55 text-sm leading-relaxed">
                <p>Cnr First Street &amp; Nelson Mandela Ave</p>
                <p>Woolworths Building, 2nd Floor</p>
                <p className="text-white/35 mt-1">Opposite TV Sales, Harare, Zimbabwe</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/30 font-medium mb-5">
              Information Desk
            </h4>
            <ul className="space-y-2.5">
              {phoneNumbers.map((num) => (
                <li key={num} className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-gold/60" />
                  <a href={`tel:${num}`} className="text-white/55 text-sm hover:text-gold transition-colors duration-300">
                    {num}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Email + Finance */}
          <div>
            <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/30 font-medium mb-5">
              Get In Touch
            </h4>

            <div className="flex items-center gap-2.5 mb-6">
              <Mail className="w-3.5 h-3.5 text-gold/60" />
              <a
                href="mailto:info@prophetesstracy.com"
                className="text-white/55 text-sm hover:text-gold transition-colors duration-300"
              >
                info@prophetesstracy.com
              </a>
            </div>

            <div className="p-4 rounded-lg bg-white/3 border border-white/6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold/70 font-medium mb-2">
                Finance Hotline
              </p>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-gold/60" />
                <a href="tel:0781333707" className="text-white/55 text-sm hover:text-gold transition-colors duration-300">
                  0781333707
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
            <p className="text-white/25 text-xs">
              &copy; 2026 Hope Of Glory International Ministries. All rights reserved.
            </p>
            <div className="flex gap-5">
              <Link href="/privacy" className="text-white/25 hover:text-white/50 transition-colors text-xs">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/25 hover:text-white/50 transition-colors text-xs">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

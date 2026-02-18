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
  { label: "Give", href: "/giving" },
]

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-background to-background" />

      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 sm:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Image
                  src="/images/hogim logo.png"
                  alt="Hope Of Glory International Ministries"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-base sm:text-lg">Hope Of Glory</h3>
                <p className="text-white/60 text-xs sm:text-sm">International Ministries</p>
              </div>
            </Link>

            <p className="text-white/60 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              A prophetic ministry reaching the nations with the message of hope, healing, and deliverance. Led by
              Prophetess Tracey Pilime, bridging the physical and digital to bring God's glory to all.
            </p>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-background text-white/60 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-gold transition-colors text-sm sm:text-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 sm:mb-6 text-sm sm:text-base">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-white/60 text-xs sm:text-sm">
                  <div>Cnr First Street & Kwame Nkurumah Ave, Harare, Zimbabwe</div>
                  <div className="mt-1">Woolworths Building, 2nd Floor, Opposite TV Sales</div>
                </div>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@prophetesstracy.com" className="text-white/60 text-xs sm:text-sm hover:text-gold transition-colors">
                  info@prophetesstracy.com
                </a>
              </li>
            </ul>
            
            {/* Information Desk */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10">
              <h5 className="font-heading font-bold text-gold text-sm sm:text-base mb-3">Information Desk</h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-white/80 text-sm">0781333706</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-white/80 text-sm">0781333708</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-white/80 text-sm">0781333909</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-white/80 text-sm">0781333707</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-gold font-medium text-sm">Finance Hotline</span>
                </div>
                <div className="flex items-center gap-2 ml-6">
                  <Phone className="w-4 h-4 text-white/80" />
                  <span className="text-white/80 text-sm">0781333707</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-white/40 text-xs sm:text-sm">
              &copy; 2026 Hope Of Glory International Ministries. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/privacy" className="text-white/40 hover:text-gold transition-colors text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/40 hover:text-gold transition-colors text-xs sm:text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Heart, Sparkles, Flame, Gift, HandHeart, ArrowRight, CreditCard, Smartphone, Building } from "lucide-react"

const givingCategories = [
  {
    id: "partnership",
    icon: Heart,
    title: "Partnership",
    description: "Become a covenant partner and support the ongoing work of the ministry monthly.",
    accent: "from-rose-500 to-rose-600",
  },
  {
    id: "seed",
    icon: Sparkles,
    title: "Seed",
    description: "Sow a prophetic seed for a specific breakthrough or harvest in your life.",
    accent: "from-gold to-amber-600",
  },
  {
    id: "altar",
    icon: Flame,
    title: "Altar",
    description: "Build an altar of sacrifice unto the Lord for divine intervention.",
    accent: "from-orange-500 to-orange-600",
  },
  {
    id: "offering",
    icon: Gift,
    title: "Offering",
    description: "Give a general offering to support the daily operations of the ministry.",
    accent: "from-emerald-500 to-emerald-600",
  },
  {
    id: "charity",
    icon: HandHeart,
    title: "Charity",
    description: "Support our outreach programs helping the less fortunate in communities.",
    accent: "from-blue-500 to-blue-600",
  },
]

const paymentMethods = [
  { icon: CreditCard, label: "Card Payment" },
  { icon: Smartphone, label: "Mobile Money" },
  { icon: Building, label: "Bank Transfer" },
]

export default function GivingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("partnership")

  const activeItem = givingCategories.find((cat) => cat.id === activeCategory)

  return (
    <section id="giving" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/40 to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            Support The Ministry
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Give & <span className="text-gold">Partner</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            "Give, and it shall be given unto you; good measure, pressed down, and shaken together."
            <span className="block text-gold/80 mt-2 text-sm">— Luke 6:38</span>
          </p>
        </motion.div>

        {/* Main Giving Interface */}
        <div className="max-w-5xl mx-auto">
          {/* Category Selector - Horizontal Scroll on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide"
          >
            {givingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gold text-background border-gold"
                    : "bg-white/5 text-white border-white/10 hover:border-white/30"
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-semibold">{category.title}</span>
              </button>
            ))}
          </motion.div>

          {/* Active Category Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Info Card */}
            <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
              {/* Gradient Accent */}
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${activeItem?.accent} opacity-20 blur-2xl`}
              />

              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeItem?.accent} flex items-center justify-center mb-6`}
                >
                  {activeItem && <activeItem.icon className="w-8 h-8 text-white" />}
                </div>

                <h3 className="font-heading text-3xl font-bold text-white mb-4">{activeItem?.title}</h3>

                <p className="text-white/70 text-lg leading-relaxed mb-8">{activeItem?.description}</p>

                {/* Scripture */}
                <div className="p-4 rounded-xl bg-gold/10 border border-gold/20">
                  <p className="text-gold/90 italic text-sm">
                    "Honour the LORD with thy substance, and with the firstfruits of all thine increase."
                  </p>
                  <p className="text-gold/60 text-xs mt-2">— Proverbs 3:9</p>
                </div>
              </div>
            </div>

            {/* Giving Form */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20">
              <h4 className="font-heading text-xl font-bold text-white mb-6">Make Your {activeItem?.title}</h4>

              {/* Amount Presets */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {["$10", "$25", "$50", "$100", "$250", "Custom"].map((amount) => (
                  <button
                    key={amount}
                    className="py-3 px-4 rounded-xl bg-white/10 text-white font-semibold hover:bg-gold hover:text-background transition-all duration-300 border border-white/10 hover:border-gold"
                  >
                    {amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="relative mb-6">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-bold">$</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full py-4 pl-10 pr-4 rounded-xl bg-white/10 text-white placeholder-white/40 border border-white/20 focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <p className="text-white/60 text-sm mb-3">Payment Method</p>
                <div className="flex gap-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.label}
                      className="flex-1 flex flex-col items-center gap-2 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 transition-colors"
                    >
                      <method.icon className="w-5 h-5 text-gold" />
                      <span className="text-white/60 text-xs">{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gold text-background font-bold text-lg rounded-xl hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
              >
                Give Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <p className="text-white/40 text-xs text-center mt-4">
                Secure payment powered by Stripe. All transactions are encrypted.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

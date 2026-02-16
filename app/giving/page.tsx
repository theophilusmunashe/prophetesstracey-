"use client"

import { motion, Variants } from "framer-motion"
import { useState } from "react"
import { Heart, Sparkles, Flame, Gift, HandHeart, ArrowRight, CreditCard, Smartphone, Building } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function GivingPage() {
  const [activeCategory, setActiveCategory] = useState("partnership")
  const activeItem = givingCategories.find((cat) => cat.id === activeCategory)

  return (
    <div className="relative bg-background min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/40 to-background" />

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Support The Ministry
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              Give & <span className="text-gold">Partner</span>
            </h1>
            <p className="text-white/60 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
              "Give, and it shall be given unto you; good measure, pressed down, and shaken together."
              <span className="block text-gold/80 mt-2 text-xs sm:text-sm">— Luke 6:38</span>
            </p>
          </motion.div>

          {/* Main Giving Interface */}
          <div className="max-w-5xl mx-auto">
            {/* Category Selector */}
            <motion.div variants={itemVariants} className="flex gap-2 sm:gap-3 overflow-x-auto pb-4 mb-6 sm:mb-8 scrollbar-hide px-4 sm:px-0">
              {givingCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex-shrink-0 flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gold text-background border-gold"
                      : "bg-white/5 text-white border-white/10 hover:border-white/30"
                  }`}
                >
                  <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">{category.title}</span>
                </button>
              ))}
            </motion.div>

            {/* Active Category Display */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0"
            >
              {/* Info Card */}
              <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-bl ${activeItem?.accent} opacity-20 blur-2xl`}
                />

                <div className="relative">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${activeItem?.accent} flex items-center justify-center mb-4 sm:mb-6`}
                  >
                    {activeItem && <activeItem.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">{activeItem?.title}</h3>

                  <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{activeItem?.description}</p>

                  <div className="p-3 sm:p-4 rounded-xl bg-gold/10 border border-gold/20">
                    <p className="text-gold/90 italic text-xs sm:text-sm">
                      "Honour the LORD with thy substance, and with the firstfruits of all thine increase."
                    </p>
                    <p className="text-gold/60 text-xs mt-2">— Proverbs 3:9</p>
                  </div>
                </div>
              </div>

              {/* Giving Form */}
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20">
                <h4 className="font-heading text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Make Your {activeItem?.title}</h4>

                {/* Amount Presets */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {["$10", "$25", "$50", "$100", "$250", "Custom"].map((amount) => (
                    <button
                      key={amount}
                      className="py-2.5 px-3 sm:py-3 sm:px-4 rounded-lg sm:rounded-xl bg-white/10 text-white font-semibold hover:bg-gold hover:text-background transition-all duration-300 border border-white/10 hover:border-gold text-sm sm:text-base"
                    >
                      {amount}
                    </button>
                  ))}
                </div>

                {/* Custom Amount Input */}
                <div className="relative mb-4 sm:mb-6">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-bold text-sm sm:text-base">$</span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full py-3 sm:py-4 pl-10 pr-4 rounded-lg sm:rounded-xl bg-white/10 text-white placeholder-white/40 border border-white/20 focus:border-gold focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>

                {/* Payment Methods */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-3">Payment Method</p>
                  <div className="flex gap-2 sm:gap-3">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.label}
                        className="flex-1 flex flex-col items-center gap-1.5 sm:gap-2 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 transition-colors"
                      >
                        <method.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                        <span className="text-white/60 text-xs">{method.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 sm:py-4 bg-gold text-background font-bold text-base sm:text-lg rounded-lg sm:rounded-xl hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
                >
                  Give Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>

                <p className="text-white/40 text-xs text-center mt-3 sm:mt-4 px-2">
                  Secure payment powered by Stripe. All transactions are encrypted.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

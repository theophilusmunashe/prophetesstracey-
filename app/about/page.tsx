"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const ministries = [
  {
    name: "Men's Ministry",
    description: "Building strong, godly men who lead with integrity in their families, church, and communities.",
    image: "/images/men.jpg",
  },
  {
    name: "Children's Ministry",
    description: "Nurturing the next generation in a safe, fun, and Christ-centered environment.",
    image: "/images/hero1.jpg",
  },
  {
    name: "Women's Ministry",
    description: "Empowering women of all ages to live out their God-given purpose with confidence and grace.",
    image: "/images/womens.jpg",
  },
  {
    name: "Partners",
    description: "Standing together to fulfill the vision of HOGIM through prayer, service, and giving.",
    image: "/images/partners.jpg",
  },
  {
    name: "School Of Spirit",
    description: "Intensive training on the person and work of the Holy Spirit — a journey into the supernatural.",
    image: "/images/school.jpg",
  },
  {
    name: "Foundational Class",
    description: "Essential grounding in the fundamental doctrines of the Christian faith for new believers.",
    image: "/images/foundational.jpg",
  },
  {
    name: "Youth Ministry",
    description: "Raising up a generation of passionate followers of Christ through worship and practical teaching.",
    image: "/images/youth.jpg",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function AboutPage() {
  return (
    <div className="relative bg-background text-white min-h-screen">
      <Navigation />

      {/* ── Hero Banner ── */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-end overflow-hidden">
        <Image
          src="/hero2mini.png"
          alt="Prophetess Tracey ministering"
          fill
          priority
          className="object-cover object-[center_20%] md:hidden"
          sizes="100vw"
        />
        <Image
          src="/hero2.png"
          alt="Prophetess Tracey ministering"
          fill
          priority
          className="hidden md:block object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 sm:pb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-medium mb-3"
          >
            About The Ministry
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]"
          >
            Hope Of Glory Int' Ministries
          </motion.h1>
        </div>
      </section>

      {/* ── Prophetess Tracey ── */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-3/4 sm:aspect-4/5 rounded-sm overflow-hidden"
            >
              <Image
                src="/images/prophetess1.jpg"
                alt="Prophetess Tracey Pilime"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
            </motion.div>

            {/* Text */}
            <div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="w-12 h-px bg-gold/60 mb-6 origin-left"
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-3"
              >
                Prophetess <span className="text-gold">Tracey Pilime</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gold/70 font-light mb-8"
              >
                A Voice Anointed for the Nations
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-5 text-white/55 text-sm sm:text-base lg:text-lg leading-relaxed"
              >
                <p>
                  Prophetess Tracey Pilime is the visionary founder of Hope Of Glory International Ministries (HOGIM). With a divine mandate to reach the nations, she operates as a powerful voice of prophecy, healing, and deliverance.
                </p>
                <p>
                  Her ministry has transcended geographical boundaries, touching thousands of lives across the globe — from the UK and USA to Canada and South Africa.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Foundation ── */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-white/2" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="block text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-medium mb-4">
              What We Stand On
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Our Foundation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                label: "Mission",
                title: "Church Mission",
                text: "To preach the undiluted word of God and ensure that we take as many as possible with us to heaven.",
              },
              {
                label: "Vision",
                title: "Church Vision",
                text: "To preach the undiluted word of God and ensure that we take as many as possible with us to heaven.",
              },
              {
                label: "Pillars",
                title: "Church Pillars",
                text: "Grounded in Prayer, guided by Prophecy, and growing in the Word. We stand on faith, hope, and love.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12 }}
                className="group relative p-8 sm:p-10 border border-white/6 hover:border-gold/20 transition-colors duration-500"
              >
                <span className="block text-[11px] uppercase tracking-[0.25em] text-gold/50 font-medium mb-4">
                  {item.label}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-white/45 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gold/0 group-hover:bg-gold/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ministries ── */}
      <section className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="block text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-medium mb-4">
              How We Serve
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Our Ministries
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {ministries.map((ministry, i) => (
              <motion.div
                key={ministry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group cursor-pointer"
              >
                {/* Image card */}
                <div className="relative aspect-4/3 sm:aspect-3/4 overflow-hidden">
                  <Image
                    src={ministry.image}
                    alt={ministry.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-500" />

                  {/* Title + hover description on sm+ */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                      {ministry.name}
                    </h3>
                    <p className="hidden sm:block text-white/0 group-hover:text-white/60 text-sm leading-relaxed transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                      {ministry.description}
                    </p>
                  </div>

                  {/* Top-left gold accent on hover */}
                  <div className="absolute top-0 left-0 w-0 group-hover:w-12 h-px bg-gold transition-all duration-500" />
                  <div className="absolute top-0 left-0 h-0 group-hover:h-12 w-px bg-gold transition-all duration-500" />
                </div>

                {/* Description below card on mobile only */}
                <p className="sm:hidden text-white/50 text-sm leading-relaxed mt-3 px-1">
                  {ministry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

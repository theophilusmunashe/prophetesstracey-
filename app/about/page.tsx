"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight, Target, Eye, Gem } from "lucide-react"
import React from "react"

// 1. Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const slideUp = {
  hidden: { ...itemVariants.hidden, y: 50 },
  visible: { ...itemVariants.visible, y: 0 },
}
const slideLeft = {
  hidden: { ...itemVariants.hidden, x: -50 },
  visible: { ...itemVariants.visible, x: 0 },
}
const slideRight = {
  hidden: { ...itemVariants.hidden, x: 50 },
  visible: { ...itemVariants.visible, x: 0 },
}

// 2. Image Ticker Component
const tickerImages = [
  { src: "/images/prophetess.jpg", alt: "Prophetess ministering" },
  {
    src: "/images/prophetess-7.jpg",
    alt: "Prophetess praying for congregants",
  },
  { src: "/images/prophetess-8.jpg", alt: "Prophetess preaching passionately" },
  { src: "/images/prophetess-2.jpg", alt: "Prophetess at a conference" }, // Placeholder
  { src: "/images/prophetess-3.jpg", alt: "Prophetess in worship" }, // Placeholder
]

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
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
    </div>
  )
}

// 3. Carousel Component
const churchImages = [
  { src: "/images/church-1.jpg", alt: "Church congregants worshipping" },
  { src: "/images/church-2.jpg", alt: "Community outreach event" },
  { src: "/images/church-3.jpg", alt: "Choir singing during a service" },
  { src: "/images/church-4.jpg", alt: "Children's ministry activity" },
  { src: "/images/church-banner-wallpaper.jpg", alt: "Church banner" },
]

function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
        <div className="flex">
          {churchImages.map((img, index) => (
            <div className="flex-shrink-0 flex-grow-0 basis-full min-w-0" key={index}>
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={scrollPrev}
          className="bg-black/50 text-white p-3 rounded-full hover:bg-gold transition-colors focus:outline-none"
          aria-label="Previous slide"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="bg-black/50 text-white p-3 rounded-full hover:bg-gold transition-colors focus:outline-none"
          aria-label="Next slide"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  )
}

// 4. Pillars Data
const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To be a global prophetic voice, reaching nations with the transformative power of God's love and truth.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To see lives changed, hearts healed, and communities uplifted through the manifest presence of the Holy Spirit.",
  },
  {
    icon: Gem,
    title: "Church Pillars",
    description: "Grounded in Prayer, guided by Prophecy, and growing in the Word. We stand on faith, hope, and love.",
  },
]

const ministries = [
  {
    name: "Men's Ministry",
    description: 'Our Men\'s Ministry is a dynamic fellowship dedicated to building strong, godly men who lead with integrity in their families, church, and communities. Through regular Bible studies, accountability groups, and service projects, we equip men to grow in their faith, develop authentic brotherhood, and make a lasting impact for the kingdom of God.',
    image: '/images/men.jpg',
  },
  {
    name: "Children's Ministry",
    description: 'We believe in nurturing the next generation from a young age. Our Children\'s Ministry provides a safe, fun, and Christ-centered environment where kids can learn foundational biblical truths. Through interactive lessons, worship, and creative activities, we aim to instill a lifelong love for God and His Word in the hearts of our children.',
    image: '/images/hero1.jpg',
  },
  {
    name: "Women's Ministry",
    description: 'The Women\'s Ministry is a vibrant community where women of all ages can connect, grow, and be empowered. We provide a supportive space for fellowship, mentorship, and spiritual enrichment through Bible studies, prayer meetings, and special events. Our goal is to equip every woman to live out her God-given purpose with confidence and grace.',
    image: '/images/womens.jpg',
  },
  {
    name: 'Partners',
    description: 'Partners are the heart of our global outreach, standing with us to fulfill the vision of HOGIM. This vital ministry is for those who commit to supporting our mission through consistent prayer, service, and financial giving. Together, we are able to spread the Gospel and bring hope to nations around the world.',
    image: '/images/partners.jpg',
  },
  {
    name: 'School Of Spirit',
    description: 'For those who desire to go deeper in their walk with God, the School of Spirit offers intensive training on the person and work of the Holy Spirit. This program is designed to equip believers to operate in spiritual gifts, understand divine mysteries, and move in the power of God. It is a transformative journey into the supernatural.',
    image: '/images/school.jpg',
  },
  {
    name: 'Foundational Class',
    description: 'Our Foundational Class is the essential starting point for new believers and new members of our church family. This course covers the fundamental doctrines of the Christian faith, our core values, and our church vision. We aim to provide a solid biblical grounding that will serve as a strong foundation for a lifetime of spiritual growth.',
    image: '/images/foundational.jpg',
  },
  {
    name: 'Youth Ministry',
    description: 'Our Youth Ministry is a dynamic and energetic community for young people to encounter God in a real and relevant way. We create a space where teenagers can build strong friendships, ask tough questions, and grow in their faith. Through engaging worship, practical teachings, and fun events, we are raising up a generation of passionate followers of Christ.',
    image: '/images/youth.jpg',
  },
];

function MinistryCard({ ministry, index }: { ministry: (typeof ministries)[0]; index: number }) {
  const isOdd = index % 2 !== 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl ${isOdd ? 'md:order-2' : ''}`}>
        <Image
          src={ministry.image}
          alt={ministry.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={isOdd ? 'md:order-1' : ''}>
        <h3 className="font-heading text-3xl font-bold text-gold mb-4">{ministry.name}</h3>
        <p className="text-white/80 leading-relaxed mb-6">{ministry.description}</p>
        <button className="bg-gold text-background font-bold px-6 py-3 rounded-lg hover:bg-gold-light transition-colors">
          Join Ministry
        </button>
      </div>
    </motion.div>
  );
}

// 5. Main Page Component
export default function AboutPage() {
  return (
    <div className="relative bg-background text-white min-h-screen overflow-x-hidden">
      <Navigation />

      <main className="relative z-10 pt-32 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24 md:space-y-32"
        >
          {/* Section 1: Prophetess Tracey */}
          <motion.section variants={containerVariants} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid md:grid-cols-5 gap-8 sm:gap-12 items-center">
              <motion.div variants={slideLeft} className="md:col-span-2">
                <div className="relative aspect-[4/3] sm:aspect-square md:aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-gold/20">
                  <Image
                    src="/images/prophetess1.jpg"
                    alt="Prophetess Tracey Pilime"
                    layout="fill"
                    objectFit="cover"
                    className="saturate-150"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
                </div>
              </motion.div>
              <motion.div variants={slideRight} className="md:col-span-3">
                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Prophetess <span className="text-gold">Tracey Pilime</span>
                </h1>
                <h2 className="text-lg sm:text-xl text-white/70 font-light mb-6">A Voice Anointed for the Nations</h2>
                <div className="space-y-4 sm:space-y-5 text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
                  <p>
                    <strong className="text-gold">Prophetess Tracey Pilime</strong> is the visionary founder of Hope Of
                    Glory International Ministries (HOGIM). With a divine mandate to reach the nations, she operates as a
                    powerful voice of prophecy, healing, and deliverance.
                  </p>

                    <p>
                    Her ministry has transcended geographical boundaries, touching thousands of lives across the
                    globe—from the UK and USA to Canada and South Africa.
                  </p>
                </div>
              </motion.div>
            </div>
            <ImageTicker />
          </motion.section>

          {/* Section 2: Our Foundation */}
          <motion.section variants={slideUp} className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Our Foundation</h2>
              <p className="text-white/70 text-lg max-w-3xl mx-auto">Our ministry is built on a solid foundation of faith, guided by our mission, vision, and core pillars.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div variants={slideUp} className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="font-heading text-2xl font-bold text-gold mb-3">Church Mission</h3>
                <p className="text-white/80">To preach the undiluted word of God and ensure that we take as many as possible with us to heaven.</p>
              </motion.div>
              <motion.div variants={slideUp} className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="font-heading text-2xl font-bold text-gold mb-3">Church Vision</h3>
                <p className="text-white/80">To preach the undiluted word of God and ensure that we take as many as possible with us to heaven.</p>
              </motion.div>
              <motion.div variants={slideUp} className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="font-heading text-2xl font-bold text-gold mb-3">Church Pillars</h3>
                <p className="text-white/80">Grounded in Prayer, guided by Prophecy, and growing in the Word. We stand on faith, hope, and love.</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Section 3: Ministries Showcase */}
          <motion.section variants={containerVariants} className="container mx-auto px-6 lg:px-12 space-y-20">
            <div className="text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Our Ministries</h2>
              <p className="text-white/70 text-lg max-w-3xl mx-auto">Serving the body of Christ through dedicated ministries that cater to every member of our church family.</p>
            </div>
            {ministries.map((ministry, index) => (
              <MinistryCard key={ministry.name} ministry={ministry} index={index} />
            ))}
          </motion.section>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

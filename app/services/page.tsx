"use client"

import { motion, Variants } from "framer-motion"
import { Calendar, Clock, Tv } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const servicesByDay = [
  {
    day: "Sunday",
    services: [
      {
        title: "Sunday Service",
        time: "1000hrs - 1300hrs",
        description: "A powerful time of worship, prayer, and life-changing teaching of the Word. Experience the presence of God and fellowship with believers.",
      },
    ],
  },
  {
    day: "Monday",
    services: [
      {
        title: "Word Service",
        time: "1300hrs - 1400hrs",
        description: "An hour dedicated to in-depth study of the Bible. Grow in your knowledge and understanding of God's Word.",
      },
      {
        title: "School of Spirit",
        time: "1730hrs - 1830hrs",
        description: "Practical training and equipping for ministry and service in the house of God. Discover and develop your spiritual gifts.",
      },
    ],
  },
  {
    day: "Tuesday",
    services: [
      {
        title: "Prophetic Service",
        time: "1300hrs - 1400hrs",
        description: "A time to receive personal prophetic ministry and direction from the Lord. Encounter the supernatural power of God.",
      },
    ],
  },
  {
    day: "Wednesday",
    services: [
      {
        title: "Deliverance Service",
        time: "1300hrs - 1400hrs",
        description: "Experience freedom from bondage and oppression through the power of prayer and deliverance ministry. Break every chain and walk in victory.",
      },
      {
        title: "Worship Service",
        time: "1730hrs - 1830hrs",
        description: "An evening of intimate worship and communion with the Holy Spirit. Enter into His gates with thanksgiving and praise.",
      },
    ],
  },
  {
    day: "Thursday",
    services: [
      {
        title: "Prophetic Service",
        time: "1300hrs - 1400hrs",
        description: "A time to receive personal prophetic ministry and direction from the Lord. Encounter the supernatural power of God.",
      },
      {
        title: "Partners Service",
        time: "1730hrs - 1830hrs",
        description: "A special service for partners of the ministry. Receive impartation, and hear updates on the vision and mission of the church.",
      },
      {
        title: "Diaspora Zoom Service",
        time: "2000hrs - 2100hrs",
        description: "Connect with our international family through our online Zoom service. Experience the same anointing and power from anywhere in the world.",
      },
    ],
  },
  {
    day: "Friday",
    services: [
      {
        title: "PUSH Prayer",
        time: "1300hrs - 1400hrs",
        description: "Pray Until Something Happens (PUSH). Join us for an hour of fervent and persistent prayer for personal, national, and global revival.",
      },
    ],
  },
  {
    day: "Saturday",
    services: [
      {
        title: "PUSH Prayer",
        time: "1430hrs - 1530hrs",
        description: "Pray Until Something Happens (PUSH). Join us for an hour of fervent and persistent prayer for personal, national, and global revival.",
      },
    ],
  },
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
      ease: "easeInOut",
    },
  },
}

export default function ServicesPage() {
  return (
    <div className="relative bg-background min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="absolute inset-0 bg-background" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 container mx-auto px-6 lg:px-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Weekly Schedule
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
              Join Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-white/60 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-6">
              We have a variety of services throughout the week designed to help you grow in your faith and connect with God. All services are broadcasted live on Facebook.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {servicesByDay.map((day, dayIndex) => (
              <motion.div key={day.day} variants={itemVariants} className="mb-8 sm:mb-12">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mr-3 sm:mr-4">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">{day.day}</h2>
                </div>

                <div className="relative pl-0 sm:pl-16 space-y-4 sm:space-y-6">
                  <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-0.5 bg-white/10"></div>
                  {day.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.title + service.time}
                      variants={itemVariants}
                      className="relative sm:mb-8 sm:pl-8"
                    >
                      <div className="hidden sm:block absolute left-[-2.07rem] top-1 w-8 h-8 rounded-full bg-background border-2 border-gold flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-gold"></div>
                      </div>

                      <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-300">
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-gold mb-2">{service.title}</h3>
                        <div className="flex items-center text-white/60 mb-2 sm:mb-3">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm sm:text-base">{service.time}</span>
                        </div>
                        <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12 sm:mt-16 p-6 sm:p-8 bg-gold/5 border border-gold/20 rounded-xl sm:rounded-2xl max-w-4xl mx-auto">
              <div className="flex justify-center items-center mb-4">
                  <Tv className="w-6 h-6 sm:w-8 sm:h-8 text-gold"/>
              </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2 px-4">Watch Live on Facebook</h3>
            <p className="text-white/60 text-sm sm:text-base px-4">
              Can't make it in person? All our services are streamed live on our Facebook page. Join our online community and experience the power of God from wherever you are.
            </p>
            <a 
                href="#" // Replace with actual Facebook page link
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 sm:mt-6 inline-block bg-gold text-background font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full hover:bg-gold/90 transition-colors text-sm sm:text-base"
            >
                Go to Facebook Page
            </a>
          </motion.div>

        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

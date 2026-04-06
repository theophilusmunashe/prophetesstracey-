"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Heart,
  Sparkles,
  Flame,
  Gift,
  HandHeart,
  Building2,
  Smartphone,
  Globe,
  Copy,
  Check,
  ChevronDown,
  Mail,
  Phone,
  Shield,
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const navSections = [
  { id: "overview", label: "Overview" },
  { id: "ways", label: "Ways to give" },
  { id: "bank", label: "Bank transfer" },
  { id: "ecocash", label: "Ecocash" },
  { id: "international", label: "International" },
  { id: "faq", label: "FAQ" },
] as const

const ways = [
  {
    id: "partnership",
    icon: Heart,
    title: "Partnership",
    text: "Monthly covenant partnership to sustain teaching, outreach, and missions.",
  },
  {
    id: "seed",
    icon: Sparkles,
    title: "Seed",
    text: "A one-time or recurring seed tied to faith for a specific need or harvest.",
  },
  {
    id: "altar",
    icon: Flame,
    title: "Altar",
    text: "Sacrificial giving in response to God’s leading for breakthrough or dedication.",
  },
  {
    id: "offering",
    icon: Gift,
    title: "Offering",
    text: "Tithes and general offerings that support weekly ministry operations.",
  },
  {
    id: "charity",
    icon: HandHeart,
    title: "Charity & outreach",
    text: "Projects that serve the community and extend compassion beyond the walls.",
  },
]

const bankAccounts = [
  {
    bank: "Local bank (Zimbabwe)",
    currency: "USD / ZWL — confirm at finance desk",
    accountName: "Hope Of Glory International Ministries",
    accountNumber: "— Request via email or WhatsApp",
    branch: "Harare",
    note: "Use your name + giving type (e.g. “Seed — J. Moyo”) as reference.",
  },
]

const ecocashLines = [
  { label: "Finance hotline", number: "0781333707" },
  { label: "Information desk", number: "0781333706" },
]

const faqItems = [
  {
    q: "Will I receive a receipt?",
    a: "Yes. Email info@prophetesstracy.com (or use the information desk numbers) with your name, amount, date, and giving type after you give.",
  },
  {
    q: "Can I give from outside Zimbabwe?",
    a: "Yes. Use the international section for PayPal or request USD/EUR bank wiring instructions from the finance team.",
  },
  {
    q: "Is my giving secure?",
    a: "We never ask for card numbers or PINs on this website. Use official bank/Ecocash details listed here or trusted links we provide.",
  },
  {
    q: "What is the difference between seed and offering?",
    a: "Offerings support general ministry; a seed is often a faith response for a particular season or promise, as the Lord leads you.",
  },
]

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="flex items-start justify-between gap-3 py-3 border-b border-white/6 last:border-0">
      <div className="min-w-0">
        {label ? <p className="text-[11px] uppercase tracking-wider text-white/35">{label}</p> : null}
        <p className="text-sm text-white/85 mt-0.5 break-all">{value}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          void navigator.clipboard.writeText(value)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }}
        className="shrink-0 p-2 border border-white/10 hover:border-gold/30 text-white/40 hover:text-gold transition-colors"
        aria-label={label ? `Copy ${label}` : "Copy"}
      >
        {copied ? <Check className="w-4 h-4 text-gold" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  )
}

function CopyNumber({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard.writeText(value.replace(/\s/g, ""))
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
      className="shrink-0 p-2 border border-white/10 hover:border-gold/30 text-white/40 hover:text-gold transition-colors"
      aria-label="Copy number"
    >
      {copied ? <Check className="w-4 h-4 text-gold" /> : <Copy className="w-4 h-4" />}
    </button>
  )
}

export default function GivingPage() {
  const [activeSection, setActiveSection] = useState<string>("overview")
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const navClickRef = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (navClickRef.current) return
      const marker = window.scrollY + window.innerHeight * 0.35
      for (let i = navSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(navSections[i].id)
        if (el && el.offsetTop <= marker) {
          setActiveSection(navSections[i].id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    navClickRef.current = true
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    setTimeout(() => {
      navClickRef.current = false
    }, 600)
  }

  return (
    <div className="relative bg-background min-h-screen text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[38vh] min-h-[240px] sm:h-[44vh] flex flex-col justify-end overflow-hidden">
        <Image
          src="/services.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/55 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pb-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold/75 font-medium">Give</span>
            <h1 className="mt-2 font-heading text-3xl sm:text-4xl md:text-5xl font-bold">Partner with the vision</h1>
            <p className="mt-3 max-w-xl text-white/45 text-sm sm:text-base">
              Honour God with your substance. Every gift fuels worship, Word, and outreach.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-linear-to-r from-transparent via-gold/20 to-transparent" />

      {/* Sticky section nav */}
      <div className="sticky top-16 sm:top-20 z-30 border-b border-white/6 bg-background/95 backdrop-blur-md">
        <nav
          className="max-w-7xl mx-auto px-3 sm:px-8 lg:px-12 flex gap-1 overflow-x-auto py-3 scrollbar-hide"
          aria-label="Giving sections"
        >
          {navSections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollTo(s.id)}
              className={`shrink-0 px-3 sm:px-4 py-2 text-[11px] sm:text-xs uppercase tracking-wider transition-colors ${
                activeSection === s.id ? "text-gold border-b-2 border-gold -mb-[13px] pb-[11px]" : "text-white/40 hover:text-white/70"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 pb-24 space-y-20 sm:space-y-28">
        {/* Overview */}
        <section id="overview" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
          >
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">Why we give</h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Scripture calls us to support God’s house and His work with glad hearts. Your giving helps us preach the
                Word, care for people, and reach nations—online and on the ground.
              </p>
              <blockquote className="border-l-2 border-gold/40 pl-5 py-1 text-white/60 text-sm italic">
                “Give, and it shall be given unto you; good measure, pressed down, and shaken together…”
                <cite className="block not-italic text-gold/70 text-xs mt-2">— Luke 6:38</cite>
              </blockquote>
            </div>
            <div className="border border-white/8 bg-white/2 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-gold/80">
                <Shield className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-medium">Safe giving</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed">
                This page shows <strong className="text-white/70">official channels only</strong>. We do not collect card numbers or PINs here. Use bank
                transfer, Ecocash, or the finance team for card / PayPal options.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Ways to give */}
        <section id="ways" className="scroll-mt-32">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">Ways to give</h2>
          <p className="text-white/40 text-sm mb-8 max-w-2xl">Choose what matches what God has put on your heart—each category is honoured and prayed over.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ways.map((w, i) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className="border border-white/6 bg-white/2 p-5 hover:border-gold/20 transition-colors duration-300"
              >
                <div className="w-10 h-10 border border-gold/25 flex items-center justify-center mb-4">
                  <w.icon className="w-5 h-5 text-gold/80" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{w.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bank */}
        <section id="bank" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-6 h-6 text-gold/70" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">Bank transfer</h2>
          </div>
          <p className="text-white/45 text-sm mb-6 max-w-2xl">
            Prefer local banking? Use the details below or contact finance for the latest verified account numbers before large transfers.
          </p>
          {bankAccounts.map((acc) => (
            <div key={acc.bank} className="border border-white/8 bg-white/2 p-6 sm:p-8 max-w-2xl">
              <p className="text-gold/80 text-sm font-medium mb-4">{acc.bank} · {acc.currency}</p>
              <CopyField label="Account name" value={acc.accountName} />
              <CopyField label="Account number" value={acc.accountNumber} />
              <CopyField label="Branch" value={acc.branch} />
              <p className="text-white/35 text-xs mt-4 pt-4 border-t border-white/6">{acc.note}</p>
            </div>
          ))}
        </section>

        {/* Ecocash */}
        <section id="ecocash" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6">
            <Smartphone className="w-6 h-6 text-gold/70" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">Ecocash</h2>
          </div>
          <p className="text-white/45 text-sm mb-6">Send to a registered ministry line and use your full name as reference.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            {ecocashLines.map((line) => (
              <div key={line.number} className="border border-white/8 bg-white/2 p-5">
                <span className="text-[11px] uppercase tracking-wider text-white/35">{line.label}</span>
                <div className="flex items-center justify-between gap-3 mt-3">
                  <a href={`tel:${line.number}`} className="font-heading text-lg sm:text-xl text-gold hover:text-gold-light transition-colors">
                    {line.number}
                  </a>
                  <CopyNumber value={line.number} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-4">Confirm the active merchant number with the information desk if unsure.</p>
        </section>

        {/* International */}
        <section id="international" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-gold/70" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">International & PayPal</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <div className="border border-white/8 bg-white/2 p-6 sm:p-8">
              <h3 className="font-heading font-semibold text-white mb-3">PayPal</h3>
              <p className="text-white/45 text-sm mb-6">
                When a ministry PayPal link is available, it will be added here. Until then, email finance for a secure payment link or wiring details.
              </p>
              <a
                href="mailto:info@prophetesstracy.com?subject=International%20giving"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-background text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                Request PayPal / wire details
              </a>
            </div>
            <div className="border border-gold/15 bg-gold/5 p-6 sm:p-8">
              <h3 className="font-heading font-semibold text-gold mb-3">Finance contact</h3>
              <p className="text-white/50 text-sm mb-4">Same team as our information desk—call or email with “Giving” in the subject.</p>
              <a href="mailto:info@prophetesstracy.com" className="flex items-center gap-2 text-white/70 hover:text-gold text-sm mb-3 transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                info@prophetesstracy.com
              </a>
              <a href="tel:0781333707" className="flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                0781333707 (Finance hotline)
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-32 pb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-8">Questions</h2>
          <div className="max-w-3xl space-y-2">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-white/6 bg-white/2">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-white/3 transition-colors"
                >
                  <span className="font-heading font-medium text-white text-sm sm:text-base pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-gold/60 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 sm:px-5 pb-5 text-white/45 text-sm leading-relaxed border-t border-white/6 pt-4">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

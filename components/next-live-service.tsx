"use client"

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

interface ServiceSlot {
  name: string
  start: string
  end: string
}

const schedule: Record<number, ServiceSlot[]> = {
  0: [{ name: 'Sunday Service', start: '10:00', end: '13:00' }],
  1: [
    { name: 'Word Service', start: '13:00', end: '14:00' },
    { name: 'School of Spirit', start: '17:30', end: '18:30' },
  ],
  2: [{ name: 'Prophetic Service', start: '13:00', end: '14:00' }],
  3: [
    { name: 'Deliverance Service', start: '13:00', end: '14:00' },
    { name: 'Worship Service', start: '17:30', end: '18:30' },
  ],
  4: [
    { name: 'Prophetic Service', start: '13:00', end: '14:00' },
    { name: 'Partners Service', start: '17:30', end: '18:30' },
    { name: 'Diaspora Zoom', start: '20:00', end: '21:00' },
  ],
  5: [{ name: 'PUSH Prayer', start: '13:00', end: '14:00' }],
  6: [{ name: 'PUSH Prayer', start: '14:30', end: '15:30' }],
}

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function toMinutes(time: string) {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

function buildServiceDate(now: Date, dayOffset: number, time: string) {
  const date = new Date(now)
  date.setDate(date.getDate() + dayOffset)
  const [h, m] = time.split(':').map(Number)
  date.setHours(h, m, 0, 0)
  return date
}

interface ServiceState {
  name: string
  day: string
  time: string
  isLive: boolean
  countdown: string
}

function resolveService(now: Date): ServiceState | null {
  const currentDay = now.getDay()
  const currentMinutes = now.getHours() * 60 + now.getMinutes()

  // 1. Check if a service is happening RIGHT NOW
  const todaySlots = schedule[currentDay] || []
  for (const slot of todaySlots) {
    const startMin = toMinutes(slot.start)
    const endMin = toMinutes(slot.end)
    if (currentMinutes >= startMin && currentMinutes < endMin) {
      const endDate = buildServiceDate(now, 0, slot.end)
      const diff = endDate.getTime() - now.getTime()
      const minsLeft = Math.ceil(diff / 60000)
      return {
        name: slot.name,
        day: dayNames[currentDay],
        time: slot.start,
        isLive: true,
        countdown: `Ends in ${minsLeft}m`,
      }
    }
  }

  // 2. Check for remaining services today
  for (const slot of todaySlots) {
    if (toMinutes(slot.start) > currentMinutes) {
      return buildCountdown(now, 0, slot, currentDay)
    }
  }

  // 3. Check upcoming days (1–7 ahead)
  for (let offset = 1; offset <= 7; offset++) {
    const dayIndex = (currentDay + offset) % 7
    const daySlots = schedule[dayIndex] || []
    if (daySlots.length > 0) {
      return buildCountdown(now, offset, daySlots[0], dayIndex)
    }
  }

  return null
}

function buildCountdown(now: Date, dayOffset: number, slot: ServiceSlot, dayIndex: number): ServiceState {
  const startDate = buildServiceDate(now, dayOffset, slot.start)
  const diff = startDate.getTime() - now.getTime()

  const totalMinutes = Math.max(0, Math.floor(diff / 60000))
  const days = Math.floor(totalMinutes / 1440)
  const hours = Math.floor((totalMinutes % 1440) / 60)
  const minutes = totalMinutes % 60

  let countdown: string
  if (days > 0) {
    countdown = `${days}d ${hours}h`
  } else if (hours > 0) {
    countdown = `${hours}h ${minutes}m`
  } else if (minutes > 0) {
    countdown = `${minutes}m`
  } else {
    countdown = 'Starting now'
  }

  return {
    name: slot.name,
    day: dayNames[dayIndex],
    time: slot.start,
    isLive: false,
    countdown,
  }
}

export default function NextLiveService() {
  const [service, setService] = useState<ServiceState | null>(null)

  const update = useCallback(() => {
    setService(resolveService(new Date()))
  }, [])

  useEffect(() => {
    update()
    const id = setInterval(update, 15000)
    return () => clearInterval(id)
  }, [update])

  if (!service) return null

  return (
    <motion.a
      href="https://www.facebook.com/prophetesstraceypilime"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 border border-white/8 hover:border-gold/25 bg-white/3 hover:bg-white/5 transition-all duration-400 max-w-[95vw] sm:max-w-none"
    >
      {/* Live indicator */}
      {service.isLive && (
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
        </span>
      )}

      {/* Service info */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <div className="flex items-center gap-2">
          {service.isLive ? (
            <span className="shrink-0 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-bold text-red-400">
              Happening Now
            </span>
          ) : (
            <span className="shrink-0 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-medium text-gold/60">
              Next Service
            </span>
          )}
          <span className={`text-sm sm:text-base font-heading font-semibold truncate ${service.isLive ? 'text-white' : 'text-white/80 group-hover:text-white'} transition-colors duration-300`}>
            {service.name}
          </span>
        </div>
        <span className="text-[11px] sm:text-xs text-white/35">
          {service.day} &middot; {service.time}
        </span>
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-white/10 shrink-0 ml-auto" />

      {/* Countdown */}
      <div className="shrink-0 text-right">
        <span className={`block text-sm sm:text-base font-heading font-bold ${service.isLive ? 'text-red-400' : 'text-gold'}`}>
          {service.countdown}
        </span>
        <span className="text-[10px] sm:text-[11px] text-white/25 uppercase tracking-wider">
          {service.isLive ? 'remaining' : 'until start'}
        </span>
      </div>

      {/* Arrow */}
      <svg
        className="shrink-0 w-4 h-4 text-white/20 group-hover:text-gold/60 transition-colors duration-300 ml-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </motion.a>
  )
}

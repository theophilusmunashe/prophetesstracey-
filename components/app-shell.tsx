"use client"

import { useState } from "react"
import Preloader from "./preloader"

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <>
      <div
        className={`min-h-screen transition-opacity duration-700 ease-out ${
          revealed ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!revealed}
      >
        {children}
      </div>
      <Preloader onReveal={() => setRevealed(true)} />
    </>
  )
}

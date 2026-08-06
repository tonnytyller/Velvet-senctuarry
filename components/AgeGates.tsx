'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AgeGate() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasChecked, setHasChecked] = useState(false)

  useEffect(() => {
    const verified = document.cookie.includes('age-verified=true')
    if (!verified) {
      setIsVisible(true)
    }
    setHasChecked(true)
  }, [])

  const handleEnter = () => {
    document.cookie = 'age-verified=true; path=/; max-age=2592000; SameSite=Strict; Secure'
    setIsVisible(false)
  }

  const handleExit = () => {
    window.location.href = 'https://www.google.com'
  }

  if (!hasChecked || !isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0a0a] px-4"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-lg text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl text-[#f5e6d3] mb-6 tracking-wide">
              A space for intimate discovery awaits.
            </h1>
            <p className="text-[#c9b8a8] leading-relaxed mb-8 text-sm md:text-base">
              Welcome to a sanctuary crafted for adult exploration — a place where desire deepens,
              curiosity is celebrated, and privacy is sacred. By entering, you confirm that you are
              of legal adult age in your region and consent to view content of a sensual nature.
              We honor your journey and guard your secrets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEnter}
                className="bg-[#8b5e3c] hover:bg-[#a0704f] text-[#f5e6d3] px-10 py-3 rounded-full 
                         text-sm tracking-widest uppercase transition-all duration-300"
              >
                Enter with Me
              </button>
              <button
                onClick={handleExit}
                className="border border-[#5c4a3a] text-[#8b7b6b] hover:text-[#c9b8a8] px-10 py-3 
                         rounded-full text-sm tracking-widest uppercase transition-all duration-300"
              >
                I&apos;ll Come Back Later
              </button>
            </div>
            <p className="text-[#6b5d4f] text-xs mt-8 italic">
              We honor your privacy and your journey. This is a safe space.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

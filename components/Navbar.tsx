'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  { name: 'Touch & Glide', slug: 'touch-and-glide' },
  { name: 'Body & Vibe', slug: 'body-and-vibe' },
  { name: 'Wear & Reveal', slug: 'wear-and-reveal' },
  { name: 'Bind & Play', slug: 'bind-and-play' },
  { name: 'Together', slug: 'together' },
  { name: 'Rituals', slug: 'rituals' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#faf6f1]/95 backdrop-blur-sm border-b border-[#e8d5bc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl text-[#4a2f20] tracking-wide">
            Velvet Sanctuary
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="text-sm text-[#6b4530] hover:text-[#8b5e3c] transition-colors tracking-wide"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/cart"
              className="text-sm text-[#6b4530] hover:text-[#8b5e3c] transition-colors"
            >
              🛒
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#4a2f20] text-2xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#faf6f1] border-t border-[#e8d5bc]"
        >
          <div className="px-4 py-4 space-y-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-[#6b4530] hover:text-[#8b5e3c] transition-colors py-2"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="block text-sm text-[#6b4530] hover:text-[#8b5e3c] transition-colors py-2"
            >
              Your Private Collection 🛒
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

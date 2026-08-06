import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2c1f14] text-[#c9b8a8] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-xl text-[#f5e6d3] mb-3">Velvet Sanctuary</h3>
            <p className="text-sm leading-relaxed">
              A curated space for intimate discovery. Your privacy is our vow.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[#f5e6d3] text-sm uppercase tracking-widest mb-3">Shop</h4>
            <div className="space-y-2 text-sm">
              <Link href="/categories/touch-and-glide" className="block hover:text-[#f5e6d3] transition-colors">Touch & Glide</Link>
              <Link href="/categories/body-and-vibe" className="block hover:text-[#f5e6d3] transition-colors">Body & Vibe</Link>
              <Link href="/categories/wear-and-reveal" className="block hover:text-[#f5e6d3] transition-colors">Wear & Reveal</Link>
              <Link href="/categories/bind-and-play" className="block hover:text-[#f5e6d3] transition-colors">Bind & Play</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[#f5e6d3] text-sm uppercase tracking-widest mb-3">Help</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block hover:text-[#f5e6d3] transition-colors">About Us</Link>
              <Link href="/discretion" className="block hover:text-[#f5e6d3] transition-colors">Our Discretion Promise</Link>
              <Link href="/faq" className="block hover:text-[#f5e6d3] transition-colors">FAQ</Link>
              <Link href="/body-safe" className="block hover:text-[#f5e6d3] transition-colors">Body-Safe Materials</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#f5e6d3] text-sm uppercase tracking-widest mb-3">Contact</h4>
            <p className="text-sm leading-relaxed">
              Reach out with warmth and absolute discretion.<br />
              support@velvetsanctuary.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#4a2f20] mt-8 pt-8 text-center text-xs text-[#8b7b6b]">
          <p>Every package arrives in unmarked discretion. Your pleasure is our privilege — and your privacy, our vow.</p>
          <p className="mt-2">© {new Date().getFullYear()} Velvet Sanctuary. For adults 18+ only.</p>
        </div>
      </div>
    </footer>
  )
}

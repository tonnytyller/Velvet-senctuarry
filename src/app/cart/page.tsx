'use client'

import { useCartStore } from '@/lib/store'
import Link from 'next/link'

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-3xl text-[#4a2f20] mb-4">Your Private Collection</h1>
        <p className="text-[#8b7b6b] mb-8 leading-relaxed">
          Your sanctuary awaits. Why not explore Touch & Glide and find something that stirs your curiosity?
        </p>
        <Link href="/categories/touch-and-glide" className="btn-primary inline-block">
          Explore Touch & Glide
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-serif text-3xl text-[#4a2f20] mb-8">Your Private Collection</h1>

      {/* Items */}
      <div className="space-y-4 mb-8">
        {items.map((item) => {
          const price = (item.product.sale_price_cents ?? item.product.price_cents) / 100
          return (
            <div
              key={item.product.id}
              className="flex items-center gap-4 bg-white p-4 rounded-lg border border-[#e8d5bc]"
            >
              <div className="w-16 h-16 bg-[#fdf8f3] rounded flex items-center justify-center text-2xl">
                🌹
              </div>
              <div className="flex-grow">
                <h3 className="font-serif text-sm text-[#4a2f20]">{item.product.name}</h3>
                <p className="text-[#8b5e3c] text-sm">${price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full border border-[#e8d5bc] text-[#8b7b6b] hover:bg-[#fdf8f3]"
                >
                  −
                </button>
                <span className="text-sm w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full border border-[#e8d5bc] text-[#8b7b6b] hover:bg-[#fdf8f3]"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.product.id)}
                className="text-[#c9b8a8] hover:text-red-400 transition-colors text-sm ml-2"
              >
                ✕
              </button>
            </div>
          )
        })}
      </div>

      {/* Total & Checkout */}
      <div className="bg-[#fdf8f3] border border-[#e8d5bc] rounded-lg p-6">
        <div className="flex justify-between mb-4">
          <span className="text-[#8b7b6b]">{totalItems()} items</span>
          <span className="font-serif text-xl text-[#4a2f20]">${(totalPrice() / 100).toFixed(2)}</span>
        </div>
        <p className="text-xs text-[#8b7b6b] mb-4 flex items-center gap-1">
          🔒 Discreet billing & shipping. Your privacy is our vow.
        </p>
        <button className="btn-primary w-full">
          Secure Your Pleasure
        </button>
      </div>
    </div>
  )
}

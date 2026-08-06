'use client'

import { useCartStore } from '@/lib/store'
import { Product } from '@/lib/database.types'
import toast from 'react-hot-toast'

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAdd = () => {
    addItem(product)
    toast.success('Gently placed in your basket.', {
      icon: '🌸',
    })
  }

  if (product.stock_status === 'out_of_stock') {
    return (
      <p className="text-[#8b7b6b] italic text-sm">
        Currently savoring a quiet moment. Leave your email, and we&apos;ll whisper when it returns.
      </p>
    )
  }

  return (
    <button onClick={handleAdd} className="btn-primary w-full md:w-auto">
      Add to Cart
    </button>
  )
}

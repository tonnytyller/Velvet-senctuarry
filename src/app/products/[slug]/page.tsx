import { supabase } from '@/lib/supabase'
import { Product } from '@/lib/database.types'
import { notFound } from 'next/navigation'
import AddToCartButton from './AddToCartButton'

type Props = {
  params: { slug: string }
}

async function getProduct(slug: string): Promise<Product | null> {
  const { data } = await supabase
    .from('products')
    .select('*, categories(*)')
    .eq('slug', slug)
    .single()
  return data
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  const price = (product.sale_price_cents ?? product.price_cents) / 100
  const hasSale = product.sale_price_cents !== null && product.sale_price_cents < product.price_cents
  const originalPrice = product.price_cents / 100

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="aspect-square bg-[#fdf8f3] rounded-lg flex items-center justify-center text-6xl border border-[#e8d5bc]">
          🌹
        </div>

        {/* Product Details */}
        <div>
          <p className="text-sm text-[#8b7b6b] uppercase tracking-widest mb-2">
            {product.categories?.name}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-[#4a2f20] mb-6">
            {product.name}
          </h1>

          {/* Opening Vignette */}
          <p className="text-[#8b5e3c] italic leading-relaxed mb-8 border-l-2 border-[#e8d5bc] pl-4">
            {product.opening_vignette}
          </p>

          {/* Sensory Description */}
          <p className="text-[#4a2f20] leading-relaxed mb-8">
            {product.sensory_description}
          </p>

          {/* Why You'll Love It */}
          <div className="mb-8">
            <h3 className="font-serif text-lg text-[#4a2f20] mb-3">Why You&apos;ll Love It</h3>
            <ul className="space-y-2">
              {product.why_youll_love_it?.map((bullet: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#6b4530]">
                  <span className="text-[#8b5e3c] mt-0.5">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="mb-6">
            {hasSale ? (
              <div className="flex items-center gap-3">
                <span className="text-3xl font-serif text-[#8b5e3c]">${price.toFixed(2)}</span>
                <span className="text-lg text-[#c9b8a8] line-through">${originalPrice.toFixed(2)}</span>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Sale</span>
              </div>
            ) : (
              <span className="text-3xl font-serif text-[#8b5e3c]">${price.toFixed(2)}</span>
            )}
          </div>

          {/* Add to Cart */}
          <AddToCartButton product={product} />

          {/* Discreet Delivery */}
          <div className="mt-6 flex items-center gap-2 text-sm text-[#8b7b6b]">
            <span>🔒</span>
            <span>
              Ships in plain, unmarked packaging. Your billing will show a neutral company name.
              Even the delivery driver won&apos;t know your beautiful secret.
            </span>
          </div>

          {/* Specs & Care */}
          <div className="mt-8 border-t border-[#e8d5bc] pt-6">
            <h3 className="font-serif text-lg text-[#4a2f20] mb-3">
              The details that matter, because you do.
            </h3>
            <dl className="grid grid-cols-2 gap-2 text-sm">
              <dt className="text-[#8b7b6b]">Materials</dt>
              <dd className="text-[#4a2f20]">{product.specs_care?.materials || '—'}</dd>
              <dt className="text-[#8b7b6b]">Dimensions</dt>
              <dd className="text-[#4a2f20]">{product.specs_care?.dimensions || '—'}</dd>
              <dt className="text-[#8b7b6b]">Weight</dt>
              <dd className="text-[#4a2f20]">{product.specs_care?.weight || '—'}</dd>
              <dt className="text-[#8b7b6b]">Battery</dt>
              <dd className="text-[#4a2f20]">{product.specs_care?.battery || '—'}</dd>
              <dt className="text-[#8b7b6b]">Waterproof</dt>
              <dd className="text-[#4a2f20]">{product.specs_care?.waterproof || '—'}</dd>
              <dt className="text-[#8b7b6b]">Cleaning</dt>
              <dd className="text-[#4a2f20]">{product.specs_care?.cleaning || '—'}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

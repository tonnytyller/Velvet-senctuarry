import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Product } from '@/lib/database.types'

async function getFeaturedProducts(): Promise<Product[]> {
  const { data } = await supabase
    .from('products')
    .select('*, categories(*)')
    .eq('is_featured', true)
    .limit(4)
  return data || []
}

const featuredCategories = [
  {
    name: 'Touch & Glide',
    slug: 'touch-and-glide',
    description:
      'Turn an ordinary evening into a ritual of touch. Warm oil pooling in the small of a back, fingertips tracing stories on skin. Discover the alchemy of scent and glide.',
  },
  {
    name: 'Body & Vibe',
    slug: 'body-and-vibe',
    description:
      'Solo explorations or shared adventures — find the hum that harmonizes with your body\'s secret rhythm. From gentle whispers to commanding pulses.',
  },
  {
    name: 'Wear & Reveal',
    slug: 'wear-and-reveal',
    description:
      'Adornment that speaks before you do. Lace that catches the light and silk that slides like a promise. Dress for the mirror, the moment, or the one who can\'t wait to undress you.',
  },
  {
    name: 'Bind & Play',
    slug: 'bind-and-play',
    description:
      'Trust, tension, and the thrill of surrender. Silken restraints and feathered teasers for those who find freedom in giving over control, even just for a breath.',
  },
]

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-32 px-4 text-center bg-gradient-to-b from-[#fdf8f3] to-[#faf6f1]">
        <h1 className="font-serif text-4xl md:text-6xl text-[#4a2f20] mb-6 tracking-wide">
          Where desire deepens and curiosity is celebrated.
        </h1>
        <p className="text-[#8b7b6b] max-w-2xl mx-auto leading-relaxed mb-8">
          Imagine a quiet evening, the room bathed in amber light. A glance held a moment too long.
          The rustle of silk. The scent of jasmine and warm skin. Here, every item is an invitation
          — to feel more, to connect more deeply, to laugh softly in the dark. Whether you are
          rediscovering yourself or weaving new threads with a partner, you have arrived at a place
          made for you.
        </p>
        <Link href="/categories/touch-and-glide" className="btn-primary inline-block">
          Explore the Collection
        </Link>
      </section>

      {/* Brand Promise Bar */}
      <section className="bg-[#2c1f14] text-[#f5e6d3] py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl mb-3">📦</div>
            <h3 className="font-serif text-lg mb-2">Total Discretion</h3>
            <p className="text-sm text-[#c9b8a8]">
              Plain packaging, no visible branding. Your secret is safe with us — from cart to doorstep.
            </p>
          </div>
          <div>
            <div className="text-3xl mb-3">💎</div>
            <h3 className="font-serif text-lg mb-2">Curated for Care</h3>
            <p className="text-sm text-[#c9b8a8]">
              Every item is chosen for body-safe materials and soul-deep sensation.
            </p>
          </div>
          <div>
            <div className="text-3xl mb-3">🌿</div>
            <h3 className="font-serif text-lg mb-2">A Judgement-Free Zone</h3>
            <p className="text-sm text-[#c9b8a8]">
              Explore every curiosity at your own rhythm. All desires welcome here.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="section-title">Explore by Mood</h2>
        <p className="section-subtitle">
          Each category is a doorway. Choose the one that stirs something in you tonight.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#e8d5bc]"
            >
              <h3 className="font-serif text-xl text-[#4a2f20] mb-3 group-hover:text-[#8b5e3c] transition-colors">
                {cat.name}
              </h3>
              <p className="text-sm text-[#8b7b6b] leading-relaxed">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <h2 className="section-title">Treasures We Love</h2>
          <p className="section-subtitle">
            Hand-picked pieces our community returns to, again and again.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-square bg-[#fdf8f3] flex items-center justify-center text-4xl">
                  🌹
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-sm text-[#4a2f20] group-hover:text-[#8b5e3c] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#8b5e3c] font-medium mt-1">
                    ${((product.sale_price_cents ?? product.price_cents) / 100).toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Footer Promise */}
      <section className="text-center py-10 bg-[#fdf8f3] border-t border-[#e8d5bc]">
        <p className="text-[#8b7b6b] italic text-sm">
          Every package arrives in unmarked discretion. Your pleasure is our privilege — and your privacy, our vow.
        </p>
      </section>
    </div>
  )
}

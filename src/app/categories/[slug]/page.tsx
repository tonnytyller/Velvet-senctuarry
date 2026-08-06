import { supabase } from '@/lib/supabase'
import { Product, Category } from '@/lib/database.types'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

async function getCategory(slug: string): Promise<Category | null> {
  const { data } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single()
  return data
}

async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('category_id', categoryId)
  return data || []
}

export default async function CategoryPage({ params }: Props) {
  const category = await getCategory(params.slug)

  if (!category) {
    notFound()
  }

  const products = await getProductsByCategory(category.id)

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Category Header */}
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-[#4a2f20] mb-6">
          {category.name}
        </h1>
        <p className="text-[#8b7b6b] max-w-2xl mx-auto leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Trust Banner */}
      <div className="bg-[#fdf8f3] border border-[#e8d5bc] rounded-lg p-4 text-center mb-12">
        <p className="text-sm text-[#6b4530]">
          Unsure where to start? Every product is body-safe, rigorously tested, and comes with our
          discreet delivery promise. There&apos;s no wrong door.
        </p>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
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
                {product.stock_status === 'low_stock' && (
                  <p className="text-xs text-amber-600 mt-1">Only a few left</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-[#8b7b6b] text-lg">
            Our treasures in this category are being curated. Check back soon — something beautiful is on its way.
          </p>
        </div>
      )}
    </div>
  )
                  }

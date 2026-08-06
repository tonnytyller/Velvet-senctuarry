export type Category = {
  id: string
  name: string
  slug: string
  description: string
  image_url: string | null
}

export type Product = {
  id: string
  category_id: string
  name: string
  slug: string
  opening_vignette: string
  sensory_description: string
  why_youll_love_it: string[]
  specs_care: {
    materials: string
    dimensions: string
    weight: string
    battery: string
    waterproof: string
    cleaning: string
  }
  price_cents: number
  sale_price_cents: number | null
  images: string[]
  stock_status: 'in_stock' | 'low_stock' | 'out_of_stock'
  is_featured: boolean
  created_at: string
  categories?: Category
}

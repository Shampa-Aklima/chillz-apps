export interface Recipe {
  id: string
  title: string
  image?: string
  rating: number
  reviewCount: number
  price: number
  time: string
  serves: number
  difficulty: string
}

export interface Product {
  id: string
  image: string
  title: string
  price: number
  salePrice?: number
  rating: number
  reviewCount: number
  badge?: string
  category?: string
}

export interface Category {
  id: string
  title: string
  image?: string
  price: string
  slug: string
}

export interface Blog {
  id: string
  title: string
  image?: string
  category: string
  date: string
  excerpt: string
} 
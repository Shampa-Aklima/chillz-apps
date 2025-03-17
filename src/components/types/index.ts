export interface Product {
    id: string
    title: string
    price: string
    salePrice?: string
    image: string
    rating: number
    reviewCount?: number
    badge?: string
    category?: string
    slug: string
  }
  
  export interface Category {
    id: string
    title: string
    slug: string
    image: string
    price: string
  }
  
  export interface Recipe {
    id: string
    title: string
    image: string
    rating: number
    reviewCount: number
    price: number
    time: string
    serves: number
    difficulty: string
  }
  
  export interface Blog {
    id: string
    title: string
    excerpt: string
    image: string
    category: string
    date: string
    slug: string
  }
  
  
"use client"

import Image from "next/image"
import { ShoppingCart, Star } from "lucide-react"

interface ProductCardProps {
  id: string
  image: string
  title: string
  price: string
  salePrice?: string
  rating: number
  reviewCount?: number
  badge?: string
}

export function ProductCard({ image, title, price, salePrice, rating, reviewCount = 0, badge }: ProductCardProps) {
  return (
    <div className="bg-white rounded-md border border-gray-200 overflow-hidden group">
      <div className="relative pt-4 px-4">
        {badge && (
          <span className="absolute top-2 right-2 bg-[#c11a1a] text-white text-xs px-2 py-1 rounded">{badge}</span>
        )}
        <div className="relative h-48 w-full flex items-center justify-center">
          <Image
            src={image || "/placeholder.svg?height=200&width=200"}
            alt={title}
            width={150}
            height={150}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium line-clamp-2 h-10 mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3 w-3 ${star <= Math.floor(rating) ? "fill-[#fcc419] text-[#fcc419]" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">{reviewCount > 0 ? `(${reviewCount})` : `(${rating})`}</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            {salePrice ? (
              <div className="flex items-center">
                <span className="text-xs text-gray-500 line-through mr-1">{price}</span>
                <span className="font-bold text-[#c11a1a]">{salePrice}</span>
              </div>
            ) : (
              <span className="font-bold">{price}</span>
            )}
          </div>
          <button className="bg-[#004745] text-white p-1.5 rounded-md">
            <ShoppingCart className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import { ProductCard } from "./shared/product-card"
import { SectionHeader } from "./shared/section-header"
import type { Product } from "@/types"
import Image from "next/image"

interface ProductSectionProps {
  title: string
  products: Product[]
  categories?: string[]
  activeCategory?: string
  showSpecialOffer?: boolean
}

export function ProductSection({
  title,
  products,
  categories,
  activeCategory,
  showSpecialOffer = false,
}: ProductSectionProps) {
  const [currentCategory, setCurrentCategory] = useState(activeCategory || (categories && categories[0]))

  // Filter products by category if needed
  const displayProducts = currentCategory ? products.filter((p) => p.category === currentCategory) : products

  // Split products into rows if needed
  const firstRowProducts = displayProducts.slice(0, 5)
  const secondRowProducts = displayProducts.slice(5, 9)

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={title}
          categories={categories || []}
          activeCategory={currentCategory || "All"}
          onCategoryChange={setCurrentCategory}
        />

        <div className="grid grid-cols-5 gap-4">
          {showSpecialOffer && firstRowProducts.length >= 3 ? (
            <>
              {firstRowProducts.slice(0, 2).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price.toString()}
                  salePrice={product.salePrice?.toString()}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  badge={product.badge}
                />
              ))}
              <div className="relative rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Special Organic"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold mb-2">Special Organic</h3>
                  <div className="flex items-center text-white mb-2">
                    <span className="text-sm">From</span>
                    <span className="text-xl font-bold ml-2">$ 124.99</span>
                  </div>
                  <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium">Shop Now</button>
                </div>
              </div>
              {firstRowProducts.slice(2, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price.toString()}
                  salePrice={product.salePrice?.toString()}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  badge={product.badge}
                />
              ))}
            </>
          ) : (
            firstRowProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price.toString()}
                salePrice={product.salePrice?.toString()}
                rating={product.rating}
                reviewCount={product.reviewCount}
                badge={product.badge}
              />
            ))
          )}
        </div>

        {secondRowProducts.length > 0 && (
          <div className="grid grid-cols-4 gap-4 mt-6">
            {secondRowProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price.toString()}
                salePrice={product.salePrice?.toString()}
                rating={product.rating}
                reviewCount={product.reviewCount}
                badge={product.badge}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}


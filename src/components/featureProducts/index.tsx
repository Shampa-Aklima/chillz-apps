"use client"

import { useState } from "react"
import { ProductCard } from "../shared/product-card"
import { SectionHeader } from "../shared/section-header"
import { featuredProducts } from "./data"

export function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("Beverages")
  const categories = ["Beverages", "Breads & Bakery", "Snacks & Candy"]

  // Filter products by category
  const filteredProducts = featuredProducts.filter((p) => p.category === activeCategory)

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Featured Products"
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              salePrice={product.salePrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


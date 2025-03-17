import Image from "next/image"
import Link from "next/link"
import type { Category } from "@/types"

interface CategoryGridProps {
  categories: Category[]
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-md border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold">Featured Products</h3>
                <span className="text-sm text-gray-500">{category.title}</span>
              </div>
              <div className="flex items-center">
                <div className="w-1/3">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">From</span>
                    <span className="font-bold text-lg">{category.price}</span>
                    <Link href={`/category/${category.slug}`} className="mt-2">
                      <button className="bg-[#004745] text-white px-3 py-1.5 rounded-md text-sm">Shop Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


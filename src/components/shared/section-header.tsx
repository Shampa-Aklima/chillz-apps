"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SectionHeaderProps {
  title: string
  categories?: string[]
  activeCategory?: string
  onCategoryChange?: (category: string) => void
  viewAllLink?: string
}

export function SectionHeader({
  title,
  categories,
  activeCategory,
  onCategoryChange,
  viewAllLink = "/view-all",
}: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold">{title}</h2>

      {categories && categories.length > 0 && (
        <div className="flex space-x-4 text-sm">
          {categories.map((category) => (
            <button
              key={category}
              className={`${category === activeCategory ? "font-medium text-[#004745]" : "text-gray-500"}`}
              onClick={() => onCategoryChange && onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <Link href={viewAllLink} className="text-sm text-gray-500 flex items-center">
        View All <ChevronRight className="h-4 w-4 ml-1" />
      </Link>
    </div>
  )
}


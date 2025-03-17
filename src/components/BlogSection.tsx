"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { SectionHeader } from "./shared/section-header"
import type { Blog } from "@/types"

interface BlogSectionProps {
  blogs: Blog[]
}

export function BlogSection({ blogs }: BlogSectionProps) {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Blogs"
          categories={["All", "Food", "Recipes", "Tips", "News"]}
          activeCategory="All"
          onCategoryChange={(category) => console.log(category)}
        />

        <div className="grid grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="rounded-md overflow-hidden border border-gray-200">
              <Image
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-gray-500">
                  {blog.category} • {blog.date}
                </span>
                <h3 className="font-medium mt-2 mb-1">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{blog.excerpt}</p>
                <Link href={`/blog/${blog.id}`} className="text-xs text-[#004745] flex items-center">
                  Read More <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


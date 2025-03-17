"use client"

import Image from "next/image"
import Link from "next/link"

export function PromoBanners() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#e6e8eb] rounded-md p-6 flex items-center">
            <div className="w-1/2">
              <h3 className="text-xl font-bold mb-2">All you need under one roof</h3>
              <p className="text-sm text-gray-600 mb-4">Shop groceries, drinks and more...</p>
              <Link href="/shop-now">
                <button className="bg-[#0e0e0e] text-white px-4 py-2 rounded-md text-sm">Shop Now</button>
              </Link>
            </div>
            <div className="w-1/2 flex justify-end">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Promo banner"
                width={200}
                height={150}
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-[#e6e8eb] rounded-md p-6 flex items-center">
            <div className="w-1/2">
              <h3 className="text-xl font-bold mb-2">We have it, so you dont have to.</h3>
              <p className="text-sm text-gray-600 mb-4">Fresh drinks delivered to your door</p>
              <Link href="/shop-now">
                <button className="bg-[#0e0e0e] text-white px-4 py-2 rounded-md text-sm">Shop Now</button>
              </Link>
            </div>
            <div className="w-1/2 flex justify-end">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Promo banner"
                width={200}
                height={150}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

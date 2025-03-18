"use client"

import Link from "next/link"

export function PromoBanners() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6">
          {/* First Banner */}
          <div
            className="rounded-md p-6 flex items-center bg-cover bg-center"
            style={{ backgroundImage: "url('/banner4.jpeg')" }}
          >
            <div className="w-1/2 bg-white bg-opacity-80 p-4 rounded-md">
              <h3 className="text-xl font-bold mb-2">All you need under one roof</h3>
              <p className="text-sm text-gray-600 mb-4">Shop groceries, drinks and more...</p>
              <Link href="/shop-now">
                <button className="bg-[#0e0e0e] text-white px-4 py-2 rounded-md text-sm">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Second Banner */}
          <div
            className="rounded-md p-6 flex items-center bg-cover bg-center"
            style={{ backgroundImage: "url('/banner5.jpeg')" }}
          >
            <div className="w-1/2 bg-white bg-opacity-80 p-4 rounded-md">
              <h3 className="text-xl font-bold mb-2">We have it, so you don&apos;t have to.</h3>
              <p className="text-sm text-gray-600 mb-4">Fresh drinks delivered to your door</p>
              <Link href="/shop-now">
                <button className="bg-[#0e0e0e] text-white px-4 py-2 rounded-md text-sm">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

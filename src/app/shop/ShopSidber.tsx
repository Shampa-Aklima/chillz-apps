"use client"

import { useState } from "react"
import Link from "next/link"

export default function ShopSidebar() {
  const [priceFrom, setPriceFrom] = useState("")
  const [priceTo, setPriceTo] = useState("")

  return (
    <div className="w-64 pr-6">
      <div className="mb-8">
        <h2 className="text-sm font-bold uppercase mb-4">PRODUCT CATEGORIES</h2>
        <ul className="space-y-3">
          <li>
            <Link href="#" className="text-sm hover:text-teal-500">
              Beverages
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm hover:text-teal-500">
              Biscuits & Snacks
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm hover:text-teal-500">
              Breads & Bakery
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm hover:text-teal-500">
              Breakfast & Dairy
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm hover:text-teal-500">
              Frozen Foods
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm hover:text-teal-500">
              Fruits & Vegetables
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm hover:text-teal-500">
              Grocery & Staples
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm hover:text-teal-500">
              Household Needs
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm hover:text-teal-500">
              Meats & Seafood
            </Link>
          </li>
        </ul>
      </div>

     
      <div className="mb-8">
        <h2 className="text-sm font-bold uppercase mb-4">BRANDS</h2>
        <ul className="space-y-3">
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="brand-1" className="mr-2 h-4 w-4 border-gray-300 rounded" />
              <label htmlFor="brand-1" className="text-sm cursor-pointer">
                Frito Lay
              </label>
            </div>
            <span className="text-gray-400 text-sm">(6)</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="brand-2" className="mr-2 h-4 w-4 border-gray-300 rounded" />
              <label htmlFor="brand-2" className="text-sm cursor-pointer">
                Quaker
              </label>
            </div>
            <span className="text-gray-400 text-sm">(26)</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="brand-3" className="mr-2 h-4 w-4 border-gray-300 rounded" />
              <label htmlFor="brand-3" className="text-sm cursor-pointer">
                Coca
              </label>
            </div>
            <span className="text-gray-400 text-sm">(3)</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="brand-4" className="mr-2 h-4 w-4 border-gray-300 rounded" />
              <label htmlFor="brand-4" className="text-sm cursor-pointer">
                Welchs
              </label>
            </div>
            <span className="text-gray-400 text-sm">(1)</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="brand-5" className="mr-2 h-4 w-4 border-gray-300 rounded" />
              <label htmlFor="brand-5" className="text-sm cursor-pointer">
                Other
              </label>
            </div>
            <span className="text-gray-400 text-sm">(10)</span>
          </li>
        </ul>
      </div>

     
      <div className="mb-8">
        <h2 className="text-sm font-bold uppercase mb-4">PRICE</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm mr-2">From</span>
            <input
              type="text"
              className="w-16 border rounded p-1 text-sm"
              placeholder="0"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
            />
          </div>
          <span className="text-sm">-</span>
          <div className="flex items-center">
            <span className="text-sm mr-2">To</span>
            <input
              type="text"
              className="w-16 border rounded p-1 text-sm"
              placeholder="50.00"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
            />
          </div>
        </div>
      </div>

   
      <div className="mb-8">
        <h2 className="text-sm font-bold uppercase mb-4">AVAILABILITY</h2>
        <ul className="space-y-3">
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="in-stock" className="mr-2 h-4 w-4 border-gray-300 rounded" />
              <label htmlFor="in-stock" className="text-sm cursor-pointer">
                In Stock
              </label>
            </div>
            <span className="text-gray-400 text-sm">(95)</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="out-of-stock" className="mr-2 h-4 w-4 border-gray-300 rounded" />
              <label htmlFor="out-of-stock" className="text-sm cursor-pointer">
                Out of stock
              </label>
            </div>
            <span className="text-gray-400 text-sm">(6)</span>
          </li>
        </ul>
      </div>
    
      <div className="bg-gray-200 h-64 w-full"></div>
    </div>
  )
}


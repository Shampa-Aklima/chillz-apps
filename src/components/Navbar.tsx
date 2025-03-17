"use client"

import { Gift, Heart, MapPin, Menu, Moon, Search, ShoppingCart, Sun, Timer, User, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchExpanded, setSearchExpanded] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Close search if mobile menu is opened
    if (!mobileMenuOpen) {
      setSearchExpanded(false)
    }
  }

  const toggleSearch = () => {
    setSearchExpanded(!searchExpanded)
    // Close mobile menu if search is expanded
    if (!searchExpanded) {
      setMobileMenuOpen(false)
    }
  }

  // If search is expanded, we only want to show the search box (mobile only)
  if (searchExpanded) {
    return (
      <div className="fixed inset-0 bg-white z-50 sm:hidden">
        <div className="container mx-auto px-4 py-4">
          {/* Mobile View - Search Bar when expanded */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-grow">
              <input
                type="text"
                placeholder="Search for product"
                className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:border-teal-500"
                autoFocus
              />
              <button className="px-6 bg-teal-600 text-white rounded-r-md hover:bg-teal-700">
                <Search className="h-5 w-5" />
              </button>
            </div>
            <button onClick={toggleSearch} className="ml-4">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <header className="w-full">
      {/* Top black bar */}
      <div className="bg-black text-white text-xs py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left links - hidden on mobile */}
          <div className="hidden sm:flex items-center space-x-4">
          <Link href="/shop" className="hover:text-gray-300">
              Shop
            </Link>
           
            <Link href="/track" className="hover:text-gray-300">
              Track Order
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <Link href="/faq" className="hover:text-gray-300">
              FAQ
            </Link>
          </div>

          {/* Center delivery info */}
          <div className="hidden lg:flex items-center">
            <span className="text-gray-400 mr-1">We deliver to you every day from</span>
            <span className="font-medium">7:00 to 23:00</span>
          </div>

          {/* Right options */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <select className="bg-transparent text-white text-xs border-none outline-none">
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
            <select className="bg-transparent text-white text-xs border-none outline-none">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="flex items-center">
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="ml-1 hidden sm:inline">Dark Theme</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center justify-center gap-2">
              
              <Image 
                src="/logo.svg" 
                alt="Chillz" 
                className="h-6 sm:h-10 w-auto" 
                width={120}
                height={40}
              />
              <h2 className="text-xl sm:text-2xl font-bold">Chillz </h2>
            </Link>

            {/* PC view - Location selector and Search for product */}
            <div className="hidden md:flex items-center flex-grow justify-center space-x-4">
              <button className="flex items-center text-sm bg-gray-100 px-3 py-2 rounded-md">
                <MapPin className="h-4 w-4 text-teal-600 mr-2" />
                <span>Select Location</span>
              </button>
              
              {/* Search for product component */}
              <div className="flex flex-grow max-w-md">
                <input
                  type="text"
                  placeholder="Search for product"
                  className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:border-teal-500"
                />
                <button className="px-4 bg-teal-600 text-white rounded-r-md hover:bg-teal-700">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center space-x-3 sm:space-x-6">
              {/* Mobile search toggle */}
              <button className="sm:hidden" onClick={toggleSearch}>
                <Search className="h-5 w-5" />
              </button>

              <button className="hidden sm:flex items-center text-sm">
                <User className="h-5 w-5" />
                <span className="hidden md:inline ml-2">Account</span>
              </button>

              <button className="relative hidden sm:block">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>

              <button className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar - Desktop */}
      <div className="bg-white border-b hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <nav className="flex-grow">
              <ul className="flex items-center space-x-4 lg:space-x-8 py-3 text-sm">
                <li>
                  <Link href="/" className="hover:text-teal-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-teal-600">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/frozen" className="hover:text-teal-600">
                    Frozen Foods
                  </Link>
                </li>
                <li>
                  <Link href="/beverages" className="hover:text-teal-600">
                    Beverages
                  </Link>
                </li>
                <li>
                  <Link href="/bakery" className="hover:text-teal-600">
                    Bakery
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-teal-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/discounts" className="flex items-center text-teal-600">
                    <Timer className="h-4 w-4 mr-1" />
                    Best Discounts
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Gift icon */}
            <button className="ml-4">
              <Gift className="h-5 w-5 text-red-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-6">
              <Link href="/" className="flex items-center">
                <h2 className="text-xl font-bold">Chillz </h2>
                <Image 
                  src="/placeholder.svg?height=40&width=120" 
                  alt="Chillz" 
                  className="h-6 w-auto" 
                  width={120}
                  height={40}
                />
              </Link>
              <button onClick={toggleMobileMenu}>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile navigation links */}
            <nav>
              <ul className="space-y-4 mb-6">
                <li>
                  <Link href="/" className="block py-2 text-lg border-b">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="block py-2 text-lg border-b">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/frozen" className="block py-2 text-lg border-b">
                    Frozen Foods
                  </Link>
                </li>
                <li>
                  <Link href="/beverages" className="block py-2 text-lg border-b">
                    Beverages
                  </Link>
                </li>
                <li>
                  <Link href="/bakery" className="block py-2 text-lg border-b">
                    Bakery
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="block py-2 text-lg border-b">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/discounts" className="flex items-center py-2 text-lg text-teal-600 border-b">
                    <Timer className="h-5 w-5 mr-2" />
                    Best Discounts
                  </Link>
                </li>
              </ul>

              {/* Additional mobile menu links */}
              <div className="space-y-4 mb-6">
                <Link href="/track" className="block py-2 border-b">
                  Track Order
                </Link>
                <Link href="/about" className="block py-2 border-b">
                  About Us
                </Link>
                <Link href="/contact" className="block py-2 border-b">
                  Contact
                </Link>
                <Link href="/faq" className="block py-2 border-b">
                  FAQ
                </Link>
              </div>

              {/* User actions */}
              <div className="space-y-4">
                <Link href="/account" className="flex items-center py-2">
                  <User className="h-5 w-5 mr-2" />
                  <span>My Account</span>
                </Link>
                <Link href="/wishlist" className="flex items-center py-2">
                  <Heart className="h-5 w-5 mr-2" />
                  <span>My Wishlist</span>
                </Link>
                <div className="flex items-center py-2">
                  <MapPin className="h-5 w-5 text-teal-600 mr-2" />
                  <span>Select Location</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
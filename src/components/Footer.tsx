"use client"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Footer() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null)
    } else {
      setOpenSection(section)
    }
  }

  return (
    <footer className="bg-white pt-8 pb-6 border-t">
      <div className="container mx-auto px-4">
        {/* Mobile Accordion Style */}
        <div className="lg:hidden">
          <div className="mb-4">
            <div className="flex justify-between items-center py-3 border-b" onClick={() => toggleSection('help')}>
              <h3 className="font-bold">Do You Need Help?</h3>
              <span>{openSection === 'help' ? '−' : '+'}</span>
            </div>
            {openSection === 'help' && (
              <div className="space-y-2 text-sm py-2">
                <p>Contact Our 24/7 Customer Support</p>
                <p>We&apos;re Always Happy to Help</p>
                <p className="font-bold text-lg">+1 800 555 253</p>
                <p className="text-[#004745]">info@chillz.com</p>
              </div>
            )}
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center py-3 border-b" onClick={() => toggleSection('letUsHelp')}>
              <h3 className="font-bold">Let Us Help You</h3>
              <span>{openSection === 'letUsHelp' ? '−' : '+'}</span>
            </div>
            {openSection === 'letUsHelp' && (
              <ul className="space-y-2 text-sm py-2">
                <li><Link href="/account" className="hover:text-[#004745]">My Account</Link></li>
                <li><Link href="/orders" className="hover:text-[#004745]">Track Your Order</Link></li>
                <li><Link href="/shipping" className="hover:text-[#004745]">Shipping & Delivery</Link></li>
                <li><Link href="/returns" className="hover:text-[#004745]">Returns & Refunds</Link></li>
                <li><Link href="/payment" className="hover:text-[#004745]">Payment Methods</Link></li>
                <li><Link href="/faq" className="hover:text-[#004745]">FAQ</Link></li>
                <li><Link href="/terms" className="hover:text-[#004745]">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-[#004745]">Privacy Policy</Link></li>
                <li><Link href="/cookie" className="hover:text-[#004745]">Cookie Settings</Link></li>
              </ul>
            )}
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center py-3 border-b" onClick={() => toggleSection('makeMoneyWithUs')}>
              <h3 className="font-bold">Make Money With Us</h3>
              <span>{openSection === 'makeMoneyWithUs' ? '−' : '+'}</span>
            </div>
            {openSection === 'makeMoneyWithUs' && (
              <ul className="space-y-2 text-sm py-2">
                <li><Link href="/sell" className="hover:text-[#004745]">Sell on Chillz</Link></li>
                <li><Link href="/partner" className="hover:text-[#004745]">Become a Partner</Link></li>
                <li><Link href="/affiliate" className="hover:text-[#004745]">Affiliate Program</Link></li>
                <li><Link href="/advertise" className="hover:text-[#004745]">Advertise Your Products</Link></li>
                <li><Link href="/vendor" className="hover:text-[#004745]">Become a Vendor</Link></li>
                <li><Link href="/careers" className="hover:text-[#004745]">Careers</Link></li>
              </ul>
            )}
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center py-3 border-b" onClick={() => toggleSection('getToKnowUs')}>
              <h3 className="font-bold">Get to Know Us</h3>
              <span>{openSection === 'getToKnowUs' ? '−' : '+'}</span>
            </div>
            {openSection === 'getToKnowUs' && (
              <ul className="space-y-2 text-sm py-2">
                <li><Link href="/about" className="hover:text-[#004745]">Company Info</Link></li>
                <li><Link href="/news" className="hover:text-[#004745]">News & Blog</Link></li>
                <li><Link href="/events" className="hover:text-[#004745]">Events & Promotions</Link></li>
                <li><Link href="/locations" className="hover:text-[#004745]">Store Locations</Link></li>
                <li><Link href="/sustainability" className="hover:text-[#004745]">Sustainability</Link></li>
                <li><Link href="/careers" className="hover:text-[#004745]">Careers</Link></li>
                <li><Link href="/investor" className="hover:text-[#004745]">Investor Relations</Link></li>
              </ul>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">Do You Need Help?</h3>
            <div className="space-y-2 text-sm">
              <p>Contact Our 24/7 Customer Support</p>
              <p>We&apos;re Always Happy to Help</p>
              <p className="font-bold text-lg">+1 800 555 253</p>
              <p className="text-[#004745]">info@chillz.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/account" className="hover:text-[#004745]">My Account</Link></li>
              <li><Link href="/orders" className="hover:text-[#004745]">Track Your Order</Link></li>
              <li><Link href="/shipping" className="hover:text-[#004745]">Shipping & Delivery</Link></li>
              <li><Link href="/returns" className="hover:text-[#004745]">Returns & Refunds</Link></li>
              <li><Link href="/payment" className="hover:text-[#004745]">Payment Methods</Link></li>
              <li><Link href="/faq" className="hover:text-[#004745]">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-[#004745]">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#004745]">Privacy Policy</Link></li>
              <li><Link href="/cookie" className="hover:text-[#004745]">Cookie Settings</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Make Money With Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sell" className="hover:text-[#004745]">Sell on Chillz</Link></li>
              <li><Link href="/partner" className="hover:text-[#004745]">Become a Partner</Link></li>
              <li><Link href="/affiliate" className="hover:text-[#004745]">Affiliate Program</Link></li>
              <li><Link href="/advertise" className="hover:text-[#004745]">Advertise Your Products</Link></li>
              <li><Link href="/vendor" className="hover:text-[#004745]">Become a Vendor</Link></li>
              <li><Link href="/careers" className="hover:text-[#004745]">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[#004745]">Company Info</Link></li>
              <li><Link href="/news" className="hover:text-[#004745]">News & Blog</Link></li>
              <li><Link href="/events" className="hover:text-[#004745]">Events & Promotions</Link></li>
              <li><Link href="/locations" className="hover:text-[#004745]">Store Locations</Link></li>
              <li><Link href="/sustainability" className="hover:text-[#004745]">Sustainability</Link></li>
              <li><Link href="/careers" className="hover:text-[#004745]">Careers</Link></li>
              <li><Link href="/investor" className="hover:text-[#004745]">Investor Relations</Link></li>
            </ul>
          </div>
        </div>

        {/* Middle section with social links */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-b">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link href="/" className="text-sm font-medium">About Us</Link>
            <Link href="/" className="text-sm font-medium">Contact</Link>
            <Link href="/" className="text-sm font-medium">Help</Link>
          </div>
          
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link href="/" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-gray-600 hover:text-[#004745]" />
            </Link>
            <Link href="/" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-gray-600 hover:text-[#004745]" />
            </Link>
            <Link href="/" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-gray-600 hover:text-[#004745]" />
            </Link>
            <Link href="/" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-[#004745]" />
            </Link>
            <Link href="/" aria-label="YouTube">
              <Youtube className="h-5 w-5 text-gray-600 hover:text-[#004745]" />
            </Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm hidden sm:inline">Download Our App:</span>
            <Link href="/" className="border rounded px-2 py-1 text-xs">App Store</Link>
            <Link href="/" className="border rounded px-2 py-1 text-xs">Google Play</Link>
          </div>
        </div>

        {/* Bottom copyright and payment options */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0 text-center md:text-left">© 2023 Chillz. All rights reserved. Powered by Vercel.</p>
          <div className="flex items-center space-x-2">
            <img src="/placeholder.svg?height=20&width=30" alt="Visa" className="h-5" />
            <img src="/placeholder.svg?height=20&width=30" alt="Mastercard" className="h-5" />
            <img src="/placeholder.svg?height=20&width=30" alt="PayPal" className="h-5" />
            <img src="/placeholder.svg?height=20&width=30" alt="Apple Pay" className="h-5" />
            <img src="/placeholder.svg?height=20&width=30" alt="Google Pay" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  )
}
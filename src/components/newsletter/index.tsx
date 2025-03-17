"use client"

export function Newsletter() {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Join our newsletter for £10 off</h2>
            <p className="text-gray-600 mb-6">
              Sign up for our newsletter and get £10 off your first order, plus access to exclusive offers and events.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="flex-1 border  rounded-l-md px-4 py-2 focus:outline-none"
              />
              <button className="bg-[#004745] text-white px-4 py-2 rounded-r-md">Subscribe</button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  
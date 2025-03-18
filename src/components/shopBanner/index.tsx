import { type ShopBannerProps, defaultBannerData } from "./data"

export function ShopBanner(props: Partial<ShopBannerProps> = {}) {
  const bannerData = { ...defaultBannerData, ...props }

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div
          className="relative text-white rounded-md p-8 flex flex-col md:flex-row items-center md:items-start justify-between overflow-hidden"
          style={{ backgroundImage: `url(${bannerData.backgroundImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 max-w-md">
            <span className="text-sm text-yellow-400 font-semibold">Weekend Discount</span>
            <h2 className="text-2xl font-bold mb-2">{bannerData.heading}</h2>
            <p className="text-gray-300 mb-4">{bannerData.description}</p>
            <div className="flex items-center mb-4">
              <span className="text-sm">{bannerData.price.label}</span>
              <span className="text-2xl font-bold ml-2">{bannerData.price.value}</span>
            </div>
            <button className="bg-white text-black px-4 py-2 text-sm font-semibold rounded-md shadow-md hover:bg-gray-200 transition">
              Shop Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}



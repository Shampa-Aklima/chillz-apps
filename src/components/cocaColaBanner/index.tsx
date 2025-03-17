import { type CocaColaBannerProps, defaultBannerData } from "./data"

export function CocaColaBanner(props: Partial<CocaColaBannerProps> = {}) {
  
  const bannerData = { ...defaultBannerData, ...props }

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div
          className="text-white rounded-md p-8 flex justify-between items-center"
          style={{ backgroundImage: `url(${bannerData.backgroundImage.src})` }}
        >
          <div>
            <div className="url(bannerData.backgroundImage)">
            <h2 className="text-2xl font-bold mb-2">{bannerData.heading}</h2>
            <p className="text-gray-300 mb-4">{bannerData.description}</p>
            <div className="flex items-center">
              <span className="text-sm">{bannerData.price.label}</span>
              <span className="text-2xl font-bold ml-2">{bannerData.price.value}</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}


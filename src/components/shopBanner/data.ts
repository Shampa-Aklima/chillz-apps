export interface ShopBannerProps {
  id: string
  heading: string
  description: string
  price: {
    label: string
    value: string | number
  }
  backgroundImage: {
    src: string
    alt: string
    width: number
    height: number
    className: string
  }
}

export const defaultBannerData: ShopBannerProps = {
  id: "1",
  heading: "Bringing Nature's Bounty to You",
  description: "We have prepared special discounts for you on grocery products",
  price: {
    label: "From",
    value: "$ 249.99",
  },
  backgroundImage: {
    src: "/shopImg.png",
    alt: "Shop banner",
    width: 300,
    height: 200,
    className: "object-cover",
  }
}


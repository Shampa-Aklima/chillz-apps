export interface CocaColaBannerProps {
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

export const defaultBannerData: CocaColaBannerProps = {
  id: "1",
  heading: "There's always something good here.",
  description: "Refreshing drinks for all occasions",
  price: {
    label: "From",
    value: "$ 249.99",
  },
  backgroundImage: {
    src: "/banner6.jpeg",
    alt: "Coca Cola bottle",
    width: 300,
    height: 200,
    className: "object-cover",
  },
  
}


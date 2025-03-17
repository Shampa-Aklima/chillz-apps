import Image from "next/image"
import Link from "next/link"

interface CategorySectionProps {
  title: string
  image: string
  price: string
}

export default function CategorySection({ title, image, price }: CategorySectionProps) {
  return (
    <div className="bg-white rounded-md border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold">Featured Products</h3>
        <span className="text-sm text-gray-500">{title}</span>
      </div>
      <div className="flex items-center">
        <div className="w-1/3">
          <Image src={image || "/placeholder.svg"} alt={title} width={120} height={120} className="object-contain" />
        </div>
        <div className="w-2/3 pl-4">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">From</span>
            <span className="font-bold text-lg">{price}</span>
            <Link href={`/category/${title.toLowerCase().replace(/\s+/g, "-")}`} className="mt-2">
              <button className="bg-[#004745] text-white px-3 py-1.5 rounded-md text-sm">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


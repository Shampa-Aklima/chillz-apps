import Image from "next/image"
import { Heart, ShoppingCart, Star } from "lucide-react"
import type { Recipe } from "@/types"

interface RecipeCardsProps {
  recipes: Recipe[]
}

export function RecipeCards({ recipes }: RecipeCardsProps) {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="border rounded-md overflow-hidden">
              <div className="bg-gray-100 p-3 text-sm">
                <span>How to cooking out, dont miss the opportunity</span>
              </div>
              <div className="p-4 flex">
                <div className="w-24 h-24 bg-gray-200 rounded-md mr-4">
                  <Image
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    width={96}
                    height={96}
                    className="rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{recipe.title}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-3 w-3 ${
                            star <= Math.floor(recipe.rating) ? "fill-[#fcc419] text-[#fcc419]" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">({recipe.reviewCount})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">${recipe.price.toFixed(2)}</span>
                    <div className="flex space-x-1">
                      <button className="bg-gray-200 rounded p-1">
                        <Heart className="h-3 w-3" />
                      </button>
                      <button className="bg-gray-200 rounded p-1">
                        <ShoppingCart className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-3 text-xs text-gray-500">
                <span>
                  Time: {recipe.time} | Serves: {recipe.serves} | Difficulty: {recipe.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


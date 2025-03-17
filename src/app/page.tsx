import BeveragesGrid from "@/components/beverages"
import { BlogSection } from "@/components/BlogSection"
import WeekendDiscountCategories from "@/components/categories"
import { DiscountBanner } from "@/components/DiscountBanner"
import Products from "@/components/FeaturedProducts"
import HeroSlider from "@/components/HeroSlider"
import { MeatSection } from "@/components/meatSection"

import { Newsletter } from "@/components/newsletter"
import { PromoBanners } from "@/components/PromoBanners"
import ProductDeals from "@/components/recipes"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      <HeroSlider/>
      <Products />
      <DiscountBanner />
      <ProductDeals />
      <WeekendDiscountCategories />
      <BeveragesGrid />
      <PromoBanners />
      <MeatSection />
      {/* <CocaColaBanner /> */}
      <BlogSection blogs={[
        {
          id: "1",
          title: "Healthy Eating Tips",
          excerpt: "Discover the best practices for healthy eating...",
          image: "/blog1.jpeg",
          category: "Tips",
          date: "2024-03-20"
        },
        {
          id: "2",
          title: "Spring Recipes",
          excerpt: "Fresh and delicious spring recipes...",
          image: "/blog2.jpeg",
          category: "Recipes",
          date: "2024-03-19"
        },
        {
          id: "3",
          title: "Spring Recipes",
          excerpt: "Fresh and delicious spring recipes...",
          image: "/blog2.jpeg",
          category: "Recipes",
          date: "2024-03-19"
        },
        {
          id: "4",
          title: "Spring Recipes",
          excerpt: "Fresh and delicious spring recipes...",
          image: "/blog2.jpeg",
          category: "Recipes",
          date: "2024-03-19"
        }
      ]} />
      
      
    </main>
  )
}






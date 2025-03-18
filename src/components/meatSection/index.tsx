"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ProductCard } from "../shared/product-card";
import { SectionHeader } from "../shared/section-header";
import Image from "next/image";
const featuredProduct = {
  name: "Big Discount",
  tagline: "Only this week. Don't miss!",
  price: 142.99,
  image: "/meat4.png",
};
export function MeatSection() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <SectionHeader title="Meat & Seafood" />

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-md border p-4">
            <h3 className="font-medium mb-2">Beef</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Breakfast Sausage</li>
              <li>Chicken</li>
              <li>Halal</li>
              <li>Kosher Sausage</li>
            </ul>
            <Link
              href="/view-all-meat"
              className="text-xs text-[#004745] flex items-center mt-4"
            >
              View All Meat & Seafood <ChevronRight className="h-3 w-3 ml-1" />
            </Link>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1 relative overflow-hidden rounded-md h-full min-h-96">
            <div className="relative h-full w-full">
              <Image
                src={featuredProduct.image}
                alt={featuredProduct.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 p-6 flex flex-col justify-end">
                <span className="text-green-400 font-medium text-base mb-2">
                  <strong>Weekend Discount</strong>
                </span>
                <h3 className="text-white text-2xl font-bold mb-2">
                  <strong>Special Organic</strong>
                </h3>
                <p className="text-gray-100 text-sm mb-4">
                  {featuredProduct.tagline}
                </p>
                <p className="text-gray-200 text-sm">
                  from{" "}
                  <strong className="text-white font-bold text-xl">
                    ${featuredProduct.price}
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <ProductCard
            id="m1"
            title="Fresh Choice Angus Beef Stew Meat"
            price="$12.99"
            salePrice="$9.99"
            image="/meat1.png"
            rating={4.5}
            reviewCount={22}
            badge="SALE"
          />

          <ProductCard
            id="m2"
            title="Seasoned Skirt Steak Beef Fajitas"
            price="$15.99"
            salePrice="$12.99"
            image="/meat2.png"
            rating={4.8}
            reviewCount={34}
            badge="SALE"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  Heart,
  MessageCircle,
  Share2,
  Check,
  Minus,
  Plus,
  Clock,
  Truck,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("500g");

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-6 text-muted-foreground">
        <Link href="/" className="flex items-center">
          <Home className="h-3.5 w-3.5 mr-1" />
          <span>Home</span>
        </Link>
        <ChevronRight className="h-3 w-3 mx-1" />
        <Link href="/categories">Categories</Link>
        <ChevronRight className="h-3 w-3 mx-1" />
        <span className="text-foreground">Pet Supplies</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Product Images */}

        <div className="flex flex-col">
          <div className="flex">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-2 mr-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border border-gray-200 w-16 h-16 cursor-pointer hover:border-primary"
                >
                  <Image
                    src={`/dog1.jpeg`}
                    alt={`/dog1.jpeg ${i}`}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
              <div className="border border-gray-200 w-16 h-16 flex items-center justify-center cursor-pointer">
                <span className="text-muted-foreground">+</span>
              </div>
            </div>

            {/* Main Image */}
            <div className="flex-1 border border-gray-100 bg-gray-50 flex items-center justify-center p-4">
              <Image
                src="/dog1.jpeg"
                alt="Pedigree Adult Dry Dog Food, 1kg Pack"
                width={800}
                height={800}
                className="object-contain max-h-[400px]"
              />
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-between mt-4 border-t border-b py-3">
            <div className="flex items-center text-sm">
              <Check className="h-4 w-4 mr-1 text-blue-600" />
              <span>100% Original</span>
            </div>
            <div className="flex items-center text-sm">
              <Check className="h-4 w-4 mr-1 text-blue-600" />
              <span>Lowest Price</span>
            </div>
            <div className="flex items-center text-sm">
              <Truck className="h-4 w-4 mr-1 text-blue-600" />
              <span>Free Shipping</span>
            </div>
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div>
          <div className="text-sm text-orange-500 font-medium mb-1">
            Brand: Candy
          </div>
          <h1 className="text-2xl font-semibold mb-2">
            Pedigree Adult Dry Dog Food, 1kg Pack
          </h1>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl font-bold text-red-500">$12</span>
            <span className="text-xl font-bold text-muted-foreground">-</span>
            <span className="text-xl font-bold text-muted-foreground">$38</span>
            <Badge
              variant="outline"
              className="ml-2 text-red-500 border-red-500"
            >
              15 Discount
            </Badge>
          </div>

          <div className="flex items-center text-sm mb-4">
            <Clock className="h-4 w-4 mr-1 text-red-500" />
            <span className="text-red-500 font-medium">
              8 products sold in Last 7 hours
            </span>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Pedigree Adult Dry Dog Food is a perfect food for adult dogs. It
            contains 20% crude protein, 10% crude fat, and 5% crude fiber.
            Supports strong muscles, teeth & heart and healthier & shinier coat.
          </p>

          {/* Weight Selection */}
          <div className="mb-4">
            <div className="font-medium mb-2">Weight:</div>
            <div className="flex gap-2">
              {["250g", "500g", "1kg"].map((weight) => (
                <Button
                  key={weight}
                  variant={selectedWeight === weight ? "default" : "outline"}
                  className={`h-9 ${
                    selectedWeight === weight
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                  onClick={() => setSelectedWeight(weight)}
                >
                  {weight}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <div className="font-medium mb-2">+ Color</div>
          </div>

          {/* Price */}
          <div className="text-xl font-bold mb-4">$12</div>

          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant="outline"
              className="bg-green-50 text-green-600 border-green-200"
            >
              <Check className="h-3.5 w-3.5 mr-1" />
              In stock
            </Badge>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none"
                onClick={decrementQuantity}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="w-10 text-center">{quantity}</div>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none"
                onClick={incrementQuantity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white">
              Add to Cart
            </Button>
          </div>

          {/* Buy Now Button */}
          <Button className="w-full bg-blue-900 hover:bg-blue-950 text-white mb-4">
            Buy Now
          </Button>

          {/* Action Buttons */}
          <div className="flex justify-between mb-6">
            <Button variant="ghost" size="sm" className="text-xs">
              <Check className="h-4 w-4 mr-1" />
              Compare
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <Heart className="h-4 w-4 mr-1" />
              Wishlist
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <MessageCircle className="h-4 w-4 mr-1" />
              Ask Us
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>

          {/* Viewers Count */}
          <div className="flex items-center text-sm mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="text-muted-foreground">
              22 people are viewing this right now
            </span>
          </div>

          {/* Delivery Info */}
          <div className="space-y-2 mb-6">
            <div className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-black mt-0.5 mr-2 flex-shrink-0"></div>
              <div className="text-sm">
                <span className="font-medium">Estimated Delivery:</span> Up to 4
                business days
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-black mt-0.5 mr-2 flex-shrink-0"></div>
              <div className="text-sm">
                <span className="font-medium">Free Shipping & Returns:</span> On
                all orders over $200
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border rounded-md p-3 bg-gray-50">
            <div className="text-xs text-center mb-2">
              Guaranteed Safe and Secure Checkout
            </div>
            <div className="flex justify-center gap-2">
              {["visa", "mastercard", "amex", "discover", "paypal"].map(
                (method) => (
                  <div key={method} className="w-8 h-5 bg-white border rounded">
                    {/* Payment icons would go here */}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="border-b w-full justify-start rounded-none gap-8">
            <TabsTrigger
              value="description"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="additional"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Additional Information
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Reviews (0)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-4">
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet massa, ut adipiscer diam interdum.
              Proin vitae magna in dui finibus malesuada et at nulla. Morbi vel
              ex, viverra vitae ante vel, blandit feugiat. Nulla vitae fermentum
              quam, vitae ut sodales quis posuere, in sem sodales nunc, in
              pellentesque ipsum massa euis. Cras imperdiet est id nunc
              tristique luctus. Nullam aliquet mauris ex accumsan tincidunt.
              Suspendisse velit ex, effugiat vel ornare vel, dignissim a lorem.
            </p>
          </TabsContent>
          <TabsContent value="additional" className="pt-4">
            <p className="text-sm text-muted-foreground">
              Additional product information will be displayed here.
            </p>
          </TabsContent>
          <TabsContent value="reviews" className="pt-4">
            <p className="text-sm text-muted-foreground">
              Product reviews will be displayed here.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Related products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="border rounded-md overflow-hidden group">
            <div className="relative">
              <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <div className="h-48 bg-white flex items-center justify-center">
                <Image
                  src="/bevarage2.jpeg"
                  alt="Branson Orange Juice with Bits"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm mb-1">
                Branson Orange Juice with Bits
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-sm">$2.50</span>
                <span className="line-through text-muted-foreground text-xs">
                  $3.00
                </span>
              </div>
              <Button size="sm" variant="outline" className="w-full text-xs">
                Add to cart
              </Button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="border rounded-md overflow-hidden group">
            <div className="relative">
              <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <div className="h-48 bg-white flex items-center justify-center">
                <Image
                  src="/bevarage5.jpeg"
                  alt="Caffè Jacobs KRÖNUNG Ground Coffee 500g"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm mb-1">
                Caffè Jacobs KRÖNUNG Ground Coffee 500g
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-sm">$5.00</span>
                <span className="line-through text-muted-foreground text-xs">
                  $7.00
                </span>
              </div>
              <Button size="sm" variant="outline" className="w-full text-xs">
                Add to cart
              </Button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="border rounded-md overflow-hidden group">
            <div className="relative">
              <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <div className="h-48 bg-white flex items-center justify-center">
                <Image
                  src="/bevarage7.jpeg"
                  alt="Amazing Drink Ice Tea 250ml"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm mb-1">
                Amazing Drink Ice Tea 250ml
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-sm">$1.50</span>
                <span className="line-through text-muted-foreground text-xs">
                  $2.00
                </span>
              </div>
              <Button size="sm" variant="outline" className="w-full text-xs">
                Add to cart
              </Button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="border rounded-md overflow-hidden group">
            <div className="relative">
              <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <div className="h-48 bg-white flex items-center justify-center">
                <Image
                  src="/bevarage4.jpg"
                  alt="Starbucks Peppermint Mocha Flavored Latte Pods"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm mb-1">
                Starbucks Peppermint Mocha Flavored Latte Pods
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-sm">$8.50</span>
                <span className="line-through text-muted-foreground text-xs">
                  $10.00
                </span>
              </div>
              <Button size="sm" variant="outline" className="w-full text-xs">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

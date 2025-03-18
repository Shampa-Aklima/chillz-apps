import ShopSidebar from "./ShopSidber";
import { ProductCard } from "@/components/ProductCard";
import { ShopBanner } from "@/components/shopBanner";

const products = [
  {
    id: "b1",
    title: "Jim Beam & Coca-Cola Ready To Drink Bottle 330ml",
    price: "$12.99",
    salePrice: "$10.99",
    image: "/shop-1.png",
    rating: 4.5,
    reviewCount: 28,
    badge: "SALE",
    category: "Beverages",
    slug: "jim-beam-coca-cola",
  },
  {
    id: "b2",
    title: "JOHNNIE WALKER ",
    price: "$39.99",
    image: "/shop2.png",
    rating: 4.8,
    reviewCount: 56,
    badge: "SALE",
    category: "Beverages",
    slug: "johnnie-walker-black",
  },
  {
    id: "b3",
    title: "PERRIER Carbonated Mineral Water 330ml Bottles",
    price: "$24.99",
    salePrice: "$19.99",
    image: "/bevarage1.jpg",
    rating: 4.7,
    reviewCount: 32,
    badge: "SALE",
    category: "Beverages",
    slug: "perrier-carbonated",
  },
  {
    id: "b4",
    title: "LIPTON Ice Tea Peach Flavored Iced Tea 500ml",
    price: "$3.99",
    image: "/bevarage2.jpeg",
    rating: 4.3,
    reviewCount: 24,
    badge: "SALE",
    category: "Beverages",
    slug: "lipton-ice-tea",
  },
  {
    id: "b5",
    title: "Schweppes Tonic Water 600ml",
    price: "$2.99",
    salePrice: "$1.99",
    image: "/bevarage3.png",
    rating: 4.5,
    reviewCount: 18,
    badge: "SALE",
    category: "Beverages",
    slug: "schweppes-tonic",
  },

  {
    id: "b6",
    title: "Evian Natural Spring Water 500ml",
    price: "$1.99",
    image: "/bevarage1.jpg",
    rating: 4.2,
    reviewCount: 16,
    badge: "SALE",
    category: "Beverages",
    slug: "evian-spring-water",
  },
  {
    id: "r1",
    title: "Triple Dark Peanut Nut Chocolate Dessert",
    image: "/rec1.png",
    rating: 5,
    reviewCount: 12,
    price: 2.75,
    time: "20 mins",
    serves: 4,
    difficulty: "Easy",
  },
  {
    id: "r2",
    title: "Fresh Greek Salad Veggie Garden Delight",
    image: "/rec2.png",
    rating: 5,
    reviewCount: 8,
    price: 6.25,
    time: "15 mins",
    serves: 2,
    difficulty: "Easy",
  },
  {
    id: "m1",
    title: "Fresh Choice Angus Beef Stew Meat",
    price: "$12.99",
    salePrice: "$9.99",
    image: "/meat1.png",
    rating: 4.5,
    reviewCount: 22,
    badge: "SALE",
    category: "Meat",
    slug: "angus-beef-stew",
  },
  {
    id: "m2",
    title: "Seasoned Skirt Steak Beef Fajitas",
    price: "$15.99",
    salePrice: "$12.99",
    image: "/meat2.png",
    rating: 4.8,
    reviewCount: 34,
    badge: "SALE",
    category: "Meat",
    slug: "skirt-steak-fajitas",
  },
  {
    id: "c1",
    title: "Breads & Bakery",
    slug: "breads-bakery",
    image: "/bakery1.png",
    price: "$19.99",
    rating: 5,
  },
  {
    id: "c2",
    title: "Organic Beverages",
    slug: "organic-beverages",
    image: "/bakery2.png",
    price: "$12.99",
    rating: 5,
  },
  {
    id: "c3",
    title: "Frozen Foods",
    slug: "frozen-foods",
    image: "/bakery3.png",
    price: "$19.99",
    rating: 5,
  },
];

const page = () => {
  return (
    <div className="container mx-auto max-w-[1200px] mt-10 ">
      <ShopBanner />
      <div className="flex">
        <ShopSidebar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price?.toString() || "0"}
              rating={product.rating || 0}
              reviewCount={product.reviewCount}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-1">
          <button className="w-8 h-8 flex items-center justify-center bg-teal-500 text-white rounded-full">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full">
            ...
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full">
            6
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

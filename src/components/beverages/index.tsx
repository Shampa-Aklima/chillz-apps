import Image from 'next/image';
import Link from 'next/link';

interface Beverage {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  image: string;
  stock: boolean;
}

const BeveragesGrid = () => {
  const beverages = [
    {
      id: 1,
      name: 'Pran Mango Fruit Drink',
      price: 11.00,
      oldPrice: 14.00,
      discount: 22,
      rating: 3,
      image: '/bevarage1.jpg',
      stock: true
    },
    {
      id: 2,
      name: 'Mojo Soft Drink',
      price: 14.70,
      oldPrice: 18.70,
      discount: 22,
      rating: 3,
      image: '/bevarage2.jpeg',
      stock: true
    },
    {
      id: 3,
      name: 'Brewdog Punk Ipa 12x330ml',
      price: 14.00,
      oldPrice: 16.00,
      discount: 13,
      rating: 3,
      image: '/bevarage3.png',
      stock: true
    },
    {
      id: 4,
      name: 'Caffe soluble JACOBS Monarch natural sublimated 500g',
      price: 15.50,
      oldPrice: 17.00,
      discount: 9,
      rating: 1,
      image: '/bevarage4.jpg',
      stock: true
    },
    {
      id: 5,
      name: 'Nestle Milo Original ',
      price: 2.00,
      oldPrice: 2.50,
      discount: 20,
      rating: 3,
      image: '/bevarage5.jpeg',
      stock: true
    },
    {
      id: 6,
      name: 'Ammo Black',
      price: 1.75,
      oldPrice: 2.50,
      discount: 30,
      rating: 3,
      image: '/bevarage6.jpg',
      stock: true
    },
    {
      id: 7,
      name: 'Cravendale Semi Skimmed Milk',
      price: 1.60,
      oldPrice: 2.60,
      discount: 39,
      rating: 0,
      image: '/bevarage7.jpeg',
      stock: true
    },
    {
      id: 8,
      name: 'Nico Nico Famous Nata De Coco',
      price: 14.70,
      oldPrice: 18.70,
      discount: 22,
      rating: 3,
      image: '/bevarage8.jpg',
      stock: true
    }
  ];

  const featuredProduct = {
    name: 'Special Organic',
    tagline: "Only this week. Don't miss...",
    price: 142.99,
    image: '/banner-28.png'
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-${i < rating ? 'yellow-400' : 'gray-300'}`}>★</span>
      );
    }
    return stars;
  };

  // Product card component to avoid repetition
  const ProductCard = ({ item }: { item: Beverage }) => (
    <div className="bg-white border rounded-md p-3 relative">
      {item.discount > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-medium">
          {item.discount}%
        </div>
      )}
      <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
      <div className="flex justify-center h-32 mb-3">
        <div className="relative w-24 h-full">
          <Image
            src={item.image}
            alt={item.name}
            layout="fill" 
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex text-sm mb-1">
        {renderStars(item.rating)}
        <span className="ml-1 text-gray-500">{item.rating}</span>
      </div>
      <h3 className="text-sm font-medium line-clamp-2 mb-1">{item.name}</h3>
      <div className="flex items-center mb-2">
        <span className="text-gray-400 line-through text-xs mr-2">${item.oldPrice.toFixed(2)}</span>
        <span className="text-red-500 font-bold">${item.price.toFixed(2)}</span>
      </div>
      <button className="w-full bg-black text-white py-1.5 text-sm rounded hover:bg-gray-800">
        Add to cart
      </button>
      <p className="text-xs text-gray-500 mt-2">Shipping within 3 days</p>
      <p className="text-xs text-green-600">In Stock</p>
    </div>
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Beverages</h2>
        <Link href="/beverages" className="flex items-center text-gray-600 hover:text-gray-900">
          View All
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {/* Left side - 4 products in grid */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {beverages.slice(0, 4).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {/* Middle - Featured product with text overlay - WIDER */}
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
              <p className="text-gray-100 text-sm mb-4">{featuredProduct.tagline}</p>
              <p className="text-gray-200 text-sm">from <strong className="text-white font-bold text-xl">${featuredProduct.price}</strong></p>
            </div>
          </div>
        </div>

        {/* Right side - 4 products in grid */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {beverages.slice(4, 8).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeveragesGrid;
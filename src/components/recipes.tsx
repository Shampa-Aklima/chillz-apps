import { Heart } from 'lucide-react';
import Image from 'next/image';

const ProductDealCard = ({ 
  discountPercent, 
  image, 
  rating, 
  reviewCount, 
  title, 
  weight, 
  originalPrice, 
  salePrice, 
  available, 
  sold 
}) => {
  // Calculate the percentage of available items compared to total (available + sold)
  const total = available + sold;
  const availablePercentage = (available / total) * 100;
  
  return (
    <div className="w-full border rounded-md overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-gray-800 text-white p-2 text-sm">
        Time is running out, don't miss the opportunity.
      </div>
      
      <div className="p-2 sm:p-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          {/* Product Image with Discount Badge */}
          <div className="relative w-full sm:w-32 h-32 mx-auto sm:mx-0">
            <div className="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 rounded-br-md z-10">
              {discountPercent}%
            </div>
            <Image 
              src={image} 
              alt={title}
              width={128}
              height={128}
              className="object-contain w-full h-full"
            />
            <button className="absolute top-0 right-0 p-1">
              <Heart size={20} className="text-gray-400" />
            </button>
          </div>
          
          {/* Product Details */}
          <div className="flex-1 mt-3 sm:mt-0">
            {/* Rating */}
            <div className="flex items-center mb-1">
              <div className="flex text-yellow-400">
                {'★'.repeat(Math.floor(rating))}
                {'☆'.repeat(5 - Math.floor(rating))}
              </div>
              <span className="ml-1 text-sm text-gray-600">{reviewCount}</span>
            </div>
            
            {/* Title */}
            <h3 className="font-medium text-sm mb-1">{title}</h3>
            
            {/* Weight */}
            <div className="text-xs text-gray-500 mb-2">{weight}</div>
            
            {/* Price section with yellow highlight */}
            <div className="relative mt-4 mb-6">
              <div className="absolute -inset-2 bg-yellow-300 rounded-full -z-10"></div>
              
              <div className="flex items-center mb-3">
                <span className="text-gray-400 line-through text-sm mr-2">${originalPrice.toFixed(2)}</span>
                <span className="text-gray-800 font-bold text-lg">${salePrice.toFixed(2)}</span>
              </div>
              
              {/* Progress bar for availability */}
              <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
                <div 
                  className="bg-black h-2 rounded-full" 
                  style={{ width: `${availablePercentage}%` }}
                ></div>
              </div>
              
              {/* Stock */}
              <div className="flex justify-between text-xs text-gray-500">
                <span>Available: {available}</span>
                <span>Sold: {sold}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Timer */}
        <div className="mt-4">
          <div className="flex flex-wrap sm:flex-nowrap gap-2 justify-start">
            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">93</span>
            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">06</span>
            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">48</span>
            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">08</span>
            <span className="text-xs text-gray-600 flex items-center ml-0 sm:ml-2">Time remaining until the end of the offer.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDeals = () => {
  const deals = [
    {
      id: 1,
      discountPercent: 32,
      image: "/promo1.png",
      rating: 4,
      reviewCount: 3,
      title: "Great Value Peanut Dark Chocolate Protein",
      weight: "1 kg",
      originalPrice: 4.00,
      salePrice: 2.75,
      available: 44,
      sold: 35
    },
    {
      id: 2,
      discountPercent: 20,
      image: "/promo2.png",
      rating: 5,
      reviewCount: 3,
      title: "Fresh Green Giant Veggie Spirals Zucchini",
      weight: "1 kg",
      originalPrice: 5.30,
      salePrice: 4.25,
      available: 40,
      sold: 29
    }
  ];

  return (
    <div className="container mx-auto p-2 sm:p-4">
      <div className="flex flex-col sm:flex-row gap-4">
        {deals.map(deal => (
          <ProductDealCard key={deal.id} {...deal} />
        ))}
      </div>
    </div>
  );
};

export default ProductDeals;
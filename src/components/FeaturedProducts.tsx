"use client"
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number | string;
  salePrice?: number;
  discount?: number;
  image: string;
  category: string;
}

const Products: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState('Beverages');
  const categories = ['Beverages', 'Biscuits & Snacks', 'Breads & Bakery'];
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Pedigree Adult Dry Dog Food, 1kg Pack',
      price: '$12 - $38',
      image: '/p1.png',
      category: 'Pets'
    },
    {
      id: 2,
      name: 'Dentastix Oral Care Treats For Small Breed Adult Dogs',
      price: '$11',
      image: '/p2.png',
      category: 'Pets'
    },
    {
      id: 3,
      name: 'Meat Up Puppy Dry Dog Food, Chicken',
      price: '$15 - $28',
      image: '/p3.png',
      category: 'Pets'
    },
    {
      id: 4,
      name: 'Pets Empire Stainless Steel Dog Bowl (Set Of 2)',
      price: '$37',
      salePrice: 31,
      discount: 19,
      image: '/p4.png',
      category: 'Pets'
    },
    {
      id: 5,
      name: 'Mutt Of Course Sniffing Around Bandana Small',
      price: '$12',
      image: '/p5.png',
      category: 'Pets'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with Featured Products and View All */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Featured Products</h1>
        <Link href="/all-products" className="flex items-center text-gray-600">
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
      
      {/* Category tabs - scrollable on mobile */}
      <div className=" pb-2 mb-6">
        <div className="flex items-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 mr-2 whitespace-nowrap ${
                category === activeCategory ? 'text-black font-medium' : 'text-gray-500'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4 rounded-lg">
            <div className="relative">
              {product.discount && (
                <span className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                  -{product.discount}%
                </span>
              )}
              <div className="h-40 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <h3 className="mt-4 text-sm font-medium line-clamp-2">{product.name}</h3>
            <div className="mt-2 flex items-center">
              {typeof product.price === 'string' ? (
                <span className="text-red-500 font-bold">{product.price}</span>
              ) : (
                <>
                  <span className="text-gray-400 line-through mr-2">
                    ${product.price}
                  </span>
                  <span className="text-red-500 font-bold">
                    ${product.salePrice}
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
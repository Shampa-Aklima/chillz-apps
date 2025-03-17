"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const slides = [
    {
      content: {
        tag: "EXCLUSIVE OFFER",
        title: "We're More Than A Store, We're A Food Festival.",
        description: "Take advantage of discounted prices and special deals on premium quality products. Limited time only.",
        buttonText: "SHOP NOW"
      },
      image: "/images/coca-cola.png" 
    },
    {
      content: {
        tag: "NEW ARRIVALS",
        title: "Fresh Seasonal Products From Local Farmers",
        description: "Discover our selection of organic locally-sourced produce that supports sustainable farming practices.",
        buttonText: "EXPLORE"
      },
      image: "/images/hero-2.jpg" 
    },
    {
      content: {
        tag: "MEMBER SPECIAL",
        title: "Join Our Rewards Program For Extra Benefits",
        description: "Become a member today and enjoy exclusive discounts, early access to promotions and special perks.",
        buttonText: "JOIN NOW"
      },
        image: "/images/hero-3.jpg" 
      },
  ];

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-900 rounded-xl shadow-xl h-[500px] md:h-[550px] lg:h-[600px]">
      {/* Slide container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={currentSlide !== index}
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
            <Image 
              src={slide.image} 
              alt={`Slide ${index + 1}`}
              priority={index === 0}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            
            {/* Content positioned over the image */}
            <div className="relative h-full z-20">
              <div className="container mx-auto px-6 h-full flex flex-col justify-center">
                <div className="max-w-xl">
                  <span className="inline-block bg-red-600 text-white text-xs font-bold py-1.5 px-3 rounded-full mb-4 tracking-wider animate-fade-in-up">
                    {slide.content.tag}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white leading-tight animate-fade-in-up [animation-delay:200ms]">
                    {slide.content.title}
                  </h2>
                  <p className="text-gray-200 mb-8 max-w-lg text-sm sm:text-base animate-fade-in-up [animation-delay:400ms]">
                    {slide.content.description}
                  </p>
                  <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 transform hover:scale-105 animate-fade-in-up [animation-delay:600ms] shadow-lg flex items-center">
                    {slide.content.buttonText}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Indicator dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
              currentSlide === index 
                ? 'bg-teal-500 w-6' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
          />
        ))}
      </div>
      
      {/* Current slide counter */}
      <div className="absolute top-6 right-6 z-30 bg-black/30 py-1 px-3 rounded-full text-white text-sm font-medium">
        <span>{currentSlide + 1}</span>
        <span className="mx-1">/</span>
        <span>{slides.length}</span>
      </div>
    </div>
  );
};

export default Slider;
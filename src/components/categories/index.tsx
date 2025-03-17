import Image from 'next/image';

const CategoryCard = ({
  title,
  tagline,
  price,
  image
}) => {
  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden h-64">
      {/* Full-size background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-center">
        <p className="text-emerald-800 font-medium text-sm mb-1">Weekend Discount</p>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{tagline}</p>
        <div className="flex items-center">
          <span className="text-gray-600 text-sm mr-1">from</span>
          <span className="font-bold text-lg">$ {price}</span>
        </div>
      </div>
    </div>
  );
};

const WeekendDiscountCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Breads & Bakery",
      tagline: "Breakfast made better...",
      price: "119.99",
      image: "/banner1.png"
    },
    {
      id: 2,
      title: "Organic Beverages",
      tagline: "Shine the morning...",
      price: "177.99",
      image: "/banner2.png"
    },
    {
      id: 3,
      title: "Frozen Foods",
      tagline: "Eat one every day...",
      price: "159.99",
      image: "/banner3.jpeg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map(category => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default WeekendDiscountCategories;
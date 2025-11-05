import React, { useState, useEffect } from 'react';

const BestProduct = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerView = 3;

  // Product data with image paths
  const products = [
    {
      id: 1,
      name: "PVC Coated Tarpaulin 550 GSM",
      image: "/images/pvc-coated-tarpaulin.jpg"
    },
    {
      id: 2,
      name: "PVC Biofloc fish Farming Tank 750 GSM 10 Diameter X 1.45 meter",
      image: "/images/pvc-biofloc-tank.jpg"
    },
    {
      id: 3,
      name: "PVC Stencil folding Tent 10x10ft",
      image: "/images/pvc-stencil-tent.jpg"
    },
    {
      id: 4,
      name: "PVC Truck Tarpaulin",
      image: "/images/pvc-truck-tarpaulin.jpg"
    },
    {
      id: 5,
      name: "PVC Laminated rolls",
      image: "/images/pvc-laminated-rolls.jpg"
    },
    {
      id: 6,
      name: "PVC Swimming pool",
      image: "/images/pvc-swimming-pool.jpg"
    },
    {
      id: 7,
      name: "HDPE Pond Liner",
      image: "/images/hdpe-pond-liner.jpg"
    },
    {
      id: 8,
      name: "HDPE Vermi Bed",
      image: "/images/hdpe-vermi-bed.jpg"
    },
    {
      id: 9,
      name: "HDPE Azolla Bed",
      image: "/images/hdpe-azolla-bed.jpg"
    },
    {
      id: 10,
      name: "HDPE tarpaulin",
      image: "/images/hdpe-tarpaulin.jpg"
    },
    {
      id: 11,
      name: "HDPE Grow Bags",
      image: "/images/hdpe-grow-bags.jpg"
    },
    {
      id: 12,
      name: "Polypropylene FIBC Jumbo Bag",
      image: "/images/pp-fibc-bag.jpg"
    }
  ];

  const totalSlides = Math.ceil(products.length / itemsPerView);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleProducts = () => {
    const startIndex = currentSlide * itemsPerView;
    return products.slice(startIndex, startIndex + itemsPerView);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Our Best Products
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Plain Multi-Item Slider - Only Boxes with Images */}
        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              {getVisibleProducts().map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-1/3 px-3"
                >
                  {/* Plain Box with Black Border - No Text, No Extra Design */}
                  <div className="border-2 border-black rounded-lg overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.target.src = '/images/placeholder.jpg';
                        e.target.className = 'w-full h-64 object-cover bg-gray-200';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition duration-300 border border-gray-200 -ml-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition duration-300 border border-gray-200 -mr-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Product Names with Bullets - Simple Design */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {products.map((product) => (
              <div 
                key={product.id}
                className="flex items-start p-2"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700 text-sm">
                  {product.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BestProduct;
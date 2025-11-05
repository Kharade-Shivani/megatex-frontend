import React, { useState, useEffect } from 'react';
function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = [
    {
      name: "PVC Coated Tarpaulin 550 GSM",
      image: "/Assets/bulkbag.png"
    },
    {
      name: "PVC Biofloc Fish Farming Tank 750 GSM",
      image: "/Assets/bulkbag.png"
    },
    {
      name: "PVC Stencil Folding Tent 10x10ft",
      image: "/Assets/bulkbag.png"
    },
    {
      name: "PVC Truck Tarpaulin",
      image: "/Assets/bulkbag.png"
    },
    {
      name: "PVC Laminated Rolls",
      image: "/Assets/bulkbag.png"
    },
    {
      name: "PVC Swimming Pool",
      image: "/Assets/bulkbag.png"
    },
    {
      name: "HDPE Pond Liner",
      image: "/Assets/bulkbag.png"
    },
    {
      name: "HDPE Vermi Bed",
      image: "/Assets/bulkbag.png"
    },
    {
      name: "HDPE Azolla Bed",
      image: "/Assets/bulkbag.png"
    },
    {
      name: "HDPE Tarpaulin",
      image: "/Assets/bulkbag.png"
    },
    {
      name: "HDPE Grow Bags",
      image: "/Assets/bulkbag.png"
    },
    {
      name: "Polypropylene FIBC Jumbo Bag",
      image:"/Assets/bulkbag.png"
    }
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Best <span className="text-red-700">Products</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        </div>
        {/* Main Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl border border-gray-200"
            aria-label="Previous product"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl border border-gray-200"
            aria-label="Next product"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Main Slider Container */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200">
            <div className="relative h-96">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform translate-x-full'
                    }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                    {/* Product Image */}
                    <div className="relative bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-8">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-72 w-auto object-contain transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback if image doesn't load */}
                      <div className="hidden items-center justify-center h-48 w-48 bg-gray-200 rounded-lg">
                        <span className="text-gray-500 text-sm">Product Image</span>
                      </div>
                      {/* Product Badge */}
                    </div>
                    {/* Product Info */}
                    <div className="flex flex-col justify-center p-8 lg:p-12">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-6 text-lg">
                        Premium quality material with exceptional durability and performance for industrial applications.
                      </p>
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          High Durability
                        </div>
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Weather Resistant
                        </div>
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Long Lasting
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-fit">
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductSlider;
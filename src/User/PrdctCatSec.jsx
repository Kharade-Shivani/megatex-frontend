import React from "react";
function PrdctCatSec() {
  const categories = [
    "PVC Coated Truck Tarpaulin",
    "PVC Tent Tarpaulin",
    "PVC Biofloc Tank Tarpaulin",
    "PVC Laminated Tarpaulin",
    "HDPE Laminated Tarpaulin",
    "HDPE Woven & Laminated Fabric",
    "HDPE Pond Liner",
    "HDPE Vermi Bed",
    "HDPE Azolla Cultivation Bed",
    "Polypropylene FIBC / Jumbo Bags",
    "Utility Covers & Custom Tarpaulin Solutions"
  ];
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Image Section - Centered vertically */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group flex items-center justify-center">
              <img
                src="/Assets/productcategory.jpg"
                alt="Product Categories"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 max-h-[500px]"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-600 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-500 rounded-full opacity-60"></div>
            </div>
          </div>
          {/* Right Content Section - Centered vertically */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Header Section */}
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Product <span className="text-red-700">Categories</span>
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto lg:mx-0 mb-6"></div>
            </div>
            {/* Categories List */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="flex items-center group hover:bg-red-50 rounded-lg p-3 transition-all duration-300 cursor-pointer"
                  >
                    {/* Animated Check Icon */}
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-600 transition-colors duration-300">
                      <svg
                        className="w-3 h-3 text-red-600 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {/* Category Text */}
                    <span className="text-gray-800 font-medium group-hover:text-red-700 transition-colors duration-300">
                      {category}
                    </span>
                   
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PrdctCatSec;
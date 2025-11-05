import React from 'react';

function Tarpaulin() {
  const products = [
    {
      id: 1,
      name: "Heavy-Duty PVC Coated Tarpaulin",
      description: "High-strength, waterproof, and UV-resistant tarpaulin ideal for industrial, transportation, and agricultural applications.",
      image: "/Assets/vision1.jpg"
    },
    {
      id: 2,
      name: "PVC Truck Cover Tarpaulin",
      description: "Designed for safe and secure protection of goods during transport.",
      image: "/Assets/vision2.jpg"
    },
    {
      id: 3,
      name: "PVC Water Storage Tank Sheet",
      description: "Durable PVC fabric for collapsible tanks and storage systems.",
      image: "/Assets/vision3.jpg"
    },
    {
      id: 4,
      name: "PVC Pond Liner / Biofloc Fish Tank",
      description: "Used for aquaculture, fish farming, and water storage tanks.",
      image: "/Assets/vision4.jpg"
    },
    {
      id: 5,
      name: "PVC Industrial Cover",
      description: "Protects machinery, construction materials, and industrial goods.",
      image: "/Assets/vision5.png"
    },
    {
      id: 6,
      name: "PVC Tarpaulin Rolts",
      description: "Available in various GSM, colors, and widths for custom fabrication and multiple industrial uses.",
      image: "/Assets/vision6.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular <span className="text-red-600">PVC Tarpaulin</span> Products
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-quality PVC tarpaulin solutions for industrial, agricultural, and commercial applications
          </p>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-orange-500"
            >
              {/* Enhanced Image Container */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-6">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain transition-transform duration-500 group-hover:scale-110 filter drop-shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if image doesn't load */}
                  <div className="hidden items-center justify-center h-40 w-full bg-gray-200 rounded-lg">
                    <span className="text-gray-500 text-sm">Image not found</span>
                  </div>
                </div>
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Enhanced Content Container */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300 text-center">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {product.description}
                </p>
              </div>
              
              {/* Removed the hover border effect div */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tarpaulin;
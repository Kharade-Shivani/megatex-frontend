import React from 'react';

function PopularProducts() {
  const products = [
    {
      id: 1,
      name: "HDPE azolla growing bed",
      specs: "450 GSM 10x04x01ft",
      image: "/Assets/popular1.png"
    },
    {
      id: 2,
      name: "HDPE Water retention Pond Liner",
      specs: "350 GSM",
      image: "/Assets/popular2.jpg"
    },
    {
      id: 3,
      name: "HDPE Waterproof Tarpaulin",
      specs: "",
      image: "/Assets/popular3.png"
    },
    {
      id: 4,
      name: "HDPE Vermi Compost Maker bed",
      specs: "350 GSM 10x04x02 ft",
      image: "/Assets/popular4.png"
    },
    {
      id: 5,
      name: "PVC Bigfloc fish tank 650",
      specs: "GSM 5 Diameter X 1.45 Mtr",
      image: "/Assets/popular5.jpg"
    },
    {
      id: 6,
      name: "HDPE Gardening Grow Bag  ",
      specs: "Rectangular  36″x18″x15″ ",
      image: "/Assets/popular6.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Popular Products</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-quality solutions trusted by industries and farmers nationwide
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
                    className="h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-110 filter drop-shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if image doesn't load */}
                  <div className="hidden items-center justify-center h-40 w-40 bg-gray-200 rounded-lg">
                    <span className="text-gray-500 text-sm">Image not found</span>
                  </div>
                </div>
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Enhanced Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300 text-center">
                  {product.name}
                </h3>
                {product.specs && (
                  <p className="text-gray-700 font-medium text-sm bg-gray-50 py-2 px-3 rounded-lg border border-gray-200 text-center">
                    {product.specs}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
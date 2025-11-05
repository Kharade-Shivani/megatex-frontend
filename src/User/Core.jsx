import React from 'react';

function Core() {
  const values = [
    {
      image: "/Assets/core1.png",
      title: "Quality Excellence",
      description: "We are committed to manufacturing superior-quality products using advanced technology and standardized raw materials to ensure long-lasting performance and durability."
    },
    {
      image: "/Assets/core2.png",
      title: "Innovation & Continuous Improvement",
      description: "We continuously upgrade our processes, designs, and materials to stay ahead in quality, efficiency, and sustainability."
    },
    {
      image: "/Assets/core3.png",
      title: "Customer Satisfaction",
      description: "Customer needs are at the heart of our operations — we deliver customized, reliable, and value-driven packaging and protection solutions to exceed expectations."
    },
    {
      image: "/Assets/core4.png",
      title: "Integrity & Transparency",
      description: "We believe in honest communication, ethical business practices, and maintaining trust with our customers, suppliers, and employees."
    },
    {
      image: "/Assets/core5.png",
      title: "Commitment & Reliability",
      description: "Timely delivery, consistent product quality, and dependable service define our commitment to every customer and partner"
    },
    {
      image: "/Assets/core6.jpg",
      title: "Teamwork & Collaboration",
      description: "Our strength lies in unity we work together with mutual respect, coordination, and shared goals to achieve excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Core Values</span>
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Guiding principles that define who we are and how we deliver excellence in every product and service
          </p>
        </div>

        {/* Enhanced Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-orange-500"
            >
              {/* Enhanced Image Container */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-6">
                <div className="flex items-center justify-center h-36">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="h-28 w-auto object-cover transition-transform duration-500 group-hover:scale-110 filter drop-shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if image doesn't load */}
                  <div className="hidden items-center justify-center h-28 w-28 bg-gray-200 rounded-lg">
                    <span className="text-gray-500 text-sm">Image not found</span>
                  </div>
                </div>
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Enhanced Content Container */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Core;
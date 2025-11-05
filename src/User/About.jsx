import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-16"> {/* Added mt-16 for fixed navbar */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content Section */}
          <div className="flex flex-col justify-center h-full">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Welcome to<br />
                <span className="text-red-600">MEGATEX PROTECTIVE FABRICS PVT. LTD.</span>
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 mb-6 rounded-full"></div>
              <p className="text-xl font-semibold text-gray-700 mb-8 leading-relaxed">
                Leading Manufacturer of Polypropylene FIBC Bags, PVC & HDPE Tarpaulin Solutions<br />
                Your Trusted Partner in Industrial Packaging & Protection Solutions – Pune, Maharashtra.
              </p>
            </div>
            {/* Content */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                At <span className="font-bold text-red-600">MEGATEX PROTECTIVE FABRICS PVT. LTD.</span>, we specialize in the manufacturing, supply, and export of premium-quality PVC Tarpaulins, HDPE Tarpaulins, and Polypropylene FIBC Bulk Bags. Based in Pune, Maharashtra, we cater to industrial, commercial, and agricultural sectors, delivering robust and reliable protection solutions designed to withstand the toughest environmental and operational conditions.
              </p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                With over <span className="font-bold text-red-600">16 years of industry experience</span>, MEGATEX has earned a strong reputation for excellence, innovation, and reliability.
              </p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                Our products are engineered to perform durable, UV-stabilized, weather-resistant, and 100% waterproof, ensuring superior protection and long service life. We believe in building a greener future through sustainable manufacturing practices and the use of environmentally responsible materials.
              </p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                Our <span className="font-bold text-gray-900">PVC coated Tarpaulin, PVC Biofiloc fish tank, PVC Laminated tarpaulin, PVC Tent, HDPE Vermi bed, HDPE Azolla Bed, HDPE Pond liner, HDPE Tarpaulin and Polypropylene FIBC Bags</span> products are designed for long life, recyclability, and reduced environmental impact, providing maximum protection with minimal waste.
              </p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                Whether you need custom sizes, specialized coatings, or heavy-duty industrial covers, we offer tailor-made solutions to meet your exact requirements. At MEGATEX, we take pride in being a customer-centric company committed to quality, consistency, and on-time delivery, ensuring complete satisfaction and long-term trust in every order we fulfill.
              </p>
            </div>
          </div>
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="group">
              <img
                src="/Assets/aboutus.png"
                alt="MEGATEX Protective Fabrics"
                className="w-full h-auto rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
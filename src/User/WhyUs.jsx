import React from 'react'

function WhyUs() {
  const values = [
    {
      image: "/Assets/experience.png",
      title: "Experience",
      description: "With over 16 years of experience, MEGATEX has earned a solid reputation for delivering innovative and dependable protective fabric solutions for industrial, agricultural, and commercial applications."
    },
    {
      image: "/Assets/responsible.png",
      title: "Responsible",
      description: "Responsible and serious qc team participates in all processes from raw material quality checking to produce inspecting to container loading."
    },
    {
      image: "/Assets/customization.png",
      title: "Customization & Bulk Production",
      description: "We offer tailor-made solutions to meet your exact size, GSM, and application requirements. Our large-scale manufacturing capacity allows us to handle bulk orders efficiently and on time."
    },
    {
      image: "/Assets/superiorquality.png",
      title: "Superior Quality Materials",
      description: "All our products are manufactured using high-grade, standardized raw materials that ensure exceptional durability, strength, and performance. Every tarpaulin and fabric undergoes stringent quality checks to guarantee consistent excellence."
    },
    {
      image: "/Assets/advancemanufacture.png",
      title: "Advanced Manufacturing Technology",
      description: "We employ state-of-the-art machinery and modern lamination techniques to produce high-precision, long-lasting tarpaulin and packaging solutions. This ensures every product meets international quality standards."
    },
    {
      image: "/Assets/professional.png",
      title: "professional team",
      description: "Professional sales team, production team, and support team. We can know and deliver what exactly you need."
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <h1 className="font-bold text-gray-900 mb-6">
            <span className="text-3xl md:text-4xl">Why Choose </span>
            <span className="text-4xl md:text-5xl text-red-600">MEGATEX</span>
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the trusted choice for protective fabric solutions worldwide
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
                <div className="flex items-center justify-center h-32">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-110 filter drop-shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if image doesn't load */}
                  <div className="hidden items-center justify-center h-20 w-20 bg-gray-200 rounded-full">
                    <span className="text-gray-500 text-sm">Icon</span>
                  </div>
                </div>
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              {/* Enhanced Content Container */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {value.description}
                </p>
                {/* Decorative Bottom Line */}
                <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mt-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyUs
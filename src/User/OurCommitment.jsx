import React from 'react';
function OurCommitment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Commitment</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
        </div>
        {/* Enhanced Commitment Items */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-orange-500">
          <div className="space-y-6">
            {/* Uncompromising Quality - Enhanced */}
            <div className="group flex items-start p-4 rounded-xl hover:bg-red-50 transition-all duration-300">
              <div className="w-8 h-8 border-2 border-green-500 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <p className="text-gray-800 text-base leading-relaxed">
                <span className="font-bold text-gray-900">Uncompromising Quality</span> – We use certified materials and advanced technology for consistent product excellence.
              </p>
            </div>
            {/* Customer Satisfaction - Enhanced */}
            <div className="group flex items-start p-4 rounded-xl hover:bg-red-50 transition-all duration-300">
              <div className="w-8 h-8 border-2 border-green-500 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <p className="text-gray-800 text-base leading-relaxed">
                <span className="font-bold text-gray-900">Customer Satisfaction</span> – Tailor-made solutions, transparent communication, and timely delivery are our top priorities.
              </p>
            </div>
            {/* Innovation & Improvement - Enhanced */}
            <div className="group flex items-start p-4 rounded-xl hover:bg-red-50 transition-all duration-300">
              <div className="w-8 h-8 border-2 border-green-500 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <p className="text-gray-800 text-base leading-relaxed">
                <span className="font-bold text-gray-900">Innovation & Improvement</span> – We constantly upgrade our processes and designs to stay ahead in performance and sustainability.
              </p>
            </div>
            {/* Environmental Responsibility - Enhanced */}
            <div className="group flex items-start p-4 rounded-xl hover:bg-red-50 transition-all duration-300">
              <div className="w-8 h-8 border-2 border-green-500 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <p className="text-gray-800 text-base leading-relaxed">
                <span className="font-bold text-gray-900">Environmental Responsibility</span> – We focus on eco-friendly, recyclable materials that support a greener planet.
              </p>
            </div>
            {/* Integrity & Reliability - Enhanced */}
            <div className="group flex items-start p-4 rounded-xl hover:bg-red-50 transition-all duration-300">
              <div className="w-8 h-8 border-2 border-green-500 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <p className="text-gray-800 text-base leading-relaxed">
                <span className="font-bold text-gray-900">Integrity & Reliability</span> – We build long-term relationships based on trust, ethics, and consistent results.
              </p>
            </div>
            {/* Enhanced Footer Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 text-center">
                <p className="text-gray-800 text-lg leading-relaxed">
                  With over <span className="font-bold text-red-600">16 years of experience</span>, <span className="font-bold text-gray-900">MEGATEX</span> stands committed to <span className="font-bold text-gray-900">delivering protection that performs and quality that lasts.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
export default OurCommitment;
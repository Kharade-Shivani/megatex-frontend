import React from 'react';
function PopularApplication() {
  return (
   <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white p-8 md:p-12 mx-4 md:mx-16 lg:mx-24 rounded-2xl shadow-2xl border border-blue-300/20">
        <div className="text-center max-w-7xl mx-auto">
          <h1 className="ttext-3xl md:text-4xl font-bold mb-6">
            <span className="text-black">Popular</span>{' '}
            <span className="text-red-600">Applications</span>
          </h1>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed px-2 text-blue-100 font-light max-w-4xl mx-auto">
            Professional production team, sales team, and support team. We can know and deliver what exactly you need.
          </p>
        </div>
      </div>

</>
  );
}
export default PopularApplication;
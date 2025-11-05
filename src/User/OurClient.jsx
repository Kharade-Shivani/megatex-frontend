import React from 'react';
function OurClient() {
  // Client data with public image paths
  const clients = {
    firstRow: [
      { name: 'TATA STEEL', logo: '/Assets/tatasteel.png' },
      { name: 'Ambuja', logo: '/Assets/ambuja.png' },
      { name: 'Dalmia', logo: '/Assets/dalmia.png' },
      { name: 'SONAI', logo: '/Assets/sonai.jpg' },
      { name: 'Asian Paints', logo: '/Assets/asianpaints.jpg' },
      { name: 'TATA MOTORS', logo: '/Assets/tatamotors.png' }
    ],
    secondRow: [
      { name: 'Bajaj', logo: '/Assets/bajaj.png' },
      { name: 'Raymond', logo: '/Assets/raymond.png' },
      { name: 'IFFCO', logo: '/Assets/iffco.jpg' },
      { name: 'Bata', logo: '/Assets/bata.png' },
      { name: 'Kajaria', logo: '/Assets/kajaria.jpg' }
    ]
  };
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white font-sans">
      {/* Top Section - PVC Coated tarpaulin factory */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              PVC Coated Tarpaulin Factory -{' '}
              <span className="text-red-600">Wholesale PVC Coated Tarpaulin</span>
            </h1>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto mb-8 rounded-full"></div>
          </div>
      
            <p className="text-xl text-gray-800 leading-relaxed text-center font-medium">
              <strong className="text-red-600 text-2xl">MEGATEX</strong> is a leading manufacturer of PVC Tarpaulin, HDPE Sheets and PP jumbo bulk Bag. Company annual Production 5000 MT. With 15+ years of experience, MEGATEX PVC tarpaulin and FIBC Jumbo Bulk Bag has been sold to 40+ countries and areas of the USA, UK, Canada, Australia, Russia, Egypt, Tunisia, etc., and more foreign markets will be promoted in future...
            </p>
          
        </div>
      </div>
      {/* Domestic Client Section */}
      <div className="w-full  bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-600">Prestigious</span> Clients
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-2 rounded-full shadow-lg"></div>
            {/* <p className="text-gray-600 text-xl font-semibold">Trusted by Industry Leaders Worldwide</p> */}
          </div>
          {/* First Row of Clients */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
            {clients.firstRow.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-20 object-contain"
                  onError={(e) => {
                    console.error(`Failed to load image: ${client.logo}`);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
          {/* Second Row of Clients */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {clients.secondRow.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-20 object-contain"
                  onError={(e) => {
                    console.error(`Failed to load image: ${client.logo}`);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </div>
  );
}
export default OurClient;
import React from 'react'

function WideRange() {
    const applications = [
    {
      id: 1,
      name: "PVC Biofloc fish Tank Tarpaulin",
      spec: "650 GSM 6 Dia X 1.45",
      image: "/Assets/app1.jpg"
    },
    {
      id: 2,
      name: "PVC Coated Truck Tarpaulin",
      spec: "550 GSM 18x45 ft",
      image: "/Assets/app2.jpg"
    },
    {
      id: 3,
      name: "HDPE Vermi Compost Bed",
      spec: "450 GSM 12x04x02 ft",
      image: "/Assets/app3.jpg"
    },
    {
      id: 4,
      name: "PVC Laminated Tarpaulin",
      spec: "650 GSM",
      image: "/Assets/app4.jpg"
    },
    {
      id: 5,
      name: "Polypropylene FIBC Jumbo Bags",
      spec: "210 GSM 95x95x110 cm",
      image: "/Assets/app5.jpg"
    },
    {
      id: 6,
      name: "HDPE Water Retention Pond Liner",
      spec: "300 Microns",
      image: "/Assets/app6.jpg"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
           
        
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wide Range of <span className="text-red-600">Products</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For Commercial, Industrial and Agricultural Applications
          </p>
        </div>
        {/* Enhanced Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((application) => (
            <div
              key={application.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-orange-500"
            >
              {/* Enhanced Image Container */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-6">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={application.image}
                    alt={application.name}
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
                  {application.name}
                </h3>
                <p className="text-gray-700 font-medium text-sm bg-gray-50 py-2 px-3 rounded-lg border border-gray-200 text-center">
                  {application.spec}
                </p>
               
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  )
}

export default WideRange
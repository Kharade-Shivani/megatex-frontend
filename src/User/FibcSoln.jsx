import React, { useState, useEffect } from 'react';
import httpClient from '../Api/axios'

function FibcSoln() {
  const [bagProducts, setBagProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFIBCData = async () => {
      try {
        setLoading(true);
        const response = await httpClient.get('/getAllFIBC');
        const productsData = Array.isArray(response.data) 
          ? response.data 
          : [response.data];
          
        setBagProducts(productsData);
        setError(null);
      } catch (err) {
        console.error('Error fetching FIBC data:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFIBCData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading products...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-16 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            FIBC Bulk Bag <span className="text-red-600">Solutions</span>
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            High-quality industrial bulk bags designed for durability and performance
          </p>
        </div>
        
        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bagProducts.map((product, index) => (
            <div
              key={product._id || index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-orange-500"
            >
              {/* Enhanced Product Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-6">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={product.fibc_image || "/Assets/bulkbag.png"}
                    alt={product.fibc_title || "FIBC Bulk Bag"}
                    className="h-40 w-auto object-cover transition-transform duration-500 group-hover:scale-110 filter drop-shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      // Create fallback if it doesn't exist
                      let fallback = e.target.nextSibling;
                      if (!fallback) {
                        fallback = document.createElement('div');
                        fallback.className = 'hidden items-center justify-center h-40 w-40 bg-gray-200 rounded-lg';
                        fallback.innerHTML = '<span class="text-gray-500 text-sm">Image not found</span>';
                        e.target.parentNode.appendChild(fallback);
                      }
                      fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if image doesn't load */}
                  <div className="hidden items-center justify-center h-40 w-40 bg-gray-200 rounded-lg">
                    <span className="text-gray-500 text-sm">Image not found</span>
                  </div>
                </div>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              {/* Enhanced Product Details */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-red-600 transition-colors duration-300 text-center">
                    {product.fibc_title}
                  </h3>
                  <p className="text-gray-700 font-medium text-sm bg-gray-50 py-2 px-3 rounded-lg border border-gray-200">
                    {product.fibc_specification}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-16 border-2 border-black rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Factory Direct Price
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Contact us today for bulk pricing and custom solutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default FibcSoln;
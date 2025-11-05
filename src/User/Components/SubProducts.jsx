import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import httpClient from '../../Api/axios';
function SubProduct() {
  const [subProducts, setSubProducts] = useState([]);
  const [filteredSubProducts, setFilteredSubProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state || {};
  useEffect(() => {
    const fetchSubProducts = async () => {
      if (!category) {
        setLoading(false);
        setError('No category selected');
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const response = await httpClient.get('/getAllSubCategory');
        
        if (response.data && Array.isArray(response.data)) {
          // Filter subproducts by category ID and only active status
          const filtered = response.data.filter(
            subProduct => 
              subProduct.categoryId && 
              subProduct.categoryId._id === category._id &&
              subProduct.status === 'active'
          );
          setSubProducts(filtered);
          setFilteredSubProducts(filtered);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching subproducts:', error);
        setError('Failed to load sub-products. Please try again later.');
        setSubProducts([]);
        setFilteredSubProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchSubProducts();
  }, [category]);
  // Filter subproducts based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredSubProducts(subProducts);
    } else {
      const filtered = subProducts.filter(subProduct =>
        subProduct.gsm_name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSubProducts(filtered);
    }
  }, [searchTerm, subProducts]);
  const handleBackClick = () => {
    navigate(-1);
  };
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const fallback = e.target.nextSibling;
    if (fallback) fallback.style.display = 'flex';
  };
  const handleViewProductsClick = (subProduct) => {
    // Navigate to main products page
    navigate('/main-products', {
      state: {
        category: category,
        subProduct: subProduct
      }
    });
  };
  // Skeleton Loader
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Back Button Skeleton */}
          <div className="mb-6">
            <div className="h-6 bg-gray-200 rounded w-24 mb-4 animate-pulse"></div>
            <div className="text-center mb-12">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
              <div className="h-1 bg-gray-200 rounded w-24 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
            </div>
          </div>
          {/* Search Bar Skeleton */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
          {/* Products Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="bg-gray-200 h-6 rounded w-3/4 mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-1/2 mb-4"></div>
                <div className="space-y-2">
                  <div className="bg-gray-200 h-4 rounded w-full"></div>
                  <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  // Error State
  if (error && !category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
            <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Error</h3>
            <p className="text-gray-600 mb-6">{error}</p>
            <button 
              onClick={handleBackClick}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Back Button and Heading */}
        <div className="mb-6">
          <button 
            onClick={handleBackClick}
            className="flex items-center text-orange-500 hover:text-orange-600 font-medium mb-4 transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Categories
          </button>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {category?.name} <span className="text-red-600">GSM-Products</span>
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our premium range of {category?.name} GSM-Products
            </p>
          </div>
        </div>
        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder={`Search ${category?.name} sub-products...`}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        {/* Error State for sub-products */}
        {error && (
          <div className="text-center py-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Loading Failed</h3>
              <p className="text-gray-600 mb-6">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Retry
              </button>
            </div>
          </div>
        )}
        {/* Sub Products Grid */}
        {!error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredSubProducts.map((subProduct, index) => (
                <div
                  key={subProduct._id || index}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-orange-500"
                >
                  {/* Product Image Container */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-6">
                    <div className="flex items-center justify-center h-48">
                      <img
                        src={subProduct.gsm_image || "/Assets/bulkbag.png"}
                        alt={subProduct.gsm_name}
                        className="h-40 w-auto object-cover transition-transform duration-500 group-hover:scale-110 filter drop-shadow-lg"
                        onError={handleImageError}
                      />
                      {/* Fallback if image doesn't load */}
                      <div className="hidden items-center justify-center h-40 w-40 bg-gray-200 rounded-lg">
                        <span className="text-gray-500 text-sm">Image not found</span>
                      </div>
                    </div>
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  {/* Product Details */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight group-hover:text-red-600 text-center transition-colors duration-300">
                        {subProduct.gsm_name}
                      </h3>
                      {/* View Products Button */}
                      <button
                        onClick={() => handleViewProductsClick(subProduct)}
                        className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                      >
                        View Products
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Search Results Info */}
            {searchTerm && (
              <div className="text-center mb-8">
                <p className="text-gray-600">
                  Found {filteredSubProducts.length} sub-product(s) matching "{searchTerm}"
                </p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="text-orange-500 hover:text-orange-600 font-medium mt-2"
                >
                  Clear search
                </button>
              </div>
            )}
            {/* Empty State */}
            {filteredSubProducts.length === 0 && !error && (
              <div className="text-center py-12">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m8-8V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v1M9 7h6" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {searchTerm ? 'No Matching Sub-Products Found' : 'No Sub-Products Available'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {searchTerm 
                      ? `No sub-products found matching "${searchTerm}". Try a different search term.`
                      : `There are no sub-products available for ${category?.name} at the moment.`
                    }
                  </p>
                  {searchTerm ? (
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      Clear Search
                    </button>
                  ) : (
                    <button 
                      onClick={handleBackClick}
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      Browse Other Categories
                    </button>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
export default SubProduct;
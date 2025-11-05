import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import httpClient from '../../Api/axios';
import { FiArrowLeft, FiShoppingCart, FiBox, FiAward, FiGlobe, FiTruck, FiLayers, FiPackage, FiShield, FiAnchor } from 'react-icons/fi';

function ProductDetailPage() {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (location.state?.product) {
      setProduct(location.state.product);
      setLoading(false);
    } else {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          // Assuming you have an endpoint to get product by ID
          const response = await httpClient.get(`/getProductById/${productId}`);
          setProduct(response.data);
        } catch (error) {
          console.error('Error fetching product:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [productId, location.state]);

  const handleBackClick = () => {
    // Navigate back to main products page with preserved state
    if (location.state?.from === '/main-products' && location.state?.category && location.state?.subProduct) {
      navigate('/main-products', { 
        state: { 
          category: location.state.category,
          subProduct: location.state.subProduct
        }
      });
    } else if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  const handleContactSupplier = () => {
    // Navigate to contact page with product information
    navigate('/contact', {
      state: {
        product: product,
        category: location.state?.category,
        subProduct: location.state?.subProduct,
        from: location.pathname
      }
    });
  };

  // Combine all images - main image first, then subImages
  const allImages = [
    product?.image,
    ...(product?.subImages || [])
  ].filter(Boolean);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-24 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="bg-gray-200 rounded-xl h-96"></div>
                <div className="flex space-x-4">
                  {[1,2,3,4].map(item => (
                    <div key={item} className="bg-gray-200 rounded h-20 w-20"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="space-y-4">
                  <div className="h-20 bg-gray-200 rounded"></div>
                  <div className="h-20 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mt-16">
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 max-w-md mx-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiBox className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button 
            onClick={handleBackClick}
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleBackClick}
            className="flex items-center text-orange-500 hover:text-orange-600 font-medium mb-6 transition-colors duration-300 group"
          >
            <FiArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Products
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Images and Manufacturing Info */}
          <div className="space-y-6">
            {/* Image Gallery */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center justify-center min-h-96 border border-gray-200">
                {allImages.length > 0 ? (
                  <img
                    src={allImages[selectedImageIndex]}
                    alt={product.ProductName}
                    className="max-w-full max-h-96 object-contain rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <FiBox className="w-20 h-20 mb-4" />
                    <span className="text-lg">No Image Available</span>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {allImages.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <FiLayers className="w-5 h-5 mr-2 text-orange-500" />
                    Product Gallery ({allImages.length} images)
                  </h3>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                    {allImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`aspect-square border-2 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                          selectedImageIndex === index 
                            ? 'border-orange-500 ring-2 ring-orange-200 shadow-md' 
                            : 'border-gray-300 hover:border-orange-400'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.ProductName} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Manufacturing Information */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 lg:p-8 border border-indigo-200">
              <h4 className="text-xl font-bold text-indigo-900 mb-6 flex items-center justify-center lg:justify-start">
                <FiTruck className="w-6 h-6 mr-3 text-indigo-500" />
                Manufacturing & Origin
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <FiGlobe className="w-5 h-5 mr-3 text-indigo-500" />
                  <div>
                    <div className="text-sm text-indigo-600 font-medium">Origin Country</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {product.OriginOfCountry || 'Not specified'}
                    </div>
                  </div>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <FiAnchor className="w-5 h-5 mr-3 text-indigo-500" />
                  <div>
                    <div className="text-sm text-indigo-600 font-medium">Manufactured By</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {product.MfgBy || 'Not specified'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div className="flex justify-center pt-4">
              <button 
                onClick={handleContactSupplier}
                className="w-full max-w-md bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FiShoppingCart className="w-6 h-6 mr-3" />
                Contact Supplier for Pricing
              </button>
            </div>
          </div>

          {/* Right Column - Combined Product Details Card */}
          <div className="space-y-6">
            {/* Product Header */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-200">
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {product.Category?.name && (
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                      {product.Category.name}
                    </span>
                  )}
                  {product.Subcategory?.gsm_name && (
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                      {product.Subcategory.gsm_name}
                    </span>
                  )}
                </div>
                
                <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.ProductName}
                </h1>

                {product.Brand && (
                  <div className="flex items-center text-base lg:text-lg text-gray-700 mb-4">
                    <FiAward className="w-5 h-5 mr-2 text-orange-500" />
                    <span className="font-semibold">Brand:</span>
                    <span className="ml-2 text-gray-900">{product.Brand}</span>
                  </div>
                )}

                {product.ProductDescription && (
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 rounded-r-lg">
                    {product.ProductDescription}
                  </p>
                )}
              </div>
            </div>

            {/* Combined Details Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-200">
              <div className="space-y-8">
                {/* Specifications Section */}
                <div className="space-y-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center">
                    <FiPackage className="w-5 h-5 lg:w-6 lg:h-6 mr-3 text-orange-500" />
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <SpecItem label="Material" value={product.Material} />
                    <SpecItem label="GSM Thickness" value={product.GSM_Thickness} />
                    <SpecItem label="Size" value={product.Size} />
                    <SpecItem label="Color" value={product.Color} />
                    <SpecItem label="Type" value={product.Type} />
                    <SpecItem label="Lifespan" value={product.Lifespan} />
                    <SpecItem label="Joint Type" value={product.JointType} />
                    <SpecItem label="Fabric Type" value={product.FabricType} />
                    <SpecItem label="Eyelets" value={product.Eyelets} />
                    <SpecItem label="Sealing Type" value={product.SealingType} />
                    <SpecItem label="Accessories" value={product.Accessories} />
                  </div>
                </div>

                {/* Features & Advantages Section */}
                {(product.KeyFeatures || product.Advantages) && (
                  <div className="space-y-6 pt-6 border-t border-gray-200">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center">
                      <FiShield className="w-5 h-5 lg:w-6 lg:h-6 mr-3 text-orange-500" />
                      Features & Advantages
                    </h3>
                    
                    <div className="space-y-6">
                      {product.KeyFeatures && (
                        <div className="bg-blue-50 rounded-xl p-4 lg:p-6 border border-blue-200">
                          <h4 className="text-lg font-semibold text-blue-900 mb-3">Key Features</h4>
                          <p className="text-blue-800 leading-relaxed text-sm lg:text-base">
                            {product.KeyFeatures}
                          </p>
                        </div>
                      )}
                      
                      {product.Advantages && (
                        <div className="bg-green-50 rounded-xl p-4 lg:p-6 border border-green-200">
                          <h4 className="text-lg font-semibold text-green-900 mb-3">Advantages</h4>
                          <p className="text-green-800 leading-relaxed text-sm lg:text-base">
                            {product.Advantages}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Applications Section */}
                {product.Application && (
                  <div className="space-y-6 pt-6 border-t border-gray-200">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center">
                      <FiGlobe className="w-5 h-5 lg:w-6 lg:h-6 mr-3 text-orange-500" />
                      Applications & Uses
                    </h3>
                    <div className="bg-purple-50 rounded-xl p-4 lg:p-6 border border-purple-200">
                      <p className="text-purple-800 text-sm lg:text-base leading-relaxed">
                        {product.Application}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for specification items
const SpecItem = ({ label, value }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
    <span className="font-medium text-gray-700 flex items-center text-sm lg:text-base">
      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
      {label}:
    </span>
    <span className="text-gray-900 font-semibold text-right text-sm lg:text-base">{value || 'N/A'}</span>
  </div>
);

export default ProductDetailPage;
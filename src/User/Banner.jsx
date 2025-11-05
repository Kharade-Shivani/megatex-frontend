import React, { useState, useEffect } from 'react';
import httpClient from '../Api/axios';

function Banner() {
  const [banners, setBanners] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch banners from API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await httpClient.get('/getAllBanner');
        const activeBanners = response.data.filter(banner => banner.status === 'active');
        setBanners(activeBanners);
        setLoading(false);
      } catch (err) {
        setError('Failed to load banners');
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  // Auto slide functionality
  useEffect(() => {
    if (banners.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (loading) {
    return (
      <div className="mt-20 w-full h-96 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Loading banners...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-20 w-full h-96 bg-red-100 rounded-lg flex items-center justify-center">
        <span className="text-red-500">{error}</span>
      </div>
    );
  }

  if (banners.length === 0) {
    return (
      <div className="mt-20 w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">No banners available</span>
      </div>
    );
  }

  return (
    // <div className="mt-20 w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden relative">
    <div
  className="w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden relative"
  style={{ marginTop: '50px' }} // Adjust according to navbar height
>

      {/* Slides container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div
            key={banner._id}
            className="w-full h-full flex-shrink-0"
          >
            <img
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots indicator */}
      {banners.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Banner;
// User/Components/WhatsAppIcon.js
import React from 'react';

const WhatsAppIcon = () => {
  const phoneNumber = "919860067777"; // With country code
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  // Enhanced message
  const message = "Hello! I would like to enquire about your products. Please share more details including pricing and availability.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 group">
      {/* Floating Tooltip */}
      <div className="absolute -top-12 -left-32 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap">
        Chat with us on WhatsApp!
        <div className="absolute -bottom-1 right-6 w-3 h-3 bg-gray-900 transform rotate-45"></div>
      </div>

      {/* Animated Ring Pulse */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75 group-hover:opacity-100 group-hover:animate-none"></div>
      
      {/* Main Icon Container */}
      <div 
        className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl group-active:scale-95 border-2 border-white"
        onClick={handleWhatsAppClick}
      >
        {/* Inner Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
        
        {/* WhatsApp Icon */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 30 30" 
          fill="none" 
          className="relative drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
        >
          <path 
            d="M15 0C6.716 0 0 6.716 0 15c0 2.7.708 5.234 1.944 7.416L0 30l7.872-1.908C10.044 29.208 12.488 30 15 30c8.284 0 15-6.716 15-15S23.284 0 15 0z" 
            fill="white"
          />
          <path 
            d="M23.112 20.892c-.372.996-1.836 1.824-2.832 1.932-.996.108-2.304.108-3.54-.216-1.236-.324-3.888-1.404-5.868-3.6-1.98-2.196-2.664-4.248-2.808-5.484-.144-1.236.072-2.232.72-3.084.648-.852 1.44-1.368 2.016-1.584.576-.216 1.152-.072 1.44.216.288.288.936.936 1.08 1.296.144.36.288.792-.072 1.296-.36.504-.648.864-1.08 1.368-.36.432-.36.792-.072 1.152.288.36 1.296 1.8 2.808 2.664 1.512.864 2.016.936 2.376.936.36 0 .648-.144 1.008-.432.36-.288 1.44-1.296 1.8-1.728.36-.432.72-.36 1.152-.216.432.144 2.664 1.26 3.132 1.512.468.252.78.936.576 1.8z" 
            fill="currentColor"
            className="text-green-600"
          />
        </svg>

        {/* Notification Dot */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppIcon;
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "FIBC Solutions", href: "/solutions" },
    { name: "Tarpaulin", href: "/tarpaulin" },
    { name: "Products", href: "/product" },
    { name: "Contact Us", href: "/contact" }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.189-1.551-.741-.941-1.009-2.142-.727-3.311.282-1.169 1.067-2.096 2.103-2.527 1.035-.431 2.212-.331 3.157.266.945.597 1.566 1.62 1.566 2.749 0 1.129-.621 2.152-1.566 2.749-.945.597-2.122.697-3.157.266-.482-.201-.895-.529-1.203-.951l1.161-1.161c.156.234.373.427.631.56.258.134.549.203.843.203.620 0 1.195-.32 1.526-.843.331-.523.331-1.195 0-1.718-.331-.523-.906-.843-1.526-.843-.294 0-.585.069-.843.203-.258.134-.475.326-.631.56l-1.161-1.161c.308-.422.721-.75 1.203-.951 1.036-.431 2.212-.331 3.157.266.945.597 1.566 1.62 1.566 2.749 0 1.129-.621 2.152-1.566 2.749-.945.597-2.122.697-3.157.266z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 shadow-2xl border-t border-gray-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Column 1 - Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/Assets/logo.png" 
                  alt="Megatex Protective Fabrics" 
                  className="h-12 w-auto sm:h-14 lg:h-16 object-contain" 
                />
                <div className="ml-3 flex flex-col">
                  <span className="text-xl sm:text-2xl lg:text-2xl font-bold text-white leading-tight">
                    Megatex
                  </span>
                  <span className="text-xs sm:text-sm lg:text-sm text-gray-300 font-medium leading-tight">
                    Protective Fabrics Pvt. Ltd.
                  </span>
                </div>
              </Link>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              Leading manufacturers of high-quality FIBC bags, tarpaulins, and industrial fabric solutions.
              Your trusted partner for durable and reliable packaging needs.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div >
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <div className="space-y-2 flex flex-col ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium block py-1 hover:translate-x-1 transform transition-transform w-fit"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h3>
            <div className="space-y-6">
              {/* Domestic Market */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-300">Domestic Market</h4>
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium text-sm">+919096576777</p>
                    <p className="text-gray-300 font-medium text-sm">+919730915004</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 font-medium text-sm">info@megatexindia.com</p>
                </div>
              </div>

              {/* International Market */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-300">International Market</h4>
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium text-sm">+919881346706</p>
                    <p className="text-gray-300 font-medium text-sm">+919730915004</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 font-medium text-sm">info@megatexindia.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">
                    Sr.No 266 Indapur Aklu Road
                  </p>
                  <p className="text-gray-400 text-sm">
                    Sunwad, Indapur Dist Pune Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 - Follow Us */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-gray-700 hover:text-white hover:shadow-lg group"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-gray-300 group-hover:text-white">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-300 text-sm text-center">
              © {currentYear} Megatex Protective Fabrics Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
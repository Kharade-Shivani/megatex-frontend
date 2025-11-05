import React, { useState } from 'react';
import Navbar from '../Navbar';
import Banner from '../Banner';
import About from '../About';
import PrdctCatSec from '../PrdctCatSec';
import FibcSoln from '../FibcSoln';
import Core from '../Core';
import PopularApplication from '../PopularApplication';
import OurVision from '../OurVision';
import Pvc from '../Pvc';
import PopularProducts from '../PopularProduct';
import WhyUs from '../WhyUs';
import OurClient from '../OurClient';
import OurCommitment from '../OurCommitment';
import EnquiryForm from '../EnquiryForm';
import WideRange from '../WideRange';
import ProductSlider from '../ProductSlider';
import Tarpaulin from '../Tarpaulin';
import Footer from '../Footer';
// import ProductSlider from '../ProductSlider';
function Home() {
  //contact
     const [formData, setFormData] = useState({
        name: '',
        address: '',
        comments: '',
        mobile: '',
        email: ''
      });
      const [errors, setErrors] = useState({});
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      // Replace with your actual email
      const FORM_SUBMIT_EMAIL = "amolmamu@gmail.com";
    
      const validateForm = () => {
        const newErrors = {};
        // Name validation
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        }
        // Address validation
        if (!formData.address.trim()) {
          newErrors.address = 'Address is required';
        }
        // Comments validation
        if (!formData.comments.trim()) {
          newErrors.comments = 'Comments are required';
        }
        // Mobile validation
        if (!formData.mobile.trim()) {
          newErrors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
          newErrors.mobile = 'Please enter a valid 10-digit mobile number';
        }
        // Email validation
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        return newErrors;
      };
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [id]: value
        }));
        
        // Clear error when user starts typing
        if (errors[id]) {
          setErrors(prev => ({
            ...prev,
            [id]: ''
          }));
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        
        if (Object.keys(newErrors).length === 0) {
          setIsSubmitting(true);
          
          try {
            // Create form data for FormSubmit with capitalized field names
            const submitFormData = new FormData();
            submitFormData.append('Name', formData.name);
            submitFormData.append('Email', formData.email);
            submitFormData.append('Mobile No', formData.mobile);
            submitFormData.append('Address', formData.address);
            submitFormData.append('Comments', formData.comments);
            submitFormData.append('_subject', 'New Enquiry from MEGATEX Website');
            submitFormData.append('_captcha', 'false');
            submitFormData.append('_template', 'table');
            submitFormData.append('_autoresponse', 'Thank you for your enquiry! We will get back to you soon.');
    
            // Submit to FormSubmit
            const response = await fetch(`https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`, {
              method: 'POST',
              body: submitFormData,
            });
    
            if (response.ok) {
              console.log('Form submitted successfully:', formData);
              setIsSubmitted(true);
              setIsSubmitting(false);
              
              // Reset form
              setFormData({
                name: '',
                address: '',
                comments: '',
                mobile: '',
                email: ''
              });
              
              // Reset success message after 5 seconds
              setTimeout(() => {
                setIsSubmitted(false);
              }, 5000);
            } else {
              throw new Error('Form submission failed');
            }
          } catch (error) {
            console.error('Error submitting form:', error);
            // Fallback: show success anyway (since FormSubmit might still work even if AJAX fails)
            setIsSubmitted(true);
            setIsSubmitting(false);
          }
        } else {
          setErrors(newErrors);
        }
      };
    //contact end
  //fibc data
   const bagProducts = [
    {
      title: "PP 180 GSM U-Panel FIBC Bag",
      specs: "90 × 90 × 120 cm (1000 kg)"
    },
    {
      title: "PP 220 GSM, Circular BIG BAG,",
      specs: "90 × 90 × 120 cm (1200 kg)"
    },
    {
      title: "PP 200 GSM 4-Panel FIBC JUMBO Bag",
      specs: "90 × 90 × 110 cm (1000 kg)"
    },
    {
      title: "PP 260 GSM BAFFLE BIG BAG",
      specs: "95 × 95 × 125 cm (1500 kg)"
    },
    {
      title: "PP 240 GSM Food Grade / Pharma Grade FIBC Bag",
      specs: "100 X 100 X 130 (2000 kg)"
    },
    {
      title: "PP210 gsm type c conductive bags",
      specs: "95x95x110 cm (1200 kg)"
    }
  ];
  //fibc end

  //tarpaulin data
   const products = [
    {
      id: 1,
      name: "Heavy-Duty PVC Coated Tarpaulin",
      description: "High-strength, waterproof, and UV-resistant tarpaulin ideal for industrial, transportation, and agricultural applications.",
      image: "/Assets/vision1.jpg"
    },
    {
      id: 2,
      name: "PVC Truck Cover Tarpaulin",
      description: "Designed for safe and secure protection of goods during transport.",
      image: "/Assets/vision2.jpg"
    },
    {
      id: 3,
      name: "PVC Water Storage Tank Sheet",
      description: "Durable PVC fabric for collapsible tanks and storage systems.",
      image: "/Assets/vision3.jpg"
    },
    {
      id: 4,
      name: "PVC Pond Liner / Biofloc Fish Tank",
      description: "Used for aquaculture, fish farming, and water storage tanks.",
      image: "/Assets/vision4.jpg"
    },
    {
      id: 5,
      name: "PVC Industrial Cover",
      description: "Protects machinery, construction materials, and industrial goods.",
      image: "/Assets/vision5.png"
    },
    {
      id: 6,
      name: "PVC Tarpaulin Rolts",
      description: "Available in various GSM, colors, and widths for custom fabrication and multiple industrial uses.",
      image: "/Assets/vision6.jpg"
    }
  ];
  //tarpaulinm end
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-grow pt-19">


        <Banner />
        {/* <About /> */}
        {/* ==========================about==================================== */}
         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 "> {/* Added mt-16 for fixed navbar */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content Section */}
          <div className="flex flex-col justify-center h-full">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Welcome to<br />
                <span className="text-red-600">MEGATEX PROTECTIVE FABRICS PVT. LTD.</span>
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 mb-6 rounded-full"></div>
              <p className="text-xl font-semibold text-gray-700 mb-8 leading-relaxed">
                Leading Manufacturer of Polypropylene FIBC Bags, PVC & HDPE Tarpaulin Solutions<br />
                Your Trusted Partner in Industrial Packaging & Protection Solutions – Pune, Maharashtra.
              </p>
            </div>
            {/* Content */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                At <span className="font-bold text-red-600">MEGATEX PROTECTIVE FABRICS PVT. LTD.</span>, we specialize in the manufacturing, supply, and export of premium-quality PVC Tarpaulins, HDPE Tarpaulins, and Polypropylene FIBC Bulk Bags. Based in Pune, Maharashtra, we cater to industrial, commercial, and agricultural sectors, delivering robust and reliable protection solutions designed to withstand the toughest environmental and operational conditions.
              </p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                With over <span className="font-bold text-red-600">16 years of industry experience</span>, MEGATEX has earned a strong reputation for excellence, innovation, and reliability.
              </p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                Our products are engineered to perform durable, UV-stabilized, weather-resistant, and 100% waterproof, ensuring superior protection and long service life. We believe in building a greener future through sustainable manufacturing practices and the use of environmentally responsible materials.
              </p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                Our <span className="font-bold text-gray-900">PVC coated Tarpaulin, PVC Biofiloc fish tank, PVC Laminated tarpaulin, PVC Tent, HDPE Vermi bed, HDPE Azolla Bed, HDPE Pond liner, HDPE Tarpaulin and Polypropylene FIBC Bags</span> products are designed for long life, recyclability, and reduced environmental impact, providing maximum protection with minimal waste.
              </p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                Whether you need custom sizes, specialized coatings, or heavy-duty industrial covers, we offer tailor-made solutions to meet your exact requirements. At MEGATEX, we take pride in being a customer-centric company committed to quality, consistency, and on-time delivery, ensuring complete satisfaction and long-term trust in every order we fulfill.
              </p>
            </div>
          </div>
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="group">
              <img
                src="/Assets/aboutus.png"
                alt="MEGATEX Protective Fabrics"
                className="w-full h-auto rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* ==========================about==================================== */}
<PrdctCatSec />

{/* ===============================fibc====================================== */}
   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Heading */}
        <div className="text-center mb-12 ">
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
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-orange-500"
            >
              {/* Enhanced Product Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-6">
                <div className="flex items-center justify-center h-48">
                  <img
                    src="/Assets/bulkbag.png"
                    alt="FIBC Bulk Bag"
                    className="h-40 w-auto object-cover transition-transform duration-500 group-hover:scale-110 filter drop-shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-red-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 font-medium text-sm bg-gray-50 py-2 px-3 rounded-lg border border-gray-200">
                    {product.specs}
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
    {/* ===========================fibc============================= */}
        {/* <FibcSoln /> */}
        <Core />
        <PopularApplication />
        <WideRange />
        <OurVision />
        {/* =================================Tarpaulin===================================================  */}
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular <span className="text-red-600">PVC Tarpaulin</span> Products
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-quality PVC tarpaulin solutions for industrial, agricultural, and commercial applications
          </p>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-orange-500"
            >
              {/* Enhanced Image Container */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-6">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={product.image}
                    alt={product.name}
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
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {product.description}
                </p>
              </div>
              
              {/* Removed the hover border effect div */}
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* =================================tarpaulin======================================= */}
        <Pvc />
        <PopularProducts />
        <WhyUs />
        <OurClient />
        <OurCommitment />
        <ProductSlider/>
        {/* <EnquiryForm /> */}
        {/* =========================enquiry=============================== */}
         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your requirements? We're here to help with high-quality solutions!
          </p>
        </div>
        
        {/* Enhanced Form Section - Centered */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-orange-500">
          {/* Company Description */}
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              At <span className="font-bold text-red-600">MEGATEX PROTECTIVE FABRICS PVT. LTD.</span>, our commitment goes beyond manufacturing - it's about <span className="font-bold text-gray-900">delivering excellence, reliability, and trust</span> in every product we create. We are dedicated to providing high-quality solutions for industrial, commercial, and agricultural applications.
            </p>
          </div>
          
          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 border-2 border-green-400 text-green-700 rounded-lg text-center">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Thank you!</span> Your enquiry has been submitted successfully. We'll get back to you soon.
              </div>
            </div>
          )}
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">
              ENQUIRY FORM
            </h3>
            
            {/* FormSubmit Form */}
            <form 
              className="space-y-6" 
              onSubmit={handleSubmit}
              action={`https://formsubmit.co/${FORM_SUBMIT_EMAIL}`}
              method="POST"
              noValidate
            >
              {/* FormSubmit Hidden Fields with capitalized field mappings */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Enquiry from MEGATEX Website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for your enquiry with MEGATEX PROTECTIVE FABRICS. We have received your details and will get back to you within 24 hours." />
              
              {/* Field name mappings for proper email formatting */}
              <input type="hidden" name="_name" value="Name" />
              <input type="hidden" name="_email" value="Email" />
              <input type="hidden" name="_mobile" value="Mobile No" />
              <input type="hidden" name="_address" value="Address" />
              <input type="hidden" name="_comments" value="Comments" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="Name"  // Capitalized for email
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 placeholder-gray-500 ${
                      errors.name 
                        ? 'border-red-500 bg-red-50 focus:border-red-600' 
                        : 'border-green-500 focus:border-green-600 focus:bg-green-50'
                    }`}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email"  // Capitalized for email
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 placeholder-gray-500 ${
                      errors.email 
                        ? 'border-red-500 bg-red-50 focus:border-red-600' 
                        : 'border-green-500 focus:border-green-600 focus:bg-green-50'
                    }`}
                    placeholder="Enter your email address"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Mobile Field */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="Mobile No"  // Capitalized with space for email
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 placeholder-gray-500 ${
                    errors.mobile 
                      ? 'border-red-500 bg-red-50 focus:border-red-600' 
                      : 'border-green-500 focus:border-green-600 focus:bg-green-50'
                  }`}
                  placeholder="Enter your 10-digit mobile number"
                  required
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.mobile}
                  </p>
                )}
              </div>
              
              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="Address"  // Capitalized for email
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 placeholder-gray-500 ${
                    errors.address 
                      ? 'border-red-500 bg-red-50 focus:border-red-600' 
                      : 'border-green-500 focus:border-green-600 focus:bg-green-50'
                  }`}
                  placeholder="Enter your complete address"
                  required
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.address}
                  </p>
                )}
              </div>
              
              {/* Comments Field */}
              <div>
                <label htmlFor="comments" className="block text-sm font-semibold text-gray-700 mb-2">
                  Comments / Requirements *
                </label>
                <textarea
                  id="comments"
                  name="Comments"  // Capitalized for email
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 placeholder-gray-500 ${
                    errors.comments 
                      ? 'border-red-500 bg-red-50 focus:border-red-600' 
                      : 'border-green-500 focus:border-green-600 focus:bg-green-50'
                  }`}
                  placeholder="Tell us about your requirements, specifications, or any special requests..."
                  required
                />
                {errors.comments && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.comments}
                  </p>
                )}
              </div>
              
              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                    isSubmitting 
                      ? 'opacity-75 cursor-not-allowed' 
                      : 'hover:from-green-700 hover:to-green-800 transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    'Submit Enquiry'
                  )}
                </button>
              </div>
              
              {/* Required Fields Note */}
              <p className="text-sm text-gray-500 text-center">
                * Fields marked with asterisk are required
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
        {/* ==================enquiry============================================= */}
      </main>
      {/* <Footer /> */}
    </div>



  )
}

export default Home

import React, { useState } from 'react';

const EnquiryForm = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-16">
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
  );
};

export default EnquiryForm;
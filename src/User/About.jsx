import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Image Section - Full Screen */}
      <div className="w-full relative mt-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
      <img
        src="/Assets/about first.png"
        alt="MEGATEX Factory Overview"
        className="w-full h-[60vh] min-h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center">
        <div className="text-white pl-8 md:pl-12 lg:pl-16 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            About <span className="text-red-500">MEGATEX</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-6">
            Leading Protective Fabrics Manufacturer Since 2009
          </p>
          <div className="w-20 h-1 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Company History Section */}
     <div className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Image Section */}
      <div className="flex items-center justify-center order-2 lg:order-1">
        <div className="group w-full max-w-lg lg:max-w-none">
          <img
            src="/Assets/aboutimg.jpg"
            alt="MEGATEX Company History"
            className="w-full h-auto rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
      
      {/* Text Content Section */}
      <div className="flex flex-col justify-center h-full order-1 lg:order-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
  Welcome to<br />
  <span className="text-red-600">MEGATEX PROTECTIVE FABRICS PVT. LTD.</span>
</h1>
        
        <div className="space-y-4 md:space-y-6">
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            <span className="font-bold text-red-600">Megatex Protective Fabrics Pvt. Ltd.</span> (formerly known as Megatex Tarpaulin Industries) was established in 2009 with a strong vision to deliver high-quality waterproofing and protective fabric solutions. With a rich legacy spanning over three decades, the company has grown into one of India's most trusted names in PVC Coated Tarpaulins, HDPE Laminated Tarpaulins, HDPE Pond Liners, FIBC Bulk Bags, and Industrial Protective Covers.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            The company's foundation was laid by <span className="font-bold text-red-600">Mr. Padmakar Todkar</span>, whose foresight, innovation, and dedication to excellence transformed a small local manufacturing unit into a nationally recognized brand.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Our journey began with a simple yet powerful observation — the need for reliable waterproofing and protective solutions during the unpredictable monsoons of Pune, Maharashtra. Identifying this gap, Mr. Todkar turned the challenge into an opportunity, founding MEGATEX Tarpaulins, which eventually evolved into today's Megatex Protective Fabrics Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Three Cards Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-red-100">
             
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Evolution</h3>
              <p className="text-gray-600 leading-relaxed">
                Over the years, Megatex has combined technical expertise, innovation, and customer-centric values to achieve excellence in the manufacturing of durable, weather-resistant, and eco-friendly protective fabrics. From humble beginnings to modern industrial production, our growth reflects our continuous commitment to quality and performance.
</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-red-100">
             
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Presence
</h3>
              <p className="text-gray-600 leading-relaxed">
               Today, Megatex stands as a pioneer and leading manufacturer catering to diverse industries — including agriculture, aquaculture, logistics, construction, packaging, and infrastructure. Our state-of-the-art manufacturing unit, advanced R&D setup, and experienced workforce ensure every product meets global quality standards.

              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-red-100">
             
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment
</h3>
              <p className="text-gray-600 leading-relaxed">
                At Megatex, we believe in building lasting relationships based on trust, integrity, and innovation. We continue to expand our footprint across India and global markets, staying true to our mission 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nature of Business & Operations */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nature of Business & Operations
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900">Core business:</span> Manufacturer, Supplier, Trader & Exporter of tarpaulin and related protective fabric products – including PVC coated tarpaulin, HDPE pond-liners, fish-farming tanks, vermi-compost beds, grow bags, FIBC jumbo bags, etc.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900">Industry segment:</span> Textiles / coated fabrics / technical fabrics – NIC Code 171 (Spinning, weaving and finishing of textiles) for the company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Company Snapshot */}
<div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Company Snapshot
      </h2>
      <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
    </div>
    
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-red-50 hover:bg-red-100 transition-colors duration-300">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">🏢</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Legal Name</h4>
              <p className="text-gray-700 mt-1">Megatex Protective Fabrics Private Limited.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">📄</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Corporate Identification Number</h4>
              <p className="text-gray-700 mt-1">U17100PN2022PTC217139</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-300">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">📅</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Date of Incorporation</h4>
              <p className="text-gray-700 mt-1">20 December 2022</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">📍</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Registered Address</h4>
              <p className="text-gray-700 mt-1">Ground Floor, G.No-445, Surwad, Indapur Rural, Surwad Road, Indapur – 413106, Pune, Maharashtra, India.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors duration-300">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">⚖️</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Legal Status</h4>
              <p className="text-gray-700 mt-1">Private Company, Limited by Shares</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Key Facts & Figures */}
<div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Key Facts & Figures
      </h2>
      <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { icon: "🏢", title: "Ownership Type", value: "Private Limited Company", bg: "bg-blue-50", iconBg: "bg-blue-600" },
        { icon: "🏭", title: "Production Units", value: "1 Unit", bg: "bg-green-50", iconBg: "bg-green-600" },
        { icon: "📊", title: "Infrastructure", value: "55,000 sq. ft.", bg: "bg-purple-50", iconBg: "bg-purple-600" },
        { icon: "⚖️", title: "Monthly Capacity", value: "~500 tonnes", bg: "bg-orange-50", iconBg: "bg-orange-600" },
        { icon: "💰", title: "Annual Turnover", value: "INR 20-25 Cr", bg: "bg-red-50", iconBg: "bg-red-600" },
        { icon: "💳", title: "Authorized Capital", value: "₹50,00,000", bg: "bg-indigo-50", iconBg: "bg-indigo-600" },
        { icon: "💵", title: "Paid-up Capital", value: "₹30,00,000", bg: "bg-teal-50", iconBg: "bg-teal-600" },
        { icon: "📋", title: "GST Number", value: "27AAQCM4696P1Z9", bg: "bg-amber-50", iconBg: "bg-amber-600" }
      ].map((item, index) => (
        <div key={index} className={`${item.bg} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105`}>
          <div className={`w-12 h-12 ${item.iconBg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-white text-lg">{item.icon}</span>
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
          <p className="text-gray-700 font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Bank Partners Section */}
<div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Banking Partners
      </h2>
      <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Trusted financial partnerships that support our growth and business operations
      </p>
    </div>
    
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center p-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-100 group">
          <img
            src="/Assets/hdfc.png"
            alt="HDFC Bank"
            className="h-20 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="font-bold text-gray-900 mt-4 text-lg">HDFC Bank</h3>
          <p className="text-gray-600 text-sm mt-2">Premium Banking Partner</p>
        </div>
        
        <div className="text-center p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 border border-purple-100 group">
          <img
            src="/Assets/icici.png"
            alt="ICICI Bank"
            className="h-20 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="font-bold text-gray-900 mt-4 text-lg">ICICI Bank</h3>
          <p className="text-gray-600 text-sm mt-2">Corporate Banking Partner</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Three Columns Section - Quality, Values, Strengths */}
<div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Core Competencies
      </h2>
      <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Quality, Technology & Market Presence */}
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300 group">
        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl">⭐</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality & Technology</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-gray-700"><span className="font-bold text-gray-900">Quality certification:</span> ISO 9001:2008 certified</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-gray-700"><span className="font-bold text-gray-900">R&D & infrastructure:</span> Ultra‐modern R&D wing and state‐of-the-art facility</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-gray-700"><span className="font-bold text-gray-900">Export markets:</span> 25+ countries worldwide</p>
          </div>
        </div>
      </div>

      {/* Strategic Focus & Values */}
      <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition-all duration-300 group">
        <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl">🎯</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Values & Mission</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-gray-700"><span className="font-bold text-gray-900">Mission:</span> Build sustainable organization with customer focus</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-gray-700"><span className="font-bold text-gray-900">Core values:</span> Team-work, responsibility, integrity, passion</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
            <p className="text-gray-700"><span className="font-bold text-gray-900">Sustainability:</span> Eco-friendly products & energy-saving practices</p>
          </div>
        </div>
      </div>

      {/* Strengths & Considerations */}
      <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl p-8 border border-purple-100 hover:shadow-2xl transition-all duration-300 group">
        <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl">💪</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Strengths Analysis</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3 text-lg">Strengths:</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Niche specialization in coated fabrics</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Manufacturing plus R&D positioning</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Strong export orientation</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3 text-lg">Considerations:</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Relatively new corporate entity</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Modest capitalization levels</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    {/* Three Columns Section */}
<div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Strategic Pillars
      </h2>
      <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Building excellence through quality, values, and strategic strengths
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Quality, Technology & Market Presence */}
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300 group hover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl">⭐</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quality, Technology & Market Presence</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-3 rounded-lg bg-white hover:bg-blue-50 transition-colors duration-200">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 text-sm font-bold">✓</span>
            </div>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">Quality certification:</span> ISO 9001:2008 certified
            </p>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg bg-white hover:bg-blue-50 transition-colors duration-200">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 text-sm font-bold">✓</span>
            </div>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">R&D & infrastructure:</span> "Ultra‐modern" R&D wing and state‐of-the-art manufacturing facility
            </p>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg bg-white hover:bg-blue-50 transition-colors duration-200">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 text-sm font-bold">✓</span>
            </div>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">Export markets:</span> Presence in 25+ countries worldwide
            </p>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg bg-white hover:bg-blue-50 transition-colors duration-200">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 text-sm font-bold">✓</span>
            </div>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">Product features:</span> Waterproof, weather-resistant, puncture-resistant, UV-stable coated fabrics
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Focus & Values */}
      <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition-all duration-300 group hover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl">🎯</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Strategic Focus & Values</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-3 rounded-lg bg-white hover:bg-green-50 transition-colors duration-200">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-600 text-sm font-bold">★</span>
            </div>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">Mission:</span> Build and sustain high-quality organisation with customer as primary focus
            </p>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg bg-white hover:bg-green-50 transition-colors duration-200">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-600 text-sm font-bold">★</span>
            </div>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">Core values:</span> Team-work, responsibility, integrity, passion
            </p>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg bg-white hover:bg-green-50 transition-colors duration-200">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-600 text-sm font-bold">★</span>
            </div>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">Sustainability:</span> Eco-friendly product series and energy-saving practices
            </p>
          </div>
        </div>
      </div>

      {/* Strengths & Considerations */}
      <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl p-8 border border-purple-100 hover:shadow-2xl transition-all duration-300 group hover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl">💪</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Strengths & Considerations</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              Strengths
            </h4>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                <span>Niche specialization in high-performance coated fabrics for diverse applications</span>
              </li>
              <li className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                <span>Combination of manufacturing plus R&D positioning</span>
              </li>
              <li className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                <span>Export orientation gives potential for growth in global markets</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Considerations
            </h4>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                <span className="text-blue-500 font-bold mt-0.5 flex-shrink-0">•</span>
                <span>Registered relatively recently (Dec 2022) with legacy of 2 decades experience</span>
              </li>
              <li className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                <span className="text-blue-500 font-bold mt-0.5 flex-shrink-0">•</span>
                <span>Modest turnover and capitalisation levels for large partnerships</span>
              </li>
              <li className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                <span className="text-blue-500 font-bold mt-0.5 flex-shrink-0">•</span>
                <span>Verification needed for certifications and production claims</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Final Image Section */}
<div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Manufacturing Excellence
      </h2>
      <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        State-of-the-art facility delivering quality protective fabric solutions
      </p>
    </div>
    
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-2xl group-hover:from-red-600/30 group-hover:to-blue-600/30 transition-all duration-500 blur-xl group-hover:blur-2xl -z-10"></div>
      <img
        src="/Assets/about last.png"
        alt="MEGATEX Manufacturing Facility"
        className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-500 border-8 border-white"
      />
      <div className="absolute bottom-6 left-6 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm group-hover:bg-black/80 transition-colors duration-300">
        <p className="text-sm font-semibold">MEGATEX Production Facility | Pune, Maharashtra</p>
      </div>
    </div>
  </div>
</div>

     
    </div>
  );
}

export default About;
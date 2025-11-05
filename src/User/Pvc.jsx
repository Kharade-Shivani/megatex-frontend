import React from 'react';

function Pvc() {
    const features = [
        { image: "/Assets/waterproof.jpg", text: "100% Waterproof" },
        { image: "/Assets/reach.jpg", text: "Reach" },
        { image: "/Assets/selfclean.jpg", text: "Self Cleaning" },
        { image: "/Assets/superior.jpg", text: "Superior UV Protection" },
        { image: "/Assets/dimensional.jpg", text: "Dimensional Stability" },
        { image: "/Assets/flame.jpg", text: "Flame-Retardant" },
        { image: "/Assets/cold-hot.png", text: "Cold-Hot -35°-70°C" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Enhanced What is PVC Section */}
                <div className="mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            What is <span className="text-red-600">PVC Coated Tarpaulin</span>?
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 mb-6 rounded-full"></div>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            PVC coated tarpaulin is fabricated from 100% polyester scrim coated with high-quality PVC paste on both sides to strengthen the binding. It is a fabric that is resistant to water, dirt, sunlight, and chemicals, and also adds strength and durability to it. The PVC coated tarp is sturdy and long-lasting for all kinds of applications for its resistance to fray, rip and tear.
                        </p>
                    </div>
                </div>

                {/* Enhanced Features Section */}
                <div className="w-full">
                    {/* Enhanced Header */}
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Features of <span className="text-red-600">PVC Coated Tarpaulin</span>
                        </h3>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
                    </div>

                    {/* Enhanced Features Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-2 border-orange-500 text-center"
                            >
                                {/* Feature Image Container */}
                                <div className="relative mb-4">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center p-3 group-hover:bg-red-50 transition-colors duration-300">
                                        <img
                                            src={feature.image}
                                            alt={feature.text}
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 filter drop-shadow-lg"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        {/* Fallback if image doesn't load */}
                                        <div className="hidden items-center justify-center w-16 h-16 bg-gray-200 rounded-lg">
                                            <span className="text-gray-500 text-xs">Image</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature Text */}
                                <span className="text-base font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300 text-center leading-tight">
                                    {feature.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pvc;
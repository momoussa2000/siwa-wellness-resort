'use client';

import { motion } from 'framer-motion';

export default function ConceptDesign() {
  const designElements = [
    {
      title: "Sustainable Architecture",
      description: "Traditional Siwan building techniques using kershef (salt rock and mud) combined with modern eco-friendly materials",
      features: [
        "Natural temperature regulation",
        "Solar power integration",
        "Rainwater harvesting",
        "Local material usage"
      ]
    },
    {
      title: "Wellness Facilities",
      description: "State-of-the-art wellness facilities blending traditional and modern practices",
      features: [
        "Traditional hammam",
        "Yoga and meditation spaces",
        "Massage treatment rooms",
        "Herbal medicine garden"
      ]
    },
    {
      title: "Accommodation",
      description: "Luxurious eco-lodges inspired by traditional Siwan architecture",
      features: [
        "Private terraces",
        "Natural ventilation",
        "Local artisan furnishings",
        "Desert views"
      ]
    },
    {
      title: "Sustainable Systems",
      description: "Integrated systems for environmental sustainability",
      features: [
        "Hydroponic garden",
        "Waste water recycling",
        "Composting system",
        "Energy monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-blue-900"
        >
          Concept & Design
        </motion.h1>

        {/* Overview Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Design Philosophy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our design approach seamlessly integrates traditional Siwan architecture with modern sustainable practices, 
            creating a wellness sanctuary that honors local heritage while providing world-class amenities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The resort's design emphasizes the connection between indoor and outdoor spaces, maximizing natural light 
            and ventilation while providing stunning views of the surrounding desert landscape.
          </p>
        </motion.section>

        {/* Design Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designElements.map((element, index) => (
            <motion.div
              key={element.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-800">{element.title}</h3>
              <p className="text-gray-700 mb-4">{element.description}</p>
              <ul className="space-y-2">
                {element.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-600">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Sustainability Focus */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm mt-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Sustainability Focus</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every aspect of the resort's design has been carefully considered to minimize environmental impact 
            while maximizing comfort and wellness benefits for our guests.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2 text-blue-700">Energy Efficiency</h3>
              <p className="text-gray-600">90% renewable energy usage through solar power integration</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2 text-blue-700">Water Conservation</h3>
              <p className="text-gray-600">80% water recycling through advanced filtration systems</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2 text-blue-700">Waste Reduction</h3>
              <p className="text-gray-600">Zero-waste goal through composting and recycling programs</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 
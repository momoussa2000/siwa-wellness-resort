'use client';

import { motion } from 'framer-motion';

export default function ServiceModel() {
  const serviceCategories = [
    {
      title: "Accommodation",
      description: "Luxury eco-lodges with modern amenities designed for groups",
      services: [
        "Deluxe eco-suites",
        "Private pool villas",
        "Garden view rooms",
        "Desert view suites",
        "Family units"
      ],
      pricing: "15,000-40,000 EGP per night"
    },
    {
      title: "Dining & Culinary",
      description: "Farm-to-table dining experiences tailored for retreat groups",
      services: [
        "Organic restaurant with group seating",
        "Traditional Siwan cuisine buffets",
        "Group cooking classes",
        "Private dining options",
        "Herbal tea lounge & refreshment stations"
      ],
      pricing: "250-1,500 EGP per person"
    },
    {
      title: "Activities & Experiences",
      description: "Curated cultural and adventure experiences for groups",
      services: [
        "Group desert safaris with Bedouin guides",
        "Guided cultural tours to local sites",
        "Mr. Abdullah's Telescope & Stargazing Night",
        "Natural Hot Spring Soak",
        "Salt Lake Plunge & Floating",
        "Loweesa Tea Ritual by bonfire/hot spring",
        "Local craft workshops (e.g., pottery, weaving)",
        "Community engagement visits"
      ],
      pricing: "750-3,000 EGP per experience"
    }
  ];

  const revenueStreams = [
    {
      source: "Accommodation",
      percentage: "60%",
      details: "Primary revenue from full-resort group bookings"
    },
    {
      source: "Food & Beverage",
      percentage: "20%",
      details: "Group dining packages, restaurant, cooking classes"
    },
    {
      source: "Activities",
      percentage: "13%",
      details: "Guided group experiences and cultural tours"
    },
    {
      source: "Retail",
      percentage: "7%",
      details: "Gift shop sales (local crafts, branded items)"
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
          Service Model & Revenue
        </motion.h1>

        {/* Service Model Overview */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Service Model Focus: Group Retreat Venue</h2>
          <p className="text-gray-700 leading-relaxed">
            Our service model is tailored to provide a seamless, all-inclusive venue for <span className="font-semibold">wellness retreat leaders and influencers</span>. We offer luxury accommodation, farm-to-table dining, and curated cultural experiences, allowing facilitators to focus solely on their program content. <span className="font-semibold">We do not offer standalone wellness services</span>; the yoga shalas and spa facilities are amenities for booked retreat groups to utilize with their own instructors/practitioners.
          </p>
        </motion.section>

        {/* Service Categories */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Service Categories Offered to Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-800">{category.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{category.description}</p>
                <ul className="space-y-2 mb-4 text-sm">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start text-gray-600">
                      <span className="mr-2">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-medium text-blue-700 mt-auto pt-4 border-t border-gray-200">Pricing: {category.pricing}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Revenue Streams */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Projected Revenue Streams</h2>
          <div className="space-y-6 mb-6">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={stream.source}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center"
              >
                <div className="w-1/3">
                  <h3 className="text-xl font-semibold text-blue-800">{stream.source}</h3>
                </div>
                <div className="w-1/6 text-center">
                  <p className="text-2xl font-bold text-green-600">{stream.percentage}</p>
                </div>
                <div className="w-1/2 pl-4">
                  <p className="text-gray-700 text-sm">{stream.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Revenue Bar Chart */}
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              {revenueStreams.map((stream, index) => (
                <div key={index} className="text-center" style={{ width: `${stream.percentage}` }}>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    {stream.source} {stream.percentage}
                  </span>
                </div>
              ))}
            </div>
            <div className="overflow-hidden h-3 text-xs flex rounded bg-blue-200">
              {revenueStreams.map((stream, index) => (
                <div key={index} style={{ width: `${stream.percentage}` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-blue-700"></div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Additional Revenue Opportunities (Refined) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm mt-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Potential Add-ons & Upsells</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-700">Premium Experiences</h3>
              <p className="text-gray-700">Exclusive desert dining, private cultural performances, specialized workshops.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-700">Extended Stays</h3>
              <p className="text-gray-700">Options for retreat leaders or participants to extend their stay pre/post retreat.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-blue-700">Retail Partnerships</h3>
              <p className="text-gray-700">Collaborations with wellness brands or local artisans for exclusive products.</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 
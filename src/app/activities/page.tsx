'use client';

import { motion } from 'framer-motion';

export default function Activities() {
  const activities = [
    {
      title: "Desert Safari Adventure",
      description: "Explore the stunning Great Sand Sea with experienced Bedouin guides. Experience dune bashing, sandboarding, and a traditional Bedouin tea in the heart of the desert.",
      icon: "🏜️"
    },
    {
      title: "Mr. Abdullah's Stargazing Night",
      description: "Join local expert Mr. Abdullah for an unforgettable night under Siwa's pristine desert sky. Use his telescope to view planets, constellations, and galaxies far away.",
      icon: "🔭"
    },
    {
      title: "Therapeutic Hot Spring Soak",
      description: "Relax and rejuvenate in Siwa's natural mineral-rich hot springs, known for their therapeutic properties. A perfect way to unwind after a day of exploration.",
      icon: "♨️"
    },
    {
      title: "Salt Lake Plunge & Floating",
      description: "Experience the unique sensation of effortlessly floating in Siwa's highly saline salt lakes. Known for their healing benefits for skin and respiratory conditions.",
      icon: "🧂"
    },
    {
      title: "Loweesa Tea Ritual",
      description: "Participate in a traditional Siwan tea ceremony featuring local 'Loweesa' herbal tea. Enjoy the ritual around a bonfire or by a serene hot spring.",
      icon: "☕"
    },
    {
      title: "Local Craft Workshops",
      description: "Engage with local artisans and learn traditional Siwan crafts such as pottery, weaving, or jewelry making. Take home a unique handmade souvenir.",
      icon: "🏺"
    },
    {
      title: "Community Engagement Visits",
      description: "Connect with the local Siwan community through organized visits to villages, schools, or community projects, fostering cultural understanding and exchange.",
      icon: "🤝"
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
          Experiences & Activities
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4 text-center">{activity.icon}</div>
              <h2 className="text-xl font-semibold mb-3 text-center text-blue-800">{activity.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 
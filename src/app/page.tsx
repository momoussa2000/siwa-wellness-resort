'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  // State for the slideshow
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slideshow images
  const slideshowImages = [
    { src: "/images/salt-lake.jpeg", alt: "Salt Lake in Siwa" },
    { src: "/images/desert-sunset.jpeg", alt: "Desert Sunset" },
    { src: "/images/ancient-ruins.jpeg", alt: "Ancient Ruins" },
    { src: "/images/lake.jpeg", alt: "Siwa Lake" },
    { src: "/images/desert-dunes.jpeg", alt: "Desert Dunes" }
  ];
  
  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/a-wide-angle-landscape-render-of-a-groun_RKGBscJ9T5K3M-iHzFEZmw_vvC4yO75TfulKwWV_08VPQ.png"
          alt="Siwa Wellness Resort Layout"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6"
          >
            Siwa Wellness Resort
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-center mb-8"
          >
            Egypt's Premier Destination for Transformative Wellness Travel
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px]"
            >
              <div className="relative h-full w-full rounded-lg overflow-hidden">
                {slideshowImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Siwa's Magic</h2>
              <p className="text-gray-800 mb-6">
                Welcome to Siwa Wellness Resort, a mid-range luxury retreat nestled in Egypt's enchanting Siwa Oasis. 
                Our eco-friendly resort features 15-20 authentic mud-brick huts, offering a perfect blend of traditional 
                architecture and modern comfort. Experience transformative wellness through our yoga retreats, spa experiences, 
                and curated cultural activities.
              </p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-all">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience Wellness</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Eco-Friendly Resort",
                description: "Sustainable mud-brick huts with modern amenities"
              },
              {
                title: "Wellness Activities",
                description: "Yoga, meditation, and spa treatments by Hathor Natural Cosmetics"
              },
              {
                title: "Cultural Experiences",
                description: "Desert safaris, stargazing, and traditional tea ceremonies"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-800">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Siwa</h2>
          <p className="text-gray-800 mb-8">
            Ready to experience the magic of Siwa? Book your transformative wellness retreat today.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-all">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

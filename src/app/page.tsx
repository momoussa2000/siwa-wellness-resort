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
    { src: "/images/WhatsApp Image Apr 6 2025 (20).jpeg", alt: "Siwa Desert View" },
    { src: "/images/WhatsApp Image Apr 6 2025 (21).jpeg", alt: "Siwa Oasis" },
    { src: "/images/WhatsApp Image Apr 6 2025 (22).jpeg", alt: "Siwa Landscape" },
    { src: "/images/WhatsApp Image Apr 6 2025 (23).jpeg", alt: "Siwa Natural Beauty" },
    { src: "/images/WhatsApp Image Apr 6 2025 (24).jpeg", alt: "Siwa Desert Experience" },
    { src: "/images/WhatsApp Image Apr 6 2025 (25).jpeg", alt: "Siwa Scenic View" },
    { src: "/images/WhatsApp Image Apr 6 2025 (26).jpeg", alt: "Siwa Natural Wonder" },
    { src: "/images/WhatsApp Image Apr 6 2025 (27).jpeg", alt: "Siwa Desert Charm" },
    { src: "/images/WhatsApp Image Apr 6 2025 (28).jpeg", alt: "Siwa Oasis Beauty" }
  ];
  
  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [slideshowImages.length]);
  
  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
            Your Oasis of Peace and Wellness
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
              {/* Slideshow */}
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
                
                {/* Navigation arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all"
                  aria-label="Previous slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all"
                  aria-label="Next slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Slide indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {slideshowImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? "bg-white scale-125" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Siwa's Magic</h2>
              <p className="text-gray-800 mb-6">
                Nestled in the heart of Egypt's Western Desert, Siwa Wellness Resort offers a unique blend of ancient wisdom and modern luxury. Our resort is surrounded by the stunning natural beauty of salt lakes, hot springs, and the majestic Great Sand Sea.
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
                title: "Luxury Spa",
                description: "Indulge in our world-class spa treatments and therapies"
              },
              {
                title: "Meditation Gardens",
                description: "Find peace in our serene meditation spaces"
              },
              {
                title: "Wellness Programs",
                description: "Customized wellness programs for your needs"
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

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/images/Open Air Yoga Shala.png", alt: "Open Air Yoga Shala" },
              { src: "/images/Spacious Double Room.png", alt: "Spacious Double Room" },
              { src: "/images/Desert Inspired Restaurant Photo.png", alt: "Desert Inspired Restaurant" }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-800 mb-8">
            Ready to experience the magic of Siwa? Get in touch with us to plan your perfect wellness retreat.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-all">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

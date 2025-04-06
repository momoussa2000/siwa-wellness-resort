'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function FacilityLayout() {
  // Group images by category
  const imageCategories = [
    {
      name: "Overview",
      images: [
        {
          name: "Wide Angle Landscape",
          path: "/images/a-wide-angle-landscape-render-of-a-groun_RKGBscJ9T5K3M-iHzFEZmw_vvC4yO75TfulKwWV_08VPQ.png",
          description: "Overall view of the resort layout"
        }
      ]
    },
    {
      name: "Accommodations",
      images: [
        {
          name: "Spacious Double Room",
          path: "/images/Spacious Double Room.png",
          description: "Spacious double room accommodation"
        },
        {
          name: "Simple Single Room",
          path: "/images/Simple Single Room with Curved Adobe.png",
          description: "Simple single room with curved adobe walls"
        },
        {
          name: "Single Room View",
          path: "/images/a-simple-single-room-with-curved-adobe-w_CbWyTcJVTbSROzpS9jMXUA_dh_HaxjpTaSCLIhDGgs-YQ.png",
          description: "Another view of the simple single room"
        },
        {
          name: "Outdoor Room Facade Inspo",
          path: "/images/WhatsApp Image Apr 6 2025 (15).jpeg",
          description: "Luxurious king suite accommodation"
        },
        {
          name: "En-Suite Bathroom",
          path: "/images/a-serene-en-suite-bathroom-in-a-desert-e_4CweOp7dRCyjLGvwR9grRQ_73CjQHQTRoKDYDpDK6VgJQ.png",
          description: "Luxurious en-suite bathroom in guest rooms"
        }
      ]
    },
    {
      name: "Staff Facilities",
      images: [
        {
          name: "Staff Housing",
          path: "/images/a-photograph-of-a-functional-yet-minimal_oh_U16zkRxWcaT7e5wYAkw_nEarO2J4QIijGEXh7OvnLA.png",
          description: "Functional yet minimalist kitchen design"
        },
        {
          name: "Staff Bathroom",
          path: "/images/Shared Staff Bathroom Ideogram.png",
          description: "Shared staff bathroom facilities"
        }
      ]
    },
    {
      name: "Wellness Areas",
      images: [
        {
          name: "Tranquil Desert Pool",
          path: "/images/Tranquil Desert Pool.png",
          description: "Tranquil desert pool setting"
        },
        {
          name: "Tranquil Desert Pool 2",
          path: "/images/WhatsApp Image Apr 6 2025 (13).jpeg",
          description: "Another view of the tranquil desert pool"
        },
        {
          name: "Open Air Yoga Shala",
          path: "/images/Open Air Yoga Shala.png",
          description: "Open air yoga shala for wellness activities"
        },
        {
          name: "Yoga Shala View",
          path: "/images/a-photograph-of-an-open-air-yoga-shala-n_mYIY3eA6TICjw4_uH5zDAw_LSCZzbTJTmi-IS_ahZoF3Q.png",
          description: "Another view of the open air yoga shala"
        }
      ]
    },
    {
      name: "Hydroponic Garden",
      images: [
        {
          name: "Hydroponic Towers",
          path: "/images/hydro2.png",
          description: "Vertical hydroponic towers for growing fresh produce"
        },
        {
          name: "Harvesting Experience",
          path: "/images/hydro5.png",
          description: "Guests can participate in harvesting fresh produce"
        }
      ]
    },
    {
      name: "Dining",
      images: [
        {
          name: "Desert Inspired Restaurant",
          path: "/images/a-desert-inspired-restaurant-in-siwa-wit_4mSxKmrhSiG77PoPXYE3Fg_l_pk0unpSiOAD2GpB3rbkw.png",
          description: "Desert inspired restaurant in Siwa"
        },
        {
          name: "Restaurant Photo",
          path: "/images/Desert Inspired Restaurant Photo.png",
          description: "Another view of the desert inspired restaurant"
        }
      ]
    },
    {
      name: "Common Areas",
      images: [
        {
          name: "Reception Area",
          path: "/images/a-minimalist-siwan-desert-reception-and-_X7Fv47XlRy-wFphw6xQ4nQ_vbeLxTVDS5C55kUD0wav-w.png",
          description: "Minimalist Siwan desert reception and lobby"
        },
        {
          name: "Outdoor Lounge Space",
          path: "/images/Inviting Outdoor Lounge Space.png",
          description: "Inviting outdoor lounge space for relaxation and socializing"
        },
        {
          name: "Outdoor Lounge Space 2",
          path: "/images/Inviting Outdoor Lounge Space (1).png",
          description: "Another view of the outdoor lounge area"
        },
        {
          name: "Outdoor Lounge Space 3",
          path: "/images/a-photograph-of-an-inviting-outdoor-loun_I9sx81FpRD-8VxKY41CGGA_FxPR2Z4mRwS_puo8sdG6_g.png",
          description: "Additional perspective of the outdoor lounge space"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Facility Layout</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-800 mb-8">
            Explore the layout and design of Siwa Wellness Resort through these detailed images of our facilities, rooms, and common areas.
          </p>
          
          {imageCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.images.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={image.path}
                        alt={image.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{image.name}</h3>
                      <p className="text-gray-800">{image.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Home,
  Users,
  PaintBucket,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export function ExpertRenovationSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Home,
      title: "Find inspiration",
      description:
        "Discover curated design concepts from award-winning interior designers. Our extensive gallery showcases the latest trends and timeless classics to inspire your perfect space.",
      color: "bg-blue-500",
    },
    {
      icon: Users,
      title: "Connect with experts",
      description:
        "Work with our network of certified architects and designers who specialize in transforming visions into reality. Each professional is vetted for excellence and innovation.",
      color: "bg-purple-500",
    },
    {
      icon: PaintBucket,
      title: "Execute flawless renovation",
      description:
        "Our project managers coordinate every aspect of your renovation, from material selection to final inspection, ensuring quality craftsmanship and timely completion.",
      color: "bg-amber-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-50 rounded-full opacity-60 blur-3xl"></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
                <span className="mr-2">🏡</span> Expert Renovation Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Transform your space with <br />
                expert renovation
              </h2>
            </motion.div>

            <motion.div className="space-y-6" variants={containerVariants}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`flex gap-6 p-6 rounded-xl transition-all duration-300 cursor-pointer
                    ${
                      activeFeature === index
                        ? "bg-white shadow-xl scale-[1.02]"
                        : "hover:bg-white/50 hover:shadow-md"
                    }
                  `}
                  onClick={() => setActiveFeature(index)}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`p-4 rounded-xl ${feature.color} text-white shadow-lg`}
                    >
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      {feature.title}
                      {activeFeature === index && (
                        <CheckCircle className="ml-2 h-4 w-4 text-green-500" />
                      )}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    <div
                      className={`mt-4 flex items-center text-sm font-medium ${
                        activeFeature === index
                          ? "text-blue-600"
                          : "text-gray-500"
                      } group`}
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-[220px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.03] group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <Image
                    src="/images/main-home-img-2.jpeg"
                    alt="Person planning renovation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20 text-white font-medium">
                    <span className="text-sm">Design Planning</span>
                  </div>
                </div>
                <div className="relative h-[220px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.03] group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <Image
                    src="/images/list-half-map-image-1-460x300.jpeg"
                    alt="Empty room ready for renovation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20 text-white font-medium">
                    <span className="text-sm">Space Transformation</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[456px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.03] group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <Image
                  src="/images/list-sidebar-img-2-460x300.jpeg"
                  alt="Team discussing renovation plans"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <span className="text-sm font-medium">
                    Expert Consultation
                  </span>
                </div>

                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                  Premium Service
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-8 border-blue-100 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-8 border-amber-100 -z-10"></div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 bg-white p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              500+
            </div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              98%
            </div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              50+
            </div>
            <div className="text-gray-600">Expert Designers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              10+
            </div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

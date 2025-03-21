"use client";

import type React from "react";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "Properties", href: "/properties" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
    ],
    propertyTypes: [
      { name: "Houses", href: "/properties/houses" },
      { name: "Apartments", href: "/properties/apartments" },
      { name: "Villas", href: "/properties/villas" },
      { name: "Commercial", href: "/properties/commercial" },
      { name: "Land", href: "/properties/land" },
    ],
    services: [
      { name: "Property Management", href: "/services/property-management" },
      { name: "Renovation", href: "/services/renovation" },
      { name: "Home Loans", href: "/services/home-loans" },
      { name: "Legal Assistance", href: "/services/legal" },
      { name: "Investment Advisory", href: "/services/investment" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                HomeEsta
              </h3>
              <p className="text-gray-400 mb-6">
                Your trusted partner in finding the perfect property with no
                commission fees. We connect buyers and sellers directly for a
                seamless experience.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6">
              <h4 className="text-lg font-semibold mb-4">
                Subscribe to our newsletter
              </h4>
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  {isSubscribed ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </Button>
              </form>
              {isSubscribed && (
                <p className="text-green-400 text-sm mt-2">
                  Thanks for subscribing!
                </p>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h4
              variants={itemVariants}
              className="text-lg font-semibold mb-4"
            >
              Quick Links
            </motion.h4>
            <motion.ul variants={containerVariants} className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-blue-500 transition-colors"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4
              variants={itemVariants}
              className="text-lg font-semibold mt-8 mb-4"
            >
              Services
            </motion.h4>
            <motion.ul variants={containerVariants} className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-blue-500 transition-colors"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h4
              variants={itemVariants}
              className="text-lg font-semibold mb-4"
            >
              Property Types
            </motion.h4>
            <motion.ul variants={containerVariants} className="space-y-3">
              {footerLinks.propertyTypes.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-blue-500 transition-colors"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={itemVariants}
              className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
            >
              <h4 className="text-lg font-semibold mb-2">Working Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h4
              variants={itemVariants}
              className="text-lg font-semibold mb-4"
            >
              Contact Us
            </motion.h4>
            <motion.address
              variants={containerVariants}
              className="text-gray-400 not-italic space-y-4"
            >
              <motion.div variants={itemVariants} className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span>
                  123 Real Estate Avenue
                  <br />
                  Property City, PC 12345
                  <br />
                  United States
                </span>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+11234567890"
                  className="hover:text-white transition-colors duration-300"
                >
                  +1 (123) 456-7890
                </a>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@homeesta.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  info@homeesta.com
                </a>
              </motion.div>
            </motion.address>

            <motion.div
              variants={itemVariants}
              className="mt-8 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-800/30"
            >
              <h4 className="text-lg font-semibold mb-2">Need Help?</h4>
              <p className="text-gray-400 mb-3">
                Have questions or need assistance with finding your perfect
                property?
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Contact Support
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} HomeEsta. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-white transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

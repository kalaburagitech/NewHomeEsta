"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function EnquiryBanner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);

      // Success
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[500px] md:min-h-[400px] overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110"
        style={{
          backgroundImage:
            "url('/images/property-gallery-img-2-new-460x300.jpeg')",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative h-full z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Text */}
          <motion.div
            className="text-white pl-4 md:pl-6 lg:pl-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="mr-1">✨</span> Premium Properties
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover a new
              <br />
              <span className="text-orange-400">way of living</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-md mb-8">
              Experience exceptional living spaces designed for modern
              lifestyles. Our premium properties combine luxury, comfort, and
              strategic locations for the perfect home.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                Premium Locations
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                Luxury Amenities
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                24/7 Support
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-md transform rotate-3"></div>

            <div className="relative bg-white/95 p-8 md:p-10 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-100">
              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your enquiry has been submitted successfully. Our team will
                    contact you shortly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-gray-300"
                  >
                    Submit another enquiry
                  </Button>
                </motion.div>
              ) : (
                <>
                  <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Fast Response
                  </div>

                  <h3 className="text-2xl font-bold mb-2">Make an enquiry</h3>
                  <p className="text-gray-600 mb-6">
                    Save your time and easily rent or sell your property with
                    the lowest commission on the real estate market.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your name*"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`bg-white/80 border-gray-200 focus:border-orange-500 h-12 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <Input
                        type="email"
                        placeholder="Your email*"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`bg-white/80 border-gray-200 focus:border-orange-500 h-12 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Input
                        type="tel"
                        placeholder="Your phone number*"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`bg-white/80 border-gray-200 focus:border-orange-500 h-12 ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Make an enquiry
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

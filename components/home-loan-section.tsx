"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calculator,
  ChevronRight,
  DollarSign,
  Percent,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HomeLoanSection() {
  const [activeTab, setActiveTab] = useState(0);

  const loanOptions = [
    {
      title: "Fixed Rate Mortgage",
      description:
        "Lock in your interest rate for the entire loan term, providing payment stability and protection from rising interest rates.",
      icon: DollarSign,
      features: [
        "Predictable monthly payments",
        "Protection from rate increases",
        "Ideal for long-term homeowners",
      ],
    },
    {
      title: "Adjustable Rate Mortgage",
      description:
        "Start with lower rates that may adjust over time, potentially saving money if you plan to move or refinance within a few years.",
      icon: Percent,
      features: [
        "Lower initial interest rates",
        "Potential for decreased payments",
        "Good for short-term homeowners",
      ],
    },
    {
      title: "FHA Loans",
      description:
        "Government-backed loans with more flexible qualification requirements, making homeownership more accessible for first-time buyers.",
      icon: Clock,
      features: [
        "Lower down payment options",
        "More lenient credit requirements",
        "Ideal for first-time homebuyers",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f0f8f8] to-[#e6f3f3] py-20 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-100 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>

            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl border-l-8 border-green-500 z-10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent z-10"></div>
              <Image
                src="/images/pine-forest-bung02-460x300.jpeg"
                alt="Person reviewing loan documents"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-white rounded-lg shadow-xl p-3 z-20 transform rotate-3 transition-transform duration-500 group-hover:rotate-0">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-sm">Loan Calculator</span>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 z-20">
                <div className="flex justify-between text-white">
                  <div className="text-center">
                    <div className="text-sm opacity-80">Starting at</div>
                    <div className="font-bold">3.5% APR</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm opacity-80">Down Payment</div>
                    <div className="font-bold">From 3.5%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm opacity-80">Pre-Approval</div>
                    <div className="font-bold">24 Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8 order-1 md:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                <span className="mr-1">💰</span> Financing Solutions
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
                Find the perfect home
                <br />
                loan for your needs
              </h2>

              <p className="text-gray-700 mt-6 text-lg">
                Navigate your homebuying journey with confidence. Our mortgage
                experts will help you explore competitive rates and flexible
                terms tailored to your financial situation.
              </p>
            </div>

            {/* Loan options tabs */}
            <div className="bg-white rounded-xl shadow-lg p-1">
              <div className="flex mb-6 border-b">
                {loanOptions.map((option, index) => (
                  <button
                    key={index}
                    className={`flex-1 py-4 px-2 text-sm font-medium transition-colors relative ${
                      activeTab === index
                        ? "text-green-700"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {option.title}
                    {activeTab === index && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                        layoutId="activeTab"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                    {/* <loanOptions [activeTab].icon className="h-5 w-5" /> */}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {loanOptions[activeTab]?.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {loanOptions[activeTab]?.description}
                    </p>

                    <ul className="space-y-2">
                      {loanOptions[activeTab]?.features.map(
                        (feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-6 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Your Rate
              </Button>

              <Button
                variant="outline"
                className="border-gray-300 hover:border-green-500 hover:bg-green-50 text-gray-700 hover:text-green-700 font-medium px-6 py-6 rounded-xl transition-all duration-300 group"
              >
                Speak to a Loan Expert
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Home, Users, FileText, Key, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Home,
      title: "Find your ideal property",
      description:
        "Browse our extensive collection of premium properties tailored to your preferences and requirements. Use advanced filters to narrow down your perfect match.",
      color: "bg-blue-500",
      features: [
        "Personalized property recommendations",
        "Virtual tours available",
        "Neighborhood insights",
      ],
    },
    {
      icon: Users,
      title: "Connect with expert agents",
      description:
        "Our professional real estate agents provide personalized guidance throughout your journey, offering market insights and negotiation expertise.",
      color: "bg-purple-500",
      features: [
        "Experienced local agents",
        "24/7 support",
        "Transparent communication",
      ],
    },
    {
      icon: FileText,
      title: "Streamlined documentation",
      description:
        "We simplify the paperwork process with digital documentation and step-by-step guidance, ensuring a smooth and efficient transaction.",
      color: "bg-amber-500",
      features: [
        "Digital document signing",
        "Legal verification",
        "Secure processing",
      ],
    },
    {
      icon: Key,
      title: "Move into your new home",
      description:
        "Complete your journey with a seamless closing process and receive the keys to your new property. Our support continues even after you move in.",
      color: "bg-emerald-500",
      features: [
        "Smooth transition assistance",
        "Move-in support",
        "Post-purchase services",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-amber-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
            <span className="mr-2">🏠</span> Simple Four-Step Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey to finding the perfect home is simple and
            straightforward with our proven process
          </p>
        </div>

        {/* Progress bar */}
        <div className="hidden lg:flex justify-between mb-12 max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10"
              onMouseEnter={() => setActiveStep(index)}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-500 cursor-pointer
                  ${activeStep >= index ? steps[index].color : "bg-gray-200"}
                  ${activeStep === index ? "scale-125 shadow-lg" : ""}
                `}
              >
                {activeStep > index ? (
                  <Check className="h-6 w-6" />
                ) : (
                  <step.icon className="h-6 w-6" />
                )}
              </div>
              <div
                className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium transition-all duration-300
                ${
                  activeStep === index
                    ? "opacity-100 text-gray-900"
                    : "opacity-70 text-gray-600"
                }
              `}
              >
                Step {index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 transition-all duration-500 bg-white border border-gray-100 shadow-sm hover:shadow-xl
                ${
                  activeStep === index
                    ? "transform -translate-y-2 shadow-xl"
                    : ""
                }
              `}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-xl ${step.color} text-white mr-4`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-gray-400">
                  Step {index + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>

              <p className="text-gray-600 mb-6">{step.description}</p>

              <ul className="space-y-2">
                {step.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <div
                      className={`mt-1 mr-2 w-4 h-4 rounded-full flex items-center justify-center ${step.color} text-white flex-shrink-0`}
                    >
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="group flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile progress indicator */}
        <div className="flex justify-center mt-12 lg:hidden">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeStep === index ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

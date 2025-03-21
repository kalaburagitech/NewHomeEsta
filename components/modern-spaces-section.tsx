import Image from "next/image";
import { Search, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModernSpacesSection() {
  return (
    <section className="bg-gradient-to-b from-[#f0f8f8] to-[#e6f3f3] py-20 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1 transform transition-all duration-700 hover:scale-[1.02] group">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>

            {/* Main image with border effect */}
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl border-l-8 border-yellow-400 z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent z-10"></div>
              <Image
                src="/images/main-home-img-1.jpeg"
                alt="Modern interior design with premium finishes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -right-5 top-10 bg-white rounded-lg shadow-xl p-4 z-20 transform rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-medium text-sm">Premium Design</span>
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
                <span className="mr-1">✨</span> Premium Living Spaces
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Modern spaces with
                <br />
                exceptional design
              </h2>
            </div>

            <p className="text-gray-700 text-lg">
              Discover thoughtfully designed living spaces that blend aesthetics
              with functionality. Our premium properties feature contemporary
              architecture, sustainable materials, and innovative layouts that
              elevate your everyday living experience.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700 group">
                <CheckCircle className="h-6 w-6 text-yellow-500 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <span className="font-medium">Open-concept layouts</span> —
                  Spacious interiors with seamless flow between living areas
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-700 group">
                <CheckCircle className="h-6 w-6 text-yellow-500 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <span className="font-medium">Premium finishes</span> —
                  High-quality materials and attention to detail in every corner
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-700 group">
                <CheckCircle className="h-6 w-6 text-yellow-500 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <span className="font-medium">Smart home integration</span> —
                  Advanced technology for comfort, security and efficiency
                </div>
              </li>
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-6 rounded-xl shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 transform hover:-translate-y-1">
                <Search className="mr-2 h-5 w-5" />
                Find Your Dream Home
              </Button>

              <Button
                variant="outline"
                className="border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-medium px-6 py-6 rounded-xl transition-all duration-300 group"
              >
                View All Properties
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

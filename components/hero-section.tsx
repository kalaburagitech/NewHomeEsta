"use client";

import { useState, useEffect, useRef } from "react";
import { PropertySearch } from "@/components/property-search";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  position?: string;
}

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const slides: Slide[] = [
    {
      image: "/images/home-rev-img-1.jpeg",
      title: "Buy or rent properties",
      subtitle: "with no commission",
      position: "center",
    },
    {
      image: "/images/home-rev-img-2.jpeg",
      title: "Find your dream home",
      subtitle: "in prime locations",
      position: "center 30%",
    },
    {
      image: "/images/home-rev-img-4.jpeg",
      title: "Exclusive properties",
      subtitle: "for discerning buyers",
      position: "center 40%",
    },
  ];

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 6000); // Change slide every 6 seconds
    }
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isAutoplay, slides.length, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetAutoplay();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    resetAutoplay();
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    resetAutoplay();
  };

  const pauseAutoplay = () => setIsAutoplay(false);
  const resumeAutoplay = () => setIsAutoplay(true);

  return (
    <section
      className="relative overflow-hidden min-h-[700px] md:min-h-[800px]"
      aria-label="Featured properties"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30 z-10" />

      {/* Decorative elements */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div>

      {/* Carousel container */}
      <div className="relative min-h-[700px] md:min-h-[800px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slides[currentSlide].image}')`,
              backgroundPosition: slides[currentSlide].position || "center",
            }}
            role="img"
            aria-label={`${slides[currentSlide].title} ${slides[currentSlide].subtitle}`}
          />
        </AnimatePresence>

        <div className="relative z-20 flex flex-col justify-center min-h-[700px] md:min-h-[800px] pt-20 pb-24 md:pt-24 md:pb-20">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/20">
                <span className="mr-1 sm:mr-2">✨</span> Find Your Perfect
                Property
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-3 sm:mb-6 leading-tight text-white">
                    <span className="block mb-1 sm:mb-2 drop-shadow-lg">
                      {slides[currentSlide].title}
                    </span>
                    <span className="block text-yellow-400 drop-shadow-lg">
                      {slides[currentSlide].subtitle}
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 drop-shadow-md">
                    Discover exceptional properties tailored to your lifestyle
                    and preferences. Our expert team is ready to guide you
                    through every step.
                  </p>
                </motion.div>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="w-full"
              >
                <PropertySearch />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation arrows - hidden on small screens */}
      <div className="hidden sm:flex absolute inset-y-0 left-4 items-center z-20">
        <button
          onClick={goToPrevSlide}
          className="p-2 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="hidden sm:flex absolute inset-y-0 right-4 items-center z-20">
        <button
          onClick={goToNextSlide}
          className="p-2 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-yellow-400 w-6 sm:w-8"
                : "bg-white/50 w-2 sm:w-2.5 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

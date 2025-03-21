"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";

export function PropertySearch() {
  const [searchType, setSearchType] = useState("buy");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [priceRangeValue, setPriceRangeValue] = useState("");
  const [filters, setFilters] = useState<string[]>([
    "2 Bed",
    "1 Bath",
    "Swimming Pool",
  ]);

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const clearAllFilters = () => {
    setFilters([]);
  };

  const toggleFilter = (filter: string) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const amenities = [
    "Swimming Pool",
    "Garden",
    "Garage",
    "Balcony",
    "Gym",
    "Security",
    "Elevator",
    "Parking",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl p-3 sm:p-5 shadow-md border border-gray-200">
      {/* Search Type Tabs */}
      <div className="flex gap-1 sm:gap-2 mb-4 sm:mb-6 justify-center">
        <button
          onClick={() => setSearchType("buy")}
          className={`px-2 sm:px-5 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-colors ${
            searchType === "buy"
              ? "bg-yellow-400 text-black"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setSearchType("rent")}
          className={`px-2 sm:px-5 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-colors ${
            searchType === "rent"
              ? "bg-yellow-400 text-black"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          For Rent
        </button>
        <button
          onClick={() => setSearchType("sell")}
          className={`px-2 sm:px-5 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-colors ${
            searchType === "sell"
              ? "bg-yellow-400 text-black"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          Sell
        </button>
      </div>

      {/* Main Search Form */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 sm:left-4 flex items-center pointer-events-none">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <select
            className="w-full h-10 sm:h-12 pl-9 sm:pl-12 pr-8 sm:pr-10 text-sm sm:text-base bg-white border border-gray-200 rounded-md text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="" disabled hidden>
              Property Type
            </option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="villa">Villa</option>
            <option value="land">Land</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-3 sm:left-4 flex items-center pointer-events-none">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 3V5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 21V23"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 13H18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M6 13H8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <select
            className="w-full h-10 sm:h-12 pl-9 sm:pl-12 pr-8 sm:pr-10 text-sm sm:text-base bg-white border border-gray-200 rounded-md text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="" disabled hidden>
              Location
            </option>
            <option value="ny">New York</option>
            <option value="la">Los Angeles</option>
            <option value="ch">Chicago</option>
            <option value="mi">Miami</option>
            <option value="sf">San Francisco</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-3 sm:left-4 flex items-center pointer-events-none">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2V22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <select
            className="w-full h-10 sm:h-12 pl-9 sm:pl-12 pr-8 sm:pr-10 text-sm sm:text-base bg-white border border-gray-200 rounded-md text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            value={priceRangeValue}
            onChange={(e) => setPriceRangeValue(e.target.value)}
          >
            <option value="" disabled hidden>
              Price Range
            </option>
            <option value="0-100000">Under $100,000</option>
            <option value="100000-300000">$100,000 - $300,000</option>
            <option value="300000-500000">$300,000 - $500,000</option>
            <option value="500000-1000000">$500,000 - $1,000,000</option>
            <option value="1000000+">$1,000,000+</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Filters and Search Button Row */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4 justify-center">
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex items-center justify-center h-10 sm:h-12 px-3 sm:px-4 bg-white border border-gray-200 rounded-md text-sm sm:text-base text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
              <SlidersHorizontal className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
              Filters
              <span className="ml-1.5 sm:ml-2 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 text-black rounded-full text-xs sm:text-sm font-medium">
                {filters.length}
              </span>
            </button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md bg-white">
            <SheetHeader>
              <SheetTitle>Advanced Filters</SheetTitle>
              <SheetDescription>
                Refine your property search with additional filters
              </SheetDescription>
            </SheetHeader>

            <div className="py-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-3 text-gray-800">
                  Price Range
                </h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 1000000]}
                    max={2000000}
                    step={50000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-6"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3 text-gray-800">
                  Bedrooms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, "5+"].map((num) => (
                    <Button
                      key={num}
                      variant="outline"
                      size="sm"
                      className={`rounded-full border-gray-300 ${
                        filters.includes(`${num} Bed`)
                          ? "bg-yellow-100 border-yellow-400 text-yellow-800"
                          : "text-gray-700"
                      }`}
                      onClick={() => toggleFilter(`${num} Bed`)}
                    >
                      {num} {num === 1 ? "Bedroom" : "Bedrooms"}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3 text-gray-800">
                  Bathrooms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, "4+"].map((num) => (
                    <Button
                      key={num}
                      variant="outline"
                      size="sm"
                      className={`rounded-full border-gray-300 ${
                        filters.includes(`${num} Bath`)
                          ? "bg-yellow-100 border-yellow-400 text-yellow-800"
                          : "text-gray-700"
                      }`}
                      onClick={() => toggleFilter(`${num} Bath`)}
                    >
                      {num} {num === 1 ? "Bathroom" : "Bathrooms"}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3 text-gray-800">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {amenities.map((amenity) => (
                    <Button
                      key={amenity}
                      variant="outline"
                      size="sm"
                      className={`justify-start border-gray-300 ${
                        filters.includes(amenity)
                          ? "bg-yellow-100 border-yellow-400 text-yellow-800"
                          : "text-gray-700"
                      }`}
                      onClick={() => toggleFilter(amenity)}
                    >
                      {filters.includes(amenity) ? (
                        <Check className="mr-2 h-4 w-4 flex-shrink-0" />
                      ) : (
                        <div className="w-4 h-4 mr-2 rounded-full border border-gray-300 flex-shrink-0"></div>
                      )}
                      <span className="truncate">{amenity}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => setFilters([])}
                className="text-gray-700 border-gray-300"
              >
                Clear All
              </Button>
              <SheetClose asChild>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                  Apply Filters
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
        <button className="flex items-center justify-center h-10 sm:h-12 px-6 sm:px-10 bg-yellow-400 rounded-md text-sm sm:text-base text-black font-medium hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
          <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
          Search
        </button>
      </div>

      {/* Active Filters */}
      <AnimatePresence>
        {filters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2"
          >
            {filters.map((filter) => (
              <div
                key={filter}
                className="flex items-center bg-gray-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-gray-700"
              >
                <span>{filter}</span>
                <button
                  onClick={() => removeFilter(filter)}
                  className="ml-1 sm:ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
            ))}
            <button
              onClick={clearAllFilters}
              className="text-gray-500 hover:text-gray-700 px-2 py-1 sm:py-1.5 text-xs sm:text-sm focus:outline-none"
            >
              Clear all
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

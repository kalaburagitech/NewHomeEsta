"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Bed, Bath, Square, Star, Plus } from "lucide-react";

interface PropertySize {
  area: number;
  unit: string;
}

interface PropertyAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface PropertyImage {
  image_url: string;
  alt_text: string;
  _id: string;
}

interface Property {
  _id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  property_status: string;
  address: PropertyAddress;
  size: PropertySize;
  features: string[];
  images: PropertyImage[];
  year_built: number;
  floor_number?: number;
}

export function FeaturedProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://homeestadb.onrender.com/api/properties"
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setProperties(data);
      } catch (err) {
        setError("Failed to load properties. Please try again later.");
        console.error("Error fetching properties:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our choice of popular real estate
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden bg-gray-100 animate-pulse shadow-md"
            >
              <div className="h-64 bg-gray-200"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                <div className="flex justify-between">
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our choice of popular real estate
        </h2>
        <div className="bg-red-50 p-4 rounded-lg text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-pulse">
        Our choice of popular real estate
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: Property }) {
  // Extract the first image or use a placeholder
  const imageUrl =
    property.images && property.images.length > 0
      ? property.images[0].image_url
      : "/placeholder.svg?height=400&width=600";

  const imageAlt =
    property.images && property.images.length > 0
      ? property.images[0].alt_text
      : property.title;

  // Extract bedrooms and bathrooms from features
  const bedrooms =
    property.features?.find((f) => f.includes("Bedroom"))?.split(" ")[0] || "0";
  const bathrooms =
    property.features?.find((f) => f.includes("Bathroom"))?.split(" ")[0] ||
    "0";

  // Format price with commas
  const formattedPrice = new Intl.NumberFormat("en-US").format(property.price);

  // Determine property type from features or title
  const propertyType = property.title.includes("Apartment")
    ? "APARTMENTS"
    : property.title.includes("Villa")
    ? "VILLAS"
    : "HOMES";

  // Handle external images safely
  const renderImage = () => {
    // Check if the image URL is external
    if (imageUrl.startsWith("http")) {
      return (
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      );
    } else {
      // For local images or if URL is invalid
      return (
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      );
    }
  };

  return (
    <Link href={`/property/${property._id}`} className="group">
      <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white hover:translate-y-[-5px] relative">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-200 animate-pulse"></div>

        <div className="relative rounded-lg overflow-hidden bg-white">
          <div className="relative h-64">
            {renderImage()}
            <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full text-sm font-medium shadow-md">
              {property.property_status}
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md hover:scale-110 duration-300">
                <Star className="w-4 h-4 text-yellow-500" />
              </button>
              <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md hover:scale-110 duration-300">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center text-gray-500 mb-2">
              <MapPin className="w-4 h-4 mr-1 text-primary" />
              <span className="text-sm">
                {propertyType} - {property.address.city}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {property.title}
            </h3>

            <p className="text-gray-600 mb-4 line-clamp-2">
              {property.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {formattedPrice} {property.currency}
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <div className="flex items-center hover:text-primary transition-colors">
                  <Square className="w-4 h-4 mr-1" />
                  <span className="text-sm">
                    {property.size.area}
                    {property.size.unit}
                  </span>
                </div>

                <div className="flex items-center hover:text-primary transition-colors">
                  <Bed className="w-4 h-4 mr-1" />
                  <span className="text-sm">{bedrooms}</span>
                </div>

                <div className="flex items-center hover:text-primary transition-colors">
                  <Bath className="w-4 h-4 mr-1" />
                  <span className="text-sm">{bathrooms}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

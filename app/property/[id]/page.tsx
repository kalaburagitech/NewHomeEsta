import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Calendar,
  Home,
  Maximize2,
  Bed,
  Bath,
  Check,
  ArrowLeft,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";

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

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const property = await getProperty(params.id);

    return {
      title: `${property.title} | HomeEsta`,
      description: property.description,
      openGraph: {
        title: `${property.title} | HomeEsta`,
        description: property.description,
        images:
          property.images.length > 0 ? [property.images[0].image_url] : [],
      },
    };
  } catch (error) {
    return {
      title: "Property Not Found | HomeEsta",
      description: "The property you're looking for could not be found.",
    };
  }
}

// Fetch property data
async function getProperty(id: string): Promise<Property> {
  try {
    const response = await fetch(
      `https://homeestadb.onrender.com/api/properties/${id}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch property: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching property:", error);
    throw error;
  }
}

export default async function PropertyPage({
  params,
}: {
  params: { id: string };
}) {
  let property: Property;

  try {
    property = await getProperty(params.id);
  } catch (error) {
    notFound();
  }

  // Format price with commas
  const formattedPrice = new Intl.NumberFormat("en-US").format(property.price);

  // Extract bedrooms and bathrooms from features
  const bedrooms =
    property.features?.find((f) => f.includes("Bedroom"))?.split(" ")[0] || "0";
  const bathrooms =
    property.features?.find((f) => f.includes("Bathroom"))?.split(" ")[0] ||
    "0";

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Back button */}
        <div className="container py-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to listings
          </Link>
        </div>

        {/* Property images */}
        <section className="bg-gray-100">
          <div className="container py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Main image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={
                    property.images[0]?.image_url ||
                    "/placeholder.svg?height=800&width=1200"
                  }
                  alt={property.images[0]?.alt_text || property.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Additional images or placeholder */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="relative h-[190px] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={
                        property.images[index]?.image_url ||
                        "/placeholder.svg?height=400&width=600"
                      }
                      alt={
                        property.images[index]?.alt_text ||
                        `${property.title} view ${index}`
                      }
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Property details */}
        <section className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="flex items-center text-gray-500 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>
                  {property.address.street}, {property.address.city},{" "}
                  {property.address.state} {property.address.zip}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {property.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                  <span>Built in {property.year_built}</span>
                </div>

                {property.floor_number && (
                  <div className="flex items-center">
                    <Home className="w-5 h-5 mr-2 text-gray-500" />
                    <span>Floor {property.floor_number}</span>
                  </div>
                )}

                <div className="flex items-center">
                  <Maximize2 className="w-5 h-5 mr-2 text-gray-500" />
                  <span>
                    {property.size.area} {property.size.unit}
                  </span>
                </div>

                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2 text-gray-500" />
                  <span>{bedrooms} Bedrooms</span>
                </div>

                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-2 text-gray-500" />
                  <span>{bathrooms} Bathrooms</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {property.description}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Location</h2>
                <div className="bg-gray-200 h-[300px] rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">
                    Map view would be displayed here
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="text-3xl font-bold mb-4">
                  {formattedPrice} {property.currency}
                </div>

                <div className="p-4 bg-gray-100 rounded-lg mb-6">
                  <div className="text-lg font-semibold mb-2">
                    Property Status
                  </div>
                  <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                    {property.property_status}
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold mb-3 hover:bg-primary/90 transition-colors">
                  Contact Agent
                </button>

                <button className="w-full bg-white text-primary border border-primary py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Schedule a Tour
                </button>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">
                    Agent Information
                  </h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <div className="font-medium">Agent Name</div>
                      <div className="text-sm text-gray-500">
                        Real Estate Agent
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar properties section would go here */}
      </main>

      {/* Footer would go here */}
    </div>
  );
}

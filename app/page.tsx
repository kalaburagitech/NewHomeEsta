import type { Metadata } from "next";
import ClientPage from "./ClientPage";

// Metadata needs to be in a separate file for App Router
export const metadata: Metadata = {
  title: "HomeEsta | Find Your Dream Property With No Commission",
  description:
    "Discover your perfect home with HomeEsta. Browse thousands of properties for sale and rent with no commission fees. Find houses, apartments, and more in prime locations.",
  keywords:
    "real estate, property, home, house, apartment, buy property, rent property, no commission, real estate listings",
  openGraph: {
    title: "HomeEsta | Find Your Dream Property With No Commission",
    description:
      "Discover your perfect home with HomeEsta. Browse thousands of properties for sale and rent with no commission fees.",
    url: "https://homeesta.com",
    siteName: "HomeEsta",
    images: [
      {
        url: "/images/home-rev-img-1.jpeg",
        width: 1200,
        height: 630,
        alt: "HomeEsta - Find Your Dream Property",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeEsta | Find Your Dream Property With No Commission",
    description:
      "Discover your perfect home with HomeEsta. Browse thousands of properties for sale and rent with no commission fees.",
    images: ["/images/home-rev-img-1.jpeg"],
  },
};

export default function Home() {
  return <ClientPage />;
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProperties } from "@/components/featured-properties";
import { ModernSpacesSection } from "@/components/modern-spaces-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { EnquiryBanner } from "@/components/enquiry-banner";
import { ExpertRenovationSection } from "@/components/expert-renovation-section";
import { HomeLoanSection } from "@/components/home-loan-section";
import { Footer } from "@/components/footer";

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
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProperties />
        <ModernSpacesSection />
        <HowItWorksSection />
        <EnquiryBanner />
        <ExpertRenovationSection />
        <HomeLoanSection />
      </main>
      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProperties } from "@/components/featured-properties";
import { ModernSpacesSection } from "@/components/modern-spaces-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { EnquiryBanner } from "@/components/enquiry-banner";
import { ExpertRenovationSection } from "@/components/expert-renovation-section";
import { HomeLoanSection } from "@/components/home-loan-section";
import { Footer } from "@/components/footer";
import { LoadingAnimation } from "@/components/loading-animation";
import { AuthModal } from "@/components/auth/auth-modal";

export default function ClientPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <div className="flex min-h-screen flex-col">
      <LoadingAnimation />
      <SiteHeader onOpenAuthModal={openAuthModal} />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProperties />
        <ModernSpacesSection />
        <HowItWorksSection />
        <EnquiryBanner />
        <ExpertRenovationSection />
        <HomeLoanSection />
      </main>

      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
}

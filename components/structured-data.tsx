import Script from "next/script";

export function HomePageStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "HomeEsta",
    description:
      "Find your dream property with no commission fees. Browse thousands of properties for sale and rent.",
    url: "https://homeesta.com",
    logo: "https://homeesta.com/logo.png",
    sameAs: [
      "https://www.facebook.com/homeesta",
      "https://www.twitter.com/homeesta",
      "https://www.instagram.com/homeesta",
      "https://www.linkedin.com/company/homeesta",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Real Estate Avenue",
      addressLocality: "Property City",
      postalCode: "12345",
      addressCountry: "US",
    },
    telephone: "+11234567890",
    email: "info@homeesta.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
  };

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
}

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HomePageStructuredData } from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "HomeEsta | Find Your Dream Property",
    template: "%s | HomeEsta",
  },
  description:
    "Find your dream property with no commission fees. Browse thousands of properties for sale and rent.",
  metadataBase: new URL("https://homeesta.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <HomePageStructuredData />
      </body>
    </html>
  );
}

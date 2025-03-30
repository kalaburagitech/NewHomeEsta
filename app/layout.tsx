import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/components/auth/auth-provider";
import { Footer } from "@/components/footer";
import { HomePageStructuredData } from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <HomePageStructuredData />
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}

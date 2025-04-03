import { AddPropertyForm } from "@/components/add-property-form";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Add Property",
  description: "List your property on HomeEsta",
};

export default function AddPropertyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1">
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold mb-4">Add Your Property</h1>
            <p className="text-xl max-w-2xl">
              List your property on HomeEsta and connect with thousands of
              potential buyers and renters.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <AddPropertyForm />
        </div>
      </div>
    </div>
  );
}

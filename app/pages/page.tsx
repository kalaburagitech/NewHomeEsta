import { SiteHeader } from "@/components/site-header";

export default function PagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-bold mb-6">Pages</h1>
        <p>This is the pages section of HomeEsta.</p>
      </main>
    </div>
  );
}

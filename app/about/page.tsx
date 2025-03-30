import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="/images/home-rev-img-4.jpeg"
          alt="Modern Apartment Buildings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/main-home-img-1.jpeg"
                alt="Person using laptop"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Vision</h2>
              <p className="text-gray-600 mb-4">
                HOMEESTA brings innovation to the real estate industry as we
                deliver the highest quality services to our clients. We are
                trusted by many clients because of our dedication to integrity
                and excellence in every transaction we handle. We take pride in
                our commitment to providing the best real estate services to
                you.
              </p>
              <p className="text-gray-600 mb-8">
                Our vision is to be the most trusted and innovative real estate
                agency, known for our integrity, expertise, and commitment to
                client satisfaction.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                View more
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">$980k</h3>
              <p className="text-gray-600">median sale price</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">24</h3>
              <p className="text-gray-600">properties sold</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">$680k</h3>
              <p className="text-gray-600">median market price</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mt-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">95</h3>
              <p className="text-gray-600">properties rented</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">$522k</h3>
              <p className="text-gray-600">sales & rental transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Mission</h2>
              <p className="text-gray-600 mb-4">
                HOMEESTA exists as a premier real estate solution that not only
                meets but exceeds our clients' expectations. We are dedicated to
                providing exceptional service that helps our clients achieve
                their property goals through honest advice, market expertise,
                and personalized attention.
              </p>
              <p className="text-gray-600 mb-8">
                Our mission is to deliver transparent and ethical real estate
                services, build lasting relationships with our clients, and
                provide expert guidance throughout the entire process.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                View more
              </Button>
            </div>
            <div>
              <Image
                src="/images/main-home-img-2.jpeg"
                alt="Agent showing property to clients"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Houses Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src="/images/main-home-img-3.jpeg"
          alt="Couple with coffee cups"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Premium Houses and Apartments
              </h2>
              <p className="text-white text-lg mb-6">
                Discover our collection of premium properties, carefully
                selected to meet the highest standards of quality and comfort.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                View Properties
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-600">
              Our team of experienced real estate professionals is dedicated to
              helping you find the perfect property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Aida Rutta"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Aida Rutta</h3>
              <p className="text-gray-500 mb-4">HOME INSPECTOR</p>
              <p className="text-gray-600 text-center">
                "Ut vix primis tractatos. Ad est alterum epicuri accusamus. Duo
                per id his qualisque deseruisse reformidans ex, quo omnesque
                cotidieque. Dolor voluptua per, his in congue."
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Ron Bradley"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Ron Bradley</h3>
              <p className="text-gray-500 mb-4">AGENT</p>
              <p className="text-gray-600 text-center">
                "Ut vix primis tractatos. Ad est alterum epicuri accusamus. Duo
                per id his qualisque deseruisse reformidans ex, quo omnesque
                cotidieque. Dolor voluptua per, his in congue."
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Jeanis Green"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Jeanis Green</h3>
              <p className="text-gray-500 mb-4">SALES ADVISOR</p>
              <p className="text-gray-600 text-center">
                "Ut vix primis tractatos. Ad est alterum epicuri accusamus. Duo
                per id his qualisque deseruisse reformidans ex, quo omnesque
                cotidieque. Dolor voluptua per, his in congue."
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Joel Pearson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Joel Pearson</h3>
              <p className="text-gray-500 mb-4">MANAGER</p>
              <p className="text-gray-600 text-center">
                "Ut vix primis tractatos. Ad est alterum epicuri accusamus. Duo
                per id his qualisque deseruisse reformidans ex, quo omnesque
                cotidieque. Dolor voluptua per, his in congue."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Footer from "@/app/components/Footer";
import Image from "next/image";

interface Brand {
  id: number;
  logo: string;
  name: string;
  description: string;
}

const brands: Brand[] = [];

export default function BrandsPage() {
  return (
    <main>
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Brands</h2>
          {brands.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg">No other brands available at the moment. Please check back later!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {brands.map((brand) => (
                <div key={brand.id} className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                  {brand.logo && (
                    <div className="relative w-32 h-32 mb-4">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-foreground mb-2">{brand.name}</h3>
                  <p className="text-muted-foreground text-sm">{brand.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

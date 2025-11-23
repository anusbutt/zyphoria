import Image from "next/image";
import Footer from "@/app/components/Footer";
import { newArrivalProducts } from "@/lib/products";

export default function NewArrivalsPage() {
  return (
    <main>
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">New Arrivals - Coming Soon!</h2>
          <p className="text-center text-muted-foreground mb-12">Discover our exciting new fragrances expected to arrive next month.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
            {newArrivalProducts.map((product) => (
              <div key={product.id} className="bg-card rounded-lg shadow-md overflow-hidden relative flex flex-col items-center w-full max-w-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover object-center rounded-t-lg"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <p className="text-lg font-bold text-primary">Expected: {product.expected}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

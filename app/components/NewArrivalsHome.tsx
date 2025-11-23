"use client";

import AnimatedImage from "./AnimatedImage";
import Link from "next/link";
import { newArrivalProducts } from "@/lib/products";

export default function NewArrivalsHome() {
  const displayedProducts = newArrivalProducts.slice(0, 4); // Display first 4 products

  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {displayedProducts.map((product) => (
            <div key={product.id} className="bg-card rounded-lg shadow-md overflow-hidden relative flex flex-col items-center w-full max-w-sm">
              <AnimatedImage
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
                {product.price && <p className="text-lg font-bold text-primary mt-2">${product.price.toFixed(2)}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/new-arrivals" className="text-primary hover:underline text-lg font-semibold">
            View All New Arrivals &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

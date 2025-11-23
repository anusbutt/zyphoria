"use client";

import AnimatedImage from "./AnimatedImage";
import { topProduct } from "@/lib/products";

export default function TopProduct() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Top Product
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE TEXT */}
          <div className="md:pr-12">
            <h2 className="text-4xl font-bold mb-4">{topProduct.name}</h2>
            <p className="text-lg text-gray-300 mb-6">
              {topProduct.description}
            </p>
            <p className="text-3xl font-bold text-white mb-6">
              ${topProduct.price.toFixed(2)}
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Notes</h3>
              <p className="text-gray-400">{topProduct.notes}</p>
            </div>

            <button className="bg-primary text-primary-foreground py-3 px-8 rounded-full hover:bg-primary-dark transition-colors text-lg font-semibold">
              Discover Now
            </button>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-2xl">
            <AnimatedImage
              src={topProduct.image}
              alt={topProduct.name}
              fill
              className="object-fit"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { searchProductsFuzzy } from "@/lib/fuzzy-search";

import Footer from "@/app/components/Footer";

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const results = useMemo(() => {
    if (searchQuery) {
      return searchProductsFuzzy(searchQuery);
    } else {
      return [];
    }
  }, [searchQuery]);

  return (
    <main>
      <section className="bg-background py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Search Results for &quot;{searchQuery}&quot;
          </h2>

          {searchQuery && results.length === 0 ? (
            <div className="text-center text-muted-foreground text-lg">
              <p>No products found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {results.map((product) => (
                <div key={product.id} className="bg-card rounded-lg shadow-md overflow-hidden relative flex flex-col h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm flex-grow">{product.description}</p>
                    <p className="text-lg font-bold text-primary mt-2">${product.price.toFixed(2)}</p>
                    <Link href={`/shop/${product.slug}`}>
                      <button className="mt-4 bg-primary text-primary-foreground py-2 px-4 rounded hover:bg-primary-foreground hover:text-primary mt-auto w-full text-center">Shop Now</button>
                    </Link>
                  </div>
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

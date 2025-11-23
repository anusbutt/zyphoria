"use client";

import Footer from "@/app/components/Footer";
import SpecialOfferCard from "@/app/components/SpecialOfferCard";
import { specialOffers } from "@/lib/offers";

export default function OffersPage() {
  return (
    <main>
      <section className="bg-background py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-foreground mb-10 text-center leading-tight">
            Exclusive Special Offers
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Discover incredible discounts and limited-time deals on your favorite fragrances.
            Don&apos;t miss out on these amazing opportunities to refresh your collection!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialOffers.map((offer) => (
              <SpecialOfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

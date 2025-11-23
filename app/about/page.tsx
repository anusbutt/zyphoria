"use client";

import Footer from "@/app/components/Footer";

export default function AboutUsPage() {
  return (
    <main>
      <section className="bg-background py-12 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">About Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zyphoria is dedicated to bringing you the finest selection of fragrances.
            We believe that a scent can evoke powerful memories, boost confidence, and express individuality.
            Our mission is to help you discover the perfect fragrance that complements your unique style and personality.
            Explore our curated collection and embark on a sensory journey with Zyphoria.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
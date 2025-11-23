"use client";

import Footer from "@/app/components/Footer";

export default function OrdersPage() {
  return (
    <main>
      <section className="bg-background py-12 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">My Orders</h2>
          <p className="text-muted-foreground">This is your orders page. Your order history will appear here.</p>
          {/* Add order history details here */}
        </div>
      </section>
      <Footer />
    </main>
  );
}

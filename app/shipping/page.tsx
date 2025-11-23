"use client";

import Footer from "@/app/components/Footer";

export default function ShippingReturnsPage() {
  return (
    <main>
      <section className="bg-background py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Shipping &amp; Returns</h2>
          <div className="max-w-3xl mx-auto space-y-8 text-muted-foreground">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Shipping Information</h3>
              <p className="mb-2">
                We offer various shipping options to meet your needs. Standard shipping typically takes 5-7 business days.
                Expedited shipping is available for faster delivery.
                Shipping costs are calculated at checkout based on your location and selected shipping method.
              </p>
              <p>
                We currently ship within the United States and Canada. International shipping to other regions is coming soon.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Returns Policy</h3>
              <p className="mb-2">
                Your satisfaction is our priority. If you are not entirely satisfied with your purchase, we&apos;re here to help.
              </p>
              <p className="mb-2">
                You have 30 calendar days to return an item from the date you received it. To be eligible for a return,
                your item must be unused and in the same condition that you received it. Your item must be in the original packaging.
              </p>
              <p>
                Refunds are processed within 7-10 business days after we receive your returned item.
                Shipping costs are non-refundable.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Damaged or Incorrect Items</h3>
              <p>
                If you received a damaged or incorrect item, please contact us immediately at support@zyphoria.com with your order number and a photo of the item.
                We will gladly arrange for a replacement or refund.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

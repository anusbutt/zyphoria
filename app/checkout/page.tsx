"use client";

import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { CheckoutFormDialog } from '@/app/components/CheckoutFormDialog';
import type { CheckoutFormValues } from '@/app/components/CheckoutFormDialog';

export default function CheckoutPage() {
  const { cart, removeFromCart, getCartTotal, clearCart } = useCart();
  const router = useRouter();
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);

  const subtotal = getCartTotal();
  const taxRate = 0.10; // 10% tax rate
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleProceedToPayment = () => {
    setIsFormDialogOpen(true);
  };

  const handleFormSubmission = (formData: CheckoutFormValues) => {
    console.log("Form Data Submitted:", formData);
    // In a real application, you would integrate with a payment gateway here.
    // For this prototype, we'll just clear the cart and redirect to a confirmation.
    Swal.fire({
      icon: 'info',
      title: 'Processing Order',
      text: 'Redirecting to payment gateway...',
      showConfirmButton: false,
      timer: 2000
    }).then(() => {
      clearCart();
      router.push("/order-confirmation"); // Redirect to a hypothetical order confirmation page
    });
  };

  if (cart.length === 0) {
    return (
      <main>
        <section className="bg-background py-12 min-h-screen">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h2>
            <p className="text-muted-foreground">Add some items to your cart before checking out.</p>
            <Button className="mt-6" onClick={() => router.push("/shop")}>Go to Shop</Button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <section className="bg-background py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Checkout</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Order Summary</h3>
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex items-center justify-between border-b pb-4 last:border-b-0 border-border">
                    <div className="flex items-center gap-4">
                      <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md object-cover" />
                      <div>
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        <p className="text-muted-foreground text-sm">Quantity: {item.quantity}</p>
                        <p className="text-primary font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                    <Button variant="destructive" size="sm" onClick={() => {
                      removeFromCart(item.id);
                      Swal.fire({
                        icon: 'success',
                        title: 'Removed from Cart!',
                        text: `${item.name} removed from your cart.`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    }}>Remove</Button>
                  </li>
                ))}
              </ul>
              <Separator className="my-6 bg-border" />
              <div className="flex justify-between text-lg font-semibold text-foreground">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold text-foreground mt-2">
                <span>Tax ({taxRate * 100}%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator className="my-6 bg-border" />
              <div className="flex justify-between text-2xl font-bold text-foreground">
                <span>Order Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button onClick={handleProceedToPayment} className="w-full mt-8 py-3 text-lg">Proceed to Payment</Button>
            </div>
            <div className="lg:col-span-1 bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Shipping Information</h3>
              {/* Placeholder for shipping form */}
              <div className="space-y-4 text-muted-foreground">
                <p>Shipping form will go here.</p>
                <p>Address, contact details, shipping method, etc.</p>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Payment Method</h3>
              {/* Placeholder for payment method selection */}
              <div className="space-y-4 text-muted-foreground">
                <p>Payment options will go here.</p>
                <p>Credit card input, PayPal, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <CheckoutFormDialog
        isOpen={isFormDialogOpen}
        onOpenChange={setIsFormDialogOpen}
        onSuccessfulSubmission={handleFormSubmission}
      />
    </main>
  );
}

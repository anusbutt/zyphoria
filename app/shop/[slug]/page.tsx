"use client";

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

import Footer from '@/app/components/Footer';
import { getProductBySlug } from '@/lib/products';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function ProductPage() {
  const { slug } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  const product = getProductBySlug(slug as string);

  if (!product) {
    return (
      <main>
        <section className="bg-gray-100 py-12 min-h-screen">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
            <p className="text-gray-600">The product you are looking for does not exist.</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      text: `${quantity} x ${product.name} added to your cart.`,
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push('/checkout');
  };

  const handleToggleLike = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <main>
      <section className="bg-background py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 bg-card p-8 rounded-lg shadow-md">
            <div className="md:w-1/2 relative h-96">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
                <p className="text-muted-foreground text-lg mb-6">{product.description}</p>
                <p className="text-3xl font-semibold text-primary mb-6">${product.price.toFixed(2)}</p>

                <div className="flex items-center mb-6">
                  <label htmlFor="quantity" className="mr-4 text-foreground">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setQuantity(Math.max(1, isNaN(value) ? 1 : value));
                    }}
                    className="w-20 p-2 border border-border rounded-md text-center bg-input text-foreground"
                    pattern="[0-9]*"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <Button onClick={handleAddToCart} className="flex-1 py-3 text-lg">Add to Cart</Button>
                <Button onClick={handleBuyNow} className="flex-1 py-3 text-lg variant-secondary">Buy Now</Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleToggleLike}
                  className="p-2 rounded-full border-border text-foreground hover:text-red-500 focus:outline-none"
                >
                  {isInWishlist(product.id) ? (
                    <HeartIconSolid className="h-6 w-6 text-red-500" />
                  ) : (
                    <HeartIcon className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

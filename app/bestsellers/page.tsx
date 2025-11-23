"use client";

import Image from "next/image";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { bestSellerProducts, Product } from "@/lib/products";
import { ShoppingCart } from "lucide-react";
import Swal from 'sweetalert2';

export default function BestsellersPage() {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleToggleLike = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      text: `${product.name} added to your cart.`,
      showConfirmButton: false,
      timer: 1500
    });
  };
  return (
    <main>
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Bestsellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestSellerProducts.map((product) => (
              <div key={product.id} className="bg-card rounded-lg shadow-md overflow-hidden relative flex flex-col h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover object-center"
                />
                <button
                  onClick={() => handleToggleLike(product)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-background/70 text-foreground hover:text-red-500 focus:outline-none"
                >
                  {isInWishlist(product.id) ? (
                    <HeartIconSolid className="h-6 w-6 text-red-500" />
                  ) : (
                    <HeartIcon className="h-6 w-6" />
                  )}
                </button>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{product.description}</p>
                  <Link href={`/shop/${product.slug}`}>
                    {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                    }
                    <button className="mt-4 bg-primary text-primary-foreground py-2 px-4 rounded hover:bg-primary-foreground hover:text-primary mt-auto w-full text-center">Shop Now</button>
                  </Link>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute top-2 left-2 p-2 rounded-full bg-background/70 text-foreground hover:text-green-500 focus:outline-none"
                >
                  <ShoppingCart className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

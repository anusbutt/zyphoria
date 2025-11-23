"use client";

import AnimatedImage from "./AnimatedImage";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { featuredProducts, Product } from "@/lib/products";
import { ShoppingCart } from "lucide-react";
import Swal from 'sweetalert2';

export default function FeaturedProducts() {
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
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative w-full h-80 bg-card rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <AnimatedImage
                  src={product.image}
                  alt={product.name}
                  fill={true}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/shop/${product.slug}`}>
                    {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                    }
                    <button className="bg-primary text-primary-foreground py-2 px-4 rounded-full hover:bg-primary-dark transition-colors">
                      Shop Now
                    </button>
                  </Link>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute top-4 left-4 p-2 rounded-full bg-background/80 text-foreground hover:text-green-500 focus:outline-none transition-colors"
                >
                  <ShoppingCart className="h-6 w-6" />
                </button>
                <button
                  onClick={() => handleToggleLike(product)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/80 text-foreground hover:text-red-500 focus:outline-none transition-colors"
                >
                  {isInWishlist(product.id) ? (
                    <HeartIconSolid className="h-6 w-6 text-red-500" />
                  ) : (
                    <HeartIcon className="h-6 w-6" />
                  )}
                </button>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                <p className="text-muted-foreground text-sm">{product.description}</p>
                <p className="text-lg font-bold text-primary mt-2">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

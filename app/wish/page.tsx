"use client";

import Footer from "@/app/components/Footer";
import Image from "next/image";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import Swal from 'sweetalert2';
import { useWishlist } from "../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <main>
      <section className="bg-background py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">My Wishlist</h2>
          {wishlist.length === 0 ? (
            <div className="text-center text-muted-foreground text-lg">
              <p>Your wishlist is empty.</p>
              <p className="mt-2">Add some items you love!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlist.map((product) => (
                <div key={product.id} className="bg-card rounded-lg shadow-md overflow-hidden relative flex flex-col h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover object-center"
                  />
                  <button
                    onClick={() => {
                      removeFromWishlist(product.id);
                      Swal.fire({
                        icon: 'success',
                        title: 'Removed from Wishlist!',
                        text: `${product.name} removed from your wishlist.`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    }}
                    className="absolute top-2 right-2 p-2 rounded-full bg-background/70 text-red-500 hover:text-foreground focus:outline-none"
                  >
                    <HeartIconSolid className="h-6 w-6" />
                  </button>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm flex-grow">{product.description}</p>
                    <button className="mt-4 bg-primary text-primary-foreground py-2 px-4 rounded hover:bg-primary-foreground hover:text-primary mt-auto w-full text-center">Add to Cart</button>
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

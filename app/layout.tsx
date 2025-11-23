"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./Providers";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import Header from "@/app/components/Header"; // Import Header
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import "./globals.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const hasSeenOffer = localStorage.getItem('hasSeenSpecialOffer');
    if (!hasSeenOffer) {
      Swal.fire({
        title: 'Exclusive Offers Just For You!',
        html: 'Don\'t miss out on our limited-time special discounts. Grab them before they\'s too late!',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'View Offers',
        cancelButtonText: 'No, thanks',
        customClass: {
          popup: 'dark:bg-gray-800 dark:text-white',
          title: 'dark:text-white',
          htmlContainer: 'dark:text-gray-300',
          confirmButton: 'bg-primary text-primary-foreground hover:bg-primary/90',
          cancelButton: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/offers';
        }
        localStorage.setItem('hasSeenSpecialOffer', 'true');
      });
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CartProvider>
          <WishlistProvider>
            <Providers>
              <Header /> {/* Render Header here */}
              {children}
            </Providers>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}

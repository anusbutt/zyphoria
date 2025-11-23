"use client";

import Link from "next/link";
import { ShoppingCart, Heart, User, Settings, LogOut, Plus, Minus, Trash2, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Swal from 'sweetalert2';
import Image from "next/image";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function Sidebar() {
  const { wishlist } = useWishlist();
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const { theme, setTheme } = useTheme();

  const total = getCartTotal();

  return (
    <SheetContent className="bg-gray-900 text-white border-l border-gray-800 w-[350px] sm:w-[400px] flex flex-col">
      <SheetHeader>
        <SheetTitle className="text-2xl font-bold text-white">My Cart</SheetTitle>
        <SheetDescription className="text-gray-400">
          Review your items before checkout.
        </SheetDescription>
      </SheetHeader>
      <Separator className="my-4 bg-gray-700" />
      <div className="flex-1 overflow-y-auto">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <ShoppingCart className="h-16 w-16 mb-4" />
            <p className="text-lg">Your cart is empty</p>
            <Button variant="outline" className="mt-4 bg-transparent border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link href="/shop">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-2 bg-gray-800 rounded-md">
                <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md object-cover" />
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{item.name}</h4>
                  <p className="text-gray-400 text-sm">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Button variant="ghost" size="icon" onClick={() => {
                      updateQuantity(item.id, item.quantity - 1);
                      Swal.fire({
                        icon: 'info',
                        title: 'Quantity Updated',
                        text: `${item.name} quantity updated.`,
                        showConfirmButton: false,
                        timer: 1000
                      });
                    }} className="h-6 w-6 text-white hover:bg-gray-700">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-white text-sm">{item.quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => {
                      updateQuantity(item.id, item.quantity + 1);
                      Swal.fire({
                        icon: 'info',
                        title: 'Quantity Updated',
                        text: `${item.name} quantity updated.`,
                        showConfirmButton: false,
                        timer: 1000
                      });
                    }} className="h-6 w-6 text-white hover:bg-gray-700">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => {
                      removeFromCart(item.id);
                      Swal.fire({
                        icon: 'success',
                        title: 'Removed from Cart!',
                        text: `${item.name} removed from your cart.`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    }} className="ml-auto text-red-500 hover:bg-gray-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="mt-4">
          <Separator className="my-4 bg-gray-700" />
          <div className="flex justify-between items-center text-xl font-bold text-white mb-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Button className="w-full py-3 text-lg" asChild>
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
        </div>
      )}
      <Separator className="my-4 bg-gray-700" />
      <div className="grid gap-2">
          <Link href="/wish" className="flex items-center justify-between p-2 rounded-md hover:bg-gray-800 transition-colors">
              <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Wishlist</span>
              </div>
              <span className="text-sm text-gray-400">({wishlist.length})</span>
          </Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition-colors w-full"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button>
      </div>
      <SheetFooter className="mt-auto pt-4">
          <Button variant="destructive" className="w-full flex items-center gap-2">
              <LogOut className="h-5 w-5" />
              <span>Log Out</span>
          </Button>
      </SheetFooter>
    </SheetContent>
  );
}

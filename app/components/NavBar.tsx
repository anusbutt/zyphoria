"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulate authentication state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black text-white backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" className="text-white" size="icon">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-black text-white">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Zyphoria
                </Link>
                <Link href="/shop" onClick={() => setIsOpen(false)}
                className="hover:text-gray-300"
                >Shop</Link>
                <Link href="/new-arrivals" onClick={() => setIsOpen(false)}
                 className="hover:text-gray-300"
                >New Arrivals</Link>
                <Link href="/bestsellers" onClick={() => setIsOpen(false)}
                 className="hover:text-gray-300"
                >Bestsellers</Link>
                <Link href="/brands" onClick={() => setIsOpen(false)}
                 className="hover:text-gray-300"
                >Brands</Link>
                <Link href="/about" onClick={() => setIsOpen(false)}
                 className="hover:text-gray-300"
                >About Us</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="hidden md:flex items-center gap-2 text-xl font-bold ml-4">
            Zyphoria
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/shop" className={navigationMenuTriggerStyle()}>
                Shop
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/new-arrivals" className={navigationMenuTriggerStyle()}>
                New Arrivals
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/bestsellers" className={navigationMenuTriggerStyle()}>
                Bestsellers
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/brands" className={navigationMenuTriggerStyle()}>
                Brands
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" className={navigationMenuTriggerStyle()}>
                About Us
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <SearchBar />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white" size="icon">
                <User className="h-6 w-6" />
                <span className="sr-only">User account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black text-white">
              {isAuthenticated ? (
                <>
                  <DropdownMenuItem>
                    <Link href="/profile" className="w-full">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/orders" className="w-full">Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsAuthenticated(false)}>Log out</DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem>
                    <Link href="/login" className="w-full">Sign In</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/login" className="w-full">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/login" className="w-full">Orders</Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-white" size="icon">
                <ShoppingBag className="h-6 w-6" />
                <span className="sr-only">Shopping cart</span>
              </Button>
            </SheetTrigger>
            <Sidebar />
          </Sheet>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bell, Gift, HelpCircle } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-white text-black py-2">
      <div className="container flex items-center justify-between h-6">
        <div className="flex items-center gap-4 text-sm">
          <Link href="/help" className="hover:underline flex items-center gap-1">
            <HelpCircle className="h-4 w-4" /> Help & FAQs
          </Link>
          <Link href="/offers" className="hover:underline flex items-center gap-1">
            <Gift className="h-4 w-4" /> Special Offers
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <span className="text-sm">Free shipping on orders over $50</span>
        </div>
      </div>
    </div>
  );
}
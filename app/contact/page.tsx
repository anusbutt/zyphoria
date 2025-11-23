"use client";

import Footer from "@/app/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"; // Assuming Textarea component exists or needs to be created
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-background py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Contact Us</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Have a question or need assistance? Reach out to us using the form below, and we&apos;ll get back to you as soon as possible.
          </p>

          <div className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-md">
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="Subject of your inquiry" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                {/* Placeholder for ShadcnUI Textarea - assuming it's available or will be added */}
                <Textarea id="message" placeholder="Your message..." rows={5} />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

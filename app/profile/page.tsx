"use client";

import Footer from "@/app/components/Footer";

export default function ProfilePage() {
  return (
    <main>
      <section className="bg-background py-12 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">User Profile</h2>
          <p className="text-muted-foreground">This is your profile page. More details coming soon!</p>
          {/* Add more profile details and options here */}
        </div>
      </section>
      <Footer />
    </main>
  );
}

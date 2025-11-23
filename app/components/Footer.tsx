import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Zyphoria</h2>
            <p className="text-gray-400">
              Discover your signature scent with our exclusive collection of perfumes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/help" className="hover:text-primary transition-colors">Help & FAQs</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors"><Facebook /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Twitter /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Instagram /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Linkedin /></Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-2">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 rounded-r-none" />
              <Button type="submit" className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Zyphoria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

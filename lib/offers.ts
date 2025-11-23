export interface SpecialOffer {
  id: number;
  title: string;
  description: string;
  discountPercentage: number;
  validUntil: string; // ISO date string, e.g., '2026-01-31T23:59:59Z'
  image: string; // Path to product image
  slug: string; // Product slug for linking
}

export const specialOffers: SpecialOffer[] = [
  {
    id: 1,
    title: "Summer Scent Sale!",
    description: "Refresh your collection with our invigorating summer fragrances. Limited time only!",
    discountPercentage: 20,
    validUntil: "2025-08-31T23:59:59Z",
    image: "/images/aqua_pura.png",
    slug: "aqua-pura",
  },
  {
    id: 2,
    title: "Winter Warmth Collection",
    description: "Cozy up with our rich and warm winter scents. Perfect for the holidays.",
    discountPercentage: 15,
    validUntil: "2025-12-25T23:59:59Z",
    image: "/images/midnight_bloom.png",
    slug: "midnight-bloom",
  },
  {
    id: 3,
    title: "Luxury Fragrance Event",
    description: "Indulge in premium perfumes at exclusive prices. Elevate your essence.",
    discountPercentage: 25,
    validUntil: "2025-11-30T23:59:59Z",
    image: "/images/velvet_grace.png",
    slug: "velvet-grace",
  },
  {
    id: 4,
    title: "New Customer Welcome Offer",
    description: "10% off your first purchase! Discover your new signature scent with us.",
    discountPercentage: 10,
    validUntil: "2026-03-31T23:59:59Z",
    image: "/images/aurielle.png",
    slug: "aurielle",
  },
];

export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  price: number;
  category: string;
  tags?: string[];
  expected?: string; // Add this line
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Aurielle",
    slug: "aurielle",
    image: "/images/aurielle.png",
    description: "A captivating fragrance with floral notes.",
    price: 85.00,
    category: "Women's Fragrance",
    tags: ["floral", "sweet", "elegant"],
  },
  {
    id: 2,
    name: "Cendre",
    slug: "cendre",
    image: "/images/cendre.png",
    description: "An enchanting scent with woody undertones.",
    price: 95.00,
    category: "Men's Fragrance",
    tags: ["woody", "spicy", "mysterious"],
  },
  {
    id: 3,
    name: "Europhia Bloom",
    slug: "europhia-bloom",
    image: "/images/europhia_bloom.png",
    description: "A vibrant fragrance that captures the essence of blooming flowers.",
    price: 110.00,
    category: "Women's Fragrance",
    tags: ["vibrant", "fresh", "floral"],
  },
  {
    id: 4,
    name: "Gentile",
    slug: "gentile",
    image: "/images/gentile.png",
    description: "A gentle and soothing fragrance for everyday wear.",
    price: 70.00,
    category: "Men's Fragrance",
    tags: ["gentle", "fresh", "clean"],
  },
  {
    id: 5,
    name: "Horizon",
    slug: "horizon",
    image: "/images/horizon.png",
    description: "An adventurous scent that evokes the feeling of open horizons.",
    price: 120.00,
    category: "Unisex Fragrance",
    tags: ["adventurous", "fresh", "citrus"],
  },
  {
    id: 6,
    name: "Lumen",
    slug: "lumen",
    image: "/images/lumen.png",
    description: "A radiant fragrance that illuminates your senses.",
    price: 100.00,
    category: "Unisex Fragrance",
    tags: ["radiant", "bright", "modern"],
  },
  {
    id: 7,
    name: "Savior",
    slug: "savior",
    image: "/images/savior.png",
    description: "A powerful and confident fragrance for the modern individual.",
    price: 130.00,
    category: "Men's Fragrance",
    tags: ["powerful", "confident", "bold"],
  },
  {
    id: 8,
    name: "Velencia",
    slug: "velencia",
    image: "/images/velencia.png",
    description: "An elegant fragrance with a touch of sophistication.",
    price: 90.00,
    category: "Women's Fragrance",
    tags: ["elegant", "sophisticated", "classic"],
  },
  {
    id: 9,
    name: "Velvet Grace",
    slug: "velvet-grace",
    image: "/images/velvet_grace.png",
    description: "A luxurious fragrance that embodies grace and charm.",
    price: 115.00,
    category: "Women's Fragrance",
    tags: ["luxurious", "charming", "velvet"],
  },
  {
    id: 10,
    name: "Zero Hour",
    slug: "zero-hour",
    image: "/images/zero_hour.png",
    description: "An intense and mysterious fragrance for special occasions.",
    price: 140.00,
    category: "Men's Fragrance",
    tags: ["intense", "mysterious", "oud"],
  },
];

export const getProductBySlug = (slug: string) => {
  return allProducts.find(product => product.slug === slug);
};

export const getProductById = (id: number) => {
  return allProducts.find(product => product.id === id);
};

export const featuredProductNames = ["Zero Hour", "Aurielle", "Horizon", "Gentile"];
export const featuredProducts = allProducts.filter(product => featuredProductNames.includes(product.name));

export const bestSellerProductNames = ["Aurielle", "Zero Hour", "Europhia Bloom", "Savior"];
export const bestSellerProducts = allProducts.filter(product => bestSellerProductNames.includes(product.name));

export const menProductNames = ["Gentile", "Savior", "Zero Hour", "Cendre"];
export const menProducts = allProducts.filter(product => menProductNames.includes(product.name));

export const womenProductNames = ["Aurielle", "Europhia Bloom", "Velvet Grace", "Velencia"];
export const womenProducts = allProducts.filter(product => womenProductNames.includes(product.name));

export const unisexProductNames = ["Lumen", "Horizon"];
export const unisexProducts = allProducts.filter(product => unisexProductNames.includes(product.name));

export const newArrivalProducts: Product[] = [
  {
    id: 11,
    name: "Aqua Pura",
    slug: "aqua-pura",
    image: "/images/aqua_pura.png",
    description: "A fresh and clean aquatic fragrance, perfect for a new beginning.",
    expected: "Next Week",
    price: 99.00,
    category: "New Arrivals",
    tags: ["fresh", "aquatic", "clean"],
  },
  {
    id: 12,
    name: "Midnight Bloom",
    slug: "midnight-bloom",
    image: "/images/midnight_bloom.png",
    description: "An alluring floral scent with mysterious night-blooming notes.",
    expected: "Next Month",
    price: 105.00,
    category: "New Arrivals",
    tags: ["floral", "mysterious", "night"],
  },
];

export const topProduct = {
  id: 10,
  name: "Zero Hour",
  slug: "zero-hour",
  image: "/images/zero_hour.png",
  description: "An intense and mysterious fragrance for special occasions, Zero Hour is a captivating scent that leaves a lasting impression. Its complex blend of notes creates a sophisticated and alluring aroma.",
  notes: "Top notes of bergamot and black pepper, heart notes of leather and tobacco, and base notes of amber and musk.",
  price: 140.00,
  category: "Men's Fragrance",
  tags: ["intense", "mysterious", "oud"],
};

import Fuse from "fuse.js";
import { allProducts, Product } from "./products";

const fuseOptions = {
  keys: ["name", "description", "category", "tags"],
  threshold: 0.3, // Adjust this value to control fuzzy matching strictness (0.0 = exact match, 1.0 = any match)
  includeScore: true,
};

const fuse = new Fuse(allProducts, fuseOptions);

export function searchProductsFuzzy(query: string): Product[] {
  if (!query.trim()) {
    return [];
  }
  const results = fuse.search(query);
  return results.map((result) => result.item);
}

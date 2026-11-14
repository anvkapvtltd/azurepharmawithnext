import data from "./products.json";

export type Benefit = { title: string; description: string };
export type Ingredient = { name: string; description: string };
export type ListSection = { heading: string; intro?: string; items: string[] };

export type Product = {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  type: string;
  thumbnail: string;
  images: string[];
  forms: string[];
  shortDescription: string;
  longDescription: { title: string; subtitle: string | null; paragraphs: string[] };
  benefits: { heading: string; items: Benefit[] } | null;
  ingredients: { heading: string; items: Ingredient[] } | null;
  clinicalRelevance: ListSection | null;
  availableForms: ListSection | null;
  highlights: ListSection | null;
  targetAudience: string | null;
  whoMayBenefit: { heading: string; text: string } | null;
  disclaimer: string | null;
};

const products = data as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}

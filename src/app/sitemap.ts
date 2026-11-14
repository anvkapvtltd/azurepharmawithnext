import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/products";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/products", "/why-azure", "/career", "/contact"];
  const now = new Date();
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: now, priority: p === "" ? 1 : 0.8 })),
    ...getAllSlugs().map((s) => ({ url: `${SITE_URL}/products/${s}`, lastModified: now, priority: 0.9 })),
  ];
}

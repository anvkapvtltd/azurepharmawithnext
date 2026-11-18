import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Home, ChevronRight, ArrowUpRight } from "lucide-react";
import { getAllProducts } from "@/data/products";
import { getTheme } from "@/data/productTheme";
import InquirySection from "@/components/InquirySection";

export const metadata: Metadata = {
  title: "Our Products | Azure Drugs & Pharmaceuticals",
  description: "Explore Azure's pharmaceutical and nutraceutical product range.",
};

export default function ProductsPage() {
  const products = getAllProducts();
  return (
    <>
      <div className="border-b border-slate-200 bg-blue-50/60">
        <nav className="mx-auto flex max-w-[90%] items-center gap-1.5 px-4 py-3 text-xs text-slate-500 sm:text-sm">
          <Link href="/" className="inline-flex items-center gap-1 hover:text-brand"><Home size={14} /> Home</Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-brand">Products</span>
        </nav>
      </div>

      <section className="bg-slate-50 py-6 md:py-16">
        <div className="mx-auto max-w-[90%] md:px-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-accent">Clinical Formulations Catalog</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Our Products</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Explore our flagship pharmaceutical and nutraceutical lines formulated for therapeutic efficacy, maximum bioavailability, and institutional quality.
          </p>

          <div className="mt-8 grid md:gap-5 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                <div className="relative aspect-square bg-white">
                  <span className={`absolute left-3 top-3 z-10 rounded px-2 py-0.5 text-[9px] font-bold uppercase ${getTheme(p.slug).badge}`}>{p.category}</span>
                  <Image src={p.thumbnail} alt={p.name} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-contain p-4 transition group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
                  <h2 className="text-xl font-bold text-slate-900">{p.name}</h2>
                  <p className={`mt-1 text-sm font-medium ${getTheme(p.slug).text}`}>{p.tagline}</p>
                  <p className="mt-2 flex-1 line-clamp-3 text-sm text-slate-600">{p.shortDescription}</p>
                  <span className="mt-5 flex items-center justify-center gap-1.5 rounded-lg bg-blue-50 py-2.5 text-xs font-semibold text-brand transition group-hover:bg-brand group-hover:text-white">
                    View Product Details <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InquirySection />
    </>
  );
}

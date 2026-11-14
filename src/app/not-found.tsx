import Link from "next/link";
import { Home, Package, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-gradient-to-b from-blue-50/80 to-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-7xl font-bold text-brand md:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">Page Not Found</h1>
        <p className="mt-3 text-slate-600">The page you are looking for doesn&apos;t exist or may have been moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
            <Home size={16} /> Back to Home
          </Link>
          <Link href="/products" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50">
            <Package size={16} /> Our Products
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
            <Phone size={16} /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

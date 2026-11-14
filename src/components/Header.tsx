"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Career", href: "/career" },
  { label: "Why Azure", href: "/why-azure" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brand-dark text-white text-xs">
        <div className="mx-auto max-w-7xl px-4 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="tel:+918375001001" className="flex items-center gap-1.5 hover:text-blue-200">
              <Phone size={13} /> +91 8375001001
            </a>
            <a href="mailto:info@azurepharma.in" className="hidden sm:flex items-center gap-1.5 hover:text-blue-200">
              <Mail size={13} /> info@azurepharma.in
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <Image src="/assets/logo.png" alt="Azure Drugs & Pharmaceuticals" width={300} height={136} priority className="h-14 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {nav.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className={`hover:text-brand ${isActive(n.href) ? "text-brand font-semibold" : ""}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+918375001001" className="rounded-md bg-brand px-4 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark">
              Call Now
            </a>
            <Link href="/#contact" className="rounded-md bg-accent px-4 py-2.5 text-xs font-semibold text-white hover:bg-red-700">
              Inquire / Contact Us
            </Link>
          </div>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 flex flex-col text-sm">
            {nav.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-2.5 ${isActive(n.href) ? "bg-blue-50 text-brand font-semibold" : "text-slate-700"}`}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href="tel:+918375001001" className="rounded-md bg-brand px-4 py-2.5 text-center text-white font-semibold">Call Now</a>
              <Link href="/contact" onClick={() => setOpen(false)} className="rounded-md bg-accent px-4 py-2.5 text-center text-white font-semibold">
                Inquire Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

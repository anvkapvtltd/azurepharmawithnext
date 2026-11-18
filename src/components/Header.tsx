"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone, Mail, Menu, X, ChevronRight } from "lucide-react";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Career", href: "/career" },
  // { label: "Why Azure", href: "/why-azure" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);
  // Lock page scroll while the drawer is open, and close it on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brand-dark text-white text-xs">
        <div className="mx-auto max-w-[90%] px-4 h-9 flex items-center justify-between">
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
        <div className="mx-auto max-w-[90%] px-4 h-20 flex items-center justify-between">
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
          <button className="lg:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile drawer — kept outside the backdrop-blur bar, since backdrop-filter would trap `fixed` children. */}
      <div className={`lg:hidden fixed inset-0 z-60 ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />

        {/* Panel */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          className={`absolute right-0 top-0 h-dvh w-[82%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Panel header */}
          <div className="relative overflow-hidden bg-linear-to-br from-brand-dark via-brand to-brand-dark px-5 pt-5 pb-6 text-white">
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-12 right-16 h-24 w-24 rounded-full bg-white/5" />
            <div className="relative flex items-center justify-between">
              <div className="rounded-lg bg-white px-3 py-1.5">
                <Image src="/assets/logo.png" alt="Azure Drugs & Pharmaceuticals" width={300} height={136} className="h-9 w-auto" />
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/15 hover:bg-white/25 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <p className="relative mt-4 text-xs uppercase tracking-[0.2em] text-blue-100">Menu</p>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <ul className="flex flex-col gap-1">
              {nav.map((n, i) => {
                const active = isActive(n.href);
                return (
                  <li
                    key={n.label}
                    style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
                    className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
                  >
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors ${
                        active ? "bg-blue-50 text-brand font-semibold" : "text-slate-700 hover:bg-slate-50 hover:text-brand"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-accent" : "bg-slate-300 group-hover:bg-brand"}`} />
                        {n.label}
                      </span>
                      <ChevronRight size={18} className={`transition-transform group-hover:translate-x-1 ${active ? "text-brand" : "text-slate-400"}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer: contact + CTAs */}
          <div
            style={{ transitionDelay: open ? `${150 + nav.length * 60}ms` : "0ms" }}
            className={`border-t border-slate-200 bg-slate-50 px-5 py-5 transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            <div className="space-y-2.5 text-sm text-slate-600">
              <a href="tel:+918375001001" className="flex items-center gap-2.5 hover:text-brand">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-100 text-brand"><Phone size={14} /></span>
                +91 8375001001
              </a>
              <a href="mailto:info@azurepharma.in" className="flex items-center gap-2.5 hover:text-brand">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-100 text-brand"><Mail size={14} /></span>
                info@azurepharma.in
              </a>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <a href="tel:+918375001001" className="rounded-lg bg-brand px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-brand/30 hover:bg-brand-dark transition-colors">
                Call Now
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-accent/30 hover:bg-red-700 transition-colors">
                Inquire Now
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}

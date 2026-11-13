import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const links = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  // { label: "Specialities", href: "#specialities" },
  { label: "Business", href: "#business" },
  { label: "Why Azure", href: "#why-azure" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="inline-block rounded-lg p-3">
            <Image src="/assets/logo.png" alt="Azure Drugs & Pharmaceuticals" width={400} height={200} className="h-16 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Quality healthcare products for hospitals, institutions and patients — with efficacy and safety at the core.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-white">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm">
            {["Azure-D3", "BoneVita", "Vitamax Women", "Vitamax Men"].map((p) => (
              <li key={p}><a href="#products" className="hover:text-white">{p}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" /><a href="tel:+918375001001" className="hover:text-white">+91 8375001001</a></li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" /><a href="mailto:info@azurepharma.in" className="hover:text-white">info@azurepharma.in</a></li>
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Plot No. 231, Phase IV, Udyog Vihar, Gurugram, Haryana - 122015, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} Azure Drugs &amp; Pharmaceuticals. All rights reserved.
      </div>
    </footer>
  );
}

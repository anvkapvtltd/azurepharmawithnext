import Link from "next/link";
import type { Metadata } from "next";
import {
  Home, ChevronRight, MapPin, Phone, Mail, Clock, MessageCircle, Building2, Briefcase,
  Package, Globe2, ArrowRight, ChevronDown, Navigation, BadgeCheck, Headset,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Azure Drugs & Pharmaceuticals",
  description: "Get in touch with Azure Drugs & Pharmaceuticals – corporate office in Gurugram, phone, email and inquiry form.",
};

const ADDRESS = "Plot No. 231, Phase IV, Udyog Vihar, Gurugram, Haryana - 122015, India";
const MAP_Q = encodeURIComponent("Plot No. 231, Phase IV, Udyog Vihar, Gurugram, Haryana 122015");

const cards = [
  { icon: Phone, title: "Call Us", lines: ["+91 8375001001"], href: "tel:+918375001001", cta: "Call Now", c: "bg-blue-50 text-brand" },
  { icon: MessageCircle, title: "WhatsApp", lines: ["+91 8375001001"], href: "https://wa.me/918375001001", cta: "Chat on WhatsApp", c: "bg-emerald-50 text-emerald-600" },
  { icon: Mail, title: "Email Us", lines: ["info@azurepharma.in"], href: "mailto:info@azurepharma.in", cta: "Send Email", c: "bg-indigo-50 text-indigo-600" },
  { icon: Clock, title: "Working Hours", lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"], c: "bg-red-50 text-accent" },
];

const departments = [
  { icon: Package, title: "Product & Distribution", text: "Product information, PCD franchise, pharmacy distribution and stockist inquiries.", href: "/products", cta: "View Products" },
  { icon: Building2, title: "Institutional & Tenders", text: "Hospital supplies, critical care, government and institutional tender queries.", href: "/why-azure", cta: "Why Azure" },
  { icon: Globe2, title: "International Business", text: "Export, joint ventures, contract manufacturing, API and bulk supply partnerships.", href: "/about", cta: "About Us" },
  { icon: Briefcase, title: "Careers & HR", text: "Job openings, resume submission and recruitment process queries.", href: "/career", cta: "View Careers" },
];

const faqs = [
  { q: "How quickly will I get a response?", a: "Our team responds to all inquiries within 24 hours on working days (Monday to Saturday)." },
  { q: "Can I request product documents like CoA or dossiers?", a: "Yes. Select “Product Information” or the relevant subject in the form and mention the documents you need. Our team will share them after verifying your requirement." },
  { q: "Do you offer PCD franchise or distribution opportunities?", a: "Yes. Choose “Distribution / PCD Franchise” as the subject and share your location and current business details." },
  { q: "I want to apply for a job. Should I use this form?", a: "For job applications, please use our Careers page so you can attach your resume and apply for a specific position." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/80 to-white pb-10 pt-6 md:pb-14">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-brand"><Home size={13} /> Home</Link>
            <ChevronRight size={13} />
            <span className="font-semibold text-brand">Contact Us</span>
          </nav>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
              <BadgeCheck size={13} /> We&apos;re Here to Help
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Get in Touch with <span className="text-brand">Azure</span>
            </h1>
            <p className="mt-4 leading-relaxed text-slate-600 md:text-lg">
              Have a question about our products, distribution, institutional supply or partnership? Reach out to us – our team
              responds within 24 hours.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <div key={c.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${c.c}`}><c.icon size={22} /></span>
                <h3 className="mt-4 font-semibold text-slate-900">{c.title}</h3>
                <div className="mt-1 flex-1 text-sm text-slate-600">
                  {c.lines.map((l) => <p key={l}>{l}</p>)}
                </div>
                {c.href && (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
                    {c.cta} <ArrowRight size={15} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Office */}
      <section className="py-10 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-12">
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 md:p-10 lg:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-widest text-accent">Send a Message</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">How Can We Help You?</h2>
            <p className="mt-2 mb-7 text-sm text-slate-500">Fill in the form below and the right team will get back to you.</p>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-[#1e2a44] p-6 text-white shadow-xl md:p-8">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-200"><Building2 size={15} /> Corporate Office</p>
              <h3 className="mt-3 text-2xl font-bold">Azure Drugs &amp; Pharmaceuticals</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-blue-200"><MapPin size={18} /></span><div><p className="font-semibold">Address</p><p className="mt-0.5 text-slate-300">{ADDRESS}</p></div></li>
                <li className="flex gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-blue-200"><Phone size={18} /></span><div><p className="font-semibold">Telephone</p><a href="tel:+918375001001" className="mt-0.5 block text-blue-200 hover:underline">+91 8375001001</a></div></li>
                <li className="flex gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-blue-200"><Mail size={18} /></span><div><p className="font-semibold">Email</p><a href="mailto:info@azurepharma.in" className="mt-0.5 block text-blue-200 hover:underline">info@azurepharma.in</a></div></li>
                <li className="flex gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-blue-200"><Clock size={18} /></span><div><p className="font-semibold">Office Hours</p><p className="mt-0.5 text-slate-300">Monday – Saturday: 9:00 AM – 6:00 PM IST</p></div></li>
              </ul>
              <div className="mt-6 flex items-center gap-2 border-t border-white/15 pt-5 text-xs text-slate-300">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" /> Institutional Desk Active (Mon – Sat)
              </div>
            </div>

            <div className="flex flex-1 flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
              <iframe
                title="Azure Drugs & Pharmaceuticals location"
                src={`https://www.google.com/maps?q=${MAP_Q}&output=embed`}
                className="h-64 w-full flex-1 border-0 lg:min-h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_Q}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border-t border-slate-100 py-3.5 text-sm font-semibold text-brand hover:bg-blue-50">
                <Navigation size={16} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand">Reach the Right Team</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">What Are You Looking For?</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((d) => (
              <Link key={d.title} href={d.href} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-brand transition group-hover:bg-brand group-hover:text-white"><d.icon size={20} /></span>
                <h3 className="mt-4 font-semibold text-slate-900">{d.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{d.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">{d.cta} <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">Quick Answers</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl bg-white p-5 ring-1 ring-slate-200 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900">
                  {f.q}
                  <ChevronDown size={18} className="shrink-0 text-slate-500 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-blue-50 p-6 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <Headset size={26} className="shrink-0 text-brand" />
              <div>
                <p className="font-semibold text-slate-900">Need an urgent answer?</p>
                <p className="text-sm text-slate-600">Call our desk directly during office hours.</p>
              </div>
            </div>
            <a href="tel:+918375001001" className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
              <Phone size={16} /> +91 8375001001
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

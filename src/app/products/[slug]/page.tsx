import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Home, ChevronRight, ShieldCheck, FlaskConical, FileText, ClipboardList,
  Phone, FileDown, Pill, Users, Layers, Info, ArrowRight, BadgeCheck,
} from "lucide-react";
import { getAllProducts, getAllSlugs, getProductBySlug } from "@/data/products";
import { getTheme } from "@/data/productTheme";
import ProductGallery from "@/components/product/ProductGallery";
import ProductTabs from "@/components/product/ProductTabs";
import InquirySection from "@/components/InquirySection";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return { title: "Product not found" };
  return {
    title: `${p.name} – ${p.tagline} | Azure Drugs & Pharmaceuticals`,
    description: p.shortDescription,
    openGraph: { images: [p.thumbnail] },
  };
}

export default async function ProductDetailPage({ params }: Params) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) notFound();

  const theme = getTheme(p.slug);
  const others = getAllProducts().filter((o) => o.slug !== p.slug);
  const [featured, ...rest] = others;

  const specs = [
    { icon: Layers, label: "Category", value: p.category },
    { icon: FlaskConical, label: "Composition", value: p.type },
    { icon: Pill, label: "Dosage Form", value: p.forms.join(" / ") },
    { icon: Users, label: "Designed For", value: p.targetAudience ?? "Adults (as advised by physician)" },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-blue-50/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-3 text-xs sm:text-sm">
          <nav className="flex flex-wrap items-center gap-1.5 text-slate-500">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-brand"><Home size={14} /> Home</Link>
            <ChevronRight size={14} />
            <Link href="/products" className="hover:text-brand">Products</Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-brand">{p.name}</span>
          </nav>
          <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${p.category === "Rx Prescription" ? "bg-accent text-white" : "bg-emerald-600 text-white"}`}>
            {p.category}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className={`bg-gradient-to-b ${theme.gradient} py-10 md:py-14`}>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ProductGallery images={p.images} name={p.name} ring={theme.ring} label={p.tagline.split(" ").slice(0, 4).join(" ")} labelCls={theme.badge} />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { icon: ShieldCheck, t: "WHO-GMP", s: "Validated Units" },
                { icon: FlaskConical, t: "Quality Tested", s: "Batch Assured" },
                { icon: FileText, t: "Dossier", s: "On Request" },
              ].map((b) => (
                <div key={b.t} className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                  <b.icon size={18} className="mx-auto text-brand" />
                  <p className="mt-1.5 text-xs font-semibold text-slate-900">{b.t}</p>
                  <p className="text-[10px] text-slate-500">{b.s}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className={`rounded-md px-2.5 py-1 font-bold uppercase tracking-wider ${theme.badge}`}>{p.category}</span>
              <span className="text-slate-500">• {p.forms.join(" & ")}</span>
            </div>
            <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              {p.name}<span className="align-super text-lg">™</span>
            </h1>
            <p className={`mt-2 text-lg font-medium ${theme.text}`}>{p.tagline}</p>
            <p className="mt-4 leading-relaxed text-slate-600">{p.shortDescription}</p>

            {p.benefits && (
              <div className="mt-5 flex flex-wrap gap-2">
                {p.benefits.items.slice(0, 4).map((b) => (
                  <span key={b.title} className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                    <BadgeCheck size={14} className="text-brand" /> {b.title}
                  </span>
                ))}
              </div>
            )}

            {/* Specs */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <p className="flex items-center gap-2 font-semibold text-slate-900"><ClipboardList size={18} className="text-brand" /> Product Specifications</p>
              <dl className="mt-4 grid gap-x-6 sm:grid-cols-2">
                {specs.map((s) => (
                  <div key={s.label} className="border-b border-slate-100 py-3">
                    <dt className="text-[11px] uppercase tracking-wider text-slate-500">{s.label}</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-slate-900">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Inquiry CTA */}
            <div className="mt-5 rounded-2xl bg-blue-100/70 p-5 sm:p-6">
              <p className="flex items-center gap-2 font-semibold text-slate-900"><FileText size={18} className="text-brand" /> Institutional &amp; Distribution Inquiries</p>
              <p className="mt-1 text-sm text-slate-600">Supplied for Hospital Formularies, Government Tenders, PCD Franchises &amp; Export.</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
                  <FileText size={16} /> Request Quotation &amp; Samples
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50">
                  <FileDown size={16} /> Product Dossier
                </a>
                <a href="tel:+918375001001" className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
                  <Phone size={16} /> Call +91 8375001001
                </a>
              </div>
            </div>

            {p.disclaimer && (
              <p className="mt-4 flex items-start gap-2 text-xs text-slate-500"><Info size={14} className="mt-0.5 shrink-0" /> {p.disclaimer}</p>
            )}
          </div>
        </div>
      </section>

      {/* Highlight strip */}
      <section className={`border-y border-slate-200 ${theme.softBg}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white shadow-sm"><Pill className={theme.text} /></span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Azure Formulation Science</p>
              <p className="text-xl font-semibold text-slate-900">{p.longDescription.subtitle ?? p.tagline}</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div><p className="text-xl font-bold text-brand">{p.forms.length}</p><p className="text-xs text-slate-500">Dosage Form{p.forms.length > 1 ? "s" : ""}</p></div>
            <div><p className="text-xl font-bold text-brand">{(p.benefits?.items.length ?? p.ingredients?.items.length) || 0}</p><p className="text-xs text-slate-500">{p.benefits ? "Key Benefits" : "Key Ingredients"}</p></div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-600">
            <span className="h-2 w-2 rounded-full bg-brand" /> Product Information
          </p>
          <h2 className="mt-2 mb-6 text-2xl font-bold text-slate-900 md:text-3xl">Detailed Product Reference</h2>
          <ProductTabs product={p} />
        </div>
      </section>

      {/* Other products */}
      <section className="bg-blue-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-600">Explore More</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">Complete Azure Wellness Portfolio</h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">View All Products <ArrowRight size={16} /></Link>
          </div>

          {featured && (
            <Link href={`/products/${featured.slug}`} className="group mt-8 grid gap-6 rounded-3xl bg-white p-5 shadow-sm transition hover:shadow-lg sm:p-8 md:grid-cols-12 md:items-center">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50 md:col-span-4">
                <Image src={featured.thumbnail} alt={featured.name} fill sizes="(min-width:768px) 30vw, 100vw" className="object-contain p-4 transition group-hover:scale-105" />
              </div>
              <div className="md:col-span-8">
                <span className={`rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${getTheme(featured.slug).badge}`}>{featured.category}</span>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">{featured.name}™ <span className="text-base font-normal text-slate-500">| {featured.tagline}</span></h3>
                <p className="mt-3 leading-relaxed text-slate-600">{featured.shortDescription}</p>
                <span className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white">View {featured.name} Details <ArrowRight size={16} /></span>
              </div>
            </Link>
          )}

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {rest.map((o) => (
              <Link key={o.slug} href={`/products/${o.slug}`} className="group flex flex-col gap-5 rounded-3xl bg-white p-5 shadow-sm transition hover:shadow-lg sm:flex-row sm:items-center">
                <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl bg-slate-50 sm:w-36">
                  <Image src={o.thumbnail} alt={o.name} fill sizes="(min-width:640px) 150px, 100vw" className="object-contain p-2 transition group-hover:scale-105" />
                </div>
                <div>
                  <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getTheme(o.slug).badge}`}>{o.category}</span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{o.name}™</h3>
                  <p className="mt-1 line-clamp-3 text-sm text-slate-600">{o.shortDescription}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">View Details <ChevronRight size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InquirySection defaultProduct={p.name} />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Home, ChevronRight, BadgeCheck, ArrowDown, FileText, Building2, ShieldCheck, Globe2,
  ClipboardCheck, Landmark, Hospital, FlaskConical, Quote, CheckCircle2, Eye, Target,
  Microscope, Globe, HeartHandshake, Award, Scale, Heart, TrendingUp, Pill, Layers,
  ArrowLeftRight, Factory, Beaker, BriefcaseMedical, MapPin, Phone, Mail, Clock, Download,
  Truck, Users, Send, FileCheck2, BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Azure Drugs & Pharmaceuticals",
  description:
    "Azure Drugs & Pharmaceuticals – part of an Indian diversified business group with presence in hospitals and healthcare services.",
};

function Eyebrow({ children, className = "text-brand" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[11px] font-bold uppercase tracking-widest ${className}`}>{children}</p>;
}

const stats = [
  { icon: Building2, value: "1 Group", label: "Diversified Healthcare & Tertiary Services" },
  { icon: ShieldCheck, value: "WHO-GMP", label: "cGMP Validated Manufacturing Lines" },
  { icon: Globe2, value: "7+ Regions", label: "Global Regulatory Supply Horizons" },
  { icon: ClipboardCheck, value: "100% Audit", label: "Pharmacopeial Assays (IP, BP, USP)", red: true },
];

const governance = [
  "Quality in Every Product ",
  "Integrity in Every Partnership",
  "Excellence in Every Process",
  "Affordability in Healthcare"
];

const vmq = [
  { icon: Eye, eyebrow: "PRODUCT EXCELLENCE", title: "Pharmaceutical Expertise", text: "“Focused on pharmaceutical formulations, branded generics, prescription products, and diverse healthcare supply requirements.”", foot: "Quality-Driven Solutions", footIcon: Globe, c: "bg-blue-50 text-brand" },
  { icon: Target, eyebrow: "STRATEGIC COLLABORATION", title: "Building Strong Partnerships", text: "“Developing long-term relationships with pharmaceutical companies, hospitals, distributors, and institutional partners.”", foot: "Trust & Collaboration", footIcon: HeartHandshake, c: "bg-emerald-50 text-emerald-600" },
  { icon: Microscope, eyebrow: "BUSINESS EXPANSION", title: "Expanding Market Opportunities", text: "“Strengthening domestic and international business opportunities through flexible business models and market-focused strategies.”", foot: "Growth & Market Reach", footIcon: BookOpen, c: "bg-indigo-50 text-indigo-600" },
];

const values = [
  { icon: Scale, title: "Integrity & Ethics", text: "Upholding transparency, ethical business practices, and regulatory compliance across our pharmaceutical operations, institutional relationships, and commercial activities.", foot: "Uncompromising Integrity", c: "text-brand bg-blue-50" },
  { icon: Heart, title: "Patient-Centric Approach", text: "Keeping patient well-being at the forefront by prioritizing product quality, therapeutic effectiveness, safety, and access to affordable healthcare.", foot: "Patient-First Approach", c: "text-accent bg-red-50" },
  { icon: TrendingUp, title: "Continuous Improvement", text: "Continuously enhancing our business processes, operational efficiency, product standards, and capabilities to meet evolving pharmaceutical and healthcare needs.", foot: "Progress Through Innovation", c: "text-brand bg-blue-50" },
  { icon: BadgeCheck, title: "Quality First", text: "Maintaining a strong commitment to product quality, safety, consistency, and applicable pharmaceutical standards across our business operations.", foot: "Commitment to Quality", c: "text-emerald-600 bg-emerald-50" },
];

const capabilities = [
  { icon: Pill, title: "Finished Formulations", text: "Our portfolio includes critical care injectables, oral solid dosages, IV infusions, oncology products, and specialty formulations designed for diverse therapeutic needs.", points: ["Wide therapeutic coverage", "Global quality compliance", "Ready-to-market formulations", "Custom branding and packaging options"], c: "bg-blue-50 text-brand" },
  { icon: Layers, title: "Semi-Finished Formulations", text: "We provide high-quality semi-finished formulations, including granules, pellets, and bulk intermediates, enabling pharmaceutical companies to optimize their production processes and reduce operational costs.", points: ["Consistent and scalable supply", "High-quality granules and pellets", "Flexible bulk supply options", "Suitable for contract manufacturing and private labeling"], c: "bg-blue-50 text-brand" },
  { icon: ArrowLeftRight, title: "Technology Transfer with API Supply", text: "We offer end-to-end technology transfer solutions integrated with a reliable API supply, ensuring seamless product development and commercialization across global markets.", points: ["Complete process transfer support", "Integrated API sourcing", "Regulatory documentation assistance", "Faster commercialization timelines"], c: "bg-emerald-50 text-emerald-600" },
  { icon: Factory, title: "Contract Manufacturing", text: "Our contract manufacturing services are designed to provide flexible, scalable, and cost-effective production solutions for pharmaceutical companies worldwide.", points: ["WHO-GMP-compliant manufacturing", "High production capacity", "Custom formulation and packaging", "Cost-efficient and reliable solutions"], c: "bg-blue-50 text-brand" },
  { icon: Beaker, title: "API Supplies", text: "We supply a wide range of Active Pharmaceutical Ingredients (APIs) sourced from globally accredited manufacturers.", points: ["Globally sourced, high-quality APIs", "Strong supply chain network", "Competitive pricing", "Reliable and timely delivery"], c: "bg-indigo-50 text-indigo-600" },
  { icon: BriefcaseMedical, title: "Surgical and Disposables", text: "We offer a comprehensive range of surgical products and disposables designed to support hospitals, clinics, and healthcare facilities in delivering safe and efficient patient care.", points: ["High-quality medical disposables", "Infection control solutions", "Reliable hospital supplies", "Designed for safety and efficiency"], c: "bg-red-50 text-accent" },
];

const regions = [
  { name: "Africa", sub: "Francophone & Anglophone" },
  { name: "Southeast Asia", sub: "ASEAN Dossiers" },
  { name: "Gulf / GCC", sub: "Hospital Supplies" },
  { name: "Russia – CIS", sub: "Regulatory Filing" },
  { name: "LATAM", sub: "South America Forces" },
  { name: "Europe", sub: "Contract Supply" },
];

const domestic = [
  { icon: Hospital, title: "Hospital Formularies & Tenders", text: "Direct vendor status across tertiary institutions, government health boards, and autonomous medical centers." },
  { icon: Truck, title: "Nationwide Pharmacy Distribution", text: "Distributing specialized brands including Azure-D3, BoneVita, Vitamax Men, and Vitamax Women across pharmacy chains." },
  { icon: Users, title: "In-Licensing MNC Collaborations", text: "Partnering with multinational innovators for licensed domestic manufacturing and specialized territory launches." },
];

const certs = [
  { icon: ShieldCheck, title: "WHO-GMP", sub: "Manufacturing Standards", c: "bg-blue-50 text-brand" },
  { icon: Award, title: "Global Accreditations", sub: "US-FDA, MHRA, EU-GMP & More", c: "bg-blue-50 text-brand" },
  { icon: FlaskConical, title: "NABL Testing", sub: "Product Equivalency Studies", c: "bg-emerald-50 text-emerald-600" },
  { icon: BookOpen, title: "CTD / eCTD / ACTD ", sub: "Regulatory Dossiers", c: "bg-indigo-50 text-indigo-600" },
  { icon: FileCheck2, title: "Regulatory Registration Support ", sub: "Technical Expertise & Country-Specific Requirements", c: "bg-red-50 text-accent" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/80 to-white pb-14 pt-6 md:pb-10">
        <div className="mx-auto max-w-[90%] px-4">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-brand"><Home size={13} /> Home</Link>
            <ChevronRight size={13} />
            <span className="font-semibold text-slate-800">About Us &amp; Corporate Profile</span>
          </nav>

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                <BadgeCheck size={13} /> INSTITUTIONAL LIFE SCIENCES &amp; PHARMACEUTICAL SOLUTIONS
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
                Advancing Pharmaceutical Excellence, <span className="text-brand">Strengthening Global</span> Healthcare.
              </h1>
              <p className="mt-5 max-w-2xl leading-relaxed text-slate-600">
                Azure Drugs & Pharmaceuticals is part of a diversified Indian business group with interests in hospitals and healthcare services. With expertise across pharmaceutical manufacturing, marketing, and institutional supplies, we are committed to delivering quality-driven healthcare solutions through strong industry partnerships and a focus on operational excellence.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#legacy" className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
                  Corporate Overview <ArrowDown size={16} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50">
                  <FileText size={16} className="text-accent" /> Institutional RFQ
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-xl ring-1 ring-slate-200">
                  <Image src="/assets/aboutus.png" alt="Azure pharmaceutical innovation" width={1000} height={680} priority className="h-auto w-full rounded-2xl" />
                </div>
                <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-lg ring-1 ring-slate-200 sm:-left-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-brand"><Building2 size={20} /></span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Integrated</p>
                    <p className="text-xs text-slate-500">Hospital &amp; Healthcare Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-4 md:p-6">
            {stats.map((s) => (
              <div key={s.value} className="md:border-r md:border-slate-100 md:last:border-r-0 md:pr-4">
                <p className={`flex items-center gap-2 text-xl font-bold ${s.red ? "text-accent" : "text-brand"}`}>
                  <s.icon size={20} /> {s.value}
                </p>
                <p className="mt-1 text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section id="legacy" className="py-5 md:py-5">
        <div className="mx-auto grid max-w-[90%] gap-10 px-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow><span className="inline-flex items-center gap-1.5"><Landmark size={14} /> Corporate Genesis &amp; Heritage</span></Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">A Legacy of Healthcare Leadership & Institutional Trust</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
              <p>
               Azure Drugs & Pharmaceuticals is part of an Indian diversified business group with an established presence in hospitals and healthcare services. Our foundation is built on a broader understanding of healthcare needs, supported by institutional experience and a commitment to pharmaceutical excellence. 

              </p>
              <p>
               With a focus on pharmaceutical manufacturing, marketing, and institutional business, we aim to bridge the gap between evolving healthcare requirements and reliable pharmaceutical solutions. 

              </p>
              <p>
                Our business approach combines experienced leadership, pharmaceutical expertise, and strategic partnerships to serve hospitals, healthcare institutions, distributors, and pharmaceutical partners across domestic and international markets.

              </p>
              <p>
               Driven by our commitment to quality, efficacy, safety, and responsible business practices, we continue to strengthen our capabilities and contribute to the evolving pharmaceutical and healthcare landscape.

              </p>
            </div>
      
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Quote size={64} className="absolute right-5 top-5 text-slate-100" />
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-brand"><Users size={18} /></span>
                <div>
                  <p className="font-semibold text-slate-900">Our Commitment</p>
                  {/* <p className="text-xs text-slate-500">Corporate Governance Council</p> */}
                </div>
              </div>
              <p className="relative mt-5 italic leading-relaxed text-slate-700">
                “At Azure Drugs & Pharmaceuticals, we are committed to supporting the evolving needs of the healthcare industry through quality-driven pharmaceutical solutions, responsible business practices, and lasting partnerships.”

              </p>
              <div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Board of Directors</p>
                  <p className="text-xs text-slate-500">Azure Drugs &amp; Pharmaceuticals</p>
                </div>
                <span className="rounded-md bg-blue-50 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-brand">Institutional</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="flex items-center gap-2 font-semibold text-slate-900"><ShieldCheck size={18} className="text-brand" /> Our Business Principles</p>
              <ul className="mt-4 space-y-3">
                {governance.map((g) => (
                  <li key={g} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" /> {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Creed */}
      <section className="bg-slate-50 py-14 md:py-10">
        <div className="mx-auto max-w-[90%] px-4">
          <div className="text-center">
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Our Strategic Priorities</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">Driving pharmaceutical excellence through quality-focused operations, strategic partnerships, and sustainable business growth. </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {vmq.map((v) => (
              <div key={v.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg">
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${v.c}`}><v.icon size={22} /></span>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-wider text-slate-500">{v.eyebrow}</p>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{v.text}</p>
                <p className="mt-6 inline-flex items-center gap-1.5 border-t border-slate-100 pt-4 text-sm font-semibold text-brand">
                  <v.footIcon size={15} /> {v.foot}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 md:py-10">
        <div className="mx-auto max-w-[90%] px-4">
          <div className="grid gap-4 md:grid-cols-2 md:items-end">
            <div>
              <Eyebrow>Institutional Foundation</Eyebrow>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Our 4 Core Values</h2>
            </div>
            <p className="text-slate-600">The principles that guide our business decisions, shape our partnerships, and strengthen our commitment to pharmaceutical excellence.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${v.c}`}><v.icon size={20} /></span>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-wider text-slate-400">Value 0{i + 1}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{v.text}</p>
                <p className={`mt-5 border-t border-slate-100 pt-4 text-xs font-semibold ${v.c.split(" ")[0]}`}>{v.foot}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-50 py-14 md:py-10">
        <div className="mx-auto max-w-[90%] px-4">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow className="text-accent">MANUFACTURING CAPABILITIES</Eyebrow>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">End-to-End Pharmaceutical Formulation Capabilities</h2>
              <p className="mt-3 text-slate-600">From active pharmaceutical ingredients to finished dosage forms, our capabilities span multiple stages of pharmaceutical formulation, processing, and supply to support diverse business and institutional requirements.</p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
              <FlaskConical size={20} className="text-emerald-600" />
              <div>
                <p className="text-sm font-semibold text-slate-900">GLP Validated QA/QC</p>
                <p className="text-xs text-slate-500">Multi-tier Pharmacopoeial Dissolution &amp; Assay Labs</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${c.c}`}><c.icon size={20} /></span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>
                <ul className="mt-4 space-y-1.5">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-12 md:p-8">
            <div className="overflow-hidden rounded-2xl md:col-span-5">
              <Image src="/assets/aboutus.png" alt="Quality control laboratory" width={1000} height={680} className="h-auto w-full" />
            </div>
            <div className="md:col-span-7">
              <Eyebrow className="text-emerald-600">QUALITY ASSURANCE & ANALYTICAL TESTING</Eyebrow>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">Integrated Quality Control & Stability Testing</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
               Quality is central to every stage of pharmaceutical manufacturing and product evaluation. Our quality-focused approach emphasizes analytical testing, dissolution assessment, and stability studies to support product quality, consistency, and compliance with applicable pharmaceutical standards.

              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
              Our testing framework includes analytical techniques such as High-Performance Liquid Chromatography (HPLC), dissolution testing, and stability studies designed to evaluate product performance under defined environmental conditions. 
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[["Zone IVb", "Stability Testing", "text-brand"], ["HPLC", "Analytical Precision", "text-brand"], ["100%", "Product Performance", "text-brand"], ["eCTD", "Electronic Dossier Format", "text-accent"]].map(([v, l, c]) => (
                  <div key={v} className="rounded-xl bg-slate-50 p-3 text-center">
                    <p className={`text-lg font-bold ${c}`}>{v}</p>
                    <p className="text-[11px] text-slate-500">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global & Domestic */}
      {/* <section className="py-14 md:py-10">
        <div className="mx-auto max-w-[90%] px-4">
          <div className="text-center">
            <Eyebrow className="text-accent">GLOBAL REGULATORY COMPLIANCE</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">International Manufacturing Standards & Regulatory Support</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">Quality-focused manufacturing partnerships, product equivalency testing, and regulatory documentation for global markets.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white"><Globe2 size={20} /></span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">International Footprint</h3>
                    <p className="text-xs text-slate-500">7+ Regional Markets with Tailored ACTD/CTD Dossiers</p>
                  </div>
                </div>
                <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-bold text-brand">Global</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                Azure Drugs &amp; Pharmaceuticals actively expands its cross-border regulatory presence through direct brand
                registrations, joint ventures with sovereign distributors, and tender submissions.
              </p>
              <div className="mt-6 grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3">
                {regions.map((r) => (
                  <div key={r.name} className="rounded-xl bg-slate-50 p-4 text-center">
                    <MapPin size={16} className="mx-auto text-brand" />
                    <p className="mt-2 text-sm font-semibold text-slate-900">{r.name}</p>
                    <p className="text-[11px] text-slate-500">{r.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap justify-between gap-2 border-t border-slate-100 pt-4 text-xs">
                <span className="text-slate-500">Export Technical Inquiries:</span>
                <a href="mailto:info@azurepharma.in" className="font-semibold text-brand hover:underline">info@azurepharma.in</a>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-white"><Building2 size={20} /></span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Domestic Healthcare Network</h3>
                    <p className="text-xs text-slate-500">Hospital Formulary, Tenders &amp; Distribution</p>
                  </div>
                </div>
                <span className="rounded-md bg-red-50 px-2 py-1 text-[10px] font-bold text-accent">India</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                Backed by our parent healthcare group&apos;s hospital infrastructure, Azure maintains a strong nationwide
                domestic sales and institutional distribution network.
              </p>
              <div className="mt-6 flex-1 space-y-3">
                {domestic.map((d) => (
                  <div key={d.title} className="flex gap-3 rounded-xl bg-slate-50 p-4">
                    <d.icon size={18} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{d.title}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{d.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap justify-between gap-2 border-t border-slate-100 pt-4 text-xs">
                <span className="text-slate-500">Institutional Procurement Helpdesk:</span>
                <a href="tel:+918375001001" className="font-semibold text-accent hover:underline">+91 8375001001</a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Certifications */}
      <section className="bg-slate-50 py-14 md:py-10">
        <div className="mx-auto max-w-[90%] px-4 text-center">
          <Eyebrow className="text-emerald-600">GLOBAL REGULATORY COMPLIANCE</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">International Manufacturing Standards & Regulatory Support</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">Quality-focused manufacturing partnerships, product equivalency testing, and regulatory documentation for global markets.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {certs.map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <span className={`mx-auto grid h-12 w-12 place-items-center rounded-full ${c.c}`}><c.icon size={22} /></span>
                <p className="mt-4 font-semibold text-slate-900">{c.title}</p>
                <p className="text-xs text-slate-500">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section id="contact" className="py-14 md:py-10">
        <div className="mx-auto max-w-[90%] px-4">
          <div className="grid gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900 p-7 text-white shadow-xl md:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                <BadgeCheck size={13} /> Institutional RFQ &amp; Formulations Partnership
              </span>
              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">{"Let's Build Better Healthcare Partnerships"}</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-slate-300">
                Whether you are a pharmaceutical company seeking manufacturing partnerships, an international distributor exploring market opportunities, a hospital looking for reliable pharmaceutical supplies, or a business partner interested in product licensing and technology transfer, Azure Drugs & Pharmaceuticals is ready to explore opportunities with you. 
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                  <Send size={16} /> Institutional Business Inquiries
                </Link>
                <a href="tel:+918375001001" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
                  <Phone size={16} /> Contact Corporate Office
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 text-slate-900 lg:col-span-5">
              <p className="flex items-center gap-2 font-semibold"><Building2 size={18} className="text-brand" /> Corporate Headquarters</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-brand" /><div><p className="font-semibold">Registered Office &amp; HQ:</p><p className="text-slate-500">Plot No. 231, Phase IV, Udyog Vihar, Gurugram, Haryana - 122015, India</p></div></li>
                <li className="flex gap-3"><Phone size={17} className="mt-0.5 shrink-0 text-brand" /><div><p className="font-semibold">Institutional Hotline:</p><a href="tel:+918375001001" className="text-brand hover:underline">+91 8375001001</a></div></li>
                <li className="flex gap-3"><Mail size={17} className="mt-0.5 shrink-0 text-brand" /><div><p className="font-semibold">Corporate Email:</p><a href="mailto:info@azurepharma.in" className="text-brand hover:underline">info@azurepharma.in</a></div></li>
                <li className="flex gap-3"><Clock size={17} className="mt-0.5 shrink-0 text-brand" /><div><p className="font-semibold">Operating Hours:</p><p className="text-slate-500">Monday – Saturday: 9:00 AM – 6:00 PM IST</p></div></li>
              </ul>
              <a href="mailto:info@azurepharma.in?subject=Corporate%20Brochure%20Request" className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
                <Download size={16} /> Request Corporate Brochure (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

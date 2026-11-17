import Image from "next/image";
import Link from "next/link";
import {
  Eye, Flag, Scale, Heart, TrendingUp, PlusCircle,
  Pill, FlaskConical, ArrowLeftRight, Factory, Beaker, BriefcaseMedical,
  Globe2, MapPinned, CheckCircle2, ArrowUpRight,
  Handshake, Stethoscope, Rocket, SlidersHorizontal, BadgeDollarSign, BadgeCheck,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import InquirySection from "@/components/InquirySection";
import { getAllProducts } from "@/data/products";

function Eyebrow({ children, color = "text-brand" }: { children: React.ReactNode; color?: string }) {
  return <p className={`text-[11px] font-bold uppercase tracking-widest ${color}`}>{children}</p>;
}

// Single source of truth: products.json (same data as /products pages).
const products = getAllProducts();

const values = [
  { icon: Scale, title: "Integrity & Ethics", desc: "Upholding transparency, ethical business practices, and regulatory compliance across our pharmaceutical operations, research activities, and commercial partnerships.", tag: "Ethical Standard", c: "text-brand bg-blue-50" },
  { icon: Heart, title: "Patient-Centric Approach", desc: "Prioritizing patient well-being through a commitment to therapeutic effectiveness, ease of administration, safety, and access to affordable healthcare.", tag: "Clinical Efficacy", c: "text-accent bg-red-50" },
  { icon: TrendingUp, title: "Continuous Improvement", desc: "Continuously enhancing our processes, operational efficiency, quality practices, and supply chain capabilities to meet evolving healthcare needs.", tag: "Iterative Science", c: "text-brand bg-blue-50" },
  { icon: PlusCircle, title: "Quality First", desc: "Making quality a priority at every stage. We are committed to maintaining stringent quality standards, product consistency, and applicable pharmaceutical regulatory requirements.", tag: "Zero Compromise", c: "text-emerald-600 bg-emerald-50" },
];

const specialities = [
  { icon: Pill, title: "Finished Formulations", desc: "Comprehensive manufacturing capabilities across solid oral dosage forms, soft gelatin capsules, injectables, and sterile formulations, with a focus on product quality, consistency, and regulatory compliance.", l: "Dosage: Tablets / Softgels", r: "Available for Supply", c: "text-brand bg-blue-50" },
  { icon: FlaskConical, title: "Semi-Finished Formulations", desc: "Customized granules, sustained-release coated pellets, and bulk supply formulations designed to support encapsulation, further processing, and packaging requirements.", l: "Granules, Pellets & Bulk", r: "Custom Specs", c: "text-brand bg-blue-50" },
  { icon: ArrowLeftRight, title: "Technology Transfer with API Supply", desc: "Supporting pharmaceutical technology transfer through dossier exchange, analytical method transfer, pilot batch validation, and API sourcing to facilitate manufacturing scale-up.", l: "Tech Transfer & DMF", r: "Regulatory Support", c: "text-brand bg-blue-50" },
  { icon: Factory, title: "Contract Manufacturing", desc: "Flexible contract manufacturing solutions through manufacturing partnerships, designed to support production requirements, operational efficiency, and scalable business needs.", l: "cGMP Contract Operations", r: "High Scale", c: "text-brand bg-blue-50" },
  { icon: Beaker, title: "API Supplies", desc: "Sourcing and distribution of Active Pharmaceutical Ingredients (APIs), supported by supplier qualification, documentation, and quality assessment.", l: "DMF Certified APIs", r: "Global Sourcing", c: "text-brand bg-blue-50" },
  { icon: BriefcaseMedical, title: "Surgical & Disposables", desc: "A range of hospital supplies, clinical disposables, surgical consumables, and essential healthcare products to support hospitals and medical institutions.", l: "Sterile Medical Consumables", r: "Hospital Grade", c: "text-accent bg-red-50" },
];

const whyAzure = [
  { icon: SlidersHorizontal, c: "bg-blue-50 text-brand", title: "Customized Business Solutions", desc: "Flexible business models tailored to partner requirements, including distribution arrangements, batch sizes, packaging needs, and delivery schedules." },
  { icon: BadgeDollarSign, c: "bg-emerald-50 text-emerald-700", title: "Commitment to Quality, Service & Affordability", desc: "Making quality, reliable service, and affordability our priorities while maintaining a strong focus on product quality, safety, and efficacy." },
  { icon: Handshake, c: "bg-sky-50 text-sky-700", title: "Long-Term Business Partnerships", desc: "Building lasting business relationships through transparency, mutual trust, consistent collaboration, and a shared commitment to sustainable growth." },
  { icon: Stethoscope, c: "bg-indigo-50 text-indigo-700", title: "Pharmaceutical & Healthcare Expertise", desc: "Supported by an experienced business development team and industry professionals with an understanding of pharmaceutical and hospital sector requirements." },
  { icon: Rocket, c: "bg-red-50 text-accent", title: "Agility & Growing Market Presence", desc: "Adapting to evolving market requirements through responsive business strategies, portfolio development, and a focus on emerging healthcare opportunities." },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* About */}
      <section id="about" className="md:py-10 sm:py-10 py-6">
        <div className="mx-auto max-w-[90%] md:px-4 grid md:gap-12 lg:grid-cols-2 items-center">
          <div>
            <Image src="/assets/aboutus.png" alt="Pharmaceutical innovation" width={1000} height={680} className="w-full h-auto" />
          </div>
          <div>
            {/* <Eyebrow><span className="inline-flex items-center gap-1.5"><Building2 size={13} /> Corporate Profile</span></Eyebrow> */}
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-slate-900">About Azure Drugs &amp; Pharmaceuticals</h2>
            <p className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-5 font-semibold text-slate-800">
             A Part of an Indian Diversified Business Group with a Presence in Hospitals and Healthcare Services. 
            </p>
            <p className="mt-2 text-slate-500 text-md md:text-md">
             Azure Drugs & Pharmaceuticals is driven by a vision to achieve significant growth in the pharmaceutical industry through Prescription Products, Branded Generics, Tender Business, and Hospital Supplies. 
            </p>
            <p className="mt-2 text-slate-500 text-md md:text-md">
            With a strong foundation in business development, experienced leadership, and a highly qualified team, we focus on building sustainable business relationships and delivering quality-driven pharmaceutical solutions.
            </p>
            <p className="mt-2 text-slate-500 text-md md:text-md">
           Our core strength lies in our experienced Business Development Team, strategic approach, and commitment to maintaining high standards of product quality, efficacy, and safety.
            </p>
            <p className="mt-2 text-slate-500 text-md md:text-md">
          We aim to contribute to the evolving healthcare landscape by combining pharmaceutical expertise, operational capabilities, and a customer-centric approach. 
            </p>
            <div className="mt-8 grid md:gap-5 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 md:p-6 p-3 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-brand"><Eye size={20} /></span>
                <h3 className="mt-4 font-semibold text-lg">Vision</h3>
                <p className="mt-2 text-sm text-slate-600">To be a trusted global pharmaceutical and healthcare organization, improving lives through quality healthcare solutions for all humanity.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 md:p-6 p-3 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-red-50 text-accent"><Flag size={20} /></span>
                <h3 className="mt-4 font-semibold text-lg">Mission</h3>
                <p className="mt-2 text-sm text-slate-600">To provide safe, effective, and quality medicines at affordable prices while upholding the highest standards of quality, trust, and integrity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="md:py-10 bg-slate-50">
        <div className="mx-auto max-w-[90%] md:px-4">
          {/* <Eyebrow color="text-accent">Clinical Formulations Catalog</Eyebrow> */}
          <div className="mt-2 flex justify-center w-full items-center">
            <div className="text-center w-full">
              <h2 className="text-2xl  md:text-4xl font-bold">Our Products</h2>
              <p className="mt-3 mx-auto w-[80%] text-center text-slate-600">Explore our diverse portfolio of pharmaceutical and nutraceutical products, developed with a focus on quality, therapeutic efficacy, and patient well-being. Our product range caters to evolving healthcare needs across prescription products, branded generics, and institutional supply segments. </p>
              {/* <p className="mt-3 max-w-xl text-slate-600">Our product range caters to evolving healthcare needs across prescription products, branded generics, and institutional supply segments.</p> */}
            </div>
           
          </div>
          <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="relative aspect-square bg-white">
                  <Image src={p.thumbnail} alt={p.name} fill sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 90vw" className="object-contain p-4 group-hover:scale-105 transition" />
                </div>
                <div className="flex flex-1 flex-col p-5 border-t border-slate-100">
                  <h3 className="mt-1 text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 flex-1">{p.tagline}</p>
                  <span className="mt-5 flex items-center justify-center gap-1.5 rounded-lg bg-blue-50 py-2.5 text-xs font-semibold text-brand group-hover:bg-brand group-hover:text-white transition">
                    View Product Details <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10">
        <div className="mx-auto max-w-[90%] md:px-4 text-center">
          {/* <Eyebrow color="text-emerald-600">Guiding Principles</Eyebrow> */}
          <h2 className="mt-2 text-2xl md:text-4xl font-bold">Core Values</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">The principles that guide our commitment to pharmaceutical excellence, responsible business practices, and better healthcare.</p>
          <div className="md:mt-12 mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-4 text-left">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 md:p-7 p-4 hover:shadow-md transition">
                <span className={`grid h-11 w-11 place-items-center rounded-lg ${v.c}`}><v.icon size={20} /></span>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
                {/* <p className={`mt-5 text-sm font-semibold ${v.c.split(" ")[0]} inline-flex items-center gap-1`}>{v.tag} <CheckCircle2 size={14} /></p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialities */}
      <section id="specialities" className="md:py-10 bg-slate-50">
        <div className="mx-auto max-w-[90%] md:px-4">
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              {/* <Eyebrow>Manufacturing &amp; Supply Capabilities</Eyebrow> */}
              <h2 className="mt-2 text-2xl md:text-4xl font-bold">Our Pharmaceutical Capabilities </h2>
            </div>
            <p className="text-slate-600">From finished formulations to API sourcing and contract manufacturing, we offer a range of pharmaceutical capabilities designed to support diverse industry and institutional requirements.</p>
          </div>
          <div className="md:mt-12 mt-6 grid md:gap-6 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {specialities.map((s) => (
              <div key={s.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white md:p-7 p-4 shadow-sm hover:shadow-lg transition">
                <span className={`grid h-11 w-11 place-items-center rounded-lg ${s.c}`}><s.icon size={20} /></span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{s.desc}</p>
                {/* <div className="mt-6 flex justify-between border-t border-slate-100 pt-4 text-xs">
                  <span className="text-slate-500">{s.l}</span>
                  <span className={`font-semibold ${s.c.split(" ")[0]}`}>{s.r}</span>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Horizons */}
      <section id="business" className="py-10">
        <div className="mx-auto max-w-[90%] md:px-4">
          <div className="text-center">
            {/* <Eyebrow color="text-accent">Commercial Footprint</Eyebrow> */}
            <h2 className="mt-2 text-2xl md:text-4xl font-bold">Our Business Presence</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">Building a growing presence in the international pharmaceutical and healthcare sectors through strategic collaborations and market-driven business models.</p>
          </div>

          <div className=" grid md:gap-6 md:grid-cols-2">
              <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/40 md:p-8 p-3" >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white"><Globe2 size={22} /></span>
                <div><Eyebrow>GLOBAL MARKETS</Eyebrow><h3 className="text-2xl font-bold">International Business</h3></div>
              </div>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-brand">7 Major Regions</span>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-slate-700">
              <li className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" /><span><b>Expanding Global Reach:</b> Developing business opportunities across India, Africa, Asia, Gulf countries, Russia-CIS, LATAM, and Europe.</span></li>
              <li className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" /><span><b>Strategic Partnerships:</b> Exploring manufacturing collaborations, joint ventures, and international business partnerships.</span></li>
              <li className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" /><span><b>Customized Business Solutions:</b> Offering flexible business models based on regional market requirements, regulatory frameworks, and partner capabilities.</span></li>
              <li className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" /><span><b>Diverse Product Portfolio:</b> Supporting international business requirements across finished formulations, bulk supplies, semi-finished products, and Active Pharmaceutical Ingredients (APIs).</span></li>
            </ul>
            {/* <div className="mt-6 flex flex-wrap justify-between gap-2 border-t border-blue-200 pt-4 text-xs">
              <span className="text-slate-500 inline-flex items-center gap-1"><CheckCircle2 size={13} /> Regional Regulatory Dossiers Available</span>
              <a href="#contact" className="font-semibold text-brand inline-flex items-center gap-1">Inquire for Global Supply</a>
            </div> */}
          </div>

          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50/40 md:p-8 p-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-white"><MapPinned size={22} /></span>
                <div><Eyebrow color="text-accent">NATIONWIDE OPERATIONS</Eyebrow><h3 className="text-2xl font-bold">Domestic Business</h3></div>
              </div>
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-accent">Pan-India Network</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {[
                <><b>Critical Care &amp; Hospital Business:</b> Focused on specialty formulations and hospital healthcare requirements.</>,
                <><b>Pharmaceutical Marketing:</b> Promoting and marketing pharmaceutical products across domestic markets.</>,
                <><b>Institutional &amp; Government Tenders:</b> Participating in institutional procurement and government tender opportunities.</>,
                <><b>Distribution Network:</b> Serving pharmacies through distribution of OTC, nutraceutical, and prescription products.</>,
                <><b>Strategic Brand Partnerships:</b> Developing in-licensing and co-marketing opportunities with multinational brands.</>,
                <><b>Experienced Team:</b> Supported by a dedicated sales and marketing team focused on business development and market expansion.</>,
              ].map((t, idx) => (
                <li key={idx} className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" /><span>{t}</span></li>
              ))}
            </ul>
            {/* <div className="mt-6 flex flex-wrap justify-between gap-2 border-t border-red-200 pt-4 text-xs">
              <span className="text-slate-500 inline-flex items-center gap-1"><CheckCircle2 size={13} /> Hospital Tender &amp; Institutional Supply Approved</span>
              <a href="#contact" className="font-semibold text-accent inline-flex items-center gap-1">Connect with Domestic Desk</a>
            </div> */}
          </div>
          </div>

        
        </div>
      </section>

      {/* Why Azure */}
      <section id="why-azure" className="md:py-10 py-5 bg-slate-50">
        <div className="mx-auto max-w-[90%] md:px-4 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand">
              <BadgeCheck size={16} /> Institutional Advantage
            </p>
            <h2 className="mt-2 text-2xl md:text-4xl font-bold text-slate-900">Why Partner with Azure ?</h2>
            <p className="mt-3 text-md md:text-lg leading-relaxed text-slate-600">We bring together pharmaceutical expertise, flexible business solutions, and strong industry relationships to create dependable partnerships across the healthcare ecosystem.</p>

           
          </div>

          <div className="lg:col-span-7 space-y-3.5">
            {whyAzure.map((w) => (
              <div key={w.title} className="flex flex-col md:flex-row gap-4 rounded-2xl bg-white md:p-5 p-3 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition">
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${w.c}`}><w.icon size={18} /></span>
                <div>
                  <p className="font-medium text-slate-900">{w.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InquirySection />
    </>
  );
}

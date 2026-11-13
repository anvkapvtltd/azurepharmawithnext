import Image from "next/image";
import {
  ShieldCheck, Building2, Eye, Flag, Scale, Heart, TrendingUp, PlusCircle,
  Pill, FlaskConical, ArrowLeftRight, Factory, Beaker, BriefcaseMedical,
  Globe2, MapPinned, CheckCircle2, ArrowRight, ArrowUpRight, Headset,
  Users, Handshake, Stethoscope, Rocket, FileCheck2, SlidersHorizontal, BadgeDollarSign, BadgeCheck,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import InquirySection from "@/components/InquirySection";

function Eyebrow({ children, color = "text-brand" }: { children: React.ReactNode; color?: string }) {
  return <p className={`text-[11px] font-bold uppercase tracking-widest ${color}`}>{children}</p>;
}

const products = [
  {
    img: "Azure-D3", name: "Azure-D3", kind: "Cholecalciferol Capsule",
    tags: [["Rx Prescription", "bg-accent text-white"], ["Bone Health", "bg-blue-100 text-brand"]],
    desc: "Cholecalciferol Soft Gelatin Capsules 60,000 IU for Bone Health and Calcium Balance.",
    specs: [["Strength", "60,000 IU"], ["Form", "Soft Gelatin Capsule"]],
  },
  {
    img: "BoneVita", name: "BoneVita", kind: "Synergistic Matrix",
    tags: [["Nutraceutical", "bg-violet-600 text-white"], ["Joint & Bone", "bg-violet-100 text-violet-700"]],
    desc: "Supporting Stronger Bones and Better Musculoskeletal Health with high-absorption calcium co-factors.",
    specs: [["Composition", "CCM + Cissus + Vit-D3"], ["Target", "Bone Density Support"]],
  },
  {
    img: "VitamaxWomen", name: "Vitamax Women", kind: "Women's Health Formulation",
    tags: [["Multivitamin", "bg-pink-600 text-white"], ["Active 40+", "bg-pink-100 text-pink-700"]],
    desc: "Wellness for Every Stage of Womanhood. Daily essential vitamins & botanical extracts for active women 40+.",
    specs: [["Spectrum", "22+ Micronutrients"], ["Efficacy", "Hormonal & Energy Care"]],
  },
  {
    img: "VitamaxMen", name: "Vitamax Men", kind: "Vitality & Stamina Matrix",
    tags: [["Vitality Complex", "bg-brand text-white"], ["Men 40+", "bg-blue-100 text-brand"]],
    desc: "Daily Essential Vitamins & Minerals for Active Men 40+ engineered for stamina, heart health & immunity.",
    specs: [["Spectrum", "Targeted Men's Minerals"], ["Support", "Cardiovascular & Focus"]],
  },
];

const values = [
  { icon: Scale, title: "Integrity & Ethics", desc: "Operating with uncompromising transparency, institutional compliance, and ethical standards across clinical research and commercial distribution.", tag: "Ethical Standard", c: "text-brand bg-blue-50" },
  { icon: Heart, title: "Patient Centric", desc: "Designing formulations that prioritize therapeutic effectiveness, ease of administration, safety margins, and affordable healthcare access.", tag: "Clinical Efficacy", c: "text-accent bg-red-50" },
  { icon: TrendingUp, title: "Continuous Improvement", desc: "Perpetually refining manufacturing efficiencies, analytical testing regimes, and supply chain technologies for global-standard outcomes.", tag: "Iterative Science", c: "text-brand bg-blue-50" },
  { icon: PlusCircle, title: "Quality First", desc: "Zero tolerance for deviation. Every batch adheres strictly to stringent pharmacopoeial standards (IP, BP, USP) and validated protocols.", tag: "Zero Compromise", c: "text-emerald-600 bg-emerald-50" },
];

const specialities = [
  { icon: Pill, title: "Finished Formulations", desc: "Comprehensive manufacturing of solid orals, soft gelatin capsules, injectables, and sterile formulations packaged under stringent global standards.", l: "Dosage: Tablets / Softgels", r: "Available for Supply", c: "text-brand bg-blue-50" },
  { icon: FlaskConical, title: "Semi-Finished Formulation", desc: "Custom-tailored granules, sustained-release coated pellets, and bulk supply formulations ready for encapsulation and localized packaging lines.", l: "Granules, Pellets & Bulk", r: "Custom Specs", c: "text-brand bg-blue-50" },
  { icon: ArrowLeftRight, title: "Technology Transfer with API Supply", desc: "Seamless dossier exchange, analytical method transfer, pilot batch validation, and active raw material sourcing for international facility scale-up.", l: "Tech Transfer & DMF", r: "Regulatory Support", c: "text-brand bg-blue-50" },
  { icon: Factory, title: "Contract Manufacturing", desc: "Dedicated and flexible CMO capabilities across modern cGMP compliant manufacturing facilities with high capacity and rapid turnaround schedules.", l: "cGMP Contract Operations", r: "High Scale", c: "text-brand bg-blue-50" },
  { icon: Beaker, title: "API Supplies", desc: "Robust sourcing, qualification, and distribution of Active Pharmaceutical Ingredients backed by valid Drug Master Files (DMF) and purity assays.", l: "DMF Certified APIs", r: "Global Sourcing", c: "text-brand bg-blue-50" },
  { icon: BriefcaseMedical, title: "Surgical & Disposables", desc: "Hospital supplies, sterile clinical disposables, surgical consumables, and critical care essentials built for medical institutional standards.", l: "Sterile Medical Consumables", r: "Hospital Grade", c: "text-accent bg-red-50" },
];

const whyAzure = [
  { icon: SlidersHorizontal, c: "bg-blue-50 text-brand", title: "Customized Business Model as per the Requirements", desc: "Flexible distribution contracts, tailored batch sizes, localized packaging compliance, and versatile delivery schedules." },
  { icon: BadgeDollarSign, c: "bg-emerald-50 text-emerald-700", title: "Quality, Service and Affordability are Our Key Focus Right from the Beginning", desc: "Eliminating arbitrary premiums while ensuring every therapeutic batch complies with rigorous international pharmacopeias." },
  { icon: Handshake, c: "bg-sky-50 text-sky-700", title: "Long-term Business Partnership", desc: "We prioritize strategic stability over transactional deals, building multi-year collaborative supply agreements with guaranteed continuity." },
  { icon: Stethoscope, c: "bg-indigo-50 text-indigo-700", title: "Expertise in Healthcare and Pharmaceutical Segments", desc: "Backed by an experienced business development team, hospital operations group, and regulatory clinical specialists." },
  { icon: Rocket, c: "bg-red-50 text-accent", title: "Emerging Fast Growing Evolving Partner in Healthcare", desc: "Quick regulatory turnaround, rapid portfolio expansion, and agile responsiveness in developing and emerging markets." },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-[90%] px-4 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <Image src="/assets/aboutus.png" alt="Pharmaceutical innovation" width={1000} height={680} className="w-full h-auto" />
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[["100%", "Quality Assurance"], ["Multi", "Continental Reach"], ["Group", "Healthcare Network"]].map(([v, l], idx) => (
                <div key={l}>
                  <p className={`text-2xl font-bold ${idx === 2 ? "text-accent" : "text-brand"}`}>{v}</p>
                  <p className="text-[11px] text-slate-500">{l}</p>
                </div>
              ))}
            </div>
         
          </div>
          <div>
            {/* <Eyebrow><span className="inline-flex items-center gap-1.5"><Building2 size={13} /> Corporate Profile</span></Eyebrow> */}
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">About Azure Drugs &amp; Pharmaceuticals</h2>
            <p className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-5 font-semibold text-slate-800">
              Azure Drugs &amp; Pharmaceuticals is a part of an Indian Diversified Business group with its Presence in Hospitals and Healthcare services.
            </p>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Azure Drugs &amp; Pharmaceuticals is driven by its vision to achieve Significant Business growth in Prescription Products,
              Branded Generics, Tender business, and Hospital Supplies, with its Core Competency in its highly Qualified &amp; Experienced
              Business Development Team, driven by Strong Leadership, with its prime focus on maintaining the highest quality, Efficacy
              &amp; Safety of Products.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-brand"><Eye size={20} /></span>
                <h3 className="mt-4 font-semibold text-lg">Vision</h3>
                <p className="mt-2 text-sm text-slate-600">To be a trusted global pharmaceutical and healthcare organization, improving lives through quality healthcare for all humanity.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-red-50 text-accent"><Flag size={20} /></span>
                <h3 className="mt-4 font-semibold text-lg">Mission</h3>
                <p className="mt-2 text-sm text-slate-600">To provide safe, effective, and quality medicines at affordable prices while upholding the highest standards of quality, trust, and integrity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-10 bg-slate-50">
        <div className="mx-auto max-w-[90%] px-4">
          {/* <Eyebrow color="text-accent">Clinical Formulations Catalog</Eyebrow> */}
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Products</h2>
              <p className="mt-3 max-w-xl text-slate-600">Explore our flagship pharmaceutical and nutraceutical lines formulated for therapeutic efficacy, maximum bioavailability, and institutional quality.</p>
            </div>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-600 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Available for Institutional Supply &amp; RFQ
            </span>
          </div>
          <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article key={p.name} className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="relative aspect-square bg-white">
                  {/* <div className="absolute left-3 top-3 z-10 flex">
                    {p.tags.map(([t, cls]) => (
                      <span key={t} className={`rounded px-2 py-0.5 text-[9px] font-bold uppercase ${cls}`}>{t}</span>
                    ))}
                  </div> */}
                  <Image src={`/assets/${p.img}.webp`} alt={p.name} fill sizes="" className="object-contain p-4 group-hover:scale-105 transition" />
                </div>
                <div className="flex flex-1 flex-col p-5 border-t border-slate-100">
                  {/* <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{p.kind}</p> */}
                  <h3 className="mt-1 text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 flex-1">{p.desc}</p>
                  {/* <dl className="mt-4 space-y-2 text-xs">
                    {p.specs.map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-slate-100 pb-2">
                        <dt className="text-slate-500">{k}</dt><dd className="font-semibold">{v}</dd>
                      </div>
                    ))}
                  </dl> */}
                  <a href="#contact" className="mt-5 flex items-center justify-center gap-1.5 rounded-lg bg-blue-50 py-2.5 text-xs font-semibold text-brand hover:bg-brand hover:text-white">
                    View Product Details <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          {/* <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-brand"><FileCheck2 size={20} /></span>
              <div>
                <p className="font-semibold">Require Dossiers or Custom Batch Specifications?</p>
                <p className="text-xs text-slate-500">We supply Certificate of Analysis (CoA), Stability Data, and Bioequivalence Reports for institutional buyers.</p>
              </div>
            </div>
            <a href="#contact" className="rounded-lg bg-accent px-5 py-3 text-xs font-semibold text-white hover:bg-red-700">Request Product Dossier</a>
          </div> */}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10">
        <div className="mx-auto max-w-[90%] px-4 text-center">
          {/* <Eyebrow color="text-emerald-600">Guiding Principles</Eyebrow> */}
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Core Values</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">The non-negotiable operational tenets that drive our pharmaceutical research, formulations, and commercial partnerships.</p>
          <div className="mt-12 grid gap-2 sm:grid-cols-2 md:grid-cols-4 text-left">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-7 hover:shadow-md transition">
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
      <section id="specialities" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[90%] px-4">
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              {/* <Eyebrow>Manufacturing &amp; Supply Capabilities</Eyebrow> */}
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">Our Specialities</h2>
            </div>
            {/* <p className="text-slate-600">Complete end-to-end lifecycle solutions spanning from raw active pharmaceutical ingredients to ready-to-market commercial dosage forms.</p> */}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialities.map((s) => (
              <div key={s.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition">
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
        <div className="mx-auto max-w-[90%] px-4">
          <div className="text-center">
            {/* <Eyebrow color="text-accent">Commercial Footprint</Eyebrow> */}
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Business Horizons</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">Expanding strategic healthcare ecosystems through two distinct operational engines: International Markets and Domestic Hospital Networks.</p>
          </div>

          <div className=" grid gap-6 md:grid-cols-2">
              <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/40 p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white"><Globe2 size={22} /></span>
                <div><Eyebrow>Global Presence</Eyebrow><h3 className="text-2xl font-bold">International Business</h3></div>
              </div>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-brand">7 Major Regions</span>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-slate-700">
              <li className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" /><span>Azure Drugs &amp; Pharmaceuticals strives to be an emerging Global Leader in Pharmaceuticals &amp; Healthcare Segment &amp; continue to expand its operations across the Markets – <b>India, Africa, Asia, Gulf Countries, Russia-CIS, LATAM, and Europe</b>.</span></li>
              <li className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" /><span>Azure Drugs And Pharmaceuticals aspires to be a global player by its Regional presence through its <b>Manufacturing, Joint Ventures, International Offices</b> across the Globe.</span></li>
              <li className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" /><span>We work on a customized business model as per local regulatory requirements and understanding with our partners&apos; strengths <b>(Finished products, Bulk supplies, Semi-finished products, API supplies)</b>.</span></li>
            </ul>
            {/* <div className="mt-6 flex flex-wrap justify-between gap-2 border-t border-blue-200 pt-4 text-xs">
              <span className="text-slate-500 inline-flex items-center gap-1"><CheckCircle2 size={13} /> Regional Regulatory Dossiers Available</span>
              <a href="#contact" className="font-semibold text-brand inline-flex items-center gap-1">Inquire for Global Supply <ArrowRight size={13} /></a>
            </div> */}
          </div>

          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50/40 p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-white"><MapPinned size={22} /></span>
                <div><Eyebrow color="text-accent">National Distribution</Eyebrow><h3 className="text-2xl font-bold">Domestic Business</h3></div>
              </div>
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-accent">Pan-India Network</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {[
                <><b>Critical care &amp; Hospital Business</b> for Speciality Formulations.</>,
                <>Promotion &amp; Marketing at <b>National level</b>.</>,
                <>Participation in <b>Institutional &amp; Govt Tenders</b>.</>,
                <><b>Nation wide distribution coverage</b> to pharmacies for OTC / Nutraceuticals / Rx products.</>,
                <><b>In-licensing / Co-marketing</b> of MNC&apos;s Brands.</>,
                <>Experienced, Enthusiastic sales and Marketing team.</>,
              ].map((t, idx) => (
                <li key={idx} className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" /><span>{t}</span></li>
              ))}
            </ul>
            {/* <div className="mt-6 flex flex-wrap justify-between gap-2 border-t border-red-200 pt-4 text-xs">
              <span className="text-slate-500 inline-flex items-center gap-1"><CheckCircle2 size={13} /> Hospital Tender &amp; Institutional Supply Approved</span>
              <a href="#contact" className="font-semibold text-accent inline-flex items-center gap-1">Connect with Domestic Desk <ArrowRight size={13} /></a>
            </div> */}
          </div>
          </div>

        
        </div>
      </section>

      {/* Why Azure */}
      <section id="why-azure" className="py-10 bg-slate-50">
        <div className="mx-auto max-w-[90%] px-4 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand">
              <BadgeCheck size={16} /> Institutional Advantage
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Why Azure?</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">We operate at the convergence of clinical discipline and commercial agility, helping hospitals, healthcare organizations, and regional distributors deliver safe medicines without supply chain frictions.</p>

           
          </div>

          <div className="lg:col-span-7 space-y-3.5">
            {whyAzure.map((w) => (
              <div key={w.title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition">
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

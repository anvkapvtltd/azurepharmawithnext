import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Home, ChevronRight, ArrowRight, FileText, ClipboardList, CheckCircle2, ShieldCheck,
  Factory, Globe2, Timer, SlidersHorizontal, BadgeCheck, Handshake, Hospital, Rocket,
  Stethoscope, Pill, ClipboardCheck, FlaskConical, ScanLine, Archive, Wind, Microscope,
  Package, BadgeDollarSign, Clock4, Globe,
} from "lucide-react";
import InquirySection from "@/components/InquirySection";

export const metadata: Metadata = {
  title: "Why Azure | Azure Drugs & Pharmaceuticals",
  description:
    "Why global institutions, hospitals and distributors choose Azure Drugs & Pharmaceuticals – tailored pharmaceutical solutions, bio-equivalent therapies and dependable supply security.",
};

function Eyebrow({ children, className = "text-brand" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[11px] font-bold uppercase tracking-widest ${className}`}>{children}</p>;
}

const heroChecks = ["IP / BP / USP Assays", "WHO-GMP Plant Validated", "Zero-Stockout Guarantee"];

const stats = [
  { icon: BadgeCheck, value: "100%", label: "IP / BP / USP Pharmacopoeia", c: "bg-blue-50 text-brand" },
  { icon: Factory, value: "WHO-GMP", label: "ISO 9001:2015 Accredited", c: "bg-indigo-50 text-indigo-600" },
  { icon: Globe2, value: "7+ Nations", label: "Africa, CIS, GCC & SE Asia", c: "bg-emerald-50 text-emerald-600" },
  { icon: Timer, value: "24h SLA", label: "Technical Dossier Dispatch", c: "bg-blue-50 text-brand" },
];

const pillars = [
  {
    icon: SlidersHorizontal, c: "bg-blue-50 text-brand", n: "01",
    title: "Customized Business Model",
    text: "Tailored precisely to partner requirements: flexible commercial batch sizing, customized blister/bottle packaging, private labeling CDMO, and semi-finished pellet/granule supplies.",
    points: ["Finished & Bulk Granule Supplies", "Adaptable Minimum Order Quantities", "Co-Marketing & In-Licensing Ready"],
  },
  {
    icon: ShieldCheck, c: "bg-emerald-50 text-emerald-600", n: "02",
    title: "Quality, Service & Affordability",
    text: "We eliminate non-essential intermediary markups without ever compromising bio-potency. Rigorous cleanroom processing and HPLC-verified assays guarantee superior patient outcomes.",
    points: ["Automated Dissolution Profiling", "Zone IVb Stability Validation", "Cost Advantage via Vertical API Sourcing"],
  },
  {
    icon: Handshake, c: "bg-indigo-50 text-indigo-600", n: "03",
    title: "Long-Term Partnership",
    text: "We move far beyond transactional generic brokering. We construct multi-year supply assurances, firm price stability schedules, and dedicated regional exclusivity for registered partners.",
    points: ["Guaranteed Territorial Exclusivity", "Multi-Quarter Price Hedging", "Dedicated Institutional Account Managers"],
  },
];

const compare = [
  ["Formulation & Stability Testing", "Basic commercial compliance, spot-tested only, limited Zone IVb tropical stability documentation.", "Strict IP/BP/USP pharmacopoeial assays with complete Zone IVb accelerated real-time stability files."],
  ["Regulatory Dossier Readiness", "Generic brochures, frequently delayed or fragmented dossiers needing external consulting.", "Turnkey CTD / ACTD formats ready for instant Ministry of Health (MoH) submission worldwide."],
  ["Order Flexibility & MOQs", "Rigid high MOQs that create surplus stock risks for growing regional distributors.", "Scalable modular production runs tailored to private labeling, tenders, and distributor ramp-up."],
  ["Supply Chain & GDP Protocols", "Unmonitored freight forwarding; absence of temperature datalogging during transit.", "Validated Good Distribution Practice (GDP) protocols with continuous batch tracking & cold-chain control."],
  ["Commercial & Territory Support", "Transactional broker model; competing parallel distributors supplied in the same territory.", "Protected exclusive distributorship agreements and dedicated institutional account management."],
];

const stages = [
  { n: "01", icon: Archive, title: "API Sourcing & DMF", text: "Every raw Active Pharmaceutical Ingredient undergoes DMF audit, impurity profiling, and heavy metal testing before entering synthesis.", tag: "Pharmacopoeia: USP / BP / IP" },
  { n: "02", icon: Wind, title: "Cleanroom Formulation", text: "Automated granulators, fluid bed dryers, and high-speed rotary presses operating under Class 100,000 cleanroom HVAC parameters.", tag: "ISO Class 7/8 Validated" },
  { n: "03", icon: Microscope, title: "Analytical Release", text: "HPLC UV-detection assay, dissolution rate mapping, microbial limits, and accelerated humidity chamber validation.", tag: "Independent CoA Released" },
  { n: "04", icon: Package, title: "Export Alu-Alu Packaging", text: "Multi-layer high-barrier blister foil, cold-formed aluminum packaging protecting formulations against high ambient humidity and UV degradation.", tag: "Zone IVb Export Standard" },
];

export default function WhyAzurePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/80 to-blue-50/30 pb-12 pt-6 md:pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-brand"><Home size={13} /> Home</Link>
            <ChevronRight size={13} />
            <span className="font-semibold text-brand">Why Azure</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" /> The Azure Advantage • Clinical Rigor &amp; Reliable Partnership
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Why Global Institutions, Hospitals &amp; Distributors Choose <span className="text-brand">Azure</span>
              </h1>
              <p className="mt-5 max-w-2xl leading-relaxed text-slate-600 md:text-lg">
                At the convergence of clinical discipline, manufacturing precision, and commercial agility, Azure Drugs &amp;
                Pharmaceuticals delivers tailored pharmaceutical solutions, bio-equivalent therapies, and dependable supply
                security worldwide.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#pillars" className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
                  Explore Partnership Models <ArrowRight size={16} />
                </a>
                <a href="mailto:azuremedical01@gmail.com?subject=Corporate%20Dossier%20Request" className="inline-flex items-center gap-2 rounded-lg bg-blue-100 px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-blue-200">
                  <FileText size={16} /> Download Corporate Dossier (PDF)
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
                  <ClipboardList size={16} /> Formulary Inquiries
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {heroChecks.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 text-xs text-slate-600">
                    <CheckCircle2 size={15} className="text-emerald-600" /> {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image src="/assets/aboutus.png" alt="Hospital proven formulations" width={1000} height={680} priority className="h-auto w-full" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow">
                    <span className="h-2 w-2 rounded-full bg-accent" /> Hospital Proven Formulations
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-blue-50 p-3">
                    <p className="flex items-center gap-1.5 font-bold text-brand"><BadgeDollarSign size={16} /> 100%</p>
                    <p className="mt-1 text-[11px] font-medium text-slate-600">Validated Bio-Equivalence &amp; Potency</p>
                  </div>
                  <div className="rounded-xl bg-blue-50 p-3">
                    <p className="flex items-center gap-1.5 font-bold text-brand"><Clock4 size={16} /> 24–48h</p>
                    <p className="mt-1 text-[11px] font-medium text-slate-600">Institutional Dossier / RFQ Turnaround</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="flex items-center gap-3">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${s.c}`}><s.icon size={20} /></span>
              <div>
                <p className="text-lg font-bold text-slate-900 md:text-xl">{s.value}</p>
                <p className="text-[11px] text-slate-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Pillars */}
      <section id="pillars" className="bg-blue-50/30 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Eyebrow>Institutional Competencies</Eyebrow>
          <h2 className="mt-2 max-w-3xl text-3xl font-bold text-slate-900 md:text-4xl">The 5 Strategic Pillars of Azure Healthcare Partnership</h2>
          <p className="mt-3 max-w-2xl text-slate-600">Formulated to solve critical distribution hurdles, hospital stockouts, and regional regulatory delays. Here is why tender directors and hospital networks anchor their formularies with us.</p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.n} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-lg">
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${p.c}`}><p.icon size={20} /></span>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">Pillar {p.n}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.text}</p>
                <ul className="mt-5 space-y-1.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Pillar 04 – wide */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-lg md:col-span-2">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-brand"><Hospital size={20} /></span>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">Pillar 04</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Hospital Ecosystem &amp; Clinical Domain Heritage</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                As part of an established Indian Diversified Business Group with direct hospital and healthcare operations, we
                understand prescribing realities. Our senior leadership blends medical directors, pharmaceutical research
                chemists, and supply-chain veterans who know what intensive care and orthopedic departments demand.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="flex gap-3 rounded-xl bg-blue-50/70 p-4">
                  <Stethoscope size={18} className="mt-0.5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Bedside Realities</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">Formulations designed from direct clinician feedback in acute care.</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl bg-blue-50/70 p-4">
                  <Pill size={18} className="mt-0.5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Optimized Patient Compliance</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">Convenient dosage forms: softgels, sachets and sustained-release formats.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 05 */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-lg">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-50 text-indigo-600"><Rocket size={20} /></span>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">Pillar 05</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Agile Global Expansion</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                Navigating complex customs, ministry registrations, and distributor handoffs with speed. We offer full CTD/ACTD
                dossier backing for prompt drug regulatory authority approvals.
              </p>
              <p className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand">
                <Globe size={14} /> CIS • Africa • GCC • LATAM Ready
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical distinction */}
      <section className="bg-blue-50/70 py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <Image src="/assets/aboutus.png" alt="Bedside to laboratory feedback loop" width={1000} height={680} className="h-auto w-full" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-5 pt-16 text-white">
                <span className="rounded bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">Hospital Synergy</span>
                <p className="mt-2 text-lg font-semibold">Direct Bedside to Laboratory Feedback Loop</p>
                <p className="text-xs text-slate-300">Formulated in India. Trusted Globally.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="rounded-full bg-slate-200/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">The Clinical Distinction</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">Unlike Generic Traders, We are Rooted in Real Hospital Wards</h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Generic wholesale traders broker commodity containers with zero insight into therapeutic efficacy or clinical
              reception. Azure Drugs &amp; Pharmaceuticals was born from an Indian Diversified Business Group with extensive
              footprints in tertiary hospitals and healthcare clinics.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              When our formulation team created <b className="text-slate-900">Azure-D3</b> and <b className="text-slate-900">BoneVita</b>,
              they focused on real clinical needs – convenient dosage, better absorption and easier patient compliance through
              soft-gel and sachet formats.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { icon: ClipboardCheck, t: "Bedside Data", s: "Real clinical feedback drives every batch optimization." },
                { icon: FlaskConical, t: "Bioequivalence", s: "Identical pharmacokinetic profile to innovator brands." },
                { icon: ScanLine, t: "Zero Variance", s: "Assay consistency verified across all export lots." },
              ].map((c) => (
                <div key={c.t} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <c.icon size={20} className="text-brand" />
                  <p className="mt-3 text-sm font-semibold text-slate-900">{c.t}</p>
                  <p className="mt-1 text-[11px] text-slate-500">{c.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <Eyebrow>Institutional Benchmark</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Azure vs. Conventional Generic Traders</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">See why procurement boards, tertiary hospitals, and national tenders transition their pharmaceutical contracts to Azure.</p>
          </div>

          {/* Desktop table */}
          <div className="mt-10 hidden overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:block">
            <div className="grid grid-cols-12 text-sm font-semibold">
              <div className="col-span-3 bg-blue-50 p-5 text-slate-900">Strategic Operational Parameter</div>
              <div className="col-span-5 bg-blue-50 p-5 text-slate-600">Conventional Generic Suppliers</div>
              <div className="col-span-4 bg-brand-dark p-5 text-white">Azure Drugs &amp; Pharmaceuticals</div>
            </div>
            {compare.map(([param, generic, azure]) => (
              <div key={param} className="grid grid-cols-12 border-t border-slate-100 text-sm">
                <div className="col-span-3 flex items-center p-5 font-semibold text-slate-900">{param}</div>
                <div className="col-span-5 flex items-center p-5 text-slate-500">{generic}</div>
                <div className="col-span-4 flex items-start gap-2 bg-blue-50/60 p-5 font-medium text-slate-800">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand" /> {azure}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="mt-8 space-y-4 md:hidden">
            {compare.map(([param, generic, azure]) => (
              <div key={param} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <p className="bg-blue-50 px-4 py-3 text-sm font-semibold text-slate-900">{param}</p>
                <div className="space-y-3 p-4 text-sm">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Conventional Suppliers</p>
                    <p className="mt-1 text-slate-500">{generic}</p>
                  </div>
                  <div className="rounded-lg bg-blue-50/70 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-brand">Azure</p>
                    <p className="mt-1 flex items-start gap-2 font-medium text-slate-800"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" /> {azure}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-stage lifecycle */}
      <section className="bg-blue-50/40 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Eyebrow>Standard Operating Procedure</Eyebrow>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">The 4-Stage Azure Quality &amp; Compliance Lifecycle</h2>
              <p className="mt-3 text-slate-600">From active ingredient synthesis to international customs clearance, our pharmacopoeial quality gates safeguard institutional integrity.</p>
            </div>
            <div className="flex gap-2">
              <span className="rounded-md bg-blue-100 px-2.5 py-1 text-[10px] font-bold text-brand">c-GMP Certified</span>
              <span className="rounded-md bg-blue-100 px-2.5 py-1 text-[10px] font-bold text-brand">ISO 9001:2015</span>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((s) => (
              <div key={s.n} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-sm font-bold text-brand">{s.n}</span>
                  <s.icon size={20} className="text-slate-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
                <p className="mt-5 rounded-md bg-slate-100 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600">{s.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InquirySection />
    </>
  );
}

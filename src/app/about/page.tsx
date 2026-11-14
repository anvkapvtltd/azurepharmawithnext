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
  "Zero Compromise Batch Traceability & Retention Protocols",
  "Independent Quality Assurance Over-Ride Mandate",
  "Transparent Regulatory Auditing with Institutional Partners",
];

const vmq = [
  { icon: Eye, eyebrow: "Aspiration", title: "Our Vision", text: "“To be a trusted global pharmaceutical and healthcare organization, improving lives through quality healthcare for all humanity.”", foot: "Worldwide Impact", footIcon: Globe, c: "bg-blue-50 text-brand" },
  { icon: Target, eyebrow: "Mandate", title: "Our Mission", text: "“To provide safe, effective, and quality medicines at affordable prices while upholding the highest standards of quality, trust, and integrity.”", foot: "Accessible Excellence", footIcon: HeartHandshake, c: "bg-emerald-50 text-emerald-600" },
  { icon: Microscope, eyebrow: "Scientific Discipline", title: "The Quality Creed", text: "“Zero deviation tolerance. Every batch of solid orals, injectables, or nutraceutical complexes adheres strictly to pharmacopoeial specifications before institutional dispatch.”", foot: "Pharmacopoeial Conformity", footIcon: BookOpen, c: "bg-indigo-50 text-indigo-600" },
];

const values = [
  { icon: Scale, title: "Integrity & Ethics", text: "Operating with uncompromising transparency, institutional compliance, and ethical standards across clinical research, procurement, management, and commercial distribution.", foot: "Unbending Compliance", c: "text-brand bg-blue-50" },
  { icon: Heart, title: "Patient Centric", text: "Designing formulations that prioritize therapeutic effectiveness, ease of administration, safety margins, and affordable healthcare access.", foot: "Human-First Outcomes", c: "text-accent bg-red-50" },
  { icon: TrendingUp, title: "Continuous Improvement", text: "Perpetually refining manufacturing efficiencies, analytical testing regimes, bio-availability assays, and supply chain technologies for global-standard outcomes.", foot: "KAIZEN & R&D Iteration", c: "text-brand bg-blue-50" },
  { icon: BadgeCheck, title: "Quality First", text: "Zero tolerance for deviation. Every batch adheres strictly to stringent pharmacopoeial standards (IP, BP, USP) and validated protocols.", foot: "Pharmacopoeial Precision", c: "text-emerald-600 bg-emerald-50" },
];

const capabilities = [
  { icon: Pill, title: "Finished Formulations", text: "Solid oral tablets, soft gelatin capsules, injectables, and sterile oral liquid preparations manufactured in controlled cleanroom classifications.", points: ["Coated & Uncoated Tablets", "Softgels & Liquid Encapsulations", "Sterile Small Volume Parenterals"], c: "bg-blue-50 text-brand" },
  { icon: Layers, title: "Semi-Finished Formulations", text: "Custom-tailored granules, sustained-release coated pellets, and bulk intermediates ready for direct compression or secondary encapsulation worldwide.", points: ["Enteric-Coated Pellets", "Direct Compression Granules (DC)", "Controlled Dissolution Matrices"], c: "bg-blue-50 text-brand" },
  { icon: ArrowLeftRight, title: "Technology Transfer & R&D", text: "Complete dossier exchange, analytical method transfer (AMT), pilot batch validation, and scale-up engineering for institutional overseas partners.", points: ["Analytical Validation Reports", "Bioequivalence Protocol Dossiers", "On-site Technical Auditing"], c: "bg-emerald-50 text-emerald-600" },
  { icon: Factory, title: "Contract Manufacturing", text: "cGMP compliant facilities with flexible, high-speed automated packaging lines offering institutional custom branding and packaging formats.", points: ["Alu-Alu & Blister Packaging", "High Speed HDPE Bottling", "Tamper-Evident Serialization"], c: "bg-blue-50 text-brand" },
  { icon: Beaker, title: "API Supplies & Sourcing", text: "Direct high-purity active pharmaceutical ingredient sourcing supported by open-part Drug Master Files (DMF) and comprehensive purity assays.", points: ["US DMF & CEP Ready APIs", "Chiral Purity Profiling", "Residual Solvent Limit Tests"], c: "bg-indigo-50 text-indigo-600" },
  { icon: BriefcaseMedical, title: "Surgical & Disposables", text: "Sterile hospital consumables, specialized medical devices, surgical drapes, and infusion equipment serving acute clinical environments.", points: ["Sterile IV Administration Sets", "Hospital Consumables Formulary", "Gamma-Irradiated Disposables"], c: "bg-red-50 text-accent" },
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
  { icon: ShieldCheck, title: "WHO-GMP", sub: "Certified Facilities", c: "bg-blue-50 text-brand" },
  { icon: Award, title: "ISO 9001:2015", sub: "Quality Management", c: "bg-blue-50 text-brand" },
  { icon: FlaskConical, title: "GLP Validated", sub: "Analytical Labs", c: "bg-emerald-50 text-emerald-600" },
  { icon: BookOpen, title: "IP / BP / USP", sub: "Pharmacopoeial Assays", c: "bg-indigo-50 text-indigo-600" },
  { icon: FileCheck2, title: "CTD / eCTD", sub: "Ready Dossiers", c: "bg-red-50 text-accent" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/80 to-white pb-14 pt-6 md:pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-brand"><Home size={13} /> Home</Link>
            <ChevronRight size={13} />
            <span className="font-semibold text-slate-800">About Us &amp; Corporate Profile</span>
          </nav>

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                <BadgeCheck size={13} /> Institutional Life Sciences &amp; Formulations
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
                Engineering Clinical Excellence, <span className="text-brand">Empowering Global</span> Healthcare.
              </h1>
              <p className="mt-5 max-w-2xl leading-relaxed text-slate-600">
                Azure Drugs &amp; Pharmaceuticals stands at the forefront of modern pharmaceutical formulation, hospital
                healthcare integration, and international regulatory compliance. Backed by a premier Indian healthcare
                group, we deliver life-enhancing therapeutic solutions with unyielding diagnostic rigor.
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
      <section id="legacy" className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow><span className="inline-flex items-center gap-1.5"><Landmark size={14} /> Corporate Genesis &amp; Heritage</span></Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">A Legacy of Healthcare Leadership &amp; Institutional Trust</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
              <p>
                Azure Drugs &amp; Pharmaceuticals is an integral constituent of an Indian Diversified Business Group with
                distinguished eminence across hospitals, specialized clinic chains, tertiary healthcare delivery, and
                high-precision scientific infrastructure. Our existence was chartered with a singular mandate: to bridge
                diagnostic excellence with accessible, bioequivalent, and life-critical medicines.
              </p>
              <p>
                Leveraging clinical synergies across institutional care settings, we engineer solid orals, specialized soft
                gelatin capsules, sterile liquids, and specialized nutritional therapies. Our operations are governed by
                veteran scientific leadership and an agile business development core, positioning Azure as a preferred
                formulation partner for hospital formularies, state health ministries, and global pharmaceutical distributors.
              </p>
              <p>
                Through comprehensive backward integration, Drug Master File (DMF) validated active raw materials, and
                precision analytical labs, Azure translates complex pharmacokinetics into scalable, high-stability commercial
                therapies that safeguard patient outcomes across varied clinical environments.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 rounded-2xl bg-blue-50/70 p-5">
                <Hospital size={20} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-slate-900">Hospital Ecosystem Synergy</p>
                  <p className="mt-1 text-xs text-slate-500">Direct feedback from acute care clinical departments guiding formulation design.</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl bg-blue-50/70 p-5">
                <FlaskConical size={20} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-slate-900">Analytical Validation</p>
                  <p className="mt-1 text-xs text-slate-500">State-of-the-art HPLC, dissolution assays, and accelerated Zone IVb stability testing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Quote size={64} className="absolute right-5 top-5 text-slate-100" />
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-brand"><Users size={18} /></span>
                <div>
                  <p className="font-semibold text-slate-900">Executive Leadership Voice</p>
                  <p className="text-xs text-slate-500">Corporate Governance Council</p>
                </div>
              </div>
              <p className="relative mt-5 italic leading-relaxed text-slate-700">
                “Our conviction is rooted in sterile integrity and measurable patient recovery. In modern healthcare,
                pharmaceutical manufacturing is not simply a business of supply—it is a covenant of trust between our
                research benches and the bedside of every patient we touch across India and the globe.”
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
              <p className="flex items-center gap-2 font-semibold text-slate-900"><ShieldCheck size={18} className="text-brand" /> Governance &amp; Stewardship Principles</p>
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
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <Eyebrow className="text-emerald-600">Strategic Horizon</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Vision, Mission &amp; Quality Creed</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">Anchoring every formulation, clinical trial, and distribution agreement on globally recognized therapeutic benchmarks.</p>
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
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 md:grid-cols-2 md:items-end">
            <div>
              <Eyebrow>Institutional Foundation</Eyebrow>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Our 4 Core Values</h2>
            </div>
            <p className="text-slate-600">These principles dictate every internal procedure, hospital partnership, and scientific evaluation across Azure&apos;s commercial footprint.</p>
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
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow className="text-accent">Manufacturing Rigor</Eyebrow>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">End-to-End Formulation Lifecycle Capabilities</h2>
              <p className="mt-3 text-slate-600">From raw active pharmaceutical ingredients to high-capacity finished dosing forms, our manufacturing infrastructure serves international institutional requirements.</p>
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
              <Eyebrow className="text-emerald-600">Good Laboratory Practice (GLP) Auditing</Eyebrow>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">Integrated Quality Control &amp; Stability Regimes</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Every pharmaceutical dosage released by Azure undergoes triple-redundancy analytical verification. Our
                laboratories are equipped with validated High-Performance Liquid Chromatography (HPLC), Dissolution Testers
                with automated sampling, and stability chambers configured for Climatic Zone IVb (hot &amp; humid) to ensure
                stability across equatorial export destinations.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[["Zone IVb", "Stability Testing", "text-brand"], ["HPLC", "Assay Precision", "text-brand"], ["100%", "Dissolution Assays", "text-brand"], ["eCTD", "Dossier Formats", "text-accent"]].map(([v, l, c]) => (
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
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <Eyebrow className="text-accent">Commercial Reach</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Global &amp; Domestic Horizons</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">From central state health ministry tenders across India to specialized CTD registrations across 7 international territories.</p>
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
      </section>

      {/* Certifications */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Eyebrow className="text-emerald-600">Institutional Validation</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Regulatory Certifications &amp; Accreditations</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">Azure operations conform to audited domestic and global pharmaceutical manufacturing conventions.</p>
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
      <section id="contact" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900 p-7 text-white shadow-xl md:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                <BadgeCheck size={13} /> Institutional RFQ &amp; Formulations Partnership
              </span>
              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">Partner with Azure Drugs &amp; Pharmaceuticals</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-slate-300">
                Whether you are an overseas importer seeking registered CTD dossier distribution, a hospital formulary
                manager requiring high-reliability solid orals, or a brand sponsor in need of cGMP contract manufacturing,
                our executive business development team is ready to assist.
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

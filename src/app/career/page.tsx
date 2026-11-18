import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Home, ChevronRight, ArrowDown, Upload, FileText, Globe2, ShieldCheck, Users, Award,
  FlaskConical, Plane, TrendingUp, HeartPulse, Quote, CheckSquare, Microscope, ClipboardCheck,
  Hospital, Store, Globe, Truck, ChevronDown, BadgeCheck,
} from "lucide-react";
import OpenPositions from "@/components/career/OpenPositions";
import CareerForm from "@/components/career/CareerForm";
import jobs from "@/data/jobs.json";

export const metadata: Metadata = {
  title: "Careers | Azure Drugs & Pharmaceuticals",
  description: "Build your career in pharmaceutical formulations, regulatory affairs, institutional sales and international business at Azure.",
};

function Eyebrow({ children, className = "text-brand bg-blue-100" }: { children: React.ReactNode; className?: string }) {
  return <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${className}`}>{children}</span>;
}

const stats = [
  { icon: Globe2, value: "7+", label: "Export Markets Served" },
  { icon: ShieldCheck, value: "WHO-GMP", label: "& ISO 9001:2015 Compliant" },
  { icon: Users, value: "250+", label: "Professionals & Field Force" },
  { icon: Award, value: "100%", label: "Merit & Learning Driven" },
];

const why = [
  { icon: FlaskConical, title: "Scientific Rigor & Formulations", text: "Collaborate alongside seasoned formulation scientists on complex solid orals, softgels, injectables, and nutraceutical breakthroughs like Azure-D3 and BoneVita.", foot: "R&D Excellence" },
  { icon: Plane, title: "Institutional & Global Scale", text: "Gain exposure to domestic hospital procurement, tender execution, and international regulatory filing across high-growth corridors in Africa, CIS, GCC, and Southeast Asia.", foot: "Global Footprint" },
  { icon: TrendingUp, title: "Merit-Driven Progression", text: "Structured career pathing with transparent biannual appraisal metrics. We fast-track high-ownership achievers to regional and institutional leadership mandates.", foot: "Leadership Tracks" },
  { icon: HeartPulse, title: "Total Wellness & Benefits", text: "Comprehensive medical coverage, competitive base packages, generous field travel allowances, and sponsored enrollment in technical pharmacovigilance credentials.", foot: "Comprehensive Care" },
];

const tenets = ["Integrity First", "Clinical Curiosity", "Speed & Compliance", "Cross-Functional Agility"];

const areas = [
  { icon: Microscope, title: "Formulation R&D & ADL", text: "Analytical method development, chemical characterization, dissolution profile matching, and stability testing across solid orals and injectables." },
  { icon: ClipboardCheck, title: "Quality Assurance & Regulatory", text: "WHO-GMP audit readiness, eCTD and CTD dossier preparation, vendor qualification, and drug authority filings for GCC and ASEAN regions." },
  { icon: Hospital, title: "Institutional & Hospital Sales", text: "Corporate healthcare pitching, state medical supplies tenders, rate contracts, and key account management for major multi-specialty hospital chains." },
  { icon: Store, title: "PCD Franchise & Field Marketing", text: "Territory business planning, medical representative enablement, CME seminars, and distributor management for Azure-D3, BoneVita, and Vitamax." },
  { icon: Globe, title: "International Business Development", text: "Expanding Azure's cross-border presence in MENA, CIS, and Africa through overseas distributor licensing, shipping logistics, and export documentation." },
  { icon: Truck, title: "Supply Chain & Cold-Chain", text: "Good Distribution Practices (GDP), Active Pharmaceutical Ingredient (API) sourcing, tamper-evident packaging oversight, and warehouse operations." },
];

const steps = [
  { n: "01", title: "Dossier / CV Screening", text: "HR evaluates technical pedigree, therapy match, and regulatory exposure against the mandate." },
  { n: "02", title: "Technical & Clinical Round", text: "In-depth interview with Departmental Heads (R&D, Institutional Sales, or QA/RA leadership)." },
  { n: "03", title: "Leadership & Culture Fit", text: "Discussion with executive management on ownership, ethics, and strategic growth milestones." },
  { n: "04", title: "Offer & Onboarding", text: "Structured offer roll-out, cGMP immersion kit, and assigned senior mentor for day 1 integration." },
];

const faqs = [
  { q: "What does the onboarding process look like at Azure HQ and in field operations?", a: "New joiners go through a structured induction covering company policies, product portfolio training, cGMP & compliance orientation, and a buddy/mentor program. Field roles additionally get on-ground training with their reporting manager." },
  { q: "Does Azure support continuous pharmaceutical education and external certifications?", a: "Yes. We encourage continuous learning through internal training sessions, CME participation, and support for relevant professional certifications based on role and performance." },
  { q: "What are the travel and expense allowances for institutional sales roles?", a: "Field and institutional sales roles are eligible for daily allowance (DA) and travel allowance (TA) as per company policy and grade. Details are shared at the offer stage." },
  { q: "How do I track my submitted application status?", a: "Our HR team reviews every profile. If your profile matches a current or upcoming requirement, we will contact you on the email or phone number you shared. You can also write to us for an update." },
];

export default function CareerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/80 to-white pb-14 pt-6">
        <div className="mx-auto max-w-[90%] md:px-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <nav className="flex items-center gap-1.5 text-slate-500">
              <Link href="/" className="inline-flex items-center gap-1 hover:text-brand"><Home size={13} /> Home</Link>
              <ChevronRight size={13} />
              <span className="font-semibold text-slate-800">Careers &amp; Life at Azure</span>
            </nav>
            <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Recruitment Portal Active
            </span>
          </div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>Talent at Azure Drugs &amp; Pharmaceuticals • Grow with Clinical Excellence</Eyebrow>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
                Shape the Future of <span className="text-brand">Global Healthcare</span> &amp; Advanced Therapeutics
              </h1>
              <p className="mt-5 max-w-2xl leading-relaxed text-slate-600">
                Join a fast-growing pharmaceutical leader dedicated to high-potency prescription formulations, solid and liquid
                finished dosages, international exports, and institutional hospital partnerships. Build an impactful career
                driven by integrity, scientific rigor, and patient wellness.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#positions" className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
                  Explore Open Positions <ArrowDown size={16} />
                </a>
                <a href="#apply" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50">
                  <Upload size={16} className="text-brand" /> Submit Resume / Express Interest
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center justify-between px-3 py-2 text-[11px] text-slate-500">
                  <span>Careers &amp; Talent Gateway</span><span>Innovating for Health</span>
                </div>
                <div className="relative">
                  <Image src="/assets/aboutus.png" alt="Life at Azure" width={1000} height={680} priority className="h-auto w-full rounded-2xl" />
                  <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/95 p-3 shadow">
                    <div className="flex items-center justify-between">
                      <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-900"><span className="h-2 w-2 rounded-full bg-brand" /> Bio-Precision R&amp;D</p>
                      <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-emerald-700">Active Lab Hub</span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500">Accelerating softgels, lyophilizates, and micronized therapeutics across 7+ export corridors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-brand"><s.icon size={19} /></span>
                <div>
                  <p className="text-lg font-bold text-slate-900">{s.value}</p>
                  <p className="text-[11px] text-slate-500">{s.label}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Why build */}
      {/* <section className="py-14 md:py-20">
        <div className="mx-auto max-w-[90%] md:px-4">
          <div className="text-center">
            <Eyebrow>Employee Value Proposition</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Why Build Your Career at Azure?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">At Azure Drugs &amp; Pharmaceuticals, we combine corporate stability with dynamic research ambition. We equip high-performing professionals to pioneer breakthroughs across human health.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div key={w.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-brand"><w.icon size={20} /></span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{w.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{w.text}</p>
                <p className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand">{w.foot} <ChevronRight size={14} /></p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Culture */}
      {/* <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto grid max-w-[90%] gap-8 px-4 lg:grid-cols-2">
          <div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg">
              <Image src="/assets/aboutus.png" alt="Azure formulation lab" width={1000} height={680} className="h-auto w-full" />
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow">
                <BadgeCheck size={14} className="text-emerald-600" /> Advanced Formulation Technology Lab
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                <p className="text-2xl font-bold text-emerald-600">40%</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">Female Clinical Talent</p>
                <p className="mt-1 text-xs text-slate-500">Strong representation across analytical testing, regulatory, and quality teams.</p>
              </div>
              <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                <p className="text-2xl font-bold text-brand">120+ Hrs</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">Training Per FTE</p>
                <p className="mt-1 text-xs text-slate-500">Annual cGMP and pharmacovigilance workshops for institutional readiness.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-10">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-brand"><Quote size={18} /></span>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">Leadership Perspective</p>
            <p className="mt-5 text-xl font-medium leading-relaxed text-slate-900 md:text-2xl">
              “At Azure, every single formulation we manufacture touches human lives. We cultivate an ecosystem where
              ethical commitment meets clinical curiosity, empowering our people to lead with bio-precision and purposeful ambition.”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-sm font-bold text-white">AD</span>
              <div>
                <p className="font-semibold text-slate-900">Head of People &amp; Culture</p>
                <p className="text-xs text-slate-500">Azure Drugs &amp; Pharmaceuticals</p>
              </div>
            </div>
            <div className="mt-auto border-t border-slate-100 pt-6">
              <p className="mt-6 text-[11px] font-bold uppercase tracking-wider text-slate-500">Our Non-Negotiable Tenets</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {tenets.map((t) => (
                  <p key={t} className="flex items-center gap-2 text-sm text-slate-700"><CheckSquare size={16} className="text-brand" /> {t}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Impact areas */}
      {/* <section className="py-14 md:py-20">
        <div className="mx-auto max-w-[90%] md:px-4">
          <div className="grid gap-4 md:grid-cols-2 md:items-end">
            <div>
              <Eyebrow>Functional Specializations</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Where You Can Make an Impact</h2>
            </div>
            <p className="text-slate-600">Explore specialized career domains spanning synthesis to international hospital dispatch.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <div key={a.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-brand"><a.icon size={20} /></span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Open positions */}
      <section id="positions" className="bg-slate-50 py-7 md:py-10">
        <div className="mx-auto max-w-[90%] md:px-4">
          <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" /> Verified Openings
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Current Open Positions</h2>
          <p className="mt-2 mb-8 text-slate-600">Join our headquarters or regional field forces. Review detailed specs below. ({jobs.length} roles open)</p>
          <OpenPositions />
        </div>
      </section>

      {/* Apply form */}
      <section id="apply" className="py-7 md:py-20">
        <div className="mx-auto max-w-[90%] md:px-4">
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 md:p-10">
            <div className="text-center">
              <Eyebrow className="text-emerald-700 bg-emerald-100">Executive Talent Network</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Don&apos;t See a Matching Vacancy?</h2>
              <p className="mx-auto mt-2 max-w-lg text-sm text-slate-600">Submit your resume to our confidential HR repository. We routinely reach out proactively for upcoming formulations and regional expansion hubs.</p>
            </div>
            <div className="mt-8"><CareerForm /></div>
          </div>
        </div>
      </section>

      {/* Steps */}
      {/* <section className="bg-slate-50 py-7 md:py-10">
        <div className="mx-auto max-w-[90%] md:px-4">
          <div className="text-center">
            <Eyebrow className="text-emerald-700 bg-emerald-100">Systematic Onboarding</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Our 4-Step Recruitment Journey</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">A transparent, merit-focused hiring roadmap engineered for pharmaceutical professionals.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-2xl font-bold text-brand">{s.n}</p>
                <h3 className="mt-3 font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-center text-2xl font-bold text-slate-900">Frequently Asked Career Inquiries</h3>
            <div className="mt-6 space-y-3">
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
            <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
              <FileText size={14} /> Have more questions? Write to us at <a href="mailto:azuremedical01@gmail.com" className="font-semibold text-brand hover:underline">azuremedical01@gmail.com</a>
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
}

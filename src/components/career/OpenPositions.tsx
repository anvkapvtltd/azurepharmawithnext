"use client";
import { useMemo, useState } from "react";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import jobs from "@/data/jobs.json";

export type Job = (typeof jobs)[number];

const tagColors: Record<string, string> = {
  "Regulatory Affairs": "bg-blue-100 text-brand",
  "Institutional Sales": "bg-red-100 text-accent",
  "Analytical QA/QC": "bg-emerald-100 text-emerald-700",
  "Export Markets": "bg-indigo-100 text-indigo-700",
  "Brand & PMT": "bg-amber-100 text-amber-700",
};
const borderColors: Record<string, string> = {
  "Regulatory Affairs": "border-l-brand",
  "Institutional Sales": "border-l-accent",
  "Analytical QA/QC": "border-l-emerald-500",
  "Export Markets": "border-l-indigo-500",
  "Brand & PMT": "border-l-amber-500",
};

/** Fill the application form with the chosen role and scroll to it. */
function applyFor(job: Job) {
  window.dispatchEvent(new CustomEvent("career:apply", { detail: job }));
  document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
}

export default function OpenPositions() {
  const departments = useMemo(() => ["All Verticals", ...Array.from(new Set(jobs.map((j) => j.department)))], []);
  const locations = useMemo(() => ["All Locations", ...Array.from(new Set(jobs.map((j) => j.location)))], []);
  const [dept, setDept] = useState("All Verticals");
  const [loc, setLoc] = useState("All Locations");

  const list = jobs.filter(
    (j) => (dept === "All Verticals" || j.department === dept) && (loc === "All Locations" || j.location === loc)
  );

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none]">
          <div className="flex min-w-max items-center gap-2">
            <span className="mr-1 text-xs text-slate-500">Department:</span>
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setDept(d)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  dept === d ? "bg-brand text-white" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-blue-50"
                }`}
              >
                {d}{d === "All Verticals" ? ` (${jobs.length})` : ""}
              </button>
            ))}
          </div>
        </div>
        <label className="flex items-center gap-2 text-xs text-slate-600">
          <MapPin size={15} className="text-brand" />
          <select value={loc} onChange={(e) => setLoc(e.target.value)} className="rounded-lg bg-white px-3 py-2 text-xs ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand">
            {locations.map((l) => <option key={l}>{l}</option>)}
          </select>
        </label>
      </div>

      <div className="mt-6 space-y-4">
        {list.length === 0 && (
          <p className="rounded-2xl bg-white p-8 text-center text-sm text-slate-500 ring-1 ring-slate-200">
            No open roles match this filter right now. Submit your profile below and we&apos;ll reach out.
          </p>
        )}
        {list.map((j) => (
          <article key={j.id} className={`grid gap-4 rounded-2xl border border-l-4 border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md md:grid-cols-12 md:items-center md:p-6 ${borderColors[j.tag] ?? "border-l-brand"}`}>
            <div className="md:col-span-9">
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span className={`rounded px-2 py-0.5 font-bold uppercase tracking-wider ${tagColors[j.tag] ?? "bg-blue-100 text-brand"}`}>{j.tag}</span>
                <span className="rounded bg-slate-100 px-2 py-0.5 font-bold uppercase tracking-wider text-slate-600">{j.type}</span>
                <span className="inline-flex items-center gap-1 text-slate-500"><MapPin size={12} /> {j.location}</span>
                <span className="inline-flex items-center gap-1 text-slate-500"><Clock size={12} /> {j.experience}</span>
              </div>
              <h3 className="mt-2.5 text-base font-semibold text-slate-900 md:text-lg">{j.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{j.description}</p>
            </div>
            <div className="flex items-center justify-between gap-3 md:col-span-3 md:flex-col md:items-end">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700"><Briefcase size={13} /> {j.compensation}</span>
              <button onClick={() => applyFor(j)} className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
                Apply Now <ArrowRight size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

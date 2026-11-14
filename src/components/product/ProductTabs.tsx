"use client";
import { useState } from "react";
import { CheckCircle2, FlaskConical, Stethoscope, Package, Sparkles, BookOpen, Users } from "lucide-react";
import type { Product } from "@/data/products";

type Tab = { id: string; label: string; icon: React.ElementType; render: () => React.ReactNode };

export default function ProductTabs({ product }: { product: Product }) {
  const p = product;
  const tabs: Tab[] = [];

  tabs.push({
    id: "overview",
    label: "Overview",
    icon: BookOpen,
    render: () => (
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-slate-900">{p.longDescription.title}</h3>
          {p.longDescription.subtitle && (
            <p className="mt-2 font-medium text-brand">{p.longDescription.subtitle}</p>
          )}
          <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
            {p.longDescription.paragraphs.map((t, i) => <p key={i}>{t}</p>)}
          </div>
        </div>
        <div className="lg:col-span-2 space-y-4">
          {p.whoMayBenefit && (
            <div className="rounded-2xl bg-blue-50 p-6">
              <p className="flex items-center gap-2 font-semibold text-slate-900"><Users size={18} className="text-brand" /> {p.whoMayBenefit.heading}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.whoMayBenefit.text}</p>
            </div>
          )}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">At a Glance</p>
            <dl className="mt-3 divide-y divide-slate-100 text-sm">
              <div className="flex justify-between gap-4 py-2.5"><dt className="text-slate-500">Category</dt><dd className="text-right font-semibold">{p.category}</dd></div>
              <div className="flex justify-between gap-4 py-2.5"><dt className="text-slate-500">Dosage Form</dt><dd className="text-right font-semibold">{p.forms.join(" / ")}</dd></div>
              {p.targetAudience && <div className="flex justify-between gap-4 py-2.5"><dt className="text-slate-500">Designed for</dt><dd className="text-right font-semibold">{p.targetAudience}</dd></div>}
            </dl>
          </div>
        </div>
      </div>
    ),
  });

  if (p.benefits)
    tabs.push({
      id: "benefits",
      label: "Key Benefits",
      icon: Sparkles,
      render: () => (
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{p.benefits!.heading}</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.benefits!.items.map((b) => (
              <div key={b.title} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-brand"><CheckCircle2 size={18} /></span>
                <p className="mt-3 font-semibold text-slate-900">{b.title}</p>
                <p className="mt-1 text-sm text-slate-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    });

  if (p.ingredients)
    tabs.push({
      id: "ingredients",
      label: "Key Ingredients",
      icon: FlaskConical,
      render: () => (
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{p.ingredients!.heading}</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.ingredients!.items.map((ing) => (
              <div key={ing.name} className="rounded-2xl bg-blue-50/70 p-5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand">Ingredient</p>
                <p className="mt-1 font-semibold text-slate-900">{ing.name}</p>
                <p className="mt-1 text-sm text-slate-600">{ing.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    });

  if (p.clinicalRelevance)
    tabs.push({
      id: "clinical",
      label: "Clinical Relevance",
      icon: Stethoscope,
      render: () => (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-slate-900">{p.clinicalRelevance!.heading}</h3>
          {p.clinicalRelevance!.intro && <p className="mt-2 text-slate-600">{p.clinicalRelevance!.intro}</p>}
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {p.clinicalRelevance!.items.map((t) => (
              <li key={t} className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-600" /> {t}
              </li>
            ))}
          </ul>
        </div>
      ),
    });

  if (p.availableForms || p.highlights) {
    const sec = (p.availableForms ?? p.highlights)!;
    tabs.push({
      id: "forms",
      label: p.availableForms ? "Available Forms" : "Product Highlights",
      icon: Package,
      render: () => (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-slate-900">{sec.heading}</h3>
          {sec.intro && <p className="mt-2 text-slate-600">{sec.intro}</p>}
          <ul className="mt-5 space-y-3">
            {sec.items.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-slate-700">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" /> {t}
              </li>
            ))}
          </ul>
        </div>
      ),
    });
  }

  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none]">
        <div className="flex min-w-max gap-2 border-b border-slate-200 pb-3">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                t.id === active ? "bg-brand text-white shadow" : "bg-white text-slate-700 hover:bg-blue-50"
              }`}
            >
              <t.icon size={16} /> {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6">{current.render()}</div>
    </div>
  );
}

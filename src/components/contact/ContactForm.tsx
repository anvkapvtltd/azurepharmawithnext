"use client";
import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const inputCls =
  "w-full h-11 px-3.5 rounded-lg bg-blue-50/70 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand";
const labelCls = "text-[13px] font-semibold text-slate-900";

const subjects = [
  "General Inquiry",
  "Product Information",
  "Distribution / PCD Franchise",
  "Hospital & Institutional Supply",
  "Government Tender",
  "International Export / JV",
  "Contract Manufacturing",
  "Feedback / Complaint",
  "Other",
];
const products = ["Azure-D3", "BoneVita", "Vitamax Women", "Vitamax Men", "Entire Portfolio"];
const contactModes = ["Phone Call", "WhatsApp", "Email"];

type Status = { type: "idle" | "loading" | "success" | "error"; msg?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setStatus({ type: "success", msg: "Thank you! Your message has been sent. Our team will get back to you within 24 hours." });
    } catch (err) {
      setStatus({ type: "error", msg: err instanceof Error ? err.message : "Something went wrong." });
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="ct-name">Full Name *</label>
          <input id="ct-name" name="name" required placeholder="Dr. / Mr. / Ms. Full Name" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="ct-email">Email Address *</label>
          <input id="ct-email" name="email" type="email" required placeholder="name@company.com" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="ct-phone">Phone / WhatsApp *</label>
          <input id="ct-phone" name="phone" type="tel" required placeholder="+91 98765 43210" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="ct-org">Organization / Hospital</label>
          <input id="ct-org" name="organization" placeholder="Company or Hospital Name (optional)" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="ct-subject">Subject *</label>
          <select id="ct-subject" name="subject" required defaultValue="" className={inputCls}>
            <option value="" disabled>Select a subject</option>
            {subjects.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="ct-product">Product of Interest</label>
          <select id="ct-product" name="product" defaultValue="" className={inputCls}>
            <option value="">Select a product (optional)</option>
            {products.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className={labelCls}>Preferred Contact Method</legend>
        <div className="mt-1.5 flex flex-wrap gap-2">
          {contactModes.map((m, i) => (
            <label key={m} className="cursor-pointer">
              <input type="radio" name="preferredContact" value={m} defaultChecked={i === 0} className="peer sr-only" />
              <span className="inline-block rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200 transition peer-checked:bg-brand peer-checked:text-white peer-checked:ring-brand peer-focus-visible:ring-2">
                {m}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-1.5">
        <label className={labelCls} htmlFor="ct-message">Your Message *</label>
        <textarea id="ct-message" name="message" rows={5} required placeholder="How can we help you? Share your requirement, question or feedback..." className="w-full rounded-lg bg-blue-50/70 p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand" />
      </div>

      <div className="flex flex-col items-center justify-between gap-4 pt-1 sm:flex-row">
        <span className="text-xs text-slate-500">Your details are kept confidential and used only to respond to your query.</span>
        <button type="submit" disabled={status.type === "loading"} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-red-700 disabled:opacity-70 sm:w-auto">
          {status.type === "loading" ? (<>Sending… <Loader2 size={16} className="animate-spin" /></>) : (<>Send Message <Send size={16} /></>)}
        </button>
      </div>

      {(status.type === "success" || status.type === "error") && (
        <p role="status" className={`flex items-start gap-2 rounded-lg p-3 text-sm ${status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
          {status.type === "success" ? <CheckCircle2 size={18} className="shrink-0" /> : <AlertCircle size={18} className="shrink-0" />}
          {status.msg}
        </p>
      )}
    </form>
  );
}

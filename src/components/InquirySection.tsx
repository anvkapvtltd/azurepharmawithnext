"use client";
import { useState } from "react";
import { BadgeCheck, Building2, PhoneCall, AtSign, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const inputCls =
  "w-full h-11 px-3.5 rounded-lg bg-blue-50/70 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand";
const labelCls = "text-[13px] font-semibold text-slate-900";

type Status = { type: "idle" | "loading" | "success" | "error"; msg?: string };

export default function InquirySection({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(fd.entries()), page: window.location.pathname }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setStatus({ type: "success", msg: "Thank you! Your inquiry has been sent. Our Business Development team will contact you shortly." });
    } catch (err) {
      setStatus({ type: "error", msg: err instanceof Error ? err.message : "Something went wrong." });
    }
  };

  return (
    <section id="contact" className="w-full bg-blue-100/70 py-5 md:py-20">
      <div className="mx-auto max-w-[95%] md:px-4">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Contact sidebar */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-[#1e2a44] p-5 md:p-12 text-white">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-blue-200">
                  <BadgeCheck size={18} />
                  <span className="text-[11px] font-bold uppercase tracking-wider">INSTITUTIONAL & BUSINESS ENQUIRIES</span>
                </div>
                <h3 className="mb-4 text-3xl md:text-4xl font-bold">Partner with Azure Pharma</h3>
                <p className="mb-8 leading-relaxed text-slate-300">
                 Looking to collaborate on pharmaceutical distribution, institutional procurement, technology transfer, or contract manufacturing? Connect with our team to explore business opportunities and build lasting partnerships.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-blue-200"><Building2 size={20} /></span>
                    <div>
                      <h5 className="text-sm font-bold">Corporate Office:</h5>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-300">
                        Plot No. 231, Phase IV, Udyog Vihar,<br />Gurugram, Haryana - 122015, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-blue-200"><PhoneCall size={20} /></span>
                    <div>
                      <h5 className="text-sm font-bold">Telephone:</h5>
                      <a href="tel:+918375001001" className="mt-0.5 block text-sm text-blue-200 hover:underline">+91 8375001001</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-blue-200"><AtSign size={20} /></span>
                    <div>
                      <h5 className="text-sm font-bold">Official Email:</h5>
                      <a href="mailto:info@azurepharma.in" className="mt-0.5 block text-sm text-blue-200 hover:underline">info@azurepharma.in</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-8">
                <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-300" />
                <span className="text-xs text-slate-300">Institutional Procurement Desk Active (Mon - Sat)</span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 p-5 md:p-12">
              <div className="mb-6">
                {/* <span className="text-[11px] font-bold uppercase tracking-wider text-accent">RFQ &amp; Distribution Form</span> */}
                <h4 className="mt-1 text-2xl font-semibold text-slate-900">Submit an Institutional Inquiry</h4>
                <p className="mt-1 text-sm text-slate-500">
                 Connect with our team for pharmaceutical procurement, institutional supplies, distribution partnerships, and bulk formulation requirements.
                </p>
              </div>
              <form className="space-y-4" onSubmit={onSubmit}>
                {/* Honeypot – hidden from humans, catches spam bots */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelCls} htmlFor="inq-name">Contact Person *</label>
                    <input id="inq-name" name="name" type="text" required placeholder="Dr. / Mr. / Ms. Full Name" className={inputCls} />
                  </div>
                 <div className="flex flex-col gap-1.5">
                    <label className={labelCls} htmlFor="inq-email">Business Email *</label>
                    <input id="inq-email" name="email" type="email" required placeholder="name@company.com" className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  
                  <div className="flex flex-col gap-1.5">
                    <label className={labelCls} htmlFor="inq-phone">Phone / WhatsApp *</label>
                    <input id="inq-phone" name="phone" type="tel" required placeholder="+91 98765 43210" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelCls} htmlFor="inq-product">Product of Interest</label>
                    <select id="inq-product" name="product" defaultValue={defaultProduct} className={inputCls}>
                      <option value="">Select a Product</option>
                      <option value="Azure-D3">Azure-D3 (Cholecalciferol 60k IU)</option>
                      <option value="BoneVita">BoneVita Comprehensive Matrix</option>
                      <option value="Vitamax Women">Vitamax Women (40+ Active)</option>
                      <option value="Vitamax Men">Vitamax Men (40+ Vitality)</option>
         
                    </select>
                  </div>
                </div>
               
                <div className="flex flex-col gap-1.5">
                  <label className={labelCls} htmlFor="inq-message">Message &amp; Requirements *</label>
                  <textarea
                    id="inq-message"
                    name="message"
                    rows={3}
                    required
                    placeholder="Share your product requirements, therapeutic needs, target market, order quantities, or documentation requirements."
                    className="w-full rounded-lg bg-blue-50/70 p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
                <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
                  <span className="text-xs text-slate-500">
                   By submitting this form, you agree to our Privacy Policy and consent to being contacted regarding your inquiry
                  </span>
                  <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-3 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {status.type === "loading" ? (<>Sending… <Loader2 size={16} className="animate-spin" /></>) : (<>Submit Inquiry <Send size={16} /></>)}
                  </button>
                </div>
                {(status.type === "success" || status.type === "error") && (
                  <p
                    role="status"
                    className={`flex items-start gap-2 rounded-lg p-3 text-sm ${
                      status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                    }`}
                  >
                    {status.type === "success" ? <CheckCircle2 size={18} className="shrink-0" /> : <AlertCircle size={18} className="shrink-0" />}
                    {status.msg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

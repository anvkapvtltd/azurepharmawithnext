"use client";
import { BadgeCheck, Building2, PhoneCall, AtSign, Send } from "lucide-react";

const inputCls =
  "w-full h-11 px-3.5 rounded-lg bg-blue-50/70 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand";
const labelCls = "text-[13px] font-semibold text-slate-900";

export default function InquirySection() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your institutional inquiry. Our Business Development team will contact you shortly.");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="w-full bg-blue-100/70 py-10 md:py-20 scroll-mt-28">
      <div className="mx-auto max-w-[95%] px-4">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Contact sidebar */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-[#1e2a44] p-8 md:p-12 text-white">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-blue-200">
                  <BadgeCheck size={18} />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Institutional Gateway</span>
                </div>
                <h3 className="mb-4 text-3xl md:text-4xl font-bold">Partner with Azure Pharma</h3>
                <p className="mb-8 leading-relaxed text-slate-300">
                  Initiate discussions for nationwide distribution, tender procurement, technology transfer, or bulk
                  contract manufacturing. Our institutional team responds within 24 hours.
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
            <div className="lg:col-span-7 p-8 md:p-12">
              <div className="mb-6">
                {/* <span className="text-[11px] font-bold uppercase tracking-wider text-accent">RFQ &amp; Distribution Form</span> */}
                <h4 className="mt-1 text-2xl font-semibold text-slate-900">Submit Institutional Inquiry</h4>
                <p className="mt-1 text-sm text-slate-500">
                  Strictly for healthcare professionals, institutions, distributors, and bulk formulation partners.
                </p>
              </div>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelCls} htmlFor="inq-name">Contact Person *</label>
                    <input id="inq-name" type="text" required placeholder="Dr. / Mr. / Ms. Full Name" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelCls} htmlFor="inq-organization">Organization / Hospital *</label>
                    <input id="inq-organization" type="text" required placeholder="Company or Hospital Name" className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelCls} htmlFor="inq-email">Business Email *</label>
                    <input id="inq-email" type="email" required placeholder="name@company.com" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelCls} htmlFor="inq-phone">Phone / WhatsApp *</label>
                    <input id="inq-phone" type="tel" required placeholder="+91 98765 43210" className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelCls} htmlFor="inq-type">Nature of Inquiry *</label>
                    <select id="inq-type" className={inputCls}>
                      <option value="Product Dossier">Request Product Dossier / Spec Sheet</option>
                      <option value="Hospital Supply">Hospital Supplies &amp; Critical Care</option>
                      <option value="Govt Tender">Institutional / Govt Tender</option>
                      <option value="Distribution">Nationwide Pharmacy Distribution</option>
                      <option value="International Export">International Export / JV</option>
                      <option value="Contract Manufacturing">Contract Manufacturing &amp; Bulk Supply</option>
                      <option value="API Supply">API Supply / Tech Transfer</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelCls} htmlFor="inq-product">Product of Interest</label>
                    <select id="inq-product" className={inputCls}>
                      <option value="All Products">Entire Formulation Portfolio</option>
                      <option value="Azure-D3">Azure-D3 (Cholecalciferol 60k IU)</option>
                      <option value="BoneVita">BoneVita Comprehensive Matrix</option>
                      <option value="Vitamax Women">Vitamax Women (40+ Active)</option>
                      <option value="Vitamax Men">Vitamax Men (40+ Vitality)</option>
                      <option value="Custom API / Bulk">Semi-Finished Granules / Pellets / API</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelCls} htmlFor="inq-message">Message &amp; Requirements *</label>
                  <textarea
                    id="inq-message"
                    rows={3}
                    required
                    placeholder="Specify your therapeutic requirements, destination market, batch volume, or documentation needs..."
                    className="w-full rounded-lg bg-blue-50/70 p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
                <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
                  <span className="text-xs text-slate-500">
                    By submitting, you agree to our standard healthcare procurement compliance policy.
                  </span>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-red-700 sm:w-auto"
                  >
                    Send Inquiry <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

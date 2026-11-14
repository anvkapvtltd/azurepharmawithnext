"use client";
import { useEffect, useRef, useState } from "react";
import { UploadCloud, Send, Loader2, CheckCircle2, AlertCircle, FileText, X } from "lucide-react";
import type { Job } from "./OpenPositions";

const inputCls =
  "w-full h-11 px-3.5 rounded-lg bg-blue-50/70 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand";
const labelCls = "text-[13px] font-semibold text-slate-900";

const departments = [
  "Formulation R&D & ADL",
  "QA/QC & Regulatory",
  "Institutional & Hospital Sales",
  "PCD Franchise & Field Marketing",
  "International Business Development",
  "Supply Chain & Cold-Chain",
  "Other",
];
// jobs.json "department" → form dropdown value
const jobDeptToForm: Record<string, string> = {
  "QA/QC & Regulatory": "QA/QC & Regulatory",
  "Field Sales & Marketing": "Institutional & Hospital Sales",
  "Export & BD": "International Business Development",
};
const experience = ["Fresher (0 - 1 Year)", "1 - 3 Years", "3 - 5 Years", "5 - 8 Years", "8 - 12 Years", "12+ Years"];
const MAX = 10 * 1024 * 1024;

type Status = { type: "idle" | "loading" | "success" | "error"; msg?: string };

export default function CareerForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [file, setFile] = useState<File | null>(null);
  const [drag, setDrag] = useState(false);
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  // "Apply Now" on a job card pre-fills the role.
  useEffect(() => {
    const onApply = (e: Event) => {
      const job = (e as CustomEvent<Job>).detail;
      setPosition(job.title);
      setDepartment(jobDeptToForm[job.department] ?? "Other");
    };
    window.addEventListener("career:apply", onApply);
    return () => window.removeEventListener("career:apply", onApply);
  }, []);

  const pickFile = (f?: File | null) => {
    if (!f) return;
    const ok = /\.(pdf|docx?|DOCX?|PDF)$/.test(f.name);
    if (!ok) return setStatus({ type: "error", msg: "Resume must be a PDF, DOC or DOCX file." });
    if (f.size > MAX) return setStatus({ type: "error", msg: "Resume must be 10 MB or smaller." });
    setStatus({ type: "idle" });
    setFile(f);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return setStatus({ type: "error", msg: "Please attach your resume." });
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.set("resume", file);
    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/career", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setFile(null);
      setPosition("");
      setDepartment("");
      setStatus({ type: "success", msg: "Thank you! Your profile has been submitted to Azure HR. We'll contact you if your profile matches a requirement." });
    } catch (err) {
      setStatus({ type: "error", msg: err instanceof Error ? err.message : "Something went wrong." });
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="position" value={position} />

      {position && (
        <div className="flex items-start justify-between gap-3 rounded-lg bg-blue-50 p-3 text-sm">
          <p><span className="text-slate-500">Applying for: </span><span className="font-semibold text-brand">{position}</span></p>
          <button type="button" onClick={() => setPosition("")} aria-label="Clear position" className="text-slate-400 hover:text-slate-700"><X size={16} /></button>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="c-name">Full Name *</label>
          <input id="c-name" name="name" required placeholder="e.g. Dr. Rajesh Sharma / Priya Sen" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="c-email">Email Address *</label>
          <input id="c-email" name="email" type="email" required placeholder="e.g. rajesh.pharma@gmail.com" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="c-phone">Phone / WhatsApp Number *</label>
          <input id="c-phone" name="phone" type="tel" required placeholder="+91 98765 43210" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="c-dept">Desired Department *</label>
          <select id="c-dept" name="department" required value={department} onChange={(e) => setDepartment(e.target.value)} className={inputCls}>
            <option value="">Select Primary Domain</option>
            {departments.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="c-exp">Total Pharma Experience *</label>
          <select id="c-exp" name="experience" required defaultValue="" className={inputCls}>
            <option value="">Select Experience Band</option>
            {experience.map((x) => <option key={x}>{x}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="c-loc">Current / Preferred Location *</label>
          <input id="c-loc" name="location" required placeholder="e.g. Gurugram / Delhi / Chandigarh / Mumbai" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="c-ctc">Current CTC &amp; Notice Period</label>
          <input id="c-ctc" name="ctc" placeholder="e.g. 8.5 LPA + 30 Days Notice" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="c-li">LinkedIn Profile URL</label>
          <input id="c-li" name="linkedin" type="url" placeholder="https://linkedin.com/in/username" className={inputCls} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className={labelCls}>Curriculum Vitae / Resume (PDF / DOCX up to 10MB) *</span>
        {file ? (
          <div className="flex items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <span className="flex min-w-0 items-center gap-2 text-sm text-emerald-800">
              <FileText size={18} className="shrink-0" /> <span className="truncate">{file.name}</span>
              <span className="shrink-0 text-xs text-emerald-600">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
            </span>
            <button type="button" onClick={() => setFile(null)} className="text-emerald-700 hover:text-red-600" aria-label="Remove file"><X size={18} /></button>
          </div>
        ) : (
          <div
            role="button"
            tabIndex={0}
            onClick={() => fileRef.current?.click()}
            onKeyDown={(e) => e.key === "Enter" && fileRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={(e) => { e.preventDefault(); setDrag(false); pickFile(e.dataTransfer.files?.[0]); }}
            className={`cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition ${drag ? "border-brand bg-blue-50" : "border-blue-200 bg-blue-50/40 hover:bg-blue-50"}`}
          >
            <UploadCloud size={30} className="mx-auto text-brand" />
            <p className="mt-2 text-sm text-slate-700">Drag &amp; drop your resume here, or <span className="font-semibold text-brand underline">Browse Files</span></p>
            <p className="mt-1 text-xs text-slate-500">Accepted formats: PDF, DOC, DOCX • File size limit: 10 MB</p>
          </div>
        )}
        <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => pickFile(e.target.files?.[0])} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelCls} htmlFor="c-sum">Brief Summary of Therapeutic Expertise &amp; Career Aspirations</label>
        <textarea id="c-sum" name="summary" rows={4} placeholder="Summarize your key formulation milestones, sales targets achieved, or regulatory filings completed..." className="w-full rounded-lg bg-blue-50/70 p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand" />
      </div>

      <button type="submit" disabled={status.type === "loading"} className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3.5 text-sm font-semibold text-white shadow-md hover:bg-brand-dark disabled:opacity-70">
        {status.type === "loading" ? (<><Loader2 size={17} className="animate-spin" /> Submitting…</>) : (<><Send size={17} /> Submit Profile to Azure HR Management</>)}
      </button>

      {(status.type === "success" || status.type === "error") && (
        <p role="status" className={`flex items-start gap-2 rounded-lg p-3 text-sm ${status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
          {status.type === "success" ? <CheckCircle2 size={18} className="shrink-0" /> : <AlertCircle size={18} className="shrink-0" />}
          {status.msg}
        </p>
      )}

      <p className="text-center text-xs text-slate-500">
        Confidentiality Guarantee: Azure Drugs &amp; Pharmaceuticals does not charge any recruitment fees at any stage of hiring.
        Your application details are managed under strict data privacy protocols.
      </p>
    </form>
  );
}

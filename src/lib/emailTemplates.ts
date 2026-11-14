import { esc } from "./mailer";

type Row = [label: string, value: string | undefined];

function rows(items: Row[]) {
  return items
    .filter(([, v]) => v && String(v).trim())
    .map(
      ([l, v]) => `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #eef2f7;color:#64748b;font-size:13px;width:38%;vertical-align:top">${esc(l)}</td>
        <td style="padding:10px 14px;border-bottom:1px solid #eef2f7;color:#0f172a;font-size:14px;font-weight:600">${esc(v)}</td>
      </tr>`
    )
    .join("");
}

function layout(opts: { accent: string; badge: string; title: string; subtitle: string; body: string }) {
  const time = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });
  return `<!doctype html><html><body style="margin:0;background:#f1f5f9;font-family:Segoe UI,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:24px 12px"><tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 18px rgba(15,23,42,.08)">
      <tr><td style="background:${opts.accent};padding:24px 28px;color:#ffffff">
        <div style="display:inline-block;background:rgba(255,255,255,.18);padding:4px 10px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase">${opts.badge}</div>
        <h1 style="margin:12px 0 4px;font-size:22px">${opts.title}</h1>
        <p style="margin:0;font-size:13px;opacity:.85">${opts.subtitle}</p>
      </td></tr>
      <tr><td style="padding:24px 28px">${opts.body}</td></tr>
      <tr><td style="background:#f8fafc;padding:16px 28px;color:#94a3b8;font-size:12px;border-top:1px solid #eef2f7">
        Received via azurepharma website · ${time} IST<br/>Reply to this email to respond directly to the sender.
      </td></tr>
    </table>
  </td></tr></table></body></html>`;
}

function messageBlock(title: string, text?: string) {
  if (!text?.trim()) return "";
  return `<h3 style="margin:24px 0 8px;font-size:14px;color:#0f172a">${esc(title)}</h3>
    <div style="background:#f8fafc;border-left:4px solid #1d4fa3;padding:14px 16px;border-radius:8px;color:#334155;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(text)}</div>`;
}

export type InquiryData = {
  name: string; email: string; phone: string; product?: string; message: string; page?: string;
};

export function productInquiryTemplate(d: InquiryData) {
  return layout({
    accent: "linear-gradient(135deg,#0b2a5c,#1d4fa3)",
    badge: "Product Inquiry",
    title: d.product ? `New Inquiry – ${esc(d.product)}` : "New Institutional Inquiry",
    subtitle: "A visitor has submitted the RFQ / Distribution form.",
    body: `<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eef2f7;border-radius:10px;border-collapse:separate;overflow:hidden">
      ${rows([
        ["Contact Person", d.name],
        ["Business Email", d.email],
        ["Phone / WhatsApp", d.phone],
        ["Product of Interest", d.product || "Not specified"],
        ["Submitted From", d.page],
      ])}
    </table>${messageBlock("Message & Requirements", d.message)}`,
  });
}

export type ContactData = {
  name: string; email: string; phone: string; organization?: string; subject: string;
  product?: string; preferredContact?: string; message: string;
};

export function contactTemplate(d: ContactData) {
  return layout({
    accent: "linear-gradient(135deg,#312e81,#4f46e5)",
    badge: "Contact Us",
    title: `New Message – ${esc(d.subject)}`,
    subtitle: "A visitor has submitted the Contact Us page form.",
    body: `<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eef2f7;border-radius:10px;border-collapse:separate;overflow:hidden">
      ${rows([
        ["Full Name", d.name],
        ["Email", d.email],
        ["Phone / WhatsApp", d.phone],
        ["Organization", d.organization],
        ["Subject", d.subject],
        ["Product of Interest", d.product],
        ["Preferred Contact Method", d.preferredContact],
      ])}
    </table>${messageBlock("Message", d.message)}`,
  });
}

export type CareerData = {
  name: string; email: string; phone: string; department: string; position?: string;
  experience?: string; location?: string; ctc?: string; linkedin?: string; summary?: string;
};

export function careerTemplate(d: CareerData, resumeName?: string) {
  return layout({
    accent: "linear-gradient(135deg,#065f46,#0f766e)",
    badge: "Career Application",
    title: `${esc(d.name)} – ${esc(d.position || d.department)}`,
    subtitle: "A new candidate profile has been submitted via the Careers page.",
    body: `<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eef2f7;border-radius:10px;border-collapse:separate;overflow:hidden">
      ${rows([
        ["Full Name", d.name],
        ["Email", d.email],
        ["Phone / WhatsApp", d.phone],
        ["Applied For", d.position || "General Application"],
        ["Desired Department", d.department],
        ["Pharma Experience", d.experience],
        ["Current / Preferred Location", d.location],
        ["Current CTC & Notice Period", d.ctc],
        ["LinkedIn", d.linkedin],
        ["Resume", resumeName ? `${resumeName} (attached)` : "Not attached"],
      ])}
    </table>${messageBlock("Therapeutic Expertise & Career Aspirations", d.summary)}`,
  });
}

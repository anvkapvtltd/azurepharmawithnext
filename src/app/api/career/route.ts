import { NextResponse } from "next/server";
import { sendMail, isEmail } from "@/lib/mailer";
import { careerTemplate, type CareerData } from "@/lib/emailTemplates";

export const runtime = "nodejs";

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED = [".pdf", ".doc", ".docx"];

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    if (form.get("website")) return NextResponse.json({ ok: true }); // honeypot

    const get = (k: string) => String(form.get(k) ?? "").trim();
    const data: CareerData = {
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      department: get("department"),
      position: get("position"),
      experience: get("experience"),
      location: get("location"),
      ctc: get("ctc"),
      linkedin: get("linkedin"),
      summary: get("summary"),
    };

    if (!data.name || !data.email || !data.phone || !data.department) {
      return NextResponse.json({ ok: false, error: "Please fill all required fields." }, { status: 400 });
    }
    if (!isEmail(data.email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    const file = form.get("resume");
    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json({ ok: false, error: "Please attach your resume." }, { status: 400 });
    }
    const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED.includes(ext)) {
      return NextResponse.json({ ok: false, error: "Resume must be PDF, DOC or DOCX." }, { status: 400 });
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ ok: false, error: "Resume must be 10 MB or smaller." }, { status: 400 });
    }

    await sendMail({
      subject: `Career Application – ${data.position || data.department} | ${data.name}`,
      html: careerTemplate(data, file.name),
      replyTo: data.email,
      attachments: [{ filename: file.name, content: Buffer.from(await file.arrayBuffer()), contentType: file.type || undefined }],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[career] send failed:", err);
    return NextResponse.json({ ok: false, error: "Could not submit your application. Please try again." }, { status: 500 });
  }
}

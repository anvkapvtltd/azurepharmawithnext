import { NextResponse } from "next/server";
import { sendMail, isEmail } from "@/lib/mailer";
import { contactTemplate, type ContactData } from "@/lib/emailTemplates";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactData & { website?: string };
    if (body.website) return NextResponse.json({ ok: true }); // honeypot

    const { name, email, phone, subject, message } = body;
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ ok: false, error: "Please fill all required fields." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    await sendMail({
      subject: `Contact Us – ${subject} | ${name}`,
      html: contactTemplate(body),
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json({ ok: false, error: "Could not send your message. Please try again or call us." }, { status: 500 });
  }
}

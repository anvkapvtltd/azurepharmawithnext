import { NextResponse } from "next/server";
import { sendMail, isEmail } from "@/lib/mailer";
import { productInquiryTemplate, type InquiryData } from "@/lib/emailTemplates";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as InquiryData & { website?: string };

    // Honeypot: bots fill the hidden "website" field — pretend success.
    if (body.website) return NextResponse.json({ ok: true });

    const { name, email, phone, message } = body;
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json({ ok: false, error: "Please fill all required fields." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    await sendMail({
      subject: `Product Inquiry${body.product ? ` – ${body.product}` : ""} | ${name}`,
      html: productInquiryTemplate(body),
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquiry] send failed:", err);
    return NextResponse.json({ ok: false, error: "Could not send your inquiry. Please try again or call us." }, { status: 500 });
  }
}

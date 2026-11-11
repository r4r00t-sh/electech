import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  service: z.string().min(1),
  projectType: z.string().min(2),
  message: z.string().min(10),
  website: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Honeypot — silently accept bots
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const to = process.env.CONTACT_TO_EMAIL ?? "info@electechmep.com";
    const payload = {
      ...parsed.data,
      receivedAt: new Date().toISOString(),
      to,
    };

    // Prefer Resend when configured; otherwise log for local/dev handover.
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "website@electechmep.com",
          to: [to],
          subject: `Website enquiry — ${parsed.data.service}`,
          text: [
            `Name: ${parsed.data.name}`,
            `Company: ${parsed.data.company}`,
            `Email: ${parsed.data.email}`,
            `Phone: ${parsed.data.phone}`,
            `Service: ${parsed.data.service}`,
            `Project type: ${parsed.data.projectType}`,
            "",
            parsed.data.message,
          ].join("\n"),
        }),
      });
      if (!res.ok) {
        console.error("Resend error", await res.text());
        return NextResponse.json({ error: "Mail failed" }, { status: 502 });
      }
    } else {
      console.info("[contact form]", payload);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

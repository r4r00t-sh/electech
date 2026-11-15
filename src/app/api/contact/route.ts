import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(7),
  projectLocation: z.string().min(2),
  propertyType: z.string().min(1),
  service: z.string().min(1),
  message: z.string().min(10),
  privacy: z.boolean().refine((v) => v === true),
  website: z.string().optional(),
});

function formRecipients(): string[] {
  const primary =
    process.env.FORM_TO_EMAIL ??
    process.env.CONTACT_TO_EMAIL ??
    "info@electechmep.com";
  const secondary = process.env.FORM_CC_EMAIL;
  const list = [primary];
  if (secondary && secondary !== primary) list.push(secondary);
  return list;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const to = formRecipients();
    const payload = {
      ...parsed.data,
      receivedAt: new Date().toISOString(),
      to,
    };

    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "website@electechmep.com",
          to,
          subject: `Website enquiry — ${parsed.data.service}`,
          text: [
            `Name: ${parsed.data.name}`,
            `Company: ${parsed.data.company || "—"}`,
            `Email: ${parsed.data.email}`,
            `Phone: ${parsed.data.phone}`,
            `Project location: ${parsed.data.projectLocation}`,
            `Property type: ${parsed.data.propertyType}`,
            `Service: ${parsed.data.service}`,
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

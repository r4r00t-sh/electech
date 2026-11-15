import { NextResponse } from "next/server";
import { z } from "zod";

const MAX_CV_BYTES = 5 * 1024 * 1024;

const fieldsSchema = z.object({
  name: z.string().min(2),
  trade: z.string().min(2),
  years: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(7),
  privacy: z.literal("true"),
  website: z.string().optional(),
});

function formRecipients(): string[] {
  const primary =
    process.env.FORM_TO_EMAIL ??
    process.env.CONTACT_TO_EMAIL ??
    "info@electechmep.com";
  return [primary];
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const raw = {
      name: String(form.get("name") ?? ""),
      trade: String(form.get("trade") ?? ""),
      years: String(form.get("years") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      privacy: String(form.get("privacy") ?? ""),
      website: String(form.get("website") ?? ""),
    };

    const parsed = fieldsSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const cv = form.get("cv");
    if (!(cv instanceof File) || cv.size === 0) {
      return NextResponse.json({ error: "CV required" }, { status: 400 });
    }
    if (cv.size > MAX_CV_BYTES) {
      return NextResponse.json({ error: "CV too large" }, { status: 400 });
    }
    const nameOk = /\.(pdf|doc|docx)$/i.test(cv.name);
    if (!nameOk) {
      return NextResponse.json({ error: "Invalid CV type" }, { status: 400 });
    }

    const to = formRecipients();
    const bytes = Buffer.from(await cv.arrayBuffer());
    const contentType = cv.type || "application/octet-stream";

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
          subject: `Careers application — ${parsed.data.trade}`,
          text: [
            `Name: ${parsed.data.name}`,
            `Trade: ${parsed.data.trade}`,
            `Years of experience: ${parsed.data.years}`,
            `Email: ${parsed.data.email}`,
            `Phone: ${parsed.data.phone}`,
            `CV filename: ${cv.name}`,
          ].join("\n"),
          attachments: [
            {
              filename: cv.name,
              content: bytes.toString("base64"),
              contentType,
            },
          ],
        }),
      });
      if (!res.ok) {
        console.error("Resend careers error", await res.text());
        return NextResponse.json({ error: "Mail failed" }, { status: 502 });
      }
    } else {
      console.info("[careers form]", {
        ...parsed.data,
        cvName: cv.name,
        cvSize: cv.size,
        to,
        receivedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

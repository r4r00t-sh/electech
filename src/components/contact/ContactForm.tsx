"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const PROPERTY_TYPES = [
  "Commercial office",
  "Premium villa",
  "Retail & F&B",
  "Hospitality",
  "Other",
] as const;

const SERVICES = [
  "Integrated MEP",
  "Mechanical & Plumbing",
  "Electrical",
  "Fire Protection Support",
  "Maintenance / AMC",
  "Other",
] as const;

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  projectLocation: z.string().min(2, "Enter the project location"),
  propertyType: z.string().min(1, "Select a property type"),
  service: z.string().min(1, "Select a service"),
  message: z.string().min(10, "Please add short scope / project details"),
  privacy: z
    .boolean()
    .refine((v) => v === true, "Please accept the privacy notice"),
  website: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { website: "", company: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed");
      trackEvent("quote_submit", { service: values.service });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  });

  if (status === "success") {
    return (
      <div
        className="rounded-[var(--radius-card)] border border-maintenance/30 bg-white p-8"
        role="status"
      >
        <h3 className="font-display text-2xl font-bold text-navy">
          Thank you. Your enquiry has been received.
        </h3>
        <Button className="mt-6" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-[var(--radius-card)] border border-navy/8 bg-white p-6 shadow-[var(--shadow-card)] md:p-8"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} className={inputClass} autoComplete="name" />
        </Field>
        <Field label="Company (optional)" error={errors.company?.message}>
          <input
            {...register("company")}
            className={inputClass}
            autoComplete="organization"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            className={inputClass}
            autoComplete="email"
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            className={inputClass}
            autoComplete="tel"
          />
        </Field>
        <Field label="Project location" error={errors.projectLocation?.message}>
          <input {...register("projectLocation")} className={inputClass} />
        </Field>
        <Field label="Property type" error={errors.propertyType?.message}>
          <select {...register("propertyType")} className={inputClass} defaultValue="">
            <option value="" disabled>
              Select property type
            </option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Service required" error={errors.service?.message}>
          <select {...register("service")} className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Short scope / project details" error={errors.message?.message}>
          <textarea {...register("message")} className={inputClass} rows={5} />
        </Field>
      </div>

      <p className="mt-4 text-[14px] text-slate-dark">
        Prefer to send drawings? Email{" "}
        <a
          href="mailto:projects@electechmep.com"
          className="font-semibold text-navy hover:text-green"
          onClick={() => trackEvent("email_click", { context: "contact_drawings" })}
        >
          projects@electechmep.com
        </a>
      </p>

      <label className="mt-5 flex items-start gap-3 text-[14px] text-slate-dark">
        <input
          type="checkbox"
          {...register("privacy")}
          className="mt-1 h-4 w-4 shrink-0 rounded border-navy/30"
        />
        <span>
          I agree to the{" "}
          <Link href="/privacy" className="font-semibold text-navy hover:text-green">
            privacy notice
          </Link>
          .
        </span>
      </label>
      {errors.privacy?.message ? (
        <p className="mt-1 text-xs text-fire" role="alert">
          {errors.privacy.message}
        </p>
      ) : null}

      <div
        className="pointer-events-none absolute -left-[9999px] top-auto h-px w-px overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <label htmlFor="contact-website-hp">Website</label>
        <input
          id="contact-website-hp"
          {...register("website")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" ? (
        <p className="mt-4 text-sm text-fire" role="alert">
          Something went wrong. Please try again or email info@electechmep.com.
        </p>
      ) : null}

      <Button type="submit" className="mt-6">
        {status === "loading" ? "Sending…" : "Submit Your Enquiry"}
      </Button>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-white px-3 py-2.5 text-sm text-navy outline-none transition focus:border-amber";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-navy">{label}</span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-fire">{error}</span>
      ) : null}
    </label>
  );
}

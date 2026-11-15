"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  trade: z.string().min(2, "Please enter your trade"),
  years: z.string().min(1, "Enter years of experience"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  privacy: z
    .boolean()
    .refine((v) => v === true, "Please accept the privacy notice"),
  website: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function CareersForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [cvError, setCvError] = useState<string | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { website: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setCvError(null);
    if (!cvFile) {
      setCvError("Please upload your CV (PDF, DOC or DOCX, max 5 MB)");
      return;
    }
    if (cvFile.size > MAX_CV_BYTES) {
      setCvError("CV must be 5 MB or smaller");
      return;
    }
    const okType =
      CV_TYPES.includes(cvFile.type) ||
      /\.(pdf|doc|docx)$/i.test(cvFile.name);
    if (!okType) {
      setCvError("Upload a PDF, DOC or DOCX file");
      return;
    }

    setStatus("loading");
    try {
      const body = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          body.append(key, String(value));
        }
      });
      body.append("cv", cvFile);

      const res = await fetch("/api/careers", { method: "POST", body });
      if (!res.ok) throw new Error("Failed");
      trackEvent("careers_submit", { trade: values.trade });
      setStatus("success");
      reset();
      setCvFile(null);
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
          Thank you. Your application has been received.
        </h3>
        <Button className="mt-6" onClick={() => setStatus("idle")}>
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-[var(--radius-card)] border border-navy/8 bg-white p-6 shadow-[var(--shadow-card)] md:p-8"
      noValidate
      encType="multipart/form-data"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} className={inputClass} autoComplete="name" />
        </Field>
        <Field label="Trade" error={errors.trade?.message}>
          <input
            {...register("trade")}
            className={inputClass}
            placeholder="e.g. Electrician, HVAC technician"
          />
        </Field>
        <Field label="Years of experience" error={errors.years?.message}>
          <input {...register("years")} className={inputClass} inputMode="numeric" />
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
        <Field label="CV (PDF, DOC or DOCX, max 5 MB)" error={cvError ?? undefined}>
          <input
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className={inputClass}
            onChange={(e) => {
              setCvError(null);
              setCvFile(e.target.files?.[0] ?? null);
            }}
          />
        </Field>
      </div>

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
        <label htmlFor="careers-website-hp">Website</label>
        <input
          id="careers-website-hp"
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
        {status === "loading" ? "Sending…" : "Submit application"}
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

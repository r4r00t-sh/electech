"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { BUCKETS } from "@/lib/buckets";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter your company"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  service: z.string().min(1, "Select a service"),
  projectType: z.string().min(2, "Describe the project type"),
  message: z.string().min(10, "Please add a short message"),
  website: z.string().optional(), // honeypot
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
    defaultValues: { website: "" },
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
          Thank you — message received
        </h3>
        <p className="mt-3 text-slate">
          Our engineers will review your enquiry and respond shortly. For urgent
          matters, call or WhatsApp us using the details on this page.
        </p>
        <Button className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
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
        <Field label="Company" error={errors.company?.message}>
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
        <Field label="Service interested in" error={errors.service?.message}>
          <select {...register("service")} className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {BUCKETS.map((b) => (
              <option key={b.id} value={b.label}>
                {b.label}
              </option>
            ))}
            <option value="General enquiry">General enquiry</option>
          </select>
        </Field>
        <Field label="Project type" error={errors.projectType?.message}>
          <input
            {...register("projectType")}
            className={inputClass}
            placeholder="MEP or maintenance"
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message" error={errors.message?.message}>
          <textarea {...register("message")} className={inputClass} rows={5} />
        </Field>
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden>
        <label>
          Website
          <input {...register("website")} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" ? (
        <p className="mt-4 text-sm text-fire" role="alert">
          Something went wrong. Please try again or email info@electechmep.com.
        </p>
      ) : null}

      <Button type="submit" className="mt-6" >
        {status === "loading" ? "Sending…" : "Send enquiry"}
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

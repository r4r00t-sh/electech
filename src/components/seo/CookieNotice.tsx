"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const KEY = "electech-cookie-consent";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed bottom-20 left-4 right-4 z-50 rounded-2xl border border-navy/10 bg-white p-4 shadow-xl md:bottom-6 md:left-auto md:right-6 md:max-w-md"
    >
      <p className="text-sm text-slate-dark">
        We use cookies for essential site functions and, with your consent,
        analytics to improve the experience. See our privacy practices before
        accepting.
      </p>
      <div className="mt-3 flex gap-2">
        <Button
          className="flex-1"
          onClick={() => {
            localStorage.setItem(KEY, "accepted");
            setVisible(false);
            window.dispatchEvent(new Event("electech-consent"));
          }}
        >
          Accept
        </Button>
        <Button
          variant="ghost"
          className="flex-1"
          onClick={() => {
            localStorage.setItem(KEY, "essential");
            setVisible(false);
          }}
        >
          Essential only
        </Button>
      </div>
    </div>
  );
}

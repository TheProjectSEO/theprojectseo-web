"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Management URLs contain bearer tokens and must never enter analytics or session replay.
export function BookingPrivacyBoundary({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return pathname?.startsWith("/meeting/") ? null : children;
}

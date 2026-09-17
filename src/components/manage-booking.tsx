"use client";

import { CalendarDays, Check, ExternalLink, LoaderCircle, RotateCcw, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { NativeScheduler } from "./native-scheduler";
import { bookingApi } from "@/lib/native-booking";
import styles from "./native-booking.module.css";

type ManagedBooking = {
  status: "pending" | "confirmed" | "cancelled" | "failed";
  startsAt: string;
  endsAt: string;
  durationMinutes: number;
  visitorTimeZone: string;
  attendeeName: string;
  meetUrl: string | null;
  eventUrl: string | null;
};

export function ManageBooking({ token }: { token: string }) {
  const browserTimeZone = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Manila", []);
  const [booking, setBooking] = useState<ManagedBooking | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showReschedule, setShowReschedule] = useState(false);
  const [cancelling, setCancelling] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`${bookingApi}/manage/?token=${encodeURIComponent(token)}`, { cache: "no-store" })
      .then(async (response) => {
        const result = await response.json().catch(() => ({})) as ManagedBooking & { error?: string };
        if (!response.ok) throw new Error(result.error || "The meeting could not be loaded.");
        if (active) setBooking(result);
      })
      .catch((loadError) => { if (active) setError(loadError instanceof Error ? loadError.message : "The meeting could not be loaded."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [token]);

  async function cancelMeeting() {
    if (!window.confirm("Cancel this meeting? Google will remove the event and notify the attendees.")) return;
    setCancelling(true);
    setError("");
    try {
      const response = await fetch(`${bookingApi}/manage/`, { method: "DELETE", headers: { "content-type": "application/json" }, body: JSON.stringify({ token }) });
      const result = await response.json().catch(() => ({})) as ManagedBooking & { error?: string };
      if (!response.ok) throw new Error(result.error || "The meeting could not be cancelled.");
      setBooking(result);
      setShowReschedule(false);
    } catch (cancelError) {
      setError(cancelError instanceof Error ? cancelError.message : "The meeting could not be cancelled.");
    } finally {
      setCancelling(false);
    }
  }

  if (loading) return <div className="meeting-manage__loading"><LoaderCircle className="spin" /> Loading your meeting…</div>;
  if (error && !booking) return <div className="meeting-manage__error" role="alert"><strong>This link cannot open the meeting.</strong><p>{error}</p><Link className="button button--dark" href="/book/">Book a meeting</Link></div>;
  if (!booking) return null;

  if (booking.status === "cancelled") {
    return <section className={`${styles.root} meeting-manage__cancelled`}><div><Check aria-hidden="true" /></div><p className="booking-eyebrow">Meeting cancelled</p><h1>The calendar event has been removed.</h1><p>If you would still like to speak with us, submit the short form again to choose a fresh time.</p><Link className="button button--dark" href="/book/">Choose another time</Link></section>;
  }

  const displayTimeZone = validTimeZone(booking.visitorTimeZone) ? booking.visitorTimeZone : browserTimeZone;
  return (
    <div className={styles.root}>
      <section className="meeting-manage__card" aria-labelledby="manage-meeting-title">
        <div className="meeting-manage__icon"><CalendarDays aria-hidden="true" /></div>
        <div>
          <p className="booking-eyebrow">Your SEO discovery meeting</p>
          <h1 id="manage-meeting-title">Your meeting is confirmed.</h1>
          <p className="meeting-manage__time">{formatDateTime(booking.startsAt, displayTimeZone)}</p>
          <p>Shown in {timezoneLabel(displayTimeZone)} · {booking.durationMinutes} minutes · Google Meet</p>
          <div className="meeting-manage__actions">
            {booking.meetUrl && <a className="button button--dark" href={booking.meetUrl} target="_blank" rel="noopener noreferrer">Open Google Meet <ExternalLink size={16} /></a>}
            <button type="button" onClick={() => setShowReschedule((value) => !value)}><RotateCcw size={16} /> {showReschedule ? "Keep current time" : "Reschedule"}</button>
            <button className="meeting-manage__cancel" type="button" onClick={cancelMeeting} disabled={cancelling}><X size={16} /> {cancelling ? "Cancelling…" : "Cancel meeting"}</button>
          </div>
          {error && <p className="meeting-manage__inline-error" role="alert">{error}</p>}
        </div>
      </section>
      {showReschedule && <NativeScheduler managementToken={token} />}
    </div>
  );
}

function formatDateTime(iso: string, timeZone: string) {
  return new Intl.DateTimeFormat("en", { dateStyle: "full", timeStyle: "short", timeZone }).format(new Date(iso));
}
function timezoneLabel(value: string) { return value.replaceAll("_", " ").replace("/", " — "); }
function validTimeZone(value: string) { try { new Intl.DateTimeFormat("en", { timeZone: value }).format(); return true; } catch { return false; } }

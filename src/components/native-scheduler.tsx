"use client";

import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, ExternalLink, Globe2, LoaderCircle, Video } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { bookingBrand, bookingApi } from "@/lib/native-booking";
import styles from "./native-booking.module.css";
export type BookingIdentity = { name: string; email: string; websiteUrl?: string; summary?: string };

type Availability = {
  slots: string[];
  durationMinutes: number;
  hostTimeZone: string;
  error?: string;
};

type BookingResult = {
  ok?: boolean;
  startsAt?: string;
  endsAt?: string;
  durationMinutes?: number;
  meetUrl?: string | null;
  manageUrl?: string;
  attendeeEmail?: string;
  notificationStatus?: "sent" | "skipped" | "failed";
  error?: string;
};

const calendlyFallback = "mailto:aditya@theprojectseo.com";

export function NativeScheduler({
  leadId,
  bookingToken,
  previewMode = false,
  managementToken,
  directBooking = false,
  brand = bookingBrand,
  identity,
}: {
  leadId?: string;
  bookingToken?: string;
  previewMode?: boolean;
  managementToken?: string;
  directBooking?: boolean;
  brand?: "tps" | "gradient";
  identity?: BookingIdentity;
}) {
  const rescheduleMode = Boolean(managementToken);
  useEffect(() => { document.getElementById("booking-title")?.scrollIntoView({ block: "start", behavior: "smooth" }); }, []);
  const browserTimeZone = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Manila", []);
  const [timeZone, setTimeZone] = useState(browserTimeZone);
  const [availability, setAvailability] = useState<Availability | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [monthOffset, setMonthOffset] = useState(0);
  const [booking, setBooking] = useState<BookingResult | null>(null);
  const [bookingStatus, setBookingStatus] = useState<"idle" | "sending" | "error">("idle");
  const [attendeeName, setAttendeeName] = useState(identity?.name || "");
  const [attendeeEmail, setAttendeeEmail] = useState(identity?.email || "");

  useEffect(() => {
    let active = true;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`${bookingApi}/availability/`, { cache: "no-store" });
        const result = await response.json().catch(() => ({})) as Availability;
        if (!response.ok) throw new Error(result.error || "Live availability could not be loaded.");
        if (!active) return;
        setAvailability(result);
      } catch (loadError) {
        if (active) setError(loadError instanceof Error ? loadError.message : "Live availability could not be loaded.");
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, []);

  const slotsByDate = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const slot of availability?.slots || []) {
      // Availability is constrained to the organiser’s working week by the server.
      const key = dateKey(slot, timeZone);
      map.set(key, [...(map.get(key) || []), slot]);
    }
    return map;
  }, [availability, timeZone]);

  const availableDates = useMemo(() => [...slotsByDate.keys()].sort(), [slotsByDate]);
  const visibleMonth = useMemo(() => {
    const base = availableDates[0] ? parseDateKey(availableDates[0]) : todayParts(timeZone);
    return addMonths(base.year, base.month, monthOffset);
  }, [availableDates, monthOffset, timeZone]);
  const calendarDays = useMemo(
    () => monthGrid(visibleMonth.year, visibleMonth.month, slotsByDate),
    [slotsByDate, visibleMonth],
  );
  const timeZones = useMemo(() => supportedTimeZones(browserTimeZone), [browserTimeZone]);

  async function confirmBooking() {
    if (!selectedSlot || previewMode) return;
    setBookingStatus("sending");
    setError("");
    try {
      const response = await fetch(`${bookingApi}/${rescheduleMode ? "manage" : "confirm"}/`, {
        method: rescheduleMode ? "PATCH" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(rescheduleMode
          ? { token: managementToken, startsAt: selectedSlot, visitorTimeZone: timeZone }
          : directBooking
            ? { directBooking: true, brand, attendeeName, attendeeEmail, websiteUrl: identity?.websiteUrl, enquirySummary: identity?.summary, startsAt: selectedSlot, visitorTimeZone: timeZone, sourcePage: "/book/" }
            : { leadId, bookingToken, startsAt: selectedSlot, visitorTimeZone: timeZone }),
      });
      const result = await response.json().catch(() => ({})) as BookingResult;
      if (!response.ok) throw new Error(result.error || "The meeting could not be booked.");
      setBooking(result);
      setBookingStatus("idle");

    } catch (bookingError) {
      setBookingStatus("error");
      setError(bookingError instanceof Error ? bookingError.message : "The meeting could not be booked.");
    }
  }

  if (booking?.ok && booking.startsAt) {
    return (
      <section className={`${styles.root} booking-confirmation`} aria-live="polite">
        <div className="booking-confirmation__icon"><Check aria-hidden="true" /></div>
        <p className="booking-eyebrow">{rescheduleMode ? "Meeting rescheduled" : "Meeting confirmed"}</p>
        <h2>{rescheduleMode ? "Your new time is confirmed." : "We’ll see you then."}</h2>
        <p className="booking-confirmation__time">{formatDateTime(booking.startsAt, timeZone)}</p>
        <p>{rescheduleMode
          ? "Google has updated the original calendar invitation. There is no duplicate event."
          : booking.attendeeEmail
            ? `Google has added ${booking.attendeeEmail} as the meeting guest. The calendar invitation contains the Google Meet link and the time in the selected time zone.`
            : "Google has added the submitted business email as the meeting guest. The calendar invitation contains the Google Meet link and the time in the selected time zone."}</p>
        {booking.notificationStatus === "sent" && <p>A separate booking confirmation has also been emailed to you and to our team.</p>}
        {booking.notificationStatus !== "sent" && !rescheduleMode && <p>The Google Calendar invitation is confirmed. If the separate branded email is delayed, use the meeting and management links below.</p>}
        <div className="booking-confirmation__actions">
          {booking.meetUrl && <a className="button button--dark" href={booking.meetUrl} target="_blank" rel="noopener noreferrer">Open Google Meet <ExternalLink size={16} /></a>}
          {booking.manageUrl && <a className="button button--light" href={booking.manageUrl}>Reschedule or cancel <ArrowRight size={16} /></a>}
        </div>
      </section>
    );
  }

  return (
    <section className={`${styles.root} brand-scheduler`} aria-labelledby="booking-title">
      <header className="brand-scheduler__header">
        <div>
          <p className="booking-eyebrow">{previewMode ? "Safe calendar preview" : rescheduleMode ? "Reschedule your meeting" : "SEO discovery meeting"}</p>
          <h2 id="booking-title">{rescheduleMode ? "Choose a new time." : "Choose a time that works for you."}</h2>
          <p>{previewMode
            ? "Explore the live layout, time-zone control, dates, and available times. This preview cannot create a meeting."
            : rescheduleMode ? "Available times are shown in your selected time zone. Your existing Google event will be updated." : "The calendar automatically shows availability in your time zone. Your invitation will include a Google Meet link."}</p>
        </div>
        <div className="brand-scheduler__facts" aria-label="Meeting details">
          <span><Clock3 size={16} /> {availability?.durationMinutes || 30} minutes</span>
          <span><Video size={16} /> Google Meet</span>
          <span><CalendarDays size={16} /> Monday–Friday</span>
        </div>
      </header>

      <label className="brand-scheduler__timezone">
        <span><Globe2 size={17} /> Your time zone</span>
        <select
          value={timeZone}
          onChange={(event) => {
            setTimeZone(event.target.value);
            setSelectedDate("");
            setSelectedSlot("");
            setMonthOffset(0);
          }}
        >
          {timeZones.map((zone) => <option key={zone} value={zone}>{timezoneLabel(zone)}</option>)}
        </select>
      </label>

      {loading ? (
        <div className="brand-scheduler__loading" aria-live="polite"><LoaderCircle className="spin" /> Checking the calendar…</div>
      ) : error && !availability ? (
        <SchedulerFallback message={error} />
      ) : (
        <div className="brand-scheduler__body">
          <div className="booking-calendar">
            <div className="booking-calendar__nav">
              <button type="button" onClick={() => setMonthOffset((value) => Math.max(0, value - 1))} disabled={monthOffset === 0} aria-label="Previous month"><ArrowLeft size={18} /></button>
              <strong>{monthName(visibleMonth.year, visibleMonth.month)}</strong>
              <button type="button" onClick={() => setMonthOffset((value) => value + 1)} disabled={monthOffset >= 1} aria-label="Next month"><ArrowRight size={18} /></button>
            </div>
            <div className="booking-calendar__weekdays" aria-hidden="true">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => <span key={day}>{day}</span>)}</div>
            <div className="booking-calendar__grid">
              {calendarDays.map((day, index) => day ? (
                <button
                  type="button"
                  key={day.key}
                  className={selectedDate === day.key ? "is-selected" : ""}
                  disabled={!day.available}
                  onClick={() => { setSelectedDate(day.key); setSelectedSlot(""); }}
                  aria-label={`${day.label}${day.available ? ", available" : ", unavailable"}`}
                  aria-pressed={selectedDate === day.key}
                >{day.day}</button>
              ) : <span key={`blank-${index}`} aria-hidden="true" />)}
            </div>
          </div>

          <div className="booking-times" aria-live="polite">
            <h3>{selectedDate ? longDateLabel(selectedDate) : "Select an available date"}</h3>
            <p>{selectedDate ? `Times shown in ${timezoneLabel(timeZone)}.` : "Available dates are highlighted in green."}</p>
            {selectedDate ? (
              <div className="booking-times__list">
                {(slotsByDate.get(selectedDate) || []).map((slot) => (
                  <button type="button" key={slot} className={selectedSlot === slot ? "is-selected" : ""} onClick={() => setSelectedSlot(slot)} aria-pressed={selectedSlot === slot}>
                    {formatTime(slot, timeZone)}
                  </button>
                ))}
              </div>
            ) : <div className="booking-times__empty"><CalendarDays size={30} /><span>Choose a date to see meeting times.</span></div>}
          </div>
        </div>
      )}

      {availability && (
        <>
        {directBooking && selectedSlot && !identity && (
          <div className="brand-scheduler__identity" aria-label="Your booking details">
            <label>
              <span>Name</span>
              <input required value={attendeeName} onChange={(event) => setAttendeeName(event.target.value)} autoComplete="name" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input required type="email" value={attendeeEmail} onChange={(event) => setAttendeeEmail(event.target.value)} autoComplete="email" placeholder="you@company.com" />
            </label>
          </div>
        )}
        <footer className="brand-scheduler__footer">
          <div>{selectedSlot ? <><strong>{formatDateTime(selectedSlot, timeZone)}</strong><span>{timezoneLabel(timeZone)}</span></> : <span>Select a date and time to continue.</span>}</div>
          <button type="button" onClick={confirmBooking} disabled={previewMode || !selectedSlot || bookingStatus === "sending" || (directBooking && (!attendeeName.trim() || !/^\S+@\S+\.\S+$/.test(attendeeEmail.trim())))}>
            {previewMode ? "Preview only — no booking" : bookingStatus === "sending" ? "Saving…" : rescheduleMode ? "Confirm new time" : "Confirm meeting"} <ArrowRight size={17} />
          </button>
        </footer>
        </>
      )}
      {error && availability && <div className="brand-scheduler__error" role="alert">{error} <a href={calendlyFallback} target="_blank" rel="noopener noreferrer">Email our team</a>.</div>}
    </section>
  );
}

function SchedulerFallback({ message }: { message: string }) {
  return (
    <div className="brand-scheduler__fallback" role="alert">
      <strong>The live calendar is temporarily unavailable.</strong>
      <p>{message} You can retry or email aditya@theprojectseo.com for help.</p>
      <a className="button button--dark" href={calendlyFallback} target="_blank" rel="noopener noreferrer">Email our team <ExternalLink size={16} /></a>
    </div>
  );
}

function dateKey(iso: string, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date(iso));
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value || "";
  return `${value("year")}-${value("month")}-${value("day")}`;
}

function parseDateKey(key: string) {
  const [year, month, day] = key.split("-").map(Number);
  return { year, month, day };
}

function todayParts(timeZone: string) {
  return parseDateKey(dateKey(new Date().toISOString(), timeZone));
}

function addMonths(year: number, month: number, offset: number) {
  const date = new Date(Date.UTC(year, month - 1 + offset, 1));
  return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1 };
}

function monthGrid(year: number, month: number, slots: Map<string, string[]>) {
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const firstDay = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  const mondayOffset = (firstDay + 6) % 7;
  const cells: Array<{ key: string; day: number; label: string; available: boolean } | null> = Array.from({ length: mondayOffset }, () => null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    const key = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    cells.push({ key, day, label: longDateLabel(key), available: slots.has(key) });
  }
  return cells;
}

function monthName(year: number, month: number) {
  return new Intl.DateTimeFormat("en", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(year, month - 1, 1)));
}

function longDateLabel(key: string) {
  const { year, month, day } = parseDateKey(key);
  return new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(year, month - 1, day)));
}

function formatTime(iso: string, timeZone: string) {
  return new Intl.DateTimeFormat("en", { hour: "numeric", minute: "2-digit", timeZone }).format(new Date(iso));
}

function formatDateTime(iso: string, timeZone: string) {
  return new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", timeZone }).format(new Date(iso));
}

function timezoneLabel(timeZone: string) {
  return timeZone.replaceAll("_", " ").replace("/", " — ");
}



function supportedTimeZones(browserTimeZone: string) {
  const intl = Intl as typeof Intl & { supportedValuesOf?: (key: "timeZone") => string[] };
  const zones = intl.supportedValuesOf?.("timeZone") || ["Asia/Manila", "Asia/Singapore", "Australia/Sydney", "Europe/London", "America/New_York", "America/Los_Angeles"];
  return [...new Set([browserTimeZone, "Asia/Manila", ...zones])];
}

import Link from "next/link";
import type { Metadata } from "next";
import { ManageBooking } from "@/components/manage-booking";
import { bookingName } from "@/lib/native-booking";
export const metadata: Metadata = { title: "Manage your meeting | TheProjectSEO", robots: { index: false, follow: false }, referrer: "no-referrer" };
export default async function ManagePage({ params }: { params: Promise<{ token: string }> }) { const { token } = await params; return <main className="mx-auto max-w-4xl px-4 py-12"><Link href="/" className="text-xl font-semibold">{bookingName}</Link><div className="mt-8"><ManageBooking token={token} /></div></main>; }

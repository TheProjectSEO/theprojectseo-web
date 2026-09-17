import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Container } from "@/components/container";
import { LeadForm } from "@/components/lead-form";
export const metadata: Metadata = { title: "Book a meeting | TheProjectSEO", robots: { index: false, follow: false }, referrer: "no-referrer" };
export default function BookPage() { return <main><Container><Navbar /><div className="mx-auto max-w-4xl py-12"><p className="font-semibold">TheProjectSEO</p><h1 className="mt-3 text-4xl font-semibold">Let’s talk about your search goals.</h1><p className="my-6">First, share your details. Then choose a time to speak with Aditya. Your meeting is only confirmed once you select a time and confirm the booking.</p><LeadForm variant="full" submitText="Continue to choose a time" /></div></Container></main>; }

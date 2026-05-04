import Link from "next/link";
import { RSVPForm } from "@/components/rsvp-form";

export const metadata = {
  title: "RSVP — Ryan & Leigh",
  description: "Let us know if you can join us for our wedding celebration.",
};

export default function RSVPPage() {
  return (
    <main className="flex-1 flex flex-col items-center px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="w-full max-w-lg animate-fade-in">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors mb-10"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">
            RSVP
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-3">
            Will You Join Us?
          </h1>
          <p className="text-stone-500 text-sm leading-relaxed">
            Please fill out the form below to let us know whether you can
            make it to our celebration.
          </p>
        </div>

        <RSVPForm />
      </div>
    </main>
  );
}

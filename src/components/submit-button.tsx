"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full h-12 rounded-md bg-sage text-white font-serif text-lg tracking-wide hover:bg-sage-dark focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 focus:ring-offset-cream disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {pending ? "Sending..." : "Send RSVP"}
    </button>
  );
}

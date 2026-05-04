import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 sm:py-24">
      <div className="w-full max-w-lg text-center animate-fade-in">
        <p className="text-sm tracking-[0.3em] uppercase text-stone-500 mb-4">
          Thank you
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-6">
          Your RSVP has been received
        </h1>
        <p className="text-stone-500 mb-8 leading-relaxed">
          We appreciate you letting us know. We can&apos;t wait to celebrate
          with you!
        </p>
        <Link
          href="/"
          className="inline-block text-sm text-sage-dark underline underline-offset-4 hover:text-sage transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

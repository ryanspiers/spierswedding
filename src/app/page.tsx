import Link from "next/link";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="relative z-10 bg-white">
      {/* Our Story / Intro */}
      <section className="px-6 py-20 sm:py-28">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-body capitalize text-navy-muted mb-2">
            Our Story
          </p>
          <h2 className="font-serif font-medium text-[30px] sm:text-4xl text-stone-800 leading-[1.25]">
            Two hearts, one beautiful journey
          </h2>
          <p className="mt-5 text-base text-stone-500 leading-[1.625]">
            After years of love, laughter, and countless memories together, we
            are thrilled to be taking the next step. We would be honoured to
            have you join us as we say &ldquo;I do.&rdquo;
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="px-6 py-20 sm:py-28 bg-white/50">
        <div className="max-w-2xl mx-auto">
          <div className="mb-14">
            <p className="text-sm font-body capitalize text-navy-muted mb-2">
              The Day
            </p>
            <h2 className="font-serif font-medium text-[30px] sm:text-4xl text-stone-800 leading-[1.25]">
              Order of the Day
            </h2>
          </div>

          <div className="space-y-0">
            {[
              {
                time: "14:00",
                title: "Guest Arrival",
                description:
                  "Please arrive and take your seats. We kindly ask that all phones are put away during the ceremony.",
              },
              {
                time: "14:30",
                title: "The Ceremony",
                description:
                  "The moment we have been waiting for — join us as we exchange our vows.",
              },
              {
                time: "15:30",
                title: "Drinks Reception",
                description:
                  "Celebrate with us over welcome drinks, canapes, and plenty of photos.",
              },
              {
                time: "17:30",
                title: "Wedding Breakfast",
                description:
                  "Take your seats for the wedding breakfast, speeches, and toasts.",
              },
              {
                time: "20:00",
                title: "Evening Celebration",
                description:
                  "The dance floor opens! Join us for an evening of music, drinks, and dancing.",
              },
              {
                time: "00:00",
                title: "Carriages",
                description:
                  "The final send-off. Thank you for sharing our special day with us.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 sm:gap-10">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-gold bg-cream shrink-0 mt-1" />
                  {index < 5 && (
                    <div className="w-px flex-1 bg-gold-light/40" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10">
                  <span className="text-sm text-gold font-medium">
                    {item.time}
                  </span>
                  <h3 className="font-serif text-xl text-stone-800 mt-1">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 text-sm mt-2 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section id="venue" className="px-6 py-20 sm:py-28">
        <div className="max-w-2xl mx-auto">
          <div className="mb-14">
            <p className="text-sm font-body capitalize text-navy-muted mb-2">
              The Venue
            </p>
            <h2 className="font-serif font-medium text-[30px] sm:text-4xl text-stone-800 leading-[1.25]">
              Where to Find Us
            </h2>
          </div>

          <div className="bg-white/60 rounded-xl border border-stone-300/30 overflow-hidden">
            {/* Placeholder for venue image */}
            <div className="aspect-[16/9] bg-sage-light/20 flex items-center justify-center">
              <p className="text-stone-400 text-sm">Venue photo</p>
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h3 className="font-serif text-2xl text-stone-800 mb-2">
                Venue Name
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">
                123 Venue Address, City, Postcode
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-sage-dark hover:text-sage transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Details: Dress Code & Accommodations */}
      <section id="details" className="px-6 py-20 sm:py-28 bg-white/50">
        <div className="max-w-2xl mx-auto">
          <div className="mb-14">
            <p className="text-sm font-body capitalize text-navy-muted mb-2">
              Details
            </p>
            <h2 className="font-serif font-medium text-[30px] sm:text-4xl text-stone-800 leading-[1.25]">
              Need to Know
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Dress Code */}
            <div className="bg-cream rounded-xl border border-stone-300/30 p-6 sm:p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sage-light/40 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-sage-dark"
                >
                  <path d="M12 2l3 7h-6l3-7zM8 9l-4 13h16L16 9" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-2">
                Dress Code
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Smart casual or garden party attire. Wear something you feel
                wonderful in — just leave the white dresses for the bride!
              </p>
            </div>

            {/* Gifts */}
            <div className="bg-cream rounded-xl border border-stone-300/30 p-6 sm:p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sage-light/40 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-sage-dark"
                >
                  <rect x="3" y="8" width="18" height="13" rx="1" />
                  <path d="M12 8v13M3 12h18M7.5 8C7.5 8 7.5 4 12 4s4.5 4 4.5 4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-2">Gifts</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Your presence is the greatest gift of all. However, if you wish
                to give something, a contribution to our honeymoon fund would be
                greatly appreciated.
              </p>
            </div>

            {/* Parking */}
            <div className="bg-cream rounded-xl border border-stone-300/30 p-6 sm:p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sage-light/40 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-sage-dark"
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M9 16V8h4a3 3 0 010 6H9" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-2">
                Parking
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Free parking is available at the venue. Please follow the signs
                upon arrival.
              </p>
            </div>

            {/* Accommodation */}
            <div className="bg-cream rounded-xl border border-stone-300/30 p-6 sm:p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sage-light/40 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-sage-dark"
                >
                  <path d="M3 21V7l9-4 9 4v14" />
                  <path d="M9 21v-6h6v6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-2">
                Accommodation
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                There are several lovely options nearby. Feel free to reach out
                if you need help finding somewhere to stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="px-6 py-20 sm:py-28">
        <div className="max-w-2xl mx-auto">
          <div className="mb-14">
            <p className="text-sm font-body capitalize text-navy-muted mb-2">
              Questions
            </p>
            <h2 className="font-serif font-medium text-[30px] sm:text-4xl text-stone-800 leading-[1.25]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "When should I RSVP by?",
                a: "Please RSVP by [date]. This helps us finalise numbers with our venue and caterers.",
              },
              {
                q: "Can I bring a plus one?",
                a: "Your invitation will specify if you have a plus one. If you're unsure, please get in touch with us directly.",
              },
              {
                q: "Are children welcome?",
                a: "Whilst we love your little ones, we have chosen to make our wedding an adults-only celebration. We hope you understand.",
              },
              {
                q: "What happens if the weather is bad?",
                a: "The venue has beautiful indoor spaces, so the celebration will carry on rain or shine!",
              },
              {
                q: "Is there parking available?",
                a: "Yes, there is free parking at the venue. Please follow the signs upon arrival.",
              },
              {
                q: "Who should I contact with questions?",
                a: "Please reach out to us directly — we are happy to help with anything you need.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white/60 rounded-xl border border-stone-300/30 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 text-left">
                  <span className="font-serif text-base sm:text-lg text-stone-800 pr-4">
                    {item.q}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-stone-400 shrink-0 transition-transform duration-200 group-open:rotate-45"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP CTA */}
      <section className="px-6 py-20 sm:py-28 bg-white/50">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-body capitalize text-navy-muted mb-2">
            We hope to see you there
          </p>
          <h2 className="font-serif font-medium text-[30px] sm:text-4xl text-stone-800 leading-[1.25]">
            Will You Join Us?
          </h2>
          <p className="mt-5 text-base text-stone-500 leading-[1.625] mb-8">
            Please let us know whether you can make it by completing our RSVP
            form.
          </p>
          <Link
            href="/rsvp"
            className="inline-flex items-center justify-center h-12 px-10 bg-sage text-white font-serif text-base tracking-wide rounded-md hover:bg-sage-dark transition-colors"
          >
            RSVP Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 text-center">
        <p className="font-serif text-lg text-stone-800">Ryan &amp; Leigh</p>
        <p className="text-sm text-stone-400 mt-2">
          We can&apos;t wait to celebrate with you.
        </p>
      </footer>
      </div>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { RsvpDrawer } from "@/components/rsvp-drawer";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="relative z-10 bg-white">
      {/* Our Story / Intro */}
      <section className="px-6 py-[60px]">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-body capitalize text-navy mb-2">
            Our Story
          </p>
          <h2 className="font-serif font-[200] text-[30px] sm:text-4xl text-orange leading-[1.25]">
            Two hearts, one beautiful journey
          </h2>
          <p className="mt-5 text-base text-navy-soft leading-[1.625]">
            After years of love, laughter, and countless memories together, we
            are thrilled to be taking the next step. We would be honoured to
            have you join us as we say &ldquo;I do.&rdquo;
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="px-6 py-[60px]">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <p className="text-sm font-body capitalize text-navy mb-2">
              The Day
            </p>
            <h2 className="font-serif font-[200] text-[30px] sm:text-4xl text-orange leading-[1.25]">
              Order of the Day
            </h2>
          </div>

          <div className="flex flex-col">
            {[
              {
                time: "13:30",
                title: "Guest Arrival",
                description:
                  "Please arrive and take your seats. We kindly ask that all phones are put away during the ceremony.",
              },
              {
                time: "14:00",
                title: "The Ceremony",
                description:
                  "The moment we have been waiting for, join us as we exchange our vows.",
              },
              {
                time: "14:30",
                title: "Drinks Reception",
                description:
                  "Celebrate with us over welcome drinks, canapes, and plenty of photos.",
              },
              {
                time: "16:15",
                title: "Dinner",
                description:
                  "Take your seats for the dinner, speeches, and toasts.",
              },
              {
                time: "19:30",
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
              <div key={index} className="flex gap-6">
                {/* Timeline marker */}
                <div className="flex flex-col items-center pt-1 w-3 self-stretch shrink-0">
                  <div className="w-3 h-3 rounded-full border-2 border-orange bg-orange/10 shrink-0" />
                  <div className="w-px flex-1 bg-orange" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-8 flex flex-col gap-2">
                  <p className="font-body text-sm text-orange leading-5">
                    {item.time}
                  </p>
                  <h3 className="font-serif font-medium text-xl text-navy leading-7">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[#303e56] leading-[1.625] max-w-[284px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section id="venue" className="px-6 py-[60px]">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col gap-2 mb-6">
            <p className="text-sm font-body capitalize text-navy">
              The Venue
            </p>
            <h2 className="font-serif font-[200] text-[30px] sm:text-4xl text-orange leading-[1.25]">
              Where it's all happening
            </h2>
            <p className="text-base text-navy-soft leading-[1.625]">
              Set amongst the rolling hills of Renfrewshire, Bowfield Hotel
              &amp; Spa is the perfect setting for our day. We can&apos;t wait
              to celebrate with you in this beautiful venue.
            </p>
          </div>

          <div className="bg-white/60 border border-navy-20 rounded-[12px] overflow-hidden">
            <div className="relative h-48 bg-sage-light/20 overflow-hidden">
              <Image
                src="/venue.png"
                alt="Bowfield Hotel & Spa"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 672px"
              />
            </div>
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="flex flex-col items-center gap-[7px]">
                <h3 className="font-serif font-medium text-2xl text-navy leading-8 text-center">
                  Bowfield Hotel &amp; Spa
                </h3>
                <p className="font-body text-sm text-navy-soft text-center leading-[22.75px]">
                  Bowfield Road, Howwood,
                  <br />
                  Johnstone, PA9 1DZ
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bowfield+Hotel+Spa+PA9+1DZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-12 border border-navy rounded-md text-base text-navy tracking-[0.4px] hover:bg-navy/5 transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="px-6 py-[60px]">
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-body font-semibold capitalize text-navy">
              The details
            </p>
            <h2 className="font-serif font-[200] text-[30px] sm:text-4xl text-orange leading-[1.25]">
              All the wee bits
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {/* Dress code */}
            <div className="bg-[#f8f8f8] rounded-lg p-5 flex flex-col gap-2">
              <h3 className="font-serif font-medium text-xl text-navy">
                Dress code
              </h3>
              <p className="font-body text-sm text-navy-soft leading-[1.625]">
                Dress to impress! Just one tiny request, please steer clear of Burnt Orange as we've already claimed it for the big day.
              </p>
            </div>

            {/* Gifts */}
            <div className="bg-[#f8f8f8] rounded-lg p-5 flex flex-col gap-2">
              <h3 className="font-serif font-medium text-xl text-navy">Gifts</h3>
              <p className="font-body text-sm text-navy-soft leading-[1.625]">
                Your presence is the best gift we could ask for however if you
                wish to contribute towards our honeymoon, a small contribution
                would be deeply appreciated.
              </p>
              <a
                href="https://prezola.com/buy/view/334120"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full mt-2 h-12 border border-navy rounded-md text-base text-navy tracking-[0.4px] hover:bg-navy/5 transition-colors"
              >
                View our gift list
              </a>
            </div>

            {/* Parking */}
            <div className="bg-[#f8f8f8] rounded-lg p-5 flex flex-col gap-2">
              <h3 className="font-serif font-medium text-xl text-navy">
                Parking
              </h3>
              <p className="font-body text-sm text-navy-soft leading-[1.625]">
                The Bowfield Hotel and Spa has plenty of parking available and is
                free to use also.
              </p>
            </div>

            {/* Menu */}
            <div className="bg-[#f8f8f8] rounded-lg p-5 flex flex-col gap-2">
              <h3 className="font-serif font-medium text-xl text-navy">Menu</h3>
              <div className="font-body text-sm text-navy-soft leading-[1.625]">
                <p className="font-semibold">Starter</p>
                <p>Lentil and vegetable soup</p>
                <p className="font-semibold mt-4">Main</p>
                <p>
                  Braised beef with red wine jus, fondant potatoes and
                  vegetables
                </p>
                <p className="font-semibold mt-4">Dessert</p>
                <p>Profiteroles</p>
                <p className="italic mt-4">
                  Please make us aware of any dietary requirements when
                  RSVP-ing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="px-6 py-[120px]">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="font-serif font-medium text-[30px] sm:text-4xl text-stone-800 leading-[1.25]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "When should I RSVP by?",
                a: "Please RSVP by 24th July. This helps us finalise numbers with our venue and caterers.",
              },
              {
                q: "Can I bring a plus one?",
                a: "Your invitation will specify if you have a plus one. If you're unsure, please get in touch with us directly.",
              },
              {
                q: "Are children welcome?",
                a: "Whilst we love your little ones, we have chosen to only have close family members with children present. If your little one's name is on the invitation then they are invited.",
              },
              {
                q: "Is there parking available?",
                a: "Yes, there is free parking at the venue. Please follow the signs upon arrival.",
              },
              {
                q: "Who should I contact with questions?",
                a: "Please reach out to us directly — we are happy to help with anything you need.  Leigh – 07885599515 or Ryan - 07804042026",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white/60 rounded-xl border border-stone-300/30 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 text-left">
                  <span className="font-body text-base sm:text-lg text-stone-800 pr-4">
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
      </div>
      <RsvpDrawer />
    </>
  );
}

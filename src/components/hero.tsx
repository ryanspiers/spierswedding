import Image from "next/image";

function AnimatedLetters({
  text,
  className,
  startIndex = 0,
}: {
  text: string;
  className?: string;
  startIndex?: number;
}) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`hero-letter ${className ?? ""}`}
          style={{ animationDelay: `${(startIndex + i) * 80}ms` }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </>
  );
}

export function Hero() {
  return (
    <section className="flex flex-col pt-[160px] relative z-0 hero-parallax">
      {/* Headings */}
      <div className="px-6 pt-10 sm:pt-14">
        <h1 className="font-serif font-[200] text-5xl sm:text-7xl md:text-8xl leading-[0.94] tracking-tight">
          <AnimatedLetters text="Leigh " className="text-orange" startIndex={0} />
          <AnimatedLetters text="&" className="text-navy italic" startIndex={6} />
          <AnimatedLetters text=" Ryan" className="text-orange" startIndex={7} />
        </h1>
        <p className="hero-date mt-5 font-body font-[200] text-base text-navy">
          24 September 2026
        </p>
      </div>

      {/* Hero image — fixed height, full width */}
      <div className="mt-8 sm:mt-12 overflow-hidden aspect-[3/4] sm:aspect-[16/9] relative">
        <div className="relative w-full h-full">
          <Image
            src="/carly-rae-hobbins-zNHOIzjJiyA-unsplash.jpg"
            alt="Leigh and Ryan"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}

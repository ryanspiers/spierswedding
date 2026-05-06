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

function Polaroid({
  rotate,
  parallax = "0",
  className,
  src,
  alt,
}: {
  rotate: number;
  parallax?: string;
  className?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div
      className={`polaroid absolute bg-white rounded-[4px] pt-[12px] px-[12px] pb-[56px] ${className ?? ""}`}
      style={
        {
          "--polaroid-rotate": `${rotate}deg`,
          "--polaroid-translate": parallax,
        } as React.CSSProperties
      }
    >
      <div className="relative bg-[#d9d9d9] aspect-[184/189] w-full overflow-hidden">
        {src && (
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
        )}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="flex flex-col pt-[160px] relative z-0 bg-linear-to-b from-[#fef7f3] to-white">
      {/* Headings — slower scroll via parallax */}
      <div className="hero-parallax relative z-0 px-6 pt-10 sm:pt-14">
        <h1 className="font-serif font-[200] text-5xl sm:text-7xl md:text-8xl leading-[0.94] tracking-tight">
          <AnimatedLetters text="Leigh " className="text-orange" startIndex={0} />
          <AnimatedLetters text="&" className="text-navy italic" startIndex={6} />
          <AnimatedLetters text=" Ryan" className="text-orange" startIndex={7} />
        </h1>
        <p className="hero-date mt-5 font-body font-[200] text-base text-navy">
          24 September 2026
        </p>
      </div>

      {/* Polaroid arrangement — scrolls at normal speed, drifts up over the text */}
      <div className="relative z-10 mt-8 sm:mt-12 w-full aspect-[400/520]">
        <Polaroid rotate={-6.53} parallax="15vh" className="w-[51%] left-[-9%] top-0" />
        <Polaroid rotate={4.97} parallax="0" className="w-[42%] left-[55%] top-[17%]" />
        <Polaroid rotate={-1.72} parallax="-9vh" className="w-[42%] left-[12%] top-[59%]" />
      </div>
    </section>
  );
}

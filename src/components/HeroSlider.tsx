"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = ["Banner-01", "Banner-02", "Banner-03", "Banner-04"];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const go = (d: number) => setI((p) => (p + d + slides.length) % slides.length);

  return (
    <section className="relative w-full aspect-[16/5] overflow-hidden bg-slate-100">
      {slides.map((s, idx) => (
        <Image
          key={s}
          src={`/assets/${s}.webp`}
          alt={`Azure banner ${idx + 1}`}
          fill
          priority={idx === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <button onClick={() => go(-1)} aria-label="Previous slide" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white">
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => go(1)} aria-label="Next slide" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white">
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((s, idx) => (
          <button
            key={s}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-white" : "w-2 bg-white/60"}`}
          />
        ))}
      </div>
    </section>
  );
}

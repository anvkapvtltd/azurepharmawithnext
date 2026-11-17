"use client";
import { getImageProps } from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Each banner opens its product detail page (slug = products.json "slug").
// Desktop banner: /assets/{src}.webp (1920×600)  •  Phone banner: /assets/{src}-mobile.webp (1080×720)
const slides = [
  { src: "Banner-01", slug: "bonevita", alt: "BoneVita – Bone to be Strong" },
  { src: "Banner-02", slug: "azure-d3", alt: "Azure-D3 60K – D-Lightfully Strong!" },
  { src: "Banner-03", slug: "vitamax-men", alt: "Vitamax Men – Max your Game" },
  { src: "Banner-04", slug: "vitamax-women", alt: "Vitamax Women – Vita-lity Looks Good On Her!" },
];
const DELAY = 5000;

/**
 * Art-directed banner: the browser downloads ONLY the version that matches the screen
 * (phone banner below 768px, desktop banner from md / 768px up).
 */
function BannerPicture({ src, alt, priority }: { src: string; alt: string; priority: boolean }) {
  const common = { alt, fill: true, sizes: "100vw", priority };
  const { props: { srcSet: desktop } } = getImageProps({ ...common, src: `/assets/${src}.webp` });
  const { props: mobile } = getImageProps({ ...common, src: `/assets/${src}-mobile.webp` });
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
      <img {...mobile} className="object-cover" />
    </picture>
  );
}

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  // Load only slides the visitor is about to see (first + next), not all 4 banners up-front.
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set([0, 1]));
  const touchX = useRef<number | null>(null);
  const swiped = useRef(false); // a swipe must not also open the product link

  const goTo = useCallback((n: number) => {
    const next = (n + slides.length) % slides.length;
    setI(next);
    setLoaded((prev) => new Set(prev).add(next).add((next + 1) % slides.length));
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    const t = setTimeout(() => goTo(i + 1), DELAY);
    return () => clearTimeout(t);
  }, [i, paused, goTo]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured products"
      className="relative w-full aspect-[3/2] md:aspect-[16/5] overflow-hidden bg-slate-100"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; swiped.current = false; setPaused(true); }}
      onTouchEnd={(e) => {
        if (touchX.current !== null) {
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) {
            swiped.current = true;
            goTo(i + (dx < 0 ? 1 : -1));
          }
        }
        touchX.current = null;
        setPaused(false);
      }}
    >
      {slides.map((s, idx) =>
        loaded.has(idx) ? (
          <Link
            key={s.src}
            href={`/products/${s.slug}`}
            aria-label={`View ${s.alt.split(" –")[0]} product details`}
            aria-hidden={idx !== i}
            tabIndex={idx === i ? 0 : -1}
            onClick={(e) => { if (swiped.current) e.preventDefault(); }}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? "z-[1] opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <BannerPicture src={s.src} alt={s.alt} priority={idx === 0} />
          </Link>
        ) : null
      )}
      <button onClick={() => goTo(i - 1)} aria-label="Previous slide" className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white">
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => goTo(i + 1)} aria-label="Next slide" className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white">
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 flex gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === i}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-white" : "w-2 bg-white/60"}`}
          />
        ))}
      </div>
    </section>
  );
}

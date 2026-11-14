"use client";
import Image from "next/image";
import { useState } from "react";

type Props = { images: string[]; name: string; ring: string; label: string; labelCls: string };

export default function ProductGallery({ images, name, ring, label, labelCls }: Props) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  // Zoom follows the cursor: transform-origin = cursor position inside the image box (in %).
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setOrigin({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <span className={`absolute left-4 top-4 z-10 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${labelCls}`}>
          {label}
        </span>
        <div
          className="relative aspect-square cursor-zoom-in overflow-hidden"
          onMouseEnter={() => setZoom(true)}
          onMouseLeave={() => setZoom(false)}
          onMouseMove={onMove}
        >
          <Image
            key={images[active]}
            src={images[active]}
            alt={`${name} image ${active + 1}`}
            fill
            priority
            quality={90}
            sizes="(min-width:1024px) 80vw, 100vw"
            style={{ transformOrigin: `${origin.x}% ${origin.y}%` }}
            className={`object-contain p-6 sm:p-10 animate-[fadeIn_.4s_ease] transition-transform duration-200 ease-out ${
              zoom ? "scale-[2.2]" : "scale-100"
            }`}
          />
        </div>
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((src, idx) => (
            <button
              key={src}
              onClick={() => setActive(idx)}
              aria-label={`Show image ${idx + 1}`}
              className={`relative aspect-square overflow-hidden rounded-xl border bg-white transition ${
                idx === active ? `ring-2 ${ring} border-transparent` : "border-slate-200 hover:border-slate-400"
              }`}
            >
              <Image src={src} alt="" fill sizes="120px" className="object-contain p-1.5" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

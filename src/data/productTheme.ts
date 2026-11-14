// Per-product accent colours (full class strings so Tailwind can detect them).
export type ProductTheme = {
  badge: string;      // small pill (bg + text)
  text: string;       // accent text
  softBg: string;     // light tinted background
  gradient: string;   // hero/strip gradient
  ring: string;       // active thumbnail ring
};

const themes: Record<string, ProductTheme> = {
  "azure-d3": {
    badge: "bg-amber-100 text-amber-700",
    text: "text-amber-600",
    softBg: "bg-amber-50",
    gradient: "from-amber-50 via-white to-blue-50",
    ring: "ring-amber-400",
  },
  bonevita: {
    badge: "bg-violet-100 text-violet-700",
    text: "text-violet-600",
    softBg: "bg-violet-50",
    gradient: "from-violet-50 via-white to-blue-50",
    ring: "ring-violet-400",
  },
  "vitamax-women": {
    badge: "bg-pink-100 text-pink-700",
    text: "text-pink-600",
    softBg: "bg-pink-50",
    gradient: "from-pink-50 via-white to-blue-50",
    ring: "ring-pink-400",
  },
  "vitamax-men": {
    badge: "bg-blue-100 text-brand",
    text: "text-brand",
    softBg: "bg-blue-50",
    gradient: "from-blue-50 via-white to-sky-50",
    ring: "ring-brand",
  },
};

export function getTheme(slug: string): ProductTheme {
  return themes[slug] ?? themes["vitamax-men"];
}

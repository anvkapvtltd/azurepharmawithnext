// Public website URL – set NEXT_PUBLIC_SITE_URL in .env.local / hosting when the domain is final.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://azurepharma.in").replace(/\/$/, "");

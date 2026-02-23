export const SITE_NAME = "Denada";
export const SITE_TAGLINE = "The easiest way to invest in premium real estate in Nigeria.";
export const SITE_DESCRIPTION =
  "Invest in Nigeria's premium real estate. Buy outright, pay in installments, or own fractions of luxury properties in Lagos & Abuja.";

export const WHATSAPP_NUMBER = "2348000000000";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Denada, I'd like to enquire about a property";

export const EXCHANGE_RATES = {
  NGN: 1,
  USD: 0.000625,
  EUR: 0.000580,
} as const;

export const CURRENCY_SYMBOLS = {
  NGN: "\u20A6",
  USD: "$",
  EUR: "\u20AC",
} as const;

export const CURRENCY_LOCALES = {
  NGN: "en-NG",
  USD: "en-US",
  EUR: "de-DE",
} as const;

export const NAV_LINKS = [
  { label: "Browse Properties", href: "/properties" },
  { label: "Pay Small Small", href: "/pay-small-small" },
  { label: "Fractionalize", href: "/fractionalize" },
  { label: "Sell My Property", href: "/sell" },
  { label: "For Agents", href: "/agents" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  invest: [
    { label: "Browse Properties", href: "/properties" },
    { label: "Pay Small Small", href: "/pay-small-small" },
    { label: "Fractionalize", href: "/fractionalize" },
    { label: "Sell My Property", href: "/sell" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "WhatsApp", href: `https://wa.me/2348000000000` },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/conditions" },
  ],
} as const;

export const LOCATIONS = [
  "Banana Island",
  "Ikoyi",
  "Victoria Island",
  "Lekki Phase 1",
  "Eko Atlantic",
  "Oniru",
  "Ikeja GRA",
  "Ajah",
  "Sangotedo",
  "Maitama",
  "Asokoro",
  "Wuse 2",
] as const;

export const PROPERTY_TYPES: { value: string; label: string }[] = [
  { value: "villa", label: "Villa" },
  { value: "apartment", label: "Apartment" },
  { value: "penthouse", label: "Penthouse" },
  { value: "duplex", label: "Duplex" },
  { value: "land", label: "Land" },
  { value: "commercial", label: "Commercial" },
];

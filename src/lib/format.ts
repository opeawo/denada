import { Currency, PropertyPrice } from "@/types/property";
import { EXCHANGE_RATES, CURRENCY_SYMBOLS } from "./constants";

export function formatPrice(
  price: PropertyPrice,
  currency: Currency,
  compact = false
): string {
  const amount = price.ngn * EXCHANGE_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];

  if (compact) {
    if (amount >= 1_000_000_000) {
      return `${symbol}${(amount / 1_000_000_000).toFixed(1)}B`;
    }
    if (amount >= 1_000_000) {
      return `${symbol}${(amount / 1_000_000).toFixed(1)}M`;
    }
    if (amount >= 1_000) {
      return `${symbol}${(amount / 1_000).toFixed(0)}K`;
    }
  }

  return new Intl.NumberFormat(currency === "NGN" ? "en-NG" : currency === "USD" ? "en-US" : "de-DE", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-NG").format(num);
}

export function getWhatsAppLink(phone: string, propertyTitle?: string): string {
  const message = propertyTitle
    ? `Hi, I'm interested in ${propertyTitle} on Denada. Can we talk?`
    : "Hi Denada, I'd like to enquire about a property";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

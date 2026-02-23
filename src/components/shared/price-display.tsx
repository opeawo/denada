"use client";

import { useCurrency } from "@/providers/currency-provider";
import { PropertyPrice } from "@/types/property";
import { formatPrice } from "@/lib/format";

interface PriceDisplayProps {
  price: PropertyPrice;
  compact?: boolean;
  className?: string;
  showSecondary?: boolean;
}

export function PriceDisplay({
  price,
  compact = false,
  className = "",
  showSecondary = false,
}: PriceDisplayProps) {
  const { currency } = useCurrency();
  const formatted = formatPrice(price, currency, compact);

  return (
    <span className={className}>
      {formatted}
      {showSecondary && currency === "NGN" && (
        <span className="ml-1 text-xs text-muted-foreground">
          ({formatPrice(price, "USD", true)})
        </span>
      )}
    </span>
  );
}

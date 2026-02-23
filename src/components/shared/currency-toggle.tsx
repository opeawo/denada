"use client";

import { useCurrency } from "@/providers/currency-provider";
import { Currency } from "@/types/property";

const currencies: Currency[] = ["NGN", "USD", "EUR"];

export function CurrencyToggle() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center rounded-lg border border-white/20 bg-white/10 p-0.5">
      {currencies.map((c) => (
        <button
          key={c}
          onClick={() => setCurrency(c)}
          className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
            currency === c
              ? "bg-white text-deep-green-500 shadow-sm"
              : "text-white/70 hover:text-white"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

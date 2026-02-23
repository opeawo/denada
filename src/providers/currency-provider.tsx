"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Currency } from "@/types/property";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "NGN",
  setCurrency: () => {},
});

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("NGN");

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}

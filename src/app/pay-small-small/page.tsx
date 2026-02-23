"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarClock,
  Shield,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { PropertyCard } from "@/components/shared/property-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { TrustBar } from "@/components/shared/trust-bar";
import { getPropertiesByModel } from "@/data/properties";
import { useCurrency } from "@/providers/currency-provider";
import { formatPrice } from "@/lib/format";

const steps = [
  {
    icon: CalendarClock,
    title: "Choose Property & Down Payment",
    description:
      "Browse installment-eligible properties and select your down payment percentage.",
  },
  {
    icon: Shield,
    title: "We Collect into Escrow",
    description:
      "Funds go into escrow. Developer only receives payment when milestones are hit.",
  },
  {
    icon: BarChart3,
    title: "Track on Your Dashboard",
    description:
      "See exactly how much you've paid, what's remaining, and when you'll own your property.",
  },
];

export default function PaySmallSmallPage() {
  const { currency } = useCurrency();
  const installmentProperties = getPropertiesByModel("pay-small-small");

  const [propertyValue, setPropertyValue] = useState(100_000_000);
  const [depositPercent, setDepositPercent] = useState(20);
  const [tenure, setTenure] = useState(24);

  const deposit = propertyValue * (depositPercent / 100);
  const remaining = propertyValue - deposit;
  const monthly = remaining / tenure;

  const makePrice = (ngn: number) => ({
    ngn,
    usd: ngn * 0.000625,
    eur: ngn * 0.00058,
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-deep-green-500 pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl font-bold text-white md:text-5xl">
              Own Premium Real Estate{" "}
              <span className="text-gold">in Installments</span>
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Pay monthly in Naira, Dollars, Euros or Crypto. See your progress
              in real time.
            </p>
            <Link
              href="/properties?mode=pay-small-small"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-deep-green-500 hover:bg-gold-400"
            >
              Browse Installment Properties
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="How Pay Small Small Works"
            subtitle="Simple, transparent, and protected."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-deep-green-500 text-white">
                  <step.icon className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-deep-green-500">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading
            title="Payment Calculator"
            subtitle="See what your monthly payments could look like."
          />

          <div className="rounded-2xl border border-gray-200 p-6 md:p-8">
            <div className="space-y-6">
              {/* Property value */}
              <div>
                <div className="flex justify-between text-sm">
                  <span>Property Value</span>
                  <span className="font-semibold">
                    {formatPrice(makePrice(propertyValue), currency)}
                  </span>
                </div>
                <Slider
                  min={30_000_000}
                  max={1_500_000_000}
                  step={10_000_000}
                  value={[propertyValue]}
                  onValueChange={([v]) => setPropertyValue(v)}
                  className="mt-2"
                />
              </div>

              {/* Down payment */}
              <div>
                <div className="flex justify-between text-sm">
                  <span>Down Payment</span>
                  <span className="font-semibold">{depositPercent}%</span>
                </div>
                <Slider
                  min={10}
                  max={50}
                  step={5}
                  value={[depositPercent]}
                  onValueChange={([v]) => setDepositPercent(v)}
                  className="mt-2"
                />
                <p className="mt-1 text-right text-sm text-muted-foreground">
                  {formatPrice(makePrice(deposit), currency)}
                </p>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between text-sm">
                  <span>Tenure</span>
                  <span className="font-semibold">{tenure} months</span>
                </div>
                <Slider
                  min={6}
                  max={48}
                  step={6}
                  value={[tenure]}
                  onValueChange={([v]) => setTenure(v)}
                  className="mt-2"
                />
              </div>
            </div>

            {/* Results */}
            <div className="mt-8 rounded-xl bg-deep-green-500 p-6 text-white">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-white/70">Monthly Payment</p>
                  <p className="text-2xl font-bold font-heading">
                    {formatPrice(makePrice(monthly), currency)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Completion Date</p>
                  <p className="text-2xl font-bold font-heading">
                    {new Date(
                      Date.now() + tenure * 30 * 24 * 60 * 60 * 1000
                    ).toLocaleDateString("en-NG", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <Link
                href="/properties?mode=pay-small-small"
                className="mt-4 block w-full rounded-lg bg-gold py-3 text-center text-sm font-semibold text-deep-green-500 hover:bg-gold-400"
              >
                Find Matching Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Installment Properties */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Installment-Eligible Properties"
            subtitle="These properties support the Pay Small Small plan."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {installmentProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

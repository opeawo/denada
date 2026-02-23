import Link from "next/link";
import { PieChart, TrendingUp, ArrowLeftRight, Users, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PropertyCard } from "@/components/shared/property-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { TrustBar } from "@/components/shared/trust-bar";
import { getPropertiesByModel } from "@/data/properties";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractionalize",
  description: "Own a fraction of premium Nigerian real estate. Start from just 5%.",
};

const steps = [
  {
    icon: PieChart,
    title: "Choose a Property",
    description: "Browse verified premium properties available for fractional investment.",
  },
  {
    icon: Users,
    title: "Buy Your Fraction (Min 5%)",
    description: "Own as little as 5% of a highbrow property. Pool with family or invest solo.",
  },
  {
    icon: TrendingUp,
    title: "Earn Proportional Yield",
    description: "Receive rental income proportional to your ownership share, deposited monthly.",
  },
  {
    icon: ArrowLeftRight,
    title: "Exit Anytime",
    description: "Sell your fraction via Denada sell-side service or our buyback program.",
  },
];

const faqs = [
  {
    q: "What happens if I want to sell my fraction?",
    a: "You can list your fraction on our sell-side platform at any time. We'll find a buyer, or you can use our buyback guarantee to exit at a pre-agreed price.",
  },
  {
    q: "Who manages the property?",
    a: "Denada handles all property management through our vetted partners. You receive rental income without any management hassle.",
  },
  {
    q: "Can I buy more fractions over time?",
    a: "Yes! You can increase your ownership stake at any time, subject to availability. Many investors start at 5% and grow their position.",
  },
  {
    q: "What's the minimum holding period?",
    a: "There's a 12-month minimum holding period for all fractional investments. After that, you're free to sell or hold as long as you like.",
  },
  {
    q: "How is rental income distributed?",
    a: "Rental income is distributed monthly to all fraction holders, proportional to their ownership stake. Payments are made to your dashboard wallet.",
  },
];

export default function FractionalizePage() {
  const fractionalProperties = getPropertiesByModel("fractional");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-deep-green-500 pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl font-bold text-white md:text-5xl">
              Own a Fraction of{" "}
              <span className="text-gold">Premium Nigerian Real Estate</span>
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Start from just 5% of a highbrow property. Perfect for diaspora
              groups, families pooling together, or solo investors.
            </p>
            <Link
              href="/properties?mode=fractional"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-deep-green-500 hover:bg-gold-400"
            >
              Browse Fractional Properties
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
            title="How Fractional Ownership Works"
            subtitle="Four simple steps to property ownership."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center"
              >
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-deep-green-50 text-deep-green-500">
                  <step.icon className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-deep-green-500">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-base font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Listings */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Active Fractional Listings"
            subtitle="Verified properties available for fractional investment."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fractionalProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about fractional ownership."
          />
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

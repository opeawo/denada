import Link from "next/link";
import { ArrowRight, Wallet, CalendarClock, PieChart } from "lucide-react";

const models = [
  {
    title: "Buy Outright",
    description: "Full ownership, fully digital. E-sign from anywhere.",
    icon: Wallet,
    href: "/properties",
  },
  {
    title: "Pay Small Small",
    description:
      "Pay in installments in Naira, Dollars, Euros or Crypto. See exactly what you've paid.",
    icon: CalendarClock,
    href: "/pay-small-small",
  },
  {
    title: "Fractionalize",
    description:
      "Own as little as 5% of a premium property. Pool with family or invest solo.",
    icon: PieChart,
    href: "/fractionalize",
  },
];

export function InvestmentModels() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Three Ways to Invest
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Choose the investment model that works for you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {models.map((model) => (
            <Link
              key={model.title}
              href={model.href}
              className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-gold hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-deep-green-50 text-deep-green-500">
                <model.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {model.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {model.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-gold group-hover:text-gold-600">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

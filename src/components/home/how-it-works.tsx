import { Search, FileSignature, BarChart3 } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Browse & Choose",
    description:
      "Explore verified premium properties across Lagos and Abuja. Filter by location, price, and investment model.",
  },
  {
    step: 2,
    icon: FileSignature,
    title: "Pay & Sign Online",
    description:
      "Choose your payment plan, sign digitally, and pay in your preferred currency. No paperwork needed.",
  },
  {
    step: 3,
    icon: BarChart3,
    title: "Track Your Investment",
    description:
      "Monitor your property, track payments, and watch your investment grow from your personal dashboard.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Three simple steps to your next investment.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-deep-green-500 text-white">
                <step.icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-deep-green-500">
                  {step.step}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

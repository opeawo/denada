import { ShieldCheck, Landmark, Smartphone, Globe } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Agent on Record Protection",
    description:
      "10-year guarantee against land grabbing (omo-onile). Your property is protected.",
  },
  {
    icon: Landmark,
    title: "Trust Company Partnership",
    description:
      "Your asset is held under a licensed trust company. Full legal protection.",
  },
  {
    icon: Smartphone,
    title: "100% Digital",
    description:
      "Buy, sign, pay, track — all online. No paperwork. No middlemen stress.",
  },
  {
    icon: Globe,
    title: "Diaspora-Ready",
    description:
      "Multi-currency payments. No flights. No stress. Investing from Houston, London or Toronto? We've got you.",
  },
];

export function WhyDenada() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Why Denada?
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Built different. Built for you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 text-gold-600">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

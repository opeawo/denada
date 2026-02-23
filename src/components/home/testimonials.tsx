import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Trusted by Investors Everywhere
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Real stories from real investors.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-gray-200 bg-white p-8"
            >
              <Quote className="h-8 w-8 text-gold/30" />

              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">
                  {t.role} &middot; {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

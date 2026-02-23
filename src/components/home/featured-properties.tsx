import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProperties } from "@/data/properties";
import { PropertyCard } from "@/components/shared/property-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function FeaturedProperties() {
  const featured = getFeaturedProperties();

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          title="Premium Properties, Verified & Ready"
          subtitle="Handpicked properties across Lagos and Abuja, vetted by our team."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-deep-green-500 px-6 py-3 text-sm font-semibold text-deep-green-500 transition-colors hover:bg-deep-green-500 hover:text-white"
          >
            View All Properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

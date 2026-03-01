import { Metadata } from "next";
import Link from "next/link";
import { getAllDevelopers } from "@/data/developers";
import { PriceDisplay } from "@/components/shared/price-display";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "Explore trusted property developers across Lagos and Abuja. View their portfolios, property counts, and starting prices.",
};

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function DevelopersPage() {
  const developers = getAllDevelopers();

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-deep-green-500 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-white md:text-4xl">
            All Developers
          </h1>
          <p className="mt-2 text-white/70">
            {developers.length} trusted developers across Nigeria
          </p>
        </div>
      </div>

      {/* Developer Grid */}
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {developers.map((developer) => (
            <Link
              key={developer.slug}
              href={`/developers/${developer.slug}`}
              className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Logo / Initials */}
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gray-200 bg-gray-50 transition-colors group-hover:border-deep-green-200 group-hover:bg-deep-green-50">
                <span className="text-2xl font-bold text-gray-400 group-hover:text-deep-green-500">
                  {getInitials(developer.name)}
                </span>
              </div>

              {/* Name */}
              <h2 className="mt-5 font-heading text-lg font-bold text-foreground">
                {developer.name}
              </h2>

              {/* Property count */}
              <p className="mt-1 text-sm text-muted-foreground">
                {developer.propertyCount}{" "}
                {developer.propertyCount === 1 ? "Property" : "Properties"}{" "}
                Available
              </p>

              {/* Starting price */}
              <p className="mt-1 text-xs text-muted-foreground">Start from</p>
              <PriceDisplay
                price={developer.startingPrice}
                className="mt-0.5 text-lg font-bold text-foreground"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

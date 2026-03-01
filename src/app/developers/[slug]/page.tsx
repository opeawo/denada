import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  getAllDevelopers,
  getDeveloperBySlug,
  getPropertiesByDeveloper,
} from "@/data/developers";
import { PropertyCard } from "@/components/shared/property-card";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllDevelopers().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const developer = getDeveloperBySlug(params.slug);
  if (!developer) return { title: "Developer Not Found" };
  return {
    title: `${developer.name} — Properties`,
    description: `Browse ${developer.propertyCount} properties by ${developer.name} on Denada.`,
  };
}

export default function DeveloperDetailPage({ params }: Props) {
  const developer = getDeveloperBySlug(params.slug);
  if (!developer) notFound();

  const developerProperties = getPropertiesByDeveloper(params.slug);

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-deep-green-500 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-1 text-sm text-white/60">
            <Link href="/developers" className="hover:text-white">
              Developers
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{developer.name}</span>
          </nav>

          <h1 className="font-heading text-3xl font-bold text-white md:text-4xl">
            {developer.name}
          </h1>
          <p className="mt-2 text-white/70">
            {developerProperties.length}{" "}
            {developerProperties.length === 1 ? "property" : "properties"}{" "}
            available
          </p>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        {developerProperties.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {developerProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            No properties currently listed for this developer.
          </p>
        )}
      </div>
    </div>
  );
}

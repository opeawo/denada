import { Suspense } from "react";
import { Metadata } from "next";
import { properties } from "@/data/properties";
import { PropertyFiltersSidebar, PropertyFiltersMobile } from "@/components/properties/property-filters";
import { PropertySort } from "@/components/properties/property-sort";
import { PropertyGrid } from "@/components/properties/property-grid";
import { Property } from "@/types/property";

export const metadata: Metadata = {
  title: "Browse Properties",
  description:
    "Explore premium verified properties across Lagos and Abuja. Filter by location, price, and investment model.",
};

interface Props {
  searchParams: {
    location?: string | string[];
    type?: string | string[];
    mode?: string | string[];
    bedrooms?: string;
    sort?: string;
  };
}

function filterProperties(searchParams: Props["searchParams"]): Property[] {
  let filtered = [...properties];

  // Location filter
  const locations = Array.isArray(searchParams.location)
    ? searchParams.location
    : searchParams.location
    ? [searchParams.location]
    : [];
  if (locations.length > 0) {
    filtered = filtered.filter((p) => locations.includes(p.location.area));
  }

  // Type filter
  const types = Array.isArray(searchParams.type)
    ? searchParams.type
    : searchParams.type
    ? [searchParams.type]
    : [];
  if (types.length > 0) {
    filtered = filtered.filter((p) => types.includes(p.type));
  }

  // Mode filter
  const modes = Array.isArray(searchParams.mode)
    ? searchParams.mode
    : searchParams.mode
    ? [searchParams.mode]
    : [];
  if (modes.length > 0) {
    filtered = filtered.filter((p) =>
      p.investmentModels.some((m) => modes.includes(m))
    );
  }

  // Bedrooms filter
  if (searchParams.bedrooms) {
    const beds = searchParams.bedrooms;
    if (beds === "5+") {
      filtered = filtered.filter((p) => p.bedrooms >= 5);
    } else {
      filtered = filtered.filter((p) => p.bedrooms === parseInt(beds));
    }
  }

  // Sort
  const sort = searchParams.sort || "newest";
  switch (sort) {
    case "price-low":
      filtered.sort((a, b) => a.price.ngn - b.price.ngn);
      break;
    case "price-high":
      filtered.sort((a, b) => b.price.ngn - a.price.ngn);
      break;
    case "roi":
      filtered.sort((a, b) => b.estimatedROI - a.estimatedROI);
      break;
    case "newest":
    default:
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }

  return filtered;
}

export default function PropertiesPage({ searchParams }: Props) {
  const filtered = filterProperties(searchParams);

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-deep-green-500 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Browse Properties
          </h1>
          <p className="mt-2 text-white/70">
            {filtered.length} premium {filtered.length === 1 ? "property" : "properties"} available
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="flex gap-8">
          {/* Desktop filters sidebar */}
          <Suspense>
            <PropertyFiltersSidebar />
          </Suspense>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="mb-6 flex items-center gap-3">
              <Suspense>
                <PropertyFiltersMobile />
              </Suspense>
              <div className="hidden lg:block text-sm text-muted-foreground">
                {filtered.length} {filtered.length === 1 ? "result" : "results"}
              </div>
              <div className="ml-auto">
                <Suspense>
                  <PropertySort />
                </Suspense>
              </div>
            </div>

            <PropertyGrid properties={filtered} />
          </div>
        </div>
      </div>
    </div>
  );
}

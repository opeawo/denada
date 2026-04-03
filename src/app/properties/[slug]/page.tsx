import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Bed,
  Bath,
  Maximize,
  Calendar,
  Building2,
  ChevronRight,
  TrendingUp,
  Home,
  Plane,
  ArrowLeftRight,
  MessageCircle,
  Video,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import { properties, getPropertyBySlug } from "@/data/properties";
import { PropertyGallery } from "@/components/properties/property-gallery";
import { PurchasePanel } from "@/components/properties/purchase-panel";
import { PropertyCard } from "@/components/shared/property-card";
import { getWhatsAppLink, slugify } from "@/lib/format";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = getPropertyBySlug(params.slug);
  if (!property) return { title: "Property Not Found" };
  return {
    title: property.title,
    description: property.shortDescription,
  };
}

export default function PropertyDetailPage({ params }: Props) {
  const property = getPropertyBySlug(params.slug);
  if (!property) notFound();

  const similar = properties
    .filter(
      (p) =>
        p.id !== property.id &&
        (p.location.city === property.location.city ||
          p.type === property.type)
    )
    .slice(0, 4);

  const whatsappLink = getWhatsAppLink(property.agent.phone, property.title);

  return (
    <div className="pt-20 pb-24 md:pb-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 py-4 text-sm text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-foreground">
            Nigeria
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/properties" className="hover:text-foreground">
            {property.location.city}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="hover:text-foreground">
            {property.location.area}
          </span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium truncate">
            {property.title}
          </span>
        </nav>

        {/* Two-column layout */}
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Left column */}
          <div className="min-w-0">
            {/* Gallery */}
            <PropertyGallery images={property.images} title={property.title} />

            {/* Header */}
            <div className="mt-6">
              <h1 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                {property.title}
              </h1>
              <p className="mt-1 text-muted-foreground">
                {property.location.address}, {property.location.area},{" "}
                {property.location.city}
              </p>
            </div>

            {/* Key stats */}
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              {property.bedrooms > 0 && (
                <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5">
                  <Bed className="h-4 w-4 text-muted-foreground" />
                  {property.bedrooms} Beds
                </span>
              )}
              {property.bathrooms > 0 && (
                <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5">
                  <Bath className="h-4 w-4 text-muted-foreground" />
                  {property.bathrooms} Baths
                </span>
              )}
              <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5">
                <Maximize className="h-4 w-4 text-muted-foreground" />
                {property.sqm} sqm
              </span>
              {property.yearBuilt > 0 && (
                <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  Built {property.yearBuilt}
                </span>
              )}
              <Link
                href={`/developers/${slugify(property.developer.name)}`}
                className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 transition-colors hover:bg-deep-green-50 hover:text-deep-green-500"
              >
                <Building2 className="h-4 w-4 text-muted-foreground" />
                {property.developer.name}
              </Link>
            </div>

            {/* Mobile purchase panel */}
            <div className="mt-8 lg:hidden">
              <PurchasePanel property={property} />
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="font-heading text-xl font-bold">Description</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mt-8">
              <h2 className="font-heading text-xl font-bold">
                Key Features & Amenities
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {property.amenities.map((amenity) => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const Icon = (LucideIcons as any)[amenity.icon] || LucideIcons.Check;
                  return (
                    <div
                      key={amenity.label}
                      className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-white p-3"
                    >
                      <Icon className="h-5 w-5 text-deep-green-500" />
                      <span className="text-sm">{amenity.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Investment Highlights */}
            <div className="mt-8">
              <h2 className="font-heading text-xl font-bold">
                Investment Highlights
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-100 bg-white p-4">
                  <TrendingUp className="h-5 w-5 text-gold" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Est. Annual ROI
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    {property.estimatedROI}%
                  </p>
                </div>
                {property.rentalYield && property.rentalYield > 0 && (
                  <div className="rounded-lg border border-gray-100 bg-white p-4">
                    <Home className="h-5 w-5 text-gold" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Rental Yield
                    </p>
                    <p className="text-xl font-bold text-foreground">
                      {property.rentalYield}%
                    </p>
                  </div>
                )}
                <div className="rounded-lg border border-gray-100 bg-white p-4">
                  <Plane className="h-5 w-5 text-gold" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Airbnb Eligible
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    {property.type === "apartment" ||
                    property.type === "penthouse"
                      ? "Yes"
                      : "No"}
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-white p-4">
                  <ArrowLeftRight className="h-5 w-5 text-gold" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Liquidity
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Bonnafide Sell-Side Service
                  </p>
                </div>
              </div>
            </div>

            {/* Similar Properties */}
            {similar.length > 0 && (
              <div className="mt-12">
                <h2 className="font-heading text-xl font-bold mb-6">
                  Similar Properties
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {similar.slice(0, 4).map((p) => (
                    <PropertyCard key={p.id} property={p} compact />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column — sticky purchase panel */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <PurchasePanel property={property} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white p-3 md:hidden">
        <div className="flex gap-2">
          <button className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2.5 text-sm font-medium">
            <Video className="h-4 w-4" />
            Viewing
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-lg bg-whatsapp px-3 py-2.5 text-sm font-medium text-white"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <Link
            href="#"
            className="flex-1 rounded-lg bg-gold py-2.5 text-center text-sm font-semibold text-deep-green-500"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

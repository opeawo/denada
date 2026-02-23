"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Bed, Bath, Maximize, MessageCircle } from "lucide-react";
import { Property } from "@/types/property";
import { PriceDisplay } from "./price-display";
import { Badge } from "@/components/ui/badge";
import { getWhatsAppLink } from "@/lib/format";

interface PropertyCardProps {
  property: Property;
  compact?: boolean;
}

export function PropertyCard({ property, compact = false }: PropertyCardProps) {
  const modelBadges = property.investmentModels.map((model) => {
    switch (model) {
      case "fractional":
        return { label: "Fractional", className: "bg-blue-100 text-blue-700 border-blue-200" };
      case "pay-small-small":
        return { label: "Pay Small Small", className: "bg-amber-100 text-amber-700 border-amber-200" };
      default:
        return null;
    }
  }).filter(Boolean);

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={property.images[0]?.src || "/placeholder.jpg"}
          alt={property.images[0]?.alt || property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {property.isNew && (
            <Badge className="bg-deep-green-500 text-white border-none text-xs">
              New
            </Badge>
          )}
          {modelBadges.map((badge) => (
            badge && (
              <Badge key={badge.label} className={`border text-xs ${badge.className}`}>
                {badge.label}
              </Badge>
            )
          ))}
        </div>
        {/* Bookmark */}
        <button
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-600 backdrop-blur-sm transition-colors hover:bg-white hover:text-red-500"
          aria-label="Save property"
        >
          <Heart className="h-4 w-4" />
        </button>
        {/* ROI badge */}
        {property.estimatedROI > 0 && (
          <div className="absolute bottom-3 right-3 rounded-full bg-gold/90 px-2.5 py-1 text-xs font-semibold text-deep-green-500 backdrop-blur-sm">
            Est. {property.estimatedROI}% ROI
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Location */}
        <p className="text-xs font-medium text-muted-foreground">
          {property.location.area}, {property.location.city}
        </p>

        {/* Title */}
        <Link href={`/properties/${property.slug}`}>
          <h3 className="mt-1 font-heading text-lg font-semibold text-foreground line-clamp-1 hover:text-deep-green-500">
            {property.title}
          </h3>
        </Link>

        {/* Developer */}
        <p className="mt-0.5 text-xs text-muted-foreground">
          by {property.developer.name}
        </p>

        {/* Specs */}
        {(property.bedrooms > 0 || property.sqm > 0) && (
          <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
            {property.bedrooms > 0 && (
              <span className="flex items-center gap-1">
                <Bed className="h-3.5 w-3.5" />
                {property.bedrooms} bed
              </span>
            )}
            {property.bathrooms > 0 && (
              <span className="flex items-center gap-1">
                <Bath className="h-3.5 w-3.5" />
                {property.bathrooms} bath
              </span>
            )}
            {property.sqm > 0 && (
              <span className="flex items-center gap-1">
                <Maximize className="h-3.5 w-3.5" />
                {property.sqm} sqm
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="mt-3">
          <PriceDisplay
            price={property.price}
            className="text-lg font-bold text-deep-green-500"
            showSecondary
          />
          {property.paySmallSmallPlan && (
            <p className="mt-0.5 text-xs text-muted-foreground">
              From{" "}
              <PriceDisplay
                price={property.paySmallSmallPlan.monthlyPayment}
                compact
                className="font-medium text-foreground"
              />
              /month
            </p>
          )}
        </div>

        {/* CTAs */}
        {!compact && (
          <div className="mt-4 flex gap-2">
            <Link
              href={`/properties/${property.slug}`}
              className="flex-1 rounded-lg bg-deep-green-500 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-deep-green-600"
            >
              View Property
            </Link>
            <a
              href={getWhatsAppLink(property.agent.phone, property.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-whatsapp px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-whatsapp-dark"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import {
  Building2,
  MapPin,
  Bed,
  Bath,
  Maximize,
  ExternalLink,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ownedProperties = [
  {
    id: "1",
    name: "Victoria Island Luxury Flat",
    slug: "vi-luxury-apartment",
    location: "Victoria Island, Lagos",
    type: "apartment",
    status: "active" as const,
    purchaseDate: "Jan 15, 2024",
    purchasePrice: "\u20A6180,000,000",
    currentValue: "\u20A6208,800,000",
    gainPercent: 16,
    investmentModel: "Pay Small Small",
    paymentProgress: 14.7,
    paidAmount: "\u20A626,400,000",
    totalAmount: "\u20A6180,000,000",
    nextPayment: "Mar 1, 2025",
    bedrooms: 3,
    bathrooms: 3,
    sqm: 210,
  },
  {
    id: "2",
    name: "Ikoyi Waterfront Penthouse",
    slug: "ikoyi-waterfront-penthouse",
    location: "Ikoyi, Lagos",
    type: "penthouse",
    status: "active" as const,
    purchaseDate: "Mar 22, 2024",
    purchasePrice: "\u20A642,500,000",
    currentValue: "\u20A650,150,000",
    gainPercent: 18,
    investmentModel: "Fractional (5%)",
    paymentProgress: 100,
    paidAmount: "\u20A642,500,000",
    totalAmount: "\u20A642,500,000",
    nextPayment: null,
    bedrooms: 4,
    bathrooms: 5,
    sqm: 520,
  },
];

export default function PropertiesPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold md:text-3xl">
            My Properties
          </h1>
          <p className="mt-1 text-muted-foreground">
            {ownedProperties.length} properties in your portfolio
          </p>
        </div>
        <Link
          href="/properties"
          className="rounded-lg bg-deep-green-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-deep-green-600"
        >
          Browse More
        </Link>
      </div>

      <div className="mt-6 space-y-4">
        {ownedProperties.map((prop) => (
          <div
            key={prop.id}
            className="rounded-xl border border-gray-200 bg-white p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full bg-gold-50 px-2.5 py-0.5 text-xs font-medium text-gold-700">
                    {prop.investmentModel}
                  </span>
                  <span className="inline-block rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    Active
                  </span>
                </div>
                <h3 className="mt-2 font-heading text-lg font-bold">
                  {prop.name}
                </h3>
                <p className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {prop.location}
                </p>
                <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Bed className="h-3.5 w-3.5" />
                    {prop.bedrooms} bed
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-3.5 w-3.5" />
                    {prop.bathrooms} bath
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="h-3.5 w-3.5" />
                    {prop.sqm} sqm
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Current Value</p>
                <p className="text-lg font-bold text-deep-green-500">
                  {prop.currentValue}
                </p>
                <p className="text-xs text-green-600">
                  +{prop.gainPercent}% from purchase
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Purchased {prop.purchaseDate}
                </p>
              </div>
            </div>

            {/* Payment progress */}
            <div className="mt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Paid: {prop.paidAmount} of {prop.totalAmount}
                </span>
                <span className="font-medium">
                  {prop.paymentProgress.toFixed(1)}%
                </span>
              </div>
              <Progress value={prop.paymentProgress} className="mt-2 h-2" />
            </div>

            {prop.nextPayment && (
              <div className="mt-3 flex items-center justify-between rounded-lg bg-amber-50 px-4 py-2">
                <span className="text-sm text-amber-800">
                  Next payment: {prop.nextPayment}
                </span>
                <button className="text-sm font-semibold text-amber-800 hover:underline">
                  Pay Now
                </button>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={`/properties/${prop.slug}`}
                className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium hover:bg-gray-50"
              >
                <ExternalLink className="h-3 w-3" />
                View Property
              </Link>
              <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium hover:bg-gray-50">
                Request Valuation
              </button>
              <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium hover:bg-gray-50">
                Download Title
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

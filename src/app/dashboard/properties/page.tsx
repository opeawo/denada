"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  ExternalLink,
  FileText,
  TrendingUp,
  ArrowUpRight,
  Download,
  Eye,
  CheckCircle2,
  Clock,
  Shield,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const ownedProperties = [
  {
    id: "1",
    name: "Victoria Island Luxury Flat",
    slug: "vi-luxury-apartment",
    location: "Victoria Island, Lagos",
    type: "apartment",
    status: "active" as const,
    purchaseDate: "Jan 15, 2024",
    purchasePrice: 180_000_000,
    currentValue: 208_800_000,
    gainPercent: 16,
    investmentModel: "Pay Small Small",
    paymentProgress: 14.7,
    paidAmount: "\u20A626,400,000",
    totalAmount: "\u20A6180,000,000",
    nextPayment: "Mar 1, 2025",
    bedrooms: 3,
    bathrooms: 3,
    sqm: 210,
    annualAppreciation: 16,
    valuationHistory: [
      { date: "Feb 2025", value: 208_800_000 },
      { date: "Nov 2024", value: 198_000_000 },
      { date: "Aug 2024", value: 189_000_000 },
      { date: "Jan 2024", value: 180_000_000 },
    ],
    documents: [
      {
        id: "d1",
        name: "Certificate of Occupancy",
        status: "verified" as const,
        dateIssued: "Jan 15, 2024",
        fileSize: "2.4 MB",
      },
      {
        id: "d2",
        name: "Purchase Agreement",
        status: "verified" as const,
        dateIssued: "Jan 15, 2024",
        fileSize: "1.8 MB",
      },
      {
        id: "d3",
        name: "Payment Schedule",
        status: "verified" as const,
        dateIssued: "Jan 15, 2024",
        fileSize: "0.5 MB",
      },
    ],
  },
  {
    id: "2",
    name: "Ikoyi Waterfront Penthouse",
    slug: "ikoyi-waterfront-penthouse",
    location: "Ikoyi, Lagos",
    type: "penthouse",
    status: "active" as const,
    purchaseDate: "Mar 22, 2024",
    purchasePrice: 850_000_000,
    currentValue: 1_003_000_000,
    gainPercent: 18,
    investmentModel: "Fractional (5%)",
    paymentProgress: 100,
    paidAmount: "\u20A642,500,000",
    totalAmount: "\u20A642,500,000",
    nextPayment: null,
    bedrooms: 4,
    bathrooms: 5,
    sqm: 520,
    annualAppreciation: 18,
    valuationHistory: [
      { date: "Feb 2025", value: 1_003_000_000 },
      { date: "Nov 2024", value: 935_000_000 },
      { date: "Aug 2024", value: 892_500_000 },
      { date: "Mar 2024", value: 850_000_000 },
    ],
    documents: [
      {
        id: "d4",
        name: "Fractional Ownership Certificate",
        status: "verified" as const,
        dateIssued: "Mar 22, 2024",
        fileSize: "1.2 MB",
      },
      {
        id: "d5",
        name: "Deed of Assignment",
        status: "processing" as const,
        dateIssued: "Mar 22, 2024",
        fileSize: "3.1 MB",
      },
    ],
  },
];

function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

const statusConfig = {
  verified: {
    icon: CheckCircle2,
    className: "text-green-600 bg-green-50",
    label: "Verified",
  },
  processing: {
    icon: Clock,
    className: "text-amber-600 bg-amber-50",
    label: "Processing",
  },
};

/* ------------------------------------------------------------------ */
/*  Property Card with expandable sections                             */
/* ------------------------------------------------------------------ */

function PropertyCard({
  prop,
}: {
  prop: (typeof ownedProperties)[number];
}) {
  const [expanded, setExpanded] = useState(false);
  const gain = prop.currentValue - prop.purchasePrice;
  const gainPercent = ((gain / prop.purchasePrice) * 100).toFixed(1);

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      {/* Main info */}
      <div className="p-6">
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
              {formatNaira(prop.currentValue)}
            </p>
            <p className="flex items-center justify-end gap-0.5 text-xs text-green-600">
              <ArrowUpRight className="h-3 w-3" />+{gainPercent}% (
              {formatNaira(gain)})
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

        {/* Action buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={`/properties/${prop.slug}`}
            className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium hover:bg-gray-50"
          >
            <ExternalLink className="h-3 w-3" />
            View Property
          </Link>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium hover:bg-gray-50"
          >
            {expanded ? (
              <ChevronUp className="h-3 w-3" />
            ) : (
              <ChevronDown className="h-3 w-3" />
            )}
            {expanded ? "Hide Details" : "Documents & Valuations"}
          </button>
        </div>
      </div>

      {/* Expandable: Documents & Valuation History */}
      {expanded && (
        <div className="border-t border-gray-200 bg-gray-50/50 px-6 py-5 space-y-6">
          {/* Valuation History */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-4 w-4 text-deep-green-500" />
              <h4 className="text-sm font-semibold">Valuation History</h4>
            </div>
            <div className="grid gap-2 sm:grid-cols-4">
              {prop.valuationHistory.map((entry, i) => (
                <div
                  key={entry.date}
                  className={`rounded-lg p-3 ${
                    i === 0
                      ? "border border-deep-green-200 bg-deep-green-50"
                      : "bg-white border border-gray-100"
                  }`}
                >
                  <p className="text-xs text-muted-foreground">{entry.date}</p>
                  <p
                    className={`mt-1 text-sm font-bold ${
                      i === 0 ? "text-deep-green-500" : ""
                    }`}
                  >
                    {formatNaira(entry.value)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between rounded-lg bg-white border border-gray-100 px-4 py-2">
              <span className="text-xs text-muted-foreground">
                Annual Appreciation Rate
              </span>
              <span className="text-xs font-bold text-green-600">
                {prop.annualAppreciation}%
              </span>
            </div>
          </div>

          {/* Documents */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-4 w-4 text-deep-green-500" />
              <h4 className="text-sm font-semibold">Documents</h4>
              <div className="ml-auto flex items-center gap-1.5 text-xs text-green-700">
                <Shield className="h-3 w-3" />
                Blockchain-verified
              </div>
            </div>
            <div className="space-y-2">
              {prop.documents.map((doc) => {
                const config = statusConfig[doc.status];
                const StatusIcon = config.icon;
                return (
                  <div
                    key={doc.id}
                    className="flex flex-col gap-2 rounded-lg border border-gray-100 bg-white p-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gray-100">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {doc.dateIssued} &middot; {doc.fileSize}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${config.className}`}
                      >
                        <StatusIcon className="h-3 w-3" />
                        {config.label}
                      </span>
                      <button className="flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1 text-xs font-medium hover:bg-gray-50">
                        <Eye className="h-3 w-3" />
                        View
                      </button>
                      <button className="flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1 text-xs font-medium hover:bg-gray-50">
                        <Download className="h-3 w-3" />
                        Download
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

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
          <PropertyCard key={prop.id} prop={prop} />
        ))}
      </div>
    </div>
  );
}

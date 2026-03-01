import {
  PieChart,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const fractionStats = [
  {
    label: "Total Fractional Investment",
    value: "\u20A642,500,000",
    icon: Wallet,
    change: "+18%",
  },
  {
    label: "Current Value",
    value: "\u20A650,150,000",
    icon: TrendingUp,
    change: "+18%",
  },
  {
    label: "Fractions Owned",
    value: "1",
    icon: PieChart,
    change: "",
  },
  {
    label: "Co-Investors",
    value: "3",
    icon: Users,
    change: "",
  },
];

const fractions = [
  {
    id: "1",
    property: "Ikoyi Waterfront Penthouse",
    location: "Ikoyi, Lagos",
    fractionsOwned: 1,
    totalFractions: 20,
    ownershipPercent: 5,
    purchasePrice: "\u20A642,500,000",
    currentValue: "\u20A650,150,000",
    gainPercent: 18,
    expectedAnnualReturn: 18,
    totalInvestors: 3,
    availableFractions: 12,
    purchaseDate: "Mar 22, 2024",
    lastDistribution: "Jan 15, 2025",
    distributionAmount: "\u20A6637,500",
  },
];

export default function FractionsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold md:text-3xl">
            My Fractions
          </h1>
          <p className="mt-1 text-muted-foreground">
            Manage your fractional property investments.
          </p>
        </div>
        <a
          href="/fractionalize"
          className="rounded-lg bg-deep-green-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-deep-green-600"
        >
          Explore Fractions
        </a>
      </div>

      {/* Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {fractionStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <stat.icon className="h-5 w-5 text-muted-foreground" />
              {stat.change && (
                <span className="text-xs font-medium text-green-600">
                  {stat.change}
                </span>
              )}
            </div>
            <p className="mt-3 text-2xl font-bold font-heading">{stat.value}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Fractional holdings */}
      <div className="mt-10">
        <h2 className="font-heading text-xl font-bold">
          Fractional Holdings
        </h2>
        <div className="mt-4 space-y-4">
          {fractions.map((frac) => (
            <div
              key={frac.id}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      Fractional — {frac.ownershipPercent}% ownership
                    </span>
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-bold">
                    {frac.property}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {frac.location}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Purchased {frac.purchaseDate}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    Your Share Value
                  </p>
                  <p className="text-lg font-bold text-deep-green-500">
                    {frac.currentValue}
                  </p>
                  <p className="text-xs text-green-600">
                    +{frac.gainPercent}% from purchase
                  </p>
                </div>
              </div>

              {/* Ownership bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {frac.fractionsOwned} of {frac.totalFractions} fractions
                  </span>
                  <span className="font-medium">
                    {frac.ownershipPercent}% ownership
                  </span>
                </div>
                <Progress
                  value={frac.ownershipPercent}
                  className="mt-2 h-2"
                />
              </div>

              {/* Distribution info */}
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-muted-foreground">
                    Expected Annual Return
                  </p>
                  <p className="mt-1 text-sm font-bold">
                    {frac.expectedAnnualReturn}%
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-muted-foreground">
                    Last Distribution
                  </p>
                  <p className="mt-1 text-sm font-bold">
                    {frac.distributionAmount}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {frac.lastDistribution}
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-muted-foreground">
                    Available Fractions
                  </p>
                  <p className="mt-1 text-sm font-bold">
                    {frac.availableFractions} of {frac.totalFractions}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium hover:bg-gray-50">
                  View Property
                </button>
                <button className="rounded-lg bg-deep-green-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-deep-green-600">
                  Buy More Fractions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

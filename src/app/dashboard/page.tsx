import {
  Building2,
  TrendingUp,
  CreditCard,
  Wallet,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const stats = [
  {
    label: "Total Invested",
    value: "\u20A6180,000,000",
    icon: Wallet,
    change: "+12.4%",
  },
  {
    label: "Properties Owned",
    value: "2",
    icon: Building2,
    change: "",
  },
  {
    label: "Monthly Payment Due",
    value: "\u20A66,000,000",
    icon: CreditCard,
    change: "Due Mar 1",
  },
  {
    label: "Returns Earned",
    value: "\u20A68,400,000",
    icon: TrendingUp,
    change: "+16%",
  },
];

const myProperties = [
  {
    name: "Victoria Island Luxury Flat",
    location: "Victoria Island, Lagos",
    purchasePrice: "\u20A6180,000,000",
    currentValue: "\u20A6208,800,000",
    gainPercent: 16,
    paymentProgress: 14.7,
    paidAmount: "\u20A626,400,000",
    totalAmount: "\u20A6180,000,000",
    nextPayment: "Mar 1, 2025",
    type: "Pay Small Small",
  },
  {
    name: "Ikoyi Waterfront Penthouse",
    location: "Ikoyi, Lagos",
    purchasePrice: "\u20A642,500,000",
    currentValue: "\u20A650,150,000",
    gainPercent: 18,
    paymentProgress: 100,
    paidAmount: "\u20A642,500,000",
    totalAmount: "\u20A642,500,000",
    nextPayment: null,
    type: "Fractional (5%)",
  },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold md:text-3xl">
        My Real Estate
      </h1>
      <p className="mt-1 text-muted-foreground">
        Welcome back. Here&apos;s your portfolio overview.
      </p>

      {/* Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
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

      {/* My Properties */}
      <div className="mt-10">
        <h2 className="font-heading text-xl font-bold">My Properties</h2>
        <div className="mt-4 space-y-4">
          {myProperties.map((prop) => (
            <div
              key={prop.name}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="inline-block rounded-full bg-gold-50 px-2.5 py-0.5 text-xs font-medium text-gold-700">
                    {prop.type}
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-bold">
                    {prop.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {prop.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Current Value</p>
                  <p className="text-lg font-bold text-deep-green-500">
                    {prop.currentValue}
                  </p>
                  <p className="text-xs text-green-600">
                    +{prop.gainPercent}% from purchase
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
                <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium hover:bg-gray-50">
                  View Details
                </button>
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
    </div>
  );
}

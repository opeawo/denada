import {
  TrendingUp,
  Calendar,
  ArrowUpRight,
  Building2,
} from "lucide-react";

const valuations = [
  {
    id: "1",
    property: "Victoria Island Luxury Flat",
    location: "Victoria Island, Lagos",
    purchasePrice: 180_000_000,
    currentValuation: 208_800_000,
    lastValuationDate: "Feb 1, 2025",
    valuationHistory: [
      { date: "Feb 2025", value: 208_800_000 },
      { date: "Nov 2024", value: 198_000_000 },
      { date: "Aug 2024", value: 189_000_000 },
      { date: "Jan 2024", value: 180_000_000 },
    ],
    annualAppreciation: 16,
  },
  {
    id: "2",
    property: "Ikoyi Waterfront Penthouse",
    location: "Ikoyi, Lagos",
    purchasePrice: 850_000_000,
    currentValuation: 1_003_000_000,
    lastValuationDate: "Feb 1, 2025",
    valuationHistory: [
      { date: "Feb 2025", value: 1_003_000_000 },
      { date: "Nov 2024", value: 935_000_000 },
      { date: "Aug 2024", value: 892_500_000 },
      { date: "Mar 2024", value: 850_000_000 },
    ],
    annualAppreciation: 18,
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

export default function ValuationsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold md:text-3xl">
            Valuations
          </h1>
          <p className="mt-1 text-muted-foreground">
            Track the value of your properties over time.
          </p>
        </div>
        <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50">
          Request Valuation
        </button>
      </div>

      {/* Summary */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Building2 className="h-5 w-5 text-muted-foreground" />
          <p className="mt-3 text-2xl font-bold font-heading">
            {formatNaira(
              valuations.reduce((sum, v) => sum + v.currentValuation, 0)
            )}
          </p>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Total Portfolio Value
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <TrendingUp className="h-5 w-5 text-green-600" />
          <p className="mt-3 text-2xl font-bold font-heading text-green-600">
            {formatNaira(
              valuations.reduce(
                (sum, v) => sum + (v.currentValuation - v.purchasePrice),
                0
              )
            )}
          </p>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Total Unrealized Gain
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <p className="mt-3 text-2xl font-bold font-heading">Feb 1, 2025</p>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Last Valuation Date
          </p>
        </div>
      </div>

      {/* Per-property valuations */}
      <div className="mt-10 space-y-6">
        {valuations.map((val) => {
          const gain = val.currentValuation - val.purchasePrice;
          const gainPercent = ((gain / val.purchasePrice) * 100).toFixed(1);
          return (
            <div
              key={val.id}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold">
                    {val.property}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {val.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    Current Valuation
                  </p>
                  <p className="text-lg font-bold text-deep-green-500">
                    {formatNaira(val.currentValuation)}
                  </p>
                  <p className="flex items-center justify-end gap-0.5 text-xs text-green-600">
                    <ArrowUpRight className="h-3 w-3" />+{gainPercent}% (
                    {formatNaira(gain)})
                  </p>
                </div>
              </div>

              {/* Valuation history */}
              <div className="mt-4">
                <h4 className="text-sm font-medium text-muted-foreground">
                  Valuation History
                </h4>
                <div className="mt-2 grid gap-2 sm:grid-cols-4">
                  {val.valuationHistory.map((entry, i) => (
                    <div
                      key={entry.date}
                      className={`rounded-lg p-3 ${
                        i === 0
                          ? "border border-deep-green-200 bg-deep-green-50"
                          : "bg-gray-50"
                      }`}
                    >
                      <p className="text-xs text-muted-foreground">
                        {entry.date}
                      </p>
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
              </div>

              <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2">
                <span className="text-sm text-muted-foreground">
                  Annual Appreciation Rate
                </span>
                <span className="text-sm font-bold text-green-600">
                  {val.annualAppreciation}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

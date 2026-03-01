import {
  CreditCard,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const paymentSummary = {
  totalPaid: "\u20A668,900,000",
  totalRemaining: "\u20A6153,600,000",
  nextDue: "\u20A66,000,000",
  nextDueDate: "Mar 1, 2025",
};

const activePaymentPlans = [
  {
    id: "1",
    property: "Victoria Island Luxury Flat",
    plan: "Pay Small Small — 24 months",
    monthlyAmount: "\u20A66,000,000",
    totalAmount: "\u20A6180,000,000",
    paidAmount: "\u20A626,400,000",
    progress: 14.7,
    nextDue: "Mar 1, 2025",
    monthsPaid: 4,
    totalMonths: 24,
  },
];

const paymentHistory = [
  {
    id: "t1",
    date: "Feb 1, 2025",
    property: "Victoria Island Luxury Flat",
    amount: "\u20A66,000,000",
    status: "completed" as const,
    method: "Bank Transfer",
    reference: "DEN-2025-0201-VIL",
  },
  {
    id: "t2",
    date: "Jan 1, 2025",
    property: "Victoria Island Luxury Flat",
    amount: "\u20A66,000,000",
    status: "completed" as const,
    method: "Bank Transfer",
    reference: "DEN-2025-0101-VIL",
  },
  {
    id: "t3",
    date: "Dec 1, 2024",
    property: "Victoria Island Luxury Flat",
    amount: "\u20A66,000,000",
    status: "completed" as const,
    method: "Card",
    reference: "DEN-2024-1201-VIL",
  },
  {
    id: "t4",
    date: "Nov 1, 2024",
    property: "Victoria Island Luxury Flat",
    amount: "\u20A66,000,000",
    status: "completed" as const,
    method: "Bank Transfer",
    reference: "DEN-2024-1101-VIL",
  },
  {
    id: "t5",
    date: "Oct 15, 2024",
    property: "Victoria Island Luxury Flat",
    amount: "\u20A62,400,000",
    status: "completed" as const,
    method: "Bank Transfer",
    reference: "DEN-2024-1015-VIL",
  },
  {
    id: "t6",
    date: "Mar 22, 2024",
    property: "Ikoyi Waterfront Penthouse",
    amount: "\u20A642,500,000",
    status: "completed" as const,
    method: "Bank Transfer",
    reference: "DEN-2024-0322-IWP",
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    className: "text-green-600",
    label: "Completed",
  },
  pending: { icon: Clock, className: "text-amber-600", label: "Pending" },
  failed: { icon: AlertCircle, className: "text-red-600", label: "Failed" },
};

export default function PaymentsPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold md:text-3xl">
        Payment Tracker
      </h1>
      <p className="mt-1 text-muted-foreground">
        Track your payments and upcoming dues.
      </p>

      {/* Summary cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <p className="mt-3 text-2xl font-bold font-heading">
            {paymentSummary.totalPaid}
          </p>
          <p className="mt-0.5 text-sm text-muted-foreground">Total Paid</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <p className="mt-3 text-2xl font-bold font-heading">
            {paymentSummary.totalRemaining}
          </p>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Total Remaining
          </p>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <AlertCircle className="h-5 w-5 text-amber-600" />
          <p className="mt-3 text-2xl font-bold font-heading">
            {paymentSummary.nextDue}
          </p>
          <p className="mt-0.5 text-sm text-amber-800">
            Due {paymentSummary.nextDueDate}
          </p>
        </div>
        <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-5">
          <button className="rounded-lg bg-deep-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-deep-green-600">
            Make Payment
          </button>
        </div>
      </div>

      {/* Active payment plans */}
      <div className="mt-10">
        <h2 className="font-heading text-xl font-bold">
          Active Payment Plans
        </h2>
        <div className="mt-4 space-y-4">
          {activePaymentPlans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold">
                    {plan.property}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.plan}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Monthly</p>
                  <p className="text-lg font-bold">{plan.monthlyAmount}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {plan.paidAmount} of {plan.totalAmount}
                  </span>
                  <span className="font-medium">
                    {plan.monthsPaid}/{plan.totalMonths} months
                  </span>
                </div>
                <Progress value={plan.progress} className="mt-2 h-2" />
              </div>
              <div className="mt-3 flex items-center justify-between rounded-lg bg-amber-50 px-4 py-2">
                <span className="text-sm text-amber-800">
                  Next due: {plan.nextDue}
                </span>
                <button className="text-sm font-semibold text-amber-800 hover:underline">
                  Pay Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment history */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold">Payment History</h2>
          <button className="flex items-center gap-1.5 text-sm font-medium text-deep-green-500 hover:underline">
            <Download className="h-3.5 w-3.5" />
            Export
          </button>
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Property
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Method
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Reference
                  </th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((tx) => {
                  const config = statusConfig[tx.status];
                  const StatusIcon = config.icon;
                  return (
                    <tr
                      key={tx.id}
                      className="border-b border-gray-50 last:border-0"
                    >
                      <td className="whitespace-nowrap px-4 py-3">
                        {tx.date}
                      </td>
                      <td className="px-4 py-3 font-medium">{tx.property}</td>
                      <td className="whitespace-nowrap px-4 py-3 font-medium">
                        {tx.amount}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {tx.method}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`flex items-center gap-1 ${config.className}`}
                        >
                          <StatusIcon className="h-3.5 w-3.5" />
                          {config.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                        {tx.reference}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

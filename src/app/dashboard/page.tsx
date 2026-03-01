import {
  Building2,
  TrendingUp,
  CreditCard,
  Wallet,
  FileText,
  AlertCircle,
  Clock,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

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

const pendingTasks = [
  {
    id: "t1",
    type: "payment" as const,
    priority: "high" as const,
    title: "Installment payment due",
    description: "Victoria Island Luxury Flat — \u20A66,000,000 due Mar 1, 2025",
    action: "Pay Now",
    href: "/dashboard/payments",
  },
  {
    id: "t2",
    type: "document" as const,
    priority: "high" as const,
    title: "Upload proof of address",
    description: "Required for Victoria Island Luxury Flat title processing",
    action: "Upload",
    href: "/dashboard/properties",
  },
  {
    id: "t3",
    type: "management" as const,
    priority: "medium" as const,
    title: "Sign updated tenancy agreement",
    description: "Ikoyi Waterfront Penthouse — management requests your signature",
    action: "Review",
    href: "/dashboard/properties",
  },
  {
    id: "t4",
    type: "document" as const,
    priority: "medium" as const,
    title: "Verify identity document",
    description: "Your NIN slip is pending verification — resubmit a clearer copy",
    action: "Resubmit",
    href: "/dashboard/settings",
  },
  {
    id: "t5",
    type: "management" as const,
    priority: "low" as const,
    title: "Annual property survey scheduled",
    description: "Ikoyi Waterfront Penthouse — survey on Mar 15, 2025. Confirm attendance.",
    action: "Confirm",
    href: "/dashboard/messages",
  },
];

const typeConfig = {
  payment: { icon: CreditCard, color: "text-amber-600 bg-amber-50" },
  document: { icon: FileText, color: "text-blue-600 bg-blue-50" },
  management: { icon: AlertCircle, color: "text-purple-600 bg-purple-50" },
};

const priorityConfig = {
  high: { label: "Urgent", className: "bg-red-50 text-red-700" },
  medium: { label: "Action Needed", className: "bg-amber-50 text-amber-700" },
  low: { label: "Info", className: "bg-gray-100 text-gray-600" },
};

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

      {/* Pending Tasks */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-heading text-xl font-bold">Pending Tasks</h2>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              {pendingTasks.filter((t) => t.priority === "high").length}
            </span>
          </div>
          <span className="text-sm text-muted-foreground">
            {pendingTasks.length} items need your attention
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {pendingTasks.map((task) => {
            const typeInfo = typeConfig[task.type];
            const priorityInfo = priorityConfig[task.priority];
            const TypeIcon = typeInfo.icon;

            return (
              <div
                key={task.id}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-50/50"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${typeInfo.color}`}
                >
                  <TypeIcon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-semibold">
                      {task.title}
                    </p>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${priorityInfo.className}`}
                    >
                      {priorityInfo.label}
                    </span>
                  </div>
                  <p className="mt-0.5 flex items-center gap-1 truncate text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 shrink-0" />
                    {task.description}
                  </p>
                </div>

                <Link
                  href={task.href}
                  className="flex shrink-0 items-center gap-1 rounded-lg bg-deep-green-500 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-deep-green-600"
                >
                  {task.action}
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

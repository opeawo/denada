"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  CreditCard,
  PieChart,
  FileText,
  TrendingUp,
  MessageSquare,
  Settings,
  LogOut,
  User,
} from "lucide-react";

const sidebarLinks = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "My Properties", href: "/dashboard/properties", icon: Building2 },
  { label: "Payment Tracker", href: "/dashboard/payments", icon: CreditCard },
  { label: "My Fractions", href: "/dashboard/fractions", icon: PieChart },
  { label: "Documents", href: "/dashboard/documents", icon: FileText },
  { label: "Valuations", href: "/dashboard/valuations", icon: TrendingUp },
  { label: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-24 flex flex-col" style={{ maxHeight: "calc(100vh - 8rem)" }}>
              <nav className="flex-1 space-y-1 overflow-y-auto">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-deep-green-500 text-white"
                          : "text-muted-foreground hover:bg-gray-100 hover:text-foreground"
                      }`}
                    >
                      <link.icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Profile & Logout */}
              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-3 px-4 py-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-deep-green-50 text-deep-green-500">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">
                      Adeola Johnson
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      adeola@email.com
                    </p>
                  </div>
                </div>
                <button className="mt-1 flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600">
                  <LogOut className="h-4 w-4" />
                  Log out
                </button>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}

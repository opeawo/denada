"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, TrendingUp, Building2, User } from "lucide-react";

const tabs = [
  { label: "Home", href: "/", icon: Home },
  { label: "Browse", href: "/properties", icon: Search },
  { label: "Invest", href: "/fractionalize", icon: TrendingUp },
  { label: "Sell", href: "/sell", icon: Building2 },
  { label: "Account", href: "/dashboard", icon: User },
] as const;

export function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white md:hidden">
      <nav className="mx-auto flex max-w-lg items-center justify-around py-2">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 text-xs font-medium transition-colors ${
                isActive
                  ? "text-deep-green-500"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <tab.icon
                className={`h-5 w-5 ${
                  isActive ? "text-deep-green-500" : "text-gray-400"
                }`}
              />
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

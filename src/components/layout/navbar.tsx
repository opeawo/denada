"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ShieldCheck } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { NAV_LINKS } from "@/lib/constants";
import { CurrencyToggle } from "@/components/shared/currency-toggle";
import { Logo } from "@/components/shared/logo";
import { VerifyAgentDialog } from "@/components/shared/verify-agent-dialog";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [verifyOpen, setVerifyOpen] = useState(false);

  const isHome = pathname === "/";
  const isScrolled = scrollY > 80;
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent"
            : "bg-deep-green-500 shadow-lg"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <Logo size="lg" />

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <CurrencyToggle />
            </div>
            <button
              onClick={() => setVerifyOpen(true)}
              className="hidden items-center gap-1.5 rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white lg:flex"
            >
              <ShieldCheck className="h-4 w-4" />
              Verify Agent
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-md p-2 text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onVerifyAgent={() => {
          setMobileOpen(false);
          setVerifyOpen(true);
        }}
      />
      <VerifyAgentDialog open={verifyOpen} onOpenChange={setVerifyOpen} />
    </>
  );
}

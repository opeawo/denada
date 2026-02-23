"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, MessageCircle } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { NAV_LINKS, WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { CurrencyToggle } from "@/components/shared/currency-toggle";
import { Logo } from "@/components/shared/logo";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-80 bg-deep-green-500 p-0 border-none">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <Logo size="md" href="" />
            <button onClick={onClose} className="text-white/70 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 px-6 py-6">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-white/10 text-gold"
                      : "text-white/90 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/dashboard"
                onClick={onClose}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  pathname === "/dashboard"
                    ? "bg-white/10 text-gold"
                    : "text-white/90 hover:bg-white/5 hover:text-white"
                }`}
              >
                Login / Dashboard
              </Link>
            </div>

            <div className="mt-6 px-4">
              <CurrencyToggle />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-white/10 px-6 py-4 space-y-3">
            <Link
              href="/properties"
              onClick={onClose}
              className="block w-full rounded-lg bg-gold py-3 text-center text-sm font-semibold text-deep-green-500 hover:bg-gold-400"
            >
              Get Started
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp py-3 text-sm font-semibold text-white hover:bg-whatsapp-dark"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

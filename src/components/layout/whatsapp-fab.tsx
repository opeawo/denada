"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

export function WhatsAppFAB() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-20 right-4 z-50 md:bottom-6 md:right-6"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" />
      {/* Button */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg transition-transform hover:scale-110">
        <MessageCircle className="h-6 w-6 text-white" />
      </span>
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-lg group-hover:block">
        Chat with us
      </span>
    </a>
  );
}

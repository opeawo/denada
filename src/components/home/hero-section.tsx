import Link from "next/link";
import { MessageCircle, Shield, CreditCard, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Bonnafide, I'd like to enquire about a property"
  )}`;

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background gradient (placeholder for aerial Lagos image) */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-green-500 via-deep-green-400 to-deep-green-700" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1920&q=80')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-green-500/90 via-deep-green-500/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-16 lg:px-8 lg:pt-32">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Own Premium Nigerian Real Estate{" "}
            <span className="text-gold">— From Anywhere in the World</span>
          </h1>

          <p className="mt-6 text-lg text-white/80 md:text-xl">
            Buy outright, pay in installments, or own a fraction of a highbrow
            property. All online. All trusted.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-3.5 text-base font-semibold text-deep-green-500 transition-colors hover:bg-gold-400"
            >
              Browse Properties
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-whatsapp-dark"
            >
              <MessageCircle className="h-5 w-5" />
              Talk to Us on WhatsApp
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-gold" />
              Digital Title Protection
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="h-4 w-4 text-gold" />
              Pay in NGN, USD, EUR, Crypto
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gold" />
              Lagos &middot; Abuja &middot; PH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

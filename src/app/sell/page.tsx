"use client";

import { useState } from "react";
import {
  Megaphone,
  Users,
  ShieldCheck,
  MessageCircle,
  Upload,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/shared/section-heading";
import { TrustBar } from "@/components/shared/trust-bar";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const tiers = [
  {
    icon: Megaphone,
    title: "Sell-Side Listing",
    description:
      "We list it, market it across our platform and channels, and find qualified buyers for your property.",
    step: "Step 1",
  },
  {
    icon: Users,
    title: "Agent Network Referral",
    description:
      "If it doesn't sell through direct listing, our network of verified agents across Nigeria activates to find buyers.",
    step: "Step 2",
  },
  {
    icon: ShieldCheck,
    title: "Bonnafide Buyback Guarantee",
    description:
      "Last resort: we buy it back at 35% below current market value, renovate, and relist. You always have an exit.",
    step: "Step 3",
  },
];

export default function SellPage() {
  const [formData, setFormData] = useState({
    address: "",
    purchaseDate: "",
    purchasePrice: "",
    currentValuation: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Bonnafide, I'd like to list my property for sale."
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-deep-green-500 pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl font-bold text-white md:text-5xl">
              List Your Property.{" "}
              <span className="text-gold">We&apos;ll Sell It.</span>
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Bonnafide manages the full sales process for properties originally
              listed through us.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Three-tier exit */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Your Three-Tier Exit Strategy"
            subtitle="We guarantee you always have a way out."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.title}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-gold">
                  {tier.step}
                </span>
                <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-green-50 text-deep-green-500">
                  <tier.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">
                  {tier.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility banner */}
      <section className="bg-gold-50 py-6">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="text-sm font-medium text-gold-800">
            Sell-side service is available for properties originally purchased
            through Bonnafide.
          </p>
        </div>
      </section>

      {/* Listing Form */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <SectionHeading
            title="Submit Your Listing Request"
            subtitle="Fill in the details and we'll get back to you within 24 hours."
          />

          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Property Address</label>
                <Input
                  placeholder="e.g., 12 Banana Island Road, Lagos"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">
                    Original Purchase Date
                  </label>
                  <Input
                    type="date"
                    value={formData.purchaseDate}
                    onChange={(e) =>
                      setFormData({ ...formData, purchaseDate: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Purchase Price</label>
                  <Input
                    placeholder="e.g., 285,000,000"
                    value={formData.purchasePrice}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        purchasePrice: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Current Valuation (Optional)
                </label>
                <Input
                  placeholder="Leave blank if unsure — we'll value it for free"
                  value={formData.currentValuation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      currentValuation: e.target.value,
                    })
                  }
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Your Name</label>
                  <Input
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <Input
                    placeholder="+234..."
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Additional Notes
                </label>
                <Textarea
                  placeholder="Any other details about your property..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="mt-1"
                  rows={3}
                />
              </div>

              {/* Upload area */}
              <div className="rounded-lg border-2 border-dashed border-gray-200 p-6 text-center">
                <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                <p className="mt-2 text-sm text-muted-foreground">
                  Upload title documents, purchase agreements (PDF, JPG, PNG)
                </p>
                <button className="mt-2 text-sm font-medium text-deep-green-500 hover:underline">
                  Browse files
                </button>
              </div>

              <button className="w-full rounded-lg bg-gold py-3 text-sm font-semibold text-deep-green-500 hover:bg-gold-400">
                Submit Listing Request
              </button>
            </div>
          </div>

          {/* WhatsApp alternative */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Prefer to talk?
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-whatsapp hover:underline"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with our team on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

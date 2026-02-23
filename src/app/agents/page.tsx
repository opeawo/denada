"use client";

import { useState } from "react";
import {
  BarChart3,
  BadgeCheck,
  Users,
  FileSignature,
  Wrench,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/shared/section-heading";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const benefits = [
  {
    icon: Wrench,
    title: "Listing Tools",
    description: "Upload and manage your listings with our easy-to-use dashboard.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Badge",
    description: "Stand out with a Denada-verified agent badge. Buyers trust verified agents.",
  },
  {
    icon: Users,
    title: "Buyer Network",
    description: "Access our pool of pre-qualified buyers, including diaspora investors.",
  },
  {
    icon: FileSignature,
    title: "Digital Contracts",
    description: "Generate, send, and e-sign contracts directly from your dashboard.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track views, enquiries, and conversion rates for all your listings.",
  },
  {
    icon: ShieldCheck,
    title: "Agent on Record",
    description:
      "10-year omo-onile protection guarantee for all properties listed through you.",
  },
];

export default function AgentsPage() {
  const [form, setForm] = useState({
    name: "",
    agency: "",
    license: "",
    phone: "",
    email: "",
    properties: "",
    notes: "",
  });

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Denada, I'm a real estate agent and I'd like to join your platform."
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-deep-green-500 pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl font-bold text-white md:text-5xl">
              List Premium Properties.{" "}
              <span className="text-gold">Earn More.</span>
            </h1>
            <p className="mt-4 text-lg text-white/80">
              For verified real estate agents and developers in Nigeria. Join
              Denada&apos;s trusted agent network.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Why Join Denada as an Agent?"
            subtitle="Tools, trust, and a network of premium buyers."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-deep-green-50 text-deep-green-500">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-heading text-base font-bold">
                  {b.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent on Record Explainer */}
      <section className="bg-deep-green-500 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <ShieldCheck className="mx-auto h-12 w-12 text-gold" />
          <h2 className="mt-4 font-heading text-2xl font-bold text-white md:text-3xl">
            Agent on Record Protection
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Every property listed through a Denada-verified agent comes with a
            10-year omo-onile protection guarantee. We partner with top Nigerian
            law firms and trust companies to ensure land grabbing never affects
            your clients. Your clients pay an annual fee, and you earn a
            commission for every enrollment.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <SectionHeading
            title="Apply to Join"
            subtitle="Fill in the form below and we'll review your application within 48 hours."
          />

          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <Input
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Agency Name</label>
                  <Input
                    placeholder="Your agency or company"
                    value={form.agency}
                    onChange={(e) =>
                      setForm({ ...form, agency: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Real Estate License Number
                </label>
                <Input
                  placeholder="e.g., LASRERA/2024/XXXX"
                  value={form.license}
                  onChange={(e) =>
                    setForm({ ...form, license: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input
                    placeholder="+234..."
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="you@agency.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Properties You Want to List
                </label>
                <Textarea
                  placeholder="Describe the properties you'd like to list (location, type, price range)..."
                  value={form.properties}
                  onChange={(e) =>
                    setForm({ ...form, properties: e.target.value })
                  }
                  className="mt-1"
                  rows={3}
                />
              </div>

              <button className="w-full rounded-lg bg-gold py-3 text-sm font-semibold text-deep-green-500 hover:bg-gold-400">
                Apply to Join
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-whatsapp hover:underline"
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

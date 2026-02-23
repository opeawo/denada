"use client";

import { useState } from "react";
import { MessageCircle, Shield, Landmark, FileCheck, CheckCircle2, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Property } from "@/types/property";
import { PriceDisplay } from "@/components/shared/price-display";
import { getWhatsAppLink, formatPrice } from "@/lib/format";
import { useCurrency } from "@/providers/currency-provider";

interface PurchasePanelProps {
  property: Property;
}

export function PurchasePanel({ property }: PurchasePanelProps) {
  const { currency } = useCurrency();
  const [depositPercent, setDepositPercent] = useState(
    property.paySmallSmallPlan?.depositPercent || 20
  );
  const [fractionPercent, setFractionPercent] = useState(5);

  const whatsappLink = getWhatsAppLink(property.agent.phone, property.title);

  // Pay Small Small calculations
  const depositAmount = property.price.ngn * (depositPercent / 100);
  const remainingAmount = property.price.ngn - depositAmount;
  const months = property.paySmallSmallPlan?.durationMonths || 24;
  const monthlyAmount = remainingAmount / months;

  // Fractional calculations
  const fractionCost = property.price.ngn * (fractionPercent / 100);
  const annualReturn = property.fractionalDetails?.expectedAnnualReturn || 15;

  const defaultTab = property.investmentModels.includes("outright")
    ? "outright"
    : property.investmentModels.includes("pay-small-small")
    ? "installment"
    : "fractional";

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <Tabs defaultValue={defaultTab}>
        <TabsList className="w-full rounded-t-xl rounded-b-none border-b bg-gray-50 p-0 h-auto">
          {property.investmentModels.includes("outright") && (
            <TabsTrigger
              value="outright"
              className="flex-1 rounded-none rounded-tl-xl py-3 text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:shadow-none"
            >
              Buy Outright
            </TabsTrigger>
          )}
          {property.investmentModels.includes("pay-small-small") && (
            <TabsTrigger
              value="installment"
              className="flex-1 rounded-none py-3 text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:shadow-none"
            >
              Pay Small Small
            </TabsTrigger>
          )}
          {property.investmentModels.includes("fractional") && (
            <TabsTrigger
              value="fractional"
              className="flex-1 rounded-none rounded-tr-xl py-3 text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:shadow-none"
            >
              Fractionalize
            </TabsTrigger>
          )}
        </TabsList>

        {/* Buy Outright */}
        <TabsContent value="outright" className="p-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Total Price</p>
            <PriceDisplay
              price={property.price}
              className="text-3xl font-bold text-deep-green-500 font-heading"
              showSecondary
            />
          </div>
          <button className="mt-6 w-full rounded-lg bg-gold py-3 text-sm font-semibold text-deep-green-500 transition-colors hover:bg-gold-400">
            Proceed to Purchase
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp py-3 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </TabsContent>

        {/* Pay Small Small */}
        <TabsContent value="installment" className="p-6">
          <div className="text-center mb-4">
            <p className="text-sm text-muted-foreground">Total Price</p>
            <PriceDisplay
              price={property.price}
              className="text-2xl font-bold text-foreground font-heading"
            />
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Down payment</span>
                <span className="font-semibold">{depositPercent}%</span>
              </div>
              <Slider
                min={10}
                max={50}
                step={5}
                value={[depositPercent]}
                onValueChange={([v]) => setDepositPercent(v)}
                className="mt-2"
              />
              <p className="mt-1 text-right text-sm font-medium text-deep-green-500">
                {formatPrice(
                  { ngn: depositAmount, usd: depositAmount * 0.000625, eur: depositAmount * 0.00058 },
                  currency
                )}
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly payment</span>
                <span className="font-semibold">
                  {formatPrice(
                    { ngn: monthlyAmount, usd: monthlyAmount * 0.000625, eur: monthlyAmount * 0.00058 },
                    currency
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-semibold">{months} months</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">
                You&apos;ll own this in {months} months
              </p>
              <Progress value={0} className="h-2" />
            </div>
          </div>

          <button className="mt-6 w-full rounded-lg bg-gold py-3 text-sm font-semibold text-deep-green-500 transition-colors hover:bg-gold-400">
            Start My Payment Plan
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp py-3 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </TabsContent>

        {/* Fractionalize */}
        <TabsContent value="fractional" className="p-6">
          <div className="text-center mb-4">
            <p className="text-sm text-muted-foreground">Total Property Value</p>
            <PriceDisplay
              price={property.price}
              className="text-2xl font-bold text-foreground font-heading"
            />
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Your share</span>
                <span className="font-semibold">{fractionPercent}%</span>
              </div>
              <Slider
                min={5}
                max={100}
                step={5}
                value={[fractionPercent]}
                onValueChange={([v]) => setFractionPercent(v)}
                className="mt-2"
              />
            </div>

            <div className="rounded-lg bg-gray-50 p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Your share cost</span>
                <span className="font-semibold text-deep-green-500">
                  {formatPrice(
                    { ngn: fractionCost, usd: fractionCost * 0.000625, eur: fractionCost * 0.00058 },
                    currency
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Projected annual return
                </span>
                <span className="font-semibold text-gold-600">
                  {annualReturn}%
                </span>
              </div>
            </div>

            {property.fractionalDetails && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>
                  {property.fractionalDetails.currentInvestors} others have
                  invested in this property
                </span>
              </div>
            )}
          </div>

          <button className="mt-6 w-full rounded-lg bg-gold py-3 text-sm font-semibold text-deep-green-500 transition-colors hover:bg-gold-400">
            Buy My Fraction
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp py-3 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </TabsContent>
      </Tabs>

      {/* Trust badges */}
      <div className="border-t border-gray-100 p-4 space-y-2.5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Shield className="h-3.5 w-3.5 text-deep-green-500" />
          Title Verified by Law Firm
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Landmark className="h-3.5 w-3.5 text-deep-green-500" />
          Asset under Trust Company custody
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <CheckCircle2 className="h-3.5 w-3.5 text-deep-green-500" />
          Denada Certified Property
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <FileCheck className="h-3.5 w-3.5 text-deep-green-500" />
          Digital agreement ready
        </div>
      </div>
    </div>
  );
}

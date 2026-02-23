"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { LOCATIONS, PROPERTY_TYPES } from "@/lib/constants";

const INVESTMENT_MODES = [
  { value: "outright", label: "Buy Outright" },
  { value: "pay-small-small", label: "Pay Small Small" },
  { value: "fractional", label: "Fractional" },
];

const BEDROOM_OPTIONS = ["1", "2", "3", "4", "5+"];

function FilterContent({
  onApply,
}: {
  onApply?: () => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedLocations = searchParams.getAll("location");
  const selectedTypes = searchParams.getAll("type");
  const selectedModes = searchParams.getAll("mode");
  const selectedBedrooms = searchParams.get("bedrooms") || "";

  const [priceRange, setPriceRange] = useState([0, 1_500_000_000]);

  function updateFilters(key: string, values: string[]) {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    values.forEach((v) => params.append(key, v));
    router.push(`/properties?${params.toString()}`);
    onApply?.();
  }

  function toggleFilter(key: string, value: string) {
    const current = searchParams.getAll(key);
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    updateFilters(key, updated);
  }

  function resetFilters() {
    router.push("/properties");
    onApply?.();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-lg font-bold">Filters</h3>
        <button
          onClick={resetFilters}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Reset All
        </button>
      </div>

      {/* Location */}
      <div>
        <h4 className="mb-3 text-sm font-semibold">Location</h4>
        <div className="space-y-2">
          {LOCATIONS.map((loc) => (
            <label key={loc} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedLocations.includes(loc)}
                onCheckedChange={() => toggleFilter("location", loc)}
              />
              <span className="text-sm">{loc}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <h4 className="mb-3 text-sm font-semibold">Property Type</h4>
        <div className="space-y-2">
          {PROPERTY_TYPES.map((pt) => (
            <label key={pt.value} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedTypes.includes(pt.value)}
                onCheckedChange={() => toggleFilter("type", pt.value)}
              />
              <span className="text-sm">{pt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="mb-3 text-sm font-semibold">Price Range (NGN)</h4>
        <Slider
          min={0}
          max={1_500_000_000}
          step={10_000_000}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mt-2"
        />
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>{"\u20A6"}{(priceRange[0] / 1_000_000).toFixed(0)}M</span>
          <span>{"\u20A6"}{(priceRange[1] / 1_000_000).toFixed(0)}M</span>
        </div>
      </div>

      {/* Investment Mode */}
      <div>
        <h4 className="mb-3 text-sm font-semibold">Payment Mode</h4>
        <div className="space-y-2">
          {INVESTMENT_MODES.map((mode) => (
            <label key={mode.value} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedModes.includes(mode.value)}
                onCheckedChange={() => toggleFilter("mode", mode.value)}
              />
              <span className="text-sm">{mode.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <h4 className="mb-3 text-sm font-semibold">Bedrooms</h4>
        <div className="flex flex-wrap gap-2">
          {BEDROOM_OPTIONS.map((b) => (
            <button
              key={b}
              onClick={() => {
                const params = new URLSearchParams(searchParams.toString());
                if (selectedBedrooms === b) {
                  params.delete("bedrooms");
                } else {
                  params.set("bedrooms", b);
                }
                router.push(`/properties?${params.toString()}`);
              }}
              className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                selectedBedrooms === b
                  ? "border-deep-green-500 bg-deep-green-500 text-white"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PropertyFiltersSidebar() {
  return (
    <aside className="hidden lg:block w-72 shrink-0">
      <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6">
        <FilterContent />
      </div>
    </aside>
  );
}

export function PropertyFiltersMobile() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 overflow-y-auto">
          <div className="py-4">
            <FilterContent />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "roi", label: "Highest ROI" },
];

export function PropertySort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "newest";

  function handleSort(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`/properties?${params.toString()}`);
  }

  return (
    <Select value={currentSort} onValueChange={handleSort}>
      <SelectTrigger className="w-48 bg-white">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

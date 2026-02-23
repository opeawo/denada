import { Shield, Landmark, Smartphone, Globe } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Title Verified" },
  { icon: Landmark, label: "Escrow Protected" },
  { icon: Smartphone, label: "100% Digital" },
  { icon: Globe, label: "Multi-Currency" },
];

export function TrustBar() {
  return (
    <div className="border-y border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-4 md:gap-10">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <item.icon className="h-4 w-4 text-deep-green-500" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

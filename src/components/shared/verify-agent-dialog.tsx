"use client";

import { useState } from "react";
import { UserSearch, ShieldCheck, ShieldX, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Sample verified agent phone numbers
const VERIFIED_AGENTS = [
  "2348000000001",
  "2348000000002",
  "2348000000003",
  "2348000000004",
];

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0") && digits.length === 11) {
    return "234" + digits.slice(1);
  }
  if (digits.startsWith("234")) {
    return digits;
  }
  return digits;
}

interface VerifyAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VerifyAgentDialog({ open, onOpenChange }: VerifyAgentDialogProps) {
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState<"verified" | "unverified" | null>(null);

  function handleVerify() {
    if (!phone.trim()) return;
    const normalized = normalizePhone(phone.trim());
    const isVerified = VERIFIED_AGENTS.includes(normalized);
    setResult(isVerified ? "verified" : "unverified");
  }

  function handleClose(value: boolean) {
    if (!value) {
      setPhone("");
      setResult(null);
    }
    onOpenChange(value);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="items-center text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-deep-green-50">
            <UserSearch className="h-8 w-8 text-deep-green-500" />
          </div>
          <DialogTitle className="mt-2 font-heading text-xl">
            Verify your Sales Agent
          </DialogTitle>
          <DialogDescription>
            Ensure your representative is an{" "}
            <span className="font-semibold text-deep-green-500">
              Official Denada Agent
            </span>{" "}
            by checking their phone number below.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2">
          <label className="text-sm font-medium text-foreground">
            Agent Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setResult(null);
            }}
            placeholder="e.g. 08012345678"
            className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-deep-green-300 focus:ring-1 focus:ring-deep-green-300"
          />
        </div>

        {/* Warning message */}
        <div className="flex items-start gap-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2.5">
          <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
          <p className="text-xs text-amber-800">
            Do not work with an agent that is not verified, even if they claim
            something is wrong with their original phone number. Only trust
            verified Denada agents.
          </p>
        </div>

        {/* Result */}
        {result === "verified" && (
          <div className="flex items-center gap-3 rounded-lg bg-green-50 border border-green-200 px-4 py-3">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <div>
              <p className="text-sm font-medium text-green-800">
                Verified Agent
              </p>
              <p className="text-xs text-green-700">
                This phone number belongs to an official Denada agent. You can
                proceed with confidence.
              </p>
            </div>
          </div>
        )}

        {result === "unverified" && (
          <div className="flex items-center gap-3 rounded-lg bg-red-50 border border-red-200 px-4 py-3">
            <ShieldX className="h-5 w-5 text-red-600" />
            <div>
              <p className="text-sm font-medium text-red-800">
                Not Verified
              </p>
              <p className="text-xs text-red-700">
                This phone number is not registered as an official Denada agent.
                Do not share any personal or financial information.
              </p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={() => handleClose(false)}
            className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleVerify}
            disabled={!phone.trim()}
            className="flex-1 rounded-lg bg-deep-green-500 py-2.5 text-sm font-medium text-white transition-colors hover:bg-deep-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Verify Agent
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

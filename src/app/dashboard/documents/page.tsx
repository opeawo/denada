import {
  FileText,
  Download,
  Eye,
  Shield,
  Clock,
  CheckCircle2,
} from "lucide-react";

const documents = [
  {
    id: "1",
    name: "Certificate of Occupancy — VI Luxury Flat",
    property: "Victoria Island Luxury Flat",
    type: "Certificate of Occupancy",
    status: "verified" as const,
    dateIssued: "Jan 15, 2024",
    fileSize: "2.4 MB",
  },
  {
    id: "2",
    name: "Purchase Agreement — VI Luxury Flat",
    property: "Victoria Island Luxury Flat",
    type: "Purchase Agreement",
    status: "verified" as const,
    dateIssued: "Jan 15, 2024",
    fileSize: "1.8 MB",
  },
  {
    id: "3",
    name: "Payment Schedule — VI Luxury Flat",
    property: "Victoria Island Luxury Flat",
    type: "Payment Schedule",
    status: "verified" as const,
    dateIssued: "Jan 15, 2024",
    fileSize: "0.5 MB",
  },
  {
    id: "4",
    name: "Fractional Ownership Certificate — Ikoyi Penthouse",
    property: "Ikoyi Waterfront Penthouse",
    type: "Ownership Certificate",
    status: "verified" as const,
    dateIssued: "Mar 22, 2024",
    fileSize: "1.2 MB",
  },
  {
    id: "5",
    name: "Deed of Assignment — Ikoyi Penthouse",
    property: "Ikoyi Waterfront Penthouse",
    type: "Deed of Assignment",
    status: "processing" as const,
    dateIssued: "Mar 22, 2024",
    fileSize: "3.1 MB",
  },
];

const statusConfig = {
  verified: {
    icon: CheckCircle2,
    className: "text-green-600 bg-green-50",
    label: "Verified",
  },
  processing: {
    icon: Clock,
    className: "text-amber-600 bg-amber-50",
    label: "Processing",
  },
};

export default function DocumentsPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold md:text-3xl">
        Documents
      </h1>
      <p className="mt-1 text-muted-foreground">
        Access your property titles, agreements, and certificates.
      </p>

      {/* Verification banner */}
      <div className="mt-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
        <Shield className="h-5 w-5 text-green-600" />
        <div>
          <p className="text-sm font-medium text-green-800">
            Blockchain-verified documents
          </p>
          <p className="text-xs text-green-700">
            All verified documents are secured and timestamped for your
            protection.
          </p>
        </div>
      </div>

      {/* Documents list */}
      <div className="mt-6 space-y-3">
        {documents.map((doc) => {
          const config = statusConfig[doc.status];
          const StatusIcon = config.icon;
          return (
            <div
              key={doc.id}
              className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">{doc.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {doc.property} &middot; {doc.dateIssued} &middot;{" "}
                    {doc.fileSize}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${config.className}`}
                >
                  <StatusIcon className="h-3 w-3" />
                  {config.label}
                </span>
                <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium hover:bg-gray-50">
                  <Eye className="h-3 w-3" />
                  View
                </button>
                <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium hover:bg-gray-50">
                  <Download className="h-3 w-3" />
                  Download
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

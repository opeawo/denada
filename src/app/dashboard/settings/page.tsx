import {
  User,
  Bell,
  Shield,
  CreditCard,
  Globe,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold md:text-3xl">Settings</h1>
      <p className="mt-1 text-muted-foreground">
        Manage your account preferences and security.
      </p>

      <div className="mt-6 space-y-6">
        {/* Profile section */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-muted-foreground" />
            <h2 className="font-heading text-lg font-bold">
              Personal Information
            </h2>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Adeola Johnson"
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-deep-green-300 focus:ring-1 focus:ring-deep-green-300"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="adeola@email.com"
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-deep-green-300 focus:ring-1 focus:ring-deep-green-300"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Phone Number
              </label>
              <input
                type="tel"
                defaultValue="+234 801 234 5678"
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-deep-green-300 focus:ring-1 focus:ring-deep-green-300"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Date of Birth
              </label>
              <input
                type="text"
                defaultValue="March 15, 1988"
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-deep-green-300 focus:ring-1 focus:ring-deep-green-300"
              />
            </div>
          </div>
          <button className="mt-4 rounded-lg bg-deep-green-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-deep-green-600">
            Save Changes
          </button>
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <h2 className="font-heading text-lg font-bold">Notifications</h2>
          </div>
          <div className="mt-4 space-y-3">
            {[
              {
                label: "Payment reminders",
                desc: "Get notified before payments are due",
                checked: true,
              },
              {
                label: "Valuation updates",
                desc: "Receive property valuation reports",
                checked: true,
              },
              {
                label: "New property listings",
                desc: "Be the first to know about new investments",
                checked: false,
              },
              {
                label: "Marketing emails",
                desc: "Promotions, tips, and Denada news",
                checked: false,
              },
            ].map((notif) => (
              <div
                key={notif.label}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium">{notif.label}</p>
                  <p className="text-xs text-muted-foreground">{notif.desc}</p>
                </div>
                <button
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    notif.checked ? "bg-deep-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      notif.checked ? "left-[22px]" : "left-0.5"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <h2 className="font-heading text-lg font-bold">Security</h2>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
              <div>
                <p className="text-sm font-medium">Password</p>
                <p className="text-xs text-muted-foreground">
                  Last changed 3 months ago
                </p>
              </div>
              <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium hover:bg-gray-50">
                Change Password
              </button>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
              <div>
                <p className="text-sm font-medium">
                  Two-Factor Authentication
                </p>
                <p className="text-xs text-muted-foreground">
                  Add extra security to your account
                </p>
              </div>
              <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium hover:bg-gray-50">
                Enable 2FA
              </button>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
              <div>
                <p className="text-sm font-medium">KYC Verification</p>
                <p className="text-xs text-green-600">Verified</p>
              </div>
              <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                Complete
              </span>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <h2 className="font-heading text-lg font-bold">Payment Methods</h2>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-12 items-center justify-center rounded bg-gray-100 text-xs font-bold text-muted-foreground">
                  VISA
                </div>
                <div>
                  <p className="text-sm font-medium">Visa ending in 4532</p>
                  <p className="text-xs text-muted-foreground">
                    Expires 08/2027
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-deep-green-50 px-2.5 py-0.5 text-xs font-medium text-deep-green-700">
                Default
              </span>
            </div>
            <button className="w-full rounded-lg border border-dashed border-gray-300 px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-deep-green-300 hover:text-deep-green-500">
              + Add Payment Method
            </button>
          </div>
        </div>

        {/* Preferences */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-muted-foreground" />
            <h2 className="font-heading text-lg font-bold">Preferences</h2>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Currency
              </label>
              <select className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-deep-green-300 focus:ring-1 focus:ring-deep-green-300">
                <option>NGN — Nigerian Naira</option>
                <option>USD — US Dollar</option>
                <option>EUR — Euro</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Language
              </label>
              <select className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-deep-green-300 focus:ring-1 focus:ring-deep-green-300">
                <option>English</option>
              </select>
            </div>
          </div>
        </div>

        {/* Danger zone */}
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h2 className="font-heading text-lg font-bold text-red-800">
            Danger Zone
          </h2>
          <p className="mt-1 text-sm text-red-700">
            Permanently delete your account and all associated data.
          </p>
          <button className="mt-4 rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

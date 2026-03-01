import { Search, Send } from "lucide-react";

const conversations = [
  {
    id: "1",
    name: "Chidi Okafor",
    role: "Property Agent",
    avatar: "CO",
    lastMessage: "The title documents have been verified and are ready for collection.",
    timestamp: "2h ago",
    unread: true,
    property: "Victoria Island Luxury Flat",
  },
  {
    id: "2",
    name: "Amara Nwosu",
    role: "Property Agent",
    avatar: "AN",
    lastMessage: "Your fractional investment certificate has been processed.",
    timestamp: "1d ago",
    unread: false,
    property: "Ikoyi Waterfront Penthouse",
  },
  {
    id: "3",
    name: "Denada Support",
    role: "Support Team",
    avatar: "DS",
    lastMessage: "Welcome to Denada! Feel free to reach out if you need any assistance.",
    timestamp: "3d ago",
    unread: false,
    property: null,
  },
];

const selectedMessages = [
  {
    id: "m1",
    sender: "Chidi Okafor",
    isUser: false,
    message:
      "Good morning! I wanted to update you on your Victoria Island Luxury Flat purchase.",
    timestamp: "10:30 AM",
  },
  {
    id: "m2",
    sender: "You",
    isUser: true,
    message: "Hi Chidi, any updates on the title documents?",
    timestamp: "10:45 AM",
  },
  {
    id: "m3",
    sender: "Chidi Okafor",
    isUser: false,
    message:
      "The title documents have been verified and are ready for collection. You can also download them from the Documents section of your dashboard.",
    timestamp: "11:02 AM",
  },
];

export default function MessagesPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold md:text-3xl">Messages</h1>
      <p className="mt-1 text-muted-foreground">
        Communicate with your agents and Denada support.
      </p>

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="grid lg:grid-cols-[320px_1fr]">
          {/* Conversations list */}
          <div className="border-b border-gray-200 lg:border-b-0 lg:border-r">
            {/* Search */}
            <div className="border-b border-gray-100 p-3">
              <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>
            {/* Conversation items */}
            <div className="max-h-[400px] overflow-y-auto lg:max-h-[500px]">
              {conversations.map((convo, i) => (
                <div
                  key={convo.id}
                  className={`flex cursor-pointer items-start gap-3 px-4 py-3 transition-colors hover:bg-gray-50 ${
                    i === 0 ? "bg-deep-green-50" : ""
                  } ${i < conversations.length - 1 ? "border-b border-gray-50" : ""}`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-deep-green-100 text-sm font-bold text-deep-green-600">
                    {convo.avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{convo.name}</p>
                      <span className="text-xs text-muted-foreground">
                        {convo.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {convo.role}
                      {convo.property && ` \u00b7 ${convo.property}`}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">
                      {convo.lastMessage}
                    </p>
                  </div>
                  {convo.unread && (
                    <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-deep-green-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="flex flex-col">
            {/* Chat header */}
            <div className="border-b border-gray-100 px-4 py-3">
              <p className="text-sm font-medium">Chidi Okafor</p>
              <p className="text-xs text-muted-foreground">
                Property Agent &middot; Victoria Island Luxury Flat
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              {selectedMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl px-4 py-2.5 ${
                      msg.isUser
                        ? "bg-deep-green-500 text-white"
                        : "bg-gray-100 text-foreground"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                    <p
                      className={`mt-1 text-xs ${
                        msg.isUser ? "text-white/60" : "text-muted-foreground"
                      }`}
                    >
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message input */}
            <div className="border-t border-gray-100 p-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-deep-green-300 focus:ring-1 focus:ring-deep-green-300"
                />
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-deep-green-500 text-white transition-colors hover:bg-deep-green-600">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

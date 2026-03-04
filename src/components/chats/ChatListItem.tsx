"use client";

interface ChatListItemProps {
  id: string;
  name: string;
  subject: string;
  lastMessage: string;
  active: boolean;
  onClick: () => void;
}

export default function ChatListItem({
  name,
  subject,
  lastMessage,
  active,
  onClick,
}: ChatListItemProps) {
  return (
    <div
      onClick={onClick}
      className={`p-4 cursor-pointer border-b transition
        ${active ? "bg-blue-100" : "hover:bg-gray-100"}
      `}
    >
      <div className="flex gap-3">

        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-300 shrink-0" />

        {/* Info */}
        <div className="flex-1">
          <p className="font-medium text-gray-800">
            {name}
          </p>

          <p className="text-sm text-gray-500">
            {subject}
          </p>

          <p className="text-xs text-gray-400 truncate">
            {lastMessage}
          </p>
        </div>

      </div>
    </div>
  );
}
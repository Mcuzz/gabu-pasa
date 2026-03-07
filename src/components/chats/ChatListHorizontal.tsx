"use client";

import type { Chat } from "@/types/chat";
import { tutorsMock } from "@/mocks/tutors.mock";

interface ChatIconBarProps {
  chats: Chat[];
  activeChatId: string | null;
  onSelectChat: (id: string) => void;
}

export default function ChatIconBar({
  chats,
  activeChatId,
  onSelectChat,
}: ChatIconBarProps) {
  const currentStudentId = "s1";

  return (
    <div className="flex flex-col gap-3 overflow-y-auto p-3 bg-white border-r h-full">
      {chats.map((chat) => {
        const tutorId = chat.participantIds.find(
          (id) => id !== currentStudentId
        );

        const tutor = tutorsMock.find((t) => t.id === tutorId);
        const name = tutor?.name ?? "Tutor";

        const isActive = activeChatId === chat.id;

        return (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`w-12 h-12 rounded-full flex items-center justify-center
              transition
              ${
                isActive
                  ? "bg-amber-300 text-white ring-2 ring-amber-600"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            title={name}
          >
            {name.charAt(0)}
          </button>
        );
      })}
    </div>
  );
}
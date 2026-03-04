"use client";

import ChatListItem from "./ChatListItem";
import type { Chat } from "@/types/chat";
import { tutorsMock } from "@/mocks/tutors.mock";

interface ChatListProps {
  chats: Chat[];
  activeChatId: string | null;
  onSelectChat: (id: string) => void;
}

export default function ChatList({
  chats,
  activeChatId,
  onSelectChat,
}: ChatListProps) {
  const currentStudentId = "s1"; // luego esto vendrá del auth

  return (
    <div className="flex-1 overflow-y-auto">
      {chats.map((chat) => {
        // Último mensaje
        const lastMessage =
          chat.messages[chat.messages.length - 1]?.content ?? "Sin mensajes";

        // Obtener el tutor (el participante que no es el estudiante)
        const tutorId = chat.participantIds.find(
          (id) => id !== currentStudentId
        );

        const tutor = tutorsMock.find((t) => t.id === tutorId);

        const name = tutor?.name ?? "Tutor desconocido";

        return (
          <ChatListItem
            key={chat.id}
            id={chat.id}
            name={name}
            subject="Sesión activa"
            lastMessage={lastMessage}
            active={activeChatId === chat.id}
            onClick={() => onSelectChat(chat.id)}
          />
        );
      })}
    </div>
  );
}
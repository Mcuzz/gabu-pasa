"use client";

import ChatListItem from "./ChatListItem";
import type { Chat } from "@/types/chat";
import { studentsMock } from "@/mocks/students.mock";

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
  const currentTutorId = "t1"; // luego vendrá del auth

  return (
    <div className="flex-1 overflow-y-auto">
      {chats.map((chat) => {

        // Último mensaje
        const lastMessage =
          chat.messages[chat.messages.length - 1]?.content ?? "Sin mensajes";

        // Obtener el estudiante (el participante que no es el tutor)
        const studentId = chat.participantIds.find(
          (id) => id !== currentTutorId
        );

        const student = studentsMock.find((s) => s.id === studentId);

        const name = student?.name ?? "Estudiante desconocido";

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
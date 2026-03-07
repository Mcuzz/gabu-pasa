"use client";

import { useState } from "react";
import { chatsMock } from "@/mocks/chats.mock";
import ChatListHorizontal from "@/components/chats/ChatListHorizontal";
import ChatWindow from "@/components/chats/ChatWindow";

export default function ChatSection() {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const activeChat = chatsMock.find(chat => chat.id === activeChatId);

  return (
    <div className="flex gap-4 bg-white p-5 rounded-xl shadow h-[420px]">

      {/* lista de chats */}
      <div className="w-20 border-r  overflow-y-auto">
        <ChatListHorizontal
          chats={chatsMock}
          activeChatId={activeChatId}
          onSelectChat={setActiveChatId}
        />
      </div>

      {/* ventana de chat */}
      <section className="flex-1 text-gray-800">
        <ChatWindow
          chat={activeChat}
          currentUserId="student-user-id"
        />
      </section>

    </div>
  );
}
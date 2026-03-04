"use client";

import { useState } from "react";
import { chatsMock } from "@/mocks/chats.mock";
import { messagesMock } from "@/mocks/messages.mock";

import ProfileCard from "@/components/chats/ProfileCard";
import ChatList from "@/components/chats/ChatList";
import ChatWindow from "@/components/chats/ChatWindow";

export default function MessagingStudent() {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const activeChat = chatsMock.find(chat => chat.id === activeChatId);

  return (
    <div className="grid grid-cols-3 gap-6 h-[80vh]">

      {/* SIDEBAR 1/3 */}
      <aside className="col-span-1 bg-white rounded-xl shadow flex flex-col">
        <ProfileCard />

        <ChatList
          chats={chatsMock}
          activeChatId={activeChatId}
          onSelectChat={setActiveChatId}
        />
      </aside>

      {/* CHAT WINDOW 2/3 */}
      <section className="text-gray-800 col-span-2 bg-white rounded-xl shadow">
        <ChatWindow
          chat={activeChat}
          currentUserId="student-user-id"
        />
      </section>

    </div>
  );
}
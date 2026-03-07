"use client";

import { useState } from "react";
import { chatsMock } from "@/mocks/chats.mock";

import ProfileCard from "@/components/chats/ProfileCardTutor";
import ChatList from "@/components/chats/ChatListTutor";
import ChatWindow from "@/components/chats/ChatWindow";

export default function TutorMessaging() {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const activeChat = chatsMock.find(chat => chat.id === activeChatId);

  return (
    <div className="grid grid-cols-3 gap-6 h-[80vh]">

      {/* SIDEBAR */}
      <aside className="col-span-1 bg-white rounded-xl shadow flex flex-col">
        <ProfileCard />

        <ChatList
          chats={chatsMock}
          activeChatId={activeChatId}
          onSelectChat={setActiveChatId}
        />
      </aside>

      {/* CHAT WINDOW */}
      <section className="text-gray-800 col-span-2 bg-white rounded-xl shadow">
        <ChatWindow
          chat={activeChat}
          currentUserId="tutor-user-id"
        />
      </section>

    </div>
  );
}
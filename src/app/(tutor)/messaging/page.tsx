"use client";

import { useState } from "react";
import { chatsMock } from "@/mocks/chats.mock";
import ChatWindow from "@/components/chats/ChatWindow";
import ChatList from "@/components/chats/ChatListTutor";
import ProfileCard from "@/components/chats/ProfileCardTutor";
import PageHeader from "@/components/shared/PageHeader";

export default function TutorMessaging() {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const activeChat = chatsMock.find((chat) => chat.id === activeChatId);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Mensajeria"
        subtitle="Centraliza tus conversaciones con estudiantes para resolver dudas y dar seguimiento a cada sesion."
      />

      <div className="grid h-[80vh] grid-cols-1 gap-6 lg:grid-cols-3">
        <aside className="app-card-strong col-span-1 flex flex-col overflow-hidden">
          <ProfileCard />

          <ChatList
            chats={chatsMock}
            activeChatId={activeChatId}
            onSelectChat={setActiveChatId}
          />
        </aside>

        <section className="app-card-strong col-span-1 overflow-hidden lg:col-span-2">
          <ChatWindow chat={activeChat} currentUserId="tutor-user-id" />
        </section>
      </div>
    </div>
  );
}

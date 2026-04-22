"use client";

import ChatPanel from "@/components/chats/ChatPanel";
import PageHeader from "@/components/shared/PageHeader";

export default function MessagingStudent() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Mensajeria"
        subtitle="Da seguimiento a tus conversaciones con tutores y mantiene organizada la comunicacion academica."
      />

      <ChatPanel />
    </div>
  );
}

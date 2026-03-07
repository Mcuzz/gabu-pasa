"use client";

import { useState, useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import ChatBubble from "@/components/chats/ChatBubble";
import type { Chat } from "@/types/chat";
import type { Message } from "@/types/message";

interface ChatWindowProps {
  chat: Chat | undefined;
  currentUserId: string; // importante para saber quién es "me"
}

export default function ChatWindow({ chat, currentUserId }: ChatWindowProps) {
  const [input, setInput] = useState("");
  const [localMessages, setLocalMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [localMessages, chat]);

  if (!chat) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Selecciona un chat
      </div>
    );
  }

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: crypto.randomUUID(),
      senderId: currentUserId,
      receiverId: "tutor-id-ejemplo", // aquí luego irá el real
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };

    setLocalMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  const allMessages: Message[] = [...chat.messages, ...localMessages];

  const visibleMessages = allMessages.slice(-3);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b font-semibold">Nombre del destinatario</div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col">
        {visibleMessages.map((msg) => (
          <ChatBubble
            key={msg.id}
            message={msg.content}
            sender={msg.senderId === currentUserId ? "me" : "other"}
            timestamp={new Date(msg.timestamp).toLocaleTimeString()}
          />
        ))}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t flex gap-2">
        <input
          className="flex-1 border rounded-lg px-3 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tu mensaje..."
        />

        <Button onClick={handleSend}>Enviar</Button>
      </div>
    </div>
  );
}

// src/mocks/chats.mock.ts
import { Chat } from "@/types/chat";
import { messagesMock } from "./messages.mock";

export const chatsMock: Chat[] = [
  {
    id: "c1",
    participantIds: ["t1", "s1"],
    messages: messagesMock,
  },
  {
    id: "c2",
    participantIds: ["t2", "s1"],
    messages: messagesMock,
  },
  {
    id: "c3",
    participantIds: ["t3", "s1"],
    messages: messagesMock,
  },
  {
    id: "c4",
    participantIds: ["t4", "s1"],
    messages: messagesMock,
  },
  {
    id: "c5",
    participantIds: ["t5", "s1"],
    messages: messagesMock,
  }

];
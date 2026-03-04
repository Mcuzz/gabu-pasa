import { Message } from "@/types/message";

export type Chat = {
  id: string;
  participantIds: string[];
  messages: Message[];
};
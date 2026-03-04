// src/components/chats/ChatBubble.tsx
// Este es un componente de burbuja de chat reutilizable. 
// Acepta un mensaje, un remitente ("me" o "other") y una 
// marca de tiempo.

//debe alinearse segun el sender, 
// pero aun no tiene sroll automatico
// src/components/chats/ChatBubble.tsx

interface ChatBubbleProps {
  message: string;
  sender: "me" | "other";
  timestamp: string;
}

export default function ChatBubble({
  message,
  sender,
  timestamp,
}: ChatBubbleProps) {
  const isMe = sender === "me";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: isMe ? "flex-end" : "flex-start",
        maxWidth: "60%",
        marginBottom: "8px",
        padding: "8px 12px",
        borderRadius: "16px",
        backgroundColor: isMe ? "#DCF8C6" : "#E5E5EA",
      }}
    >
      <p style={{ margin: 0 }}>{message}</p>

      <span
        style={{
          fontSize: "0.7rem",
          color: "#777",
          marginTop: "4px",
          textAlign: isMe ? "right" : "left",
        }}
      >
        {timestamp}
      </span>
    </div>
  );
}
import { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { env } from "../constants";

export default function WebSocketComponent() {
  const { sendMessage, lastMessage, readyState } = useWebSocket(env.VITE_WS, {
    shouldReconnect: () => true, // Auto-reconnect
  });

  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessages((prev) => [...prev, lastMessage.data]);
    }
  }, [lastMessage]);

  return (
    <div>
      <button onClick={() => sendMessage("Hello from React!")}>
        Send Message
      </button>
      <p>Connection Status: {ReadyState[readyState]}</p>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

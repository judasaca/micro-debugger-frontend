import { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

const WS_URL = "ws://localhost:8000/ws";

export default function WebSocketComponent() {
  const { sendMessage, lastMessage, readyState } = useWebSocket(WS_URL, {
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

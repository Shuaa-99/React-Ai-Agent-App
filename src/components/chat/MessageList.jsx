import { useEffect, useRef } from "react";
import Message from "./Message";

const MessageList = ({ messages, isLoading }) => {
  const endOfMessagesRef = useRef(null);

  // scroll to the bottom of the messages whenever messages or loading status change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="space-y-4">
      {messages.map((msg, idx) => (
        <div key={idx}>
          <Message key={idx} content={msg.content} role={msg.role} />
        </div>
      ))}

      {isLoading && (
        <div className="p-3 rounded-xl bg-gray-700 max-w-fit self-start flex gap-1 animate-pulse">
          <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0s]"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>
      )}

      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default MessageList;

import { useState } from "react";
import { getOpenAIClient } from "../../services/openai";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import Sidebar from "./Sidebar";

const ChatInterface = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);
    try {
      const openai = getOpenAIClient();
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [...messages, newMessage],
      });

      const aiMessage = {
        role: "assistant",
        content: response.choices[0].message.content,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setInput("");
    } catch (err) {
      console.error("OpenAI Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 text-white">
      <Sidebar />

      <div className="flex-1 p-6 min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-white tracking-tight">
          AI Chat
        </h2>

        <div className="flex flex-col h-[calc(100vh-100px)]">
          <div className="flex-1 overflow-y-auto p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
            <MessageList messages={messages} isLoading={isLoading} />
          </div>

          <div className="mt-4">
            <MessageInput
              input={input}
              setInput={setInput}
              handleSend={handleSend}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;

import ReactMarkdown from "react-markdown";

const Message = ({ content, role }) => {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`p-3 rounded-lg max-w-[75%] text-white 
        ${isUser ? "bg-blue-600" : "bg-gray-700"}`}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Message;

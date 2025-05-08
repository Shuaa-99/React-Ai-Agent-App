// import { useState } from "react";
// import { MdKeyboardVoice } from "react-icons/md";
// import { RiVoiceAiLine } from "react-icons/ri";

// const MessageInput = ({ handleSend, input, setInput }) => {
//   const [listening, setListening] = useState(false);

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       if (input.trim()) {
//         handleSend(input, setInput);
//       }
//     }
//   };

//   const handleVoiceInput = () => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       alert("Speech Recognition is not supported in this browser.");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-US" ;
//     // recognition.lang = "ar-SA";

//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.onstart = () => setListening(true);

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setInput((prev) => prev + " " + transcript);
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       alert("Error recognizing speech.");
//       setListening(false);
//     };

//     recognition.onend = () => setListening(false);

//     recognition.start();
//   };

//   return (
//     <div className="flex gap-2 items-center mt-4">
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={handleKeyDown}
//         placeholder="Ask me anything..."
//         className="flex-1 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition shadow-md"
//       />

//       <button
//         onClick={handleVoiceInput}
//         disabled={listening}
//         className={`px-4 py-3 rounded-xl text-white transition shadow-md border border-white/10 backdrop-blur-md ${
//           listening ? "bg-white/10" : "bg-white/5 hover:bg-white/10"
//         }`}
//         title="Voice input"
//       >
//         {listening ? <RiVoiceAiLine /> : <MdKeyboardVoice />}
//       </button>

//       <button
//         onClick={() => {
//           if (input.trim()) handleSend(input, setInput);
//         }}
//         disabled={listening}
//         className="px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 transition shadow-md"
//       >
//         Send
//       </button>
//     </div>
//   );
// };

// export default MessageInput;

import { useState } from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVoiceAiLine } from "react-icons/ri";
import { useDarkMode } from "../../context/DarkModeContext";

const MessageInput = ({ handleSend, input, setInput }) => {
  const [listening, setListening] = useState(false);
  const { isDarkMode } = useDarkMode();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) {
        handleSend(input, setInput);
      }
    }
  };

  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    // recognition.lang = "ar-SA";

    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => prev + " " + transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      alert("Error recognizing speech.");
      setListening(false);
    };

    recognition.onend = () => setListening(false);

    recognition.start();
  };

  return (
    <div className="flex gap-2 items-center mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything..."
        className={`flex-1 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500 transition shadow-md ${
          isDarkMode
            ? "bg-white/5 backdrop-blur-md border-white/10 text-white placeholder-gray-400"
            : "bg-white border-gray-300 text-black placeholder-gray-500"
        }`}
      />

      <button
        onClick={handleVoiceInput}
        disabled={listening}
        className={`px-4 py-3 rounded-xl transition shadow-md border ${
          isDarkMode
            ? "bg-white/5 hover:bg-white/10 text-white border-white/10 backdrop-blur-md"
            : "bg-gray-100 hover:bg-gray-200 text-black border-gray-300"
        }`}
        title="Voice input"
      >
        {listening ? (
          <RiVoiceAiLine className="w-5 h-5" />
        ) : (
          <MdKeyboardVoice className="w-5 h-5" />
        )}
      </button>

      <button
        onClick={() => {
          if (input.trim()) handleSend(input, setInput);
        }}
        disabled={listening}
        className="px-4 py-3 rounded-xl bg-purple-500 text-white hover:bg-purple-600 text-white hover:opacity-90 transition shadow-md"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;

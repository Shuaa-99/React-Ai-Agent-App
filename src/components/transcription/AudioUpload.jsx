// import { useRef } from "react";
// import { CloudUpload } from "lucide-react";
// import { useDarkMode } from "../context/DarkModeContext";

// const AudioUpload = ({ onUpload }) => {
//   const { isDarkMode } = useDarkMode();
//   const fileInputRef = useRef(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type.startsWith("audio/")) {
//       onUpload(file);
//     } else {
//       alert("Please upload a valid audio file.");
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file && file.type.startsWith("audio/")) {
//       onUpload(file);
//     } else {
//       alert("Please drop a valid audio file.");
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div
//       className={`relative border-2 ${
//         isDarkMode ? "border-white/50" : "border-gray-500"
//       } 
//         rounded-3xl p-10 text-center backdrop-blur-md ${
//           isDarkMode ? "bg-white/10" : "bg-gray-100"
//         } 
//         text-black transition hover:border-purple-600 cursor-pointer shadow-xl overflow-hidden`}
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}
//       onClick={() => fileInputRef.current.click()}
//     >
//       {/* خلفية منقطة */}
//       <div className="absolute inset-0 bg-dot-pattern bg-[length:20px_20px] opacity-10 pointer-events-none z-0" />

//       {/* المحتوى */}
//       <div className="relative z-10 flex flex-col items-center space-y-4">
//         <CloudUpload className="w-12 h-12 text-purple-600" />
//         <p className="text-lg font-semibold text-black">Upload Audio</p>
//         <p className="text-sm text-black">
//           Drag & drop an audio file here or click to select
//         </p>
//       </div>

//       <input
//         ref={fileInputRef}
//         type="file"
//         accept="audio/*"
//         className="hidden"
//         onChange={handleFileChange}
//       />
//     </div>
//   );
// };

// export default AudioUpload;

import { useRef } from "react";
import { CloudUpload } from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";

const AudioUpload = ({ onUpload }) => {
  const { isDarkMode } = useDarkMode();
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("audio/")) {
      onUpload(file);
    } else {
      alert("Please upload a valid audio file.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("audio/")) {
      onUpload(file);
    } else {
      alert("Please drop a valid audio file.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`relative border-2 ${
        isDarkMode ? "border-white/50" : "border-gray-500"
      } 
        rounded-3xl p-10 text-center backdrop-blur-md ${
          isDarkMode ? "bg-white/10" : "bg-gray-100"
        } 
        text-black transition hover:border-purple-600 cursor-pointer shadow-xl overflow-hidden`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={() => fileInputRef.current.click()}
    >
      {/* خلفية منقطة */}
      <div className="absolute inset-0 bg-dot-pattern bg-[length:20px_20px] opacity-10 pointer-events-none z-0" />

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <CloudUpload className="w-12 h-12 text-purple-600" />
        <p className="text-lg font-semibold text-black">Upload Audio</p>
        <p className="text-sm text-black">
          Drag & drop an audio file here or click to select
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default AudioUpload;

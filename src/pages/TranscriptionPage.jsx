import AudioUpload from "../components/transcription/AudioUpload";
import ProgressIndicator from "../components/transcription/ProgressIndicator";
import TranscriptionViewer from "../components/transcription/TranscriptionViewer";
import useTranscription from "../hooks/useTranscription";
import Sidebar from "../components/chat/Sidebar";
import { useDarkMode } from "../context/DarkModeContext"; // استدعاء السياق

const TranscriptionPage = () => {
  const { transcribe, status, transcription } = useTranscription();
  const { isDarkMode } = useDarkMode(); 

  const handleUpload = async (file) => {
    await transcribe(file);
  };

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white"
          : "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <Sidebar />

     
      <div className="flex-1 p-6">
        <h2
          className={`text-2xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Audio Transcription
        </h2>
        <AudioUpload onUpload={handleUpload} />
        <ProgressIndicator status={status} />
        <TranscriptionViewer transcription={transcription} />
      </div>
    </div>
  );
};

export default TranscriptionPage;

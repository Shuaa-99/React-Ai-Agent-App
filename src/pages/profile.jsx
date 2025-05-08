import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Sidebar from "../components/chat/Sidebar";
import { useDarkMode } from "../context/DarkModeContext";

const Profile = () => {
  const { currentUser } = useAuth();
  const [showApiKey, setShowApiKey] = useState(false);
  const { isDarkMode } = useDarkMode();
  const apiKey = localStorage.getItem("apiKey") || "";

  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    const first = parts[0]?.charAt(0) || "";
    const last = parts[1]?.charAt(0) || "";
    return (first + last).toUpperCase();
  };

  const getFirstName = () => currentUser?.displayName?.split(" ")[0] || "";
  const getLastName = () => currentUser?.displayName?.split(" ")[1] || "";

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white"
          : "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900"
      }`}
    >
      <Sidebar />

      <div className="flex-1 flex items-center justify-center p-10">
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
          {/* Avatar Card */}
          <div
            className={`flex-shrink-0 w-full lg:w-1/3 p-10 rounded-3xl border shadow-xl flex flex-col items-center gap-4 ${
              isDarkMode
                ? "bg-white/10 backdrop-blur-md border-white/20 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            <div className="w-28 h-28 rounded-full bg-purple-600 text-white flex items-center justify-center text-4xl font-bold shadow-md">
              {getInitials(currentUser?.displayName)}
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold">
                {currentUser?.displayName || "User Name"}
              </h2>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-500"}>
                {currentUser?.email}
              </p>
            </div>
          </div>

          {/* Info Card */}
          <div
            className={`flex-grow p-10 rounded-3xl border shadow-xl space-y-6 ${
              isDarkMode
                ? "bg-white/10 backdrop-blur-md border-white/20 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">Account Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className={`block text-sm mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  First Name
                </label>
                <div
                  className={`p-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-gray-100 border-gray-300 text-gray-900"
                  }`}
                >
                  {getFirstName()}
                </div>
              </div>
              <div>
                <label
                  className={`block text-sm mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Last Name
                </label>
                <div
                  className={`p-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-gray-100 border-gray-300 text-gray-900"
                  }`}
                >
                  {getLastName()}
                </div>
              </div>
              <div className="md:col-span-2">
                <label
                  className={`block text-sm mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Email
                </label>
                <div
                  className={`p-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-gray-100 border-gray-300 text-gray-900"
                  }`}
                >
                  {currentUser?.email}
                </div>
              </div>
              <div className="md:col-span-2">
                <label
                  className={`block text-sm mb-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  OpenAI API Key
                </label>
                <div
                  className={`flex items-center gap-3 rounded-lg px-4 py-2 border ${
                    isDarkMode
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-gray-100 border-gray-300 text-gray-900"
                  }`}
                >
                  <input
                    type={showApiKey ? "text" : "password"}
                    value={apiKey}
                    disabled
                    className="bg-transparent w-full outline-none font-mono"
                  />
                  <button
                    onClick={() => setShowApiKey(!showApiKey)}
                    className={`text-sm ${
                      isDarkMode
                        ? "text-purple-300 hover:underline"
                        : "text-purple-600 hover:underline"
                    }`}
                  >
                    {showApiKey ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

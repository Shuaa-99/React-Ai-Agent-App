import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import {
  Bot,
  Mic,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";

const Sidebar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error("Logout error", err);
    }
  };

  return (
    <div
      className={`relative h-screen text-white flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      } bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900`}
    >
      {/* Circular dots background */}

      <div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] 
        [background-size:24px_24px] pointer-events-none z-0"
        aria-hidden="true"
      ></div>

      {/* Sidebar content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <Link to="/HomePage">
            {!collapsed && <span className="text-xl font-bold">ChatAi</span>}
          </Link>
          <button onClick={toggleDarkMode}>
            <span className="text-gray-400 hover:text-white flex items-center gap-2">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </span>
          </button>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-white"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
        {/* Menu */}
        <div className="flex-1 space-y-2 p-2">
          <SidebarItem
            icon={<Bot size={20} />}
            label="Chatbot"
            collapsed={collapsed}
            onClick={() => navigate("/chat")}
          />
          <SidebarItem
            icon={<Mic size={20} />}
            label="Transcription"
            collapsed={collapsed}
            onClick={() => navigate("/TranscriptionPage")}
          />
          <SidebarItem
            icon={<User size={20} />}
            label="Profile"
            collapsed={collapsed}
            onClick={() => navigate("/profile")}
          />
        </div>

        {/* Footer */}
        <div className="p-2 border-t border-gray-700">
          <SidebarItem
            icon={<LogOut size={20} />}
            label="Logout"
            collapsed={collapsed}
            onClick={handleLogout}
            className="text-red-400 hover:text-red-500"
          />
        </div>
      </div>
    </div>
  );
};

// Sidebar item
const SidebarItem = ({ icon, label, onClick, collapsed, className = "" }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 hover:bg-gray-800 p-2 rounded w-full transition-all ${className}`}
  >
    {icon}
    {!collapsed && <span>{label}</span>}
  </button>
);

export default Sidebar;

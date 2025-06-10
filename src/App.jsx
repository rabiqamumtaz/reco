import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import JobRequirements from "./components/JobRequirements";
import Candidates from "./components/Candidates";
import ClientFeedBack from "./components/ClientFeedBack";
import { LogOut, Menu } from "lucide-react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/login";
  };

  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar for large screens */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Sidebar for small screens */}
        {isSidebarOpen && (
          <>
            {/* Overlay with subtle visibility */}
            <div
              className="fixed inset-0 bg-black/10 backdrop-blur-[1px] z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
          </>
        )}

        {/* Main content */}
        <div className="flex-1 lg:ml-64">
          {/* Mobile Menu Button */}
          <div className="lg:hidden p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-between">
            <button onClick={() => setIsSidebarOpen(true)}>
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 focus:outline-none transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Logout</span>
            </button>
          </div>
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/job-requirements" element={<JobRequirements />} />
              <Route path="/candidate" element={<Candidates />} />
              <Route path="/client" element={<ClientFeedBack />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

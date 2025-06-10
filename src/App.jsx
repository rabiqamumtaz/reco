import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import JobRequirements from "./components/JobRequirements";
import Candidates from "./components/Candidates";
import ClientFeedBack from "./components/ClientFeedBack";
import { Menu } from "lucide-react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar for large screens */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Sidebar for small screens */}
        {isSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
            {/* Overlay */}
            <div
              className="flex-1 bg-black bg-opacity-50"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 lg:ml-64">
          {/* Mobile Menu Button */}
          <div className="lg:hidden p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-between">
            <button onClick={() => setIsSidebarOpen(true)}>
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-lg font-semibold">Reco App</h1>
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

import React from "react";
import { Plus, Download, MessageSquare, Eye } from "lucide-react";

const feedbacks = [
  {
    id: 1,
    company: "TechCorp Inc.",
    date: "2024-01-20",
    rating: 4,
    position: "Senior React Developer",
    candidate: "Sarah Johnson",
    status: "Pending Response",
    feedback:
      "Great technical skills and excellent communication during the interview. However, we're looking for someone with more leadership experience for this senior role. Would be perfect for a mid-level position.",
  },
  {
    id: 2,
    company: "InnovaSoft",
    date: "2024-01-18",
    rating: 5,
    position: "Full Stack Engineer",
    candidate: "John Doe",
    status: "Pending Response",
    feedback:
      "Excellent fit for our culture. Strong technical knowledge and adaptability. We’re planning to proceed with the next interview stage.",
  },
  {
    id: 3,
    company: "Startup XYZ",
    date: "2024-01-18",
    rating: 5,
    position: "Full Stack Engineer",
    candidate: "John Doe",
    status: "Pending Response",
    feedback:
      "Excellent fit for our culture. Strong technical knowledge and adaptability. We’re planning to proceed with the next interview stage.",
  },
];

const renderStars = (count) => {
  const filled = "★".repeat(count);
  const empty = "☆".repeat(5 - count);
  return (
    <span className="text-yellow-500 font-medium">
      {filled}
      <span className="text-gray-500 ml-1 text-sm font-normal">
        ({count}/5)
      </span>
    </span>
  );
};

const ClientFeedBack = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 py-6 px-4 sm:px-6 lg:px-8  transition-all duration-300">
      {/* Page Wrapper */}
      <div className="max-w-6xl mx-auto  md:mt-0 ">
        {/* Header */}
        <div className="mb-8 ">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Account Manager Dashboard
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Manage job requirements and candidate submissions efficiently
          </p>
        </div>

        {/* Feedback Panel */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Client Feedback Management
            </h2>
            <p className="text-sm text-gray-600">
              Review and respond to client feedback on submitted candidates
            </p>
          </div>

          {/* Feedback List */}
          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-1">
            {feedbacks.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.company}
                    </h3>
                    <div className="flex items-center mt-1 space-x-2">
                      <span className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-medium">
                        {item.status}
                      </span>
                      {renderStars(item.rating)}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{item.date}</div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
                  <div>
                    <span className="text-gray-500">Job Position</span>
                    <p className="text-gray-900 font-medium">{item.position}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Candidate</span>
                    <p className="text-gray-900 font-medium">
                      {item.candidate}
                    </p>
                  </div>
                </div>

                {/* Feedback Text */}
                <div className="mt-4 bg-gray-50 p-4 rounded-md text-gray-700 text-sm leading-relaxed">
                  {item.feedback}
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    Respond
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm rounded-lg hover:bg-gray-100 transition-colors">
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedBack;

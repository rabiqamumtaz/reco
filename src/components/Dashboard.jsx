import {
  FileText,
  Clock,
  Users,
  MessageSquare,
  Download,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Applications",
      value: "12",
      icon: FileText,
      color: "text-[#78c5d8]",
    },
    {
      title: "Under Review",
      value: "5",
      icon: Clock,
      color: "text-[#f0b484]",
    },
    {
      title: "Interviews",
      value: "3",
      icon: Users,
      color: "text-[#73b386]",
    },
    {
      title: "Responses",
      value: "8",
      icon: MessageSquare,
      color: "text-[#a98fc3]",
    },
  ];

  const recentJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      status: "Pending",
      priority: "High",
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      status: "Approved",
      priority: "Medium",
    },
    {
      id: 3,
      title: "DevOps",
      company: "EnterpriseSolution",
      status: "Closed",
      priority: "Low",
    },
  ];

  const topCandidates = [
    { id: 1, name: "John Smith", experience: "6 years experience", score: 85 },
    {
      id: 2,
      name: "Sarah Johnson",
      experience: "4 years experience",
      score: 78,
    },
    { id: 3, name: "Mike Chen", experience: "5 years experience", score: 88 },
  ];

  const getStatusBadge = (status) => {
    const base =
      "px-3 py-1 rounded-full text-xs font-medium inline-flex items-center";
    return status === "Pending"
      ? `${base} bg-orange-100 text-orange-700`
      : status === "Approved"
      ? `${base} bg-green-100 text-green-700`
      : `${base} bg-gray-100 text-gray-700`;
  };

  const getPriorityBadge = (priority) => {
    const base = "px-3 py-1 rounded-full text-xs font-medium text-white ml-2";
    return priority === "High"
      ? `${base} bg-red-500`
      : priority === "Medium"
      ? `${base} bg-gray-800`
      : `${base} bg-blue-500`;
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 py-6  transition-all duration-300 ">
      <div className="max-w-screen-2xl mx-auto px-4  md:mt-0 sm:px-6  lg:px-8 ">
        {/* Header */}
        <div className="mb-8 ">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Account Manager Dashboard
            </h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Manage job requirements and candidate submissions efficiently
          </p>
        </div>

        {/* Stats Grid */}

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white text-gray-900 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs sm:text-sm opacity-70 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold">
                      {stat.value}
                    </p>
                  </div>
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
          {/* Recent Jobs */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-3 lg:p-6 border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                Recent Job Requirements
              </h2>
              <p className="text-gray-600 text-sm">
                Latest job postings requiring attention
              </p>
            </div>
            <div className="p-3 lg:p-6 space-y-4">
              {recentJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors "
                >
                  <div className="flex-1 mb-3 sm:mb-0">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{job.company}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className={getStatusBadge(job.status)}>
                        {job.status}
                      </span>
                      <span className={getPriorityBadge(job.priority)}>
                        {job.priority}
                      </span>
                    </div>
                  </div>
                  <Link to="/job-requirements">
                    <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 ease-in-out border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md w-40 sm:w-auto text-start">
                      <Eye className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                      View
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Top Candidates */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-3 lg:p-6  border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                Top Candidates
              </h2>
              <p className="text-gray-600 text-sm">
                Highest scoring candidates this week
              </p>
            </div>
            <div className="p-3 lg:p-6 space-y-4">
              {topCandidates.map((c) => (
                <div
                  key={c.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors gap-4 sm:gap-6"
                >
                  <div className="flex-1 mb-3 sm:mb-0">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {c.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{c.experience}</p>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-xs">
                        <div
                          className="bg-gray-800 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${c.score}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {c.score}%
                      </span>
                    </div>
                  </div>
                  <Link to="/candidate">
                    <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 ease-in-out border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md w-40 sm:w-auto text-start">
                      <Eye className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                      Review
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

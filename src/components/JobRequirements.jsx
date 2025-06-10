import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  Download,
  MapPin,
  Calendar,
  Eye,
  Edit,
  Check,
  X,
} from "lucide-react";
import Select from "react-select";
import CustomModal from "./CustomModal";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Button } from "@mui/material";
import { FiBriefcase } from "react-icons/fi";

const JobRequirements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [openModal, setOpenModal] = useState(false);
  const [modalJob, setModalJob] = useState(null);
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [rejectedJob, setRejectedJob] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [screeningModalOpen, setScreeningModalOpen] = useState(false);

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$120,000 - $150,000",
      applicants: 12,
      posted: "2024-01-15",
      status: "Pending",
      priority: "High",
      description:
        "Looking for an experienced React developer with 5+ years of experience in modern web development. Must have expertise in TypeScript, Redux, and testing frameworks.",
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "Remote",
      salary: "$90,000 - $130,000",
      applicants: 8,
      posted: "2024-01-12",
      status: "Approved",
      priority: "Medium",
      description:
        "Join our growing team as a Full Stack Engineer. Experience with Node.js, React, and cloud platforms required.",
    },
    {
      id: 3,
      title: "MERN Stack Engineer",
      company: "StartupXYZ",
      location: "Remote",
      salary: "$90,000 - $130,000",
      applicants: 8,
      posted: "2024-01-12",
      status: "Pending",
      priority: "Medium",
      description:
        "We are hiring a MERN Stack developer with strong skills in MongoDB, Express, React, and Node.js.",
    },
  ]);

  const getStatusBadge = (status) => {
    const base = "px-3 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "Pending":
        return `${base} bg-orange-100 text-orange-700`;
      case "Approved":
        return `${base} bg-green-100 text-green-700`;
      case "Rejected":
        return `${base} bg-red-100 text-red-700`;
      default:
        return `${base} bg-gray-100 text-gray-700`;
    }
  };

  const getPriorityBadge = (priority) => {
    const base = "px-3 py-1 rounded-full text-xs font-medium text-white";
    switch (priority) {
      case "High":
        return `${base} bg-red-500`;
      case "Medium":
        return `${base} bg-gray-800`;
      case "Low":
        return `${base} bg-blue-500`;
      default:
        return `${base} bg-gray-500`;
    }
  };

  const handleApproveJob = (jobId) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: "Approved" } : job
      )
    );
    setOpenModal(false);
  };

  const handleRejectJob = (jobId) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: "Closed" } : job
      )
    );
    setRejectModalOpen(false);
  };

  const candidateProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (123) 456-7890",
    location: "San Francisco, CA",
    experience: "5 years",
    salary: "$120,000",
    availability: "Immediate",
    appliedDate: "2024-06-01",
    resumeScore: 82,
    status: "Pending",
  };

  const renderModalContent = (job) => (
    <div className="p-4 bg-gray-50 rounded-md text-sm">
      <h3 className="text-md font-semibold text-gray-900">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="mt-2 text-gray-700">{job.description}</p>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-gray-50 py-6  transition-all duration-300 ">
      <div className="max-w-screen-2xl mx-auto px-4  md:mt-0  sm:px-6 lg:px-8">
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
              {/* <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                <Plus className="w-4 h-4" />
                <span>New Job</span>
              </button> */}
            </div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Manage job requirements and candidate submissions efficiently
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 sm:p-6 border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Job Requirements Management
                </h2>
                <p className="text-sm text-gray-600">
                  Review and manage all job requirements from clients
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs or clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div className="relative w-full md:w-60 ">
                <Select
                  options={[
                    { value: "all", label: "All Status" },
                    { value: "pending", label: "Pending" },
                    { value: "approved", label: "Approved" },
                    { value: "close", label: "Close" },
                  ]}
                  defaultValue={{ value: "all", label: "All Status" }}
                  onChange={(selected) => setStatusFilter(selected.value)}
                  menuPortalTarget={document.body}
                  styles={{
                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isFocused ? "#f3f4f6" : "white",
                      color: "#1f2937",
                    }),
                    control: (provided) => ({
                      ...provided,
                      borderRadius: "0.5rem",
                      borderColor: "#d1d5db",
                      padding: "2px",
                    }),
                  }}
                />
                <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="p-4 space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-4 sm:p-6 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors relative"
              >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <span className={getStatusBadge(job.status)}>
                        {job.status}
                      </span>
                      <span className={getPriorityBadge(job.priority)}>
                        {job.priority}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 text-gray-600 text-sm">
                      <div className="flex items-center gap-2">
                        <FiBriefcase />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm">
                      <span className="text-lg font-semibold text-green-600">
                        {job.salary}
                      </span>
                      <span className="text-gray-600">
                        {job.applicants} applicants
                      </span>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Actions */}
                  {/* Action Icons in Top-Right Corner */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3">
                    {job.status === "Pending" && (
                      <>
                        <Check
                          onClick={() => {
                            setModalJob(job);
                            setOpenModal(true);
                          }}
                          className="w-5 h-5 text-green-600 cursor-pointer hover:scale-110 transition-transform"
                          title="Approve"
                        />
                        <X
                          onClick={() => {
                            setRejectedJob(job);
                            setRejectModalOpen(true);
                          }}
                          className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition-transform"
                          title="Reject"
                        />
                      </>
                    )}
                    <Eye
                      onClick={() => {
                        setSelectedCandidate(candidateProfile);
                        setProfileModalOpen(true);
                      }}
                      className="w-5 h-5 text-gray-700 cursor-pointer hover:scale-110 transition-transform"
                      title="View Details"
                    />
                    <Edit
                      onClick={() => {
                        // Add edit logic here
                      }}
                      className="w-5 h-5 text-gray-700 cursor-pointer hover:scale-110 transition-transform"
                      title="Edit"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modals */}
        {/* Keep your modals as they are, or apply overflow fixes for mobile */}

        {modalJob && (
          <CustomModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            title="Approve Job Requirement"
            subtitle={`Are you sure you want to approve "${modalJob.title}" at ${modalJob.company}?`}
            icon={<CheckCircleOutlineIcon color="success" />}
            content={renderModalContent(modalJob)}
            actions={
              <>
                <Button onClick={() => setOpenModal(false)} variant="outlined">
                  Cancel
                </Button>
                <Button
                  onClick={() => handleApproveJob(modalJob.id)}
                  variant="contained"
                  color="primary"
                >
                  Approve Job
                </Button>
              </>
            }
          />
        )}
        {rejectedJob && (
          <CustomModal
            open={rejectModalOpen}
            onClose={() => setRejectModalOpen(false)}
            title="Reject Job Requirement"
            subtitle={`Are you sure you want to reject "${rejectedJob.title}" at ${rejectedJob.company}?`}
            icon={<X className="text-red-500 w-5 h-5" />}
            content={
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-md">
                  <h3 className="text-md font-semibold text-gray-900">
                    {rejectedJob.title}
                  </h3>
                  <p className="text-gray-600">{rejectedJob.company}</p>
                  <p className="mt-2 text-sm text-gray-700">
                    {rejectedJob.description}
                  </p>
                </div>
                <div className="p-3 border border-red-200 bg-red-50 text-sm text-red-700 rounded-md flex items-center space-x-2">
                  <X className="w-4 h-4" />
                  <span>
                    This action will close the job requirement and notify the
                    client.
                  </span>
                </div>
              </div>
            }
            actions={
              <>
                <Button
                  onClick={() => setRejectModalOpen(false)}
                  variant="outlined"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => handleRejectJob(rejectedJob.id)}
                  variant="contained"
                  style={{ backgroundColor: "#DC2626", color: "white" }} // Tailwind's red-600
                >
                  Reject Job
                </Button>
              </>
            }
          />
        )}
        {selectedCandidate && (
          <CustomModal
            open={profileModalOpen}
            onClose={() => setProfileModalOpen(false)}
            title="Candidate Profile Review"
            subtitle="Comprehensive candidate information and evaluation"
            icon={<Eye className="w-5 h-5 text-gray-600" />}
            content={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
                {/* Left Section */}
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p>
                    <strong>Name:</strong> {selectedCandidate.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedCandidate.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedCandidate.phone}
                  </p>
                  <p>
                    <strong>Location:</strong> {selectedCandidate.location}
                  </p>

                  <h3 className="font-semibold mt-4 mb-2">
                    Professional Details
                  </h3>
                  <p>
                    <strong>Experience:</strong> {selectedCandidate.experience}
                  </p>
                  <p>
                    <strong>Expected Salary:</strong> {selectedCandidate.salary}
                  </p>
                  <p>
                    <strong>Availability:</strong>{" "}
                    {selectedCandidate.availability}
                  </p>
                  <p>
                    <strong>Applied Date:</strong>{" "}
                    {selectedCandidate.appliedDate}
                  </p>
                </div>

                {/* Right Section */}
                <div>
                  <h3 className="font-semibold mb-2">Skills & Expertise</h3>
                  <p className="mb-2">
                    <strong>Evaluation Scores</strong>
                  </p>
                  <p className="text-xs mb-1 text-gray-600">Resume Score</p>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div
                      className="bg-black h-2 rounded"
                      style={{ width: `${selectedCandidate.resumeScore}%` }}
                    ></div>
                  </div>
                  <p className="mt-4 font-semibold">Current Status</p>
                  <span className="mt-1 inline-block px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                    {selectedCandidate.status}
                  </span>
                </div>
              </div>
            }
            actions={
              <>
                <Button
                  onClick={() => setProfileModalOpen(false)}
                  variant="outlined"
                >
                  Close
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Edit />}
                  onClick={() => {
                    setProfileModalOpen(false); // Close profile modal
                    setScreeningModalOpen(true); // Open screening form modal
                  }}
                >
                  Start Screening
                </Button>
              </>
            }
          />
        )}
        <CustomModal
          open={screeningModalOpen}
          onClose={() => setScreeningModalOpen(false)}
          title="Screening Evaluation Form"
          subtitle="Complete the comprehensive screening evaluation for the candidate"
          content={
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full border p-2 rounded" defaultValue="">
                  <option value="" disabled>
                    Rate technical skills
                  </option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select className="w-full border p-2 rounded" defaultValue="">
                  <option value="" disabled>
                    Rate communication skills
                  </option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select className="w-full border p-2 rounded" defaultValue="">
                  <option value="" disabled>
                    Rate experience level
                  </option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select className="w-full border p-2 rounded" defaultValue="">
                  <option value="" disabled>
                    Rate cultural fit
                  </option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <select className="w-full border p-2 rounded" defaultValue="">
                <option value="" disabled>
                  Select overall recommendation
                </option>
                <option value="strong_hire">Strong Hire</option>
                <option value="hire">Hire</option>
                <option value="no_hire">No Hire</option>
              </select>

              <textarea
                className="w-full border p-2 rounded"
                rows="4"
                placeholder="Provide detailed feedback about the candidate's performance, strengths, areas for improvement, and any specific observations…"
              />
            </form>
          }
          actions={
            <>
              <Button
                onClick={() => setScreeningModalOpen(false)}
                variant="outlined"
              >
                Save as Draft
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  // You can add form submission logic here
                  alert("Screening submitted");
                  setScreeningModalOpen(false);
                }}
              >
                Submit Screening
              </Button>
            </>
          }
        />
      </div>
    </div>
  );
};

export default JobRequirements;

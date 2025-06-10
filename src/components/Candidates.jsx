import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Eye,
  Send,
  Plus,
  Download,
  Edit,
  Check,
} from "lucide-react";
import CustomModal from "./CustomModal";
import { Button } from "@mui/material";

const Candidates = () => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [screeningModalOpen, setScreeningModalOpen] = useState(false);
  const [submitModalOpen, setSubmitModalOpen] = useState(false);
  const [candidateToSubmit, setCandidateToSubmit] = useState(null);

  const candidates = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      appliedDate: "2024-01-16",
      status: "Review",
      statusColor: "bg-blue-100 text-blue-700",
      job: "Senior React Developer",
      experience: "6 years",
      expectedSalary: "$140,000",
      availability: "2 weeks notice",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      resumeScore: 85,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 987-6543",
      location: "Remote",
      appliedDate: "2024-01-17",
      status: "Interviewed",
      statusColor: "bg-purple-100 text-purple-700",
      job: "Senior React Developer",
      experience: "4 years",
      expectedSalary: "$125,000",
      availability: "Immediate",
      skills: ["React", "JavaScript", "Python", "MongoDB"],
      resumeScore: 78,
    },
  ];

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

  const ProgressBar = ({ score }) => (
    <div className="flex items-center space-x-3">
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div
          className="bg-gray-800 h-2 rounded-full transition-all duration-300"
          style={{ width: `${score}%` }}
        ></div>
      </div>
      <span className="text-sm font-medium text-gray-700 min-w-[3rem]">
        {score}%
      </span>
    </div>
  );

  const SkillBadge = ({ skill }) => (
    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
      {skill}
    </span>
  );

  return (
    <div className="min-h-screen w-full bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-screen-2xl mx-auto  md:mt-0 ">
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

        {/* Sub Header */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Candidate Submissions Review Panel
            </h1>
            <p className="text-sm text-gray-600">
              Review and manage candidate submissions for active job
              requirements
            </p>
          </div>

          {/* Candidate Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <h2 className="text-xl font-semibold text-gray-900">
                      {candidate.name}
                    </h2>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${candidate.statusColor}`}
                    >
                      {candidate.status}
                    </span>
                    <p className="text-sm text-gray-500 mt-1">
                      Applied {candidate.appliedDate}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6 text-sm text-gray-700">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4" />
                    <span>{candidate.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4" />
                    <span>{candidate.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4" />
                    <span>{candidate.location}</span>
                  </div>
                </div>

                {/* Job Info */}
                <div className="space-y-2 mb-6 text-sm text-gray-700">
                  <p>
                    <strong>Job:</strong> {candidate.job}
                  </p>
                  <p>
                    <strong>Experience:</strong> {candidate.experience}
                  </p>
                  <p>
                    <strong>Expected Salary:</strong> {candidate.expectedSalary}
                  </p>
                  <p>
                    <strong>Availability:</strong> {candidate.availability}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>

                {/* Scores */}
                <div className="mb-6">
                  <ProgressBar score={candidate.resumeScore} />
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setSelectedCandidate(candidateProfile);
                      setProfileModalOpen(true);
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Review</span>
                  </button>
                  <button
                    onClick={() => {
                      setCandidateToSubmit(candidate);
                      setSubmitModalOpen(true);
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit to Client</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modals */}
        {candidateToSubmit && (
          <CustomModal
            open={submitModalOpen}
            onClose={() => setSubmitModalOpen(false)}
            title="Submit Final Candidate to Client"
            subtitle={`Confirm submission of ${candidateToSubmit.name} as the recommended candidate`}
            icon={<Send className="text-blue-600 w-5 h-5" />}
            content={
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-md border border-blue-100 text-sm text-gray-800">
                  <p>
                    <strong>Name:</strong> {candidateToSubmit.name}
                  </p>
                  <p>
                    <strong>Experience:</strong> {candidateToSubmit.experience}
                  </p>
                  <p>
                    <strong>Salary:</strong> {candidateToSubmit.expectedSalary}
                  </p>
                  <p>
                    <strong>Resume Score:</strong>{" "}
                    {candidateToSubmit.resumeScore}%
                  </p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-md text-sm text-green-700 flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5" />
                  <span>
                    <strong>Ready for submission.</strong>
                    <br />
                    The client will be notified immediately.
                  </span>
                </div>
              </div>
            }
            actions={
              <>
                <Button
                  variant="outlined"
                  onClick={() => setSubmitModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    alert(`${candidateToSubmit.name} submitted.`);
                    setSubmitModalOpen(false);
                  }}
                >
                  Submit to Client
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
                <div>
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
                <div>
                  <p>
                    <strong>Resume Score</strong>
                  </p>
                  <div className="w-full bg-gray-200 rounded h-2 mb-4">
                    <div
                      className="bg-black h-2 rounded"
                      style={{ width: `${selectedCandidate.resumeScore}%` }}
                    ></div>
                  </div>
                  <p>
                    <strong>Status:</strong> {selectedCandidate.status}
                  </p>
                </div>
              </div>
            }
            actions={
              <>
                <Button
                  variant="outlined"
                  onClick={() => setProfileModalOpen(false)}
                >
                  Close
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Edit />}
                  onClick={() => {
                    setProfileModalOpen(false);
                    setScreeningModalOpen(true);
                  }}
                >
                  Start Screening
                </Button>
              </>
            }
          />
        )}
      </div>
    </div>
  );
};

export default Candidates;

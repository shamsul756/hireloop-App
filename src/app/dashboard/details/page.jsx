import React from "react";
import { Avatar, Button, Chip, Menu } from "@heroui/react";

import { BoltIcon, Globe2 } from "lucide-react";

// --- DUMMY DATA ---
const recentApplications = [
  {
    id: 1,
    name: "Julianne Moore",
    avatar: "", // Empty strings will fallback to initials or a placeholder circle
    role: "Senior Product Designer",
    dateApplied: "Oct 24, 2023",
    experience: "6 years",
    status: "Interviewing",
    color: "success",
  },
  {
    id: 2,
    name: "Robert Downey",
    avatar: "",
    role: "Backend Engineer",
    dateApplied: "Oct 23, 2023",
    experience: "4 years",
    status: "New",
    color: "default",
  },
  {
    id: 3,
    name: "Emma Stone",
    avatar: "",
    role: "Marketing Lead",
    dateApplied: "Oct 22, 2023",
    experience: "8 years",
    status: "Reviewing",
    color: "warning",
  },
  {
    id: 4,
    name: "Chris Pratt",
    avatar: "",
    role: "Product Manager",
    dateApplied: "Oct 21, 2023",
    experience: "5 years",
    status: "Rejected",
    color: "danger",
  },
];

const topCompanies = [
  {
    id: 1,
    name: "Google Inc.",
    industry: "Technology • Mountain View",
    activeJobs: 24,
  },
  {
    id: 2,
    name: "Meta Platforms",
    industry: "Social Media • Menlo Park",
    activeJobs: 18,
  },
  {
    id: 3,
    name: "Stripe",
    industry: "Fintech • San Francisco",
    activeJobs: 12,
  },
  {
    id: 4,
    name: "Tesla",
    industry: "Automotive • Austin",
    activeJobs: 31,
  },
];

// --- MAIN COMPONENTS ---
export default function RecruiterDashboardDetails() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-zinc-100 p-6 flex flex-col gap-6 font-sans">
      
      {/* Grid Container matching image_fe7a7e.png layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        
        {/* LEFT COLUMN: Recent Applications Table */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold tracking-tight">Recent Applications</h2>
            <Button variant="light" size="sm" className="text-zinc-400 hover:text-white">
              View all
            </Button>
          </div>

          <div className="bg-[#121212] border border-[#232323] rounded-xl overflow-hidden p-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#232323] text-zinc-400 text-xs font-medium tracking-wider">
                    <th className="pb-4 pt-2 px-4">Candidate Name</th>
                    <th className="pb-4 pt-2 px-4">Role</th>
                    <th className="pb-4 pt-2 px-4">Date Applied</th>
                    <th className="pb-4 pt-2 px-4">Experience</th>
                    <th className="pb-4 pt-2 px-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#18181b]/30">
                  {recentApplications.map((candidate) => (
                    <tr key={candidate.id} className="text-sm hover:bg-[#1c1c1c]/50 transition-colors">
                      <td className="py-4 px-4 flex items-center gap-3 font-semibold text-zinc-200">
                        <Avatar 
                          name={candidate.name} 
                          size="sm" 
                          className="bg-[#2a2a2a] text-zinc-400 size-8"
                        />
                        {candidate.name}
                      </td>
                      <td className="py-4 px-4 text-zinc-400">{candidate.role}</td>
                      <td className="py-4 px-4 text-zinc-400">{candidate.dateApplied}</td>
                      <td className="py-4 px-4 text-zinc-400">{candidate.experience}</td>
                      <td className="py-4 px-4 text-center">
                        <Chip
                          size="sm"
                          variant="flat"
                          color={candidate.color}
                          className="capitalize px-2 font-medium"
                        >
                          {candidate.status}
                        </Chip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: My Top Companies Widget */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold tracking-tight">My Top Companies</h2>
            <Button variant="light" size="sm" className="text-zinc-400 hover:text-white">
              View all
            </Button>
          </div>

          <div className="bg-[#121212] border border-[#232323] rounded-xl p-5 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              {topCompanies.map((company) => (
                <div 
                  key={company.id} 
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-[#1c1c1c]/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {/* Placeholder Brand Icon Container */}
                    <div className="bg-[#232323] text-zinc-400 p-2.5 rounded-lg flex items-center justify-center">
                      {company.name === "Tesla" ? (
                        <BoltIcon className="size-5" />
                      ) : (
                        <Globe2 className="size-5" />
                      )}
                    </div>
                    
                    {/* Brand Meta Data */}
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200">{company.name}</h4>
                      <p className="text-xs text-zinc-500 font-medium mt-0.5">{company.industry}</p>
                    </div>
                  </div>

                  {/* Job Counts Indicator */}
                  <div className="text-right">
                    <span className="text-sm font-bold text-zinc-200 block">{company.activeJobs}</span>
                    <span className="text-[10px] text-zinc-500 font-semibold tracking-wider uppercase block">
                      Active Jobs
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Panel Button */}
            <Button 
              fullWidth 
              variant="bordered" 
              className="border-[#232323] text-zinc-300 hover:bg-[#232323] hover:text-white font-medium text-xs rounded-xl py-5"
            >
              View All Companies
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
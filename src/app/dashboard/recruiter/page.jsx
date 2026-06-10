"use client"
import { useSession } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import { Bolt, Briefcase, CircleCheck, Users } from "lucide-react";


// Reusable individual Stat Card component
function StatCard({ icon: Icon, title, value }) {
  return (
    <Card className="bg-[#121212] border border-[#232323] text-white p-6 rounded-xl flex flex-col gap-4 w-full sm:w-[240px]">
      {/* Icon Wrapper */}
      <div className="bg-[#232323] text-zinc-400 p-2 rounded-lg w-fit flex items-center justify-center">
        <Icon className="size-5" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <p className="text-zinc-400 text-xs font-medium tracking-wide uppercase">
          {title}
        </p>
        <h3 className="text-2xl font-bold text-zinc-100">
          {value}
        </h3>
      </div>
    </Card>
  );
}

// Main Recruiter Stats Grid
export default function RecruiterHomePage() {
  const statsData = [
    {
      id: "total-posts",
      title: "Total Job Posts",
      value: "48",
      icon: Briefcase, // Gravity icon for documents/jobs
    },
    {
      id: "total-applicants",
      title: "Total Applicants",
      value: "1,284",
      icon: Users, // Gravity icon for crowds/applicants
    },
    {
      id: "active-jobs",
      title: "Active Jobs",
      value: "18",
      icon: Bolt, // Gravity icon for active/lightning
    },
    {
      id: "jobs-closed",
      title: "Jobs Closed",
      value: "32",
      icon: CircleCheck, // Gravity icon for completed/closed
    },
  ];
  
  const {data: session, isPending} = useSession();
  if(isPending){
    return  <div>data is loading...</div>
   
  }
  const user = session?.user;

  return (
    <div>
        <h2 className="text-4xl font-bold px-4 py-4">welcome Back👋 <span className="text-3xl text-cyan-500">{user?.name}</span></h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[#0a0a0a] rounded-2xl w-full">
      {statsData.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
    </div>
  );
}
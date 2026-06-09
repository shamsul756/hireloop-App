"use client";


import { motion } from "motion/react";
import {
  Search,
  TrendingUp,
  Building2,
  Bookmark,
  MousePointerClick,
  FileText,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Card, Chip, } from "@heroui/react";

const features = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: Search,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: TrendingUp,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: Building2,
  },
  {
    title: "Saved Jobs",
    description: "Manage applications and favorites from your dashboard.",
    icon: Bookmark,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process.",
    icon: MousePointerClick,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: FileText,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: Sparkles,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: ArrowUpRight,
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-10 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [40, -40, 40],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-20 h-[300px] w-[300px] rounded-full bg-pink-500/15 blur-[120px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <Chip
            variant="bordered"
            className="border-blue-500/40 bg-blue-500/10 px-4 text-xs text-blue-400"
          >
            FEATURES JOB
          </Chip>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Everything you need
            <br />
            to succeed
          </h2>

          <div className="mt-6 h-1 w-12 rounded-full bg-pink-500" />
        </div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                shadow="none"
                className="
                  group
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-pink-500/40
                  hover:bg-white/[0.06]
                  hover:-translate-y-1
                "
              >
                <Card className="flex flex-row gap-4 p-5">
                  <div
                    className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-xl
                      border border-pink-500/20
                      bg-pink-500/10
                    "
                  >
                    <Icon className="h-5 w-5 text-pink-400" />
                  </div>

                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
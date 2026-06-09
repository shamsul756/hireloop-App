"use client";

import React from "react";
import { Button, Chip } from "@heroui/react";
import { FiSearch, FiMapPin, FiBriefcase } from "react-icons/fi";

export default function HeroBanner() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center bg-[#0B0B0C] text-white px-4 py-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm mb-8">
          <FiBriefcase size={14} className="text-amber-500" />

          <span className="text-xs font-medium tracking-wider text-zinc-400">
            <strong className="text-white font-semibold">50,000+</strong>{" "}
            NEW JOBS THIS MONTH
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-3xl bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-2 md:p-3 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center gap-2 md:gap-0">
          {/* Job Input */}
          <div className="w-full flex items-center px-3 relative md:border-r md:border-zinc-800">
            <FiSearch
              size={18}
              className="absolute left-4 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none"
            />
          </div>

          {/* Location Input */}
          <div className="w-full flex items-center px-3 relative">
            <FiMapPin
              size={18}
              className="absolute left-4 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <Button
            isIconOnly
            aria-label="Search"
            size="lg"
            className="w-full md:w-14 h-12 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 shrink-0"
          >
            <FiSearch size={20} />
          </Button>
        </div>

        {/* Trending Positions */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <span className="text-sm text-zinc-500 mr-1">
            Trending Positions
          </span>

          <Chip
            variant="bordered"
            className="border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-700 cursor-pointer transition-colors px-3 py-4 text-sm"
          >
            Product Designer
          </Chip>

          <Chip
            variant="bordered"
            className="border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-700 cursor-pointer transition-colors px-3 py-4 text-sm"
          >
            AI Engineer
          </Chip>

          <Chip
            variant="bordered"
            className="border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-700 cursor-pointer transition-colors px-3 py-4 text-sm"
          >
            DevOps Engineer
          </Chip>
        </div>
      </div>
    </section>
  );
}
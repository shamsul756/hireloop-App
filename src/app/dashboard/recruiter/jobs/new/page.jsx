"use client";

import React, { useState } from "react";
import { Xmark, Calendar } from "@gravity-ui/icons";
import { FaLocationPin } from "react-icons/fa6";
import { Button, Card, CardHeader, Input, Label, ListBox, Select, Switch, TextArea } from "@heroui/react";


export default function NewJobsPage() {
  const [isRemote, setIsRemote] = useState(false);

  const companyMeta = {
    name: "Acme Corp",
    isApproved: true,
    plan: "Growth",
    currentActiveJobs: 4,
    maxJobsLimit: 10,
  };

  const isLimitReached = companyMeta.currentActiveJobs >= companyMeta.maxJobsLimit;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyMeta.isApproved || isLimitReached) return;
    console.log("Job submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 p-4 sm:p-8 flex items-center justify-center font-sans">
      <Card className="w-full max-w-3xl bg-[#121212] border border-[#232323] shadow-2xl rounded-xl overflow-hidden">

        {/* Header */}
        <CardHeader className="p-6 border-b border-[#232323] flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">Post a New Job</h1>
            <p className="text-xs text-zinc-400 mt-1">
              Fill out the details below to distribute your job opening across the HireLoop network.
            </p>
          </div>
          <Button isIconOnly variant="light" size="sm" className="text-zinc-400 hover:text-white">
            <Xmark className="size-5" />
          </Button>
        </CardHeader>

        <Card className="p-0">
          {/* Plan Guard Banner */}
          <div className="mx-6 mt-6 p-3.5 bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                Posting as: <strong className="text-white">{companyMeta.name}</strong>{" "}
                ({companyMeta.plan} Plan)
              </span>
            </div>
            <span className="text-zinc-400">
              Usage:{" "}
              <strong className="text-zinc-200">
                {companyMeta.currentActiveJobs}/{companyMeta.maxJobsLimit}
              </strong>{" "}
              active jobs
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-8">

            {/* SECTION 1: JOB DETAILS */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider border-b border-[#232323]/50 pb-1">
                1. Job Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Job Title"
                  placeholder="e.g. Senior Frontend Engineer"
                  labelPlacement="outside"
                  variant="bordered"
                  classNames={{ inputWrapper: "bg-[#1a1a1a] border-[#2d2d2d]" }}
                  isRequired
                />

                {/* Job Category */}
                <Select className="w-full" placeholder="Select a category">
                  <Label className="text-sm text-zinc-300 mb-1 block">Job Category</Label>
                  <Select.Trigger className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg px-3 py-2 text-sm text-zinc-100 w-full flex justify-between items-center">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="tech" textValue="Technology / Engineering">Technology / Engineering<ListBox.ItemIndicator /></ListBox.Item>
                      <ListBox.Item id="design" textValue="Design / Creative">Design / Creative<ListBox.ItemIndicator /></ListBox.Item>
                      <ListBox.Item id="marketing" textValue="Marketing / Growth">Marketing / Growth<ListBox.ItemIndicator /></ListBox.Item>
                      <ListBox.Item id="product" textValue="Product Management">Product Management<ListBox.ItemIndicator /></ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Job Type */}
                <Select className="w-full" placeholder="Select workspace model">
                  <Label className="text-sm text-zinc-300 mb-1 block">Job Type</Label>
                  <Select.Trigger className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg px-3 py-2 text-sm text-zinc-100 w-full flex justify-between items-center">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="full-time" textValue="Full-time">Full-time<ListBox.ItemIndicator /></ListBox.Item>
                      <ListBox.Item id="part-time" textValue="Part-time">Part-time<ListBox.ItemIndicator /></ListBox.Item>
                      <ListBox.Item id="remote" textValue="Remote">Remote<ListBox.ItemIndicator /></ListBox.Item>
                      <ListBox.Item id="contract" textValue="Contract">Contract<ListBox.ItemIndicator /></ListBox.Item>
                      <ListBox.Item id="internship" textValue="Internship">Internship<ListBox.ItemIndicator /></ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>

                <Input
                  label="Application Deadline"
                  type="date"
                  labelPlacement="outside"
                  variant="bordered"
                  endContent={<Calendar className="text-zinc-500 size-4" />}
                  classNames={{ inputWrapper: "bg-[#1a1a1a] border-[#2d2d2d]" }}
                  isRequired
                />
              </div>

              {/* Salary Row */}
              <div className="grid grid-cols-3 gap-4 items-end">
                {/* Currency */}
                <Select className="w-full" defaultSelectedKey="usd">
                  <Label className="text-sm text-zinc-300 mb-1 block">Currency</Label>
                  <Select.Trigger className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg px-3 py-2 text-sm text-zinc-100 w-full flex justify-between items-center">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="usd" textValue="USD ($)">USD ($)<ListBox.ItemIndicator /></ListBox.Item>
                      <ListBox.Item id="eur" textValue="EUR (€)">EUR (€)<ListBox.ItemIndicator /></ListBox.Item>
                      <ListBox.Item id="gbp" textValue="GBP (£)">GBP (£)<ListBox.ItemIndicator /></ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>

                <Input
                  label="Min Salary"
                  placeholder="80,000"
                  type="number"
                  labelPlacement="outside"
                  variant="bordered"
                  classNames={{ inputWrapper: "bg-[#1a1a1a] border-[#2d2d2d]" }}
                />
                <Input
                  label="Max Salary"
                  placeholder="120,000"
                  type="number"
                  labelPlacement="outside"
                  variant="bordered"
                  classNames={{ inputWrapper: "bg-[#1a1a1a] border-[#2d2d2d]" }}
                />
              </div>

              {/* Location / Remote Block */}
              <div className="p-4 bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-zinc-200">Remote Position</span>
                  <span className="text-xs text-zinc-500">
                    Is this workspace completely distributed globally?
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Switch
                    isSelected={isRemote}
                    onValueChange={setIsRemote}
                    color="default"
                  />
                  {!isRemote && (
                    <Input
                      placeholder="City, Country"
                      variant="bordered"
                      size="sm"
                      startContent={<FaLocationPin className="text-zinc-500 size-4 mr-1" />}
                      classNames={{ inputWrapper: "bg-[#121212] border-[#2d2d2d] w-[220px]" }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* SECTION 2: PROFILE & ROLE CRITERIA */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider border-b border-[#232323]/50 pb-1">
                2. Profile & Role Criteria
              </h3>
              <TextArea
                label="Responsibilities"
                labelPlacement="outside"
                placeholder="Outline day-to-day duties, operational structure, and team benchmarks..."
                variant="bordered"
                minRows={4}
                classNames={{ inputWrapper: "bg-[#1a1a1a] border-[#2d2d2d]" }}
                isRequired
              />
              <TextArea
                label="Requirements"
                labelPlacement="outside"
                placeholder="List professional degrees, required tool stacks, skill credentials, or years of practice..."
                variant="bordered"
                minRows={4}
                classNames={{ inputWrapper: "bg-[#1a1a1a] border-[#2d2d2d]" }}
                isRequired
              />
              <TextArea
                label="Benefits (Optional)"
                labelPlacement="outside"
                placeholder="Medical health premiums, stock equities, annual equipment budgets, wellness allowances..."
                variant="bordered"
                minRows={3}
                classNames={{ inputWrapper: "bg-[#1a1a1a] border-[#2d2d2d]" }}
              />
            </div>

            {/* Footer Actions */}
            <div className="pt-4 border-t border-[#232323] flex justify-end gap-3">
              <Button
                type="button"
                variant="bordered"
                className="border-[#2d2d2d] text-zinc-300 hover:bg-[#1a1a1a]"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                isDisabled={!companyMeta.isApproved || isLimitReached}
                className={`font-semibold px-6 ${
                  isLimitReached
                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                    : "bg-white text-black hover:bg-zinc-200"
                }`}
              >
                {isLimitReached ? "Active Limit Reached" : "Publish Active Job"}
              </Button>
            </div>

          </form>
        </Card>
        
      </Card>
    </div>
  );
}
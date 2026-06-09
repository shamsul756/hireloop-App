"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#111827]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left - Logo */}
      <div className="flex items-center">
<Image src={"/images/logo.png"} alt="hire-loop logo" width={150} height={150}/>
  
</div>

        {/* Center - Desktop Menu */}
        <ul className="hidden items-center gap-10 text-sm text-gray-300 md:flex">
          <li>
            <Link
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Browse Jobs
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Company
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Pricing
            </Link>
          </li>
        </ul>

        {/* Right - Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="h-6 w-px bg-gray-700" />

          <Link
            href="#"
            className="text-sm text-gray-300 hover:text-white"
          >
            Sign In
          </Link>

          <Button
            className="rounded-xl bg-violet-600 px-6 text-white hover:bg-violet-700"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#111827] md:hidden">
          <div className="space-y-3 px-6 py-4">
            <Link href="#" className="block text-gray-300">
              Browse Jobs
            </Link>
            <Link href="#" className="block text-gray-300">
              Company
            </Link>
            <Link href="#" className="block text-gray-300">
              Pricing
            </Link>
            <Link href="#" className="block text-gray-300">
              Sign In
            </Link>

            <Button className="w-full rounded-xl bg-violet-600 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
"use client";
import { Button } from "@heroui/react";

import { motion } from "motion/react";
import Image from "next/image";

export default function ExtraSection() {
  return (
<section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24 text-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.png"
          alt="background"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Your next role is
          <br />
          already looking for you
        </h1>

        <p className="mt-5 text-sm text-zinc-300 md:text-base">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>
      </div>
    </section>
  );
}
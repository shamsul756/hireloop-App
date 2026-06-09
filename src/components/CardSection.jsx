"use client";



import { Button, Card, CardFooter, Chip } from "@heroui/react";
import {
  RiRocketLine,
  RiBarChartBoxLine,
  RiFlashlightLine,
  RiAddLine,
  RiArrowRightLine,
} from "react-icons/ri";

const plans = [
  {
    name: "Starter",
    price: "$0",
    icon: RiRocketLine,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Growth",
    price: "$17",
    icon: RiBarChartBoxLine,
    popular: true,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Premium",
    price: "$99",
    icon: RiFlashlightLine,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-violet-400">
            Pricing
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Pay for the leverage,
            <br />
            not the listings
          </h2>

          {/* Billing Toggle */}
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 p-1">
              <Button
                size="sm"
                radius="full"
                className="bg-white text-black"
              >
                Monthly
              </Button>

              <Button
                size="sm"
                radius="full"
                variant="light"
                className="text-white"
              >
                Yearly
              </Button>

              <Chip
                size="sm"
                className="bg-fuchsia-500 text-white"
              >
                25% OFF
              </Chip>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <Card
                key={plan.name}
                className={`bg-white/[0.03] border border-white/10 backdrop-blur-xl ${
                  plan.popular
                    ? "scale-105 shadow-[0_0_40px_rgba(168,85,247,0.25)]"
                    : ""
                }`}
              >
                <Card className="p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                        <Icon size={18} />
                      </div>

                      <span className="text-lg text-white">
                        {plan.name}
                      </span>
                    </div>

                    {plan.popular && (
                      <Chip color="secondary" variant="flat">
                        Popular
                      </Chip>
                    )}
                  </div>

                  <div className="mt-8">
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>

                    <span className="text-zinc-400 ml-1">
                      /month
                    </span>
                  </div>

                  <p className="mt-8 text-sm text-zinc-400">
                    Start building your insights hub:
                  </p>

                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-zinc-300"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white/5 border border-white/10">
                          <RiAddLine size={12} />
                        </div>

                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>

                <CardFooter className="p-7 pt-0">
                  <Button
                    fullWidth
                    radius="lg"
                    endContent={<RiArrowRightLine />}
                    className={
                      plan.popular
                        ? "bg-white text-black"
                        : "bg-white/10 text-white"
                    }
                  >
                    Choose This Plan
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
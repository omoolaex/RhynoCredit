// components/careers/WhyWorkWithUs.jsx
"use client";

import { Briefcase, Users, Globe2 } from "lucide-react";

export default function WhyWorkWithUs() {
  const perks = [
    {
      icon: <Briefcase className="w-10 h-10 text-[#39B44A]" />,
      title: "Growth & Learning",
      description:
        "We invest in people. From mentorship to hands-on projects, you’ll gain the skills and confidence to advance your career.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#39B44A]" />,
      title: "Inclusive Culture",
      description:
        "We’re stronger together. Collaboration, respect, and diversity shape how we work, creating a workplace where everyone belongs.",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-[#39B44A]" />,
      title: "Impact-Driven Work",
      description:
        "Your role matters. Every project, every idea, helps Nigerians and businesses unlock financial opportunities.",
    },
  ];

  return (
    <section className="bg-[#FBFCFD] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#010B07]">
            Why Work With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {perk.icon}
              <h3 className="mt-6 text-xl font-semibold text-[#010B07]">
                {perk.title}
              </h3>
              <p className="mt-4 text-[#052D1B] text-base leading-relaxed">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

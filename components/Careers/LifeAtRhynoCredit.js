// components/careers/LifeAtRhynoCredit.jsx
"use client";

import Image from "next/image";

export default function LifeAtRhynoCredit() {
  const quotes = [
    {
      text: "Working at RhynoCredit gives me the chance to grow professionally while making a real impact in people’s lives.",
      author: "Adeola, Credit Officer",
    },
    {
      text: "It’s not just a job — it’s a mission. Every day, we help someone move closer to their goals.",
      author: "Chidi, Operations Associate",
    },
  ];

  const images = [
    "/images/careers/team-1.jpg",
    "/images/careers/team-2.jpg",
    "/images/careers/team-3.jpg",
  ];

  return (
    <section className="bg-[#F5FDF8] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#010B07]">
            Life at RhynoCredit
          </h2>
          <p className="mt-4 text-[#052D1B] text-base sm:text-lg max-w-3xl mx-auto">
            Get a glimpse of what it’s like to work with us — from our team
            spirit to the impact we create together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, idx) => (
              <div key={idx} className="relative w-full h-48 sm:h-60 rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`RhynoCredit team ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Quotes */}
          <div className="flex flex-col gap-8">
            {quotes.map((q, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[#E6F4EC]"
              >
                <p className="text-lg text-[#010B07] leading-relaxed">“{q.text}”</p>
                <p className="mt-4 text-sm font-medium text-[#39B44A]">
                  — {q.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

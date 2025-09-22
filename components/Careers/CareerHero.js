// components/careers/CareerHero.jsx
"use client";

import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="relative bg-[#39B44A] text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/careers/team-culture.jpg" // replace with actual image path
          alt="RhynoCredit Team at Work"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#39B44A]/70 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-28 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Join Our Team at RhynoCredit
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto">
          Empowering Nigerians starts with empowering our people.
        </p>
        <p className="mt-3 text-base sm:text-lg max-w-2xl mx-auto text-[#FBFCFD]/90">
          When you grow, we grow — and together, we fuel the future of
          financial inclusion.
        </p>
      </div>
    </section>
  );
}

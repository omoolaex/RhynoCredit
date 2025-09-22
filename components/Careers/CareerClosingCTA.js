// components/careers/CareerClosingCTA.jsx
"use client";

export default function CareerClosingCTA() {
  return (
    <section className="relative bg-[#39B44A] text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Didn’t see a role that fits?
        </h2>
        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-[#FBFCFD]/90">
          We’re always excited to meet driven people who share our mission.
          Reach out — we’d still love to hear from you.
        </p>
        <div className="mt-10">
          <a
            href="mailto:careers@rhynocredit.com?subject=General%20Application"
            className="inline-block px-8 py-4 rounded-xl bg-white text-[#39B44A] font-semibold hover:bg-[#FBFCFD] transition"
          >
            Contact / Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}

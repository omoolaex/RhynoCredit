// components/contact/ContactClosingCTA.jsx
"use client";

export default function ContactClosingCTA() {
  return (
    <section className="bg-[#39B44A] text-white text-center py-24 px-6">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        Let’s Build Financial Growth Together
      </h2>
      <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-[#FBFCFD]/90">
        Have a question, idea, or partnership in mind? We’d love to hear from you.
      </p>
      <div className="mt-10">
        <a
          href="#contact-form"
          className="inline-block px-8 py-4 rounded-xl bg-white text-[#39B44A] font-semibold hover:bg-[#FBFCFD] transition"
        >
          Reach Out Now
        </a>
      </div>
    </section>
  );
}

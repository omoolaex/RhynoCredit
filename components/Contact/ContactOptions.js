// components/contact/ContactOptions.jsx
"use client";

import { Mail, Phone, Users } from "lucide-react";

export default function ContactOptions() {
  const options = [
    {
      icon: <Mail className="w-8 h-8 text-[#39B44A]" />,
      title: "General Inquiries",
      details: ["info@rhynocredit.com"],
    },
    {
      icon: <Phone className="w-8 h-8 text-[#39B44A]" />,
      title: "Customer Support",
      details: ["support@rhynocredit.com", "+234 (0) 901 114 1113", "WhatsApp available"],
    },
    {
      icon: <Users className="w-8 h-8 text-[#39B44A]" />,
      title: "Partnerships & Media",
      details: ["partnerships@rhynocredit.com"],
    },
  ];

  return (
    <section className="bg-[#FBFCFD] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#010B07]">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {opt.icon}
              <h3 className="mt-4 text-xl font-semibold text-[#010B07]">{opt.title}</h3>
              <ul className="mt-4 space-y-1 text-[#052D1B]">
                {opt.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client'

import Image from 'next/image'
import { FaBolt, FaLock, FaChartLine, FaUsers, FaHandsHelping } from 'react-icons/fa'

const differentiators = [
  {
    icon: <FaBolt className="text-[#39B44A] text-2xl" />,
    title: 'Fast & Simple Loans',
    desc: 'Quick approvals and stress-free access to the funds you need.',
  },
  {
    icon: <FaLock className="text-[#39B44A] text-2xl" />,
    title: 'Transparency First',
    desc: 'No hidden charges — just clear, honest agreements.',
  },
  {
    icon: <FaChartLine className="text-[#39B44A] text-2xl" />,
    title: 'Flexible Options',
    desc: 'Credit solutions tailored to your business or personal needs.',
  },
  {
    icon: <FaUsers className="text-[#39B44A] text-2xl" />,
    title: 'Human Support',
    desc: 'Our team is always ready to guide and assist you.',
  },
  {
    icon: <FaHandsHelping className="text-[#39B44A] text-2xl" />,
    title: 'Growth-Oriented',
    desc: 'We focus on helping you achieve long-term progress.',
  },
]

export default function WhatMakesUsDifferent() {
  return (
    <section className="relative w-full bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-[25%_75%]">
        
        {/* -------- LEFT COLUMN (Image) -------- */}
        <div className="relative w-full h-64 sm:h-80 lg:h-auto">
          <Image
            src="/images/about-1.jpg" // replace with actual image
            alt="What Makes Us Different"
            fill
            className="object-cover rounded-3xl pl-4"
            sizes="(max-width: 1024px) 100vw, 25vw"
          />
        </div>

        {/* -------- RIGHT COLUMN (Text) -------- */}
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
          <span className="inline-block border border-black rounded-full px-3 py-1 text-[#39B44A] font-semibold uppercase text-xs sm:text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#010B07] leading-snug">
            What Makes Us Different
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            At RhynoCredit, we don’t just provide loans — we create opportunities. Our approach blends speed,
            integrity, and genuine support to ensure your financial journey is smooth, fair, and empowering.
          </p>

          {/* Differentiators grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#010B07]">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

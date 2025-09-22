'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export default function WhyInvest() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* ---------- LEFT COLUMN (Content) ---------- */}
          <div className="order-2 lg:order-1 space-y-6">
            <span className="inline-block border border-black rounded-full px-3 py-1 text-[#39B44A] font-semibold uppercase text-xs sm:text-sm">
              Why Invest With RhynoCredit?
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#010B07] leading-snug">
              Trusted. Transparent. Rewarding.
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Here’s why thousands trust RhynoCredit with their investments.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#39B44A] shrink-0" />
                <span className="text-gray-700 text-base sm:text-lg">
                  <strong>Proven Track Record</strong> – Over a decade of providing trusted financial solutions in Nigeria.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#39B44A] shrink-0" />
                <span className="text-gray-700 text-base sm:text-lg">
                  <strong>Attractive Returns</strong> – Competitive ROI designed to maximize your earnings.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#39B44A] shrink-0" />
                <span className="text-gray-700 text-base sm:text-lg">
                  <strong>Transparency First</strong> – Clear agreements, no hidden fees, no surprises.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#39B44A] shrink-0" />
                <span className="text-gray-700 text-base sm:text-lg">
                  <strong>Impact-Driven</strong> – Your investments directly support Nigerian entrepreneurs, students, and households.
                </span>
              </li>
            </ul>
          </div>

          {/* ---------- RIGHT COLUMN (Image) ---------- */}
          <div className="order-1 lg:order-2 relative w-full h-64 sm:h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/why-invest.jpg" // 👉 Replace with actual professional business image
              alt="Why Invest With RhynoCredit"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

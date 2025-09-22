'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ClosingCTA() {
  return (
    <section className="relative w-full bg-[#39B44A] py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Optional subtle pattern/overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/pattern.png" // 👉 replace with subtle pattern or remove if not needed
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
        {/* Left Text */}
        <div className="flex-1 text-white space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            Ready to Grow Your Wealth While Empowering Others?
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Your investment doesn’t just create financial returns — it fuels
            businesses, empowers students, and drives Nigeria’s economic growth.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#010B07] font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100 transition text-lg"
            >
              Invest Now <span className="text-xl">→</span>
            </Link>
          </div>
        </div>

        {/* Right Graphic / Logo */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src="/images/rhyno-credit-icon-white.png" // 👉 Replace with RhynoCredit logo/graphic
            alt="RhynoCredit Logo"
            width={220}
            height={220}
            className="w-32 sm:w-40 lg:w-48 h-auto"
          />
        </div>
      </div>
    </section>
  )
}

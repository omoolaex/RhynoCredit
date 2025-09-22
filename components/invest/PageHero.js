'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function InvestHero() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Grid layout: stacks on mobile, 2 cols on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN (Image) */}
          <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/invest-hero.jpg" // 👉 Replace with investment image
              alt="Invest With RhynoCredit"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* RIGHT COLUMN (Content) */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block border border-[#39B44A] rounded-full px-3 py-1 text-[#39B44A] font-semibold uppercase text-xs sm:text-sm">
              Invest With Us
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#010B07] leading-snug">
              Invest With Confidence. Earn With RhynoCredit.
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Secure, transparent, and impactful investment opportunities 
              designed to grow your wealth while fueling financial inclusion 
              across Nigeria.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#39B44A] text-white font-semibold hover:bg-[#2f8c3a] transition-colors duration-200"
              >
                Start Investing Today
                <span className="text-lg">→</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#39B44A] text-[#39B44A] font-medium hover:bg-[#39B44A] hover:text-white transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

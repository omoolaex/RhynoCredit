'use client'

import Image from 'next/image'

export default function CTA({ bgcolor = 'bg-[#FBFCFD]' }) {
  return (
    <section className={`relative ${bgcolor} text-[#00A859] py-20 sm:py-28 lg:py-32`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left: Content (50%) */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Building trust with Nigerians through transparent loans and
              tailored financial solutions.
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#052D1B] font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-gray-100 transition text-lg"
            >
              Contact Us
              <span className="text-xl">→</span>
            </a>
          </div>

          {/* Right: Logo / Image (50%) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/images/rhyno-credit-icon-white.png"
              alt="Rhyno Credit Logo"
              width={1300}
              height={700}
              className="w-40 sm:w-48 lg:w-56 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

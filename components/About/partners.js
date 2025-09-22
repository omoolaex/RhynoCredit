'use client'

import Image from 'next/image'

const logos = [
  '/images/logo-1.png',
  '/images/logo-2.png',
  '/images/logo-3.png',
  '/images/logo-4.png',
  '/images/logo-5.png',
  '/images/logo-6.png',
  // 👉 Add as many as needed
]

export default function PartnersSection() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block border border-black rounded-full px-3 py-1 text-[#39B44A] font-semibold uppercase text-xs sm:text-sm">
            Our Partners
          </span>
        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#010B07]">
          Trusted By Leading Institutions
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          We proudly partner with organizations that share our vision of financial inclusion.
        </p>
        </div>

        {/* Scrolling Logos */}
        <div className="relative mt-10 overflow-hidden">
          <div className="flex animate-marquee space-x-12">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 sm:w-40 h-16 sm:h-20 relative grayscale hover:grayscale-0 transition"
              >
                <Image
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

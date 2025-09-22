'use client'

import Image from 'next/image'

export default function OurStory() {
  return (
    <section className="relative w-full bg-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Grid: stacks on mobile, 2-col on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* ---------- LEFT COLUMN (Image) ---------- */}
          <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/our-story.jpg" // Replace with actual image path
              alt="Our Story - RhynoCredit"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* ---------- RIGHT COLUMN (Text) ---------- */}
          <div className="space-y-6">
            <span className="inline-block border border-black rounded-full px-3 py-1 text-[#39B44A] font-semibold uppercase text-xs sm:text-sm">
              Our Story
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#010B07] leading-snug">
              Why We Exist
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              RhynoCredit was born out of a deep understanding of the struggles Nigerian entrepreneurs,
              workers, and students face when seeking fair access to credit. For too long, people with
              potential were held back by rigid financial systems that excluded more than they included.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We set out to change that. Our mission is simple: to empower Nigerians with flexible,
              transparent, and reliable credit solutions that fuel growth, resilience, and opportunity —
              whether for businesses, personal goals, or educational pursuits.
            </p>

            {/* Highlighted statement */}
            <div className="bg-[#39B44A]/10 border-l-4 border-[#39B44A] rounded-r-lg px-4 py-3">
              <p className="text-[#010B07] font-medium">
                We are not just a lender — we are your growth partner.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

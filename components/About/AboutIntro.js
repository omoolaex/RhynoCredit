'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutIntro() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main grid: stacks on mobile, 2-col on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          
          {/* ---------------- LEFT COLUMN ---------------- */}
          <div className="flex flex-col justify-between space-y-8 h-full">
            {/* Heading */}
            <div>
              <span className="inline-block border border-black rounded-full px-3 py-1 text-[#39B44A] font-semibold uppercase text-xs sm:text-sm">
                🤝 About Us
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#010B07] leading-snug">
                Over 10 years of empowering Nigerian businesses and individuals with seamless credit solutions.
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              At RhynoCredit, we understand that access to capital is the lifeline of growth. With years of
              expertise in microfinance, our team delivers flexible, transparent, and stress-free credit solutions.
              Whether you are a small business owner, a salary earner, or a student, we’re here to provide the
              financial support you need to thrive — guided by integrity, speed, and genuine care.
            </p>

            {/* Contact + CEO + Signature */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
              {/* Call */}
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#39B44A]/10 text-[#39B44A]">
                  📞
                </div>
                <div>
                  <h6 className="text-sm font-semibold text-[#010B07]">Call For Any Inquiry</h6>
                  <p className="text-gray-700 text-sm">+234 800 000 0000</p>
                </div>
              </div>

              {/* CEO */}
              <div className="flex items-center gap-3">
                <Image
                  src="/images/about-ceo.png"
                  alt="RhynoCredit CEO"
                  width={56}
                  height={56}
                  className="rounded-full border border-gray-200"
                />
                <div>
                  <h6 className="text-sm font-semibold text-[#010B07]">Founder & CEO</h6>
                  <p className="text-gray-700 text-sm">Ezekiel Oduko</p>
                </div>
              </div>

              {/* Signature */}
              <div className="flex justify-start sm:justify-end">
                <Image
                  src="/images/sign.png"
                  alt="CEO Signature"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#39B44A] text-[#39B44A] font-semibold rounded-full hover:bg-[#39B44A] hover:text-white transition-colors duration-200"
              >
                Contact Us
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>

          {/* ---------------- RIGHT COLUMN ---------------- */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 h-full">
            {/* Tall left image: spans full height */}
            <div className="relative col-span-1 h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/aboutintro.jpg"
                alt="About RhynoCredit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right stacked (top image + bottom box) */}
            <div className="col-span-1 grid grid-rows-[3fr_1fr] gap-4 sm:gap-6 h-full">
              {/* Top image (taller) */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="RhynoCredit team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Experience box (shorter) */}
              <div className="rounded-2xl bg-[#39B44A] text-white flex flex-col items-center justify-center px-4">
                <h3 className="text-3xl sm:text-4xl font-bold">10+</h3>
                <p className="text-sm sm:text-base mt-1">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        
        {/* Mission */}
        <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-6 sm:p-8 flex flex-col flex-grow">
            <div className="text-3xl">🎯</div>
            <h3 className="mt-4 text-xl font-semibold text-[#010B07]">Our Mission</h3>
            <p className="mt-3 text-gray-600 text-base leading-relaxed">
            To empower Nigerians with flexible and transparent credit solutions 
            that fuel growth, resilience, and opportunity for businesses, 
            individuals, and students alike.
            </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-6 sm:p-8 flex flex-col flex-grow">
            <div className="text-3xl">🌍</div>
            <h3 className="mt-4 text-xl font-semibold text-[#010B07]">Our Vision</h3>
            <p className="mt-3 text-gray-600 text-base leading-relaxed">
            To become Nigeria’s most trusted partner in financial inclusion, 
            driving sustainable development by making access to credit seamless 
            and stress-free for everyone.
            </p>
        </div>

        {/* Core Values */}
        <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-6 sm:p-8 flex flex-col flex-grow">
            <div className="text-3xl">💡</div>
            <h3 className="mt-4 text-xl font-semibold text-[#010B07]">Our Core Values</h3>
            <p className="mt-3 text-gray-600 text-base leading-relaxed">
            Integrity, transparency, speed, and customer-first service are at 
            the heart of everything we do. We are committed to building 
            long-lasting relationships founded on trust and excellence.
            </p>
        </div>
        </div>

      </div>
    </section>
  )
}

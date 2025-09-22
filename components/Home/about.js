'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaStar } from 'react-icons/fa'

export default function WhoWeAre() {
  const [amount, setAmount] = useState(500000) // default ₦500,000
  const [months, setMonths] = useState(6)
  const interestRate = 0.15 // 15%

  const totalPay = amount + amount * interestRate
  const monthlyPay = totalPay / months

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Left background image strip */}
      <div className="absolute top-0 left-0 w-[23%] h-full hidden lg:block">
        <Image
          src="/images/who-we-are.jpg"
          alt="Rhyno Credit illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content wrapper */}
      <div className="relative max-w-7xl mx-auto px-8 sm:px-6 lg:px-12 py-30">
        <div className="lg:ml-[25%] relative">
          {/* Text content with space for calculator */}
          <div className="pr-0 lg:pr-[40%]">
            <span className="inline-block border border-black rounded-full px-5 py-1 text-sm font-medium tracking-wide uppercase mb-4">
              🤝 Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Building trust through smarter credit
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl">
              At Rhyno Credit, we believe finance should be simple, transparent,
              and built around people. From personal goals to business ambitions,
              our tailored loans help Nigerians achieve more — without the red tape.
              Backed by technology and guided by trust, we exist to put credit
              power directly in your hands.
            </p>

            {/* Listing with star icons (2x2 grid) */}
            <ul className="grid sm:grid-cols-2 gap-6 text-gray-700 text-sm">
              {[
                { title: 'Privacy First', desc: 'Secure systems protect your data and peace of mind.' },
                { title: 'Guided Support', desc: 'Our team supports you from application to approval.' },
                { title: 'Flexible Options', desc: 'Loan plans tailored to your lifestyle and needs.' },
                { title: 'Fast Approvals', desc: 'Streamlined processes so funds reach you quickly.' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaStar className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Button with hover slide effect */}
            <Link
              href="/apply"
              className="relative mt-10 inline-flex items-center px-6 py-3 rounded-full font-semibold overflow-hidden group"
            >
              <span className="relative z-10 flex items-center transition-colors duration-500 text-white group-hover:text-green-600">
                Get Started <FaArrowRight className="ml-2" />
              </span>

              {/* Green base layer */}
              <span className="absolute inset-0 bg-green-600 transition-transform duration-500 ease-out group-hover:-translate-x-full group-hover:-translate-y-full"></span>

              {/* White overlay diagonal slide */}
              <span className="absolute inset-0 bg-white transition-transform duration-500 ease-out translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 border border-green-600"></span>
            </Link>
          </div>

          {/* Loan Calculator card floating on top */}
          <div className="absolute top-0 right-0 w-full lg:w-[35%] bg-white rounded-xl shadow-2xl p-6 sm:p-6 transform lg:translate-y-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Loan Estimate
            </h3>

            {/* Loan amount slider */}
            <div className="mb-5">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>₦100,000</span>
                <span>₦5,000,000</span>
              </div>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-green-600"
              />
              <p className="text-gray-700 mt-1 text-sm">
                Selected: ₦{amount.toLocaleString()}
              </p>
            </div>

            {/* Loan duration slider */}
            <div className="mb-5">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>1 Month</span>
                <span>12 Months</span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="1"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full accent-green-600"
              />
              <p className="text-gray-700 mt-1 text-sm">
                Duration: {months} month(s)
              </p>
            </div>

            {/* Calculated results */}
            <div className="space-y-1 text-gray-800 mb-5 text-sm">
              <p className="flex justify-between">
                <span>Pay Monthly:</span>
                <b>₦{monthlyPay.toFixed(0).toLocaleString()}</b>
              </p>
              <p className="flex justify-between">
                <span>Total Pay Back:</span>
                <b>₦{totalPay.toFixed(0).toLocaleString()}</b>
              </p>
            </div>

            <button className="w-full px-5 py-2.5 rounded-full bg-green-600 text-white font-semibold text-sm hover:bg-green-500 transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

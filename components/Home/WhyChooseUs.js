'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaUserCheck, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa'

export default function WhyChooseUs() {
  const [counters, setCounters] = useState({ years: 0, loans: 0, clients: 0 })

  useEffect(() => {
    let started = false
    const onScroll = () => {
      const section = document.getElementById('why-choose-us')
      if (!section) return
      const rect = section.getBoundingClientRect()
      if (!started && rect.top < window.innerHeight && rect.bottom >= 0) {
        started = true
        animateCounter('years', 10)
        animateCounter('loans', 30000)
        animateCounter('clients', 15000)
      }
    }
    const animateCounter = (key, target) => {
      let count = 0
      const interval = setInterval(() => {
        count += Math.ceil(target / 100)
        if (count >= target) {
          count = target
          clearInterval(interval)
        }
        setCounters((prev) => ({ ...prev, [key]: count }))
      }, 30)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="why-choose-us"
      className="relative py-16 sm:py-20 bg-[#052D1B] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-12 relative">
        {/* Divider line (desktop only) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-[70%] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

        {/* Left Column */}
        <div>
          <span className="inline-block border border-white/30 rounded-full px-4 py-1 text-xs sm:text-sm font-medium uppercase mb-4 tracking-wide">
            🤝 Why Choose Us
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
            Credit designed for Nigerians, built on trust and simplicity
          </h2>

          <p className="text-gray-300 mb-8 sm:mb-10 max-w-2xl text-sm sm:text-base">
            At Rhyno Credit, we know that access to finance can make the
            difference between staying stuck and moving forward. That’s why our
            solutions are built to be simple, fast, and transparent — whether
            you’re an individual managing personal needs or a business looking
            to scale. We combine technology with a human touch, giving you loans
            that work for real lives and real ambitions.
          </p>

            {/* Optimized Image (wide rectangle) */}
            <div className="mb-8 sm:mb-10">
            <div className="relative w-full h-40 sm:h-52 lg:h-56">
                <Image
                src="/images/why-choose-us.jpg"
                alt="Why Choose Rhyno Credit"
                fill
                className="rounded-lg shadow-lg object-cover"
                priority
                />
            </div>
            </div>

          {/* Features row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <FaUserCheck className="mx-auto text-[#00A859] text-2xl sm:text-3xl mb-3" />
              <h4 className="font-semibold mb-2 text-base sm:text-lg">
                Tailored Loans
              </h4>
              <p className="text-xs sm:text-sm text-gray-300">
                Flexible options that match your unique needs.
              </p>
            </div>
            <div className="text-center">
              <FaMoneyBillWave className="mx-auto text-[#00A859] text-2xl sm:text-3xl mb-3" />
              <h4 className="font-semibold mb-2 text-base sm:text-lg">
                Affordable Rates
              </h4>
              <p className="text-xs sm:text-sm text-gray-300">
                Fair repayment plans without hidden charges.
              </p>
            </div>
            <div className="text-center">
              <FaShieldAlt className="mx-auto text-[#00A859] text-2xl sm:text-3xl mb-3" />
              <h4 className="font-semibold mb-2 text-base sm:text-lg">
                Reliable Support
              </h4>
              <p className="text-xs sm:text-sm text-gray-300">
                A trusted partner guiding you every step of the way.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Counters) */}
        <div className="flex flex-col justify-center space-y-12 relative z-10 lg:pl-12 items-center lg:items-end">
          {[
            { id: 'years', label: 'Years serving Nigerians', num: counters.years, index: '01' },
            { id: 'loans', label: 'Loans disbursed', num: counters.loans.toLocaleString(), index: '02' },
            { id: 'clients', label: 'Happy clients nationwide', num: counters.clients.toLocaleString(), index: '03' },
          ].map((item) => (
            <div key={item.id} className="text-center lg:text-right w-full">
              <span className="block text-xs text-white/60 mb-2">{item.index}</span>
              <div className="w-8 sm:w-10 h-px bg-white/30 mb-2 ml-auto"></div>
              <h6
                className="text-5xl sm:text-6xl font-extrabold text-transparent mb-2"
                style={{
                  WebkitTextStroke: '1px #00A859',
                }}
              >
                {item.num}+
              </h6>
              <p className="text-sm sm:text-base text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

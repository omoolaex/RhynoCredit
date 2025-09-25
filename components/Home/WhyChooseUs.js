'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaUserCheck, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  const [counters, setCounters] = useState({ years: 0, loans: 0, clients: 0 })

  useEffect(() => {
    const animateCounter = (key, target) => {
      let count = 0
      const step = Math.ceil(target / 80) // smoother increment
      const interval = setInterval(() => {
        count += step
        if (count >= target) {
          count = target
          clearInterval(interval)
        }
        setCounters((prev) => ({ ...prev, [key]: count }))
      }, 30)
    }

    const section = document.getElementById('why-choose-us')
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounter('years', 10)
          animateCounter('loans', 30000)
          animateCounter('clients', 15000)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="why-choose-us"
      className="relative py-16 sm:py-20 bg-[#052D1B] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-12 relative">
        {/* Divider line */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-[70%] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

        {/* Left Column */}
        <div>
          <motion.span
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block border border-white/30 rounded-full px-4 py-1 text-xs sm:text-sm font-medium uppercase mb-4 tracking-wide"
          >
            🤝 Why Choose Us
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6"
          >
            Credit designed for Nigerians, built on trust and simplicity
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-8 sm:mb-10 max-w-2xl text-sm sm:text-base"
          >
            At Rhyno Credit, we know that access to finance can make the
            difference between staying stuck and moving forward. That’s why our
            solutions are built to be simple, fast, and transparent — whether
            you’re an individual managing personal needs or a business looking
            to scale. We combine technology with a human touch, giving you loans
            that work for real lives and real ambitions.
          </motion.p>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10"
          >
            <div className="relative w-full h-40 sm:h-52 lg:h-56">
              <Image
                src="/images/why-choose-us.jpg"
                alt="Why Choose Rhyno Credit"
                fill
                className="rounded-lg shadow-lg object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <FaUserCheck className="mx-auto text-[#00A859] text-3xl mb-3" />,
                title: 'Tailored Loans',
                desc: 'Flexible options that match your unique needs.',
              },
              {
                icon: <FaMoneyBillWave className="mx-auto text-[#00A859] text-3xl mb-3" />,
                title: 'Affordable Rates',
                desc: 'Fair repayment plans without hidden charges.',
              },
              {
                icon: <FaShieldAlt className="mx-auto text-[#00A859] text-3xl mb-3" />,
                title: 'Reliable Support',
                desc: 'A trusted partner guiding you every step of the way.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {item.icon}
                <h4 className="font-semibold mb-2 text-base sm:text-lg">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column (Counters) */}
        <div className="flex flex-col justify-center space-y-12 relative z-10 lg:pl-12 items-center lg:items-end">
          {[
            { id: 'years', label: 'Years serving Nigerians', num: counters.years, index: '01' },
            { id: 'loans', label: 'Loans disbursed', num: counters.loans, index: '02' },
            { id: 'clients', label: 'Happy clients nationwide', num: counters.clients, index: '03' },
          ].map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-right w-full"
            >
              <span className="block text-xs text-white/60 mb-2">{item.index}</span>
              <div className="w-8 sm:w-10 h-px bg-white/30 mb-2 ml-auto"></div>
              <h6
                className="text-5xl sm:text-6xl font-extrabold text-transparent mb-2"
                style={{ WebkitTextStroke: '1px #00A859' }}
              >
                {item.num.toLocaleString()}+
              </h6>
              <p className="text-sm sm:text-base text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

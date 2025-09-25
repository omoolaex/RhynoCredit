'use client'

import Image from 'next/image'
import { FaFileAlt, FaFileSignature, FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function OurProcess() {
  const steps = [
    {
      icon: <FaFileAlt className="text-[#00A859] text-3xl sm:text-4xl" />,
      title: 'Application',
      desc: 'Begin with a simple, user-friendly application tailored to your needs. No jargon, no hassle — just a clear first step towards your goals.',
    },
    {
      icon: <FaFileSignature className="text-[#00A859] text-3xl sm:text-4xl" />,
      title: 'Documentation',
      desc: 'Submit only the essentials. We guide you through every requirement, keeping the process transparent and stress-free.',
    },
    {
      icon: <FaCheckCircle className="text-[#00A859] text-3xl sm:text-4xl" />,
      title: 'Approval',
      desc: 'Our experts review your request with speed and fairness, ensuring you get a quick decision you can trust.',
    },
    {
      icon: <FaMoneyBillWave className="text-[#00A859] text-3xl sm:text-4xl" />,
      title: 'Funding',
      desc: 'Once approved, your funds are disbursed directly and swiftly, so you can focus on moving forward with confidence.',
    },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative py-16 sm:py-20 bg-[#FBFCFD] text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Top row: Intro + Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block border border-black rounded-full px-4 py-1 text-xs sm:text-sm font-medium uppercase mb-4 tracking-wide">
              🤝 Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              From consultation to funding — a process built on trust
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl">
              At Rhyno Credit, we keep things simple and transparent. Our process is designed to
              guide you seamlessly from the first conversation to loan approval and disbursement.
              Every step is clear, supportive, and centered on you.
            </p>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full h-56 sm:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/process-video-thumb.jpg"
              alt="Loan process video"
              fill
              className="object-cover"
            />
            <a
              href="https://www.youtube.com/watch?v=rzfmZC3kg3M"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#00A859] text-white text-3xl"
              >
                ▶
              </motion.div>
            </a>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 items-start">
          {/* Supporting image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-48 sm:h-92 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/process-image.jpg"
              alt="Loan process"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Steps */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-start text-left"
                >
                  {/* Icon */}
                  <div className="bg-[#052D1B] p-4 rounded-full shadow-md mb-4">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-6">{step.title}</h3>

                  {/* Dot + line */}
                  <div className="relative flex items-center w-full mb-6">
                    <span className="w-4 h-4 rounded-full bg-[#00A859] z-10"></span>
                    {idx !== steps.length && (
                      <span className="flex-auto h-px bg-[#00A859]/40"></span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 max-w-xs">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { FaUserTie, FaBolt, FaBriefcase, FaGraduationCap, FaHome, FaStore } from 'react-icons/fa'

const services = [
  {
    id: '01',
    title: 'Personal Loans',
    description: 'Quick access to funds for your personal needs, with flexible repayment plans that work for you.',
    icon: <FaUserTie className="text-3xl text-[#39B44A]" />,
    link: '/services/personal-loans',
  },
  {
    id: '02',
    title: 'Gadget Loans',
    description: 'When unexpected events happen, get instant financial relief without stress.',
    icon: <FaBolt className="text-3xl text-[#39B44A]" />,
    link: '/services/emergency-loans',
  },
  {
    id: '03',
    title: 'Business Loans',
    description: 'Helping entrepreneurs and SMEs grow with accessible, scalable financing.',
    icon: <FaBriefcase className="text-3xl text-[#39B44A]" />,
    link: '/services/business-loans',
  },
  {
    id: '04',
    title: 'AutoMobile Loans',
    description: 'Affordable and stress-free education financing to help you achieve your dreams.',
    icon: <FaGraduationCap className="text-3xl text-[#39B44A]" />,
    link: '/services/student-loans',
  },
  {
    id: '05',
    title: 'Mortgage Loans',
    description: 'Secure your future home with competitive rates and simple terms.',
    icon: <FaHome className="text-3xl text-[#39B44A]" />,
    link: '/services/mortgage-loans',
  },
  {
    id: '06',
    title: 'SME/Small Business Loans',
    description: 'Tailored for small businesses to keep operations running and foster growth.',
    icon: <FaStore className="text-3xl text-[#39B44A]" />,
    link: '/services/sme-loans',
  },
]

export default function ServicesListing() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block border border-black rounded-full px-3 py-1 text-[#39B44A] font-semibold uppercase text-xs sm:text-sm">
            🤝 Our Services
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#010B07]">
            Explore Our Comprehensive Services
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Designed to empower Nigerians with transparent, flexible, and reliable credit solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-4">{service.icon}</div>

              {/* Number */}
              <span className="text-gray-400 font-bold">{service.id}</span>

              {/* Title */}
              <h3 className="mt-2 text-xl font-semibold text-[#010B07]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-base leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Read More */}
              <Link
                href={service.link}
                className="mt-4 inline-flex items-center gap-2 text-[#39B44A] font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

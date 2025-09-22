'use client'

import Link from 'next/link'
import {
  FaArrowRight,
  FaUserTie,
  FaBriefcase,
  FaCar,
  FaHome,
  FaMobileAlt,
} from 'react-icons/fa'

const services = [
  {
    title: 'Personal Loans',
    desc: 'Handle life’s needs with flexible repayment and fast approval.',
    icon: FaUserTie,
    link: '/services/personal-loans',
  },
  {
    title: 'Business Loans',
    desc: 'Power your business growth with tailored SME and corporate credit.',
    icon: FaBriefcase,
    link: '/services/business-loans',
  },
  {
    title: 'Automobile Loans',
    desc: 'Drive your dream car faster with simple and affordable financing.',
    icon: FaCar,
    link: '/services/automobile-loans',
  },
  {
    title: 'Mortgage Loans',
    desc: 'Make homeownership a reality with our competitive mortgage options.',
    icon: FaHome,
    link: '/services/mortgage-loans',
  },
  {
    title: 'Gadget Loans',
    desc: 'Own the latest devices with easy, flexible installment plans.',
    icon: FaMobileAlt,
    link: '/services/gadget-loans',
  },
]

export default function Services() {
  return (
    <section className="relative py-30 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="inline-block border border-black rounded-full px-5 py-1 text-sm font-medium tracking-wide uppercase">
            🤝 Our Services
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Credit solutions designed to empower you
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            At Rhyno Credit, we simplify access to finance — whether you’re
            building your business, managing personal needs, or planning your
            next milestone.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-gray-200 rounded-xl overflow-hidden border border-gray-200">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Link
                key={idx}
                href={service.link}
                className="group relative flex items-center gap-4 p-8 bg-white transition-all duration-300 hover:bg-green-50 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {/* Icon with flip effect */}
                <div className="flex-shrink-0 text-green-600 transform transition-transform duration-500 group-hover:rotate-y-180 [transform-style:preserve-3d]">
                  <Icon className="text-6xl" />
                </div>

                {/* Content on the right */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {service.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center text-green-600 font-medium text-sm">
                    Learn More
                    <FaArrowRight className="ml-1 text-xs transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                {/* Hover accent underline */}
                <span className="absolute inset-x-0 bottom-0 h-1 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
        <Link
            href="/services"
            className="relative inline-flex items-center px-6 py-3 rounded-full font-semibold overflow-hidden group border border-green-600"
        >
            {/* Text */}
            <span className="relative z-10 flex items-center transition-colors duration-500 text-white group-hover:text-green-600">
            View All Services <FaArrowRight className="ml-2" />
            </span>

            {/* Green base layer */}
            <span className="absolute inset-0 bg-green-600 transition-transform duration-500 ease-out group-hover:-translate-x-full group-hover:-translate-y-full"></span>

            {/* White overlay on hover */}
            <span className="absolute inset-0 bg-white transition-transform duration-500 ease-out translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></span>
        </Link>
        </div>
      </div>
    </section>
  )
}

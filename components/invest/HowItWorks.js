'use client'

import { UserPlus, Layers, Wallet, BarChart3 } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Sign Up',
    description: 'Create your investor profile in minutes.',
    icon: <UserPlus className="w-8 h-8 text-[#39B44A]" />,
  },
  {
    number: '2',
    title: 'Choose Plan',
    description: 'Select the investment option that matches your goals.',
    icon: <Layers className="w-8 h-8 text-[#39B44A]" />,
  },
  {
    number: '3',
    title: 'Fund Account',
    description: 'Securely fund your investment through trusted channels.',
    icon: <Wallet className="w-8 h-8 text-[#39B44A]" />,
  },
  {
    number: '4',
    title: 'Watch Growth',
    description: 'Track returns and impact in real time.',
    icon: <BarChart3 className="w-8 h-8 text-[#39B44A]" />,
  },
]

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-[#F9FAFB] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block border border-black rounded-full px-3 py-1 text-[#39B44A] font-semibold uppercase text-xs sm:text-sm">
            How It Works
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#010B07]">
            Simple Process, Maximum Impact
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center relative"
            >
              {/* Numbered Circle */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#39B44A] text-white font-bold text-lg shadow-md">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mt-4">{step.icon}</div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-[#010B07]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>

              {/* Connecting Line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 right-[-6%] w-[12%] h-[2px] bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

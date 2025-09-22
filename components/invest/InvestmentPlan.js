'use client'

import Link from 'next/link'
import { Briefcase, TrendingUp, Target } from 'lucide-react'

const plans = [
  {
    title: 'Short-Term Plan',
    duration: '6 months',
    roi: 'Up to 12%',
    description: 'Perfect for investors who want flexibility and quick returns.',
    icon: <Briefcase className="w-10 h-10 text-[#39B44A]" />,
  },
  {
    title: 'Medium-Term Plan',
    duration: '12 months',
    roi: 'Up to 15%',
    description: 'Balanced returns with moderate risk — ideal for consistent growth.',
    icon: <TrendingUp className="w-10 h-10 text-[#39B44A]" />,
  },
  {
    title: 'Long-Term Plan',
    duration: '24 months',
    roi: 'Up to 18%',
    description: 'Maximize your earnings while supporting long-term financial inclusion projects.',
    icon: <Target className="w-10 h-10 text-[#39B44A]" />,
  },
]

export default function InvestmentPlans() {
  return (
    <section className="relative w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Heading Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block border border-black rounded-full px-3 py-1 text-[#39B44A] font-semibold uppercase text-xs sm:text-sm">
            Investment Opportunities
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#010B07]">
            Choose the Right Plan for You
          </h2>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4">{plan.icon}</div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#010B07]">
                {plan.title}
              </h3>

              {/* ROI & Duration */}
              <p className="mt-2 text-[#39B44A] font-bold text-lg">
                {plan.roi}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Duration: {plan.duration}
              </p>

              {/* Description */}
              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                {plan.description}
              </p>

              {/* CTAs */}
              <div className="mt-6 flex gap-3">
                <Link
                  href="/services"
                  className="px-4 py-2 border border-[#39B44A] text-[#39B44A] rounded-full text-sm font-medium hover:bg-[#39B44A] hover:text-white transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-[#39B44A] text-white rounded-full text-sm font-semibold hover:bg-[#2f8c3a] transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

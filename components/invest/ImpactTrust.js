'use client'

import Image from 'next/image'

const stats = [
  {
    icon: '🌍',
    title: '10+ Years',
    description: 'of service in microfinance and credit solutions.',
  },
  {
    icon: '🤝',
    title: '500+ Businesses',
    description: 'funded through investor-backed financing.',
  },
  {
    icon: '🔒',
    title: 'Compliance Assured',
    description: 'with Nigeria’s financial regulatory standards.',
  },
  {
    icon: '💡',
    title: 'Transparent Reporting',
    description: 'clear updates on your returns and impact.',
  },
]

export default function ImpactTrust() {
  return (
    <section className="relative w-full bg-[#39B44A] text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* ---------- Row 1: Stats Grid ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <h3 className="text-xl font-semibold">{stat.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-white/90 max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* ---------- Row 2: Testimonial ---------- */}
        <div className="bg-white text-[#010B07] rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
          {/* Photo */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/investor.jpg" // 👉 Replace with actual testimonial image
              alt="Investor testimonial"
              fill
              className="object-cover"
            />
          </div>

          {/* Quote */}
          <div>
            <p className="text-lg sm:text-xl leading-relaxed italic">
              “Investing with RhynoCredit has been a rewarding experience. Not
              only am I earning great returns, but I also know my money is
              making a real difference in people’s lives.”
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-[#39B44A]">Adaeze U.</h4>
              <p className="text-sm text-gray-600">Investor</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

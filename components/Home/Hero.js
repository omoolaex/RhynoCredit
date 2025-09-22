'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaMoneyBillWave, FaArrowRight } from 'react-icons/fa'

const slides = [
  {
    image: '/banner1.png',
    title: 'Elevate Your Financial Future with Rhyno Credit',
    subtitle:
      'We provide flexible SME financing and tailored solutions to fuel your business growth.',
    cta: { label: 'Contact Us', href: '/contact' },
    box: {
      icon: <FaMoneyBillWave className="text-4xl text-[#39B44A]" />,
      heading: '5% Interest',
      text: 'Discover our dependable loan solutions designed to empower your financial journey.',
    },
  },
  {
    image: '/banner2.png',
    title: 'Your Partner in Business Growth & Success',
    subtitle:
      'Expert financial strategies and business advice tailored for SMEs across Nigeria.',
    cta: { label: 'Get Started', href: '/services' },
    box: {
      icon: <FaMoneyBillWave className="text-4xl text-[#39B44A]" />,
      heading: 'Fast Approval',
      text: 'Quick, transparent processes to help you focus on what matters — growing your business.',
    },
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full overflow-hidden h-[850px] min-h-[850px] sm:h-[450px] xs:h-[550px]">
      {/* Background slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            className={`object-cover scale-110 ${
              idx === current ? 'animate-zoom' : ''
            }`}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-20" />

      {/* Overlay Text */}
      <div className="relative z-30 max-w-7xl mx-auto h-full flex items-center px-8 pt-50 pb-50 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1
            key={`title-${current}`}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight animate-fadeInLeft"
          >
            {slides[current].title}
          </h1>
          <p
            key={`subtitle-${current}`}
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 animate-fadeInLeft"
          >
            {slides[current].subtitle}
          </p>
        <Link
        key={`cta-${current}`}
        href={slides[current].cta.href}
        className="group relative overflow-hidden border border-white rounded-full mt-6 inline-flex items-center gap-2 px-6 py-3 text-base sm:text-lg text-white font-medium transition-colors duration-300"
        >
        <span className="relative z-10">{slides[current].cta.label}</span>
        <FaArrowRight className="relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1" />

        {/* Animated hover background */}
        <span className="absolute inset-0 bg-[#39B44A] translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
        </Link>
        </div>
      </div>

      {/* Inner Banner Box */}
      <div
        key={`box-${current}`}
        className="absolute bottom-6 sm:bottom-10 right-6 sm:right-12 w-[90%] sm:w-[320px] backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-8 sm:p-6 z-20 animate-fadeInUp"
      >
        <div className="flex items-center gap-3 mb-3">
          {slides[current].box.icon}
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            {slides[current].box.heading}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-200">
          {slides[current].box.text}
        </p>
      </div>

      {/* Indicators */}
      <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
              idx === current ? 'bg-[#39B44A]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

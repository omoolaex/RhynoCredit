'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      text:
        "Rhyno made funding my small shop simple — the application was quick and the team walked me through every step. Funds reached my account faster than I expected. I'm now growing inventory without worry.",
      name: 'Aisha Bello',
      role: 'Small Business Owner, Lagos',
      image: '/images/testimonial-1.png',
    },
    {
      text:
        "I needed support to cover school fees last term. The process was transparent and the repayment terms were clear. Rhyno treated me like a person, not a number.",
      name: 'Emmanuel Okoro',
      role: 'Teacher, Enugu',
      image: '/images/testimonial-2.png',
    },
    {
      text:
        'We used Rhyno Credit to bridge working capital while we waited on invoices. Approval was fast and communication was excellent — real people answering my questions.',
      name: 'Chinedu N.',
      role: 'SME Founder, Abuja',
      image: '/images/testimonial-3.png',
    },
    {
      text:
        'The team at Rhyno helped me pick a loan plan that matched my cash flow. No hidden fees, no surprises — just straightforward, practical support.',
      name: 'Fatima Musa',
      role: 'Customer, Kano',
      image: '/images/testimonial-4.png',
    },
  ]

  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const autoplayRef = useRef(null)
  const containerRef = useRef(null)
  const [slideHeight, setSlideHeight] = useState(0)

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, 6000)
    return () => clearInterval(autoplayRef.current)
  }, [total])

  const goPrev = () => setIndex((i) => (i - 1 + total) % total)
  const goNext = () => setIndex((i) => (i + 1) % total)

  // Measure tallest testimonial
  useEffect(() => {
    if (!containerRef.current) return
    const slides = containerRef.current.querySelectorAll('li')
    let maxHeight = 0
    slides.forEach((slide) => {
      maxHeight = Math.max(maxHeight, slide.scrollHeight)
    })
    setSlideHeight(maxHeight)
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative py-12 sm:py-16 bg-[#052D1B] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 items-start">
        
        {/* Left: Video placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-64 sm:h-80 lg:h-[500px] relative rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/testimonial-video-thumb.jpg"
            alt="Rhyno Credit customer stories"
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="object-cover"
          />
          <a
            href="https://www.youtube.com/watch?v=rzfmZC3kg3M"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
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

        {/* Right: Heading + Slider */}
        <div>
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 text-left"
          >
            <span className="inline-block border border-white/30 rounded-full px-3 py-1 text-xs sm:text-sm font-medium uppercase mb-3 tracking-wide">
              🤝 Success Story
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">
              Real stories — how Rhyno Credit helps Nigerians move forward
            </h2>
            <p className="text-gray-200 text-sm sm:text-base max-w-2xl">
              From Lagos to Kano, clients trust Rhyno Credit for quick, transparent loans that fuel
              growth, education, and stability. These are their voices.
            </p>
          </motion.div>

          {/* Slider */}
          <div className="relative w-full overflow-hidden" ref={containerRef}>
            <ul
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${total * 100}%`,
                transform: `translateX(-${index * 100}%)`,
                height: slideHeight ? `${slideHeight}px` : 'auto',
              }}
            >
              {testimonials.map((t, i) => (
                <li
                  key={i}
                  className="w-full flex-shrink-0 px-0 sm:px-2"
                  style={{ flex: '0 0 100%' }}
                >
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: i === index ? 1 : 0.2, x: i === index ? 0 : 50 }}
                    transition={{ duration: 0.6 }}
                    className="relative max-w-3xl"
                  >
                    {/* Testimonial text */}
                    <p className="text-gray-100 text-base sm:text-lg leading-relaxed mb-4">
                      {t.text}
                    </p>

                    {/* Divider line */}
                    <hr className="border-t border-white/20 mb-4" />

                    {/* Client info + Quote */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={56}
                          height={56}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <h5 className="font-semibold">{t.name}</h5>
                          <p className="text-xs text-gray-400">{t.role}</p>
                        </div>
                      </div>
                      <span className="text-6xl sm:text-7xl text-[#00A859]/20 select-none">
                        “
                      </span>
                    </div>
                  </motion.article>
                </li>
              ))}
            </ul>

            {/* Controls + Dots */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={goPrev}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  ‹
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={goNext}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  ›
                </motion.button>
              </div>

              <div className="flex gap-2 ml-4">
                {testimonials.map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ scale: i === index ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-3 h-3 rounded-full ${
                      i === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

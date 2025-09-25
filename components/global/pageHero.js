'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PageHero({ title }) {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  const backgroundImage = '/images/hero-default.jpg'
  const isHome = pathname === '/'

  return (
    <section
      className={`relative w-full flex items-center py-14 sm:py-20
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover-center"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20" />
      </div>

      {/* Content */}
      <div className="relative w-full px-4 sm:px-6 lg:px-12">
        <div className="text-left text-white space-y-3 max-w-3xl">
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            {title}
          </h1>

          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm text-gray-200" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 sm:gap-2">
              <li>
                <Link href="/" className="hover:text-[#39B44A]">
                  Home
                </Link>
              </li>
              {segments.map((seg, i) => (
                <li
                  key={i}
                  className="flex items-center gap-1 sm:gap-2"
                >
                  <span className="text-gray-400">→</span>
                  {i === segments.length - 1 ? (
                    <span className="font-medium text-[#39B44A]">
                      {seg.charAt(0).toUpperCase() + seg.slice(1)}
                    </span>
                  ) : (
                    <Link
                      href={`/${segments.slice(0, i + 1).join('/')}`}
                      className="hover:text-[#39B44A]"
                    >
                      {seg.charAt(0).toUpperCase() + seg.slice(1)}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  )
}

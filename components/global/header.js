'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaArrowRight,
} from 'react-icons/fa'

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [showSticky, setShowSticky] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Scroll listener for sticky header
  useEffect(() => {
    let timeout
    const handleScroll = () => {
      if (window.scrollY > 120) {
        if (!timeout) timeout = setTimeout(() => setShowSticky(true), 400)
      } else {
        clearTimeout(timeout)
        timeout = null
        setShowSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // NavLink component
  const NavLink = ({ href, children }) => {
    const active = pathname === href
    return (
      <Link
        href={href}
        className={`relative transition-colors duration-300 hover:text-[#39B44A] ${
          active ? 'text-[#39B44A] font-semibold' : ''
        }`}
        onClick={() => setMobileOpen(false)}
      >
        {children}
        {active && (
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#39B44A] rounded"></span>
        )}
      </Link>
    )
  }

  // Desktop navigation
  const BottomNav = (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="hidden md:flex items-center justify-between w-full gap-6">
        <nav
          className={`flex items-center gap-10 font-medium ${
            isHome ? 'text-white' : 'text-[#010B07]'
          }`}
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/invest-with-us">Invest With Us</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>

        <div className="flex items-center gap-6">
          {!isHome && (
            <div className="flex items-center gap-2 pl-6 border-l border-black/20">
              <FaPhoneAlt className="text-sm" />
              <a href="tel:+2348000000000" className="font-medium whitespace-nowrap">
                +234 800 000 0000
              </a>
            </div>
          )}

          {isHome && (
            <Link
              href="/contact"
              className="group relative overflow-hidden border border-white rounded-full inline-flex items-center gap-2 px-6 py-3 text-base sm:text-lg text-white font-medium transition-colors duration-300"
            >
              <span className="relative z-10">Apply for a Loan</span>
              <FaArrowRight className="relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-[#39B44A] translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            </Link>
          )}
        </div>
      </div>

      {/* Hamburger for mobile */}
      <button
        className={`md:hidden ml-auto text-2xl ${isHome ? 'text-white' : 'text-black'}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  )

  // Logo handling
  const mainLogo = isHome ? '/rhynocredit.png' : '/Rhyno.png'
  const stickyLogo = '/rhynocredit.png'

  return (
    <>
      {/* Main header */}
      <header
        className={`w-full z-40 ${
          isHome
            ? 'absolute top-0 left-0 bg-transparent'
            : 'relative bg-white border-b border-black/10'
        }`}
      >
        <div className="grid grid-cols-[200px_1fr] border-b border-black/10 w-full">
          {/* Logo */}
          <div className="flex items-center justify-end border-r border-black/10 bg-transparent pt-8 px-4 h-20">
            <Link href="/" className="block">
              <Image
                src={mainLogo}
                alt="Rhyno Credit Logo"
                width={180}
                height={90}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Right column */}
          <div className="flex flex-col w-full">
            {isHome && (
              <div className="hidden lg:block bg-[#052D1B] text-[#FBFCFD] text-sm">
                <div className="flex flex-wrap items-center justify-between px-6 py-2 gap-4">
                  <div className="flex flex-wrap items-center gap-6">
                    <span className="flex items-center gap-1 whitespace-nowrap">
                      <FaMapMarkerAlt className="text-sm" /> Lagos, Nigeria
                    </span>
                    <a
                      href="mailto:info@rhynocredit.com"
                      className="flex items-center gap-1 hover:underline whitespace-nowrap"
                    >
                      <FaEnvelope className="text-sm" /> info@rhynocredit.com
                    </a>
                    <a
                      href="tel:+2348000000000"
                      className="flex items-center gap-1 hover:underline whitespace-nowrap"
                    >
                      <FaPhoneAlt className="text-sm" /> +234 800 000 0000
                    </a>
                  </div>
                  <div className="flex items-center gap-6">
                    <nav className="flex items-center gap-6">
                      <Link href="/help">Help</Link>
                      <Link href="/about">About</Link>
                      <Link href="/contact">Contact</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                      <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebookF />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div
              className={`${
                isHome
                  ? 'bg-transparent border-b border-white/20'
                  : 'bg-white border-b border-black/10'
              }`}
            >
              {BottomNav}
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-[85%] max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            {/* Logo + close */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/Rhyno.png"
                  alt="Rhyno Credit Logo"
                  width={140}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <button
                className="text-2xl"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
            </nav>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="w-full block text-center px-4 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500 transition"
                onClick={() => setMobileOpen(false)}
              >
                Apply for a Loan
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          ></div>
        )}
      </header>

      {/* Sticky header */}
      {showSticky && (
        <div className="fixed top-0 left-0 right-0 w-full bg-[#010B07]/70 border-b border-black/10 shadow-sm animate-slideDown z-50">
          <div className="grid grid-cols-[200px_1fr] w-full">
            <div className="flex items-center justify-center border-r border-black/10 bg-transparent px-4 h-20">
              <Link href="/" className="block">
                <Image
                  src={stickyLogo}
                  alt="Rhyno Credit Logo"
                  width={140}
                  height={48}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>
            {BottomNav}
          </div>
        </div>
      )}
    </>
  )
}

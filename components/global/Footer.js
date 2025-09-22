'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="text-[#FBFCFD]">
      {/* Top Column */}
      <div className="w-full">
        {/* Tablet (2x2) & Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden">
          {/* Company */}
          <div className="bg-[#010B07] px-6 py-12 flex items-start justify-center md:justify-start">
            <div className="max-w-sm">
              <Image
                src="/rhynocredit.png"
                alt="Rhyno Credit Logo"
                width={160}
                height={56}
                className="mb-4"
              />
              <p className="text-sm mb-6 leading-relaxed">
                Fueling your business journey with fast, flexible SME financing.
              </p>
              <h4 className="font-semibold mb-3 text-lg">Contact Us</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Email:</span>{' '}
                  <a href="mailto:info@rhynocredit.com" className="hover:underline">info@rhynocredit.com</a>
                </p>
                <p><span className="font-semibold">Phone:</span>{' '}
                  <a href="tel:+2348000000000" className="hover:underline">+234 800 000 0000</a>
                </p>
                <p><span className="font-semibold">Address:</span> Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-[#052D1B] px-6 py-12">
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">&gt; Personal Loans</Link></li>
              <li><Link href="#" className="hover:underline">&gt; Gadget Loans</Link></li>
              <li><Link href="#" className="hover:underline">&gt; Business Loans</Link></li>
              <li><Link href="#" className="hover:underline">&gt; AutoMobile Loans</Link></li>
              <li><Link href="#" className="hover:underline">&gt; Mortgage Loans</Link></li>
              <li><Link href="#" className="hover:underline">&gt; SME/Small Business Loans</Link></li>
            </ul>
          </div>

          {/* Pages */}
          <div className="bg-[#052D1B] px-6 py-12">
            <h4 className="font-semibold mb-4 text-lg">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">&gt; Home</Link></li>
              <li><Link href="/about" className="hover:underline">&gt; About Us</Link></li>
              <li><Link href="/invest-with-us" className="hover:underline">&gt; Invest With Us</Link></li>
              <li><Link href="/contact" className="hover:underline">&gt; Contact</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="bg-[#052D1B] px-6 py-12">
            <h4 className="font-semibold mb-4 text-lg">Subscribe</h4>
            <p className="text-sm mb-4 leading-relaxed">
              Join our newsletter for the latest updates on SME financing solutions.
            </p>
            <form className="flex flex-col sm:flex-row mb-6 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full min-w-0 px-3 py-2 text-sm text-black rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none"
              />
              <button
                type="submit"
                className="btn-primary mt-2 sm:mt-0 sm:ml-0 sm:rounded-r-md sm:rounded-l-none px-5 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <h4 className="font-semibold mb-3 text-lg">Follow Us:</h4>
            <div className="flex gap-4 text-lg">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-rc-green"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-rc-green"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-rc-green"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Desktop (lg and up) */}
        <div className="hidden lg:grid grid-cols-[1fr_2fr] w-full">
          {/* Company (black) */}
          <div className="bg-[#010B07] px-6 py-12 flex items-start justify-center lg:justify-start">
            <div className="max-w-sm">
              <Image
                src="/rhynocredit.png"
                alt="Rhyno Credit Logo"
                width={240}
                height={90}
                className="mb-4"
              />
              <p className="text-sm mb-6 leading-relaxed">
                Fueling your business journey with fast, flexible SME financing.
              </p>
              <h4 className="font-semibold mb-3 text-lg">Contact Us</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Email:</span>{' '}
                  <a href="mailto:info@rhynocredit.com" className="hover:underline">info@rhynocredit.com</a>
                </p>
                <p><span className="font-semibold">Phone:</span>{' '}
                  <a href="tel:+2348000000000" className="hover:underline">+234 800 000 0000</a>
                </p>
                <p><span className="font-semibold">Address:</span> Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Services + Pages + Subscribe (green) */}
          <div className="bg-[#052D1B] px-6 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10">
              {/* Services */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:underline">&gt; Personal Loans</Link></li>
                  <li><Link href="#" className="hover:underline">&gt; Gadget Loans</Link></li>
                  <li><Link href="#" className="hover:underline">&gt; Business Loans</Link></li>
                  <li><Link href="#" className="hover:underline">&gt; AutoMobile Loans</Link></li>
                  <li><Link href="#" className="hover:underline">&gt; Mortgage Loans</Link></li>
                  <li><Link href="#" className="hover:underline">&gt; SME/Small Business Loans</Link></li>
                </ul>
              </div>

              {/* Pages */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">Pages</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:underline">&gt; Home</Link></li>
                  <li><Link href="/about" className="hover:underline">&gt; About Us</Link></li>
                  <li><Link href="/invest-with-us" className="hover:underline">&gt; Invest With Us</Link></li>
                  <li><Link href="/contact" className="hover:underline">&gt; Contact</Link></li>
                </ul>
              </div>

              {/* Subscribe */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">Subscribe</h4>
                <p className="text-sm mb-4 leading-relaxed">
                  Join our newsletter for the latest updates on SME financing solutions.
                </p>
                <form className="flex flex-col sm:flex-row mb-6 w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 w-full min-w-0 px-3 py-2 text-sm text-gray-500 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="btn-primary mt-2 sm:mt-0 sm:ml-0 sm:rounded-r-md sm:rounded-l-none px-5 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
                <h4 className="font-semibold mb-3 text-lg">Follow Us:</h4>
                <div className="flex gap-4 text-lg">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-rc-green"><FaFacebookF /></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-rc-green"><FaInstagram /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-rc-green"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Column */}
      <div className="bg-[#010B07] border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 text-sm text-center md:text-left">
          <p className="mb-2 md:mb-0">
            Copyright © {new Date().getFullYear()} Rhyno Credit. All Rights Reserved. Developed by{' '}
            <Link href="https://omoolaex.com.ng" target="_blank" rel="noreferrer">
              <span className="underline text-[#39B44A] hover:text-white">OmoolaEx</span>
            </Link>
            .
          </p>
          <div className="flex gap-4">
            <Link href="/legal#terms" className="hover:underline">Terms & Conditions</Link>
            <span className="text-white/40">|</span>
            <Link href="/legal#privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

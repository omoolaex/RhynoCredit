'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa'

const teamMembers = [
  {
    name: 'Ezekiel Oduko',
    role: 'Founder & CEO',
    image: '/images/about-ceo.png',
    socials: {
      linkedin: '#',
      twitter: '#',
      facebook: '#',
    },
  },
  {
    name: 'Chinedu Okafor',
    role: 'Head of Operations',
    image: '/images/team-2.jpg',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Amaka Bello',
    role: 'Customer Experience Lead',
    image: '/images/team-3.jpg',
    socials: {
      linkedin: '#',
    },
  },
  // 👉 Add more members here...
]

export default function TeamSection() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Heading Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block border border-black rounded-full px-3 py-1 text-[#39B44A] font-semibold uppercase text-xs sm:text-sm">
            Meet the Team
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#010B07]">
            The People Behind RhynoCredit
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Our dedicated team works tirelessly to deliver transparent, reliable, and people-first credit
            solutions that help Nigerians achieve their goals.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6"
            >
              {/* Image */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name + Role */}
              <h3 className="mt-4 text-lg font-semibold text-[#010B07]">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{member.role}</p>

              {/* Socials */}
              <div className="mt-3 flex gap-3">
                {member.socials?.linkedin && (
                  <Link
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#39B44A]/10 rounded-full text-[#39B44A] hover:bg-[#39B44A] hover:text-white transition"
                  >
                    <FaLinkedinIn size={14} />
                  </Link>
                )}
                {member.socials?.twitter && (
                  <Link
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#39B44A]/10 rounded-full text-[#39B44A] hover:bg-[#39B44A] hover:text-white transition"
                  >
                    <FaTwitter size={14} />
                  </Link>
                )}
                {member.socials?.facebook && (
                  <Link
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#39B44A]/10 rounded-full text-[#39B44A] hover:bg-[#39B44A] hover:text-white transition"
                  >
                    <FaFacebookF size={14} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#39B44A] text-[#39B44A] font-semibold rounded-full hover:bg-[#39B44A] hover:text-white transition-colors duration-200"
          >
            Join Our Team
            <span className="text-sm">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}

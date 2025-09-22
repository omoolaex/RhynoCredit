// components/contact/OfficeLocation.jsx
"use client";

import Image from "next/image";

export default function OfficeLocation() {
  return (
    <section className="bg-[#FBFCFD] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#010B07]">
            Our Office
          </h2>
          <p className="mt-4 text-[#052D1B]">
            RhynoCredit HQ <br />
            Lagos, Nigeria <br />
            (Insert full office address here)
          </p>
        </div>
        <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden">
          {/* Replace this with Google Maps embed or static image */}
          <Image
            src="/images/contact/map-placeholder.jpg"
            alt="RhynoCredit Office Map"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

// components/contact/ContactForm.jsx
"use client";

export default function ContactForm() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#010B07] text-center">
          Send Us a Message
        </h2>

        <form
          action="mailto:support@rhynocredit.com"
          method="POST"
          encType="text/plain"
          className="mt-10 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#39B44A]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#39B44A]"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (optional)"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#39B44A]"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#39B44A]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#39B44A]"
          ></textarea>

          <button
            type="submit"
            className="w-full py-4 rounded-lg bg-[#39B44A] text-white font-semibold hover:bg-[#2f9d3e] transition"
          >
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
}

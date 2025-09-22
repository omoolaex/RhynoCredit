// components/careers/OpenRoles.jsx
"use client";

export default function OpenRoles() {
  const jobs = [
    {
      title: "Business Development Officer",
      location: "Lagos",
      type: "Full-Time",
      description:
        "Identify and pursue new business opportunities, build relationships, and drive loan product adoption.",
      applyLink: "mailto:careers@rhynocredit.com?subject=Application%20-%20Business%20Development%20Officer",
    },
    {
      title: "Customer Success Intern",
      location: "Remote",
      type: "Internship",
      description:
        "Assist with onboarding, customer support, and feedback collection while gaining fintech experience.",
      applyLink: "mailto:careers@rhynocredit.com?subject=Application%20-%20Customer%20Success%20Intern",
    },
    {
      title: "Credit Analyst",
      location: "Lagos",
      type: "Full-Time",
      description:
        "Evaluate loan applications, assess credit risk, and support scalable lending processes.",
      applyLink: "mailto:careers@rhynocredit.com?subject=Application%20-%20Credit%20Analyst",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#010B07]">
            Open Roles
          </h2>
          <p className="mt-4 text-[#052D1B] text-base sm:text-lg max-w-3xl mx-auto">
            Explore our current opportunities and join us in empowering
            Nigerians through financial inclusion.
          </p>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <div
                key={index}
                className="flex flex-col justify-between p-6 bg-[#FBFCFD] rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#010B07]">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#052D1B]">
                    📍 {job.location} | {job.type}
                  </p>
                  <p className="mt-4 text-[#052D1B] text-base leading-relaxed">
                    {job.description}
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href={job.applyLink}
                    className="inline-block px-6 py-3 rounded-xl bg-[#39B44A] text-white font-semibold hover:bg-[#2f9d3e] transition"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <p className="text-lg text-[#052D1B]">
                Currently no open positions. Stay tuned or drop us your CV —
                we’d love to hear from you.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

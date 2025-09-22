// app/legal/page.jsx
"use client";

import { useEffect, useState } from "react";
import PageHero from "@/components/global/pageHero";
import LegalSidebar from "@/components/Legal/LegalSidebar";
import LegalSection from "@/components/Legal/LegalSection";

const sections = [
  { id: "regulatory", label: "Regulatory Compliance" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "terms", label: "Terms & Conditions" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "cookies", label: "Cookie Policy" },
  { id: "responsible", label: "Responsible Lending" },
  { id: "security", label: "Security & Trust" },
  { id: "contact", label: "Legal Contact" },
];

export default function LegalPage() {
  const [active, setActive] = useState(sections[0].id);

  // Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let current = active;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          current = section.id;
        }
      });

      if (current !== active) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return (
    <>
      <PageHero title="Legal" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar */}
        <LegalSidebar sections={sections} active={active} />

        {/* Content */}
        <div className="lg:col-span-3 space-y-20">
          <LegalSection id="regulatory" title="Regulatory Compliance">
            <p>
              At RhynoCredit, compliance isn’t optional — it’s who we are.
              We operate under the following licenses and regulatory bodies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Central Bank of Nigeria (CBN) Licensed</li>
              <li>NDIC Insured</li>
              <li>Lagos State Money Lending License</li>
              <li>FCCPC & NDPC Compliance</li>
            </ul>
          </LegalSection>

          <LegalSection id="disclaimers" title="Disclaimers">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Loan Risk Disclaimer:</strong> Borrowing involves a
                financial obligation.
              </li>
              <li>
                <strong>Data Use Disclaimer:</strong> We collect and use your
                data only in line with applicable laws.
              </li>
              <li>
                <strong>Consumer Protection Commitment:</strong> We adhere to
                FCCPC regulations.
              </li>
            </ul>
          </LegalSection>

          <LegalSection
            id="terms"
            title="Terms & Conditions"
            link={{ href: "/legal/terms", label: "Read Full Terms & Conditions" }}
          >
            <p>
              By applying for or accessing credit with RhynoCredit, you agree to
              provide accurate information, repay loans as agreed, use credit
              responsibly, and abide by Nigerian law.
            </p>
          </LegalSection>

          <LegalSection
            id="privacy"
            title="Privacy Policy"
            link={{ href: "/legal/privacy", label: "Read Full Privacy Policy" }}
          >
            <p>
              We explain what information we collect, how we use it, how we
              protect it, and your rights to access, correct, or delete your
              data.
            </p>
          </LegalSection>

          <LegalSection
            id="cookies"
            title="Cookie Policy"
            link={{ href: "/legal/cookies", label: "Read Full Cookie Policy" }}
          >
            <p>
              We use cookies to improve your experience, including essential,
              performance, and preference cookies.
            </p>
          </LegalSection>

          <LegalSection id="responsible" title="Responsible Lending">
            <p>
              We conduct affordability checks, avoid predatory practices, and
              commit to supporting financial growth without creating burden.
            </p>
          </LegalSection>

          <LegalSection id="security" title="Security & Trust">
            <p>
              All transactions are encrypted, data is stored securely, and
              regular audits ensure compliance with NDPC guidelines.
            </p>
          </LegalSection>

          <LegalSection id="contact" title="Legal Contact">
            <p>Questions about compliance or our policies? We’re here to help.</p>
            <a
              href="mailto:legal@rhynocredit.com"
              className="mt-4 inline-block px-6 py-3 rounded-xl bg-[#39B44A] text-white font-semibold hover:bg-[#2f9d3e] transition"
            >
              Contact Our Legal Team
            </a>
          </LegalSection>
        </div>
      </div>
    </>
  );
}

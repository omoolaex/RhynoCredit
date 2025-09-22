// components/legal/LegalSidebar.jsx
"use client";

export default function LegalSidebar({ sections, active }) {
  return (
    <aside className="lg:col-span-1 lg:sticky lg:top-24 self-start bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <nav className="space-y-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block text-sm font-medium transition ${
              active === section.id
                ? "text-[#39B44A]"
                : "text-[#052D1B] hover:text-[#39B44A]"
            }`}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

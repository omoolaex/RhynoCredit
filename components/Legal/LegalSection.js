// components/legal/LegalSection.jsx
"use client";

export default function LegalSection({ id, title, children, link }) {
  return (
    <section id={id} className="space-y-4">
      <h2 className="text-2xl font-bold text-[#010B07]">{title}</h2>
      <div className="text-[#052D1B] leading-relaxed">{children}</div>
      {link && (
        <a
          href={link.href}
          className="mt-2 inline-block text-[#39B44A] font-semibold hover:underline"
        >
          {link.label} →
        </a>
      )}
    </section>
  );
}

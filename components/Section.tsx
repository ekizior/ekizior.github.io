import type { ReactNode } from "react";

type SectionProps = { id: string; title: string; children: ReactNode };

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="mt-16">
      <h2
        id={headingId}
        className="mb-6 border-b border-line pb-2 font-mono text-xs uppercase tracking-widest text-heading"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

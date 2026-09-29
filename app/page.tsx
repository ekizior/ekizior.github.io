import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { content, type Picture, type Project } from "@/content";
import { FeaturedProject } from "@/components/FeaturedProject";
import { LedgerRow } from "@/components/LedgerRow";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";

const linkClass =
  "text-heading underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:decoration-current";

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`${linkClass} inline-flex items-center gap-0.5`}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
      {external && <ArrowUpRight aria-hidden="true" className="size-3.5" />}
    </a>
  );
}

function ProjectTitle({ title, url }: Project) {
  return url ? <TextLink href={url}>{title}</TextLink> : title;
}

function ProjectDetails({ description, tags }: Project) {
  return (
    <>
      <p className="mt-2 text-sm">{description}</p>
      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </ul>
    </>
  );
}

export default function Home() {
  const { footer, photo } = content;
  const featured = content.projects.filter(
    (project): project is Project & { image: Picture } => project.image !== undefined,
  );
  const more = content.projects.filter((project) => !project.image);
  return (
    <div className="mx-auto max-w-[680px] px-6 py-20 sm:py-28">
      <header>
        <div className="flex items-center gap-5">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={88}
            height={88}
            priority
            className="size-22 shrink-0 rounded-full border border-line object-cover"
          />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-heading">{content.name}</h1>
            <p className="mt-1">{content.tagline}</p>
            <p className="mt-1 font-mono text-xs">{content.location}</p>
          </div>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {content.links.map((link) => (
            <li key={link.label}>
              <TextLink href={link.href}>{link.label}</TextLink>
            </li>
          ))}
        </ul>
      </header>

      <main>
        <Section id="about" title="About">
          <p>{content.about}</p>
        </Section>

        <Section id="experience" title="Experience">
          <ul className="space-y-8">
            {content.experience.map((item) => (
              <LedgerRow
                key={`${item.role}-${item.org}`}
                heading={`${item.role} · ${item.org}`}
                period={item.period}
              >
                {item.note && <p className="mt-2 text-sm">{item.note}</p>}
              </LedgerRow>
            ))}
          </ul>
        </Section>

        <Section id="featured-projects" title="Featured Projects">
          <ul className="space-y-10">
            {featured.map((project) => (
              <FeaturedProject
                key={project.title}
                heading={<ProjectTitle {...project} />}
                year={project.year}
                image={project.image}
              >
                <ProjectDetails {...project} />
              </FeaturedProject>
            ))}
          </ul>
        </Section>

        <Section id="more-projects" title="More Projects">
          <ul className="space-y-8">
            {more.map((project) => (
              <LedgerRow
                key={project.title}
                heading={<ProjectTitle {...project} />}
                period={{ start: project.year }}
              >
                <ProjectDetails {...project} />
              </LedgerRow>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education">
          <ul className="space-y-6">
            {content.education.map((item) => (
              <LedgerRow key={item.role} heading={`${item.role} · ${item.org}`} period={item.period}>
                {item.note && <p className="mt-2 text-sm">{item.note}</p>}
              </LedgerRow>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="mt-20 border-t border-line pt-6 font-mono text-xs">
        {footer.copyright} · Last updated{" "}
        <time dateTime={footer.updated.dateTime}>{footer.updated.label}</time> · {footer.signoff}
      </footer>
    </div>
  );
}

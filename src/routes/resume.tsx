import { Link } from "@tanstack/react-router";

import { Border } from "../components/border";
import useDynamicFavicon from "../hooks/use-dynamic-favicon";

export default function Resume() {
  useDynamicFavicon();

  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      <Border />

      <main className="gradient-overlay no-scrollbar absolute inset-0 overflow-y-auto">
        <div className="mx-auto flex w-full max-w-4xl flex-col px-6 py-24 md:px-12">
          {/* Navigation */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="font-camino-slim text-lg opacity-70 transition-opacity hover:opacity-100"
            >
              &larr; Back home
            </Link>
            <a
              href="/jack-novotny-resume.pdf"
              download
              className="font-camino-slim text-lg opacity-70 transition-opacity hover:opacity-100"
            >
              Download PDF version &darr;
            </a>
          </div>

          {/* Header */}
          <header className="mb-16">
            <h1 className="font-camino-bold mb-4 text-5xl md:text-7xl">
              Jack Novotny
            </h1>
            <div className="font-camino-slim flex flex-col gap-2 text-xl md:flex-row md:gap-6">
              <span>Denver, CO / SF / NYC</span>
              <a
                href="mailto:jack@cowboy.dev"
                className="underline decoration-2 underline-offset-4"
              >
                jack@cowboy.dev
              </a>
              <a
                href="https://github.com/hexcowboy"
                className="underline decoration-2 underline-offset-4"
              >
                GitHub
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-16">
            <p className="font-camino text-xl leading-relaxed md:text-2xl">
              Versatile fullstack engineer with a track record of building
              foundational products at early stage startups, including
              experience as a solo founder.
            </p>
          </section>

          {/* Divider */}
          <Divider />

          {/* Experience */}
          <section className="mb-16">
            <h2 className="font-camino-bold mb-8 text-3xl md:text-4xl">
              Experience
            </h2>

            <div className="space-y-12">
              <ExperienceItem
                title="Juno"
                url="https://juno.fans"
                dates="May 2025 - Current"
                role="Founder"
                stack="TypeScript, React 19, TanStack Router, Tailwind, Vite, Hono, Drizzle ORM, Postgres, Cloudflare"
                bullets={[
                  "Founded and built from scratch a consumer-based social media platform for content creators as a solo founder.",
                  "Experienced founder challenges such as legal incorporation, banking, payment processing, marketing, design, and engineering.",
                  "Set up systems for reliable payment processing handling orders, chargebacks, refunds, and proper access controls.",
                  "Built low cost solutions for content uploads using cutting edge video transcription software that works in-browser.",
                  "Built an edge-native website and progressive web app with fast load times and resilient error handling.",
                ]}
              />

              <ExperienceItem
                title="Oneleet"
                url="https://oneleet.com"
                dates="February 2024 - May 2025"
                badge="YC S2022"
                role="Fifth hire, Fullstack Engineer"
                stack="TypeScript, Vite, Tailwind, React, Postgres, Go, AWS, Cloudflare"
                bullets={[
                  "Fifth hire fullstack engineer who helped build the core platform and brand new modules for a Cybersecurity startup.",
                  "Created Trust Pages which helped customers show off their security posture to their clients.",
                  "Created multiple modules including compliance program, risk management, vendor management, MDM device management, and more.",
                  "Worked directly with clients to help debug and provide support where needed.",
                  "Helped Security Specialists form core software that helped shape the product.",
                ]}
              />

              <ExperienceItem
                title="ZeroDev"
                url="https://zerodev.app"
                dates="September 2022 - February 2024"
                badge="YC W2023"
                role="Founding Engineer"
                stack="Next.js, Tailwind, TypeScript, Postgres, Ethereum, Render, Supabase"
                bullets={[
                  "Founding engineer who helped build early stage efficient solutions for user-friendly crypto wallet onboarding.",
                  "Built core dashboard for customers to manage their integrations.",
                  "Wrote battle-tested, audited smart contracts which were deployed to the Ethereum mainnet.",
                  "Helped onboard new customers and provide developer documentation.",
                ]}
              />

              <div className="font-camino-slim text-lg opacity-70">
                <p>
                  Previous: Multiple early stage startups, freelance web
                  development.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <Divider />

          {/* Skills */}
          <section className="mb-16">
            <h2 className="font-camino-bold mb-8 text-3xl md:text-4xl">
              Skills
            </h2>

            <div className="font-camino grid gap-4 text-lg md:grid-cols-2">
              <SkillItem label="Frontend development" />
              <SkillItem label="Backend development" />
              <SkillItem label="Infrastructure, Deployment, and CI/CD" />
              <SkillItem label="Integrations development" />
              <SkillItem label="Database design and optimization" />
              <SkillItem label="Engineering management and hiring" />
            </div>
          </section>

          {/* Divider */}
          <Divider />

          {/* Tools & Education */}
          <section className="mb-16 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-camino-bold mb-6 text-3xl md:text-4xl">
                Favorite Tools
              </h2>
              <ul className="font-camino-slim space-y-2 text-xl">
                <li>Neovim</li>
                <li>Claude Code</li>
                <li>Cursor</li>
              </ul>
            </div>

            <div>
              <h2 className="font-camino-bold mb-6 text-3xl md:text-4xl">
                Education
              </h2>
              <p className="font-camino-slim text-xl">
                UC Berkeley Extension, 2021
                <br />
                <span className="opacity-70">Certificate in Cybersecurity</span>
              </p>
            </div>
          </section>

          {/* Footer decoration */}
          <div className="font-camino-caps mt-8 mb-16 flex justify-center text-center text-sm tracking-widest opacity-50">
            * * *
          </div>
        </div>
      </main>
    </div>
  );
}

function Divider() {
  return (
    <div className="mb-16 flex items-center gap-4">
      <div className="h-px flex-1 bg-current opacity-20" />
      <span className="font-camino-caps text-sm tracking-widest opacity-40">
        &bull;
      </span>
      <div className="h-px flex-1 bg-current opacity-20" />
    </div>
  );
}

function ExperienceItem({
  title,
  url,
  dates,
  badge,
  role,
  stack,
  bullets,
}: {
  title: string;
  url: string;
  dates: string;
  badge?: string;
  role: string;
  stack: string;
  bullets: string[];
}) {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h3 className="font-camino-bold text-2xl md:text-3xl">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 underline-offset-4"
          >
            {title}
          </a>
        </h3>
        {badge && (
          <span className="font-camino-caps rounded border border-current px-2 py-0.5 text-xs tracking-wider opacity-70">
            {badge}
          </span>
        )}
      </div>

      <div className="font-camino-slim mb-4 flex flex-col gap-1 text-lg opacity-80 md:flex-row md:gap-4">
        <span>{role}</span>
        <span className="hidden md:inline">&middot;</span>
        <span>{dates}</span>
      </div>

      <ul className="font-camino mb-4 list-inside space-y-2 text-base leading-relaxed md:text-lg">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-50" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <p className="font-camino-slim text-sm opacity-60">
        <span className="font-camino-caps tracking-wider">Stack:</span> {stack}
      </p>
    </div>
  );
}

function SkillItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 rounded-full bg-current opacity-30" />
      <span>{label}</span>
    </div>
  );
}

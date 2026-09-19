import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product – MIRAAS Space",
  description:
    "An independent integrity layer on top of what you already have. Software-only GNSS position validation.",
};

const dataSources = [
  "GNSS observables",
  "AIS feeds",
  "Vessel sensors",
  "Reference data",
];

const outputs = [
  { label: "Trust / risk score", color: "border-cyan-400/40 text-cyan-400" },
  { label: "Real-time alerts", color: "border-yellow-400/40 text-yellow-300" },
  { label: "Evidence trail", color: "border-purple-400/40 text-purple-400" },
  { label: "Incident history", color: "border-teal-400/40 text-teal-400" },
];

const benefits = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "No additional hardware",
    description:
      "Deploys as a software layer using your vessel's existing GNSS receivers, AIS, and ship data network. No installation. No dry-dock.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Explainable output",
    description:
      "Every trust score is backed by a complete evidence chain showing which signals contributed, and why. Operators and auditors get the reasoning, not just a number.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Operational decision support",
    description:
      "Designed to help operators decide whether to trust, verify, or act on positioning data. Clear outputs that fit existing bridge and fleet workflows.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Works across your fleet",
    description:
      "Monitors multiple vessels simultaneously and delivers fleet-level situational awareness — not just individual ship readouts.",
  },
];

export default function ProductPage() {
  return (
    <main className="flex-1">
      {/* ─── The Solution ─── */}
      <section className="bg-navy-950 px-4 py-16 pt-20 sm:px-6 sm:py-24 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
            The Solution
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            AN INDEPENDENT INTEGRITY LAYER
            <br />
            ON TOP OF WHAT YOU ALREADY HAVE.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400">
            MIRAAS Space is a software-only platform. It integrates with existing
            vessel infrastructure, fuses independent data sources, and produces a
            continuously updated trust score with supporting evidence and alerts.
          </p>

          {/* Data Flow Diagram */}
          <div className="mt-14 rounded-xl border border-navy-600/50 bg-navy-900/40 px-6 py-10 sm:px-10">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              {/* Data Sources */}
              <div>
                <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
                  Data Sources
                </p>
                <div className="flex flex-col gap-3">
                  {dataSources.map((source) => (
                    <div
                      key={source}
                      className="rounded-lg border border-navy-600/50 bg-navy-800/60 px-4 py-3 text-sm text-gray-300"
                    >
                      {source}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden items-center justify-center md:flex">
                <svg className="h-5 w-12 text-cyan-400/50" fill="none" viewBox="0 0 48 20">
                  <line x1="0" y1="10" x2="40" y2="10" stroke="currentColor" strokeWidth="2" />
                  <polygon points="40,5 48,10 40,15" fill="currentColor" />
                </svg>
              </div>

              {/* Engine */}
              <div className="flex items-center justify-center">
                <div className="rounded-xl border border-cyan-400/30 bg-navy-800/80 px-8 py-6 text-center">
                  <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                    MIRAAS Space Engine
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    Cross-validation
                    <br />
                    &amp; signal fusion
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden items-center justify-center md:flex">
                <svg className="h-5 w-12 text-cyan-400/50" fill="none" viewBox="0 0 48 20">
                  <line x1="0" y1="10" x2="40" y2="10" stroke="currentColor" strokeWidth="2" />
                  <polygon points="40,5 48,10 40,15" fill="currentColor" />
                </svg>
              </div>

              {/* Outputs */}
              <div>
                <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
                  Outputs
                </p>
                <div className="flex flex-col gap-3">
                  {outputs.map((output) => (
                    <div
                      key={output.label}
                      className={`rounded-lg border bg-navy-800/60 px-4 py-3 text-sm font-medium ${output.color}`}
                    >
                      {output.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Key Benefits ─── */}
      <section className="bg-navy-900/40 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
            Key Benefits
          </p>
          <h2 className="mb-12 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            BUILT FOR MARITIME OPERATIONS. NOT THE LAB.
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-navy-600/50 bg-navy-950/60 p-7 transition-colors hover:border-navy-500/60"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-navy-800 text-cyan-400">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        id="pilot"
        className="bg-navy-950 px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            READY TO KNOW WHAT
            <br />
            YOU CAN TRUST?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-400">
            We&apos;re running pilots with maritime operators now. Pilots take
            two to four weeks, use your existing data, and are scoped around your
            operational context.
          </p>
          <div className="mt-10">
            <Link
              href="/product#pilot"
              className="inline-block rounded-full bg-cyan-400 px-10 py-4 text-base font-semibold text-navy-950 transition-colors hover:bg-cyan-300"
            >
              Request a Pilot
            </Link>
          </div>
          <p className="mt-4 font-mono text-xs tracking-wider text-gray-600">
            No hardware. No long procurement. Live within two weeks.
          </p>
        </div>
      </section>
    </main>
  );
}

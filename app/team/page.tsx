import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team – VeridianNav",
  description:
    "Meet the founders behind VeridianNav — building GNSS integrity intelligence for maritime operations.",
};

/*
 * ─────────────────────────────────────────────
 *  REPLACE THE DETAILS BELOW WITH REAL DATA
 * ─────────────────────────────────────────────
 *  • image  → swap the SVG path for a real photo (e.g. "/founders/jane.jpg")
 *  • name   → founder's full name
 *  • role   → title / function
 *  • bio    → short paragraph about the person
 *  • linkedin → full URL (or remove the field to hide the link)
 */
const founders = [
  {
    image: "/founder-1.svg",
    name: "Founder Name One",
    role: "CEO & Co-Founder",
    bio: "Brief biography goes here. Describe background, expertise in maritime or GNSS technology, and what drives them to solve this problem.",
    linkedin: "https://linkedin.com/in/placeholder",
  },
  {
    image: "/founder-2.svg",
    name: "Founder Name Two",
    role: "CTO & Co-Founder",
    bio: "Brief biography goes here. Highlight technical background, signal processing experience, or relevant domain knowledge.",
    linkedin: "https://linkedin.com/in/placeholder",
  },
  {
    image: "/founder-3.svg",
    name: "Founder Name Three",
    role: "COO & Co-Founder",
    bio: "Brief biography goes here. Cover operations expertise, shipping industry experience, or commercial background.",
    linkedin: "https://linkedin.com/in/placeholder",
  },
];

export default function TeamPage() {
  return (
    <main className="flex-1">
      {/* ─── Header ─── */}
      <section className="bg-navy-950 px-4 pt-20 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
            Our Team
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            THE PEOPLE BEHIND
            <br />
            VERIDIANNAV.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400">
            We&apos;re a team of maritime technologists, signal processing
            engineers, and operational experts united by one goal — giving vessel
            operators reliable answers about their positioning data.
          </p>
        </div>
      </section>

      {/* ─── Founders Grid ─── */}
      <section className="bg-navy-900/40 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="group rounded-xl border border-navy-600/50 bg-navy-950/60 overflow-hidden transition-colors hover:border-navy-500/60"
              >
                {/* Photo — replace the SVG files in /public with real images */}
                <div className="relative aspect-square w-full overflow-hidden bg-navy-800">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-cyan-400">
                    {founder.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {founder.bio}
                  </p>

                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-cyan-400"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mission / Values ─── */}
      <section className="bg-navy-950 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                Our Mission
              </p>
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                MAKING POSITION INTEGRITY
                <br />
                THE DEFAULT, NOT THE EXCEPTION.
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-6">
              {[
                {
                  label: "Transparency",
                  text: "Every output is explainable. We believe operators deserve to see the evidence, not just a score.",
                },
                {
                  label: "Maritime-first",
                  text: "We build for the bridge, the fleet desk, and the safety office — not the research lab.",
                },
                {
                  label: "Independence",
                  text: "Our validation layer is independent of the systems it monitors. That independence is what makes it trustworthy.",
                },
              ].map((v) => (
                <div key={v.label} className="flex gap-4">
                  <div className="mt-1.5 flex-shrink-0">
                    <span className="block h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{v.label}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

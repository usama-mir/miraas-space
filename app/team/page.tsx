import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team – MIRAAS Space",
  description:
    "Meet the founders behind MIRAAS Space — building GNSS integrity intelligence for maritime operations.",
};

const founders = [
  {
    image: "/Mazdak.jpg",
    name: "Mazdak Rahimzadeh",
    role: "CEO",
  },
  {
    image: "/Usama.jpg",
    name: "Usama Mir",
    role: "CFO & CTO",
  },
  {
    image: "/Samer.png",
    name: "Samer Asad",
    role: "COO",
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
            MIRAAS SPACE.
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

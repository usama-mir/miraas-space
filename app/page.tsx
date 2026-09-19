import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-navy-950 px-4 pb-8 pt-12 sm:px-6 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-navy-800/60 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                  GNSS Integrity · Maritime
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                KNOW WHEN YOU
                <br />
                CAN TRUST YOUR
                <br />
                <span className="text-cyan-400">VESSEL POSITION.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
                GNSS jamming and spoofing can make a vessel&apos;s positioning
                data unreliable — while onboard instruments continue to show a
                normal readout. MIRAAS Space continuously validates position data
                against independent sources so your operators always know whether
                to act on what the chart shows.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/product#pilot"
                  className="rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-cyan-300"
                >
                  Request a Pilot
                </Link>
                <Link
                  href="/product"
                  className="group flex items-center gap-2 rounded-full border border-navy-600 px-7 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
                >
                  See how it works
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Map Visualization */}
            <div className="relative">
              <div className="rounded-xl border border-navy-600/50 bg-navy-900/80 p-4 shadow-2xl shadow-cyan-400/5">
                <div className="mb-3">
                  <span className="font-mono text-xs tracking-[0.15em] text-gray-500 uppercase">
                    Live — Eastern Med Sector
                  </span>
                </div>

                <div className="relative h-64 overflow-hidden rounded-lg bg-navy-950 sm:h-80">
                  <svg
                    className="absolute inset-0 h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="rgba(30,58,95,0.3)"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>

                  <svg
                    className="absolute inset-0 h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 60 200 Q 150 180 200 150 Q 260 110 320 100 Q 380 90 450 120"
                      fill="none"
                      stroke="rgba(34,211,238,0.4)"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                    />
                    <circle cx="100" cy="192" r="3" fill="#22d3ee" opacity="0.5" />
                    <circle cx="200" cy="150" r="3" fill="#22d3ee" opacity="0.5" />
                    <circle cx="320" cy="100" r="3" fill="#22d3ee" opacity="0.6" />
                    <circle cx="420" cy="115" r="4" fill="#22d3ee" />
                    <polygon points="95,188 105,188 100,180" fill="#22d3ee" opacity="0.6" />
                    <polygon points="415,111 425,111 420,103" fill="#22d3ee" />
                  </svg>

                  <div className="absolute right-12 top-16 rounded border border-red-500/40 bg-red-500/10 px-3 py-1.5 sm:right-16 sm:top-20">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-red-400 uppercase">
                      Spoofing Detected
                    </span>
                  </div>

                  <div className="absolute bottom-16 left-16 sm:left-24 sm:bottom-12">
                    <div className="rounded-lg border border-cyan-400/30 bg-navy-800/90 px-3 py-2 text-center backdrop-blur-sm">
                      <div className="font-mono text-[9px] tracking-wider text-gray-500 uppercase">
                        Trust Score
                      </div>
                      <div className="text-2xl font-bold text-emerald-400">88</div>
                    </div>
                  </div>

                  <div className="absolute bottom-12 right-8 sm:right-16 sm:bottom-8">
                    <div className="rounded-lg border border-orange-400/30 bg-navy-800/90 px-3 py-2 text-center backdrop-blur-sm">
                      <div className="font-mono text-[9px] tracking-wider text-gray-500 uppercase">
                        Trust Score
                      </div>
                      <div className="text-2xl font-bold text-orange-400">31</div>
                      <div className="font-mono text-[8px] tracking-wider text-orange-400/70 uppercase">
                        Suspect
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-2 font-mono text-[9px] text-gray-600">
                    34°N 31°E
                  </div>
                  <div className="absolute bottom-2 right-2 font-mono text-[9px] text-gray-600">
                    34.2°N 33°E
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mx-auto mt-12 max-w-7xl border-t border-navy-700/50 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase">
              <svg className="h-3.5 w-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              3 Letters of Intent Received
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              MVP Development Underway
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase">
              <svg className="h-3.5 w-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              First Maritime Dataset Received
            </div>
          </div>
        </div>
      </section>

      {/* ─── Key Stats (condensed from Problem section) ─── */}
      <section className="bg-navy-900/40 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              GNSS interference is growing. The industry isn&apos;t ready.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-xl border border-navy-600/50 bg-navy-900/60 px-6 py-6 text-center">
              <span className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                ~1,600
              </span>
              <p className="mt-2 text-sm text-gray-400">
                GNSS interference incidents reported globally in 2023
              </p>
            </div>
            <div className="rounded-xl border border-navy-600/50 bg-navy-900/60 px-6 py-6 text-center">
              <span className="text-3xl font-bold text-orange-400 sm:text-4xl">
                68%
              </span>
              <p className="mt-2 text-sm text-gray-400">
                of spoofing events go undetected by standard onboard receivers
              </p>
            </div>
            <div className="rounded-xl border border-navy-600/50 bg-navy-900/60 px-6 py-6 text-center">
              <span className="text-3xl font-bold text-yellow-300 sm:text-4xl">
                3 regions
              </span>
              <p className="mt-2 text-sm text-gray-400">
                Baltic, Eastern Med, Black Sea — highest risk corridors in Europe
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/gnss-interference"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Learn more about GNSS interference
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Who It's For (condensed) ─── */}
      <section className="bg-navy-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Built for the people who depend on position.
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                label: "Fleet Operations Teams",
                color: "text-cyan-400",
                text: "Continuous fleet-wide position integrity monitoring. Immediate visibility when any vessel is operating in a degraded or suspect GNSS environment.",
              },
              {
                label: "Marine Safety Officers",
                color: "text-purple-400",
                text: "Documented evidence of position integrity for each voyage. Supports ISM Code requirements, safety management, and incident investigation.",
              },
              {
                label: "Technical & Digital Leads",
                color: "text-orange-400",
                text: "Software-only deployment via standard maritime protocols. Integrates with existing ECDIS, VDR, and fleet management infrastructure.",
              },
            ].map((a) => (
              <div
                key={a.label}
                className="rounded-xl border border-navy-600/50 bg-navy-900/50 p-7 transition-colors hover:border-navy-500/60"
              >
                <p className={`mb-3 text-xs font-semibold tracking-[0.2em] uppercase ${a.color}`}>
                  {a.label}
                </p>
                <p className="text-sm leading-relaxed text-gray-400">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

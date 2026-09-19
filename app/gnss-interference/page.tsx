import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GNSS Interference – MIRAAS Space",
  description:
    "GNSS interference is growing. Onboard alarms aren't enough. Learn about the accelerating threat to maritime positioning.",
};

const stats = [
  {
    value: "~1,600",
    color: "text-cyan-400",
    description: "GNSS interference incidents reported globally in 2023",
  },
  {
    value: "68%",
    color: "text-orange-400",
    description:
      "of spoofing events go undetected by standard onboard receivers",
  },
  {
    value: "3 regions",
    color: "text-yellow-300",
    description:
      "Baltic, Eastern Med, Black Sea — highest risk corridors in Europe",
  },
];

const reasons = [
  {
    title:
      "GNSS interference has become routine in major shipping corridors",
    description:
      "What was once rare now occurs daily in the Baltic, Eastern Mediterranean, Black Sea, and Gulf regions. Incidents are increasing in frequency, scale, and sophistication.",
  },
  {
    title: "Vessel operations depend more on GPS than ever before",
    description:
      "ECDIS, AIS, dynamic positioning, port approach systems, and automated reporting all rely on GNSS. A degraded signal is no longer just a navigation problem — it affects safety systems, compliance, and cargo timelines.",
  },
  {
    title:
      "Regulation is moving toward mandatory integrity monitoring",
    description:
      "IMO guidelines on GNSS integrity are tightening. P&I clubs and flag state administrations are increasingly asking operators to demonstrate that navigation data was validated.",
  },
];

export default function GnssInterferencePage() {
  return (
    <main className="flex-1">
      {/* ─── The Problem ─── */}
      <section className="bg-navy-950 px-4 py-16 pt-20 sm:px-6 sm:py-24 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                The Problem
              </p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                GNSS INTERFERENCE IS GROWING. ONBOARD ALARMS AREN&apos;T
                ENOUGH.
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-400">
                Modern vessels depend entirely on GNSS for positioning. But
                jamming suppresses the signal, and spoofing replaces it with a
                false one — often without triggering any alarm on the bridge. The
                chart still shows a position. The position may be wrong.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                The result is a gap between what the system displays and what is
                actually happening — a gap that carries real navigational risk,
                especially in congested waters, port approaches, and
                high-traffic corridors.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-xl border border-navy-600/50 bg-navy-900/60 px-6 py-5"
                >
                  <div className="flex items-baseline gap-4">
                    <span className={`text-2xl font-bold sm:text-3xl ${stat.color}`}>
                      {stat.value}
                    </span>
                    <span className="text-sm leading-snug text-gray-400">
                      {stat.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Now ─── */}
      <section className="bg-navy-900/40 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                Why Now
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                THE THREAT
                <br />
                IS ACCELERATING.
              </h2>
            </div>

            <div className="flex flex-col gap-10">
              {reasons.map((reason, i) => (
                <div key={i} className="flex gap-5">
                  <div className="mt-1.5 flex-shrink-0">
                    <span className="block h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mini CTA ─── */}
      <section className="bg-navy-950 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-xl">
          <p className="text-lg text-gray-400">
            Ready to close the integrity gap?
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/product"
              className="rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-cyan-300"
            >
              See our solution
            </Link>
            <Link
              href="/product#pilot"
              className="rounded-full border border-navy-600 px-7 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
            >
              Request a Pilot
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

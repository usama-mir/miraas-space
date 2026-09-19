import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-navy-700/50 bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <span className="text-lg font-bold tracking-wide text-white">
              VERIDIAN<span className="text-cyan-400">NAV</span>
            </span>
            <p className="mt-1 text-xs text-gray-500">
              GNSS Integrity Intelligence · Maritime Operations
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              href="/product"
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Product
            </Link>
            <Link
              href="/gnss-interference"
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              GNSS Interference
            </Link>
            <Link
              href="/team"
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Team
            </Link>
          </nav>

          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} VeridianNav Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}

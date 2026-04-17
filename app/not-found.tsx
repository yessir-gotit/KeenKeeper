import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Revamped the whole UI as my liking :)
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center max-w-2xl">
          <h1 className="text-[10rem] md:text-[16rem] font-black text-green-900 leading-none tracking-tighter">
            404
          </h1>

          <div className="w-32 h-1 bg-[#2F5847] mx-auto mb-8 rounded-full"></div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>

          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Oops! You are in the wrong page.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Back to Home
            </Link>

            <Link
              href="/timeline"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-green-800 border-2 border-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Timeline
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-400 text-sm mb-3">
              Or try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/stats" className="text-green-800 hover:underline hover:transition-all">
                Statistics
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/timeline" className="text-green-800 hover:underline hover:transition-all">
                Timeline
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/" className="text-green-800 hover:underline hover:transition-all">
                Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

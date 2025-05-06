import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HarmonicHash.io - Interactive Music Theory Application",
  description:
    "Explore piano chords with interactive visualizations, build custom sequences, and enhance your understanding of music theory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fafafa]`}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/harmonichash-logo.png"
                    alt="HarmonicHash.io Logo"
                    width={40}
                    height={40}
                    className="mr-3"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-xl text-[#0f52ba]">
                      Harmonic
                    </span>
                    <span className="font-bold text-lg text-[#ffa500] -mt-1">
                      Hash.io
                    </span>
                  </div>
                </Link>
              </div>
              <nav className="hidden md:flex md:items-center md:space-x-8">
                <Link
                  href="#"
                  className="text-[#0f52ba] hover:text-[#0d47a1] font-medium"
                >
                  Chord Library
                </Link>
                <Link
                  href="#"
                  className="text-[#0f52ba] hover:text-[#0d47a1] font-medium"
                >
                  Chord Sequencer
                </Link>
                <Link
                  href="#"
                  className="text-[#0f52ba] hover:text-[#0d47a1] font-medium"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-[#0f52ba] text-white hover:bg-[#0d47a1] transition-colors"
                >
                  Get Started
                </Link>
              </nav>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  className="p-2 rounded-md text-gray-700 hover:text-[#0f52ba] hover:bg-gray-100"
                  aria-label="Main menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-[#0f52ba] text-white mt-20">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/harmonichash-logo.png"
                    alt="HarmonicHash.io Logo"
                    width={40}
                    height={40}
                    className="mr-3"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-white">
                      Harmonic
                    </span>
                    <span className="font-bold text-md text-[#ffa500] -mt-1">
                      Hash.io
                    </span>
                  </div>
                </div>
                <p className="text-gray-200 max-w-md">
                  Interactive music theory application for exploring piano
                  chords with visual keyboard representations. Build custom
                  chord sequences, hear them played, and export as PDF.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">
                  Features
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-200 hover:text-white">
                      Chord Library
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-200 hover:text-white">
                      Chord Sequencer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-200 hover:text-white">
                      Export Options
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-200 hover:text-white">
                      Music Theory
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">
                  Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-200 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-200 hover:text-white">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-200 hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-200 hover:text-white">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-300/30 text-center">
              <p className="text-gray-200 text-sm">
                © {new Date().getFullYear()} HarmonicHash.io - All rights
                reserved
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

import "../globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
      <body className="bg-background text-foreground">
        <header className="sticky top-0 z-50 bg-surface shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/harmonichash-logo.png"
                alt="HarmonicHash Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold text-primary">
                Harmonic<span className="text-accent">Hash.io</span>
              </span>
            </Link>

            <nav className="hidden md:flex space-x-6 font-medium">
              <Link href="#" className="text-primary hover:text-primary-dark">
                Chord Library
              </Link>
              <Link href="#" className="text-primary hover:text-primary-dark">
                Sequencer
              </Link>
              <Link href="#" className="text-primary hover:text-primary-dark">
                About
              </Link>
              <Link
                href="#"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
              >
                Get Started
              </Link>
            </nav>

            <button
              className="md:hidden text-muted hover:text-primary"
              aria-label="Toggle menu"
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
        </header>

        <main>{children}</main>

        <footer className="bg-primary text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/harmonichash-logo.png"
                  alt="Logo"
                  width={36}
                  height={36}
                  className="mr-2"
                />
                <span className="font-bold text-lg">
                  Harmonic<span className="text-accent">Hash.io</span>
                </span>
              </div>
              <p className="text-gray-300 max-w-xs">
                Learn chords, progressions, and theory interactively. Ideal for beginners and advanced learners.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Chord Library</Link></li>
                <li><Link href="#" className="hover:underline">Sequencer</Link></li>
                <li><Link href="#" className="hover:underline">PDF Export</Link></li>
                <li><Link href="#" className="hover:underline">Theory Guides</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">About</Link></li>
                <li><Link href="#" className="hover:underline">Contact</Link></li>
                <li><Link href="#" className="hover:underline">Privacy</Link></li>
                <li><Link href="#" className="hover:underline">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12 text-gray-300 text-xs border-t border-gray-400/30 pt-6">
            © {new Date().getFullYear()} HarmonicHash.io. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

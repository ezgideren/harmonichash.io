// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HarmonicHash.io - Interactive Music Theory Application',
  description: 'Explore piano chords with interactive visualizations, build custom sequences, and enhance your understanding of music theory.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fffdf5]`}>
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Image 
                    src="/images/harmonichash-logo.png" 
                    alt="HarmonicHash.io Logo" 
                    width={48} 
                    height={48} 
                    className="mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-xl text-[#0f52ba]">Harmonic</span>
                    <span className="font-bold text-lg text-[#ffa500] -mt-1">Hash.io</span>
                  </div>
                </Link>
              </div>
              <nav className="hidden md:flex items-center space-x-4">
                <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium text-[#0f52ba] hover:bg-gray-100">
                  Chord Library
                </Link>
                <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium text-[#0f52ba] hover:bg-gray-100">
                  Chord Sequencer
                </Link>
                <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium text-[#0f52ba] hover:bg-gray-100">
                  About
                </Link>
                <Link 
                  href="#" 
                  className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-[#0f52ba] text-white hover:bg-[#0d47a1] transition-colors"
                >
                  Get Started
                </Link>
              </nav>
              
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button 
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#0f52ba] hover:bg-gray-100"
                  aria-label="Main menu"
                  aria-expanded="false"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu panel would go here if you wanted to implement it */}
        </header>
        
        {children}
        
        <footer className="bg-[#0f52ba] text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Image 
                    src="/images/harmonichash-logo.png" 
                    alt="HarmonicHash.io Logo" 
                    width={40} 
                    height={40} 
                    className="mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-white">Harmonic</span>
                    <span className="font-bold text-md text-[#ffa500] -mt-1">Hash.io</span>
                  </div>
                </div>
                <p className="text-sm text-gray-200">
                  Interactive music theory application for exploring piano chords with visual keyboard representations.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Features</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="text-gray-200 hover:text-white">Chord Library</Link></li>
                  <li><Link href="#" className="text-gray-200 hover:text-white">Chord Sequencer</Link></li>
                  <li><Link href="#" className="text-gray-200 hover:text-white">Export Options</Link></li>
                  <li><Link href="#" className="text-gray-200 hover:text-white">Music Theory</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="text-gray-200 hover:text-white">About</Link></li>
                  <li><Link href="#" className="text-gray-200 hover:text-white">Contact</Link></li>
                  <li><Link href="#" className="text-gray-200 hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-gray-200 hover:text-white">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-300/30">
              <p className="text-center text-gray-200 text-sm">
                © {new Date().getFullYear()} HarmonicHash.io - Interactive Music Theory Application
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
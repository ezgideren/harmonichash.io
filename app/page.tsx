import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#e8f0fe] to-[#f5f8ff] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Learn Music Theory Through Interactive Piano
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Explore chords, create sequences, and download your compositions
                with our interactive visualization tools.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="px-6 py-3 bg-[#0f52ba] text-white rounded-lg font-medium shadow-sm hover:bg-[#0d47a1] transition-colors"
                >
                  Explore Chords
                </Link>
                <Link
                  href="#"
                  className="px-6 py-3 bg-white text-[#0f52ba] border border-[#0f52ba] rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Create Sequences
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md h-64 md:h-80 bg-white rounded-lg shadow-lg flex items-center justify-center">
                {/* This would be replaced with your piano visualization component */}
                <div className="text-center px-8">
                  <div className="text-4xl mb-4">🎹</div>
                  <p className="text-gray-500">
                    Interactive Piano Visualization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Powerful Music Theory Tools
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to understand, create, and share music.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-[#e8f0fe] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎹</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Comprehensive Chord Library
              </h3>
              <p className="text-gray-600 mb-4">
                Explore major, minor, diminished, augmented chords and more with
                interactive visualizations.
              </p>
              <Link
                href="#"
                className="text-[#0f52ba] font-medium hover:text-[#0d47a1] inline-flex items-center"
              >
                View Library
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-[#e8f0fe] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Interactive Visualizations
              </h3>
              <p className="text-gray-600 mb-4">
                See and hear how chords are formed on a piano keyboard with
                clear, intuitive displays.
              </p>
              <Link
                href="#"
                className="text-[#0f52ba] font-medium hover:text-[#0d47a1] inline-flex items-center"
              >
                Try Now
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-[#e8f0fe] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Build Chord Progressions
              </h3>
              <p className="text-gray-600 mb-4">
                Create your own musical sequences with our intuitive
                drag-and-drop interface.
              </p>
              <Link
                href="#"
                className="text-[#0f52ba] font-medium hover:text-[#0d47a1] inline-flex items-center"
              >
                Start Creating
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-[#e8f0fe] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Export Your Work
              </h3>
              <p className="text-gray-600 mb-4">
                Download your chord progressions as PDF for practice or sharing
                with others.
              </p>
              <Link
                href="#"
                className="text-[#0f52ba] font-medium hover:text-[#0d47a1] inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Try It Yourself
              </h2>
              <p className="mt-4 text-gray-600">
                Experience the interactive piano visualization with this demo.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Piano Visualization */}
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-8">
                <p className="text-gray-500">
                  Piano Visualization Will Appear Here
                </p>
              </div>

              <div className="flex flex-col items-center">
                <button className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white shadow-md transition-colors mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                </button>
                <p className="text-gray-600 mb-6">Click to hear C Major</p>
                <Link
                  href="#"
                  className="text-[#0f52ba] font-medium hover:text-[#0d47a1] inline-flex items-center"
                >
                  Try More Chords
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f52ba] to-[#1a67d2] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to explore music theory?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-100">
            Master chords, build progressions, and understand harmony with our
            interactive tools.
          </p>
          <Link
            href="#"
            className="px-6 py-3 bg-white text-[#0f52ba] rounded-lg font-medium shadow-md hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

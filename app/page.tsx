// app/page.tsx - Updated with # links
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 px-6 bg-gradient-to-r from-purple-50 to-indigo-50 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-4xl">
          Learn Music Theory Through Interactive Piano Visualization
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Explore chords, create sequences, and download your compositions
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="#"
            className="bg-purple-700 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-800 transition-colors shadow-md"
          >
            Explore Chords
          </Link>
          <Link
            href="#"
            className="bg-white text-purple-700 border border-purple-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
          >
            Create Sequences
          </Link>
        </div>
      </section>

      {/* Feature Boxes */}
      <section className="w-full max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🎹</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Comprehensive Chord Library
            </h3>
            <p className="text-gray-600 mb-4">
              Explore major, minor, diminished, augmented chords and more
            </p>
            <Link
              href="#"
              className="text-purple-700 font-medium hover:text-purple-900"
            >
              View Library →
            </Link>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">👆</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Interactive Visualizations
            </h3>
            <p className="text-gray-600 mb-4">
              See and hear how chords are formed on a piano keyboard
            </p>
            <Link
              href="#"
              className="text-purple-700 font-medium hover:text-purple-900"
            >
              Try Now →
            </Link>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Build Chord Progressions
            </h3>
            <p className="text-gray-600 mb-4">
              Create your own musical sequences with drag-and-drop simplicity
            </p>
            <Link
              href="#"
              className="text-purple-700 font-medium hover:text-purple-900"
            >
              Start Creating →
            </Link>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Export Your Work
            </h3>
            <p className="text-gray-600 mb-4">
              Download your chord progressions as PDF for practice or sharing
            </p>
            <Link
              href="#"
              className="text-purple-700 font-medium hover:text-purple-900"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Piano Demo Section */}
      <section className="w-full max-w-5xl px-6 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Try it yourself
          </h2>

          {/* Piano Visualization Placeholder */}
          <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center mb-8">
            <p className="text-gray-500">
              Piano Visualization Will Appear Here
            </p>
          </div>

          <div className="flex flex-col items-center">
            <button className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white shadow-md transition-colors mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <p className="text-gray-600 mb-6">Click to hear C Major</p>
            <Link
              href="#"
              className="text-purple-700 font-medium hover:text-purple-900"
            >
              Try More Chords →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 px-6 bg-gradient-to-r from-purple-700 to-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to explore music theory?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Master chords, build progressions, and understand harmony with our
          interactive tools
        </p>
        <Link
          href="#"
          className="bg-white text-purple-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}

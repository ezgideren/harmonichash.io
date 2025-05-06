import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#dbeafe] to-[#eff6ff] py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
              Master Music Theory Visually
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Explore chords, build progressions, and visualize harmony with our
              interactive piano tool.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#"
                className="px-6 py-3 rounded-lg bg-[#0f52ba] text-white font-semibold shadow-md hover:bg-[#0d47a1] transition"
              >
                Explore Chords
              </Link>
              <Link
                href="#"
                className="px-6 py-3 rounded-lg border-2 border-[#0f52ba] text-[#0f52ba] font-semibold hover:bg-[#e0ecff] transition"
              >
                Create Sequences
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-64 md:h-80 bg-white rounded-xl shadow-xl flex items-center justify-center text-center">
              <div className="px-6">
                <div className="text-5xl mb-4">🎹</div>
                <p className="text-gray-500">Interactive Piano Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Music Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to understand, create, and share music ideas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎹",
                title: "Chord Library",
                text: "Browse major, minor, diminished chords and more with visuals.",
              },
              {
                icon: "👆",
                title: "Interactive Keys",
                text: "See and hear chord shapes directly on a virtual keyboard.",
              },
              {
                icon: "🎵",
                title: "Progression Builder",
                text: "Drag & drop chords to build your own musical sequences.",
              },
              {
                icon: "📥",
                title: "Export & Share",
                text: "Download your creations as PDF for practice or collaboration.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-[#f9fafb] rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{feature.text}</p>
                <Link
                  href="#"
                  className="text-[#0f52ba] font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="bg-[#f1f5f9] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try It Yourself
          </h2>
          <p className="text-gray-600 mb-10">
            Experience our interactive piano by previewing how chords are
            visualized and played.
          </p>
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-8">
              <p className="text-gray-500">Piano Visualization Area</p>
            </div>
            <button className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white shadow-md mb-4">
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
              className="text-[#0f52ba] font-medium hover:underline"
            >
              Explore more chords →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0f52ba] to-[#1a67d2] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to explore harmony?</h2>
          <p className="text-lg mb-8 text-gray-200">
            Get started now and transform your understanding of music.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-4 bg-white text-[#0f52ba] rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Launch App
          </Link>
        </div>
      </section>
    </>
  );
}

// app/page.js
export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-700 mb-6">
          Welcome to Gainova
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Empowering the future with cutting-edge innovation, technology, and ideas.
        </p>
        <a
          href="#"
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
        >
          Get Started
        </a>
      </div>
    </main>
  );
}

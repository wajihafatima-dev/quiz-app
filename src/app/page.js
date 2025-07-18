import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 to-pink-300">
      <h1 className="text-4xl font-bold mb-6 text-white">Welcome to the Quiz App</h1>
      <Link href="/quiz">
        <button className="bg-white text-purple-700 px-6 py-3 rounded-xl text-lg font-medium hover:bg-purple-100 transition">
          Start Quiz
        </button>
      </Link>
    </div>
  );
}

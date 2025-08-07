'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const Result = () => {
  const searchParams = useSearchParams();
  const score = searchParams.get('score');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-300">
      <h2 className="text-3xl font-bold mb-4 text-green-800">Your Score</h2>
      <p className="text-6xl font-bold mb-6 text-green-900">{score}</p>
      <Link href="/">
        <button className="bg-white px-5 py-2 rounded-xl text-green-700 font-semibold hover:bg-green-200">
          Play Again
        </button>
      </Link>
    </div>
  );
};

export default Result;

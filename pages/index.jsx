import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5 fon">nextjs mabl test</h1>
        <Link href="/login">
          <p className="text-white bg-blue-500 p-2 rounded">Login</p>
        </Link>
      </div>
    </div>
  );
}

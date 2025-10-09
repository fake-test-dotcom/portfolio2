'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaGoogle, FaUser, FaLock, FaGithub, FaFacebookF, FaArrowLeft } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4 text-white"
      style={{
        backgroundImage:
          'url("/images/about-us-page.jpg")',
      }}
    >
      {/* 🔲 Overlay for dimming */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Go Back Button */}
          <Link href="/" className="absolute left-1 top-1/12 -translate-y-1/2">
                    <button className="group flex items-center gap-2 px-5 py-2 rounded-full bg-black/80 border border-purple-500 text-purple-400 hover:text-white hover:border-white transition duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50">
                        <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                            <FaArrowLeft />
                        </span>
                        <span className="font-semibold">Back</span>
                    </button>
                </Link>

      {/* Login Card */}
      <div className="w-full max-w-md bg-[#1e1e1e]/90 backdrop-blur-md rounded-xl p-8 shadow-2xl z-10">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <div className="space-y-5">
          <div className="flex items-center border border-gray-700 rounded px-3 py-2 bg-[#2a2a2a]">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent focus:outline-none text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border border-gray-700 rounded px-3 py-2 bg-[#2a2a2a]">
            <FaLock className="text-gray-400 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent focus:outline-none text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Sign In button replaced with a Link */}
          <Link
            href="/"
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 transition duration-200 py-2 rounded font-semibold"
          >
            Sign In
          </Link>
        </div>

        <div className="my-4 text-center text-gray-400">or sign in with</div>

        <div className="space-y-3">
          <Link
            href="/"
            className="w-full flex items-center justify-center border border-gray-700 py-2 rounded hover:bg-gray-800 transition"
          >
            <FaGoogle className="mr-2 text-red-400" />
            Google
          </Link>

          <Link
            href="/"
            className="w-full flex items-center justify-center border border-gray-700 py-2 rounded hover:bg-gray-800 transition"
          >
            <FaGithub className="mr-2 text-gray-300" />
            GitHub
          </Link>

          <Link
            href="/"
            className="w-full flex items-center justify-center border border-gray-700 py-2 rounded hover:bg-gray-800 transition"
          >
            <FaFacebookF className="mr-2 text-blue-500" />
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaGoogle, FaUser, FaLock, FaGithub, FaFacebookF, FaArrowLeft } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden text-white px-4"
    >
      {/* ✅ Subtle animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,0,150,0.15),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(0,150,255,0.15),transparent_60%)] animate-pulse" />

      {/* 🌈 Back Button with Rainbow Shadow */}
      <Link href="/" className="absolute left-3 top-4 z-20">
        <button
          className="group flex items-center gap-2 px-5 py-2 rounded-full bg-black/80 border border-purple-500 text-purple-400
          transition-all duration-500 ease-in-out shadow-lg hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.3)] relative overflow-hidden"
          style={{
            boxShadow:
              '0 0 10px rgba(168,85,247,0.5)',// base purple glow
          }}
          onMouseEnter={(e) => {
            (e.currentTarget.style.boxShadow =
              '0 0 15px 5px rgba(255,0,150,0.6), 0 0 15px 5px rgba(0,255,255,0.5), 0 0 15px 5px rgba(255,255,0,0.4)');
          }}
          onMouseLeave={(e) => {
            (e.currentTarget.style.boxShadow = '0 0 20px rgba(168,85,247,0.5)');
          }}
        >
          <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
            <FaArrowLeft className="transition-colors duration-500" />
          </span>
          <span className="font-semibold transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400 group-hover:text-transparent group-hover:bg-clip-text">
            Back
          </span>
        </button>
      </Link>

      {/* ✨ Glassmorphic Login Card */}
      <div style={{marginTop:'34px'}} className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-8 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-8">
          Welcome Back 👋
        </h2>

        <div className="space-y-5">
          {/* Email */}
          <div className="flex items-center border border-gray-700 rounded-lg px-4 py-2 bg-gray-900/60 focus-within:border-purple-500 transition">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-700 rounded-lg px-4 py-2 bg-gray-900/60 focus-within:border-purple-500 transition">
            <FaLock className="text-gray-400 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Sign In */}
          <Link
            href="/"
            className="block w-full text-center font-semibold text-white py-3 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300"
          >
            Sign In
          </Link>
        </div>

        {/* Divider */}
        <div className="my-6 text-center text-gray-400 text-sm">or sign in with</div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <Link
            href="/"
            className="w-full flex items-center justify-center border border-gray-700 py-2 rounded-lg hover:bg-gray-800/60 transition-all hover:scale-105"
          >
            <FaGoogle className="mr-2 text-red-400" />
            <span>Google</span>
          </Link>

          <Link
            href="/"
            className="w-full flex items-center justify-center border border-gray-700 py-2 rounded-lg hover:bg-gray-800/60 transition-all hover:scale-105"
          >
            <FaGithub className="mr-2 text-gray-300" />
            <span>GitHub</span>
          </Link>

          <Link
            href="/"
            className="w-full flex items-center justify-center border border-gray-700 py-2 rounded-lg hover:bg-gray-800/60 transition-all hover:scale-105"
          >
            <FaFacebookF className="mr-2 text-blue-500" />
            <span>Facebook</span>
          </Link>
        </div>

        {/* Footer text */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Don’t have an account?{' '}
          <Link href="/" className="text-purple-400 hover:text-purple-300 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

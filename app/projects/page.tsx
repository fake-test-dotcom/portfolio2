'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const projects = [
  {
    title: 'Musica19n',
    image: '/images/musica19n.jpg',
    description:
      'Musica19n is a modern music streaming web app built with Next.js, inspired by Spotify. It allows users to discover, stream, and manage their favorite tracks with a sleek, responsive UI and seamless performance.',
    link: 'https://musica19n.vercel.app',
  },
  {
    title: 'Puzzle Game',
    image: '/images/tom.jpg',
    description:
      'A responsive Puzzle game built using React Native and Expo for both iOS and Android platforms.',
    link: 'https://puzzle-gamma-five.vercel.app',
  },
  {
    title: 'Ball One',
    image: '/images/ballgame.jpg',
    description:
      'An interactive arcade-style web game built using Next.js, TypeScript, and the Canvas API with touch support.',
    link: 'https://ball-one.vercel.app/',
  },
  {
    title: 'Hospital Management',
    image: '/images/hospital.jpg',
    description:
      'A full-stack hospital management system enabling communication between patients and doctors with video calls and scheduling.',
    link: 'https://hospm1.vercel.app/',
  },
  {
    title: 'Netflix Clone',
    image: '/images/Netflix Indian Movies and Web Series.jpg',
    description:
      'A Netflix clone made with Express.js and TMDB API to fetch real-time movies with a modern, responsive UI.',
    link: '/projects',
  },
  {
    title: 'Plur Task',
    image: '/images/todo1.jpg',
    description:
      'PlurTask is a minimal and fast to-do app designed for productivity and a clean user experience.',
    link: 'https://plurtaskm4.vercel.app/',
  },
  {
    title: 'Black x Street',
    image: '/images/front page car.jpg',
    description:
      'A fun 3D car game using Next.js and React Three Fiber with realistic graphics and smooth controls.',
    link: 'https://cargamea1.vercel.app/',
  },
]

export default function ProjectsPage() {
  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 text-white overflow-x-hidden py-16 px-4">
      {/* Glowing background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/25 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12 px-4 flex flex-col items-center">
        <Link href="/" className="self-start">
          <motion.button
            whileHover={{
              boxShadow:
                '0 0 12px 2px rgba(255,0,150,0.35), 0 0 20px 4px rgba(0,255,255,0.25)',
              scale: 1.03,
            }}
            transition={{ duration: 0.25 }}
            className="group flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500 text-purple-400 hover:text-white hover:border-white transition duration-300 ease-in-out shadow-lg hover:shadow-purple-500/40"
          >
            <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
              <FaArrowLeft />
            </span>
            <span className="font-semibold">Back</span>
          </motion.button>
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold mt-8 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
          My Projects
        </h1>
      </div>

      {/* Project cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0.6,
              y: 100,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              delay: i * 0.15,
              type: 'spring',
              stiffness: 70,
              damping: 10,
            }}
            className="flex justify-center"
          >
            <div
              className="group w-full max-w-sm cursor-pointer"
              style={{ perspective: 1000 }}
              onClick={() => setFlipped(flipped === i ? null : i)}
            >
              <div
                className={`relative w-full h-72 transition-transform duration-700 transform-style-3d ${
                  flipped === i ? 'rotate-y-180' : ''
                } group-hover:rotate-y-180`}
              >
                {/* FRONT */}
                <div className="absolute inset-0 rounded-xl overflow-hidden backface-hidden bg-gray-900/80 border border-gray-700 hover:border-purple-500/80 transition-all">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 p-4">
                    <h2 className="text-lg font-semibold">{project.title}</h2>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rounded-xl overflow-hidden backface-hidden bg-gradient-to-b from-purple-900 to-black p-6 rotate-y-180 border border-purple-500/50">
                  <h3 className="text-xl font-bold mb-2 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 text-center leading-relaxed">
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition"
                  >
                    Visit Project
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-400 text-sm mt-20">
        &copy; 2025 ar19n. All rights reserved.
      </footer>

      {/* Card flip CSS */}
      <style jsx global>{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </main>
  )
}

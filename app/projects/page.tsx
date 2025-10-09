'use client'

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
            'A responsive Puzzle game built using React Native and Expo  which focuses both iOS and Android platform to showcase my work and skills. Note: For better experience use a mobile screen.',
        link: 'https://puzzle-gamma-five.vercel.app',
    },
    {
        title: 'Ball one',
        image: '/images/ballgame.jpg',
        description:
            'Ball Shooter is an interactive arcade-style web game built using Next.js, TypeScript, and the Canvas API. It also supports touch controls for mobile providing a seamless experience no matter how you play.',
        link: 'https://ball-one.vercel.app/',
    },
    {
        title: 'Hospital Management',
        image: '/images/hospital.jpg',
        description:
            'A full-stack Hospital management system that enables seamless communication between patients and doctors through secure video calls.The system also support patient registration, appointment and scheduling.',
        link: 'https://hospm1.vercel.app/',
    },
    {
        title: 'Netflix Clone',
        image: '/images/Netflix Indian Movies and Web Series.jpg',
        description:
            ' A Netflix clone made with Express.js and TMDB API to fetch real time movies with a responsive and modern touch',
        link: '/projects',
    },
        {
        title: 'Plur Task',
        image: '/images/todo1.jpg',
        description:
            ' PlurTask is a lightweight, well-optimized to-do application designed for speed, simplicity, and productivity. With a sleek user interface and smooth performance, whether you are organizing your daily routine or planning long-term goals, PlurTask helps you stay focused with a seamless task management experience.',
        link: 'https://plurtaskm4.vercel.app/',
    },
    {
        title: 'Black x Street',
        image: '/images/front page car.jpg',
        description:
            'A fun 3D car game using Next.js and React Three Fiber. It runs right in the browser and uses GLTF models for the cars and environment to keep things looking smooth and realistic. You can drive around and enjoy real-time 3D graphics.',
        link: 'https://cargamea1.vercel.app/',
    },

]

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-900 py-16 px-4">
            {/* Back button */}
            <div className="relative max-w-7xl mx-auto mb-12 px-4">
                {/* Back Button on the left */}
                <Link href="/" className="absolute left-0 top-1/2 -translate-y-1/2">
                    <button className="group flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500 text-purple-400 hover:text-white hover:border-white transition duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50">
                        <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                            <FaArrowLeft />
                        </span>
                        <span className="font-semibold">Back</span>
                    </button>
                </Link>

                {/* Centered Heading */}
                <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
                    My Projects
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {projects.map((project, i) => (
                    <Link
                        href={project.link}
                        key={i}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: i % 2 === 0 ? -200 : 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className="group perspective shadow-2xl hover:shadow-purple-500/40 transition-shadow duration-300"
                        >
                            <div className="relative w-full h-72 cursor-pointer transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
                                {/* Front */}
                                <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-4 text-white">
                                        <h2 className="text-lg font-semibold">{project.title}</h2>
                                    </div>
                                </div>

                                {/* Back */}
                                <div className="absolute w-full h-full backface-hidden bg-black text-white rounded-xl shadow-lg p-6 rotate-y-180">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-sm">{project.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
            <div>
                            <p style={{marginLeft:'600px',marginTop:'100px'}}>&copy; 2025 ar19n. All rights reserved </p>

            </div>
        </main>
    )
}

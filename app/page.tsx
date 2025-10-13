'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import {
  FaFacebook,
  FaYoutube,
  FaInstagram
} from 'react-icons/fa'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { name: 'About', href: '/about', color: 'from-pink-500 to-purple-500' },
    { name: 'Internship Program', href: '/about', color: 'from-pink-500 to-purple-500' },
    { name: 'Projects', href: '/projects', color: 'from-pink-500 to-purple-500' },
    { name: 'Youtube', href: '/', color: 'from-red-500 to-orange-400' },
  ]

  const stats = [
    { name: 'Projects Done', value: '12' },
    { name: 'Skill Level', value: 'Advanced' },
    { name: 'Specialization', value: 'MERN Stack' },
    { name: 'Strength', value: 'Frontend + Backend' },
  ]

  return (
    <main className="bg-gray-950 text-white scroll-smooth">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg backdrop-blur-md bg-opacity-90">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 sm:p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/ar19n logo.jpg"
                alt="Logo"
                width={45}
                height={45}
                className="rounded-full border border-white/20"
              />
              <span className="font-bold text-lg sm:text-xl tracking-wide text-white">Aromal M G</span>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-white/10"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-10">
            <Link href="/" className="text-lg font-semibold hover:text-gray-200 transition-colors">Home</Link>
            <Link href="/about" className="text-lg font-semibold hover:text-gray-200 transition-colors">About</Link>
            <Link href="#projects" className="text-lg font-semibold hover:text-gray-200 transition-colors">Projects</Link>
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-1 text-lg font-semibold hover:text-gray-200 transition-all">
                More <ChevronDownIcon className="w-4 h-4" />
              </PopoverButton>
              <PopoverPanel className="absolute top-full mt-2 w-56 rounded-xl bg-gray-800 shadow-lg ring-1 ring-gray-700">
                <div className="p-3 space-y-2">
                  <Link href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-700">Analytics</Link>
                  <Link href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-700">Engagement</Link>
                  <Link href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-700">Security</Link>
                  <Link href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-700">Integrations</Link>
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/login" className="text-sm font-semibold hover:text-gray-200">
              Log in →
            </Link>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-gray-900 px-6 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/images/ar19n logo.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
                <span className="font-bold text-lg">Aromal M G</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6 text-gray-300" />
              </button>
            </div>
            <div className="mt-8 space-y-4">
              <Link href="/" className="block text-lg hover:text-indigo-400">Home</Link>
              <Link href="/about" className="block text-lg hover:text-indigo-400">About</Link>
              <Link href="projects" className="block text-lg hover:text-indigo-400">Projects</Link>
              <Link href="/login" className="block text-lg hover:text-indigo-400">Log in</Link>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-5 sm:px-6 pt-28 sm:pt-32 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <Image
          src="/images/laptop.jpg"
          alt="Background"
          fill
          className="absolute inset-0 object-cover opacity-30"
          priority
        />
        <div className="relative z-10 max-w-3xl">
          <TypeAnimation
            sequence={[
              'Hi, I’m Aromal 👋',
              1000,
              'Full Stack Developer',
              2000,
              'MERN Enthusiast ⚡',
              2000,
            ]}
            wrapper="h1"
            repeat={Infinity}
            cursor={true}
            className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
          />
          <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            I’m a passionate developer proudly from the beautiful city of kollam in Kerala who loves building beautiful and functional web and mobile apps. 
            I specialize in crafting full-stack applications using modern technologies.
          </p>

          {/* Unique hover buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {links.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2.5 rounded-full text-white font-semibold shadow-md transition-all text-sm sm:text-base 
                bg-gradient-to-r ${link.color}
                hover:shadow-[0_0_15px_var(--tw-shadow-color)] hover:shadow-purple-500/50 hover:scale-105 active:scale-95`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center px-6">
          {stats.map(stat => (
            <div key={stat.name} className="transform hover:scale-105 transition-all">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-purple-400">{stat.value}</h3>
              <p className="mt-2 text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">{stat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECT SHOWCASE ================= */}
      <section id="projects" className="py-20 sm:py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text">
            Featured Project
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">Explore some of my favorite work below 👇</p>
        </div>

        <div className="relative mx-auto max-w-5xl h-[220px] sm:h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
          <Link href="https://musica19n.vercel.app" target="_blank">
            <Image
              src="/images/musica19nAdd.png"
              alt="Musica19n"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2"></h3>
              <p className="text-gray-300 text-sm sm:text-base"></p>
            </div>
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950 text-gray-400 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Who I Am</Link></li>
              <li><Link href="#" className="hover:text-white">Resume</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Docs</Link></li>
              <li><Link href="#" className="hover:text-white">API</Link></li>
              <li><Link href="#" className="hover:text-white">Community</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex space-x-5 text-2xl justify-start">
              <Link href="#" className="hover:text-blue-500"><FaFacebook /></Link>
              <Link href="https://youtube.com/@ar19n_99.9k?si=88OvcmwN22bPfqX" className="hover:text-red-500"><FaYoutube /></Link>
              <Link href="#" className="hover:text-pink-500"><FaInstagram /></Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Subscribe</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 text-center text-xs sm:text-sm text-gray-500">
          &copy; 2025 ar19n. All rights reserved.
        </div>
      </footer>
    </main>
  )
}

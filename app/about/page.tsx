'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaBuilding,
  FaSchool,
  FaUser,
  FaArrowLeft,
} from 'react-icons/fa'

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Understand your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Talk to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Data safety ensured', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Funnels that convert', href: '#', icon: ArrowPathIcon },
]


const features = [
  {
    name: 'Name',
    description:
      'Hi, I am Aromal M G, proudly from the beautiful city of Kollam in Kerala. I am a full-stack developer ready to provide quality services and help bring your ideas to life.',
    icon: FaUser,
  },
  {
    name: 'Education',
    description: 'Bachelors Degree in English and Communicative English',
    icon: FaSchool,
  },
  {
    name: 'Experience',
    description: 'Full Stack Developer Intern at Softzane Solutions specializing in MERN Stack',
    icon: FaBuilding,
  },
]

export default function Navbar() {
  const [, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Left side: Back button */}
        <div className="flex items-center gap-4 lg:flex-1">
          <Link href="/" className="group relative">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500 text-purple-400 hover:text-white hover:border-white transition duration-300 ease-in-out shadow-lg hover:shadow-[0_0_25px_rgba(255,0,150,0.4),_0_0_40px_rgba(0,255,255,0.3)]">
              <FaArrowLeft className="text-lg transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="font-semibold">Back</span>
            </div>
          </Link>

          {/* Logo */}
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">ar19n</span>
            <Image
              src="/images/mirror aromal.jpg"
              alt="Company logo"
              width={50}
              height={50}
              style={{ borderRadius: '25px' }}
              className="h-12 w-12 object-cover"
            />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop menu (same style, not removed) */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-2xl font-semibold transform transition-transform duration-350 ease-in-out hover:scale-125">
              Menu
              <ChevronDownIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel className="absolute top-full left-0 z-50 mt-3 w-screen max-w-md rounded-3xl bg-gray-900 shadow-lg ring-1 ring-gray-900/10">
              <div className="p-4 space-y-2">
                {products.map((product) => (
                  <div
                    key={product.name}
                    className="group relative flex items-start gap-x-4 rounded-lg p-4 hover:bg-purple-900 transform transition-transform duration-200 ease-in-out hover:scale-110"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                      <product.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <Link href={product.href} className="block font-semibold text-white">
                        {product.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-sm text-gray-400">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>

      {/* About Section */}
      <section className="overflow-hidden relative py-24 sm:py-32 bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 text-gray-100">
        {/* Glowing BG */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/25 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/25 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:max-w-none">
            {/* Text Content */}
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-purple-400">About</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  MERN Stack Developer
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Motivated and detail-oriented Full Stack Developer with hands-on experience in building scalable web and mobile applications.
                </p>

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-white">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-purple-400"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="/images/aromaledit about.png"
                alt="About section"
                width={2432}
                height={1442}
                className="w-full max-w-50px rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.5)] ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Details</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
              <li><a href="#" className="hover:text-white">Tutorials</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Follow Me</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-white"><FaFacebook style={{ fontSize: '25px' }} /></a>
              <a href="https://youtube.com/@ar19n_99.9k?si=88OvcmwN22bPfqX" className="hover:text-white"><FaYoutube style={{ fontSize: '25px' }} /></a>
              <a href="#" className="hover:text-white"><FaInstagram style={{ fontSize: '25px' }} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Subscribe</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          &copy; 2025 ar19n. All rights reserved.
        </div>
      </footer>
    </header>
  )
}

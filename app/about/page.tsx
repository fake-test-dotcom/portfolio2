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
  FaHome
} from 'react-icons/fa'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
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
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Understand your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Talk to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Data safety ensured', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Funnels that convert', href: '#', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]


const features = [
  {
    name: 'Name',
    description:
      'Hi, I am Aromal M G, proudly from the beautiful city of Kollam in Kerala. I am a full-stack developer ready to provide quality services and help bring your ideas to life. ',
    icon: FaUser ,
  },
  {
    name: 'Education',
    description:
      'Bachelors Degree in English and Communicative English',
    icon: FaSchool,
  },
  {
    name: 'Experience',
    description:
      'Full Stack Developer Intern at Softzane Solutions specializing in MERN Stack',
    icon: FaBuilding,
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-skyblue-300 to-purple-600 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Left side: Home button */}
        <div className="flex items-center gap-4 lg:flex-1">
          <Link
            href="/"
            className="text-2xl font-semibold text-white hover:underline hover:text-white-900 transition-transform duration-350 ease-in-out hover:scale-110"
          >
           <FaHome style={{marginLeft:'20px'}}/> Home
          </Link>

          {/* Logo */}
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">ar19n</span>
            <Image
              src="/images/ar19n logo.jpg"
              alt="Company logo"
              width={32}
              height={32}
              style={{ height: '60px', width: 'auto', borderRadius: '30px' }}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-purple-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">
          {/* Menu Popover */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-2xl font-semibold text-white-900 transform transition-transform duration-350 ease-in-out hover:scale-150">
              Menu
              <ChevronDownIcon className="h-5 w-5 text-white-500" aria-hidden="true" />
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
                      <Link href={product.href} className="block font-semibold text-white-900">
                        {product.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-sm text-gray-600">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* Links */}
          {['About', 'Experience', 'Company'].map((item) => {
            const isAbout = item === 'About'
            return (
              <button
                key={item}
                disabled={isAbout}
                className={`text-lg font-semibold transition-transform duration-350 ease-in-out hover:scale-150 ${
                  isAbout
                    ? 'cursor-not-allowed text-gray-400'
                    : 'text-white-900 hover:text-white'
                }`}
                {...(!isAbout && { onClick: () => window.location.assign('/about') })}
              >
                {item}
              </button>
            )
          })}
        </PopoverGroup>

        {/* Right side: Log in */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="text-sm font-semibold text-white-900 transform transition-transform duration-350 ease-in-out hover:scale-150"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ar19n</span>
              <Image
                src="/images/ar19n logo.jpg"
                alt="Company logo"
                width={32}
                height={32}
                style={{ height: '60px', width: 'auto', borderRadius: '30px' }}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-purple-100 transform transition-transform duration-200 ease-in-out hover:scale-110">
                    Menu
                    <ChevronDownIcon
                      className="h-5 w-5 text-purple-400 group-data-open:rotate-180"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-purple-100 transform transition-transform duration-200 ease-in-out hover:scale-110"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                {['About', 'Experience', 'Company'].map((item) => (
                  <Link
                    key={item}
                    href="/about"
                    className={`block rounded-lg px-3 py-2 text-base font-semibold ${
                      item === 'About'
                        ? 'cursor-not-allowed text-gray-400'
                        : 'text-gray-900 hover:bg-purple-100 transform transition-transform duration-200 ease-in-out hover:scale-110'
                    }`}
                    tabIndex={item === 'About' ? -1 : 0}
                    aria-disabled={item === 'About'}
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-purple-100 transform transition-transform duration-200 ease-in-out hover:scale-110"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>




{/* about */}
    <section className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:max-w-none">
          {/* Text Content */}
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">About</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                MERN Stack Developer
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Motivated and detail-oriented Full Stack Developer with hands-on experience in building scalable web and mobile applications.

              </p>

              {/* Feature List */}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
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
          <div>
            <Image
              src="/images/about-us-page.jpg"
              alt="Product screenshot"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </section>
  
  {/* footer */}
  
  
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Details</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
  
          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
              <li><a href="#" className="hover:text-white">Tutorials</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
            </ul>
          </div>
  
          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-white"><FaFacebook style={{fontSize:'25px'}}/></a>
              <a href="https://youtube.com/@ar19n_99.9k?si=88OvcmwN22bPfqX" className="hover:text-white"><FaYoutube style={{fontSize:'25px'}}/></a>
              <a href="#" className="hover:text-white"><FaInstagram style={{fontSize:'25px'}}/></a>
  
            </div>
          </div>
  
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
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

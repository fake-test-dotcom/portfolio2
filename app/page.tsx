'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import {
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaStar,
  FaRocket
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

// ✅ Import Google Fonts
import { Anton, Inter } from 'next/font/google'
import { Dancing_Script } from 'next/font/google'

const greatVibes = Anton({
  weight: '400',
  subsets: ['latin'],
})

const navFont = Dancing_Script({
  weight: '400',
  subsets: ['latin'],
})

const inter = Inter({ subsets: ['latin'] })

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', toggleVisibility)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const links = [
    { name: 'About', href: '/about', color: 'from-pink-600 to-purple-600', icon: '' },
    { name: 'Internship Program', href: '/about', color: 'from-pink-600 to-cyan-800', icon: '' },
    { name: 'Projects', href: '/projects', color: 'from-pink-600 to-emerald-800', icon: '' },
    { name: 'Youtube', href: '/', color: 'from-pink-600 to-orange-800', icon: '' },
  ]

  const stats = [
    { name: 'Projects Done', value: '12+', icon: '🎯' },
    { name: 'Skill Level', value: 'Advanced', icon: '⚡' },
    { name: 'Specialization', value: 'MERN Stack', icon: '🔧' },
    { name: 'Strength', value: 'Full Stack', icon: '💪' },
  ]

  const projects = [
    {
      name: 'Musica19n',
      description: 'A modern music streaming platform',
      image: '/images/musica19nAdd.png',
      link: 'https://musica19n.vercel.app',
      tags: ['Next.js', 'React', 'Music']
    },
    {
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution',
      image: '/images/project2.jpg',
      link: '#',
      tags: ['MERN', 'Stripe', 'Tailwind']
    },
    {
      name: 'Task Manager',
      description: 'Productivity app with real-time sync',
      image: '/images/project3.jpg',
      link: '#',
      tags: ['React', 'Node.js', 'MongoDB']
    }
  ]

  return (
    <main className={`bg-gray-950 text-white scroll-smooth overflow-hidden ${inter.className}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute -inset-10 opacity-20 blur-3xl"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15), transparent 50%)`
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 group"
        >
          <FaArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 sm:p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center gap-3 group relative">
              {/* Animated Profile Image */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-spin-slow">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20 bg-gray-900">
                    <Image
                      src="/images/Aromal black.jpg"
                      alt="Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
              </div>

              {/* Animated Name */}
              <div className="relative">
                <span
                  className={`${greatVibes.className} text-3xl sm:text-4xl font-bold tracking-wide
                  bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent
                  drop-shadow-[0_0_10px_rgba(255,0,255,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(255,0,255,0.8)]
                  transition-all duration-500 ease-in-out relative`}
                >
                  Aromal M G
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-purple-500 group-hover:w-full transition-all duration-500"></span>
                </span>
              </div>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-xl p-2.5 text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-8">
            {['Home', 'About', 'Projects',].map((item, index) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`${navFont.className} text-xl font-semibold text-white transition-all duration-500 transform hover:scale-110 relative group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">
                  {item}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-20"></span>
              </Link>
            ))}
            
            <Popover className="relative">
              <PopoverButton className={`${navFont.className} flex items-center gap-1 text-xl font-semibold text-white transition-all duration-500 transform hover:scale-110 group`}>
                More <ChevronDownIcon className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </PopoverButton>
              <PopoverPanel className="absolute top-full mt-2 w-56 rounded-2xl bg-gray-800/95 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 p-4 space-y-2">
                <Link href="#" className="block px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:translate-x-2">Blog</Link>
                <Link href="#" className="block px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:translate-x-2">Resources</Link>
                <Link href="#" className="block px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:translate-x-2">Testimonials</Link>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/login"
              className={`${navFont.className} text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-2 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:from-purple-500 hover:to-pink-400`}
            >
              Login
            </Link>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-gray-900/95 backdrop-blur-xl px-6 py-6 border-l border-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                  <Image 
                    src="/images/Aromal black.jpg" 
                    alt="Logo" 
                    width={40} 
                    height={40} 
                    className="rounded-full border border-white/20" 
                  />
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Aromal M G
                </span>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <XMarkIcon className="h-6 w-6 text-gray-300" />
              </button>
            </div>
            <div className="mt-8 space-y-4">
              {['Home', 'About', 'Projects', 'Contact', 'Login'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block text-lg py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:translate-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-5 sm:px-6 pt-28 sm:pt-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-black"></div>
        <Image
          src="/images/laptop.jpg"
          alt="Background"
          fill
          className="absolute inset-0 object-cover opacity-20"
          priority
        />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-6 h-6 bg-yellow-400 rounded-full blur-sm opacity-60"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce animation-delay-1000">
          <div className="w-8 h-8 bg-purple-400 rounded-full blur-sm opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-pulse">
            <FaStar className="text-yellow-400 w-4 h-4" />
            <span className="text-sm text-gray-300">Available for freelance work</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          </div>

          <TypeAnimation
            sequence={[
              'Hi, I\'m Aromal',
              1000,
              'Full Stack Developer',
              2000,
              'MERN Stack Specialist',
              2000,
              'Creative Problem Solver',
              2000,
            ]}
            wrapper="h1"
            repeat={Infinity}
            cursor={true}
            className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text leading-tight mb-6"
          />
          
          <p className="mt-6 text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            I&apos;m a passionate developer proudly from the beautiful city of Kollam in Kerala who loves building 
            <span className="text-transparent bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text font-semibold"> beautiful </span>
            and 
            <span className="text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text font-semibold"> functional </span>
            web applications. I specialize in crafting full-stack solutions using modern technologies.
          </p>

          {/* Animated CTA Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all duration-500 transform hover:scale-105
                  bg-gradient-to-r ${link.color} overflow-hidden`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-sm">{link.icon}</span>
                  {link.name}
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            {[
              { icon: <FaGithub className="w-6 h-6" />, color: 'hover:text-gray-400', href: '#' },
              { icon: <FaLinkedin className="w-6 h-6" />, color: 'hover:text-blue-400', href: '#' },
              { icon: <FaYoutube className="w-6 h-6" />, color: 'hover:text-red-400', href: 'https://youtube.com/@ar19n_99.9k?si=88OvcmwN22bPfqX' },
              { icon: <FaInstagram className="w-6 h-6" />, color: 'hover:text-pink-400', href: '#' },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className={`p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 transition-all duration-300 transform hover:scale-110 hover:bg-white/10 ${social.color}`}
                style={{ animationDelay: `${index * 100 + 800}ms` }}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
              By The Numbers
            </h2>
            <p className="text-gray-400 text-lg">Metrics that define my journey</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.name} 
                className="group text-center p-6 rounded-3xl bg-gray-800/30 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.name}</p>
                <div className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 mt-3 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECT SHOWCASE ================= */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 px-4">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
              <FaRocket className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Featured Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text mb-4">
              Creative Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore my portfolio of innovative web applications and digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-6">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    View Project
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950 text-gray-400 py-16 border-t border-white/10 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                  <Image
                    src="/images/Aromal black.jpg"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="rounded-full border border-white/20"
                  />
                </div>
                <span className={`${greatVibes.className} text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent`}>
                  Aromal M G
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Crafting digital experiences with modern technologies and creative solutions. 
                Let&apos;s build something amazing together!
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <FaGithub className="w-5 h-5" />, href: '#', color: 'hover:text-gray-300' },
                  { icon: <FaLinkedin className="w-5 h-5" />, href: '#', color: 'hover:text-blue-400' },
                  { icon: <FaYoutube className="w-5 h-5" />, href: '#', color: 'hover:text-red-400' },
                  { icon: <FaInstagram className="w-5 h-5" />, href: '#', color: 'hover:text-pink-400' },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Projects', 'Contact', 'Blog'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-2 block py-1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Consulting', 'Maintenance'].map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-300 block py-1 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">Subscribe to get updates on new projects and tips.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500 text-sm">
              &copy; 2025 Aromal M G. All rights reserved. | Crafted with 💜 and ⚡
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes borderGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-borderGlow {
          background-size: 200% 200%;
          animation: borderGlow 4s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .bg-grid-white\/\[0\.02\] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3e%3cpath d='m0 .5h31.5m-32 16h32m-32 15h32'/%3e%3c/svg%3e");
        }
      `}</style>
    </main>
  )
}
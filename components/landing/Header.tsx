'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { List, X, WhatsappLogo, Question, SignIn } from 'phosphor-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Beneficios', href: '/#beneficios' },
    { label: 'Planes', href: '/#planes' },
    { label: 'Preguntas', href: '/#preguntas' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 border-b-[#101d69] ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-white'
        }`}
      >
        <div className="w-full px-12 sm:px-16 lg:px-24">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <img src="/logopng.png" alt="Nuvex Logo" className="h-12 lg:h-14 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#101d69] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <a
                href="https://app.nuvex.pe"
                className="px-3 xl:px-4 py-2 text-sm font-semibold text-[#101d69] bg-transparent border border-[#101d69] rounded-full hover:bg-[#101d69] hover:text-white transition-all whitespace-nowrap flex items-center gap-1.5"
              >
                <SignIn size={16} weight="bold" />
                Ingresar
              </a>
              <a
                href="https://app.nuvex.pe/register"
                className="px-3 xl:px-4 py-2 text-sm font-semibold text-white bg-[#101d69] rounded-full hover:bg-[#0d1650] transition-all whitespace-nowrap"
              >
                Registrarme
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#101d69]"
            >
              {isOpen ? (
                <X size={24} weight="bold" />
              ) : (
                <List size={24} weight="bold" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 py-4 px-4 shadow-xl"
          >
            <nav className="flex flex-col gap-3 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-base font-medium text-gray-700 hover:text-[#101d69] py-3 px-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 mt-2">
              <a
                href="https://app.nuvex.pe"
                className="w-full px-4 py-3 text-base font-semibold text-[#101d69] bg-transparent border border-[#101d69] rounded-full text-center active:bg-gray-50 flex items-center justify-center gap-2"
              >
                <SignIn size={18} weight="bold" />
                Ingresar
              </a>
              <a
                href="https://app.nuvex.pe/register"
                className="w-full px-4 py-3 text-base font-semibold text-white bg-[#101d69] rounded-full text-center active:bg-[#0d1650]"
              >
                Registrarme
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Offset for fixed header */}
      <div className="h-16 lg:h-20" id="inicio" />
    </>
  )
}

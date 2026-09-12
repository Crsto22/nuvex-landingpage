'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { List, SignIn } from 'phosphor-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

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
    { label: 'Asistencias', href: '/#asistencias' },
    { label: 'Planes', href: '/#planes' },
    { label: 'Sistemas a medida', href: '/#sistemas' },
    { label: 'Preguntas', href: '/#preguntas' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
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
                  className="group relative text-sm font-medium text-[#101d69] transition-colors whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-[#101d69] transition-all duration-300 ease-out group-hover:w-full" />
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
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#101d69] shadow-md border border-gray-100"
                  aria-label="Abrir menú"
                >
                  <List size={24} weight="bold" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] bg-white p-0 sm:max-w-xs">
                <SheetHeader className="border-b border-gray-100 p-5">
                  <SheetTitle asChild>
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      <img src="/logopng.png" alt="Nuvex Logo" className="h-10 w-auto" />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-1 px-3 py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-base font-medium text-gray-700 hover:text-[#101d69] py-3 px-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-3 border-t border-gray-100 p-5">
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
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Offset for fixed header */}
      <div className="h-16 lg:h-20" id="inicio" />
    </>
  )
}

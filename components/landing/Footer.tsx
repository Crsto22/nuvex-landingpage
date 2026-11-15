'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  WhatsappLogo,
  InstagramLogo,
  TiktokLogo,
} from 'phosphor-react'
import { company, loginUrl, registerUrl, whatsappUrl } from '@/lib/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Producto',
      links: [
        {
          label: 'Facturación electrónica SUNAT',
          href: '/facturacion-electronica',
        },
        { label: 'Sistema POS', href: '/sistema-pos' },
        { label: 'Enlace de Envíos', href: '/envios' },
        { label: 'Precios y planes', href: '/precios' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sistemas a medida', href: '/sistemas-a-medida' },
        { label: 'Consulta de comprobantes', href: '/consulta' },
        { label: 'Ingresar', href: loginUrl, external: true },
        { label: 'Crear cuenta', href: registerUrl, external: true },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Política de privacidad', href: '/privacidad' },
        { label: 'Términos y condiciones', href: '/terminos' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer id="contacto" className="bg-[#101d69] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Top section with logo and description */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand section */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logopng.webp"
                alt="Nuvex — POS y facturación electrónica SUNAT"
                width={190}
                height={63}
                sizes="190px"
                className="h-10 w-auto brightness-0 invert md:h-12"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              POS y facturación electrónica SUNAT para tiendas y negocios en Perú.
              Controla, vende y crece desde un solo lugar.
            </p>
            <div className="flex gap-4">
              <a
                href={company.social[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                title="Instagram"
              >
                <InstagramLogo size={20} weight="bold" />
              </a>
              <a
                href={company.social[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                title="TikTok"
              >
                <TiktokLogo size={20} weight="bold" />
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                title="WhatsApp"
              >
                <WhatsappLogo size={20} weight="bold" />
              </a>
            </div>
          </motion.div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="font-semibold text-base mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left text-white/70 text-sm">
            <p>
              © {currentYear} Nuvex. Todos los derechos reservados.
            </p>
            <address className="mt-2 not-italic text-white/60 text-xs leading-relaxed">
              {company.legalName} · RUC {company.ruc}
              <br />
              {company.address.street}, {company.address.district},{' '}
              {company.address.region} — {company.address.countryName}
              <br />
              <a
                href={`tel:${company.phone}`}
                className="hover:text-white transition-colors"
              >
                {company.phoneLabel}
              </a>{' '}
              ·{' '}
              <a
                href={`mailto:${company.email}`}
                className="hover:text-white transition-colors"
              >
                {company.email}
              </a>
            </address>
          </div>

          {/* Security badges */}
          <div className="flex items-center gap-4 text-xs text-white/70">
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span>
              <span>Datos protegidos</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

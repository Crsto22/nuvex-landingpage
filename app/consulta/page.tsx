'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarBlank } from 'phosphor-react'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import FloatingButtons from '@/components/landing/FloatingButtons'
import { CPE_API_BASE_URL } from '@/lib/api'

type ConsultaCpeResponse = {
  rucEmisor: string
  tipoComprobante: string
  serie: string
  correlativo: number
  fechaEmision: string
  importeTotal: string
  estado: string | null
  sunatEstado: string | null
  pdfDisponible: boolean
  xmlDisponible: boolean
  cdrDisponible: boolean
  pdfUrl: string | null
  xmlUrl: string | null
  cdrUrl: string | null
}

const tiposComprobante = [
  { label: 'Factura', value: 'FACTURA' },
  { label: 'Boleta', value: 'BOLETA' },
  { label: 'Nota de Credito', value: 'NOTA_CREDITO' },
  { label: 'Nota de Debito', value: 'NOTA_DEBITO' },
  { label: 'Guia de Remision Remitente', value: 'GUIA_REMISION_REMITENTE' },
]

function downloadUrl(url: string | null) {
  if (!url) return '#'
  if (/^https?:\/\//i.test(url)) return url
  return `${CPE_API_BASE_URL}${url.startsWith('/') ? url : `/${url}`}`
}

export default function ConsultaCPE() {
  const [formData, setFormData] = useState({
    rucEmisor: '',
    tipoComprobante: 'FACTURA',
    serie: '',
    correlativo: '',
    fechaEmision: '',
    importeTotal: '',
  })
  const [resultado, setResultado] = useState<ConsultaCpeResponse | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResultado(null)

    try {
      const response = await fetch(`${CPE_API_BASE_URL}/api/public/cpe/consulta`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rucEmisor: formData.rucEmisor.trim(),
          tipoComprobante: formData.tipoComprobante,
          serie: formData.serie.trim().toUpperCase(),
          correlativo: Number(formData.correlativo),
          fechaEmision: formData.fechaEmision,
          importeTotal: formData.importeTotal,
        }),
      })
      const body = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error('Comprobante no encontrado')
      }

      setResultado(body as ConsultaCpeResponse)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Comprobante no encontrado')
    } finally {
      setLoading(false)
    }
  }

  const resetConsulta = () => {
    setResultado(null)
    setError('')
    setLoading(false)
    setFormData({
      rucEmisor: '',
      tipoComprobante: 'FACTURA',
      serie: '',
      correlativo: '',
      fechaEmision: '',
      importeTotal: '',
    })
  }

  return (
    <main className="w-full bg-gray-50 font-sans">
      <Header />
      <div className="min-h-screen pt-8 pb-20 px-4 flex flex-col items-center justify-center bg-none bg-no-repeat bg-left md:bg-[url('/fondos/fondo2.png')] md:bg-[length:50%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="hidden md:flex justify-center">
              <img
                src="/iconos/comprobantes.png"
                alt="Comprobantes"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            <div>
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#101d69] tracking-tight">
                  Consulta <span className="text-[#fd741a]">CPE</span>
                </h1>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="h-14 w-14 animate-spin rounded-full border-4 border-[#101d69]/15 border-t-[#fd741a]" />
                  <p className="mt-5 text-sm font-bold text-[#101d69]">Buscando comprobante...</p>
                </div>
              ) : resultado ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl md:p-8"
                >
                  <div className="mb-6 text-center">
                    <p className="text-base font-extrabold text-[#101d69]">
                      {resultado.tipoComprobante.replaceAll('_', ' ')} {resultado.serie}-{resultado.correlativo}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Estado: {resultado.estado ?? 'Registrado'} - SUNAT: {resultado.sunatEstado ?? 'Sin estado'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a
                      href={downloadUrl(resultado.pdfUrl)}
                      className="rounded-full bg-[#101d69] px-4 py-3 text-center text-sm font-bold text-white transition-all hover:bg-[#0d1650] active:scale-[0.98]"
                    >
                      Descargar PDF
                    </a>
                    <a
                      href={downloadUrl(resultado.xmlUrl)}
                      aria-disabled={!resultado.xmlDisponible}
                      className={`rounded-full px-4 py-3 text-center text-sm font-bold transition-all active:scale-[0.98] ${
                        resultado.xmlDisponible
                          ? 'bg-[#101d69] text-white hover:bg-[#0d1650]'
                          : 'pointer-events-none bg-gray-200 text-gray-500'
                      }`}
                    >
                      Descargar XML
                    </a>
                    <a
                      href={downloadUrl(resultado.cdrUrl)}
                      aria-disabled={!resultado.cdrDisponible}
                      className={`rounded-full px-4 py-3 text-center text-sm font-bold transition-all active:scale-[0.98] ${
                        resultado.cdrDisponible
                          ? 'bg-[#101d69] text-white hover:bg-[#0d1650]'
                          : 'pointer-events-none bg-gray-200 text-gray-500'
                      }`}
                    >
                      Descargar CDR
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={resetConsulta}
                    className="mt-6 w-full rounded-full border-2 border-[#fd741a] px-4 py-3 text-sm font-bold text-[#fd741a] transition-all hover:bg-[#fd741a] hover:text-white active:scale-[0.98]"
                  >
                    Hacer otra consulta
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="ruc" className="block text-sm font-bold text-[#101d69]">
                      RUC de la Empresa Emisora
                    </label>
                    <input
                      type="text"
                      id="ruc"
                      placeholder="Ejemplo: 20123456789"
                      value={formData.rucEmisor}
                      onChange={(e) => setFormData({
                        ...formData,
                        rucEmisor: e.target.value.replace(/\D/g, '').slice(0, 11),
                      })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#101d69] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="tipo" className="block text-sm font-bold text-[#101d69]">
                      Tipo de comprobante
                    </label>
                    <div className="relative">
                      <select
                        id="tipo"
                        value={formData.tipoComprobante}
                        onChange={(e) => setFormData({...formData, tipoComprobante: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#101d69] focus:border-transparent transition-all"
                      >
                        {tiposComprobante.map((tipo) => (
                          <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="serie" className="block text-sm font-bold text-[#101d69]">
                        Serie
                      </label>
                      <input
                        type="text"
                        id="serie"
                        placeholder="Ejemplo: F001"
                        value={formData.serie}
                        onChange={(e) => setFormData({...formData, serie: e.target.value.toUpperCase()})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#101d69] focus:border-transparent transition-all uppercase"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="correlativo" className="block text-sm font-bold text-[#101d69]">
                        Correlativo
                      </label>
                      <input
                        type="text"
                        id="correlativo"
                        placeholder="Ejemplo: 114"
                        value={formData.correlativo}
                        onChange={(e) => setFormData({...formData, correlativo: e.target.value.replace(/\D/g, '')})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#101d69] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fecha" className="block text-sm font-bold text-[#101d69]">
                        Fecha de emision
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="fecha"
                          value={formData.fechaEmision}
                          onChange={(e) => setFormData({...formData, fechaEmision: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#101d69] focus:border-transparent transition-all [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full cursor-pointer"
                          required
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                          <CalendarBlank size={20} weight="bold" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="importe" className="block text-sm font-bold text-[#101d69]">
                        Importe total
                      </label>
                      <input
                        type="number"
                        id="importe"
                        min="0"
                        step="0.01"
                        placeholder="Ejemplo: 150.00"
                        value={formData.importeTotal}
                        onChange={(e) => setFormData({...formData, importeTotal: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#101d69] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-bold text-red-700">
                      {error}
                    </div>
                  )}

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full bg-[#fd741a] hover:bg-[#e5660f] text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                    >
                      Buscar comprobante
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
      <FloatingButtons />
    </main>
  )
}

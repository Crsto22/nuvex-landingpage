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
        throw new Error(body?.message ?? 'No se encontro el comprobante.')
      }

      setResultado(body as ConsultaCpeResponse)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo consultar el comprobante.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="w-full bg-gray-50 font-sans">
      <Header />
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl px-4"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#101d69] mb-4 tracking-tight">
              Consulta de Comprobantes
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto">
              Ingresa los datos para buscar y descargar tu comprobante electronico en formato PDF, XML y CDR.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="ruc" className="block text-sm font-bold text-gray-700">
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
                <label htmlFor="tipo" className="block text-sm font-bold text-gray-700">
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
                  <label htmlFor="serie" className="block text-sm font-bold text-gray-700">
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
                  <label htmlFor="correlativo" className="block text-sm font-bold text-gray-700">
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
                  <label htmlFor="fecha" className="block text-sm font-bold text-gray-700">
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
                  <label htmlFor="importe" className="block text-sm font-bold text-gray-700">
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
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {error}
                </div>
              )}

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#101d69] hover:bg-[#0d1650] disabled:bg-gray-400 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                >
                  {loading ? 'Buscando...' : 'Buscar comprobante'}
                </button>
              </div>
            </form>

            {resultado && (
              <div className="mt-8 border-t border-gray-100 pt-6">
                <div className="mb-5">
                  <p className="text-sm font-bold text-gray-900">
                    {resultado.tipoComprobante.replaceAll('_', ' ')} {resultado.serie}-{resultado.correlativo}
                  </p>
                  <p className="text-sm text-gray-500">
                    Estado: {resultado.estado ?? 'Registrado'} - SUNAT: {resultado.sunatEstado ?? 'Sin estado'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={downloadUrl(resultado.pdfUrl)}
                    className="text-center rounded-xl bg-[#101d69] px-4 py-3 text-sm font-bold text-white hover:bg-[#0d1650]"
                  >
                    Descargar PDF
                  </a>
                  <a
                    href={downloadUrl(resultado.xmlUrl)}
                    aria-disabled={!resultado.xmlDisponible}
                    className={`text-center rounded-xl px-4 py-3 text-sm font-bold ${
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
                    className={`text-center rounded-xl px-4 py-3 text-sm font-bold ${
                      resultado.cdrDisponible
                        ? 'bg-[#101d69] text-white hover:bg-[#0d1650]'
                        : 'pointer-events-none bg-gray-200 text-gray-500'
                    }`}
                  >
                    Descargar CDR
                  </a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  )
}

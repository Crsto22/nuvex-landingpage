import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consulta de Comprobantes Electrónicos (CPE)',
  description:
    'Consulta y descarga tus comprobantes electrónicos (facturas, boletas, notas de crédito y débito) en formato PDF, XML y CDR ingresando el RUC, tipo, serie, correlativo, fecha e importe.',
  keywords: [
    'consulta de comprobantes',
    'comprobantes electrónicos',
    'descargar factura electrónica',
    'descargar boleta electrónica',
    'PDF XML CDR',
    'CPE SUNAT',
  ],
  alternates: {
    canonical: '/consulta',
  },
  openGraph: {
    title: 'Consulta de Comprobantes Electrónicos (CPE) | Nuvex',
    description:
      'Consulta y descarga tus comprobantes electrónicos en PDF, XML y CDR ingresando el RUC, tipo, serie, correlativo, fecha e importe.',
    url: '/consulta',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ConsultaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}

import type { Metadata } from 'next'
import './globals.css'
import AgeGate from '../../components/AgeGate'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Velvet Sanctuary | Intimate Discoveries',
  description:
    'A curated sanctuary for intimate exploration — body-safe products, discreet delivery, and a judgment-free embrace of desire.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AgeGate />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#2c1f14',
              color: '#f5e6d3',
              borderRadius: '9999px',
            },
          }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

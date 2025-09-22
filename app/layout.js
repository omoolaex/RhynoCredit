import './globals.css'
import Header from '../components/global/header'
import Footer from '@/components/global/Footer'

export const metadata = {
  metadataBase: new URL('https://www.rhynocredit.com'),
  title: {
    default: 'Rhyno Credit',
    template: '%s | Rhyno Credit',
  },
  description: 'Fueling your business journey with fast, flexible SME financing.',
  openGraph: {
    title: 'Rhyno Credit',
    description: 'Fueling your business journey. Got you secured.',
    url: 'https://www.rhynocredit.com',
    siteName: 'Rhyno Credit',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FBFCFD] text-[#010B07] font-axiforma">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crypto Dashboard',
  description: 'Become an investor in the crypto space',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#121212] text-white flex h-screen`}>
        <Sidebar />
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  )
}
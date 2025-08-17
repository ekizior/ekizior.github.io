import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Erik Kizior',
  description: 'Personal website and portfolio of Erik Kizior',
  keywords: ['portfolio', 'personal website', 'developer', 'software engineer'],
  authors: [{ name: 'Erik Kizior' }],
  creator: 'Erik Kizior',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Erik Kizior',
    description: 'Personal website and portfolio of Erik Kizior',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 
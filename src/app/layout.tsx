import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Erik Kizior - Personal Website',
  description: 'Personal website and portfolio of Erik Kizior',
  keywords: ['portfolio', 'personal website', 'developer', 'software engineer'],
  authors: [{ name: 'Erik Kizior' }],
  creator: 'Erik Kizior',
  openGraph: {
    title: 'Erik Kizior - Personal Website',
    description: 'Personal website and portfolio of Erik Kizior',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erik Kizior - Personal Website',
    description: 'Personal website and portfolio of Erik Kizior',
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
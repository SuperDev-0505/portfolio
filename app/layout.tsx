import type { Metadata } from 'next'
import './globals.css'
import LayoutWrapper from '@/components/LayoutWrapper'
import CursorSpotlight from '@/components/CursorSpotlight'

export const metadata: Metadata = {
  title: 'Atila Manoel Soares da Silva - Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CursorSpotlight />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      </body>
    </html>
  )
}

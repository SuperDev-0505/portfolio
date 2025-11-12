'use client'

import { usePathname } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isArchivePage = pathname === '/archive'

  if (isArchivePage) {
    return <>{children}</>
  }

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Sidebar />
      <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
        {children}
        <Footer />
      </main>
    </div>
  )
}


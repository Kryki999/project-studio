import type { Metadata } from 'next'
import { Roboto_Condensed, Lora } from 'next/font/google'
import './globals.css'
// Swiper CSS is loaded within the ReviewsSection component only on pages that use it
import SiteHeader from '@/components/SiteHeader'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import SiteFooter from '@/components/SiteFooter'

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
})

const lora = Lora({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Graficad – Projektowanie i Nadzór Budowlany',
  description:
    'Graficad Piotr Mróz – kompleksowe projektowanie architektoniczne, nadzór budowlany, kosztorysy oraz audyty energetyczne. Olsztyn, ul. Kołobrzeska 50/lok. 109.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${robotoCondensed.variable} ${lora.variable} overflow-x-hidden`}>
      <head />
      <body className="overflow-x-hidden">
        <div
          className="fixed inset-0 -z-10 pointer-events-none dark:hidden"
          style={{
            background:
              'radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%), radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%) rgb(254, 252, 255)',
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieConsentBanner />
      </body>
    </html>
  )
}

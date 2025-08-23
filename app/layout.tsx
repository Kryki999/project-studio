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
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieConsentBanner />
      </body>
    </html>
  )
}

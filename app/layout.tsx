import type { Metadata } from 'next'
import { Roboto_Condensed, Lora } from 'next/font/google'
import './globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SiteHeader from '@/components/SiteHeader'

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-sans',
})

const lora = Lora({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
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
    <html lang="pl" className={`${robotoCondensed.variable} ${lora.variable}`}>
      <head />
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}

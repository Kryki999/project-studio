"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()
    const isHome = pathname === '/'
    const showSolidBackground = isHome ? (isScrolled || isMenuOpen) : true

    useEffect(() => {
        if (!isHome) return
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isHome])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${showSolidBackground ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Link href="/" className={`text-2xl font-bold transition-colors duration-300 ${showSolidBackground ? 'text-gray-900' : 'text-white'
                            }`}>
                            GRAFICAD
                        </Link>
                    </div>

                    <div className="flex items-center space-x-3">
                        <a
                            href="https://www.facebook.com/piotr.mroz.olsztyn?locale=pl_PL"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="inline-flex items-center"
                        >
                            <img src="/facebook-square.svg" alt="Facebook" className="h-7 w-7 md:h-5 md:w-5" />
                        </a>
                        <nav className="hidden md:flex items-center space-x-8">
                            <a
                                href="https://www.facebook.com/piotr.mroz.olsztyn?locale=pl_PL"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="inline-flex items-center"
                            >
                                <img src="/facebook-square.svg" alt="Facebook" className="h-5 w-5" />
                            </a>
                            <Link
                                prefetch={false}
                                href="/#projects"
                                className={`text-sm transition-colors ${showSolidBackground ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                PROJEKTY
                            </Link>
                            <Link
                                prefetch={false}
                                href="/#services"
                                className={`text-sm transition-colors ${showSolidBackground ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                USŁUGI
                            </Link>
                            <Link
                                prefetch={false}
                                href="/#about"
                                className={`text-sm transition-colors ${showSolidBackground ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                O NAS
                            </Link>
                        </nav>
                        <a href="tel:+48506760344" className="shrink-0">
                            <Button size="sm" className="bg-gray-900 text-white hover:bg-gray-800">
                                <img src="/phone.svg" alt="Telefon" className="h-4 w-4 mr-2" /> ZADZWOŃ
                            </Button>
                        </a>
                        <button
                            className={`md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 transition-colors ${showSolidBackground
                                ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-200'
                                : 'text-white hover:text-white/90 focus:ring-white/30'
                                }`}
                            aria-label="Toggle menu"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen ? (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
                        <Link href="/#projects" className="block text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                            PROJEKTY
                        </Link>
                        <Link href="/#services" className="block text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                            USŁUGI
                        </Link>
                        <Link href="/#about" className="block text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                            O NAS
                        </Link>
                    </div>
                </div>
            ) : null}
        </header>
    )
}



"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

type ConsentValue = "accepted" | "rejected"

const STORAGE_KEY = "cookie-consent"

export default function CookieConsentBanner() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY) as ConsentValue | null
            if (!stored) {
                setVisible(true)
            }
        } catch {
            // Ignore read errors (SSR or private mode)
        }
    }, [])

    const setConsent = (value: ConsentValue) => {
        try {
            localStorage.setItem(STORAGE_KEY, value)
        } catch {
            // Ignore write errors
        }
        setVisible(false)
        // Hook: here you can init analytics only if value === "accepted"
    }

    if (!visible) return null

    return (
        <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:pb-6">
            <div className="mx-auto max-w-6xl rounded-xl border border-gray-200 bg-[#f9f9f9] text-gray-800 shadow-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-5">
                    <p className="text-sm leading-relaxed">
                        Ta strona używa plików cookies w celach technicznych i statystycznych. Możesz zaakceptować lub odrzucić pliki cookies. Więcej informacji znajdziesz w
                        {" "}
                        <Link href="/polityka-prywatnosci" className="underline underline-offset-2 hover:text-gray-900">
                            Polityce prywatności
                        </Link>
                        .
                    </p>
                    <div className="flex gap-2 sm:ml-auto w-full sm:w-auto">
                        <button
                            type="button"
                            onClick={() => setConsent("rejected")}
                            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                            aria-label="Odrzucam cookies (tylko techniczne)"
                        >
                            Odrzucam
                        </button>
                        <button
                            type="button"
                            onClick={() => setConsent("accepted")}
                            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
                            aria-label="Akceptuję cookies"
                        >
                            Akceptuję
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



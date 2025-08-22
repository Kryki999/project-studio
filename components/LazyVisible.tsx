"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type LazyVisibleProps = {
    children: ReactNode
    rootMargin?: string
}

export default function LazyVisible({ children, rootMargin = "200px" }: LazyVisibleProps) {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (!ref.current || isVisible) return
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { root: null, rootMargin, threshold: 0.01 }
        )
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [rootMargin, isVisible])

    return <div ref={ref}>{isVisible ? children : null}</div>
}



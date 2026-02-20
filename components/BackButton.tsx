"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
    fallbackHref: string;
    label?: string;
}

export default function BackButton({ fallbackHref, label = "Wróć" }: BackButtonProps) {
    const router = useRouter();

    const handleBack = () => {
        // If there's browser history, go back; otherwise navigate to fallback
        if (window.history.length > 2) {
            router.back();
        } else {
            router.push(fallbackHref);
        }
    };

    return (
        <button
            onClick={handleBack}
            className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors duration-300"
        >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>{label}</span>
        </button>
    );
}

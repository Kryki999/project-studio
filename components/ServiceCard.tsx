"use client";

import Lottie from "lottie-react";

interface ServiceCardProps {
    title: string;
    description: string;
    animation: any;
}

export default function ServiceCard({ title, description, animation }: ServiceCardProps) {
    return (
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl border border-white/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col items-center text-center">
            <Lottie animationData={animation} className="w-40 h-40 mb-4" loop={true} />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}
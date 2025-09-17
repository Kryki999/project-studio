"use client";

import Lottie from "lottie-react";

interface ServiceCardProps {
    title: string;
    description: string;
    animation: any;
}

export default function ServiceCard({ title, description, animation }: ServiceCardProps) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <Lottie animationData={animation} className="w-40 h-40 mb-4" loop={true} />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}
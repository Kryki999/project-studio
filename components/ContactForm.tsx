"use client";
import React from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        emailjs.sendForm(
            "service_cgsv0ej",
            "template_qg1t2eg",
            form,
            "nrtCOHAYKsICY17Cr"
        ).then(
            (result) => {
                console.log("Wiadomość wysłana:", result.text);
                alert("Wiadomość została wysłana!");
                form.reset();
            },
            (error) => {
                console.error("Błąd:", error.text);
                alert("Coś poszło nie tak...");
            }
        );
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Imię i nazwisko</label>
                <input
                    type="text"
                    name="from_name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    placeholder="Wpisz swoje imię i nazwisko"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                <input
                    type="email"
                    name="from_email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    placeholder="twoj@email.com"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Opis inwestycji</label>
                <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Opisz krótko zakres i oczekiwania..."
                    required
                ></textarea>
            </div>
            <Button type="submit" className="w-full bg-white text-gray-900 hover:bg-gray-100" size="lg">
                Wyślij wiadomość
            </Button>
        </form>
    );
}
"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Loader2, Send } from "lucide-react"
import { toast } from "sonner"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        toast.error(data.error ?? "Coś poszło nie tak...", {
          description: "Spróbuj ponownie lub skontaktuj się telefonicznie.",
        })
        return
      }

      toast.success("Wiadomość została wysłana!", {
        description: "Odpowiemy najszybciej jak to możliwe.",
      })
      form.reset()
    } catch {
      toast.error("Nie udało się wysłać wiadomości.", {
        description: "Sprawdź połączenie i spróbuj ponownie.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-300 text-sm tracking-wide">
          Imię i nazwisko
        </Label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Wpisz swoje imię i nazwisko"
          required
          disabled={isSubmitting}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:border-white/40 focus-visible:ring-white/20 h-12 transition-all duration-300"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-300 text-sm tracking-wide">
          E-mail
        </Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="twoj@email.com"
          required
          disabled={isSubmitting}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:border-white/40 focus-visible:ring-white/20 h-12 transition-all duration-300"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-gray-300 text-sm tracking-wide">
          Telefon <span className="text-gray-500 font-normal">(opcjonalnie)</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          name="phone"
          placeholder="np. 500 123 456"
          disabled={isSubmitting}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:border-white/40 focus-visible:ring-white/20 h-12 transition-all duration-300"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-300 text-sm tracking-wide">
          Opis inwestycji
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Opisz krótko zakres i oczekiwania..."
          required
          disabled={isSubmitting}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:border-white/40 focus-visible:ring-white/20 resize-none transition-all duration-300 min-h-[120px]"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-white text-gray-900 hover:bg-gray-100 disabled:opacity-70 transition-all duration-300 h-12 text-base font-medium"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Wysyłanie...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Wyślij wiadomość
          </>
        )}
      </Button>
    </form>
  )
}

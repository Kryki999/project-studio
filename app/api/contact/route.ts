import { NextResponse } from "next/server"
import { Resend } from "resend"
import { contactSchema } from "@/lib/contact-schema"
import {
  adminNotificationHtml,
  adminNotificationSubject,
} from "@/lib/emails/admin-notification"
import {
  clientConfirmationHtml,
  clientConfirmationSubject,
} from "@/lib/emails/client-confirmation"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      const firstError = parsed.error.errors[0]?.message ?? "Nieprawidłowe dane formularza"
      return NextResponse.json({ error: firstError }, { status: 400 })
    }

    const { name, email, phone, message, website } = parsed.data

    if (website) {
      return NextResponse.json({ success: true })
    }

    const apiKey = process.env.RESEND_API_KEY
    const fromEmail =
      process.env.CONTACT_EMAIL_FROM ?? "Graficad <kontakt@graficadpiotrmroz.pl>"
    const toEmail = process.env.CONTACT_EMAIL_TO ?? "graficad@o2.pl"

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY")
      return NextResponse.json(
        { error: "Konfiguracja serwera jest niekompletna" },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const [adminResult, clientResult] = await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject: adminNotificationSubject(name),
        html: adminNotificationHtml({ name, email, phone, message }),
      }),
      resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: clientConfirmationSubject,
        html: clientConfirmationHtml({ name }),
      }),
    ])

    if (adminResult.error || clientResult.error) {
      console.error("Resend error:", adminResult.error ?? clientResult.error)
      return NextResponse.json(
        { error: "Nie udało się wysłać wiadomości. Spróbuj ponownie później." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie później." },
      { status: 500 }
    )
  }
}

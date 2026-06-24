import { emailLayout } from "./base-layout"
import { escapeHtml } from "./escape-html"

type AdminNotificationData = {
  name: string
  email: string
  phone?: string
  message: string
}

export function adminNotificationHtml({ name, email, phone, message }: AdminNotificationData): string {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = phone ? escapeHtml(phone) : null
  const safeMessage = escapeHtml(message)

  const body = `
    <table>
      <tr><th>Imię i nazwisko</th><td>${safeName}</td></tr>
      <tr><th>E-mail</th><td><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
      ${safePhone ? `<tr><th>Telefon</th><td><a href="tel:${safePhone.replace(/\s/g, "")}">${safePhone}</a></td></tr>` : ""}
    </table>
    <div class="message-box">
      <strong>Opis inwestycji</strong>
      <p>${safeMessage}</p>
    </div>
  `

  return emailLayout({
    title: "Nowe zapytanie z formularza",
    subtitle: "Projektowanie i Nadzór Budowlany",
    body,
  })
}

export function adminNotificationSubject(name: string): string {
  return `Nowe zapytanie z formularza — ${name}`
}

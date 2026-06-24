import { emailLayout } from "./base-layout"
import { escapeHtml } from "./escape-html"

type ClientConfirmationData = {
  name: string
}

export function clientConfirmationHtml({ name }: ClientConfirmationData): string {
  const safeName = escapeHtml(name)
  const firstName = safeName.split(" ")[0] || safeName

  const body = `
    <p>Dzień dobry ${firstName},</p>
    <p>dziękujemy za kontakt z Graficad. Otrzymaliśmy Twoje zapytanie i wrócimy z odpowiedzią najszybciej, jak to możliwe.</p>
    <p>W międzyczasie, jeśli sprawa jest pilna, możesz skontaktować się z nami bezpośrednio:</p>
    <div class="contact-block">
      <p><strong>Telefon:</strong> <a href="tel:+48506760344">506 760 344</a></p>
      <p><strong>E-mail:</strong> <a href="mailto:graficad@o2.pl">graficad@o2.pl</a></p>
      <p><strong>Adres:</strong> Kołobrzeska 50/lok. 109, 10-434 Olsztyn</p>
    </div>
    <p>Pozdrawiamy,<br><strong>Graficad Piotr Mróz</strong></p>
  `

  return emailLayout({
    title: "Dziękujemy za kontakt",
    subtitle: "Projektowanie i Nadzór Budowlany",
    body,
  })
}

export const clientConfirmationSubject = "Dziękujemy za kontakt — Graficad"

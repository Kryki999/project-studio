import { escapeHtml } from "./escape-html"

type EmailLayoutOptions = {
  title: string
  subtitle?: string
  body: string
}

export function emailLayout({ title, subtitle, body }: EmailLayoutOptions): string {
  const safeTitle = escapeHtml(title)
  const safeSubtitle = subtitle ? escapeHtml(subtitle) : ""

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f3f4f6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1f2937, #111827); color: #ffffff; padding: 24px; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0 0 4px 0; font-size: 22px; font-weight: 600; letter-spacing: 0.05em; }
    .header p { margin: 0; font-size: 13px; color: #d1d5db; }
    .content { background: #ffffff; padding: 24px; border: 1px solid #e5e7eb; border-top: none; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
    th { background: #f9fafb; font-weight: 600; width: 35%; color: #374151; }
    td { color: #111827; }
    .message-box { background: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #374151; margin-top: 16px; }
    .message-box p { margin: 0; white-space: pre-wrap; }
    .contact-block { background: #f9fafb; padding: 16px; border-radius: 8px; margin-top: 20px; }
    .contact-block p { margin: 4px 0; }
    .footer { text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px; line-height: 1.5; }
    a { color: #374151; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>GRAFICAD</h1>
      ${safeSubtitle ? `<p>${safeSubtitle}</p>` : ""}
    </div>
    <div class="content">
      <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #111827;">${safeTitle}</h2>
      ${body}
    </div>
    <div class="footer">
      <p>Projektowanie i Nadzór Budowlany Graficad Piotr Mróz<br>Kołobrzeska 50/lok. 109, 10-434 Olsztyn</p>
      <p>Wiadomość wygenerowana automatycznie przez formularz kontaktowy na stronie graficadpiotrmroz.pl</p>
    </div>
  </div>
</body>
</html>`
}

import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki")
    .max(100, "Imię i nazwisko może mieć maksymalnie 100 znaków"),
  email: z
    .string()
    .trim()
    .email("Podaj poprawny adres e-mail"),
  phone: z
    .string()
    .trim()
    .refine((value) => value === "" || /^[\d\s+\-()]{7,20}$/.test(value), {
      message: "Podaj poprawny numer telefonu",
    })
    .transform((value) => value || undefined),
  message: z
    .string()
    .trim()
    .min(10, "Opis inwestycji musi mieć co najmniej 10 znaków")
    .max(5000, "Opis inwestycji może mieć maksymalnie 5000 znaków"),
  website: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>

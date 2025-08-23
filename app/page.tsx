import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Mail } from "lucide-react"
import Link from "next/link"
import LazyVisible from "@/components/LazyVisible"
import ReviewsSection from "@/components/ReviewsSection"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header moved to global layout */}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Mobile hero image (sharper variant) */}
        <Image
          src="/minimalist-house-exterior.png"
          alt="Tło hero – minimalist house"
          fill
          priority
          sizes="100dvw"
          quality={100}
          className="object-cover object-center md:hidden"
        />
        {/* Desktop hero image */}
        <Image
          src="/minimalist-house-dusk.png"
          alt="Tło hero – minimalist house"
          fill
          priority
          sizes="100dvw"
          quality={100}
          className="object-cover object-center hidden md:block"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-center text-white max-w-2xl px-6">
          <p className="text-sm tracking-widest mb-4 opacity-90">PROJEKTOWANIE I NADZÓR BUDOWLANY</p>
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight" style={{ fontFamily: 'var(--font-sans)' }}>GRAFICAD</h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">Piotr Mróz • Olsztyn</p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            <Link href="/#projects" className="flex items-center">
              ZOBACZ PROJEKTY
              <img src="/arrow-right.svg" alt="Strzałka" className="ml-2 h-4 w-4 invert" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">O firmie Graficad</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Wychodząc naprzeciw oczekiwaniom naszych klientów, stworzyliśmy biuro, w którym w jednym miejscu można
                zaprojektować i wycenić budynek według indywidualnych wymagań inwestora. Łączymy nowoczesne style
                architektoniczne z klasycznymi formami oraz renowacjami obiektów zabytkowych.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stosujemy najnowsze rozwiązania konstrukcyjne i architektoniczne. Wykonujemy kompleksowe kosztorysy
                budowlane i instalacyjne oraz specjalistyczne audyty energetyczne.
              </p>
              <a href="https://www.facebook.com/piotr.mroz.olsztyn?locale=pl_PL" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="lg">
                  <img src="/facebook-square.svg" alt="Facebook" className="h-5 w-5 mr-2" /> Odwiedź naszego Facebooka
                </Button>
              </a>
            </div>
            <div className="relative">
              <Image
                src="/modern-architect-blueprints.png"
                alt="Architect working on house plans"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 600px, 100vw"
                priority
                quality={70}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Nasze usługi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Projektowanie, nadzór budowlany, kosztorysy oraz audyty energetyczne
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Projektowanie architektoniczne</h3>
              <p className="text-gray-600 mb-6">
                Koncepcje i dokumentacja projektowa z naciskiem na funkcjonalność i estetykę.
              </p>
              <Button variant="outline" size="sm">
                Dowiedz się więcej
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nadzór budowlany i kosztorysy</h3>
              <p className="text-gray-600 mb-6">
                Prowadzenie inwestycji i kontrola jakości prac, rzetelne kosztorysy budowlane i instalacyjne.
              </p>
              <Button variant="outline" size="sm">
                Dowiedz się więcej
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Audyty energetyczne i doradztwo</h3>
              <p className="text-gray-600 mb-6">
                Optymalizacja efektywności energetycznej i dobór nowoczesnych rozwiązań technicznych.
              </p>
              <Button variant="outline" size="sm">
                Dowiedz się więcej
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Wybrane realizacje</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Przegląd projektów odzwierciedlających nasze podejście i standard wykonania
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/projects/minimalist-house" prefetch={false} className="group block cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/minimalist-house-exterior.png"
                  alt="Minimalistyczny dom – realizacja Graficad"
                  width={1200}
                  height={800}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  loading="lazy"
                  quality={70}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Minimalistyczny dom rodzinny</h3>
              <p className="text-gray-600">Współczesna forma, przejrzysty układ i funkcjonalne rozwiązania.</p>
            </Link>

            <Link href="/projects/luxury-modern-villa" prefetch={false} className="group block cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/luxury-modern-villa.png"
                  alt="Luksusowa willa – realizacja Graficad"
                  width={1200}
                  height={800}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  loading="lazy"
                  quality={70}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Luksusowa willa ogrodowa</h3>
              <p className="text-gray-600">
                Elegancka bryła harmonijnie połączona z otoczeniem zieleni.
              </p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <a href="/projects">
              <Button variant="default" size="lg">
                Zobacz wszystkie projekty
                <img src="/arrow-right.svg" alt="Strzałka" className="ml-2 h-4 w-4 invert" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section (lazy mount to reduce TBT) */}
      <LazyVisible>
        <ReviewsSection />
      </LazyVisible>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light mb-6">Porozmawiajmy o Twojej inwestycji</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Skontaktuj się z nami, aby omówić zakres prac i harmonogram. Odpowiemy na wszystkie pytania i doradzimy najlepsze rozwiązania.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img src="/phone.svg" alt="Telefon" className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">506 760 344</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/map-pin.svg" alt="Lokalizacja" className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">Kołobrzeska 50/lok. 109, 10-434 Olsztyn</span>
                </div>
                <div className="text-sm text-gray-400">Godziny: Wkrótce zamknięcie · 16:00 · Otwarcie: wt., 07:00</div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Imię i nazwisko</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    placeholder="Wpisz swoje imię i nazwisko"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    placeholder="twoj@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Opis inwestycji</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Opisz krótko zakres i oczekiwania..."
                  ></textarea>
                </div>
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100" size="lg">
                  Wyślij wiadomość
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer moved to global layout */}
    </div>
  )
}

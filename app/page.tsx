import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Mail } from "lucide-react"
import Link from "next/link"
import LazyVisible from "@/components/LazyVisible"
import ReviewsSection from "@/components/ReviewsSection"
import ServiceCard from "@/components/ServiceCard";
import designAnim from "@/public/animations/design.json";
import constructionAnim from "@/public/animations/construction.json";
import energyAnim from "@/public/animations/energy.json";
import { projects } from "@/lib/projects";
import ContactForm from "@/components/ContactForm";
import LightboxGallery from "@/components/LightboxGallery";
const images = [
  { src: "/referencja1.jpeg", alt: "Referencja 1" },
  { src: "/referencja2.jpeg", alt: "Referencja 2" },
  { src: "/referencja3.jpeg", alt: "Referencja 3" },
  { src: "/referencja4.jpg", alt: "Referencja 4" },
  { src: "/referencja5.jpeg", alt: "Referencja 5" },
  { src: "/referencja6.jpeg", alt: "Referencja 6" },
  { src: "/referencja7.jpeg", alt: "Referencja 7" },
  { src: "/referencja8.jpeg", alt: "Referencja 8" },
  { src: "/referencja9.jpeg", alt: "Referencja 9" },
  { src: "/referencja10.jpeg", alt: "Referencja 10" },
  { src: "/referencja11.jpeg", alt: "Referencja 11" },
]
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

        <div className="relative z-10 text-center text-white max-w-2xl px-6">
          {/* Frosted glass panel behind CTA content */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-12 md:px-12 md:py-16 shadow-2xl">
            <p className="text-sm tracking-[0.3em] mb-4 opacity-80 uppercase">Projektowanie i Nadzór Budowlany</p>
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight" style={{ fontFamily: 'var(--font-sans)' }}>GRAFICAD</h1>
            <p className="text-xl md:text-2xl font-light mb-10 opacity-80">Piotr Mróz • Olsztyn</p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/25 text-white hover:bg-white hover:text-gray-900 transition-all duration-500 px-8 py-3"
            >
              <Link href="/#projects" className="flex items-center">
                ZOBACZ PROJEKTY
                <img src="/arrow-right.svg" alt="Strzałka" className="ml-2 h-4 w-4 invert" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">PROJEKTOWANIE I NADZÓR BUDOWLANY</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Wychodząc naprzeciw oczekiwaniom naszych klientów, stworzyliśmy biuro, w którym w jednym miejscu można
                <strong> zaprojektować i wycenić budynek</strong> według indywidualnych wymagań inwestora. Łączymy nowoczesne style
                architektoniczne z klasycznymi formami oraz renowacjami obiektów zabytkowych.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stosujemy najnowsze rozwiązania konstrukcyjne i architektoniczne. Wykonujemy kompleksowe <strong> kosztorysy
                  budowlane i instalacyjne</strong> oraz specjalistyczne <strong>audyty energetyczne</strong>.
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
      <section id="services" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">NASZE USŁUGI</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Projektowanie, nadzór budowlany, kosztorysy oraz audyty energetyczne
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Projektowanie architektoniczne"
              description="Koncepcje i dokumentacja projektowa z naciskiem na funkcjonalność i estetykę."
              animation={designAnim}
            />
            <ServiceCard
              title="Nadzór budowlany i kosztorysy"
              description="Prowadzenie inwestycji i kontrola jakości prac, rzetelne kosztorysy budowlane i instalacyjne."
              animation={constructionAnim}
            />
            <ServiceCard
              title="Audyty energetyczne i doradztwo"
              description="Optymalizacja efektywności energetycznej i dobór nowoczesnych rozwiązań technicznych."
              animation={energyAnim}
            />
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">WYBRANE REALIZACJE</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Przegląd projektów odzwierciedlających nasze podejście i standard wykonania
            </p>
          </div>

          {/* Tutaj mapujemy projekty */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 6).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                prefetch={false}
                className="group block cursor-pointer"
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 p-3 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      width={1200}
                      height={800}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      loading="lazy"
                      quality={70}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-2 pb-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.summary}</p>
                  </div>
                </div>
              </Link>
            ))}
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
      {/* References Section */}
      <section id="references" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">REFERENCJE</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zaufali nam liczni klienci — poniżej wybrane referencje i rekomendacje.
            </p>
          </div>

          {/* Galeria referencji */}
          <div className="w-full">
            <LightboxGallery images={images} />
          </div>
        </div>
      </section>


      {/* Reviews Section (lazy mount to reduce TBT) */}
      <LazyVisible>
        <ReviewsSection />
      </LazyVisible>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-gray-900 text-white overflow-hidden">
        {/* Subtle ambient glow behind the section */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Informacje kontaktowe */}
            <div>
              <h2 className="text-4xl font-light mb-6">POROZMAWIAJMY O TWOJEJ INWESTYCJI</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Skontaktuj się z nami, aby omówić zakres prac i harmonogram. Odpowiemy na wszystkie pytania i doradzimy najlepsze rozwiązania.
              </p>

              <div className="space-y-5">
                <div className="flex items-center space-x-3">
                  <img src="/phone.svg" alt="Telefon" className="h-5 w-5 opacity-60" />
                  <span className="text-gray-300">506 760 344</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/map-pin.svg" alt="Lokalizacja" className="h-5 w-5 opacity-60" />
                  <span className="text-gray-300">Kołobrzeska 50/lok. 109, 10-434 Olsztyn</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/mail.svg" alt="Email" className="h-5 w-5 opacity-60" />
                  <a
                    href="mailto:graficad@o2.pl"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    graficad@o2.pl
                  </a>
                </div>
              </div>
            </div>

            {/* Formularz kontaktowy – Frosted Glass */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer moved to global layout */}
    </div>
  )
}

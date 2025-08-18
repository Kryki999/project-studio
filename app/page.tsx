"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin, Menu, X } from "lucide-react"
import Link from "next/link"
import ReviewsSection from "@/components/ReviewsSection"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isMenuOpen
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className={`text-2xl font-bold transition-colors duration-300 ${isScrolled || isMenuOpen ? "text-gray-900" : "text-white"
                  }`}
              >
                STUDIO ARCH
              </div>
            </div>

            <div className="flex items-center space-x-3">

              <nav className="hidden md:flex items-center space-x-8">
                <Link
                  href="#projects"
                  className={`text-sm transition-colors ${isScrolled || isMenuOpen
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                    }`}
                >
                  PROJECTS
                </Link>
                <Link
                  href="#services"
                  className={`text-sm transition-colors ${isScrolled || isMenuOpen
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                    }`}
                >
                  SERVICES
                </Link>
                <Link
                  href="#about"
                  className={`text-sm transition-colors ${isScrolled || isMenuOpen
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                    }`}
                >
                  ABOUT
                </Link>
              </nav>
              <a href="tel:+15551234567" className="shrink-0">
                <Button size="sm" className="bg-gray-900 text-white hover:bg-gray-800">
                  <Phone className="h-4 w-4 mr-2" /> ZADZWOŃ
                </Button>
              </a>
              <button
                className={`md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 transition-colors ${isScrolled || isMenuOpen
                  ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-200"
                  : "text-white hover:text-white/90 focus:ring-white/30"
                  }`}
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu (drops below header, call button remains visible) */}
        {isMenuOpen ? (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
              <a
                href="#projects"
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </a>
              <a
                href="#services"
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </a>
            </div>
          </div>
        ) : null}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/minimalist-house-dusk.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-2xl px-6">
          <p className="text-sm tracking-widest mb-4 opacity-90">CREATING SPACES THAT INSPIRE</p>
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">Studio Arch</h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">House Project Agency</p>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            VIEW OUR PROJECTS
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">Architectural Excellence</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We specialize in creating exceptional residential spaces that blend innovative design with functional
                living. Our team of experienced architects and designers work closely with clients to bring their vision
                to life.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From concept to completion, we handle every aspect of your house project with meticulous attention to
                detail and unwavering commitment to quality.
              </p>
              <Button variant="default" size="lg">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <img
                src="/modern-architect-blueprints.png"
                alt="Architect working on house plans"
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
            <h2 className="text-4xl font-light text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive architectural services for residential projects of all scales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Architectural Design</h3>
              <p className="text-gray-600 mb-6">
                Complete architectural design services from initial concept through detailed construction drawings.
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interior Planning</h3>
              <p className="text-gray-600 mb-6">
                Thoughtful interior space planning that maximizes functionality and aesthetic appeal.
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Management</h3>
              <p className="text-gray-600 mb-6">
                Full project management services ensuring your build stays on time and within budget.
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of our recent residential projects showcasing our design philosophy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/minimalist-house-exterior.png"
                  alt="Modern House Project"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Minimalist Family Home</h3>
              <p className="text-gray-600">A contemporary family residence featuring clean lines and open spaces.</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/luxury-modern-villa.png"
                  alt="Luxury Villa Project"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Garden Villa</h3>
              <p className="text-gray-600">
                An elegant villa design that seamlessly integrates with its natural surroundings.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light mb-6">Let's Create Something Amazing</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ready to start your house project? Get in touch with our team to discuss your vision and learn how we
                can bring it to life.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">hello@studioarch.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">123 Design Street, Architecture City</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="text-xl font-bold text-gray-900">STUDIO ARCH</div>
              <div className="text-sm text-gray-500 border-l border-gray-300 pl-3">HOUSE PROJECT AGENCY</div>
            </div>
            <div className="text-sm text-gray-500">© 2024 Studio Arch. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

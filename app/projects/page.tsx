import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/projects'
import BackButton from '@/components/BackButton'

export default function ProjectsIndexPage() {
    return (
        <main className="min-h-screen w-full">
            <section className="pt-28 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <nav className="mb-6 text-sm">
                        <BackButton fallbackHref="/" />
                    </nav>
                    <h1 className="text-4xl font-light text-gray-900 mb-4">Wszystkie projekty</h1>
                    <p className="text-lg text-gray-600 mb-12">Przegląd wybranych realizacji.</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
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
                </div>
            </section>
        </main>
    )
}



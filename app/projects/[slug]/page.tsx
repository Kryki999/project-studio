import Link from 'next/link'
import Image from 'next/image'
import { getProjectBySlug } from '@/lib/projects'

type PageProps = {
    params: Promise<{ slug: string }>
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) {
        return (
            <main className="min-h-screen w-full">
                <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
                    <h1 className="text-3xl font-semibold mb-4">Projekt nie znaleziony</h1>
                    <Link href="/projects" className="text-blue-600 hover:underline">Wróć do projektów</Link>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen w-full">
            <section className="pt-28 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <nav className="mb-6 text-sm">
                        <Link href="/projects" className="text-gray-500 hover:text-gray-900 transition-colors">← Wróć</Link>
                    </nav>
                    <h1 className="text-4xl sm:text-5xl font-light mb-2">{project.title}</h1>
                    <p className="text-gray-500">{project.date}</p>

                    <div className="mt-10 grid md:grid-cols-3 gap-8 items-start">
                        <div className="md:col-span-2 space-y-6">
                            <h2 className="text-2xl font-semibold">Opis</h2>
                            <p className="text-gray-700 leading-relaxed">{project.summary}</p>

                            {project.goals?.length ? (
                                <>
                                    <h3 className="text-xl font-semibold mt-8">Cele projektu</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        {project.goals.map((goal, idx) => (
                                            <li key={idx}>{goal}</li>
                                        ))}
                                    </ul>
                                </>
                            ) : null}
                        </div>
                    </div>

                    <div className="mt-12 grid md:grid-cols-2 gap-6">
                        {project.images.map((src, idx) => (
                            <div
                                key={idx}
                                className="rounded-xl overflow-hidden bg-gray-100 border border-gray-200"
                            >
                                <Image
                                    src={src}
                                    alt={`${project.title} – zdjęcie ${idx + 1}`}
                                    width={1600}
                                    height={900}
                                    sizes="100vw"
                                    loading="lazy"
                                    quality={70}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}


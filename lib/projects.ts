export type Project = {
    slug: string
    title: string
    date: string
    cover: string
    summary: string
    goals: string[]
    role: string
    tools: string[]
}

export const projects: Project[] = [
    {
        slug: 'minimalist-house',
        title: 'Minimalistyczny dom rodzinny',
        date: '2024',
        cover: '/minimalist-house-exterior.png',
        summary:
            'Współczesna forma, przejrzysty układ i funkcjonalne rozwiązania sprzyjające komfortowi życia.',
        goals: [
            'Optymalny układ funkcjonalny dla 4-osobowej rodziny',
            'Naturalne doświetlenie stref dziennych',
            'Proste i trwałe rozwiązania materiałowe',
        ],
        role: 'Projekt koncepcyjny i budowlany',
        tools: ['Revit', 'AutoCAD', 'Lumion'],
    },
    {
        slug: 'luxury-modern-villa',
        title: 'Luksusowa willa ogrodowa',
        date: '2023',
        cover: '/luxury-modern-villa.png',
        summary:
            'Elegancka bryła harmonijnie połączona z otoczeniem zieleni, z naciskiem na prywatność i światło.',
        goals: [
            'Strefowanie funkcji z wyraźnym podziałem na część dzienną i prywatną',
            'Maksymalizacja widoków na ogród i tarasy',
            'Wysoka efektywność energetyczna',
        ],
        role: 'Projekt koncepcyjny, wizualizacje',
        tools: ['Revit', 'SketchUp', 'V-Ray'],
    },
]

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug)
}


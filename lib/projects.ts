export type Project = {
    slug: string
    title: string
    date: string
    images: string[];
    summary: string
    goals: string[]
    role: string
    tools: string[]
}

export const projects = [
    {
        slug: 'modern-family-house',
        title: 'Nowoczesny dom jednorodzinny',
        date: '2024',
        images: ['/dom1.jpeg'], // tylko jedno zdjęcie
        summary:
            'Przestronny dom z użytkowym poddaszem i dużymi przeszkleniami, łączący nowoczesną estetykę z funkcjonalnością dla rodziny.',
        goals: [
            'Praktyczny układ pomieszczeń z podziałem na strefę dzienną i nocną',
            'Wykorzystanie naturalnego światła poprzez duże okna od strony ogrodu',
            'Nowoczesne detale w połączeniu z tradycyjną formą dachu dwuspadowego',
        ],
        role: 'Projekt koncepcyjny i budowlany',
        tools: ['Revit', 'AutoCAD', 'Lumion'],
    },
    {
        slug: 'modern-house-with-garage',
        title: 'Dom jednorodzinny z garażem w bryle',
        date: '2023',
        images: ['/dom2.jpeg'], // tylko jedno zdjęcie
        summary:
            'Nowoczesny dom z wkomponowanym garażem, prostą bryłą i tarasem otwierającym się na ogród.',
        goals: [
            'Układ funkcjonalny dostosowany do działki o średniej powierzchni',
            'Integracja części dziennej z tarasem i ogrodem',
            'Ekonomiczne i trwałe rozwiązania materiałowe',
        ],
        role: 'Projekt koncepcyjny, wizualizacje',
        tools: ['Revit', 'SketchUp', 'V-Ray'],
    },
    {
        slug: 'production-hall',
        title: 'Hala produkcyjna z zapleczem biurowym',
        date: '2022',
        images: ['/hala1.jpeg', '/hala2.jpeg', '/hala3.jpeg'], // wiele zdjęć
        summary:
            'Nowoczesny obiekt przemysłowy łączący funkcjonalność hali z komfortową częścią administracyjną.',
        goals: [
            'Efektywny układ logistyczny i komunikacyjny',
            'Elastyczność przestrzeni produkcyjnej',
            'Ekonomiczne rozwiązania materiałowe i konstrukcyjne',
        ],
        role: 'Projekt budowlany i wykonawczy',
        tools: ['AutoCAD', 'Revit', 'Lumion'],
    },
    {
        slug: 'modern-terraced-house',
        title: 'Nowoczesny dom w zabudowie bliźniaczej',
        date: '2021',
        images: ['/dom3.jpeg'], // jedno zdjęcie
        summary:
            'Kompaktowa bryła dopasowana do miejskiego otoczenia, zapewniająca prywatność i wygodę mieszkańców.',
        goals: [
            'Funkcjonalny podział przestrzeni na strefy dzienne i nocne',
            'Optymalne wykorzystanie działki o ograniczonej powierzchni',
            'Nowoczesna estetyka w połączeniu z trwałymi materiałami',
        ],
        role: 'Projekt koncepcyjny i budowlany',
        tools: ['Revit', 'Enscape', 'Photoshop'],
    },
    {
        slug: 'single-family-house',
        title: 'Dom jednorodzinny z poddaszem użytkowym',
        date: '2020',
        images: ['/dom4.jpeg'], // jedno zdjęcie
        summary:
            'Tradycyjna forma domu wzbogacona o nowoczesne detale, dopasowana do potrzeb współczesnej rodziny.',
        goals: [
            'Efektywne wykorzystanie powierzchni użytkowej',
            'Naturalne oświetlenie poddasza',
            'Integracja bryły budynku z ogrodem',
        ],
        role: 'Projekt koncepcyjny, nadzór autorski',
        tools: ['AutoCAD', 'Lumion', 'Illustrator'],
    },
    {
        slug: 'concept-visualization',
        title: 'Wizualizacja koncepcyjna',
        date: '2019',
        images: ['/visual1.jpeg', '/visual2.jpeg', '/visual3.jpeg'], // wiele zdjęć
        summary:
            'Realistyczna wizualizacja ukazująca charakter i atmosferę planowanej inwestycji.',
        goals: [
            'Oddanie klimatu przestrzeni i relacji budynku z otoczeniem',
            'Podkreślenie walorów estetycznych projektu',
            'Wsparcie procesu decyzyjnego inwestora',
        ],
        role: 'Wizualizacje, prezentacja koncepcji',
        tools: ['SketchUp', 'V-Ray', 'Photoshop'],
    },
]

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug)
}


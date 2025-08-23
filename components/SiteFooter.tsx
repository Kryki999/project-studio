export default function SiteFooter() {
    return (
        <footer className="bg-white border-t border-gray-200 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                        <div className="text-xl font-bold text-gray-900">GRAFICAD</div>
                        <div className="text-sm text-gray-500 border-l border-gray-300 pl-3">PROJEKTOWANIE I NADZÓR BUDOWLANY</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.facebook.com/piotr.mroz.olsztyn?locale=pl_PL"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="inline-flex items-center"
                        >
                            <img src="/facebook-square.svg" alt="Facebook" className="h-6 w-6" />
                        </a>
                        <div className="text-sm text-gray-500">© 2024 Graficad Piotr Mróz. Wszelkie prawa zastrzeżone.</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}



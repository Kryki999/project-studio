"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

type Review = {
    id: number
    author: string
    rating: number
    text: string
}

const reviews: Review[] = [
    {
        id: 1,
        author: "Sylwia Jędrzejczyk",
        rating: 5,
        text:
            "Serdecznie polecam! Projekt domu został wykonany profesjonalnie, a cały proces przebiegł sprawnie. Dodatkowo, pozwolenie na budowę zostało załatwione w ekspresowym tempie. Świetna współpraca, fachowe doradztwo i pełne zaangażowanie. Dziękuję!",
    },
    {
        id: 2,
        author: "Karol Olech",
        rating: 5,
        text:
            "Pan Piotr stworzył wspaniały dom! Fantastyczne pomysły, doskonała funkcjonalność i przepiękny design. Polecam go wszystkim!",
    },
    {
        id: 3,
        author: "Marcin Kłosowski",
        rating: 5,
        text:
            "Gorąco polecam współpracę z Panem Piotrem i firmą Graficad. Pełen profesjonalizm, zaangażowanie i pomoc na każdym etapie budowy domu.",
    },
    {
        id: 4,
        author: "Nikola Wiercińska",
        rating: 5,
        text:
            "Wspaniała współpraca, nie mogliśmy lepiej trafić. Pan Piotr zawsze pomocny i zawsze staje na wysokości zadania. Szybkie, a przy tym profesjonalne załatwienie wszystkich spraw. Z czystym sumieniem polecam!",
    },
    {
        id: 5,
        author: "Wiktoria Kotowska-Sęk",
        rating: 5,
        text:
            "Współpracę z Piotrem i Agnieszką wspominam super :) ogromna wiedza, profesjonalizm i cudowne podejście do klienta :) polecam bardzo tych projektantów. Staną na wysokości zadania, aby spełnić marzenia klientów :) Polecam!",
    },
    {
        id: 6,
        author: "Biuro Rachunkowe Income",
        rating: 5,
        text:
            "Bardzo dobre i zdecydowanie godne polecenia biuro projektowe! Przy realizacji projektu zawsze mogliśmy liczyć na trafne rady, czas na rozmowę i wyrozumiałość. Pan Piotr doskonale zrozumiał nasze potrzeby.",
    },
    {
        id: 7,
        author: "Izabela Kłosek",
        rating: 5,
        text:
            "Bardzo dobre projekty, profesjonalne podejście do klienta. Od samego początku bardzo dobry kontakt. Pan Piotr jest bardzo profesjonalny, rzeczowy i merytoryczny. Zawsze służy dobrą radą i pomocą. Otwarty na pomysły oraz ich realizację. Polecam.",
    },
    {
        id: 8,
        author: "Ewa Wiśniewska",
        rating: 5,
        text:
            "Pełen profesjonalizm, olbrzymia wiedza fachowa Pana Piotra, a jednocześnie wyczucie gustów i oczekiwań klienta oraz współczesnych trendów architektonicznych. Do tego kompleksowość usług i zaangażowanie. Indywidualne podejście i umiejętność współpracy z klientem na bardzo wysokim poziomie. Zdecydowanie polecam!",
    },
    {
        id: 9,
        author: "Jakub Kiliański",
        rating: 5,
        text:
            "Bardzo profesjonalne studio projektowe, indywidualne podejście do potrzeb klienta, z pracy Pana Piotra i jego zespołu jestem zadowolony w 100%. Polecam",
    },
    {
        id: 10,
        author: "Mateusz Brzozowski",
        rating: 5,
        text:
            "Polecam współpracę z Panem Piotrem, profesjonalne podejście oraz bardzo miła obsługa przy adaptacji projektu. Wszystkie dokumenty do pozwolenia na budowę kompleksowo załatwione przez firmę.",
    },
]

function Stars({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1" aria-label={`Ocena: ${rating} na 5`}>
            {Array.from({ length: 5 }).map((_, index) => (
                <span
                    key={index}
                    className={
                        index < rating ? "text-yellow-500" : "text-gray-300"
                    }
                >
                    ★
                </span>
            ))}
        </div>
    )
}

export default function ReviewsSection() {
    return (
        <section id="reviews" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-light text-gray-900 mb-4">Opinie Klientów</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Co mówią o nas klienci, z którymi tworzymy wyjątkowe przestrzenie
                    </p>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop
                    spaceBetween={30}
                    autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    pagination={{ clickable: true }}
                    navigation
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="!pb-10"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="h-full">
                                <div className="min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[520px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <div className="text-lg font-semibold text-gray-900">{review.author}</div>
                                        <Stars rating={review.rating} />
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">{review.text}</p>
                                    <div className="text-xs uppercase tracking-wide text-gray-500 flex items-center gap-2">
                                        opinia
                                        <img src="/google.svg" alt="Google" className="h-8 w-8" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}



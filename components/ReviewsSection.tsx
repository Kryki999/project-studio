"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

type Review = {
    id: number
    author: string
    rating: number
    text: string
}

const reviews: Review[] = [
    {
        id: 1,
        author: "Jan Kowalski",
        rating: 5,
        text:
            "Świetne miejsce! Atmosfera jest niesamowita, a obsługa bardzo profesjonalna. Na pewno wrócę!",
    },
    {
        id: 2,
        author: "Anna Nowak",
        rating: 5,
        text:
            "Najlepszy zespół, świetna komunikacja i perfekcyjna realizacja projektu od A do Z.",
    },
    {
        id: 3,
        author: "Piotr Wiśniewski",
        rating: 5,
        text:
            "Bardzo dobra współpraca i świetne pomysły. Efekt końcowy przerósł nasze oczekiwania.",
    },
    {
        id: 4,
        author: "Magdalena Kaczmarek",
        rating: 5,
        text:
            "Profesjonalne podejście i dbałość o detale. Gorąco polecam!",
    },
    {
        id: 5,
        author: "Tomasz Zieliński",
        rating: 5,
        text:
            "Świetna komunikacja, terminowość i piękny projekt. Wszystko dopięte na ostatni guzik.",
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
        <section id="reviews" className="py-24 bg-gray-50">
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
                                <div className="h-[300px] sm:h-[320px] md:h-[360px] lg:h-[420px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <div className="text-lg font-semibold text-gray-900">{review.author}</div>
                                        <Stars rating={review.rating} />
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">{review.text}</p>
                                    <div className="text-xs uppercase tracking-wide text-gray-500">Opinia • Google</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}



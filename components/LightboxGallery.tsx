'use client';
import React, { useState, useRef } from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt?: string;
}

interface LightboxGalleryProps {
  images: ImageProps[];
}

const LightboxGallery: React.FC<LightboxGalleryProps> = ({ images }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const closeLightbox = () => setSelected(null);

  const showPrev = (e?: React.MouseEvent | TouchEvent) => {
    e?.stopPropagation();
    setSelected((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  };

  const showNext = (e?: React.MouseEvent | TouchEvent) => {
    e?.stopPropagation();
    setSelected((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
  };

  // 🔹 Obsługa swipe na mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    // Minimalna długość gestu (w px)
    const minSwipe = 50;

    if (distance > minSwipe) showNext(); // swipe left → następne zdjęcie
    else if (distance < -minSwipe) showPrev(); // swipe right → poprzednie zdjęcie

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      {/* Miniatury */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-full cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:scale-[1.02]"
            onClick={() => setSelected(i)}
          >
            <Image
              src={img.src}
              alt={img.alt || `referencja-${i}`}
              width={800}
              height={600}
              className="w-full h-80 object-cover sm:h-72 lg:h-80"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] px-4"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Zamknięcie */}
          <button
            className="absolute top-6 right-6 text-white text-4xl font-light hover:opacity-80"
            onClick={closeLightbox}
          >
            ×
          </button>

          {/* Poprzedni */}
          <button
            className="absolute left-6 text-white text-5xl hover:opacity-80 select-none hidden sm:block"
            onClick={showPrev}
          >
            ‹
          </button>

          {/* Obraz */}
          <div className="max-w-5xl max-h-[85vh] flex items-center justify-center">
            <Image
              src={images[selected].src}
              alt={images[selected].alt || ""}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto h-auto object-contain rounded-lg transition-all duration-300"
            />
          </div>

          {/* Następny */}
          <button
            className="absolute right-6 text-white text-5xl hover:opacity-80 select-none hidden sm:block"
            onClick={showNext}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default LightboxGallery;



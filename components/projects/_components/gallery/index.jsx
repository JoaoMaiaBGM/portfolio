'use client';

import { useEffect, useRef } from 'react';

import { useBodyScrollLock, useCarousel, useKeyboardShortcuts, useSwipe } from './hooks';
import { GalleryHeader, Slide, Thumbnails } from './layout';

export default function Gallery({ title, projectImages, onClose }) {
  const closeButtonRef = useRef(null);
  const { currentIndex, setCurrentIndex, goToPrevious, goToNext } = useCarousel(
    projectImages.length,
  );
  const swipeHandlers = useSwipe({ onSwipeLeft: goToNext, onSwipeRight: goToPrevious });

  useKeyboardShortcuts({ onClose, onPrevious: goToPrevious, onNext: goToNext });
  useBodyScrollLock();
  useEffect(() => closeButtonRef.current?.focus(), []);

  const currentImage = projectImages[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria do projeto ${title}`}
      className="bg-port-black/85 fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="container w-full"
        onClick={(event) => event.stopPropagation()}
        {...swipeHandlers}
      >
        <GalleryHeader
          title={title}
          imageLabel={currentImage.label}
          onClose={onClose}
          closeButtonRef={closeButtonRef}
        />

        <Slide
          title={title}
          image={currentImage}
          currentIndex={currentIndex}
          hasMultipleImages={projectImages.length > 1}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />

        <Thumbnails
          projectImages={projectImages}
          currentIndex={currentIndex}
          onSelect={setCurrentIndex}
        />

        <p className="p-caption text-port-white/60 mt-2 text-center" aria-live="polite">
          {currentIndex + 1} / {projectImages.length}
        </p>
      </div>
    </div>
  );
}

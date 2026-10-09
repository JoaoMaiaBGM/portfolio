import { useCallback, useEffect, useRef, useState } from "react";

const SWIPE_THRESHOLD_PX = 50;

export function useCarousel(totalImages) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(
    () => setCurrentIndex((index) => (index - 1 + totalImages) % totalImages),
    [totalImages]
  );
  const goToNext = useCallback(
    () => setCurrentIndex((index) => (index + 1) % totalImages),
    [totalImages]
  );

  return { currentIndex, setCurrentIndex, goToPrevious, goToNext };
}

export function useKeyboardShortcuts({ onClose, onPrevious, onNext }) {
  useEffect(() => {
    const actions = { Escape: onClose, ArrowLeft: onPrevious, ArrowRight: onNext };
    const handleKeyDown = (event) => actions[event.key]?.();

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrevious, onNext]);
}

export function useBodyScrollLock() {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);
}

export function useSwipe({ onSwipeLeft, onSwipeRight }) {
  const startX = useRef(null);

  return {
    onTouchStart: (event) => {
      startX.current = event.touches[0].clientX;
    },
    onTouchEnd: (event) => {
      if (startX.current === null) return;

      const distance = event.changedTouches[0].clientX - startX.current;
      startX.current = null;

      if (Math.abs(distance) < SWIPE_THRESHOLD_PX) return;
      if (distance > 0) onSwipeRight();
      else onSwipeLeft();
    },
  };
}

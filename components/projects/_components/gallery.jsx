"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Gallery({ title, shots, onClose }) {
  const [i, setI] = useState(0);
  const total = shots.length;
  const closeRef = useRef(null);
  const touchX = useRef(null);

  const prev = useCallback(() => setI((n) => (n - 1 + total) % total), [total]);
  const next = useCallback(() => setI((n) => (n + 1) % total), [total]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, prev, next]);

  const shot = shots[i];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria do projeto ${title}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
          touchX.current = null;
        }}
      >
        <div className="mb-3 flex items-center justify-between text-white">
          <p className="text-sm sm:text-base">
            <span className="font-semibold">{title}</span>
            <span className="text-white/70"> · {shot.label}</span>
          </p>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Fechar galeria"
            className="grid h-11 w-11 place-items-center rounded-lg text-2xl hover:bg-white/10"
          >
            ×
          </button>
        </div>

        <div className="relative aspect-[1916/875] overflow-hidden rounded-lg bg-neutral-900">
          <Image
            key={shot.src}
            src={shot.src}
            alt={`${title}: ${shot.label}`}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-contain"
            priority
          />
          {total > 1 && (
            <>
              <button onClick={prev} aria-label="Imagem anterior"
                className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-xl text-white hover:bg-black/80">
                ‹
              </button>
              <button onClick={next} aria-label="Próxima imagem"
                className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-xl text-white hover:bg-black/80">
                ›
              </button>
            </>
          )}
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          {shots.map((s, n) => (
            <button
              key={s.src}
              onClick={() => setI(n)}
              aria-label={`Ver ${s.label}`}
              aria-current={n === i}
              className={`relative h-10 w-20 overflow-hidden rounded-md ring-2 sm:h-12 sm:w-24 ${
                n === i ? "ring-white" : "opacity-60 ring-transparent hover:opacity-100"
              }`}
            >
              <Image src={s.src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-white/60" aria-live="polite">
          {i + 1} / {total}
        </p>
      </div>
    </div>
  );
}

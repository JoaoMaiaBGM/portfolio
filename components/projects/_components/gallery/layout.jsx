import Image from "next/image";

export function GalleryHeader({ title, imageLabel, onClose, closeButtonRef }) {
  return (
    <div className="mb-3 flex items-center justify-between text-port-white">
      <p className="p-small">
        <span className="font-semibold">{title}</span>
        <span className="text-port-white/70"> · {imageLabel}</span>
      </p>
      <button
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Fechar galeria"
        className="grid h-11 w-11 place-items-center rounded-lg p-large hover:bg-port-white/10"
      >
        ×
      </button>
    </div>
  );
}

const ARROW_POSITION = { left: "left-2", right: "right-2" };

export function ArrowButton({ side, label, symbol, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`absolute ${ARROW_POSITION[side]} top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-port-black/60 p-large text-port-white hover:bg-port-black/80`}
    >
      {symbol}
    </button>
  );
}

export function Slide({ title, image, currentIndex, hasMultipleImages, onPrevious, onNext }) {
  return (
    <div className="relative aspect-[1916/875] overflow-hidden rounded-lg bg-port-gray-850">
      <Image
        key={currentIndex}
        src={image.src}
        alt={`${title}: ${image.label}`}
        fill
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="object-contain"
        priority
      />
      {hasMultipleImages && (
        <>
          <ArrowButton side="left" symbol="‹" label="Imagem anterior" onClick={onPrevious} />
          <ArrowButton side="right" symbol="›" label="Próxima imagem" onClick={onNext} />
        </>
      )}
    </div>
  );
}

export function Thumbnails({ projectImages, currentIndex, onSelect }) {
  return (
    <div className="mt-3 flex items-center justify-center gap-2">
      {projectImages.map((image, index) => {
        const isActive = index === currentIndex;

        return (
          <button
            key={index}
            onClick={() => onSelect(index)}
            aria-label={`Ver ${image.label}`}
            aria-current={isActive ? "true" : undefined}
            className={`relative h-10 w-20 overflow-hidden rounded-md ring-2 sm:h-12 sm:w-24 ${
              isActive ? "ring-port-white" : "opacity-60 ring-transparent hover:opacity-100"
            }`}
          >
            <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
          </button>
        );
      })}
    </div>
  );
}

import Image from 'next/image';
import { MdArrowBackIosNew, MdArrowForwardIos, MdOutlineClose } from 'react-icons/md';

import { ArrowButton } from '../buttons/arrow-button';

export function GalleryHeader({ title, imageLabel, onClose, closeButtonRef }) {
  return (
    <div className="text-port-white mb-3 flex items-center justify-between">
      <p className="p-small">
        <span className="font-semibold">{title}</span>
        <span className="text-port-white/70"> · {imageLabel}</span>
      </p>
      <button
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Fechar galeria"
        className="p-large hover:bg-port-white/10 grid h-11 w-11 place-items-center rounded-lg"
      >
        <MdOutlineClose size={18} />
      </button>
    </div>
  );
}

export function Slide({ title, image, currentIndex, hasMultipleImages, onPrevious, onNext }) {
  return (
    <div className="bg-port-gray-850 relative aspect-[1916/875] overflow-hidden rounded-lg">
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
          <ArrowButton
            side="left"
            symbol={<MdArrowBackIosNew size={10} />}
            label="Imagem anterior"
            onClick={onPrevious}
          />
          <ArrowButton
            side="right"
            symbol={<MdArrowForwardIos size={10} />}
            label="Próxima imagem"
            onClick={onNext}
          />
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
            aria-current={isActive ? 'true' : undefined}
            className={`relative h-10 w-20 overflow-hidden rounded-md ring-2 sm:h-12 sm:w-24 ${
              isActive ? 'ring-port-white' : 'opacity-60 ring-transparent hover:opacity-100'
            }`}
          >
            <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
          </button>
        );
      })}
    </div>
  );
}

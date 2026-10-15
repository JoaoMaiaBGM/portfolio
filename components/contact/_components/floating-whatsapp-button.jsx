'use client';

import { useEffect, useState } from 'react';
import { MdWhatsapp } from 'react-icons/md';

export default function FloatingWhatsAppButton({ href, hideWhenVisibleId }) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById(hideWhenVisibleId);
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => setIsHidden(entry.isIntersecting));
    observer.observe(target);

    return () => observer.disconnect();
  }, [hideWhenVisibleId]);

  return (
    <a
      href={href}
      aria-hidden={isHidden}
      tabIndex={isHidden ? -1 : undefined}
      className={`bg-port-whatsapp p-medium text-port-white fixed inset-x-4 bottom-4 z-50 flex items-center justify-center gap-2 rounded-full py-3 text-center shadow-lg transition-opacity duration-300 motion-reduce:transition-none md:hidden ${
        isHidden ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <MdWhatsapp />
      Falar no WhatsApp
    </a>
  );
}

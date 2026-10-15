import { site } from '@/lib/data';
import { MdWhatsapp } from 'react-icons/md';

import FloatingWhatsApp from './_components/floating-whatsapp-button';
const WHATSAPP_BUTTON_ID = 'contato-whatsapp';

export default function Contact() {
  return (
    <footer id="contato" className="bg-port-primary text-port-white text-center">
      <div className="section-p container mx-auto">
        <h2 className="p-large-bold">Tem um projeto em mente?</h2>
        <p className="text-port-white/90 mt-2">
          Me conte o que você precisa e respondo com uma proposta.
        </p>
        <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            id={WHATSAPP_BUTTON_ID}
            href={site.whatsapp}
            className="bg-port-white p-medium text-port-blue-700 hover:bg-port-blue-50 flex items-center justify-center gap-2 rounded-lg px-5 py-3"
          >
            <MdWhatsapp />
            WhatsApp
          </a>
          <a
            href={`mailto:${site.email}`}
            className="border-port-white p-medium hover:text-port-blue-100 hover:border-port-blue-100 rounded-lg border px-5 py-3"
          >
            {site.email}
          </a>
          <a
            href={site.linkedin}
            className="border-port-white p-medium hover:text-port-blue-100 hover:border-port-blue-100 rounded-lg border px-5 py-3"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            className="border-port-white p-medium hover:text-port-blue-100 hover:border-port-blue-100 rounded-lg border px-5 py-3"
          >
            GitHub
          </a>
        </div>
      </div>

      <FloatingWhatsApp hideWhenVisibleId={WHATSAPP_BUTTON_ID} href={site.whatsapp}>
        Falar no WhatsApp
      </FloatingWhatsApp>
    </footer>
  );
}

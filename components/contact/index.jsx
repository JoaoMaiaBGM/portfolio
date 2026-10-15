import { site } from '@/lib/data';
import { MdWhatsapp } from 'react-icons/md';

import FloatingWhatsAppButton from './_components/floating-whatsapp-button';

const WHATSAPP_BUTTON_ID = 'contato-whatsapp';
const contactLinks = [
  { id: WHATSAPP_BUTTON_ID, href: site.whatsapp, label: 'Whatsapp', icon: <MdWhatsapp /> },
  { href: site.email, label: site.email },
  { href: site.linkedin, label: 'LinkedIn' },
  { href: site.github, label: 'GitHub' },
];

export default function Contact() {
  return (
    <footer id="contato" className="bg-port-primary text-port-white text-center">
      <div className="section-p container mx-auto">
        <h2 className="p-large-bold">Tem um projeto em mente?</h2>
        <p className="text-port-white/90 mt-2">
          Me conte o que você precisa e respondo com uma proposta.
        </p>
        <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          {contactLinks.map((link) =>
            link.id === WHATSAPP_BUTTON_ID ? (
              <a
                id={link.id}
                key={link.label}
                href={link.href}
                className="bg-port-white p-medium text-port-blue-700 hover:bg-port-blue-50 flex items-center justify-center gap-2 rounded-lg px-5 py-3"
              >
                {link.icon}
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="border-port-white p-medium hover:text-port-blue-100 hover:border-port-blue-100 rounded-lg border px-5 py-3"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>

      <FloatingWhatsAppButton hideWhenVisibleId={WHATSAPP_BUTTON_ID} href={site.whatsapp}>
        Falar no WhatsApp
      </FloatingWhatsAppButton>
    </footer>
  );
}

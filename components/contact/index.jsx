import { contact } from '@/lib/data';

import { FloatingWhatsAppButton, FooterNav } from './_components';

const WHATSAPP_BUTTON_ID = 'contato-whatsapp';

export default function Contact() {
  return (
    <footer id="contato" className="bg-port-primary text-port-white text-center">
      <div className="section-p container mx-auto">
        <h2 className="p-large-bold">Tem um projeto em mente?</h2>
        <p className="text-port-white/90 mt-2">
          Me conte o que você precisa e respondo com uma proposta.
        </p>
        <FooterNav />
      </div>

      <FloatingWhatsAppButton hideWhenVisibleId={WHATSAPP_BUTTON_ID} href={contact.whatsapp}>
        Falar no WhatsApp
      </FloatingWhatsAppButton>
    </footer>
  );
}

import { contact } from '@/lib/data';
import { MdWhatsapp } from 'react-icons/md';

const WHATSAPP_BUTTON_ID = 'contato-whatsapp';

export function FooterNav() {
  return (
    <div className="container mx-auto mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
      <a
        id={WHATSAPP_BUTTON_ID}
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-port-white p-medium text-port-blue-700 hover:bg-port-blue-50 flex items-center justify-center gap-2 rounded-lg px-5 py-3"
      >
        <MdWhatsapp />
        {contact.whatsapp}
      </a>

      <a
        href={`mailto:${contact.email}`}
        className="border-port-white p-medium hover:text-port-blue-100 hover:border-port-blue-100 rounded-lg border px-5 py-3"
      >
        {contact.email}
      </a>

      <a
        href={contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="border-port-white p-medium hover:text-port-blue-100 hover:border-port-blue-100 rounded-lg border px-5 py-3"
      >
        LinkedIn
      </a>

      <a
        href={contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="border-port-white p-medium hover:text-port-blue-100 hover:border-port-blue-100 rounded-lg border px-5 py-3"
      >
        GitHub
      </a>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdClose, MdWhatsapp } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

import { contact } from '@/lib/data/index';

import profileImage from '@/public/images/joao-maia.png';

const links = [
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className="border-port-gray-200 bg-port-black sticky top-0 z-40 w-full border-b backdrop-blur">
        <div className="container mx-auto flex h-20 items-center justify-between px-5">
          <Link href="#" className="flex items-center gap-3 font-semibold text-white">
            <Image
              src={profileImage}
              alt="Foto de João Maia"
              width={60}
              height={60}
              className="rounded-full"
            />
            {contact.name}
          </Link>

          <nav
            className="p-small text-port-gray-200 hidden items-center gap-6 md:flex"
            aria-label="Principal"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-port-primary">
                {link.label}
              </Link>
            ))}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-port-primary p-medium hover:text-port-blue-100 flex flex-row items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-white"
            >
              <MdWhatsapp size={20} />
              WhatsApp
            </a>
          </nav>

          <button
            className="grid h-11 w-11 place-items-center rounded-lg md:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="text-4xl leading-none text-white">
              {open ? <MdClose size={26} /> : <RxHamburgerMenu size={26} />}
            </span>
          </button>
        </div>

        {open && (
          <nav
            className="border-port-gray-200 absolute inset-x-0 top-full border-b bg-white px-5 pb-3 shadow-xl md:hidden"
            aria-label="Menu mobile"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-port-gray-50 text-port-gray-800 hover:text-port-gray-600 block border-b py-3 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {open && (
        <div
          aria-hidden="true"
          onClick={close}
          className="bg-port-black/60 fixed inset-0 z-30 md:hidden"
        />
      )}
    </>
  );
}

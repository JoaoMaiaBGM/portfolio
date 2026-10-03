'use client';

import { site } from '@/lib/data';
import Image from 'next/image';
import { useState } from 'react';
import { MdClose, MdWhatsapp } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

import profileImage from '@/public/images/joao-maia.png';

const links = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky w-full top-0 z-40 border-b border-port-gray-200 bg-port-black backdrop-blur">
      <div className="mx-auto flex h-20 container items-center justify-between px-5">
        <a href="#" className="flex items-center text-white gap-3 font-semibold">
          <Image
            src={profileImage}
            alt="Foto de João Maia"
            width={60}
            height={60}
            className="rounded-full"
          />
          {site.name}
        </a>

        <nav
          className="hidden items-center gap-6 p-small text-port-gray-200 md:flex"
          aria-label="Principal"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-port-primary">
              {l.label}
            </a>
          ))}
          <a
            href={site.whatsapp}
            className="flex flex-row items-center justify-center gap-1.5 rounded-lg bg-port-primary px-4 py-2 p-medium text-white hover:text-port-blue-100"
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
          className="border-t border-port-gray-200 bg-white px-5 pb-3 md:hidden"
          aria-label="Menu mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-port-gray-50 py-3 text-port-gray-800 hover:text-port-gray-600"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

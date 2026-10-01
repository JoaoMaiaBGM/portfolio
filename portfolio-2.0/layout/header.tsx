'use client';

import { site } from '@/lib/data';
import Image from 'next/image';
import { useState } from 'react';

import profileImage from '@/public/images/joao-maia.png';

const links = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-[#0b0b0b] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
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
          className="hidden items-center gap-6 text-sm text-[#c3c2b7] md:flex"
          aria-label="Principal"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand">
              {l.label}
            </a>
          ))}
          <a
            href={site.whatsapp}
            className="rounded-lg bg-brand px-4 py-2 font-medium text-white hover:bg-brand-dark"
          >
            WhatsApp
          </a>
        </nav>

        <button
          className="grid h-11 w-11 place-items-center rounded-lg md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="text-4xl leading-none text-white">{open ? '×' : '≡'}</span>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-neutral-200 bg-white px-5 pb-3 md:hidden"
          aria-label="Menu mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-neutral-100 py-3 text-neutral-700"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

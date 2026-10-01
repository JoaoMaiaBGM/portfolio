import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const url = 'https://joaomaia.dev.br';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: 'João Maia | Desenvolvedor Full-Stack',
  description:
    'João Maia, desenvolvedor Full-Stack em Recife. Landing pages, e-commerce e sistemas web sob medida. Veja projetos e peça um orçamento.',
  openGraph: {
    title: 'João Maia | Desenvolvedor Full-Stack',
    description: 'Sites e sistemas web sob medida. Veja projetos e peça um orçamento.',
    url,
    locale: 'pt_BR',
    type: 'website',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} text-neutral-800 antialiased`}>{children}</body>
    </html>
  );
}

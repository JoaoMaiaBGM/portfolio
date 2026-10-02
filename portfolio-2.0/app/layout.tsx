import '@/styles/globals.scss';
import '@/styles/tailwind-base.css';
import type { Metadata } from 'next';
import { Montserrat, Oswald, Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'João Maia | Desenvolvedor Full-Stack',
  description:
    'João Maia, desenvolvedor Full-Stack em Recife. Landing pages, e-commerce e sistemas web sob medida. Veja projetos e peça um orçamento.',
  openGraph: {
    title: 'João Maia | Desenvolvedor Full-Stack',
    description: 'Sites e sistemas web sob medida. Veja projetos e peça um orçamento.',
    url: siteUrl,
    locale: 'pt_BR',
    type: 'website',
    images: ['/og.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${oswald.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

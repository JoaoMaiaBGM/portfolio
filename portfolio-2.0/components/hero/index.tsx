import Image from 'next/image';

import { site } from '@/lib/data/index';

import desktopHeroImg from '@/components/hero/_assets/desktop-hero.png';
import tabletHeroImg from '@/components/hero/_assets/tablet-hero.webp';

export default function Hero() {
  return (
    <section className="bg-port-primary text-white">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-5 py-16 lg:grid-cols-2 md:py-24">
        <div>
          <p className="mb-3 p-small text-port-white">Desenvolvedor Full-Stack em Recife, PE</p>
          <h1 className="h1 font-semibold leading-tight">
            Sites e sistemas web que fazem o seu negócio vender mais
          </h1>
          <p className="mt-4 max-w-md leading-relaxed text-port-white">
            Landing pages, e-commerce e sistemas sob medida, do design ao deploy.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.whatsapp}
              className="rounded-lg bg-port-white px-5 py-3 text-center p-medium text-port-blue-700 hover:bg-port-blue-50"
            >
              Pedir orçamento
            </a>
            <a
              href="#projetos"
              className="rounded-lg border border-white px-5 py-3 text-center p-medium hover:text-port-blue-100 hover:border-port-blue-100"
            >
              Ver projetos
            </a>
          </div>
        </div>

        <div className="hidden md:block lg:hidden">
          <Image
            src={tabletHeroImg}
            alt="Capturas de tela dos projetos Mineiríssimo, Vinil89 e Black Skull"
            width={1600}
            height={520}
            sizes="(min-width: 768px) 560px, 100vw"
            priority
            className="mx-auto h-auto w-full max-w-xl"
          />
        </div>

        <div className="hidden lg:block">
          <Image
            src={desktopHeroImg}
            alt="Capturas de tela dos projetos Mineiríssimo, Vinil89 e Black Skull"
            width={1600}
            height={1200}
            sizes="(min-width: 1024px) 480px, 45vw"
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

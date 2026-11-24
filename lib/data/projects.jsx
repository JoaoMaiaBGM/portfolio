import blackSkullHeroDesktop from '@/public/images/projects/blackSkull/heroDesktop.png';
import blackSkullObjectivesDesktop from '@/public/images/projects/blackSkull/objectivesDesktop.png';
import blackSkullProductsDesktop from '@/public/images/projects/blackSkull/productsDesktop.png';

import mineirissimoAboutDesktop from '@/public/images/projects/mineirissimo/aboutDesktop.png';
import mineirissimoAboutNumbersMobile from '@/public/images/projects/mineirissimo/aboutNumbersMobile.png';
import mineirissimoAboutTablet from '@/public/images/projects/mineirissimo/aboutTablet.png';
import mineirissimoAboutTextMobile from '@/public/images/projects/mineirissimo/aboutTextMobile.png';
import mineirissimoHeroDesktop from '@/public/images/projects/mineirissimo/heroDesktop.png';
import mineirissimoHeroMobile from '@/public/images/projects/mineirissimo/heroMobile.png';
import mineirissimoHeroTablet from '@/public/images/projects/mineirissimo/heroTablet.png';
import mineirissimoProductsDesktop from '@/public/images/projects/mineirissimo/productsDesktop.png';
import mineirissimoProductsMobile from '@/public/images/projects/mineirissimo/productsMobile.png';
import mineirissimoProductsTablet from '@/public/images/projects/mineirissimo/productsTablet.png';
import mineirissimoStoreDesktop from '@/public/images/projects/mineirissimo/storeDesktop.png';
import mineirissimoStoreMobile from '@/public/images/projects/mineirissimo/storeMobile.png';
import mineirissimoStoreTablet from '@/public/images/projects/mineirissimo/storeTablet.png';

import vinil89AboutDesktop from '@/public/images/projects/vinil89/aboutDesktop.png';
import vinil89AboutMobile from '@/public/images/projects/vinil89/aboutMobile.png';
import vinil89AboutTablet from '@/public/images/projects/vinil89/aboutTablet.png';
import vinil89ContactDesktop from '@/public/images/projects/vinil89/contactDesktop.png';
import vinil89ContactFormMobile from '@/public/images/projects/vinil89/contactFormMobile.png';
import vinil89ContactMobile from '@/public/images/projects/vinil89/contactMobile.png';
import vinil89ContactTablet from '@/public/images/projects/vinil89/contactTablet.png';
import vinil89GalleryDesktop from '@/public/images/projects/vinil89/galleryDesktop.png';
import vinil89GalleryMobile from '@/public/images/projects/vinil89/galleryMobile.png';
import vinil89GalleryTablet from '@/public/images/projects/vinil89/galleryTablet.png';

export const projects = [
  {
    title: 'Mineiríssimo',
    description:
      'Site institucional com catálogo de produtos, página de loja física e pedidos por WhatsApp para uma empresa de pão de queijo artesanal. Conteúdo editável pelo próprio cliente.',
    tags: ['Next.js', 'Tailwind', 'DatoCMS'],
    gallery: [
      { src: mineirissimoHeroMobile, label: 'Página inicial' },
      { src: mineirissimoProductsMobile, label: 'Catálogo de produtos' },
      { src: mineirissimoAboutTextMobile, label: 'Sobre nós (texto)' },
      { src: mineirissimoAboutNumbersMobile, label: 'Sobre nós (números)' },
      { src: mineirissimoStoreMobile, label: 'Onde estamos' },
      { src: mineirissimoHeroTablet, label: 'Página inicial' },
      { src: mineirissimoProductsTablet, label: 'Catálogo de produtos' },
      { src: mineirissimoAboutTablet, label: 'Sobre nós' },
      { src: mineirissimoStoreTablet, label: 'Onde estamos' },
      { src: mineirissimoHeroDesktop, label: 'Página inicial' },
      { src: mineirissimoProductsDesktop, label: 'Catálogo de produtos' },
      { src: mineirissimoAboutDesktop, label: 'Sobre nós' },
      { src: mineirissimoStoreDesktop, label: 'Onde estamos' },
    ],
    live: 'https://www.mineirissimorecife.com.br/',
    code: 'https://github.com/JoaoMaiaBGM/mineirissimo',
  },
  {
    title: 'Vinil89',
    description:
      'Site da banda cover de Pop/Rock dos anos 80 e 90 do Recife, com galeria de fotos, clipes e formulário de contato para shows.',
    tags: ['React', 'Tailwind', 'Wix'],
    gallery: [
      { src: vinil89AboutMobile, label: 'Sobre a banda' },
      { src: vinil89GalleryMobile, label: 'Galeria e clipes' },
      { src: vinil89ContactMobile, label: 'Contato' },
      { src: vinil89ContactFormMobile, label: 'Formulário de contato' },
      { src: vinil89AboutTablet, label: 'Sobre a banda' },
      { src: vinil89GalleryTablet, label: 'Galeria e clipes' },
      { src: vinil89ContactTablet, label: 'Contato' },
      { src: vinil89AboutDesktop, label: 'Sobre a banda' },
      { src: vinil89GalleryDesktop, label: 'Galeria e clipes' },
      { src: vinil89ContactDesktop, label: 'Contato' },
    ],
    live: 'https://www.vinil89.com.br/',
    code: 'https://github.com/JoaoMaiaBGM/vinil89',
  },
  {
    title: 'Black Skull',
    description:
      'Front-end de e-commerce de suplementos, com categorias, vitrine de lançamentos, objetivos, blog e carrinho. Projeto de estudo.',
    tags: ['React', 'Styled Components'],
    gallery: [
      { src: blackSkullHeroDesktop, label: 'Página inicial' },
      { src: blackSkullObjectivesDesktop, label: 'Objetivos e benefícios' },
      { src: blackSkullProductsDesktop, label: 'Categorias e lançamentos' },
    ],
    live: 'https://black-skull-orpin.vercel.app/',
    code: 'https://github.com/JoaoMaiaBGM/black-skull',
  },
];

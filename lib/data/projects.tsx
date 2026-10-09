import blackSkullHero from '@/public/images/projects/blackSkullHero.png';
import blackSkullObjectives from '@/public/images/projects/blackSkullObjectives.png';
import blackSkullProducts from '@/public/images/projects/blackSkullProducts.png';
import mineirissimoAbout from '@/public/images/projects/mineirissimoAbout.png';
import mineirissimoHero from '@/public/images/projects/mineirissimoHero.png';
import mineirissimoProducts from '@/public/images/projects/mineirissimoProducts.png';
import mineirissimoStore from '@/public/images/projects/mineirissimoStore.png';
import vinil89About from '@/public/images/projects/vinil89About.png';
import vinil89Contact from '@/public/images/projects/vinil89Contact.png';
import vinil89Gallery from '@/public/images/projects/vinil89Gallery.png';


export const projects = [
  {
    title: 'Mineiríssimo',
    description:
      'Site institucional com catálogo de produtos, página de loja física e pedidos por WhatsApp para uma empresa de pão de queijo artesanal. Conteúdo editável pelo próprio cliente.',
    tags: ['Next.js', 'Tailwind', 'DatoCMS'],
    gallery: [
      { src: mineirissimoHero, label: 'Página inicial' },
      { src: mineirissimoProducts, label: 'Catálogo de produtos' },
      { src: mineirissimoAbout, label: 'Sobre nós' },
      { src: mineirissimoStore, label: 'Onde estamos' },
    ],
    live: 'https://SEU-LINK',
    code: 'https://github.com/SEU-USUARIO/mineirissimo',
  },
  {
    title: 'Vinil89',
    description:
      'Site da banda cover de Pop/Rock dos anos 80 e 90 do Recife, com galeria de fotos, clipes e formulário de contato para shows.',
    tags: ['React', 'Tailwind', 'Wix'],
    gallery: [
      { src: vinil89About, label: 'Sobre a banda' },
      { src: vinil89Gallery, label: 'Galeria e clipes' },
      { src: vinil89Contact, label: 'Contato' },
    ],
    live: 'https://SEU-LINK',
    code: 'https://github.com/SEU-USUARIO/vinil89',
  },
  {
    title: 'Black Skull',
    description:
      'Front-end de e-commerce de suplementos, com categorias, vitrine de lançamentos, objetivos, blog e carrinho. Projeto de estudo.',
    tags: ['React', 'Styled Components'],
    gallery: [
      { src: blackSkullHero, label: 'Página inicial' },
      { src: blackSkullObjectives, label: 'Objetivos e benefícios' },
      { src: blackSkullProducts, label: 'Categorias e lançamentos' },
    ],
    live: 'https://SEU-LINK',
    code: 'https://github.com/SEU-USUARIO/black-skull',
  },
];

export const site = {
  name: 'João Maia',
  whatsapp:
    'https://wa.me/5581900000000?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20um%20or%C3%A7amento',
  email: 'contato@joaomaia.com.br',
  github: 'https://github.com/SEU-USUARIO',
  linkedin: 'https://www.linkedin.com/in/SEU-PERFIL',
};

export const techGroups = [
  {
    title: 'Front-end',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Styled Components', 'TypeScript'],
  },
  { title: 'Back-end', items: ['Node.js', 'Python', 'Django', 'REST APIs'] },
  { title: 'Bancos de dados', items: ['PostgreSQL', 'SQLite'] },
];

export type Shot = { src: string; label: string };

export type Project = {
  title: string;
  description: string;
  tags: string[];
  gallery: Shot[]; // a primeira imagem é a capa
  live: string;
  code: string;
};

export const projects: Project[] = [
  {
    title: 'Mineiríssimo',
    description:
      'Site institucional com catálogo de produtos, página de loja física e pedidos por WhatsApp para uma empresa de pão de queijo artesanal. Conteúdo editável pelo próprio cliente.',
    tags: ['Next.js', 'Tailwind', 'DatoCMS'],
    gallery: [
      { src: '/projects/mineirissimo/1.webp', label: 'Página inicial' },
      { src: '/projects/mineirissimo/2.webp', label: 'Catálogo de produtos' },
      { src: '/projects/mineirissimo/3.webp', label: 'Sobre nós' },
      { src: '/projects/mineirissimo/4.webp', label: 'Onde estamos' },
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
      { src: '/projects/vinil89/1.webp', label: 'Sobre a banda' },
      { src: '/projects/vinil89/2.webp', label: 'Galeria e clipes' },
      { src: '/projects/vinil89/3.webp', label: 'Contato' },
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
      { src: '/projects/black-skull/1.webp', label: 'Página inicial' },
      { src: '/projects/black-skull/2.webp', label: 'Objetivos e benefícios' },
      { src: '/projects/black-skull/3.webp', label: 'Categorias e lançamentos' },
    ],
    live: 'https://SEU-LINK',
    code: 'https://github.com/SEU-USUARIO/black-skull',
  },
];

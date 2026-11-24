const IMAGES_ROOTS = '/images/projects';

const deviceLabels = {
  mobile: 'Mobile',
  tablet: 'Tablet',
  desktop: 'Desktop',
};

const buildGallery = (slug, imagesByDevice) => {
  const gallery = Object.fromEntries(
    Object.entries(imagesByDevice).map(([device, images]) => [
      device,
      images.map((file, index) => ({
        src: `${IMAGES_ROOTS}/${slug}/${file}`,
        device,
        label: `${deviceLabels[device] ?? device} — Tela ${index + 1}`,
      })),
    ]),
  );

  return gallery;
};

export const projects = [
  {
    title: 'Mineiríssimo',
    description:
      'Site institucional com catálogo de produtos, página de loja física e pedidos por WhatsApp para uma empresa de pão de queijo artesanal. Conteúdo editável pelo próprio cliente.',
    tags: ['Next.js', 'Tailwind', 'DatoCMS'],
    gallery: buildGallery('mineirissimo', {
      mobile: [
        'heroMobile.png',
        'productsMobile.png',
        'aboutTextMobile.png',
        'aboutNumbersMobile.png',
        'storeMobile.png',
      ],
      tablet: ['heroTablet.png', 'productsTablet.png', 'aboutTablet.png', 'storeTablet.png'],
      desktop: ['heroDesktop.png', 'productsDesktop.png', 'aboutDesktop.png', 'storeDesktop.png'],
    }),
    live: 'https://www.mineirissimorecife.com.br/',
    code: 'https://github.com/JoaoMaiaBGM/mineirissimo',
  },
  {
    title: 'Vinil89',
    description:
      'Site da banda cover de Pop/Rock dos anos 80 e 90 do Recife, com galeria de fotos, clipes e formulário de contato para shows.',
    tags: ['React', 'Tailwind', 'Wix'],
    gallery: buildGallery('vinil89', {
      mobile: [
        'aboutMobile.png',
        'galleryMobile.png',
        'contactMobile.png',
        'contactFormMobile.png',
      ],
      tablet: ['aboutTablet.png', 'galleryTablet.png', 'contactTablet.png'],
      desktop: ['aboutDesktop.png', 'galleryDesktop.png', 'contactDesktop.png'],
    }),
    live: 'https://www.vinil89.com.br/',
    code: 'https://github.com/JoaoMaiaBGM/vinil89',
  },
  {
    title: 'Black Skull',
    description:
      'Front-end de e-commerce de suplementos, com categorias, vitrine de lançamentos, objetivos, blog e carrinho. Projeto de estudo.',
    tags: ['React', 'Styled Components'],
    gallery: buildGallery('blackSkull', {
      desktop: ['heroDesktop.png', 'objectivesDesktop.png', 'productsDesktop.png'],
    }),
    live: 'https://black-skull-orpin.vercel.app/',
    code: 'https://github.com/JoaoMaiaBGM/black-skull',
  },
];

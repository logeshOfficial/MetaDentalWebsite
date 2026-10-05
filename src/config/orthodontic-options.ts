import { assetPath } from '@/lib/paths';

// Display order is intentional. Add future orthodontic options here.
export const orthodonticOptions = [
  {
    id: 'metal-braces',
    name: 'Metal braces',
    description: 'A fixed orthodontic option using metal brackets and wires to guide planned tooth movement.',
    images: [{ src: assetPath('/images/orthodontics/metal-braces.webp'), alt: 'Metal braces on teeth' }],
  },
  {
    id: 'ceramic-braces',
    name: 'Ceramic braces',
    description: 'A fixed-brace option with tooth-coloured brackets for a less noticeable appearance.',
    images: [{ src: assetPath('/images/orthodontics/ceramic-braces.webp'), alt: 'Ceramic braces on teeth' }],
  },
  {
    id: 'damon-metal',
    name: 'Damon metal braces',
    description: 'A self-ligating metal bracket system that may be considered after an orthodontic assessment.',
    images: [{ src: assetPath('/images/orthodontics/damon-metal-braces.webp'), alt: 'Damon metal braces on teeth' }],
  },
  {
    id: 'damon-ceramic',
    name: 'Damon ceramic braces',
    description: 'A self-ligating ceramic bracket option designed for a more discreet fixed-brace appearance.',
    images: [{ src: assetPath('/images/orthodontics/damon-ceramic-braces.webp'), alt: 'Damon ceramic braces on teeth' }],
  },
  {
    id: 'clear-aligners',
    name: 'Clear aligners',
    description: 'Removable transparent trays planned in stages for suitable tooth-alignment needs.',
    images: [{ src: assetPath('/images/orthodontics/clear-aligners.webp'), alt: 'Transparent clear aligner trays' }],
  },
  {
    id: 'invisalign',
    name: 'Invisalign',
    description: 'Invisalign clear aligner treatment planned with Dr. Amrin Rizwana, an Invisalign Certified Provider.',
    images: [
      { src: assetPath('/images/orthodontics/invisalign-case.webp'), alt: 'Invisalign clear aligners in their case' },
      { src: assetPath('/images/orthodontics/invisalign-system.webp'), alt: 'Invisalign aligner system and branded case' },
    ],
  },
] as const;

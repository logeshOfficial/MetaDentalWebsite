import { assetPath } from '@/lib/paths';

// Homepage hero: clinic interiors only. Object positions keep the main room details in frame.
export const heroClinicInteriors = [
  {
    src: assetPath('/images/gallery/treatment-room-overview.webp'),
    alt: 'Wide interior view of a META DENTAL treatment room in Panaiyur',
    position: '50% 50%',
  },
  {
    src: assetPath('/images/gallery/treatment-room-wide.webp'),
    alt: 'Dental treatment chair and clinical equipment inside META DENTAL',
    position: '52% 54%',
  },
  {
    src: assetPath('/images/gallery/reception-stairway.webp'),
    alt: 'Interior reception stairway and illuminated META DENTAL entrance detail',
    position: '50% 56%',
  },
  {
    src: assetPath('/images/gallery/clinic-one-entrance.webp'),
    alt: 'Interior entrance to Clinic 1 at META DENTAL',
    position: '50% 46%',
  },
  {
    src: assetPath('/images/gallery/sterilization-room.webp'),
    alt: 'Dedicated sterilization room inside META DENTAL',
    position: '50% 46%',
  },
] as const;

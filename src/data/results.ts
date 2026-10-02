import { assetPath } from '@/lib/paths';

export type ClinicalCase = {
  id: string;
  title: string;
  category: string;
  summary: string;
  note: string;
  images: Array<{
    label: string;
    src: string;
    alt: string;
    position?: string;
  }>;
};

// Add future consented clinical cases here. One image creates a clinical-view card;
// two images create a labelled comparison card automatically.
export const resultCases: ClinicalCase[] = [
  {
    id: 'implant-placement-clinical-view',
    title: 'Dental implant placement',
    category: 'Implant dentistry',
    summary:
      'An intraoral clinical view of an implant component positioned at a healed tooth-replacement site.',
    note: 'Clinical image supplied and approved for website use by META DENTAL.',
    images: [
      {
        label: 'Clinical view',
        src: assetPath('/images/results/implant-placement-clinical-view.webp'),
        alt: 'Intraoral clinical view of a dental implant component at a tooth-replacement site',
        position: '50% 50%',
      },
    ],
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth whitening',
    category: 'Cosmetic dentistry',
    summary: 'A comparison supplied by the clinic to support a discussion about whitening care.',
    note: 'Images supplied by META DENTAL and previously published by the clinic.',
    images: [
      { label: 'Before', src: assetPath('/images/results/whitening-before.png'), alt: 'Teeth before whitening treatment' },
      { label: 'After', src: assetPath('/images/results/whitening-after.png'), alt: 'Teeth after whitening treatment' },
    ],
  },
  {
    id: 'smile-makeover',
    title: 'Smile makeover',
    category: 'Restorative cosmetic care',
    summary: 'A clinic-supplied comparison showing one individual treatment journey.',
    note: 'Images supplied by META DENTAL and previously published by the clinic.',
    images: [
      { label: 'Before', src: assetPath('/images/results/smile-before.png'), alt: 'Smile before restorative cosmetic treatment' },
      { label: 'After', src: assetPath('/images/results/smile-after.png'), alt: 'Smile after restorative cosmetic treatment' },
    ],
  },
  {
    id: 'aligner-treatment',
    title: 'Aligner treatment',
    category: 'Orthodontics and aligners',
    summary: 'A clinic-supplied comparison showing one individual aligner case.',
    note: 'Images supplied by META DENTAL and previously published by the clinic.',
    images: [
      { label: 'Before', src: assetPath('/images/results/aligners-before.png'), alt: 'Teeth before aligner treatment' },
      { label: 'After', src: assetPath('/images/results/aligners-after.png'), alt: 'Teeth after aligner treatment' },
    ],
  },
];

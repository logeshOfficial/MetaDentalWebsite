export const resultCases = [
  {
    title: 'Teeth whitening',
    note: 'Images supplied by META DENTAL and previously published by the clinic.',
    before: {
      src: '/images/results/whitening-before.png',
      alt: 'Teeth before whitening treatment',
    },
    after: { src: '/images/results/whitening-after.png', alt: 'Teeth after whitening treatment' },
  },
  {
    title: 'Smile makeover',
    note: 'Images supplied by META DENTAL and previously published by the clinic.',
    before: {
      src: '/images/results/smile-before.png',
      alt: 'Smile before restorative cosmetic treatment',
    },
    after: {
      src: '/images/results/smile-after.png',
      alt: 'Smile after restorative cosmetic treatment',
    },
  },
  {
    title: 'Aligner treatment',
    note: 'Images supplied by META DENTAL and previously published by the clinic.',
    before: { src: '/images/results/aligners-before.png', alt: 'Teeth before aligner treatment' },
    after: { src: '/images/results/aligners-after.png', alt: 'Teeth after aligner treatment' },
  },
] as const;

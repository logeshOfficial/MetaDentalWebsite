import { assetPath } from '@/lib/paths';

// Each supplied composite is a separate patient case; keep the supplied images intact.
export const orthodonticCases = [
  {
    id: 'case-01',
    label: 'Case 01',
    src: assetPath('/images/orthodontic-cases/case-01.png'),
    alt: 'Intraoral clinical photographs from orthodontic patient case 01',
  },
  {
    id: 'case-02',
    label: 'Case 02',
    src: assetPath('/images/orthodontic-cases/case-02.png'),
    alt: 'Intraoral clinical photographs from orthodontic patient case 02',
  },
  {
    id: 'case-03',
    label: 'Case 03',
    src: assetPath('/images/orthodontic-cases/case-03.png'),
    alt: 'Intraoral clinical photographs from orthodontic patient case 03',
  },
  {
    id: 'case-04',
    label: 'Case 04',
    src: assetPath('/images/orthodontic-cases/case-04.png'),
    alt: 'Intraoral clinical photographs from orthodontic patient case 04',
  },
] as const;

import { assetPath } from '@/lib/paths';

export const doctors = [
  {
    slug: 'dr-imran',
    name: 'Dr. Mohammed Imran Z',
    qualificationTitle: 'M.D.S. (Prosthetics and Crown & Bridge dentistry)',
    role: 'Prosthodontist & Implant Dentist',
    qualification: 'Dedicated Prosthodontist trained at Govt. Dental College & Hospital, Patiala. He specializes in crown & bridge work, veneers, laminates, implant-supported restorations, maxillofacial prosthetics, and full mouth rehabilitation in complex cases.',
    education: 'Government Dental College & Hospital, Patiala',
    image: assetPath('/images/dr-imran.jpg'),
    intro: 'A considered approach to restoring your smile.',
    bio: 'Dr. Mohammed Imran Z is a member of the Indian Dental Association (IDA) and focuses on rebuilding teeth and restoring oral function. His areas of practice include implant restorations, crowns, bridges and full-mouth rehabilitation.',
    credentials: [
      {
        name: 'Member, Indian Dental Association',
        shortLabel: 'IDA Member',
        issuer: 'Indian Dental Association',
        logo: assetPath('/brand/credentials/ida-logo.webp'),
        logoAlt: 'Indian Dental Association logo',
        website: 'https://www.ida.org.in/',
      },
    ],
    interests: [
      'Implant prosthetics',
      'Crowns and bridges',
      'Veneers and laminates',
      'Full-mouth rehabilitation',
    ],
    services: [
      'dental-implants',
      'crowns-bridges',
      'dentures',
      'cosmetic-dentistry',
      'smile-designing',
    ],
  },
  {
    slug: 'dr-amrin-rizwana',
    name: 'Dr. Amrin Rizwana',
    qualificationTitle: 'M.D.S. (Orthodontics & Craniofacial Orthopaedics)',
    role: 'Orthodontist & Aligner Specialist',
    qualification: 'Highly accomplished orthodontist from Maulana Azad Institute of Dental Sciences, New Delhi. She is Invisalign & Graphy certified, proficient in aligner therapy, growth modification, and smile designing — blending science, technology, and artistry.',
    education: 'Maulana Azad Institute of Dental Sciences, New Delhi',
    image: assetPath('/images/dr-amrin.jpg'),
    intro: 'Thoughtful planning. A smile that feels like you.',
    bio: 'Dr. Amrin Rizwana is an Invisalign Certified Provider who focuses on tooth alignment and bite correction. Her practice includes braces, Invisalign clear aligners and growth modification, with treatment planning shaped around each patient’s needs.',
    credentials: [
      {
        name: 'Invisalign Certified Provider',
        shortLabel: 'Invisalign Certified',
        issuer: 'Invisalign',
        logo: assetPath('/brand/credentials/invisalign-logo.svg'),
        logoAlt: 'Invisalign logo',
        website: 'https://www.invisalign.com/',
      },
    ],
    interests: [
      'Clear aligners',
      'Braces and bite correction',
      'Growth modification',
      'Orthodontic smile planning',
    ],
    services: ['invisible-aligners', 'braces-orthodontics'],
  },
] as const;

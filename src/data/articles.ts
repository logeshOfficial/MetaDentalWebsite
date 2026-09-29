export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  service: string;
  coverImage?: string;
  status: 'draft' | 'published';
  reviewer: string | null;
  reviewedAt: string | null;
  sections: { heading: string; text: string }[];
};
export const articles: Article[] = [
  {
    slug: 'dental-implants-cost-chennai',
    title: 'Dental implant costs: questions to ask at your consultation',
    description:
      'Understand what to ask about assessment, implant treatment, the final tooth and maintenance when comparing estimates.',
    category: 'Dental implants',
    service: 'dental-implants',
    status: 'draft',
    reviewer: null,
    reviewedAt: null,
    sections: [
      {
        heading: 'Ask what the estimate includes',
        text: 'An estimate should explain the proposed treatment rather than present a price without context. Ask which consultations, investigations, components and review visits are included.',
      },
      {
        heading: 'Compare the complete plan',
        text: 'Ask whether the final restoration is part of the quote and how any additional treatment would be discussed. A written breakdown makes the next steps easier to understand.',
      },
      {
        heading: 'Make room for your questions',
        text: 'Bring information about previous dental work and a list of concerns. Your consultation is the place to discuss options, time commitments and ongoing care.',
      },
    ],
  },
  {
    slug: 'aligners-vs-braces',
    title: 'Aligners or braces: preparing for the conversation',
    description:
      'Questions about everyday routines, appointments and retention to bring to your orthodontic consultation.',
    category: 'Orthodontics & aligners',
    service: 'invisible-aligners',
    status: 'draft',
    reviewer: null,
    reviewedAt: null,
    sections: [
      {
        heading: 'Start with your priorities',
        text: 'Tell your orthodontist what you want to change and what matters in daily life. Work, school and your preferences are useful context for the discussion.',
      },
      {
        heading: 'Ask about the full journey',
        text: 'Discuss appointments, appliance care and what happens after active treatment. Ask the orthodontist to explain the reasons behind the recommended approach.',
      },
      {
        heading: 'Understand the alternatives',
        text: 'A treatment recommendation should follow assessment. Ask how the options compare for your particular bite rather than choosing only by appearance.',
      },
    ],
  },
  {
    slug: 'first-dental-visit',
    title: 'Your first visit to META DENTAL: a practical checklist',
    description:
      'What to bring, how to find the clinic and how to make the most of your appointment.',
    category: 'Visiting the clinic',
    service: 'dental-cleaning',
    status: 'draft',
    reviewer: null,
    reviewedAt: null,
    sections: [
      {
        heading: 'Before you leave home',
        text: 'Confirm the appointment details and bring any relevant previous dental records. Prepare a list of your medications, allergies and questions.',
      },
      {
        heading: 'Finding the clinic',
        text: 'META DENTAL is at 1/130, East Coast Road, Panaiyur, Chennai 600119. Use the directions link or call the clinic if you need help finding the entrance.',
      },
      {
        heading: 'During your visit',
        text: 'Describe what prompted the appointment and what you hope to understand. Ask about proposed next steps, fees and any follow-up before you leave.',
      },
    ],
  },
];

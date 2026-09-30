import { assetPath } from '@/lib/paths';

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  service: string;
  coverImage?: string;
  coverAlt?: string;
  status: 'draft' | 'published';
  reviewer: string | null;
  reviewedAt: string | null;
  sections: { heading: string; paragraphs: string[] }[];
};
export const articles: Article[] = [
  {
    slug: 'dental-implants-cost-chennai',
    title: 'Dental implant costs: questions to ask at your consultation',
    description:
      'Understand what to ask about assessment, implant treatment, the final tooth and maintenance when comparing estimates.',
    category: 'Dental implants',
    service: 'dental-implants',
    coverImage: assetPath('/images/treatment.jpg'),
    coverAlt: 'A treatment room at META DENTAL in Panaiyur, Chennai',
    status: 'draft',
    reviewer: null,
    reviewedAt: null,
    sections: [
      {
        heading: 'Why implant estimates can differ',
        paragraphs: [
          'A dental implant plan is prepared for one person and one site in the mouth. The number and position of missing teeth, the condition of the gums and bone, the type of final tooth and the findings from an examination can all affect the proposed approach.',
          'That is why a headline price rarely tells the whole story. A useful consultation should explain what has been assessed, which parts of treatment are included and which decisions can only be made after further examination or imaging.',
        ],
      },
      {
        heading: 'Ask what the assessment includes',
        paragraphs: [
          'Ask whether the initial estimate includes the consultation, relevant scans or X-rays, treatment planning and review appointments. Tell the dentist about previous dental work, medical conditions, medicines, smoking or tobacco use and any concerns about healing.',
          'The dentist may need to assess the neighbouring teeth, your bite, gum health and the available bone before confirming whether an implant is suitable. You can ask to see the findings and have unfamiliar terms explained in plain language.',
        ],
      },
      {
        heading: 'Separate the implant from the final tooth',
        paragraphs: [
          'An implant restoration can involve several parts: the implant placed in the jaw, a connecting component and the crown or other final restoration. Ask whether every stage is included in the written estimate and which materials or systems are being proposed.',
          'If a temporary tooth may be needed while the area heals, ask whether it is included. Also ask how the appearance, fit and bite of the final restoration will be checked before treatment is considered complete.',
        ],
      },
      {
        heading: 'Discuss possible additional treatment',
        paragraphs: [
          'Some people may require treatment for gum disease, extraction of a damaged tooth or a procedure to improve the available bone before implant placement. These steps are not required for everyone and should only be recommended after an individual assessment.',
          'Ask how any additional need would be identified, how it could change the timeline and when a revised cost would be agreed. You should have the opportunity to understand alternatives before deciding whether to proceed.',
        ],
      },
      {
        heading: 'Understand the timeline and follow-up',
        paragraphs: [
          'Implant treatment is often completed in stages, with healing time between appointments. Ask for an outline of the expected sequence, how many visits may be involved and what could cause the plan to change.',
          'It is also helpful to know whom to contact after a procedure, which follow-up visits are included and what symptoms require urgent advice. Individual healing times vary, so your dentist should give guidance based on your own assessment.',
        ],
      },
      {
        heading: 'Compare written plans, not one number',
        paragraphs: [
          'When comparing estimates, check that they describe the same scope of care. Look for the assessment, implant components, temporary restoration if relevant, final tooth, review visits and any maintenance advice. Ask whether there are circumstances in which the fee could change.',
          'Bring a written list of questions to the consultation and take time to consider the answers. The lowest or highest figure alone does not show which option is most appropriate for your mouth, health and priorities.',
        ],
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
    coverImage: assetPath('/images/gallery/dental-consultation.jpg'),
    coverAlt: 'A dentist discussing treatment options with a patient at META DENTAL',
    status: 'draft',
    reviewer: null,
    reviewedAt: null,
    sections: [
      {
        heading: 'Begin with an orthodontic assessment',
        paragraphs: [
          'Clear aligners and fixed braces can both move teeth, but they do not work in exactly the same way. The right discussion begins with an assessment of the teeth, gums, bite and jaw relationship rather than a choice based only on appearance.',
          'Tell the dentist or orthodontist what you would like to change and whether you have pain, jaw symptoms, previous orthodontic treatment or dental work. Ask which findings shape the recommendation for your particular case.',
        ],
      },
      {
        heading: 'Compare the daily routine',
        paragraphs: [
          'Aligners are removable, so they need to be worn for the prescribed time and removed for eating and cleaning. Their success depends on consistent wear. Fixed braces remain on the teeth and require careful cleaning around brackets and wires.',
          'Describe your work, school, travel and meal routine honestly. Ask to see how each appliance is cleaned, what you may need to carry during the day and how treatment could affect eating, speaking or playing sport.',
        ],
      },
      {
        heading: 'Ask how each option would move your teeth',
        paragraphs: [
          'Some tooth movements and bite corrections may be more predictable with one approach, or may need attachments, elastics or a combination of methods. Suitability depends on the clinical findings and the complexity of the movement required.',
          'Ask the clinician to explain the intended changes, important limitations and any alternative plan. Digital previews can help explain a proposal, but they should not be treated as a guaranteed final result.',
        ],
      },
      {
        heading: 'Plan for appointments and adjustments',
        paragraphs: [
          'Both options require review appointments. Aligners are usually supplied in a planned sequence, while braces need periodic checks and adjustments. Missed visits, broken appliances or inconsistent aligner wear may extend treatment.',
          'Ask how often reviews are normally arranged, what to do if an aligner is lost or a bracket breaks and whether remote check-ins are ever appropriate. Confirm what is included in the treatment fee before starting.',
        ],
      },
      {
        heading: 'Think about comfort and oral hygiene',
        paragraphs: [
          'Mild pressure or tenderness can occur as teeth begin to move. Brackets can sometimes rub the cheeks, while aligner edges or attachments may feel unfamiliar at first. Your clinician should explain what is expected and when discomfort needs attention.',
          'Healthy gums and good plaque control matter throughout treatment. Ask for a cleaning demonstration and advice about dental check-ups, fluoride and foods or habits that could damage the appliance.',
        ],
      },
      {
        heading: 'Include retention in the plan',
        paragraphs: [
          'Teeth can move again after active orthodontic treatment, so retainers are an important part of the plan. Ask which type of retainer is recommended, how long it should be worn and how it will be repaired or replaced if necessary.',
          'Before deciding, compare the complete journey: assessment, active treatment, expected cooperation, review visits, retainers and long-term follow-up. The best option is the one that is clinically suitable and realistic for you to maintain.',
        ],
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
    coverImage: assetPath('/images/exterior.jpg'),
    coverAlt: 'The exterior entrance of META DENTAL on East Coast Road in Panaiyur',
    status: 'draft',
    reviewer: null,
    reviewedAt: null,
    sections: [
      {
        heading: 'Before you leave home',
        paragraphs: [
          'Confirm the appointment time and allow enough time to reach the clinic. If you need to change or cancel, contact the reception team as early as possible so they can help with another time.',
          'Bring any relevant previous dental records or X-rays that you have been asked to provide. Make a current list of medicines, allergies, medical conditions and previous reactions to dental treatment or anaesthetic.',
        ],
      },
      {
        heading: 'Finding the clinic',
        paragraphs: [
          'META DENTAL is at 1/130, East Coast Road, Panaiyur, Chennai, Tamil Nadu 600119. The contact page has a live Google Map and a directions button that can open the route from your location.',
          'If you are travelling from Uthandi, Akkarai, Injambakkam, Neelankarai or Sholinganallur and are unsure of the entrance, call the clinic before the appointment. Let the team know in advance if you have mobility or access requirements.',
        ],
      },
      {
        heading: 'At reception and during your history',
        paragraphs: [
          'You may be asked to complete or confirm contact and health information. Accurate details help the clinical team plan care safely, so mention pregnancy, recent hospital treatment, bleeding conditions and any medicine prescribed by another clinician.',
          'Tell the team if you feel anxious about dental visits or have had a difficult experience before. You can ask the dentist to explain each step, agree on a signal to pause and discuss ways to make the visit more manageable.',
        ],
      },
      {
        heading: 'Explain what brought you in',
        paragraphs: [
          'Describe the main concern in your own words, including when it began, what makes it better or worse and whether it affects eating, sleeping or daily life. If appearance is your concern, explain what you hope to change without feeling that you need to choose a treatment in advance.',
          'The dentist may examine the teeth, gums, bite and surrounding tissues. X-rays or photographs may be suggested when they are relevant. You should be told why an investigation is recommended and have an opportunity to ask questions.',
        ],
      },
      {
        heading: 'Discuss the findings and choices',
        paragraphs: [
          'After the assessment, ask the dentist to explain the findings, available options, expected benefits, material risks and what could happen without treatment. Some concerns can be addressed immediately, while others need a separate planning or treatment appointment.',
          'If several options are suitable, ask how they differ in time, maintenance and likely longevity. A consultation is a conversation; you can request time to consider non-urgent treatment before making a decision.',
        ],
      },
      {
        heading: 'Before you leave',
        paragraphs: [
          'Confirm the proposed next step, expected fees and whether another appointment is required. Ask for written instructions when there is something you need to do at home, and check whom to contact if symptoms change.',
          'For severe swelling, uncontrolled bleeding, facial injury, difficulty breathing or another urgent medical concern, seek appropriate emergency help rather than waiting for a routine appointment or relying on website information.',
        ],
      },
    ],
  },
];

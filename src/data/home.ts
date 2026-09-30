import { site } from '@/lib/site';

export const reviews = [
  {
    name: 'Priya Ramesh',
    location: 'Panaiyur, Chennai',
    rating: 5,
    text: "The most painless dental visit I've ever had. Dr. Imran took the time to explain everything before starting. I came in dreading a root canal and left feeling completely at ease.",
  },
  {
    name: 'Karthik Sundaram',
    location: 'Thiruvanmiyur, Chennai',
    rating: 5,
    text: 'Clean clinic, professional team, honest pricing. My implant was done in stages exactly as explained. The result looks and feels completely natural. Highly recommend META DENTAL.',
  },
  {
    name: 'Deepa Narayanan',
    location: 'ECR, Chennai',
    rating: 5,
    text: 'Brought my 7-year-old here after a bad experience elsewhere. Dr. Amrin was so patient and gentle with her. My daughter actually asked when we can go back! That says everything.',
  },
  {
    name: 'Arjun Mehta',
    location: 'Sholinganallur, Chennai',
    rating: 5,
    text: 'Started aligners here 8 months ago and the progress is incredible. Detailed treatment plan from day one, regular check-ins, and always available on WhatsApp for questions.',
  },
  {
    name: 'Sneha Iyer',
    location: 'Neelankarai, Chennai',
    rating: 5,
    text: 'I wanted a smile makeover before my wedding and Dr. Amrin delivered beyond my expectations. The veneers look so natural. Got so many compliments at the reception!',
  },
  {
    name: 'Vijay Krishnan',
    location: 'Perungudi, Chennai',
    rating: 5,
    text: 'Called at 8 PM with a severe toothache. They accommodated me the next morning and resolved it without any fuss. Efficient, caring and very transparent about the cost.',
  },
] as const;

export const home = {
  eyebrow: 'Best DENTAL CLINIC in ECR, CHENNAI',
  title: 'Thoughtful care.',
  titleAccent: 'Confident smiles.',
  description:
    'Dental care for every chapter of life. From a routine check-up to a new smile, meet your dentists at META DENTAL in Panaiyur.',
  heroCaption: 'OUR CLINIC IN PANAIYUR',
  heroNote: 'A welcoming space for your next chapter.',
  treatmentsHeading: 'Dental care for every stage of life.',
  treatmentsCopy:
    'From preventive check-ups and kids’ dentistry to root canal care, crowns, implants and clear aligners, start with the treatment information that fits your concern.',
  featured: [
    'dental-implants',
    'invisible-aligners',
    'root-canal-treatment',
    'cosmetic-dentistry',
    'kids-dentistry',
    'dental-cleaning',
  ],
  values: [
    {
      title: 'A conversation first',
      copy: 'Share your concerns and understand your options before deciding on treatment.',
    },
    {
      title: 'Care that connects',
      copy: 'Restorative and orthodontic care, with your overall oral health in view.',
    },
    {
      title: 'Close to home',
      copy: 'Find us on East Coast Road in Panaiyur, serving families across the ECR neighbourhoods.',
    },
  ],
  faqs: [
    { q: 'Where is META DENTAL located?', a: site.address },
    {
      q: 'How do I book an appointment?',
      a: "Choose a time through our clinic's MySlotHub booking page, call us, or send a WhatsApp enquiry. Check the booking confirmation before travelling.",
    },
    {
      q: 'Do you offer both aligners and dental implants?',
      a: 'You can arrange consultations for aligner and implant treatment. Your dentist will assess suitability and explain the options for your case.',
    },
    {
      q: 'Can I visit on Sunday?',
      a: 'Sunday visits are by appointment. Please contact the clinic before making travel plans.',
    },
  ],
};

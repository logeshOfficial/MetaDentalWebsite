export const legal = {
  privacy: {
    title: 'Privacy',
    description: 'How this website handles enquiries and links to external booking services.',
    sections: [
      [
        'Using this website',
        'This website does not provide a patient account or collect a medical history. Contact the clinic directly for questions about your care.',
      ],
      [
        'Booking and messaging',
        'Booking takes place on MySlotHub. WhatsApp, Google Maps and other linked services process information under their own terms and privacy policies. Share only the details necessary for your enquiry.',
      ],
      [
        'Website information',
        'The hosting provider may process technical request logs to operate and protect the website. This build does not load advertising or analytics trackers. Link-click events remain in the browser unless a consent-aware analytics integration is added.',
      ],
      [
        'Privacy enquiries',
        'For questions about information you share with the clinic, contact metadentalecr@gmail.com or +91 90944 65709. Clinic record-retention procedures and the hosting provider must be confirmed before publication.',
      ],
    ],
  },
  terms: {
    title: 'Website terms',
    description: 'Information about using this website and arranging a clinic visit.',
    sections: [
      [
        'Appointments',
        'An enquiry or link click is not an appointment confirmation. Check the confirmation provided by the clinic or booking platform before travelling.',
      ],
      [
        'Treatment decisions',
        'Website information is general. A clinical assessment is needed for diagnosis, suitability, treatment planning and fees.',
      ],
      [
        'External services',
        'Bookings, messaging and maps may open an external service with its own terms.',
      ],
      [
        'Availability',
        'Clinic hours and appointment availability can change. Contact the clinic to confirm details relevant to your visit.',
      ],
    ],
  },
  'medical-disclaimer': {
    title: 'About our medical information',
    description: 'How to use the general dental information on this website.',
    sections: [
      [
        'General information',
        'Treatment information is intended to support a conversation with a dentist. It is not an individual diagnosis, treatment recommendation or substitute for an examination.',
      ],
      [
        'Personalised assessment',
        'The suitability, risks, alternatives and expected outcomes of a procedure depend on your circumstances. Discuss these with your treating dentist before deciding.',
      ],
      [
        'Urgent symptoms',
        'Severe swelling affecting breathing or swallowing, uncontrolled bleeding or major facial injury requires emergency medical care. Do not wait for a website enquiry to be answered.',
      ],
      [
        'Clinical review',
        'We do not attribute medical review to a doctor unless that review has been completed. Educational articles require recorded clinical review before publication.',
      ],
    ],
  },
} as const;

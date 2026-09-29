export type Service = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  summary: string;
  overview: string;
  suitability: string;
  process: string;
  risks: string;
  aftercare: string;
  doctor: string;
  related: string[];
  faqs: { q: string; a: string }[];
  clinicalReview: {
    status: 'pending' | 'approved';
    reviewer: string | null;
    reviewedAt: string | null;
  };
};
export const services: Service[] = [
  {
    slug: 'dental-implants',
    name: 'Dental implants',
    category: 'Restore & replace',
    headline: 'A new foundation for your smile.',
    summary:
      'Discuss dental implants and implant-supported crowns or bridges at META DENTAL in Panaiyur, ECR.',
    overview:
      'A dental implant can support an individual replacement crown or form part of an implant-supported bridge. Your consultation looks at the gap, neighbouring teeth, gum health and your overall treatment priorities.',
    suitability:
      'People considering replacement of one or more missing teeth can ask whether an implant, bridge or denture would suit them. Suitability requires a clinical assessment.',
    process:
      'Your dentist assesses your mouth and any imaging needed, discusses alternatives and explains the stages involved. Ask how the implant and final restoration will be planned together.',
    risks:
      'Healing, maintenance and the condition of supporting tissues affect the outcome. Surgery carries risks, and not every patient or tooth site is suitable.',
    aftercare:
      'Ask for a personalised care plan and review schedule. Ongoing cleaning and dental follow-up remain important after a replacement tooth is fitted.',
    doctor: 'dr-imran',
    related: ['crowns-bridges', 'dentures'],
    faqs: [
      {
        q: 'Can I get an implant immediately after losing a tooth?',
        a: 'Timing depends on the tooth site and your assessment. A consultation is needed before an immediate or staged approach can be recommended.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'invisible-aligners',
    name: 'Invisible aligners',
    category: 'Align & balance',
    headline: 'A clearer path to your smile.',
    summary: 'Discuss clear aligners, including Invisalign, with our orthodontist in ECR, Chennai.',
    overview:
      'Clear aligners are removable trays used in a planned sequence to move teeth. They are one option within orthodontic care rather than a suitable choice for every bite.',
    suitability:
      'Adults and younger patients considering discreet alignment can discuss suitability. The condition of your teeth, gums and bite matters more than appearance alone.',
    process:
      'An orthodontic assessment is followed by records and a treatment plan. Discuss wear requirements, review appointments, attachments and retention before deciding.',
    risks:
      'Treatment depends on consistent wear and follow-up. Some movements need a different approach; results and duration vary.',
    aftercare:
      'Follow the prescribed wear and cleaning instructions. Discuss retainers and ongoing reviews before active treatment ends.',
    doctor: 'dr-amrin-rizwana',
    related: ['braces-orthodontics', 'dental-cleaning'],
    faqs: [
      {
        q: 'Are aligners the right choice for everyone?',
        a: 'No. Your orthodontist assesses your bite and the movements needed, then explains whether aligners or another option fits your case.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'braces-orthodontics',
    name: 'Braces & orthodontics',
    category: 'Align & balance',
    headline: 'Better alignment. Thoughtfully planned.',
    summary:
      'Explore orthodontic treatment for tooth alignment and bite concerns with Dr. Amrin Rizwana.',
    overview:
      'Orthodontic care addresses the position of teeth and the way they meet. Braces use a fixed appliance; removable aligners may be an alternative for selected cases.',
    suitability:
      'Crowding, spacing and bite concerns are reasons to arrange an assessment. Adults can also discuss orthodontic treatment.',
    process:
      'The orthodontist examines your teeth and bite and may recommend photographs or imaging. Your plan explains the appliance, review visits and retention.',
    risks:
      'Soreness can occur, and careful cleaning is important during treatment. The expected duration depends on the complexity of the correction.',
    aftercare:
      'Keep review visits and follow appliance-care guidance. Retainers help maintain tooth position after active treatment.',
    doctor: 'dr-amrin-rizwana',
    related: ['invisible-aligners', 'kids-dentistry'],
    faqs: [
      {
        q: 'Will I need a retainer afterwards?',
        a: 'Retainers are normally part of maintaining an orthodontic result. Your orthodontist will explain the type and wear schedule for you.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'root-canal-treatment',
    name: 'Root canal treatment',
    category: 'Relieve & repair',
    headline: 'Care for the tooth you want to keep.',
    summary: 'Book an assessment for a painful or damaged tooth at our Panaiyur dental clinic.',
    overview:
      'Root canal treatment addresses infection inside a tooth. The infected tissue is removed, the root canals are cleaned and the tooth is sealed.',
    suitability:
      'A dentist needs to assess whether a tooth can be restored. Pain alone does not confirm that a root canal is required.',
    process:
      'Your visit starts with diagnosis. If treatment is suitable, the dentist explains anaesthesia, treatment visits and the final restoration.',
    risks:
      'Some tenderness can follow treatment. A tooth may need further treatment or extraction if it cannot be predictably restored.',
    aftercare:
      'Attend follow-up appointments and discuss the filling or crown needed to protect the tooth. Contact the clinic if pain or swelling worsens.',
    doctor: 'clinic',
    related: ['crowns-bridges', 'emergency-dentist'],
    faqs: [
      {
        q: 'Is a crown always needed afterwards?',
        a: 'The final restoration depends on the tooth and how much structure remains. Your dentist will explain whether a crown or another restoration is appropriate.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'cosmetic-dentistry',
    name: 'Cosmetic dentistry',
    category: 'Smile & confidence',
    headline: 'Make room for a smile that feels like you.',
    summary: 'Discuss the colour, shape and appearance of your teeth at META DENTAL on ECR.',
    overview:
      'Cosmetic planning begins with what you would like to change and the health of your teeth and gums. It may involve restorative, whitening or orthodontic options.',
    suitability:
      'If a chipped edge, tooth colour or an uneven appearance concerns you, bring those priorities to a consultation. A healthy foundation comes first.',
    process:
      'We start with an assessment and a conversation about expectations. Ask to compare conservative options, maintenance needs and the amount of tooth preparation involved.',
    risks:
      'Some procedures involve irreversible tooth changes. Different materials and treatments have different limitations and maintenance requirements.',
    aftercare:
      'Keep your planned reviews and follow guidance for the treatment chosen. Repairs or replacement may be needed over time.',
    doctor: 'dr-imran',
    related: ['teeth-whitening', 'smile-designing', 'invisible-aligners'],
    faqs: [
      {
        q: 'Do I need veneers to improve my smile?',
        a: 'Not necessarily. The right approach depends on the concern; discuss alternatives and how much treatment is appropriate before deciding.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'smile-designing',
    name: 'Smile designing',
    category: 'Smile & confidence',
    headline: 'Your smile, considered as a whole.',
    summary: 'Plan a coordinated approach to your smile with a consultation in Panaiyur, Chennai.',
    overview:
      'Smile designing is a planning conversation about how tooth appearance, alignment and oral health fit together. It is not a single standard procedure.',
    suitability:
      'People considering more than one change can use a consultation to set priorities and understand the sequence of possible treatments.',
    process:
      'Discuss your goals, any previous dentistry and what you would like to preserve. A proposed plan should make clear which treatments are optional and why each is suggested.',
    risks:
      'A visual plan cannot guarantee a particular result. Treatment choices may involve trade-offs in time, tooth preparation and future maintenance.',
    aftercare:
      'Agree a review and maintenance plan for each treatment involved. Tell your dentist if your bite feels different after restorative work.',
    doctor: 'dr-imran',
    related: ['cosmetic-dentistry', 'crowns-bridges', 'invisible-aligners'],
    faqs: [
      {
        q: 'Can treatment be planned in stages?',
        a: 'Ask your dentist which parts can be staged and which need to be coordinated. The sequence depends on clinical priorities and your preferences.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'teeth-whitening',
    name: 'Teeth whitening',
    category: 'Smile & confidence',
    headline: 'A brighter smile begins with healthy teeth.',
    summary: 'Explore dentist-supervised whitening after an assessment of your teeth and gums.',
    overview:
      'Whitening lightens the colour of natural teeth. It does not change the shade of existing crowns, fillings or dentures.',
    suitability:
      'A dental assessment checks the cause of discolouration and whether your teeth and gums are healthy enough for whitening.',
    process:
      'The dentist checks suitability and explains the available approach, expected limits and how to use any prescribed products.',
    risks:
      'Temporary sensitivity or gum irritation may occur. Results are not permanent, and existing restorations may remain a different shade.',
    aftercare:
      'Use products only as instructed and speak to your dentist about troublesome sensitivity. Continue regular oral hygiene and check-ups.',
    doctor: 'clinic',
    related: ['dental-cleaning', 'cosmetic-dentistry'],
    faqs: [
      {
        q: 'Will whitening change my crowns or fillings?',
        a: 'Whitening acts on natural teeth. Existing restorations will not whiten in the same way, so discuss colour matching before treatment.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'crowns-bridges',
    name: 'Dental crowns & bridges',
    category: 'Restore & replace',
    headline: 'Restore shape, function and everyday confidence.',
    summary:
      'Discuss dental crowns, zirconia crowns, fixed bridges and implant-supported restorations with Dr. Imran at META DENTAL, ECR.',
    overview:
      'A dental crown covers and restores a tooth; a fixed dental bridge replaces a missing tooth using support from adjacent teeth or implants. Material options, including zirconia crowns, and the appropriate restoration design depend on the tooth, supporting structures and bite.',
    suitability:
      'A damaged tooth or a gap may prompt a restorative consultation. Your dentist first assesses what can be preserved and how the bite will be supported.',
    process:
      'The plan covers the supporting teeth, material choices, preparation, impressions or scans and fitting. Ask whether temporary restorations will be needed.',
    risks:
      'Preparation may involve removing tooth structure. Restorations can wear, chip or require replacement; supporting teeth still need care.',
    aftercare:
      'Clean around and beneath bridgework as instructed and attend reviews. Contact the clinic if a restoration feels loose or your bite changes.',
    doctor: 'dr-imran',
    related: ['dental-implants', 'root-canal-treatment', 'dentures'],
    faqs: [
      {
        q: 'How do I choose between a bridge and an implant?',
        a: 'Your dentist compares the gap, supporting teeth, oral health and treatment preferences. Both options have limitations and require ongoing care.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'dentures',
    name: 'Dentures',
    category: 'Restore & replace',
    headline: 'Replacement teeth, planned around daily life.',
    summary:
      'Explore complete dentures and partial dentures at our dental clinic in Panaiyur, Chennai.',
    overview:
      'Complete dentures can replace a full arch of missing teeth, while partial dentures replace selected teeth. Planning includes the tissues supporting the denture, remaining teeth and your bite.',
    suitability:
      'If several teeth are missing, ask how removable and other replacement options compare for your needs.',
    process:
      'An assessment is followed by a plan for impressions, fitting and adjustments. Discuss comfort, appearance and eating expectations at each stage.',
    risks:
      'Adapting to a denture takes time. Fit can change and adjustments or replacement may be needed; persistent soreness needs assessment.',
    aftercare:
      'Follow the care and cleaning instructions provided for your appliance. Arrange a review if it becomes loose or uncomfortable.',
    doctor: 'dr-imran',
    related: ['dental-implants', 'crowns-bridges'],
    faqs: [
      {
        q: 'Will I need adjustment visits?',
        a: 'Adjustment visits may be needed as you get used to your denture. Discuss the fitting and follow-up process before treatment.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'wisdom-tooth-extraction',
    name: 'Wisdom tooth extraction',
    category: 'Relieve & repair',
    headline: 'Understand the cause. Choose the next step.',
    summary: 'Arrange an assessment for pain or concerns around a wisdom tooth on ECR.',
    overview:
      'Wisdom teeth do not always need removal. A dentist checks the tooth, neighbouring teeth and gums before advising whether monitoring or treatment is appropriate.',
    suitability:
      'Recurring problems or pain around a back tooth are reasons for a dental assessment. Imaging may be needed to understand its position.',
    process:
      'The dentist explains whether removal is indicated, the procedure involved and whether referral is appropriate for the complexity of the case.',
    risks:
      'Extraction has risks, including pain, swelling and other complications. Ask about risks specific to the tooth’s position before consenting.',
    aftercare:
      'Follow the individual aftercare instructions and know whom to contact if recovery does not progress as expected.',
    doctor: 'clinic',
    related: ['emergency-dentist', 'dental-cleaning'],
    faqs: [
      {
        q: 'Does every wisdom tooth need to be removed?',
        a: 'No. Your dentist assesses whether the tooth is causing a problem and discusses the benefits and risks of removal or monitoring.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'kids-dentistry',
    name: 'Kids’ dentistry',
    category: 'Prevent & protect',
    headline: 'Small steps towards confident dental visits.',
    summary: 'Plan a dental visit for your child at META DENTAL in Panaiyur.',
    overview:
      'Children’s dental visits focus on checking teeth and helping families build good oral-care habits. The approach depends on a child’s age and needs.',
    suitability:
      'A routine check, tooth concern or questions about development can be discussed at an appointment. Tell the team if your child is anxious about visiting.',
    process:
      'Bring any relevant medical information and explain the concern when booking. The dentist can discuss prevention, any treatment required and suitable follow-up.',
    risks:
      'A child’s cooperation and clinical needs affect what can be completed in a visit. More complex needs may require referral.',
    aftercare:
      'Follow the age-appropriate advice given by the dentist and arrange reviews at the interval recommended for your child.',
    doctor: 'clinic',
    related: ['braces-orthodontics', 'dental-cleaning'],
    faqs: [
      {
        q: 'How can I prepare my child for the appointment?',
        a: 'Use calm, simple language about having their teeth checked. Tell the clinic about worries or additional needs when you arrange the visit.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'gum-treatment',
    name: 'Gum treatment',
    category: 'Prevent & protect',
    headline: 'Healthy gums are the foundation.',
    summary: 'Arrange a gum assessment for bleeding, soreness or changes in your gum health.',
    overview:
      'Bleeding or swollen gums should be assessed by a dentist. Gum disease can affect the support around teeth and may progress without treatment.',
    suitability:
      'Bleeding during brushing, persistent bad breath or gum changes are reasons to book a visit. Loose teeth or marked swelling need prompt attention.',
    process:
      'The dentist examines your gums and discusses cleaning, home-care changes and any further treatment or specialist assessment needed.',
    risks:
      'The treatment approach depends on severity. Long-term control relies on daily care and follow-up rather than a single procedure.',
    aftercare:
      'Follow the cleaning guidance recommended for you and attend periodontal reviews. Let your dentist know about persistent bleeding or discomfort.',
    doctor: 'clinic',
    related: ['dental-cleaning', 'laser-dentistry'],
    faqs: [
      {
        q: 'Should I ignore gums that bleed when brushing?',
        a: 'No. Bleeding gums deserve a dental assessment so that the cause and appropriate care can be discussed.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'laser-dentistry',
    name: 'Laser dentistry',
    category: 'Relieve & repair',
    headline: 'The right tool for the right treatment.',
    summary: 'Ask whether a laser-assisted approach is relevant to your proposed dental treatment.',
    overview:
      'Laser dentistry describes the use of a particular instrument during selected procedures. It is not a replacement for diagnosis or a treatment suitable for every dental problem.',
    suitability:
      'Suitability depends on the procedure being considered. Ask your dentist whether a laser offers a meaningful advantage in your case.',
    process:
      'The consultation should explain the purpose of the procedure, the instruments involved, alternatives and the expected recovery.',
    risks:
      'The use of a laser does not guarantee painless care or a particular result. Risks and aftercare depend on the underlying procedure.',
    aftercare:
      'Follow the specific instructions for the procedure performed and attend any recommended review appointments.',
    doctor: 'clinic',
    related: ['gum-treatment', 'cosmetic-dentistry'],
    faqs: [
      {
        q: 'Is laser treatment always preferable?',
        a: 'No. Instrument choice depends on the condition being treated. Ask about the benefits, limitations and alternatives in your case.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'dental-cleaning',
    name: 'Dental cleaning & check-ups',
    category: 'Prevent & protect',
    headline: 'A little attention now. A healthier routine ahead.',
    summary: 'Make time for preventive dental care at META DENTAL, Panaiyur.',
    overview:
      'A check-up looks at oral health and any concerns you have. Professional cleaning may be recommended as part of your care, alongside your daily routine.',
    suitability:
      'Routine visits and changes such as bleeding gums or sensitivity are reasons to speak to a dentist. Your review interval should reflect your needs.',
    process:
      'The dentist examines your mouth, discusses findings and explains whether cleaning or other care is needed. Use the visit to ask about your home-care routine.',
    risks:
      'Cleaning is not a substitute for treating other dental problems. Existing sensitivity or gum concerns should be discussed before starting.',
    aftercare:
      'Follow personalised brushing and interdental-cleaning advice. Book the next review at the interval recommended after your assessment.',
    doctor: 'clinic',
    related: ['gum-treatment', 'kids-dentistry', 'teeth-whitening'],
    faqs: [
      {
        q: 'How often should I have a check-up?',
        a: 'There is no single interval for everyone. Your dentist recommends a schedule based on your oral health and risk of future problems.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'emergency-dentist',
    name: 'Urgent dental care',
    category: 'Relieve & repair',
    headline: 'When a tooth cannot wait, call us.',
    summary:
      'Contact META DENTAL for appointment availability if you have tooth pain, swelling or a dental injury.',
    overview:
      'Dental pain, swelling and injuries need timely assessment. Call the clinic and describe your concern so the team can advise on appointment availability.',
    suitability:
      'A painful tooth, broken restoration or dental injury is a reason to contact a dentist. The clinic is not a 24-hour emergency department.',
    process:
      'Call before travelling. Describe when symptoms began and whether there is swelling or injury. The dentist will assess the cause and discuss immediate and follow-up care.',
    risks:
      'Severe swelling affecting breathing or swallowing, uncontrolled bleeding or major facial injury requires emergency medical care rather than waiting for a dental appointment.',
    aftercare:
      'Follow the advice provided after assessment and complete any recommended follow-up. Seek urgent medical help if serious symptoms develop.',
    doctor: 'clinic',
    related: ['root-canal-treatment', 'wisdom-tooth-extraction'],
    faqs: [
      {
        q: 'Can I walk in for an emergency appointment?',
        a: 'Please call first to check availability. For breathing or swallowing difficulty, uncontrolled bleeding or major injury, seek emergency medical care immediately.',
      },
      {
        q: 'How much will my treatment cost?',
        a: 'The fee depends on your assessment and the treatment plan. Ask for an itemised estimate, including any review or restoration costs, before deciding.',
      },
    ],
    clinicalReview: {
      status: 'pending',
      reviewer: null,
      reviewedAt: null,
    },
  },
  {
    slug: 'general-dentistry',
    name: 'General dentistry',
    category: 'Prevent & protect',
    headline: 'Start with a clear dental assessment.',
    summary:
      'Arrange a general dental consultation for check-ups, tooth concerns and preventive care in Panaiyur, ECR.',
    overview:
      'General dentistry brings routine assessment, prevention and treatment planning together. A consultation gives you space to discuss tooth pain, sensitivity, gum concerns, existing dental work or changes you have noticed.',
    suitability:
      'A regular check-up or a new concern are both reasons to arrange an appointment. The dentist assesses your oral health before recommending any treatment.',
    process:
      'Your dentist asks about your concern and relevant health history, examines your mouth and explains any investigations, preventive advice or treatment options that may be appropriate.',
    risks:
      'A general consultation does not replace emergency medical care or guarantee that treatment can be completed at the first visit. Some concerns may need imaging, a follow-up visit or referral.',
    aftercare:
      'Follow the individual advice from your assessment and attend reviews at the interval recommended for your oral health needs.',
    doctor: 'clinic',
    related: ['dental-cleaning', 'gum-treatment', 'emergency-dentist'],
    faqs: [
      {
        q: 'What can I discuss at a general dental consultation?',
        a: 'You can discuss routine care, tooth or gum concerns, previous dental work and questions about possible treatment. Recommendations follow an examination.',
      },
      {
        q: 'How much will my consultation cost?',
        a: 'Contact the clinic for current fees. Any additional investigation or treatment should be explained before you decide how to proceed.',
      },
    ],
    clinicalReview: { status: 'pending', reviewer: null, reviewedAt: null },
  },
  {
    slug: 'restorative-dentistry',
    name: 'Restorative dentistry',
    category: 'Restore & replace',
    headline: 'Plan care around comfort, function and what can be preserved.',
    summary:
      'Explore restorative dentistry for damaged, worn or missing teeth at META DENTAL in Panaiyur, Chennai.',
    overview:
      'Restorative dentistry focuses on repairing or replacing teeth to support oral function. Depending on assessment, a plan may involve a crown, bridge, denture, implant restoration or coordinated treatment.',
    suitability:
      'A damaged tooth, failing restoration, difficulty chewing or missing teeth can prompt a restorative consultation. The condition of the teeth, gums and bite shapes the available options.',
    process:
      'The dentist examines what can be preserved, discusses suitable alternatives and explains the sequence, limitations and maintenance needs of the proposed restoration.',
    risks:
      'Some restorative procedures require irreversible tooth preparation. Restorations can wear, chip or need replacement, and outcomes depend on oral health and ongoing care.',
    aftercare:
      'Clean restorations as instructed, attend planned reviews and contact the clinic if a restoration feels loose, damaged or different when you bite.',
    doctor: 'dr-imran',
    related: ['crowns-bridges', 'dental-implants', 'dentures'],
    faqs: [
      {
        q: 'Which restorative treatment is right for me?',
        a: 'That depends on what needs to be repaired or replaced, the supporting tissues and your priorities. Your dentist can compare appropriate options after assessment.',
      },
      {
        q: 'Can restorative treatment be completed in stages?',
        a: 'Some plans can be staged. The sequence depends on clinical priorities, healing needs and how the treatments relate to one another.',
      },
    ],
    clinicalReview: { status: 'pending', reviewer: null, reviewedAt: null },
  },
  {
    slug: 'full-mouth-rehabilitation',
    name: 'Full-mouth rehabilitation',
    category: 'Restore & replace',
    headline: 'A coordinated plan for complex restorative needs.',
    summary:
      'Discuss full-mouth rehabilitation or reconstruction with Dr. Imran at META DENTAL on ECR, Chennai.',
    overview:
      'Full-mouth rehabilitation, sometimes described as full-mouth reconstruction, coordinates care across several teeth when function and restorations need to be considered together. It is an individual treatment plan rather than a single procedure.',
    suitability:
      'People with multiple damaged, worn or missing teeth may benefit from a comprehensive assessment. The dentist considers oral health, existing restorations, supporting tissues, bite and treatment priorities.',
    process:
      'Assessment and records inform a phased plan. Your dentist explains which needs are urgent, how restorative options fit together, expected maintenance and which parts of the plan are optional.',
    risks:
      'Complex treatment can involve several procedures, time commitments and long-term maintenance. Results cannot be guaranteed and the plan may change as clinical findings or healing are reviewed.',
    aftercare:
      'Follow the care plan for each restoration and keep scheduled maintenance visits. Report changes in comfort, function or bite to the clinic.',
    doctor: 'dr-imran',
    related: ['restorative-dentistry', 'dental-implants', 'crowns-bridges'],
    faqs: [
      {
        q: 'Is full-mouth rehabilitation one procedure?',
        a: 'No. It is a coordinated plan that may include different treatments over several stages, depending on your assessment and priorities.',
      },
      {
        q: 'Will every tooth need treatment?',
        a: 'Not necessarily. The aim is to assess the mouth as a whole while preserving healthy teeth and limiting treatment to what is clinically appropriate.',
      },
    ],
    clinicalReview: { status: 'pending', reviewer: null, reviewedAt: null },
  },
  {
    slug: 'geriatric-dentistry',
    name: 'Dental care for older adults',
    category: 'Prevent & protect',
    headline: 'Oral care shaped around changing needs.',
    summary: 'Arrange geriatric dental care for older adults at META DENTAL in Panaiyur, Chennai.',
    overview:
      'Dental needs can change with age, health conditions, medicines, dexterity and existing restorations or dentures. A dental assessment helps identify priorities and plan manageable ongoing care.',
    suitability:
      'Older adults can arrange care for routine reviews, gum or tooth concerns, denture comfort, existing restorations or questions about maintaining oral hygiene.',
    process:
      'Bring relevant medical and medication information. The dentist assesses oral health, listens to practical concerns and explains preventive, restorative or replacement options when appropriate.',
    risks:
      'Medical history and medicines can affect dental planning. Treatment recommendations require an individual assessment and may need coordination with another healthcare professional.',
    aftercare:
      'Follow personalised cleaning and denture-care advice and attend reviews at the recommended interval. Ask for practical adaptations if daily oral care is difficult.',
    doctor: 'clinic',
    related: ['general-dentistry', 'dentures', 'dental-cleaning'],
    faqs: [
      {
        q: 'Should I bring a medication list?',
        a: 'Yes. Current medicines and relevant health information help the dentist plan care safely and identify questions that may need discussion with your doctor.',
      },
      {
        q: 'Can a family member or carer attend?',
        a: 'Ask the clinic when booking. A patient may choose to involve a trusted person while decisions and consent remain centred on the patient.',
      },
    ],
    clinicalReview: { status: 'pending', reviewer: null, reviewedAt: null },
  },
];
export const categories = [
  'Restore & replace',
  'Align & balance',
  'Smile & confidence',
  'Relieve & repair',
  'Prevent & protect',
];

export const isServiceApproved = (service: Service) =>
  service.clinicalReview.status === 'approved' &&
  Boolean(service.clinicalReview.reviewer?.trim()) &&
  Boolean(
    service.clinicalReview.reviewedAt &&
    /^\d{4}-\d{2}-\d{2}$/.test(service.clinicalReview.reviewedAt),
  );

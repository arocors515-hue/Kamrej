import {
  CustomerReview,
  TransparencyFeedback,
  TrainingProgram,
  MembershipPlan,
  GalleryItem,
} from '../types.ts';

export const GYM_CONTACT = {
  name: 'Kamaraj Gym',
  tagline: 'BUILT BY DISCIPLINE. POWERED BY STRENGTH.',
  phoneDisplay: '+91 99863 82167',
  phoneRaw: '9986382167',
  internationalPhone: '+919986382167',
  address: '1, Rukmani Colony Rd, Halasuru, Rukmani Colony, Sivanchetti Gardens, Bengaluru, Karnataka 560042',
  neighborhood: 'Halasuru, Bengaluru',
  googleMapsQuery: '1, Rukmani Colony Rd, Halasuru, Bengaluru, Karnataka 560042',
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=1,+Rukmani+Colony+Rd,+Halasuru,+Rukmani+Colony,+Sivanchetti+Gardens,+Bengaluru,+Karnataka+560042&output=embed',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=1,+Rukmani+Colony+Rd,+Halasuru,+Rukmani+Colony,+Sivanchetti+Gardens,+Bengaluru,+Karnataka+560042',
};

export function getWhatsAppEnquiryUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/919986382167?text=${encoded}`;
}

// Positive reviews preserving exact customer feedback supplied in prompt
export const POSITIVE_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Gym Member',
    source: 'Customer-submitted review',
    dateTag: 'Verified Member',
    summary: 'Friendly and Motivating Trainers',
    quote:
      'The trainers here are genuinely approachable, encouraging, and always ready to push you through tough sets without any attitude.',
    highlightCategory: 'trainers',
  },
  {
    id: 'rev-2',
    author: 'Bodybuilding Enthusiast',
    source: 'Customer-submitted review',
    dateTag: 'Iron Athlete',
    summary: 'Authentic Old-School Gym Atmosphere',
    quote:
      'If you love real iron, heavy dumbbells, and serious lifting culture without unnecessary corporate fluff, this is the classic gym you are looking for.',
    highlightCategory: 'atmosphere',
  },
  {
    id: 'rev-3',
    author: 'Strength Member',
    source: 'Customer-submitted review',
    dateTag: 'Fitness Journey',
    summary: 'Diet Guidance Provided Without Additional Charges',
    quote:
      'Trainers reportedly share diet suggestions and nutritional guidance directly alongside workout routines without charging separate high counseling fees.',
    highlightCategory: 'diet',
  },
  {
    id: 'rev-4',
    author: 'Local Resident',
    source: 'Customer-submitted review',
    dateTag: 'Community Review',
    summary: 'Competitive Membership Fees',
    quote:
      'According to my experience, the monthly and long-term membership charges are very competitive and affordable for what you get in the Halasuru area.',
    highlightCategory: 'pricing',
  },
  {
    id: 'rev-5',
    author: 'Dedicated Lifter',
    source: 'Customer-submitted review',
    dateTag: 'Active Member',
    summary: 'Positive Training Experiences & Visible Progress',
    quote:
      'Consistent training here helped me gain strength and build noticeable physical progress. The environment keeps you disciplined every single day.',
    highlightCategory: 'progress',
  },
  {
    id: 'rev-6',
    author: 'Female Gym Trainee',
    source: 'Customer-submitted review',
    dateTag: 'Member Experience',
    summary: 'Positive Feedback About Training Environment for Women',
    quote:
      'Experienced a supportive, welcoming, and encouraging training atmosphere while working out, with coaches respectful of individual goals.',
    highlightCategory: 'women-environment',
  },
];

// Transparent Things to Consider section preserving supplied feedback
export const THINGS_TO_CONSIDER: TransparencyFeedback[] = [
  {
    id: 'consider-1',
    topic: "Reviewer Feedback Regarding Women's Safety",
    summary: "One customer raised concerns regarding women's safety.",
    reviewDetail:
      "A customer review noted reservations regarding comfort and safety for female trainees during certain hours. We encourage prospective members to visit during their planned workout time to evaluate the space firsthand.",
    contextNote:
      "Prospective women members are welcome to visit in person during morning or evening slots to meet the trainers, inspect the setup, and confirm preferred training times.",
  },
  {
    id: 'consider-2',
    topic: 'Reviewer Feedback on Floor Space & Perceived Value',
    summary: 'Another reviewer mentioned limited space and concerns about membership value.',
    reviewDetail:
      'During peak workout hours, some members noted that floor space can feel compact when multiple people train simultaneously, leading one reviewer to question value relative to larger commercial chain gyms.',
    contextNote:
      'Kamaraj Gym operates as a traditional, compact neighborhood iron gym. Visiting during off-peak hours or scheduling a walkthrough is recommended to see if the layout suits your workout style.',
  },
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'weight-training',
    title: 'Weight Training',
    subtitle: 'Classic Free Weights & Resistance',
    description:
      'Build dense muscle, improve tendon resilience, and master traditional resistance exercises with dedicated barbells, plates, and dumbbell stations.',
    focusAreas: ['Barbell complexes', 'Dumbbell progressions', 'Functional hypertrophy', 'Joint stability'],
    isCoreFacility: true,
    enquiryPrompt: 'Enquire for current free weight rack configurations',
  },
  {
    id: 'bodybuilding',
    title: 'Bodybuilding',
    subtitle: 'Hypertrophy & Aesthetic Conditioning',
    description:
      'Old-school muscle building philosophy focused on progressive overload, isolation movements, mind-muscle connection, and targeted muscle splits.',
    focusAreas: ['Push-Pull-Legs splits', 'Targeted muscle isolation', 'Symmetry & definition', 'Volume periodization'],
    isCoreFacility: true,
    enquiryPrompt: 'Enquire for customized bodybuilding split routines',
  },
  {
    id: 'strength-training',
    title: 'Strength Training',
    subtitle: 'Compound Power & Raw Force',
    description:
      'Develop baseline raw power through fundamental lifts: squat, bench press, deadlift, and overhead work in a dedicated lifting atmosphere.',
    focusAreas: ['Heavy compound lifting', 'Core brace mechanics', 'Force production', 'Progression tracking'],
    isCoreFacility: true,
    enquiryPrompt: 'Enquire for powerlifting platform availability',
  },
  {
    id: 'cardio-workouts',
    title: 'Cardio Workouts',
    subtitle: 'Aerobic & Stamina Conditioning',
    description:
      'Support cardiovascular health, warmup protocols, and endurance conditioning alongside your regular weight lifting sessions.',
    focusAreas: ['Warm-up protocols', 'Interval conditioning', 'Endurance routines', 'Active recovery'],
    isCoreFacility: false, // Unverified service - presented as enquiry option
    enquiryPrompt: 'Enquire for available cardio machine inventory and warmup equipment',
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    subtitle: 'One-on-One Form & Goal Coaching',
    description:
      'Get dedicated trainer attention for technique correction, form checks, intensity pacing, and structured accountability for specific targets.',
    focusAreas: ['Form auditing', 'Injury prevention', 'Intensity spotting', 'Goal tracking'],
    isCoreFacility: false, // Unverified service - presented as enquiry option
    enquiryPrompt: 'Enquire for trainer availability, 1-on-1 slots, and coach matching',
  },
  {
    id: 'fitness-diet-guidance',
    title: 'Fitness & Diet Guidance',
    subtitle: 'Everyday Nutritional Advice',
    description:
      'Guidance on macronutrient splits, protein intake, and calorie balance to fuel your heavy sessions, reportedly offered to support member gains.',
    focusAreas: ['Protein intake planning', 'Pre & post workout fuel', 'Bulking / cutting guidance', 'Everyday habits'],
    isCoreFacility: true,
    enquiryPrompt: 'Enquire for diet consultation timings with senior trainers',
  },
];

export const INITIAL_MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly Tier',
    durationLabel: '1 Month Access',
    defaultPrice: 1200,
    priceNote: 'Flexible month-to-month commitment',
    description: 'Ideal for those testing their routine or visiting Bengaluru for short stays.',
    features: [
      'Full access to gym floor and weight racks',
      'Old-school bodybuilding training environment',
      'Initial form walkthrough with available trainers',
      'Reported diet and workout guidance assistance',
      'No long-term lock-in contract',
    ],
  },
  {
    id: 'quarterly',
    name: 'Quarterly Tier',
    durationLabel: '3 Months Commitment',
    defaultPrice: 3200,
    priceNote: 'Most popular for building habit & discipline',
    description: 'The golden 90-day phase where consistent progressive overload yields visible changes.',
    features: [
      'Full gym access for 90 continuous days',
      'Structured split program recommendations',
      'Trainer motivation and regular form tips',
      'Reported basic dietary guidance support',
      'Lower effective monthly rate',
    ],
    isPopular: true,
  },
  {
    id: 'yearly',
    name: 'Yearly Tier',
    durationLabel: '12 Months Dedication',
    defaultPrice: 10500,
    priceNote: 'Best long-term training value',
    description: 'For serious lifters committed to an uncompromising year of strength and physique building.',
    features: [
      '365 days of full weight training access',
      'Priority guidance from experienced trainers',
      'Long-term periodization and routine adjustments',
      'Supportive community brotherhood & sisterhood',
      'Highest overall membership savings',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Kamaraj Gym Member & Trainee',
    category: 'Atmosphere',
    imageUrl: '/assets/aistudio/Screenshot_2024-11-25_080748_1955f82c.png',
    caption: 'Dedicated member and lifter training with discipline at Kamaraj Gym.',
  },
  {
    id: 'gal-2',
    title: 'Hardcore Deadlift Station',
    category: 'Training',
    imageUrl: '/src/assets/images/hero_bodybuilding_gym_1793698076733.jpg',
    caption: 'Chalk, iron, and heavy barbells: the foundation of Kamaraj Gym discipline.',
  },
  {
    id: 'gal-3',
    title: 'Olympic Barbell & Cast Iron',
    category: 'Equipment',
    imageUrl: '/src/assets/images/training_heavy_iron_1793698076108.jpg',
    caption: 'Knurled steel bars and heavy plates built for uncompromising progressive overload.',
  },
  {
    id: 'gal-4',
    title: 'Heavy Dumbbell Rack',
    category: 'Equipment',
    imageUrl: '/src/assets/images/gym_equipment_iron_1793698076863.jpg',
    caption: 'Extensive dumbbell pairs ready for pressing, rows, curls, and lateral raises.',
  },
  {
    id: 'gal-5',
    title: 'Coaching & Form Spotting',
    category: 'Training',
    imageUrl: '/src/assets/images/gym_trainer_guidance_1793698077176.jpg',
    caption: 'Motivating coaches offering watchful eyes on squats and barbell mechanics.',
  },
  {
    id: 'gal-6',
    title: 'Lifter Focus & Chalk Bucket',
    category: 'Atmosphere',
    imageUrl: '/src/assets/images/gallery_bodybuilder_focus_1793698077590.jpg',
    caption: 'True iron culture where sweat, focus, and mutual respect come first.',
  },
];

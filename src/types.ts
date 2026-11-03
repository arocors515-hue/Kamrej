export interface CustomerReview {
  id: string;
  author: string;
  source: string;
  dateTag: string;
  summary: string;
  quote: string;
  highlightCategory: 'trainers' | 'atmosphere' | 'diet' | 'pricing' | 'progress' | 'women-environment';
}

export interface TransparencyFeedback {
  id: string;
  topic: string;
  summary: string;
  reviewDetail: string;
  contextNote: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  isCoreFacility: boolean; // true = confirmed core facility; false = unverified / enquiry option
  enquiryPrompt: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  durationLabel: string;
  defaultPrice: number;
  priceNote: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Equipment' | 'Atmosphere' | 'Training';
  imageUrl: string;
  caption: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email?: string;
  goal: string;
  selectedPlan: string;
  preferredTime: string;
  message?: string;
}

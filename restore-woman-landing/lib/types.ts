// Types for Re:store Woman Landing Page

export interface ProgramModule {
  id: string;
  week: number;
  title: string;
  description: string;
  lessons: Lesson[];
  guides: Guide[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: number; // minutes
  thumbnail: string;
  category?: string;
}

export interface Guide {
  id: string;
  title: string;
  frontImage: string;
  backImage: string;
  category?: string;
}

export interface WorkoutWeek {
  week: number;
  days: WorkoutDay[];
}

export interface WorkoutDay {
  day: string;
  workouts: Workout[];
  isRest?: boolean;
}

export interface Workout {
  id: string;
  title: string;
  duration: number;
  thumbnail: string;
}

export interface Tariff {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  oldPrice?: number;
  superOldPrice?: number;
  features: string[];
  accessDuration: string;
  highlighted?: boolean;
  limitedSpots?: number;
  diagnostic?: string;
  paymentLink: string;
  prepaymentLink?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string | string[];
}

export interface Result {
  id: string;
  beforeImage: string;
  afterImage: string;
  mobileImage?: string;
  achievements: string[];
}

export interface WantItem {
  id: string;
  image: string;
  text: string;
}

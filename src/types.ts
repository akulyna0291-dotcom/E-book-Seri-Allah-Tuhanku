/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Book {
  id: string;
  title: string;
  tag: string;
  description: string;
  points: string[];
  color: 'sage' | 'pink' | 'blue';
  gradient: string;
  iconName: 'Sparkles' | 'Eye' | 'Volume2' | 'Heart' | 'Moon';
  themeColor: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: 'Heart' | 'Smile' | 'Compass' | 'Users';
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  iconName: 'MessageSquareText' | 'Sparkles' | 'BookOpen' | 'FileDown' | 'RotateCcw' | 'Baby';
}

export interface Bonus {
  id: string;
  title: string;
  description: string;
  badge: string;
  items: string[];
  iconName: 'Palette' | 'Map' | 'CheckSquare';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  city: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

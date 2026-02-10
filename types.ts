import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Ministry {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface LeadershipProfile {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface EventInfo {
  day: string;
  time: string;
  title: string;
  location: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  items: string[];
  icon: string;
}

export interface Review {
  author: string;
  location: string;
  text: string;
  rating: number;
}

export enum ServiceType {
  HVAC = 'HVAC',
  PLUMBING = 'Plumbing',
  ELECTRICAL = 'Electrical'
}

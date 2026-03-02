export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  description: string;
  specs: string[];
}

export interface CurriculumModule {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export interface OperationalLogItem {
  id: string;
  code: string;
  location: string;
  status: 'SECURED' | 'ACTIVE' | 'ARCHIVED';
  timestamp: string;
}

export interface NewsItem {
  id: string;
  category: 'TRAINING' | 'INTEL' | 'CORPORATE';
  title: string;
  date: string;
  image: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}
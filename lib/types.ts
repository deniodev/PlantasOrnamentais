export interface Plant {
  id: string;
  name: string;
  origin: string;
  size: string;
  toxicity: string;
  family: string;
  scientificName: string;
  slug: string;
  imageUrl: string;
  categories: string[];
  light?: string;
  soilType?: string;
  soilPh?: string;
  description: string;
  lightDesc: string;
  soilDesc: string;
  waterDesc: string;
  temperatureDesc: string;
  fertilizerDesc: string;
  propagatingDesc: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorImage?: string;
  tags: string[];
  content: string;
}

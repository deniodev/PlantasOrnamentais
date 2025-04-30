export interface Plant {
  id: string
  name: string
  scientificName: string
  slug: string
  imageUrl: string
  description: string
  categories: string[]
  care?: {
    light?: string
    water?: string
    temperature?: string
    humidity?: string
    soil?: string
  }
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  date: string
  readTime: string
  image: string
  author: string
  authorImage?: string
  tags: string[]
  content: string
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  city: string;
  publishedAt: string;
  category?: string;
  author?: string;
  readingTime?: number;
  isFeatured?: boolean;
}

export interface City {
  code: string;
  name: string;
  timezone: string;
}

export interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  time: string;
}

export interface NewsResponse {
  articles: NewsArticle[];
  total: number;
  page: number;
  pageSize: number;
}

import { NewsArticle, City, NewsResponse } from "./types";
import { mockArticles, mockCities } from "./mockData";

// ============================================================================
// CONFIGURATION
// ============================================================================
// Set to true to use real API, false to use mock data
const USE_REAL_API = false;

// Base URL for the API (update this when backend is ready)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

// ============================================================================
// MOCK DATA FUNCTIONS (used when USE_REAL_API is false)
// ============================================================================

async function getMockArticles(): Promise<NewsArticle[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockArticles;
}

async function getMockArticleById(id: string): Promise<NewsArticle | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockArticles.find((article) => article.id === id) || null;
}

async function getMockArticlesByCity(cityCode: string): Promise<NewsArticle[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockArticles.filter((article) => article.city === cityCode);
}

async function getMockFeaturedArticles(): Promise<NewsArticle[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockArticles.filter((article) => article.isFeatured);
}

async function getMockCities(): Promise<City[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockCities;
}

// ============================================================================
// REAL API FUNCTIONS (used when USE_REAL_API is true)
// ============================================================================

async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      // Add authentication headers here if needed
      // "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// ============================================================================
// PUBLIC API FUNCTIONS
// ============================================================================

/**
 * Fetches all news articles
 * @returns Promise<NewsArticle[]> - Array of news articles
 */
export async function fetchNewsArticles(): Promise<NewsArticle[]> {
  if (!USE_REAL_API) {
    return getMockArticles();
  }

  // Real API implementation
  const response = await fetchFromAPI<NewsResponse>("/articles");
  return response.articles;
}

/**
 * Fetches a single news article by ID
 * @param id - Article ID
 * @returns Promise<NewsArticle | null> - Article or null if not found
 */
export async function fetchNewsArticleById(
  id: string
): Promise<NewsArticle | null> {
  if (!USE_REAL_API) {
    return getMockArticleById(id);
  }

  // Real API implementation
  try {
    return await fetchFromAPI<NewsArticle>(`/articles/${id}`);
  } catch {
    return null;
  }
}

/**
 * Fetches news articles filtered by city
 * @param cityCode - City code (e.g., "SF", "NY")
 * @returns Promise<NewsArticle[]> - Array of articles for the city
 */
export async function fetchNewsArticlesByCity(
  cityCode: string
): Promise<NewsArticle[]> {
  if (!USE_REAL_API) {
    return getMockArticlesByCity(cityCode);
  }

  // Real API implementation
  const response = await fetchFromAPI<NewsResponse>(
    `/articles?city=${cityCode}`
  );
  return response.articles;
}

/**
 * Fetches featured news articles
 * @returns Promise<NewsArticle[]> - Array of featured articles
 */
export async function fetchFeaturedArticles(): Promise<NewsArticle[]> {
  if (!USE_REAL_API) {
    return getMockFeaturedArticles();
  }

  // Real API implementation
  const response = await fetchFromAPI<NewsResponse>("/articles?featured=true");
  return response.articles;
}

/**
 * Fetches the list of available cities
 * @returns Promise<City[]> - Array of cities
 */
export async function fetchCities(): Promise<City[]> {
  if (!USE_REAL_API) {
    return getMockCities();
  }

  // Real API implementation
  return fetchFromAPI<City[]>("/cities");
}

/**
 * Fetches paginated news articles
 * @param page - Page number (1-indexed)
 * @param pageSize - Number of articles per page
 * @returns Promise<NewsResponse> - Paginated response
 */
export async function fetchPaginatedArticles(
  page: number = 1,
  pageSize: number = 10
): Promise<NewsResponse> {
  if (!USE_REAL_API) {
    const allArticles = await getMockArticles();
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return {
      articles: allArticles.slice(start, end),
      total: allArticles.length,
      page,
      pageSize,
    };
  }

  // Real API implementation
  return fetchFromAPI<NewsResponse>(
    `/articles?page=${page}&pageSize=${pageSize}`
  );
}

/**
 * Fetches articles for the homepage layout
 * Returns articles organized for the two-column layout
 * @returns Promise<{ leftColumn: NewsArticle[], rightColumn: NewsArticle[] }>
 */
export async function fetchHomepageArticles(): Promise<{
  leftColumn: NewsArticle[];
  rightColumn: NewsArticle[];
}> {
  const articles = await fetchNewsArticles();

  // Split articles into left and right columns
  // Left column: indices 0-3 (featured first, then 3 regular)
  // Right column: indices 4-7 (2 regular, featured, 1 regular)
  return {
    leftColumn: articles.slice(0, 4),
    rightColumn: articles.slice(4, 8),
  };
}

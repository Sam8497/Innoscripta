// src/services/api.js
import axios from 'axios';
import newsImage from '../images/newsImage.jpg';

// Helper function to make API requests
const makeApiRequest = async (url, params) => {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("API request failed:", error);
    return null;
  }
};

// Helper function to normalize article data
const normalizeArticles = (articles, source) => {
  return articles.map((article) => ({
    title: article.title || article.webTitle || article.headline.main,
    description: article.description || article.fields?.trailText || article.lead_paragraph,
    url: article.url || article.webUrl || article.web_url,
    source: article?.source?.name || article?.fields?.publication || article?.source,
    publishedAt: article.publishedAt || article.webPublicationDate || article.pub_date,
    author: article?.author || (article?.fields?.byline || 'Unknown Author') || article?.byline?.original || 'No Author',
    category: article?.category || article?.sectionName || 'General',
    imgSrc: article?.urlToImage || article.image || newsImage,
  }));
};

// Fetch NewsAPI articles
export const fetchNewsAPIArticles = async (query, filters) => {
  const searchUrl = `https://newsapi.org/v2/everything?q=${query}&from=${filters.date}`;
  const topHeadUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${filters.category}`;
  const categoryUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${filters.category}`

  const url = (query ) ? searchUrl : (filters.category) ? categoryUrl : topHeadUrl;
  const params = {
    apiKey: "ed60638fa7674d3d9b592036d42ae4e5",
  };
  
  const data = await makeApiRequest(url, params);
  return data ? normalizeArticles(data.articles, 'NewsAPI') : [];
};

// Fetch The Guardian articles
export const fetchGuardianArticles = async (query, filters) => {
  const searchUrl = `https://content.guardianapis.com/search`;
  const searchWithDateUrl = `https://content.guardianapis.com?from-date=${filters.date}`;
  const url = (query || filters.category) ? searchUrl : (filters.date) ? searchWithDateUrl : searchUrl;

  const params = {
    q: query || filters.category,
    'api-key': "e8eeed46-5e88-4fd7-8d68-a80e00ced9db",
    'show-fields': 'all',
  };

  const data = await makeApiRequest(url, params);
  return data ? normalizeArticles(data.response.results, 'The Guardian') : [];
};

// Fetch NewYourk News articles
export const fetchNYTimesArticles = async (query, filters) => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
  const params = {
    fq: query,
    from: filters.date,
    'api-key': "HuvTeGiLRF6SsFET2iSWA3gR6FZ5OY6O",
    category: filters.category,
  };

  const data = await makeApiRequest(url, params);
  return data ? normalizeArticles(data.response.docs, 'BBC News') : [];
};
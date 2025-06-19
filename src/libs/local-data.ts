import { University } from '@/types';
import fs from 'fs';
import path from 'path';

export interface UniversityListItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  modified: string;
  link: string;
  featured_media: number;
  featured_image: string | null;
}

export interface UniversityMeta {
  total: number;
  lastUpdated: string;
  apiBaseUrl: string;
}

export interface UniversityListResponse {
  universities: UniversityListItem[];
  meta: {
    total: number;
    totalPages: number;
    page: number;
    perPage: number;
    lastUpdated: string;
  };
}

export class LocalUniversityData {
  private static dataDir = path.join(process.cwd(), 'data');
  private static universitiesFile = path.join(this.dataDir, 'universities.json');
  private static universitiesListFile = path.join(this.dataDir, 'universities-list.json');
  private static metaFile = path.join(this.dataDir, 'meta.json');

  private static createExcerpt(content: string, maxLength: number = 200): string {
    const text = content.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }

  static getUniversities(page: number = 1, perPage: number = 20, search?: string): UniversityListResponse {
    try {
      if (!fs.existsSync(this.universitiesListFile)) {
        throw new Error('Universities list file not found. Please run: npm run crawl');
      }

      const listData = JSON.parse(fs.readFileSync(this.universitiesListFile, 'utf8'));
      const meta = JSON.parse(fs.readFileSync(this.metaFile, 'utf8'));

      let universities = listData.universities;

      if (search) {
        const searchTerm = search.toLowerCase();
        universities = universities.filter((uni: UniversityListItem) =>
          uni.title.toLowerCase().includes(searchTerm)
        );
      }

      const total = universities.length;
      const totalPages = Math.ceil(total / perPage);
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;
      const paginatedUniversities = universities.slice(startIndex, endIndex);

      return {
        universities: paginatedUniversities,
        meta: {
          total,
          totalPages,
          page,
          perPage,
          lastUpdated: meta.lastUpdated,
        },
      };
    } catch (error) {
      console.error('Error reading universities data:', error);
      throw new Error('Failed to load universities data');
    }
  }

  static getUniversityBySlug(slug: string): University | null {
    try {
      if (!fs.existsSync(this.universitiesFile)) {
        throw new Error('Universities file not found. Please run: npm run crawl');
      }

      const universities: University[] = JSON.parse(fs.readFileSync(this.universitiesFile, 'utf8'));
      return universities.find(uni => uni.slug === slug) || null;
    } catch (error) {
      console.error('Error reading university data:', error);
      return null;
    }
  }

  static getAllSlugs(): string[] {
    try {
      if (!fs.existsSync(this.universitiesListFile)) {
        return [];
      }

      const listData = JSON.parse(fs.readFileSync(this.universitiesListFile, 'utf8'));
      return listData.universities.map((uni: UniversityListItem) => uni.slug);
    } catch (error) {
      console.error('Error reading university slugs:', error);
      return [];
    }
  }

  static getAllUniversities(): UniversityListItem[] {
    try {
      if (!fs.existsSync(this.universitiesListFile)) {
        console.error('Universities list file not found. Please run: npm run crawl');
        return [];
      }

      const listData = JSON.parse(fs.readFileSync(this.universitiesListFile, 'utf8'));
      return listData.universities;
    } catch (error) {
      console.error('Error reading universities list data:', error);
      return [];
    }
  }

  static transformUniversityToListItem(university: University): UniversityListItem {
    return {
      id: university.id,
      slug: university.slug,
      title: university.title.rendered,
      excerpt: this.createExcerpt(university.content.rendered),
      date: university.date,
      modified: university.modified,
      link: university.link,
      featured_media: university.featured_media,
      featured_image: university._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
    };
  }
} 
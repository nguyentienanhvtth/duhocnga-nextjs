export interface University {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  template: string;
  tags: number[];
  class_list: string[];
  blocksy_meta: string;
  acf: any[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
  _links: {
    self: Array<{
      href: string;
      targetHints?: {
        allow: string[];
      };
    }>;
    collection: Array<{
      href: string;
    }>;
    about: Array<{
      href: string;
    }>;
    "version-history": Array<{
      count: number;
      href: string;
    }>;
    "predecessor-version": Array<{
      id: number;
      href: string;
    }>;
    "wp:featuredmedia": Array<{
      embeddable: boolean;
      href: string;
    }>;
    "wp:attachment": Array<{
      href: string;
    }>;
    "wp:term": Array<{
      taxonomy: string;
      embeddable: boolean;
      href: string;
    }>;
    curies: Array<{
      name: string;
      href: string;
      templated: boolean;
    }>;
  };
}

export interface UniversityMeta {
  total: number;
  totalPages: number;
  page: number;
  perPage: number;
} 
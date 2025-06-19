'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  link: string;
  slug: string;
}

export default function NewsSection() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://duhocnga.org/wp-json/wp/v2/posts?per_page=6');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    });
  };

  const generateSlug = (link: string) => {
    const url = new URL(link);
    return url.pathname;
  };

  if (loading) {
    return (
      <div className="lg:col-span-4">
        <div className="grid grid-cols-1 gap-y-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-start animate-pulse">
              <div className="text-center mr-4 min-w-10">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="lg:col-span-4">
        <div className="text-red-500 text-sm">
          Không thể tải tin tức: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-4">
      <div className="grid grid-cols-1 gap-y-6">
        {posts.map((post, index) => (
          <div key={post.id} className="flex items-start">
            <div className="text-center mr-4 min-w-10">
              <span className="block text-xl font-bold text-gray-700">{index + 1}</span>
            </div>
            <div>
              <h3 className="text-base font-medium hover:text-red-600">
                <Link href={generateSlug(post.link)}>
                  {post.title.rendered}
                </Link>
              </h3>
              <p className="text-gray-500 text-sm mt-1">{formatDate(post.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
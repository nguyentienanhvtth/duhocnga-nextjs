import { LocalUniversityData } from '@/libs/local-data';
import { notFound } from 'next/navigation';
import './styles.css';

interface UniversityDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const slugs = LocalUniversityData.getAllSlugs();
    return slugs.map((slug) => ({
      slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function UniversityDetailPage({ params }: UniversityDetailPageProps) {
  const resolvedParams = await params;
  const university = LocalUniversityData.getUniversityBySlug(resolvedParams.slug);

  if (!university) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 mt-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="university-content p-6">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: university.content.rendered 
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
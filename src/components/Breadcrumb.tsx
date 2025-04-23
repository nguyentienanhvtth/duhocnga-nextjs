import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb bg-gray-100 py-2">
      <div className="container mx-auto px-4">
        <ol className="flex flex-wrap items-center text-sm text-gray-600">
          <li className="flex items-center">
            <Link href="/" className="text-[#1e3a8a] hover:underline">
              Trang chủ
            </Link>
            {items.length > 0 && (
              <svg className="h-3 w-3 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </li>

          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {item.href ? (
                <>
                  <Link href={item.href} className="text-[#1e3a8a] hover:underline">
                    {item.label}
                  </Link>
                  {index < items.length - 1 && (
                    <svg className="h-3 w-3 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </>
              ) : (
                <span className="text-gray-800 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

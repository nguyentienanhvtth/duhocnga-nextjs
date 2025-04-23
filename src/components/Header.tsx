'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="site-header bg-white text-[#1e3a8a] border-b border-gray-200">
      <div className="ct-container mx-auto px-4">
        {/* Top header with logo and main navigation */}
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center py-2">
            <Image
              src="/images/logo.webp"
              alt="Du học Nga"
              width={180}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          {/* Main navigation */}
          <nav className="hidden lg:flex h-full">
            <div className="flex h-full">
              <NavLink href="/" label="TRANG CHỦ" />
              <NavDropdown
                label="GIỚI THIỆU"
                href="/gioi-thieu"
                active={activeDropdown === 'gioi-thieu'}
                onMouseEnter={() => setActiveDropdown('gioi-thieu')}
                onMouseLeave={() => setActiveDropdown(null)}
                items={[
                  { href: "/gioi-thieu/vi-sao-nen-lua-chon-nga-de-du-hoc", label: "Vì sao nên lựa chọn Nga để du học?" },
                  { href: "/gioi-thieu/thong-tin-can-biet-ve-hoc-bong-du-hoc-nga-2025", label: "Học bổng du học Nga 2025" },
                  { href: "/gioi-thieu/giao-duc-dai-hoc-va-sau-dai-hoc-tai-nga", label: "Giáo dục đại học và sau đại học" },
                  { href: "/gioi-thieu/danh-sach-chuong-trinh-hoc-bong-nga", label: "Danh sách chương trình học bổng Nga" },
                  { href: "/gioi-thieu/danh-sach-thanh-pho-lon-o-nga", label: "Danh sách thành phố lớn ở Nga" },
                ]}
              />
              <NavDropdown
                label="TIN TỨC"
                href="/tin-tuc"
                active={activeDropdown === 'tin-tuc'}
                onMouseEnter={() => setActiveDropdown('tin-tuc')}
                onMouseLeave={() => setActiveDropdown(null)}
                items={[
                  { href: "/tin-tuc/hoat-dong-sinh-vien-tai-nga", label: "Hoạt động sinh viên tại Nga" },
                  { href: "/tin-tuc/hoat-dong-tai-viet-nam", label: "Hoạt động tại Việt Nam" },
                  { href: "/tin-tuc/thong-tin-giao-duc-nga", label: "Thông tin giáo dục Nga" },
                  { href: "/tin-tuc/quy-dinh-va-chinh-sach-moi", label: "Quy định và chính sách mới" },
                  { href: "/tin-tuc/hoc-bong-va-olympic", label: "Học bổng và Olympic" },
                ]}
              />
              <NavDropdown
                label="TRƯỜNG HỌC"
                href="/danh-sach-cac-truong-dai-hoc-nga"
                active={activeDropdown === 'truong-hoc'}
                onMouseEnter={() => setActiveDropdown('truong-hoc')}
                onMouseLeave={() => setActiveDropdown(null)}
                items={[
                  { href: "/danh-sach-cac-truong-dai-hoc-nga/dai-hoc-nga", label: "Danh mục toàn bộ các trường" },
                ]}
              />
              <NavDropdown
                label="NGÀNH HỌC"
                href="/danh-sach-nganh"
                active={activeDropdown === 'nganh-hoc'}
                onMouseEnter={() => setActiveDropdown('nganh-hoc')}
                onMouseLeave={() => setActiveDropdown(null)}
                items={[
                  { href: "/danh-sach-nganh/danh-sach-cac-nganh-dai-hoc-tai-nga", label: "Danh sách các ngành đại học tại Nga" },
                  { href: "/danh-sach-nganh/danh-sach-cac-nganh-cao-hoc-tai-nga", label: "Danh sách các ngành cao học tại Nga" },
                  { href: "/danh-sach-nganh/danh-sach-cac-nganh-nghien-cuu-sinh-tien-si-tai-nga", label: "Danh sách các ngành nghiên cứu sinh tiến sĩ tại Nga" },
                ]}
              />
              <NavDropdown
                label="HƯỚNG DẪN"
                href="/huong-dan"
                active={activeDropdown === 'huong-dan'}
                onMouseEnter={() => setActiveDropdown('huong-dan')}
                onMouseLeave={() => setActiveDropdown(null)}
                items={[
                  { href: "/huong-dan/huong-dan-dang-ky-hoc-bong-du-hoc-nga-2025", label: "Hướng dẫn đăng ký Học bổng Nga 2025" },
                  { href: "/huong-dan/bang-xep-hang-dai-hoc-nga", label: "Bảng xếp hạng Đại học Nga" },
                  { href: "/hoc-tieng-nga", label: "Học tiếng Nga" },
                  { href: "/cuoc-song-du-hoc-sinh-tai-nga", label: "Cuộc sống Du học sinh tại Nga" },
                  { href: "/quy-dinh-phap-luat-trong-qua-trinh-hoc-tai-nga", label: "Quy định pháp luật trong quá trình học tại Nga" },
                ]}
              />
              <NavDropdown
                label="SINH VIÊN"
                href="/danh-muc-sinh-vien-tieu-bieu"
                active={activeDropdown === 'sinh-vien'}
                onMouseEnter={() => setActiveDropdown('sinh-vien')}
                onMouseLeave={() => setActiveDropdown(null)}
                items={[
                  { href: "/danh-muc-sinh-vien-tieu-bieu", label: "Danh mục sinh viên tiêu biểu" },
                ]}
              />
              <NavLink href="/lien-he" label="LIÊN HỆ" />
              <div className="flex items-center px-4">
                <button className="text-[#1e3a8a] focus:outline-none">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden py-2">
            <button className="text-[#1e3a8a] focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className="hidden lg:hidden bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-2">
            <MobileNavLink href="/" label="Trang chủ" />
            <MobileNavLink href="/gioi-thieu" label="Giới thiệu" />
            <MobileNavLink href="/tin-tuc" label="Tin tức" />
            <MobileNavLink href="/danh-sach-cac-truong-dai-hoc-nga" label="Trường học" />
            <MobileNavLink href="/danh-sach-nganh" label="Ngành học" />
            <MobileNavLink href="/huong-dan" label="Hướng dẫn" />
            <MobileNavLink href="/sinh-vien" label="Sinh viên" />
            <MobileNavLink href="/lien-he" label="Liên hệ" />
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="flex items-center px-4 h-[120px] text-sm font-medium hover:bg-[#1e3a8a] hover:text-white transition-colors">
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-[#1e3a8a] items-center hover:text-[#1e3a8a] hover:bg-gray-100 py-2 px-4 block">
      {label}
    </Link>
  );
}

function NavDropdown({
  label,
  href,
  items,
  active,
  onMouseEnter,
  onMouseLeave
}: {
  label: string;
  href: string;
  items: { href: string; label: string }[];
  active: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="relative group h-[120px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link 
        href={href}
        className={`flex items-center px-4 h-full text-sm font-medium ${active ? 'bg-[#1e3a8a] text-white' : 'hover:bg-[#1e3a8a] hover:text-white'} transition-colors`}
      >
        {label}
        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      <div className={`absolute left-0 w-64 bg-[#1e3a8a] shadow-lg z-10 ${active ? 'block' : 'hidden'}`}>
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`block px-4 py-2 text-sm text-white hover:bg-white hover:text-[#1e3a8a] ${index !== 0 ? 'border-t border-white border-dotted' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

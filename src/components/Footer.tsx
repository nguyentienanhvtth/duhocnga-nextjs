import Image from 'next/image';
import NewsSection from './NewsSection';

export default function Footer() {
  return (
    <footer className="bg-[#f6f6f6] pt-4">
      {/* Map Section */}
      <div className="container mx-auto h-64 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096979674972!2d105.84524351531496!3d21.02889998599829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9926e7bd67%3A0x5f168add94f749c!2zRHUgaOG7jWMgTmdh!5e0!3m2!1svi!2s!4v1659522115700!5m2!1svi!2s" 
          className="w-full h-full border-0"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Du học Nga location"
        ></iframe>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Logo and Info */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Image 
                src="/images/logo.webp" 
                alt="Du học Nga" 
                width={400} 
                height={132} 
                className="w-auto h-auto max-h-16"
              />
            </div>
            <p className="text-gray-700 text-sm mb-8">
              Du học Nga là đơn vị tiên phong cung cấp cơ hội tiếp cận nền giáo dục hàng đầu tại các trường đại học uy tín của Liên bang Nga. Với nền tảng giáo dục vững chắc, phương pháp giảng dạy tiên tiến và môi trường học thuật năng động, sinh viên Việt Nam sẽ dễ dàng hòa nhập và phát triển kỹ năng, mở ra cánh cửa của thành công và cơ hội không giới hạn.
            </p>

            {/* Contact Information */}
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <div className="mr-3 mt-1">
                  <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Địa chỉ:</h3>
                  <p className="text-gray-600 text-sm">Số 65 phố Quán Sứ, quận Hoàn Kiếm, Hà Nội</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Điện thoại:</h3>
                  <p className="text-gray-600 text-sm">+84 943 835-358 (06h00-22h00, giờ Hà Nội)</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/duhocnga.org/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/duhocnga_org/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@duhocnga_org" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@duhocnga_org" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Column - News Section */}
          <NewsSection />

          {/* Right Column - Facebook Iframe */}
          <div className="lg:col-span-4">
            <iframe 
              src="https://www.facebook.com/v3.2/plugins/page.php?app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfb141d7e46671dc90%26domain%3Dduhocnga.org%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fduhocnga.org%252Ffb02c0904fb692a2f%26relation%3Dparent.parent&container_width=397&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fduhocnga.org&locale=en_US&sdk=joey&show_facepile=true&small_header=false&tabs=timeline&width=500"
              width="100%" 
              height="500" 
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Du học Nga Facebook Page"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-center border-t border-gray-200 mt-12 py-6">
        <p className="text-center text-gray-500 text-sm">
          Copyright © 2025 - Tổ chức Du học Nga
        </p>
      </div>
    </footer>
  );
}

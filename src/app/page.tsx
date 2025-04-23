import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Du học Nga - Cánh cửa đến tương lai</h1>
              <p className="text-lg mb-6">Thông tin chính thống về du học Nga, học bổng du học Nga, các trường đại học tại Nga và hướng dẫn đăng ký học bổng du học Nga 2025</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/huong-dan/huong-dan-dang-ky-hoc-bong-du-hoc-nga-2025" className="bg-white text-red-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  Đăng ký học bổng
                </Link>
                <Link href="/gioi-thieu" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                  Tìm hiểu thêm
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/huong-dan-dang-ky-hoc-bong-nga-2025.webp"
                alt="Du học Nga"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tại sao chọn Du học Nga?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 text-4xl mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">Chất lượng giáo dục hàng đầu</h3>
              <p className="text-gray-600">Nga có hệ thống giáo dục chất lượng cao với nhiều trường đại học nằm trong top các bảng xếp hạng thế giới.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 text-4xl mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">Học phí hợp lý</h3>
              <p className="text-gray-600">Chi phí học tập và sinh hoạt tại Nga thấp hơn nhiều so với các nước phương Tây, đặc biệt với các chương trình học bổng.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 text-4xl mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">Cơ hội học bổng đa dạng</h3>
              <p className="text-gray-600">Chính phủ Nga cung cấp nhiều học bổng hấp dẫn cho sinh viên quốc tế, bao gồm học bổng toàn phần và bán phần.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hướng dẫn mới nhất</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/huong-dan-dang-ky-hoc-bong-nga-2025.webp"
                alt="Hướng dẫn đăng ký Học bổng du học Nga 2025"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="/huong-dan/huong-dan-dang-ky-hoc-bong-du-hoc-nga-2025" className="hover:text-red-600 transition-colors">
                    Hướng dẫn đăng ký Học bổng du học Nga 2025
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">Bạn đã sẵn sàng cho một hành trình học tập đầy thú vị tại Nga? Học bổng du học Nga 2025 đang mở ra cánh cửa cơ hội cho bạn.</p>
                <Link href="/huong-dan/huong-dan-dang-ky-hoc-bong-du-hoc-nga-2025" className="text-red-600 font-medium hover:underline">
                  Xem chi tiết
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
                <span className="text-gray-500">Hình ảnh</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="#" className="hover:text-red-600 transition-colors">
                    Bảng xếp hạng Đại học Nga
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">Tìm hiểu về các trường đại học hàng đầu tại Nga và vị trí của họ trong các bảng xếp hạng quốc tế.</p>
                <Link href="#" className="text-red-600 font-medium hover:underline">
                  Xem chi tiết
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
                <span className="text-gray-500">Hình ảnh</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  <Link href="#" className="hover:text-red-600 transition-colors">
                    Cuộc sống Du học sinh tại Nga
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">Khám phá cuộc sống hàng ngày của sinh viên quốc tế tại Nga, từ học tập đến các hoạt động ngoại khóa.</p>
                <Link href="#" className="text-red-600 font-medium hover:underline">
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bạn cần tư vấn về du học Nga?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn trong quá trình chuẩn bị hồ sơ và đăng ký học bổng du học Nga.</p>
          <Link href="/lien-he" className="bg-white text-red-600 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors inline-block">
            Liên hệ ngay
          </Link>
        </div>
      </div>
    </div>
  );
}

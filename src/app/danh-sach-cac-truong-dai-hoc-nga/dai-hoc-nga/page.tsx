import { LocalUniversityData } from '@/libs/local-data';
import Link from 'next/link';

export default function AllUniversitiesPage() {
  const universities = LocalUniversityData.getAllUniversities();

  return (
    <div>
      <div className="bg-[#1D2233] text-white py-16" style={{ backgroundImage: `url('/images/lines-background-2.svg')`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Danh mục toàn bộ các trường Đại học ở Nga</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
          <p>Chào mừng bạn đến với danh mục toàn bộ các trường đại học tại Nga, nơi tập hợp đầy đủ thông tin về các cơ sở giáo dục đại học hàng đầu ở quốc gia rộng lớn và đa dạng này. Nga, với nền văn hóa lâu đời và truyền thống học thuật phong phú, là điểm đến hấp dẫn cho sinh viên quốc tế và là nơi đào tạo nhiều thế hệ chuyên gia xuất sắc.</p>

          <p>Danh mục này bao gồm các trường đại học từ những cơ sở nghiên cứu hàng đầu cho đến các trường đại học chuyên ngành, trải dài từ Moscow đến St. Petersburg, từ Novosibirsk đến Vladivostok. Bạn sẽ tìm thấy thông tin chi tiết về các trường đại học công lập và tư thục, các chương trình học đa dạng, và các cơ hội nghiên cứu và học tập ở tất cả các lĩnh vực từ khoa học tự nhiên, kỹ thuật, nhân văn đến kinh doanh và nghệ thuật.</p>

          <p>Để có cái nhìn trực quan hơn về các trường đại học, bạn có thể tham khảo hình ảnh và thông tin bổ sung qua liên kết sau. Điều này sẽ giúp bạn hình dung sơ lược về cơ sở vật chất và môi trường học tập tại mỗi trường trước khi tìm hiểu chi tiết hơn. Chúng tôi hy vọng danh mục này sẽ là nguồn tài liệu hữu ích và hỗ trợ bạn trong việc đưa ra quyết định quan trọng về con đường học vấn của mình tại Nga.</p>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="space-y-4">
            {universities.reverse().map((university) => (
              <Link
                key={university.id}
                href={`/truong/${university.slug}`}
                className="block text-lg text-blue-700 hover:text-blue-900 hover:underline"
              >
                {university.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

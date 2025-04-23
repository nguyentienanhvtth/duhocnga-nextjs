import Image from "next/image";
import Link from "next/link";

export default function HuongDanDangKyHocBongPage() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#1D2233",
          backgroundImage: `url(${"/images/lines-background-2.svg"})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col items-center mx-auto px-4 pt-8 mb-[150px]">
          <h1 className="!text-[45px] !font-bold !text-center !mb-6 !text-white">
            Hướng dẫn đăng ký Học bổng du học Nga 2025
          </h1>

          <div className="-mb-[150px] w-full">
            <Image
              src="/images/huong-dan-dang-ky-hoc-bong-nga-2025.webp"
              alt="Hướng dẫn đăng ký Học bổng du học Nga 2025"
              width={1200}
              height={675}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-8">
        <div className="prose max-w-none">
          <p className="text-lg font-medium mb-6">
            Bạn đã sẵn sàng cho một hành trình học tập đầy thú vị tại Nga?{" "}
            <strong>Học bổng du học Nga 2025</strong> đang mở ra cánh cửa cơ hội
            cho bạn. Tuy nhiên, để tăng cơ hội trúng tuyển, bạn cần chuẩn bị một
            hồ sơ đăng ký thật hoàn chỉnh và chuyên nghiệp. Bài viết này sẽ
            hướng dẫn bạn từng bước một để hoàn tất quá trình đăng ký.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Bước 1: Lựa chọn chương trình Học bổng Du học Nga 2025
          </h2>

          <p>
            Ứng viên đăng ký dự tuyển Học bổng Hiệp định Nga 2025 cũng như Học
            bổng 1 phía Nga sẽ có rất nhiều lựa chọn bao gồm:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              <strong>Chuyên ngành đa dạng:</strong> Hơn 400 mã ngành từ Khoa
              học tự nhiên đến Nghệ thuật cho phép bạn tự do chọn lựa chuyên
              ngành phù hợp với sở thích và định hướng nghề nghiệp.
            </li>
            <li className="mb-2">
              <strong>Lựa chọn trường đại học phong phú:</strong> Với 766 trường
              đại học chuyên nghiệp trải dài trên 82 vùng lãnh thổ của Liên bang
              Nga, từ Kaliningrad đến Vladivostok, các trường này luôn sẵn sàng
              tiếp nhận sinh viên quốc tế.
            </li>
            <li className="mb-2">
              <strong>Chương trình học đáp ứng mọi nhu cầu:</strong> Bạn có thể
              theo học các chương trình như Cử nhân, Chuyên gia, Cao học, Nghiên
              cứu sinh, hoặc tham gia vào các khóa đào tạo đặc biệt để nâng cao
              trình độ chuyên môn. Thậm chí, bạn có thể chỉ đơn giản là học
              tiếng Nga!
            </li>
          </ul>

          <p>
            Các trường đại học tại Nga chú trọng đào tạo những ngành nghề phổ
            biến và có nhu cầu lao động cao trên toàn cầu. Ứng viên chỉ cần tìm
            cho mình một định hướng chuyên ngành mà mình muốn theo đuổi. Quy
            trình dự tuyển hoàn toàn miễn phí. Nếu bạn có bất kỳ câu hỏi nào
            liên quan đến các chương trình đào tạo hoặc học bổng du học Nga,
            đừng ngần ngại liên hệ với đội ngũ tư vấn qua số Hotline:
            0943835358. Ngoài ra, bạn có thể tham gia cộng đồng sinh viên du học
            Nga tại địa chỉ:{" "}
            <a
              href="https://www.facebook.com/duhocnga.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/duhocnga.org
            </a>{" "}
            để cập nhật thêm thông tin và chia sẻ kinh nghiệm!
          </p>

          <p>
            Bạn cũng cần nắm vững thông tin của các chương trình{" "}
            <a href="/gioi-thieu/thong-tin-can-biet-ve-hoc-bong-du-hoc-nga-2025">
              Học bổng Hiệp định Nga và Học bổng 1 phía Nga trong năm học
              2025/2026
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Bước 2: Chuẩn bị hồ sơ xin học bổng Nga 2025
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Hồ sơ gốc để Đăng ký Học bổng 1 phía Nga 2025
          </h3>

          <p>
            Để đăng ký theo dự tuyển Học bổng 1 phía Nga 2025, ứng viên cần hoàn
            thiện các hồ sơ sau để dự tuyển:
          </p>

          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">
              <strong>Đơn đăng ký điện tử:</strong> Điền và hoàn thiện theo mẫu
              chung của hệ thống.
            </li>
            <li className="mb-2">
              <strong>Hồ sơ nhân thân:</strong> Gửi bản sao Hộ chiếu phổ thông
              hoặc Chứng minh thư nhân dân.
            </li>
            <li className="mb-2">
              <strong>Kết quả học tập:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <em>Đối với bậc Đại học:</em> Cung cấp bản sao bằng tốt
                  nghiệp, học bạ THPT và các giấy khen (nếu có).
                </li>
                <li>
                  <em>Đối với bậc Cao học và Nghiên cứu sinh:</em> Cần có bản
                  sao bằng tốt nghiệp, bảng điểm Đại học hoặc Cao học và các
                  giấy khen, công trình nghiên cứu (nếu có).
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Ảnh hồ sơ:</strong> Ảnh kích thước 4x6cm dưới dạng file
              điện tử, cần được upload lên hệ thống. Lưu ý: Ảnh phải chụp với
              phông nền màu trắng.
            </li>
          </ol>

          <p>
            Tất cả hồ sơ dự tuyển phải được lưu dưới dạng file điện tử. Ứng viên
            cần quét (scan) toàn bộ hồ sơ sang các file định dạng PDF, mỗi loại
            tài liệu quét thành một file riêng, dung lượng không quá 1 MB.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Hồ sơ dịch thuật công chứng để Đăng ký Học bổng 1 phía Nga 2025
          </h3>

          <p>
            Ngoài các hồ sơ gốc nếu trên, ứng viên dự tuyển Học bổng 1 phía Nga
            2025 cần phải chuẩn bị bộ hồ sơ dịch thuật sang tiếng Nga và công
            chứng bao gồm:
          </p>

          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">
              <strong>Đơn đăng ký:</strong> Đã điền, có dán ảnh và ký tên.
            </li>
            <li className="mb-2">
              Bản dịch công chứng <strong>Hộ chiếu phổ thông</strong>.
            </li>
            <li className="mb-2">
              Bản dịch công chứng <strong>Bằng và Bảng điểm (học bạ)</strong>.
            </li>
            <li className="mb-2">
              Bản dịch công chứng{" "}
              <strong>Giấy chứng nhận sức khỏe tổng quát</strong>, nêu rõ đủ
              điều kiện học tập tại nước ngoài.
            </li>
            <li className="mb-2">
              Bản dịch công chứng <strong>Giấy xét nghiệm</strong> HIV, Lao
              phổi, viêm gan A,B,C.
            </li>
          </ol>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Hồ sơ gốc để đăng ký Học bổng Hiệp định Nga 2025
          </h3>

          <p>
            Ngoài tất cả các hồ sơ như đã đề cập phía trên, Hồ sơ đăng ký Học
            bổng Hiệp định Nga 2025 còn yêu cầu:
          </p>

          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">
              <strong>Phiếu đăng ký dự tuyển</strong>;
            </li>
            <li className="mb-2">
              <strong>Bản cam kết nghĩa vụ</strong> của lưu học sinh được cử đi
              học nước ngoài có ý kiến bảo lãnh và chữ ký của bố, mẹ hoặc người
              đại diện hợp pháp (Mẫu số 4). Riêng đối với ứng viên của các bộ,
              ngành cần làm thêm Bản cam kết có xác nhận của cơ quan bộ, ngành
              cử dự tuyển;
            </li>
            <li className="mb-2">
              <strong>Sơ yếu lý lịch</strong> có dán ảnh
            </li>
            <li className="mb-2">
              Bản sao công chứng bằng khen, giấy khen, giấy tờ chứng nhận các
              giải thưởng quốc tế, khu vực, quốc gia,…
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Bước 3: Gửi hồ sơ trực tuyến và hồ sơ trực tiếp
          </h2>

          <p>
            Chương trình học bổng Nga không yêu cầu ứng viên tham gia thi tuyển.
            Hồ sơ chỉ được xét duyệt nếu hợp lệ, tức là ứng viên cần đáp ứng các
            điều kiện tối thiểu theo thông báo tuyển chọn đầu vào của mỗi chương
            trình học bổng.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Tiêu chí Xét tuyển Học bổng Nga
          </h3>

          <p>
            Hồ sơ sẽ được lựa chọn theo tiêu chí từ cao xuống thấp, ưu tiên
            những ứng viên có thành tích nổi bật như Ứng viên đã đoạt giải
            thưởng quốc tế, khu vực và quốc gia; Ứng viên có văn bản tiếp nhận
            từ cơ sở đào tạo tại Nga; Ứng viên có thành tích xuất sắc trong học
            tập, rèn luyện, và nghiên cứu khoa học.
          </p>

          <p>
            Hồ sơ hợp lệ là hồ sơ có đầy đủ các giấy tờ quy định ở trên và được
            nộp đúng thời hạn theo Thông báo tuyển sinh (bao gồm cả hồ sơ online
            và hồ sơ giấy). Hồ sơ nộp muộn chỉ được xem xét nếu vẫn còn chỉ tiêu
            học bổng. Lưu ý rằng, người khai hồ sơ dự tuyển không đúng và người
            xác nhận sai sẽ phải chịu trách nhiệm theo pháp luật, đồng thời kết
            quả tuyển sinh liên quan sẽ bị hủy.
          </p>

          <p>
            Kết quả sơ tuyển sẽ được thông báo đến từng ứng viên qua email. Hãy
            đảm bảo hồ sơ của bạn đầy đủ và chính xác để tối ưu hóa cơ hội nhận
            học bổng. Đừng quên kiểm tra kỹ lại hồ sơ trước khi nộp!
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Bước 4: Nhận Kết quả học bổng Nga, giấy mời và làm Visa Du học Nga
          </h2>

          <p>
            Tất cả các ứng viên đến từ các nước không nằm trong danh sách miễn
            thị thực cần lưu ý các yêu cầu sau để nhập cảnh vào Liên bang Nga:
          </p>

          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">
              <strong>Hộ chiếu:</strong> Ứng viên cần có Hộ chiếu phổ thông còn
              hiệu lực ít nhất 18 tháng.
            </li>
            <li className="mb-2">
              <strong>Visa:</strong> Cần có Visa do Phòng Lãnh sự Đại sứ quán
              Liên bang Nga tại Việt Nam cấp.
            </li>
          </ol>

          <p>
            Để nhận được Visa diện học tập, ứng viên cần có giấy mời từ Cục Di
            trú Liên bang Nga. Danh sách ứng viên trúng tuyển sau vòng tuyển
            chọn sẽ được các trường đại học Nga gửi tới Cục Di trú, kèm theo hộ
            chiếu còn hiệu lực của ứng viên để làm &quot;Giấy mời&quot;
            (приглашение). Giấy mời này sẽ được cấp dưới dạng điện tử và bao gồm
            mã 6 ký tự mà ứng viên sẽ cần điền vào đơn xin thị thực.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Hồ sơ xin Visa du học Nga
          </h3>

          <p>
            Khi nộp đơn xin thị thực tại Lãnh sự quán Nga, ứng viên cần chuẩn bị
            các tài liệu sau:
          </p>

          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">Bản gốc Hộ chiếu phổ thông.</li>
            <li className="mb-2">
              Hóa đơn đã đóng lệ phí Visa:
              <ul className="list-disc pl-6 mt-2">
                <li>780.000 VND cho thời gian xử lý 07 ngày làm việc.</li>
                <li>
                  1.560.000 VND nếu chọn làm nhanh trong khoảng thời gian 01-03
                  ngày.
                </li>
              </ul>
            </li>
          </ol>

          <p>
            Hãy đảm bảo hoàn tất các thủ tục trên để có thể nhập cảnh và theo
            học tại Nga một cách thuận lợi!
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Nhận hỗ trợ hồ sơ học bổng Nga 2025 ở đâu?
          </h2>

          <p>
            Hiện nay, <strong>Du học Nga</strong> là đại diện tuyển sinh chính
            thức cho các trường Đại học Liên bang Nga tại Việt Nam. Nếu bạn muốn
            biết thêm thông tin chi tiết và cách thức dự tuyển cho các chương
            trình học bổng, hãy liên hệ với{" "}
            <strong>Văn phòng tư vấn Du học Nga tại Hà Nội:</strong>
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="mb-2">
              <strong>Địa chỉ:</strong> 65 Quán Sứ, Hoàn Kiếm, Hà Nội
            </p>
            <p className="mb-2">
              <strong>Hotline:</strong> 0943835358 (có hỗ trợ qua Zalo,
              WhatsApp)
            </p>
            <p>
              <strong>Fanpage:</strong>{" "}
              <a
                href="https://www.facebook.com/duhocnga.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/duhocnga.org
              </a>
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-white"
        style={{
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(180deg, #fff 50%, #F6F6F6 50%)",
        }}
      >
        <div className="container bg-[#224DB7] mx-auto px-12 py-12 text-center flex items-center justify-between">
          <div className="flex flex-col items-start">
            <h2 className="!text-4xl font-bold !mb-2.5">
              Bạn muốn biết thêm về chúng tôi?
            </h2>
            <p className="text-lg mb-8">
              Chúng tôi luôn mong muốn được trao đổi, và luôn sẵn sàng lắng
              nghe!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/lien-he"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded font-medium hover:bg-white/10 transition-colors"
            >
              GIỚI THIỆU DU HỌC NGA
            </Link>
            <Link
              href="/lien-he"
              className="bg-white text-[#224DB7] px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
            >
              ĐỂ LẠI LỜI NHẮN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

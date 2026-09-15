import React from 'react';

export default function TermsSection() {
  const terms = [
    {
      term: 'Từ khóa ưu tiên',
      def: 'Danh sách truy vấn được theo dõi và dùng để lập kế hoạch. Biến động thứ hạng không phải tiêu chí nghiệm thu duy nhất.'
    },
    {
      term: 'Một bài SEO',
      def: 'Bài theo brief đã duyệt, có cấu trúc, nguồn và một vòng sửa. Độ dài phụ thuộc mục đích tìm kiếm.'
    },
    {
      term: 'Backlink được duyệt',
      def: 'Nguồn, chi phí, loại liên kết và rủi ro được gửi khách trước khi triển khai.'
    },
    {
      term: 'SEO kỹ thuật',
      def: 'Kiểm tra index, crawl, sitemap, canonical, redirect, tốc độ và lỗi cấu trúc trong phạm vi quyền truy cập.'
    },
    {
      term: 'Kết quả SEO',
      def: 'Đánh giá bằng xu hướng hiển thị, click, trang index, chuyển đổi và công việc hoàn thành. Không dùng một từ khóa đơn lẻ để kết luận.'
    }
  ];

  return (
    <section id="s-terms" className="section-wrapper bg-alt">
      <div className="container">
        <div className="terms-block">
          <h2 className="section-title">4 Các thuật ngữ và giới hạn</h2>

          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th style={{ width: '28%' }}>Thuật ngữ</th>
                  <th>Định nghĩa dùng để báo giá và nghiệm thu</th>
                </tr>
              </thead>
              <tbody>
                {terms.map((item, idx) => (
                  <tr key={idx}>
                    <td className="highlight-cell">{item.term}</td>
                    <td>{item.def}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

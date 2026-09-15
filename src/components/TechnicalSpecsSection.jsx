import React from 'react';

export default function TechnicalSpecsSection() {
  const techFunctions = [
    { id: 'F01', func: 'Form audit', criteria: 'Nhận đúng URL và nhu cầu.' },
    { id: 'F02', func: 'Bảng gói', criteria: 'CTA tự chọn đúng gói.' },
    { id: 'F03', func: 'Case SEO', criteria: 'Dữ liệu có mốc thời gian và nguồn đo.' },
    { id: 'F04', func: 'FAQ', criteria: 'Không chứa cam kết top.' },
    { id: 'F05', func: 'Tracking', criteria: 'Ghi CTA, chọn gói, form và kênh liên hệ.' },
    { id: 'F06', func: 'Schema', criteria: 'Service, Organization và FAQ khi phù hợp.' }
  ];

  const techGroups = [
    {
      group: 'Responsive',
      requirement: 'Kiểm tra 360, 390, 768, 1024 và 1440 px. Không tràn ngang. Nút chính dễ chạm trên điện thoại.'
    },
    {
      group: 'Khả năng truy cập',
      requirement: 'Có label cho form, focus nhìn thấy được, thứ tự tab đúng, alt cho ảnh và độ tương phản đạt WCAG AA.'
    },
    {
      group: 'Bảo mật',
      requirement: 'Dùng HTTPS, kiểm tra dữ liệu ở máy chủ, không để khóa bí mật ở frontend và không hiển thị stack trace.'
    },
    {
      group: 'Nội dung',
      requirement: 'Giá, phạm vi, chính sách và thông tin pháp lý phải lấy từ bản đã được người phụ trách duyệt.'
    },
    {
      group: 'Theo dõi',
      requirement: 'Không đưa số điện thoại, email, mật khẩu hoặc nội dung riêng tư vào dữ liệu phân tích.'
    },
    {
      group: 'SEO landing page',
      requirement: 'Landing page dịch vụ phải index được, có canonical, sitemap, nội dung HTML và không nhồi từ khóa.'
    },
    {
      group: 'Dữ liệu case',
      requirement: 'Ảnh Search Console hoặc Analytics phải che thông tin riêng tư và ghi rõ khoảng thời gian.'
    }
  ];

  return (
    <section id="s-tech" className="section-wrapper bg-alt">
      <div className="container">
        <h2 className="section-title">7 Yêu cầu kỹ thuật và theo dõi</h2>

        <div className="tech-tables-grid">
          {/* F01 - F06 */}
          <div className="tech-col">
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th style={{ width: '15%' }}>ID</th>
                    <th style={{ width: '35%' }}>Chức năng</th>
                    <th>Điều kiện nghiệm thu</th>
                  </tr>
                </thead>
                <tbody>
                  {techFunctions.map((item) => (
                    <tr key={item.id}>
                      <td><span className="badge-fid">{item.id}</span></td>
                      <td className="highlight-cell">{item.func}</td>
                      <td>{item.criteria}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Nhóm yêu cầu */}
          <div className="tech-col">
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th style={{ width: '32%' }}>Nhóm</th>
                    <th>Yêu cầu</th>
                  </tr>
                </thead>
                <tbody>
                  {techGroups.map((item, idx) => (
                    <tr key={idx}>
                      <td className="highlight-cell">{item.group}</td>
                      <td>{item.requirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .tech-tables-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 24px;
          margin-top: 16px;
        }

        @media (max-width: 992px) {
          .tech-tables-grid {
            grid-template-columns: 1fr;
          }
        }

        .badge-fid {
          display: inline-block;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.8rem;
          color: #2563EB;
          background: #EFF6FF;
          padding: 2px 8px;
          border-radius: var(--radius-sm);
        }
      `}</style>
    </section>
  );
}

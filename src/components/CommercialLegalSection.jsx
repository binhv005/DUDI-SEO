import React from 'react';

export default function CommercialLegalSection() {
  const policies = [
    { target: 'Chu kỳ', desc: 'Đề xuất thanh toán đầu mỗi tháng và kế hoạch được duyệt trước khi triển khai.' },
    { target: 'Thời hạn', desc: 'Đề xuất tối thiểu 3 tháng cho gói Cơ bản và 6 tháng cho gói còn lại.' },
    { target: 'Bài viết', desc: 'Chốt số bài, độ dài, lĩnh vực chuyên môn, nguồn và số vòng sửa.' },
    { target: 'Backlink', desc: 'Chi phí bên ngoài chỉ phát sinh sau khi khách duyệt từng nguồn hoặc kế hoạch.' },
    { target: 'Chấm dứt', desc: 'Chốt thời gian báo trước, quyền sở hữu nội dung và bàn giao tài khoản dữ liệu.' }
  ];

  const legalItems = [
    { item: 'Tên pháp nhân', value: 'Công ty TNHH Giải Pháp Phần Mềm DUDI' },
    { item: 'Mã số thuế', value: '0319641544  Đối chiếu giấy đăng ký doanh nghiệp trước khi đăng' },
    { item: 'Hotline', value: '0909 163 821  Gọi thử trước khi đăng' },
    { item: 'Email', value: 'contact@dudisoftware.com  Gửi thử trước khi đăng' },
    { item: 'Địa chỉ', value: '49/2 Đường 14, Phường Thủ Đức, Thành phố Hồ Chí Minh  Đối chiếu hồ sơ hiện hành' }
  ];

  const ctaStandardTexts = [
    { pos: 'Hero', text: 'Gửi website để nhận đánh giá SEO' },
    { pos: 'Cơ bản', text: 'Chọn gói Cơ bản 4.000.000 đồng mỗi tháng' },
    { pos: 'Tiêu chuẩn', text: 'Chọn gói Tiêu chuẩn 12.000.000 đồng mỗi tháng' },
    { pos: 'Cao cấp', text: 'Chọn gói Cao cấp 25.000.000 đồng mỗi tháng' },
    { pos: 'Thành công', text: 'DUDI đã nhận website và sẽ liên hệ để xác nhận mục tiêu trước khi audit.' }
  ];

  return (
    <section id="s-commercial" className="section-wrapper bg-alt">
      <div className="container">
        {/* Phần 10 */}
        <div className="commercial-block mb-12">
          <h2 className="section-title">10 Chính sách thương mại cần DUDI xác nhận</h2>

          <div className="table-container mb-6">
            <table className="custom-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Mục</th>
                  <th>Nội dung cần chốt</th>
                </tr>
              </thead>
              <tbody>
                {policies.map((p, i) => (
                  <tr key={i}>
                    <td className="highlight-cell">{p.target}</td>
                    <td>{p.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="doc-paragraph">
            <strong>Điều kiện xuất bản.</strong> Chỉ đăng giá, thời gian, số vòng chỉnh sửa, SLA, bảo hành và điều kiện hủy sau khi người có thẩm quyền của DUDI xác nhận.
          </p>
        </div>

        {/* Phần 11 */}
        <div id="s-legal" className="legal-block" style={{ marginTop: '48px' }}>
          <h2 className="section-title">11 Thông tin pháp lý và câu chữ CTA</h2>

          <div className="legal-grid">
            {/* Legal Info Table */}
            <div className="legal-info-col">
              <div className="table-container mb-4">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th style={{ width: '32%' }}>Mục</th>
                      <th>Dữ liệu hoặc việc cần làm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {legalItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className="highlight-cell">{item.item}</td>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="doc-paragraph text-warning-note">
                <strong>Tên công ty trong ảnh gốc.</strong> Công ty TNHH Công Nghệ Phần Mềm DUDI là tên sai. Không dùng tên này trên website hoặc tài liệu công khai.
              </p>
            </div>

            {/* CTA Copy Table */}
            <div className="cta-copy-col">
              <div className="table-container">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th style={{ width: '30%' }}>Vị trí</th>
                      <th>Câu chữ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ctaStandardTexts.map((cta, idx) => (
                      <tr key={idx}>
                        <td className="highlight-cell">{cta.pos}</td>
                        <td style={{ fontWeight: 600, color: 'var(--secondary)' }}>{cta.text}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mb-12 {
          margin-bottom: 24px;
        }

        .mb-6 {
          margin-bottom: 16px;
        }

        .mb-4 {
          margin-bottom: 12px;
        }

        .doc-paragraph {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .text-warning-note {
          background: #FFFBEB;
          border: 1px solid #FDE68A;
          border-radius: var(--radius-md);
          padding: 14px;
          color: #92400E;
        }

        .legal-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 24px;
          margin-top: 16px;
        }

        @media (max-width: 992px) {
          .legal-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

import React from 'react';

export default function ObjectivesSection() {
  const principles = [
    'Không bảo đảm vị trí từ khóa hoặc thời điểm lên top.',
    'Không dùng backlink rác, PBN hoặc mua link nếu khách chưa duyệt rủi ro.',
    'Mỗi bài viết phải có brief, nguồn và người duyệt.',
    'Báo cáo phải tách công việc đã làm, dữ liệu quan sát và đề xuất.'
  ];

  return (
    <section id="s-objectives" className="section-wrapper bg-alt">
      <div className="container">
        <h2 className="section-title">1 Mục tiêu và nguyên tắc</h2>
        
        <p className="section-desc lead-text">
          Trang này giúp doanh nghiệp hiểu SEO là quá trình nghiên cứu, sửa website, sản xuất nội dung và đo lường theo chu kỳ. Kết quả phụ thuộc mức cạnh tranh, nền tảng kỹ thuật, nội dung, lịch sử tên miền và các thay đổi của công cụ tìm kiếm.
        </p>

        <div className="principles-list-box">
          <ul className="principles-ul">
            {principles.map((item, idx) => (
              <li key={idx} className="principle-li-item">
                <span className="bullet-dot">•</span>
                <span className="principle-li-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .lead-text {
          font-size: 1.02rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .principles-list-box {
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-left: 4px solid var(--primary);
          border-radius: var(--radius-md);
          padding: 24px 28px;
          box-shadow: var(--shadow-sm);
        }

        .principles-ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .principle-li-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.98rem;
          color: var(--secondary);
          line-height: 1.5;
        }

        .bullet-dot {
          color: var(--primary);
          font-weight: 800;
          font-size: 1.3rem;
          line-height: 1;
        }

        .principle-li-text {
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Bao lâu thì SEO có kết quả?',
      a: 'Không có mốc cố định. DUDI báo cáo công việc và dữ liệu đo lường minh bạch định kỳ theo từng tháng.'
    },
    {
      q: 'Có cam kết top không?',
      a: 'Không. Thứ hạng do thuật toán tìm kiếm và nhiều yếu tố khách quan chi phối, chúng tôi cam kết đúng khối lượng và chuẩn SEO tốt nhất.'
    },
    {
      q: 'Phí backlink đã gồm chưa?',
      a: 'Chưa, trừ khi báo giá ghi rõ. Mọi nguồn trả phí ngoài đều được đối soát và khách hàng duyệt trước khi triển khai.'
    },
    {
      q: 'Ai duyệt bài viết?',
      a: 'Khách hàng sẽ cử đại diện chuyên môn để duyệt và xác nhận thông tin nội dung, kỹ thuật trước khi xuất bản.'
    },
    {
      q: 'Có cần sửa website không?',
      a: 'Có thể. Các lỗi kỹ thuật on-page, cấu trúc sitemap hoặc tối ưu trang đích mới sẽ được thực hiện theo đúng hạn mức gói.'
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="s10-faq" className="section-wrapper bg-alt">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">HỖ TRỢ & TƯ VẤN</div>
          <h2 className="section-title">Câu hỏi thường gặp (FAQ)</h2>
          <p className="section-desc">
            Giải đáp minh bạch mọi thắc mắc về thời gian, thứ hạng, nội dung và chi phí trước khi bắt đầu.
          </p>
        </div>

        <div className="faq-main-layout reveal-scale">
          {/* Mascot Column */}
          <div className="faq-mascot-wrapper">
            <img 
              src="/mascot-faq.webp" 
              alt="DUDI Robot Mascot FAQ" 
              className="faq-mascot-img"
              loading="lazy"
            />
          </div>

          {/* FAQ Accordion List Column */}
          <div className="faq-content-wrapper">
            <div className="faq-accordion-list">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className={`faq-item-clean ${isOpen ? 'active' : ''}`}>
                    <button
                      className="faq-question-btn"
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{faq.q}</span>
                      <span className="faq-icon-arrow">
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer-box">
                        <p className="faq-answer-text">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .faq-main-layout {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-top: 16px;
        }

        /* Mascot Column */
        .faq-mascot-wrapper {
          flex: 0 0 260px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .faq-mascot-img {
          width: 100%;
          max-width: 260px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
          animation: mascotHoldFloat 4.5s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .faq-mascot-img:hover {
          transform: scale(1.03);
        }

        @keyframes mascotHoldFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        /* FAQ Content */
        .faq-content-wrapper {
          flex: 1;
          min-width: 0;
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item-clean {
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
        }

        .faq-item-clean:hover {
          border-color: rgba(211, 47, 47, 0.4);
          box-shadow: 0 4px 14px rgba(211, 47, 47, 0.08);
          transform: translateY(-1px);
        }

        .faq-item-clean.active {
          border-color: var(--primary);
          box-shadow: 0 6px 18px rgba(211, 47, 47, 0.12);
        }

        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
        }

        .faq-question-text {
          font-size: 0.96rem;
          font-weight: 700;
          color: var(--secondary);
          line-height: 1.4;
        }

        .faq-item-clean.active .faq-question-text {
          color: var(--primary);
        }

        .faq-icon-arrow {
          color: var(--primary);
          display: flex;
          align-items: center;
          margin-left: 12px;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .faq-answer-box {
          padding: 0 20px 16px 20px;
          border-top: 1px dashed var(--border-subtle);
          background: #FFFDFC;
        }

        .faq-answer-text {
          padding-top: 12px;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 860px) {
          .faq-main-layout {
            flex-direction: column;
            gap: 16px;
          }
          .faq-mascot-wrapper {
            display: none !important;
          }
          .faq-content-wrapper {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

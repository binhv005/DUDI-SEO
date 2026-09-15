import React from 'react';

export default function ProblemsSection() {
  const problems = [
    {
      image: '/problem-1.webp',
      title: 'Website không index hoặc lỗi kỹ thuật',
      bullets: [
        'Google thu thập dữ liệu bị gián đoạn, lỗi crawl',
        'Thiếu sitemap, lỗi thẻ canonical hoặc redirect',
        'Tốc độ tải chậm, trùng lặp nội dung trang'
      ]
    },
    {
      image: '/problem-2.webp',
      title: 'Nội dung rời rạc, thiếu định hướng',
      bullets: [
        'Sản xuất bài viết không theo cụm chủ đề',
        'Chưa bám sát ý định tìm kiếm của khách',
        'Bài viết thiếu chiều sâu, không giữ chân người đọc'
      ]
    },
    {
      image: '/problem-3.webp',
      title: 'Traffic không đúng tệp khách hàng',
      bullets: [
        'Nhắm sai nhóm từ khóa mục tiêu kinh doanh',
        'Lượng truy cập tăng nhưng không tạo ra lead',
        'Thiếu các trang đích (Landing Pages) chuyển đổi'
      ]
    },
    {
      image: '/problem-4.webp',
      title: 'Chưa đo lường và tối ưu chuyển đổi',
      bullets: [
        'Chưa thiết lập theo dõi sự kiện trên GSC & GA4',
        'Thiếu dữ liệu đo lường hành vi người dùng',
        'Không có số liệu chính xác để cải tiến định kỳ'
      ]
    }
  ];

  return (
    <section id="s04-van-de" className="section-wrapper bg-alt">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">VẤN ĐỀ THỰC TẾ</div>
          <h2 className="section-title">Các tình trạng thực tế doanh nghiệp thường gặp</h2>
          <p className="section-desc">
            Nhận diện chính xác các rào cản kỹ thuật và nội dung đang ảnh hưởng trực tiếp đến hiệu quả hiển thị của website.
          </p>
        </div>

        <div className="problems-arched-grid">
          {problems.map((prob, idx) => (
            <div key={idx} className={`arched-problem-card reveal-up stagger-${idx + 1}`}>
              {/* Top Arched Dark Header */}
              <div className="arched-card-header">
                {/* Top Accent Pill */}
                <div className="arched-top-pill" />

                {/* Robot Illustration */}
                <div className="arched-img-wrap">
                  <img 
                    src={prob.image} 
                    alt={prob.title} 
                    className="arched-robot-img" 
                  />
                </div>

                {/* Title */}
                <h3 className="arched-card-title">{prob.title}</h3>

                {/* Bottom Curved Accent Line */}
                <div className="arched-bottom-curve" />
              </div>

              {/* Bottom White Body with Bullet Dots */}
              <div className="arched-card-body">
                <ul className="arched-bullets-list">
                  {prob.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="arched-bullet-item">
                      <span className="arched-bullet-dot" />
                      <span className="arched-bullet-text">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .problems-arched-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 10px;
        }

        @media (max-width: 1024px) {
          .problems-arched-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 600px) {
          .problems-arched-grid {
            grid-template-columns: 1fr;
          }
        }

        .arched-problem-card {
          background: #FBFBFB;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }

        .arched-problem-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(211, 47, 47, 0.12);
          border-color: #FECDD3;
        }

        /* Top Header - Exact #FBFBFB Background to match images */
        .arched-card-header {
          position: relative;
          background: #FBFBFB;
          padding: 6px 6px 18px 6px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .arched-top-pill {
          width: 44px;
          height: 5px;
          background: linear-gradient(90deg, #F97316 0%, #EF4444 100%);
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          margin-bottom: 4px;
        }

        .arched-img-wrap {
          width: 100%;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
          overflow: hidden;
        }

        .arched-robot-img {
          width: 100%;
          height: 100%;
          max-height: 140px;
          object-fit: contain;
          border-radius: 0;
          transition: transform 0.25s ease;
        }

        .arched-problem-card:hover .arched-robot-img {
          transform: scale(1.05);
        }

        .arched-card-title {
          font-size: clamp(0.76rem, 1.05vw, 0.82rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.25;
          min-height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 2px;
          white-space: nowrap;
          letter-spacing: -0.015em;
        }

        @media (max-width: 600px) {
          .arched-card-title {
            white-space: normal;
          }
        }

        /* Bottom Curved Arc Divider */
        .arched-bottom-curve {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 10px;
          background: #1D2735;
          border-top-left-radius: 50% 10px;
          border-top-right-radius: 50% 10px;
          border-top: 2px solid #F97316;
        }

        /* Bottom Body - Slate Navy #1D2735 */
        .arched-card-body {
          padding: 16px 14px 18px 14px;
          background: #1D2735;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .arched-bullets-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .arched-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.4;
        }

        .arched-bullet-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #F97316 0%, #EF4444 100%);
          flex-shrink: 0;
          margin-top: 4px;
          box-shadow: 0 2px 4px rgba(239, 68, 68, 0.35);
        }

        .arched-bullet-text {
          flex-grow: 1;
        }
      `}</style>
    </section>
  );
}

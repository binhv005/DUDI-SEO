import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Trophy } from 'lucide-react';

export default function TargetAudienceSection({ onSelectPackage }) {
  const targetGroups = [
    {
      num: '01',
      badge: 'Gói Cơ bản',
      target: 'Website mới hoặc chưa có nền SEO',
      patternTitle: 'NỀN TẢNG',
      icon: <Sparkles size={26} strokeWidth={2.4} color="#FFFFFF" />,
      theme: 'red',
      color: '#DC2626',
      needs: 'Cần kiểm tra lỗi index chính, tối ưu On-page cơ bản (title, meta, heading) và xây dựng 2 - 4 bài viết chuẩn SEO mỗi tháng.',
      keywords: '5 đến 10 từ khóa ưu tiên',
      suggestedPackage: 'Cơ bản',
      price: '4.000.000 đ/tháng',
      anchor: '#s06-bang-gia'
    },
    {
      num: '02',
      badge: 'Gói Tiêu chuẩn',
      target: 'Doanh nghiệp cần tăng traffic đều',
      patternTitle: 'TĂNG TRƯỞNG',
      icon: <TrendingUp size={26} strokeWidth={2.4} color="#FFFFFF" />,
      theme: 'blue',
      color: '#2563EB',
      needs: 'Cần nghiên cứu ý định tìm kiếm và đối thủ, audit kỹ thuật cơ bản, sản xuất 6 - 10 bài viết chuyên sâu và thiết lập theo dõi GSC/GA4.',
      keywords: '10 đến 30 từ khóa ưu tiên',
      suggestedPackage: 'Tiêu chuẩn',
      price: '12.000.000 đ/tháng',
      anchor: '#s06-bang-gia',
      featured: true
    },
    {
      num: '03',
      badge: 'Gói Cao cấp',
      target: 'Thị trường cạnh tranh và nhiều nhóm dịch vụ',
      patternTitle: 'CHUYÊN SÂU',
      icon: <Trophy size={26} strokeWidth={2.4} color="#FFFFFF" />,
      theme: 'purple',
      color: '#7C3AED',
      needs: 'Cần nghiên cứu cụm chủ đề chuyên sâu, audit theo cụm trang & chuyển đổi, 10 - 20 bài viết/tháng, phân tích funnel và họp chiến lược 60 phút.',
      keywords: '30 đến 60 từ khóa ưu tiên',
      suggestedPackage: 'Cao cấp',
      price: '25.000.000 đ/tháng',
      anchor: '#s06-bang-gia'
    }
  ];

  return (
    <section id="s03-doi-tuong" className="section-wrapper bg-alt">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">ĐỐI TƯỢNG KHÁCH HÀNG</div>
          <h2 className="section-title">Đối tượng phù hợp</h2>
          <p className="section-desc">
            Giúp doanh nghiệp tự nhận diện đúng nhu cầu hiện tại và lựa chọn gói dịch vụ tối ưu nhất.
          </p>
        </div>

        <div className="audience-grid">
          {targetGroups.map((group, idx) => (
            <div key={idx} className={`custom-card audience-card reveal-flip stagger-${idx + 1} ${group.featured ? 'featured-card' : ''}`}>
              {/* Pattern Header Header */}
              <div className={`audience-pattern-banner theme-${group.theme}`}>
                {/* Top Badge: 01, 02, 03 */}
                <div className="pattern-badge-pill">
                  <span>{group.num}</span>
                </div>

                {/* Center Icon & Title */}
                <div className="pattern-center-content">
                  <div className="pattern-icon-wrap">
                    {group.icon}
                  </div>
                  <span className="pattern-title-text">{group.patternTitle}</span>
                </div>

                {/* Wave & Floating Drops SVG Background */}
                <svg 
                  className="pattern-wave-canvas" 
                  viewBox="0 0 320 125" 
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id={`pattern-grad-${group.theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      {group.theme === 'red' && (
                        <>
                          <stop offset="0%" stopColor="#E11D48" />
                          <stop offset="100%" stopColor="#BE123C" />
                        </>
                      )}
                      {group.theme === 'blue' && (
                        <>
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#1D4ED8" />
                        </>
                      )}
                      {group.theme === 'purple' && (
                        <>
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#6D28D9" />
                        </>
                      )}
                    </linearGradient>
                  </defs>

                  {/* Liquid Wave Curve */}
                  <path 
                    d="M0,0 L320,0 L320,80 C270,105 210,65 150,85 C95,103 45,70 0,88 Z" 
                    fill={`url(#pattern-grad-${group.theme})`} 
                  />

                  {/* Decorative Floating Drops */}
                  <circle cx="34" cy="110" r="6" fill={group.color} opacity="0.9" />
                  <circle cx="170" cy="114" r="5" fill={group.color} opacity="0.9" />
                  <circle cx="286" cy="104" r="7" fill={group.color} opacity="0.9" />
                </svg>
              </div>

              <div className="card-badge-row">
                <span className="group-badge">{group.badge}</span>
                <span className="group-price">{group.price}</span>
              </div>

              <h3 className="group-target-title">{group.target}</h3>
              
              <p className="group-needs-desc">{group.needs}</p>

              <div className="group-kw-box">
                <CheckCircle2 size={16} color="#D32F2F" />
                <span>{group.keywords}</span>
              </div>

              <div className="card-bottom-action">
                <a 
                  href="#s06-bang-gia"
                  onClick={() => onSelectPackage && onSelectPackage(group.suggestedPackage)}
                  className={`btn ${group.featured ? 'btn-primary' : 'btn-outline'} btn-full`}
                >
                  <span>Xem chi tiết gói {group.suggestedPackage}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .audience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 16px;
        }

        @media (max-width: 992px) {
          .audience-grid {
            grid-template-columns: 1fr;
          }
        }

        .audience-card {
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
          border-radius: 18px;
          padding: 20px 22px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          border: 1px solid var(--border-subtle);
        }

        .audience-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.09);
        }

        .featured-card {
          border: 2px solid var(--primary);
          box-shadow: 0 8px 24px rgba(211, 47, 47, 0.12);
        }

        /* Pattern Header Banner */
        .audience-pattern-banner {
          position: relative;
          width: calc(100% + 44px);
          height: 140px;
          margin: -20px -22px 14px -22px;
          overflow: hidden;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pattern-wave-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .pattern-badge-pill {
          position: absolute;
          top: 12px;
          left: 16px;
          z-index: 3;
          background: rgba(255, 255, 255, 0.2);
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          color: #FFFFFF;
          font-weight: 800;
          font-size: 0.78rem;
          padding: 2px 9px;
          border-radius: 999px;
          backdrop-filter: blur(4px);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          line-height: 1.3;
        }

        .pattern-center-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          margin-top: -18px;
          transition: transform 0.3s ease;
        }

        .audience-card:hover .pattern-center-content {
          transform: translateY(-2px) scale(1.04);
        }

        .pattern-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
        }

        .pattern-title-text {
          color: #FFFFFF;
          font-weight: 900;
          font-size: 1.02rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .card-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .group-badge {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--primary);
          background: var(--primary-light);
          padding: 3px 10px;
          border-radius: 999px;
        }

        .group-price {
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--secondary);
        }

        .group-target-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--secondary);
          line-height: 1.35;
          margin-bottom: 8px;
          min-height: 42px;
        }

        .group-needs-desc {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 14px;
          flex-grow: 1;
        }

        .group-kw-box {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #FFF8F8;
          border: 1px dashed #FECDD3;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #991B1B;
          margin-bottom: 14px;
        }

        .card-bottom-action {
          margin-top: auto;
        }
        
        .btn-full {
          width: 100%;
          padding: 10px 12px;
          font-size: 0.86rem;
        }
      `}</style>
    </section>
  );
}


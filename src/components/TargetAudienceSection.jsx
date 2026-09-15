import React from 'react';
import { Sparkles, TrendingUp, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TargetAudienceSection({ onSelectPackage }) {
  const targetGroups = [
    {
      badge: 'Gói Cơ bản',
      target: 'Website mới hoặc chưa có nền SEO',
      needs: 'Cần kiểm tra lỗi index chính, tối ưu On-page cơ bản (title, meta, heading) và xây dựng 2 - 4 bài viết chuẩn SEO mỗi tháng.',
      keywords: '5 đến 10 từ khóa ưu tiên',
      suggestedPackage: 'Cơ bản',
      price: '4.000.000 đ/tháng',
      anchor: '#s06-bang-gia'
    },
    {
      badge: 'Gói Tiêu chuẩn',
      target: 'Doanh nghiệp cần tăng traffic đều',
      needs: 'Cần nghiên cứu ý định tìm kiếm và đối thủ, audit kỹ thuật cơ bản, sản xuất 6 - 10 bài viết chuyên sâu và thiết lập theo dõi GSC/GA4.',
      keywords: '10 đến 30 từ khóa ưu tiên',
      suggestedPackage: 'Tiêu chuẩn',
      price: '12.000.000 đ/tháng',
      anchor: '#s06-bang-gia',
      featured: true
    },
    {
      badge: 'Gói Cao cấp',
      target: 'Thị trường cạnh tranh và nhiều nhóm dịch vụ',
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
          gap: 18px;
          margin-top: 12px;
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
          border-radius: 14px;
          padding: 20px 22px;
        }

        .featured-card {
          border: 2px solid var(--primary);
          box-shadow: 0 8px 20px rgba(211, 47, 47, 0.1);
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
          padding: 3px 8px;
          border-radius: 999px;
        }

        .group-price {
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--secondary);
        }

        .group-target-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--secondary);
          line-height: 1.3;
          margin-bottom: 8px;
          min-height: 42px;
        }

        .group-needs-desc {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.45;
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
          padding: 9px 12px;
          font-size: 0.84rem;
        }
      `}</style>
    </section>
  );
}

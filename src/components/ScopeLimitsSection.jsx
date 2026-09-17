import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Search, 
  FileText, 
  Sliders, 
  Wrench, 
  BarChart3, 
  Megaphone, 
  Link2, 
  Palette, 
  Code2, 
  ShieldAlert,
  Calendar,
  Clock,
  Coins
} from 'lucide-react';

export default function ScopeLimitsSection() {
  const inScopeItems = [
    {
      icon: Search,
      title: 'Nghiên cứu từ khóa',
      tag: '5 – 60 từ khóa',
      desc: 'Phân tích search intent & độ cạnh tranh'
    },
    {
      icon: FileText,
      title: 'Sản xuất bài viết',
      tag: '2 – 20 bài/tháng',
      desc: 'Viết chuẩn SEO theo brief đã duyệt'
    },
    {
      icon: Sliders,
      title: 'Tối ưu On-page',
      tag: 'Toàn diện',
      desc: 'Title, Meta, Heading & Internal link'
    },
    {
      icon: Wrench,
      title: 'Xử lý Technical',
      tag: 'Chuẩn kỹ thuật',
      desc: 'Index, crawl, sitemap, canonical, redirect'
    },
    {
      icon: BarChart3,
      title: 'Đo lường & Báo cáo',
      tag: 'Hàng tháng',
      desc: 'GA4, GSC & Họp chiến lược định kỳ'
    }
  ];

  const outScopeItems = [
    {
      icon: Megaphone,
      title: 'Ngân sách Ads',
      tag: 'Tách riêng',
      desc: 'Chi phí chạy Google Ads, Facebook Ads'
    },
    {
      icon: Link2,
      title: 'Backlink ngoài gói',
      tag: 'Theo duyệt',
      desc: 'Mua bài PR báo chí & Guest post ngoài'
    },
    {
      icon: Palette,
      title: 'Media & Đồ họa lớn',
      tag: 'Báo giá riêng',
      desc: 'Quay dựng video, chụp ảnh sản phẩm'
    },
    {
      icon: Code2,
      title: 'Lập trình website',
      tag: 'Ngoài phạm vi',
      desc: 'Phát triển tính năng mới, hosting, tên miền'
    },
    {
      icon: ShieldAlert,
      title: 'Xử lý web bị phạt / Cam kết',
      tag: 'Ngoài phạm vi',
      desc: 'Khắc phục web bị hack, cam kết vị trí cố định'
    }
  ];

  const policies = [
    {
      icon: Calendar,
      title: 'Chu kỳ thanh toán:',
      value: 'Đầu mỗi tháng, duyệt kế hoạch trước khi làm'
    },
    {
      icon: Clock,
      title: 'Thời hạn hợp đồng:',
      value: 'Tối thiểu 3 – 6 tháng để đạt hiệu quả SEO'
    },
    {
      icon: Coins,
      title: 'Chi phí phát sinh:',
      value: '0đ ẩn, chỉ phát sinh khi khách hàng duyệt'
    }
  ];

  return (
    <section id="s09-gioi-han" className="section-wrapper scope-limits-light-section overflow-hidden">
      <div className="container scope-main-container">
        {/* Section Header */}
        <div className="section-header-center header-compact">
          <div className="section-badge">MINH BẠCH PHẠM VI</div>
          <h2 className="section-title">Giới hạn phạm vi & Điều khoản dịch vụ</h2>
          <p className="section-desc">
            Minh bạch tuyệt đối giữa các hạng mục đã bao gồm trong gói và các dịch vụ báo giá riêng biệt.
          </p>
        </div>

        {/* Symmetrical 2-Column Comparison Layout */}
        <div className="scope-comparison-grid">
          {/* CỘT 1: BAO GỒM TRONG GÓI (IN-SCOPE) */}
          <div className="scope-card in-scope-card reveal-left">
            {/* Header with Mascot & Status Badge */}
            <div className="card-top-header">
              <div className="header-left">
                <div className="scope-icon-pill green-pill">
                  <CheckCircle2 size={18} className="status-icon" />
                  <span className="scope-headline">Bao gồm trong gói SEO</span>
                </div>
              </div>
              <div className="robot-badge-peek green-robot-badge">
                <img 
                  src="/robot-head.webp" 
                  alt="DUDI Robot Mascot In Scope" 
                  className="robot-mini-img"
                />
              </div>
            </div>

            {/* List of 5 Feature Rows */}
            <div className="scope-items-grid">
              {inScopeItems.map((item, idx) => {
                const IconC = item.icon;
                return (
                  <div key={idx} className="tech-item-row in-item">
                    <div className="item-icon-box green-box">
                      <IconC size={16} />
                    </div>
                    <div className="item-info">
                      <div className="item-title-row">
                        <h4 className="item-title">{item.title}</h4>
                        <span className="item-tag-badge green-badge">{item.tag}</span>
                      </div>
                      <p className="item-sub-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CỘT 2: NGOÀI PHẠM VI GÓI (OUT-OF-SCOPE) */}
          <div className="scope-card out-scope-card reveal-right">
            {/* Header with Mascot & Status Badge */}
            <div className="card-top-header">
              <div className="header-left">
                <div className="scope-icon-pill red-pill">
                  <XCircle size={18} className="status-icon" />
                  <span className="scope-headline">Ngoài phạm vi gói SEO</span>
                </div>
              </div>
              <div className="robot-badge-peek red-robot-badge">
                <img 
                  src="/robot-head.webp" 
                  alt="DUDI Robot Mascot Out Scope" 
                  className="robot-mini-img filter-grayscale"
                />
              </div>
            </div>

            {/* List of 5 Feature Rows */}
            <div className="scope-items-grid">
              {outScopeItems.map((item, idx) => {
                const IconC = item.icon;
                return (
                  <div key={idx} className="tech-item-row out-item">
                    <div className="item-icon-box red-box">
                      <IconC size={16} />
                    </div>
                    <div className="item-info">
                      <div className="item-title-row">
                        <h4 className="item-title">{item.title}</h4>
                        <span className="item-tag-badge red-badge">{item.tag}</span>
                      </div>
                      <p className="item-sub-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Commercial Policies Bottom Strip */}
        <div className="policies-compact-strip reveal-scale">
          {policies.map((pol, idx) => {
            const IconP = pol.icon;
            return (
              <div key={idx} className="policy-strip-item">
                <div className="policy-strip-icon-box">
                  <IconP size={16} />
                </div>
                <div className="policy-strip-content">
                  <span className="policy-strip-title">{pol.title}</span>
                  <span className="policy-strip-val">{pol.value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .scope-limits-light-section {
          background-color: var(--bg-alt);
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.04) 0%, transparent 40%),
            radial-gradient(circle at 90% 20%, rgba(239, 68, 68, 0.04) 0%, transparent 40%),
            linear-gradient(rgba(226, 232, 240, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226, 232, 240, 0.5) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 32px 32px, 32px 32px;
          padding-top: 36px !important;
          padding-bottom: 36px !important;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
        }

        .scope-main-container {
          max-width: 1180px;
        }

        .header-compact {
          margin-bottom: 16px !important;
        }

        /* 2-Column Symmetrical Grid */
        .scope-comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          margin-bottom: 14px;
        }

        @media (max-width: 900px) {
          .scope-comparison-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }

        /* Container Cards */
        .scope-card {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 16px 18px 14px 18px;
          position: relative;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .scope-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.07);
        }

        /* In-Scope Green Card */
        .in-scope-card {
          border: 1.5px solid #A7F3D0;
        }

        .in-scope-card:hover {
          border-color: #34D399;
        }

        /* Out-Scope Red Card */
        .out-scope-card {
          border: 1.5px solid #FECDD3;
        }

        .out-scope-card:hover {
          border-color: #F87171;
        }

        /* Card Top Header */
        .card-top-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .scope-icon-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 9999px;
          font-weight: 800;
          font-size: 0.88rem;
          letter-spacing: 0.01em;
        }

        .green-pill {
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          color: #047857;
        }

        .red-pill {
          background: #FFF1F2;
          border: 1px solid #FECDD3;
          color: #BE123C;
        }

        /* Robot Head Mini Badge */
        .robot-badge-peek {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .green-robot-badge {
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
        }

        .red-robot-badge {
          background: #FFF1F2;
          border: 1px solid #FECDD3;
        }

        .robot-mini-img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .filter-grayscale {
          filter: grayscale(40%) contrast(110%);
        }

        /* Items List */
        .scope-items-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .tech-item-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 9px 6px;
          border-radius: 8px;
          background: transparent;
          border-bottom: 1px solid rgba(226, 232, 240, 0.7);
          transition: all 0.2s ease;
        }

        .tech-item-row:last-child {
          border-bottom: none;
        }

        .in-item {
          background: transparent;
        }

        .in-item:hover {
          background: #F8FAFC;
          transform: translateX(3px);
        }

        .out-item {
          background: transparent;
        }

        .out-item:hover {
          background: #F8FAFC;
          transform: translateX(3px);
        }

        .item-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .green-box {
          background: #D1FAE5;
          color: #059669;
          border: 1px solid #A7F3D0;
        }

        .red-box {
          background: #FEE2E2;
          color: #DC2626;
          border: 1px solid #FECDD3;
        }

        .item-info {
          flex-grow: 1;
        }

        .item-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 2px;
        }

        .item-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--secondary);
          margin: 0;
          line-height: 1.25;
        }

        .item-tag-badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 6px;
          white-space: nowrap;
        }

        .green-badge {
          background: #D1FAE5;
          color: #065F46;
          border: 1px solid #A7F3D0;
        }

        .red-badge {
          background: #FEE2E2;
          color: #991B1B;
          border: 1px solid #FECDD3;
        }

        .item-sub-desc {
          font-size: 0.76rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.35;
        }

        /* Commercial Policies Bottom Strip */
        .policies-compact-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 14px;
          width: 100%;
        }

        @media (max-width: 992px) {
          .policies-compact-strip {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }

        .policy-strip-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          padding: 10px 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .policy-strip-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
          border-color: rgba(211, 47, 47, 0.3);
        }

        .policy-strip-icon-box {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: #FFF5F5;
          border: 1px solid #FECDD3;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .policy-strip-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .policy-strip-title {
          font-weight: 700;
          font-size: 0.82rem;
          color: var(--secondary);
          line-height: 1.25;
        }

        .policy-strip-val {
          color: var(--text-muted);
          font-size: 0.77rem;
          line-height: 1.35;
        }
      `}</style>
    </section>
  );
}

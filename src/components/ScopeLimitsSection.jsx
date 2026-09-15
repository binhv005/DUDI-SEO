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
    <section id="s09-gioi-han" className="section-wrapper scope-limits-tech-section overflow-hidden">
      <div className="container scope-main-container">
        {/* Compact Tech Header */}
        <div className="section-header-center header-compact">
          <div className="section-badge tech-badge">MINH BẠCH PHẠM VI</div>
          <h2 className="section-title tech-title">Giới hạn phạm vi & Điều khoản dịch vụ</h2>
          <p className="section-desc tech-desc">
            Minh bạch tuyệt đối giữa các hạng mục đã bao gồm trong gói và các dịch vụ báo giá riêng biệt.
          </p>
        </div>

        {/* Symmetrical 2-Column Comparison Layout */}
        <div className="scope-comparison-grid">
          {/* CỘT 1: BAO GỒM TRONG GÓI (IN-SCOPE) */}
          <div className="scope-card-tech in-scope-card reveal-left">
            {/* Header with Mascot & Status Badge */}
            <div className="card-top-header">
              <div className="header-left">
                <div className="scope-icon-pill green-pill">
                  <CheckCircle2 size={17} className="status-icon" />
                  <span className="scope-headline">Bao gồm trong gói SEO</span>
                </div>
                <span className="tech-system-tag green-tag">SYS // IN_SCOPE</span>
              </div>
              <div className="robot-badge-peek">
                <img 
                  src="/robot-head.webp" 
                  alt="DUDI Robot Mascot In Scope" 
                  className="robot-mini-img"
                />
              </div>
            </div>

            {/* List of 5 Concise Feature Rows */}
            <div className="scope-items-grid">
              {inScopeItems.map((item, idx) => {
                const IconC = item.icon;
                return (
                  <div key={idx} className="tech-item-row in-item">
                    <div className="item-icon-box green-box">
                      <IconC size={15} />
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
          <div className="scope-card-tech out-scope-card reveal-right">
            {/* Header with Mascot & Status Badge */}
            <div className="card-top-header">
              <div className="header-left">
                <div className="scope-icon-pill red-pill">
                  <XCircle size={17} className="status-icon" />
                  <span className="scope-headline">Ngoài phạm vi gói SEO</span>
                </div>
                <span className="tech-system-tag red-tag">SYS // EXCLUDED</span>
              </div>
              <div className="robot-badge-peek">
                <img 
                  src="/robot-head.webp" 
                  alt="DUDI Robot Mascot Out Scope" 
                  className="robot-mini-img filter-grayscale"
                />
              </div>
            </div>

            {/* List of 5 Concise Feature Rows */}
            <div className="scope-items-grid">
              {outScopeItems.map((item, idx) => {
                const IconC = item.icon;
                return (
                  <div key={idx} className="tech-item-row out-item">
                    <div className="item-icon-box red-box">
                      <IconC size={15} />
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

        {/* Compact Commercial Policies Bottom Strip */}
        <div className="policies-compact-strip reveal-scale">
          {policies.map((pol, idx) => {
            const IconP = pol.icon;
            return (
              <div key={idx} className="policy-strip-item">
                <IconP size={16} className="policy-strip-icon" />
                <span className="policy-strip-title">{pol.title}</span>
                <span className="policy-strip-val">{pol.value}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .scope-limits-tech-section {
          background-color: #0A0E17 !important;
          background-image: 
            radial-gradient(circle at 15% 30%, rgba(16, 185, 129, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 85% 30%, rgba(239, 68, 68, 0.1) 0%, transparent 45%),
            radial-gradient(circle at 50% 90%, rgba(239, 68, 68, 0.06) 0%, transparent 55%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 100% 100%, 32px 32px, 32px 32px;
          padding-top: 24px !important;
          padding-bottom: 24px !important;
          min-height: auto !important;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          position: relative;
        }

        .scope-main-container {
          max-width: 1180px;
        }

        .header-compact {
          margin-bottom: 12px !important;
        }

        .tech-badge {
          background: rgba(239, 68, 68, 0.15) !important;
          border: 1px solid rgba(239, 68, 68, 0.35) !important;
          color: #EF4444 !important;
          font-size: 0.74rem !important;
          padding: 2px 10px !important;
          margin-bottom: 4px !important;
        }

        .tech-title {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          color: #FFFFFF !important;
          font-size: 1.45rem !important;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
          margin-bottom: 3px !important;
          line-height: 1.2;
        }

        .tech-desc {
          color: #94A3B8 !important;
          font-size: 0.84rem !important;
          margin-bottom: 0 !important;
        }

        /* 2-Column Symmetrical Grid */
        .scope-comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 10px;
        }

        @media (max-width: 900px) {
          .scope-comparison-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }

        /* Tech Container Cards */
        .scope-card-tech {
          background: #0E1626;
          border-radius: 16px;
          padding: 12px 16px 10px 16px;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .scope-card-tech:hover {
          transform: translateY(-2px);
        }

        /* In-Scope Green Accent */
        .in-scope-card {
          border: 1px solid rgba(16, 185, 129, 0.28);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45), 0 0 16px rgba(16, 185, 129, 0.06);
        }

        .in-scope-card:hover {
          border-color: rgba(16, 185, 129, 0.5);
        }

        /* Out-Scope Red Accent */
        .out-scope-card {
          border: 1px solid rgba(239, 68, 68, 0.28);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45), 0 0 16px rgba(239, 68, 68, 0.06);
        }

        .out-scope-card:hover {
          border-color: rgba(239, 68, 68, 0.5);
        }

        /* Card Top Header */
        .card-top-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
          margin-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .scope-icon-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 10px;
          border-radius: 9999px;
          font-weight: 800;
          font-size: 0.82rem;
          letter-spacing: 0.01em;
        }

        .green-pill {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34D399;
        }

        .red-pill {
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #F87171;
        }

        .tech-system-tag {
          font-family: 'Chakra Petch', monospace;
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .green-tag {
          color: rgba(52, 211, 153, 0.7);
        }

        .red-tag {
          color: rgba(248, 113, 113, 0.7);
        }

        /* Robot Head Mini Badge */
        .robot-badge-peek {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
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
          gap: 6px;
        }

        .tech-item-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 10px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.04);
          transition: all 0.2s ease;
        }

        .tech-item-row:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(2px);
        }

        .item-icon-box {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .green-box {
          background: rgba(16, 185, 129, 0.12);
          color: #34D399;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .red-box {
          background: rgba(239, 68, 68, 0.12);
          color: #F87171;
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .item-info {
          flex-grow: 1;
        }

        .item-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        .item-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.2;
        }

        .item-tag-badge {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 4px;
          white-space: nowrap;
        }

        .green-badge {
          background: rgba(16, 185, 129, 0.18);
          color: #6EE7B7;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .red-badge {
          background: rgba(239, 68, 68, 0.18);
          color: #FCA5A5;
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .item-sub-desc {
          font-size: 0.68rem;
          color: #94A3B8;
          margin: 0;
          line-height: 1.25;
        }

        /* Compact Policies Bottom Strip */
        .policies-compact-strip {
          display: grid;
          grid-template-columns: 1.15fr 1fr 1fr;
          gap: 12px;
          background: #0E1626;
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 12px;
          padding: 8px 14px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
          width: 100%;
          box-sizing: border-box;
        }

        @media (max-width: 992px) {
          .policies-compact-strip {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 10px 12px;
          }
        }

        .policy-strip-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.73rem;
          min-width: 0;
          white-space: nowrap;
        }

        .policy-strip-icon {
          color: #EF4444;
          flex-shrink: 0;
        }

        .policy-strip-title {
          font-weight: 700;
          color: #FFFFFF;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .policy-strip-val {
          color: #94A3B8;
          min-width: 0;
          white-space: nowrap;
        }

        @media (max-width: 992px) {
          .policy-strip-item {
            flex-wrap: wrap;
            gap: 4px 6px;
            white-space: normal;
          }
          .policy-strip-title {
            white-space: normal;
          }
          .policy-strip-val {
            white-space: normal;
          }
          .tech-title {
            font-size: 1.25rem !important;
          }
          .scope-card-tech {
            padding: 12px 12px 10px 12px;
          }
          .item-title-row {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}

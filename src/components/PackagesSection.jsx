import React, { useState } from 'react';
import { Layers, Table2, CheckCircle2, User, Zap, Trophy, Target, ArrowRight } from 'lucide-react';

export default function PackagesSection({ onSelectPackage }) {
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'table'

  const packages = [
    {
      id: 'co-ban',
      name: 'Cơ bản',
      suitable: 'Website mới hoặc chưa có nền SEO',
      price: '4.000.000',
      unit: 'đ/tháng',
      oldPrice: '5.500.000 đ',
      icon: <User size={22} className="pkg-top-icon" />,
      featured: false,
      ctaText: 'Chọn gói Cơ bản',
      keywordsSpec: '5 đến 10 từ khóa ưu tiên',
      features: [
        '2 đến 4 bài viết chuẩn SEO/tháng (800-1200 từ)',
        'Tối ưu Title, meta, heading & sửa lỗi index chính',
        'Cài đặt Google Search Console & kết nối Analytics',
        'Báo cáo hiệu suất tóm tắt hàng tháng',
        'Thời hạn đề xuất: Tối thiểu 3 tháng'
      ]
    },
    {
      id: 'tieu-chuan',
      name: 'Tiêu chuẩn',
      suitable: 'Doanh nghiệp cần tăng traffic đều',
      price: '12.000.000',
      unit: 'đ/tháng',
      oldPrice: '15.000.000 đ',
      icon: <Zap size={22} className="pkg-top-icon" />,
      featured: true,
      badge: 'PHỔ BIẾN NHẤT',
      ctaText: 'Chọn gói Tiêu chuẩn',
      keywordsSpec: '10 đến 30 từ khóa ưu tiên',
      features: [
        '6 đến 10 bài viết chuẩn SEO/tháng (1000-1500 từ)',
        'Tối ưu trang đích, audit kỹ thuật & sửa theo hạn mức',
        'Phân tích đo lường chuyên sâu GSC & GA4',
        'Báo cáo chi tiết & họp chuyên môn định kỳ 30 phút',
        'Thời hạn đề xuất: Tối thiểu 6 tháng'
      ]
    },
    {
      id: 'cao-cap',
      name: 'Cao cấp',
      suitable: 'Thị trường cạnh tranh & nhiều dịch vụ',
      price: '25.000.000',
      unit: 'đ/tháng',
      oldPrice: '30.000.000 đ',
      icon: <Trophy size={22} className="pkg-top-icon" />,
      featured: false,
      ctaText: 'Chọn gói Cao cấp',
      keywordsSpec: '30 đến 60 từ khóa ưu tiên',
      features: [
        '10 đến 20 bài viết/tháng theo Content Brief sâu',
        'Audit cụm trang, tối ưu chuyển đổi & backlog kỹ thuật',
        'Theo dõi funnel chuyển đổi sự kiện GA4 & GSC sâu',
        'Báo cáo phân tích chuyên sâu & họp tư vấn 60 phút',
        'Thời hạn đề xuất: Tối thiểu 6 tháng'
      ]
    }
  ];

  const handleSelect = (pkgName) => {
    if (onSelectPackage) {
      onSelectPackage(pkgName);
    }
  };

  return (
    <section id="s06-bang-gia" className="section-wrapper bg-white">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">BẢNG GIÁ MINH BẠCH</div>
          <h2 className="section-title">3 Gói dịch vụ & Bảng so sánh phạm vi</h2>
          <p className="section-desc">
            Từ khóa là nhóm theo dõi ưu tiên. Số bài thực tế được chốt theo kế hoạch tháng.
          </p>

          {/* View Mode Toggle Switcher Centered */}
          <div className="tab-switcher" style={{ margin: '14px auto 0 auto', width: 'fit-content' }}>
            <button
              className={`tab-btn ${viewMode === 'cards' ? 'active' : ''}`}
              onClick={() => setViewMode('cards')}
            >
              <Layers size={16} />
              <span>3 Thẻ gói</span>
            </button>
            <button
              className={`tab-btn ${viewMode === 'table' ? 'active' : ''}`}
              onClick={() => setViewMode('table')}
            >
              <Table2 size={16} />
              <span>Bảng so sánh chi tiết</span>
            </button>
          </div>
        </div>

        {/* View 1: 3 Pricing Cards */}
        {viewMode === 'cards' && (
          <div className="ref-pricing-grid tab-fade-in">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`ref-price-card ${pkg.featured ? 'is-featured' : 'is-standard'}`}
              >
                {/* Top Badge for Featured Package */}
                {pkg.featured && pkg.badge && (
                  <div className="ref-featured-badge">
                    {pkg.badge}
                  </div>
                )}

                {/* Top Icon Badge */}
                <div className="ref-icon-wrap">
                  {pkg.icon}
                </div>

                {/* Package Name & Subtitle */}
                <h3 className="ref-pkg-name">{pkg.name}</h3>
                <p className="ref-pkg-sub">{pkg.suitable}</p>

                {/* Price Display */}
                <div className="ref-price-row">
                  <span className="ref-price-num">{pkg.price}</span>
                  <span className="ref-price-unit">{pkg.unit}</span>
                </div>

                {/* CTA Action Button directly under price */}
                <a
                  href="#s11-form"
                  onClick={() => handleSelect(pkg.name)}
                  className={`btn ref-cta-btn ${pkg.featured ? 'btn-featured-orange' : 'btn-outline-red'}`}
                >
                  <span>{pkg.ctaText}</span>
                </a>

                {/* Keyword / Scope Highlight Spec */}
                <div className="ref-spec-row">
                  <Target size={16} className="spec-icon" />
                  <span className="spec-text">{pkg.keywordsSpec}</span>
                </div>

                {/* Dotted Divider Line */}
                <div className="ref-dotted-divider" />

                {/* Feature Checklist */}
                <ul className="ref-feature-list">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="ref-feature-item">
                      <CheckCircle2 size={16} className="check-icon" />
                      <span className="feat-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* View 2: Full Comparison Table */}
        {viewMode === 'table' && (
          <div className="table-container tab-fade-in">
            <table className="custom-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Hạng mục</th>
                  <th style={{ width: '26%' }}>Cơ bản (4.000.000 đ/tháng)</th>
                  <th style={{ width: '26%', background: '#FEE2E2', color: '#991B1B' }}>Tiêu chuẩn (12.000.000 đ/tháng)</th>
                  <th style={{ width: '26%' }}>Cao cấp (25.000.000 đ/tháng)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="highlight-cell">Phù hợp</td>
                  <td>Website mới hoặc chưa có nền SEO</td>
                  <td style={{ background: '#FFFDFD' }}>Doanh nghiệp cần tăng traffic đều</td>
                  <td>Thị trường cạnh tranh & nhiều dịch vụ</td>
                </tr>
                <tr>
                  <td className="highlight-cell">Từ khóa ưu tiên</td>
                  <td>5 đến 10 từ khóa</td>
                  <td style={{ background: '#FFFDFD' }}>10 đến 30 từ khóa</td>
                  <td>30 đến 60 từ khóa</td>
                </tr>
                <tr>
                  <td className="highlight-cell">Nghiên cứu</td>
                  <td>Nhóm chủ đề cơ bản</td>
                  <td style={{ background: '#FFFDFD' }}>Ý định tìm kiếm & đối thủ</td>
                  <td>Chuyên sâu theo cụm chủ đề</td>
                </tr>
                <tr>
                  <td className="highlight-cell">Bài viết / tháng</td>
                  <td>2 đến 4 bài/tháng</td>
                  <td style={{ background: '#FFFDFD' }}>6 đến 10 bài/tháng</td>
                  <td>10 đến 20 bài/tháng</td>
                </tr>
                <tr>
                  <td className="highlight-cell">Độ dài tham khảo</td>
                  <td>800 đến 1200 từ</td>
                  <td style={{ background: '#FFFDFD' }}>1000 đến 1500 từ</td>
                  <td>Theo brief & mục đích tìm kiếm</td>
                </tr>
                <tr>
                  <td className="highlight-cell">On-page</td>
                  <td>Title, meta, heading & liên kết</td>
                  <td style={{ background: '#FFFDFD' }}>Tối ưu trang đích & nội dung</td>
                  <td>Audit cụm trang & chuyển đổi</td>
                </tr>
                <tr>
                  <td className="highlight-cell">SEO kỹ thuật</td>
                  <td>Kiểm tra lỗi index chính</td>
                  <td style={{ background: '#FFFDFD' }}>Audit cơ bản & sửa trong hạn mức</td>
                  <td>Audit nâng cao & backlog kỹ thuật</td>
                </tr>
                <tr>
                  <td className="highlight-cell">Backlink</td>
                  <td>Không</td>
                  <td style={{ background: '#FFFDFD' }}>Đề xuất & duyệt từng nguồn</td>
                  <td>Kế hoạch off-page riêng, duyệt nguồn</td>
                </tr>
                <tr>
                  <td className="highlight-cell">Search Console & GA4</td>
                  <td>Thiết lập GSC & gắn GA</td>
                  <td style={{ background: '#FFFDFD' }}>Thiết lập, theo dõi & báo cáo</td>
                  <td>Theo dõi, phân tích sâu, funnel sự kiện</td>
                </tr>
                <tr>
                  <td className="highlight-cell">Báo cáo & Họp</td>
                  <td>Tóm tắt tháng</td>
                  <td style={{ background: '#FFFDFD' }}>Báo cáo & họp 30 phút</td>
                  <td>Báo cáo, phân tích & họp 60 phút</td>
                </tr>
                <tr>
                  <td className="highlight-cell">Thời hạn đề xuất</td>
                  <td>Tối thiểu 3 tháng</td>
                  <td style={{ background: '#FFFDFD' }}>Tối thiểu 6 tháng</td>
                  <td>Tối thiểu 6 tháng</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Concise Disclaimer Box */}
        <div className="doc-notes-strip">
          <span className="doc-notes-tag">Ngoài phạm vi:</span>
          <span>Ngân sách quảng cáo, phí backlink/báo chí ngoài, dịch thuật, chụp ảnh, tính năng mới web, hosting & cam kết thứ hạng/doanh thu.</span>
        </div>
      </div>

      <style>{`
        .pkg-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .mb-0 {
          margin-bottom: 0 !important;
        }

        .tab-switcher {
          display: flex;
          background: #F1F5F9;
          padding: 4px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          gap: 4px;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border: none;
          background: transparent;
          color: var(--text-muted);
          font-weight: 700;
          font-size: 0.82rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .tab-btn.active {
          background: #FFFFFF;
          color: var(--primary);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .tab-fade-in {
          animation: tabFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes tabFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* 3-Card Reference Grid */
        .ref-pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-bottom: 20px;
          align-items: stretch;
        }

        @media (max-width: 992px) {
          .ref-pricing-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Individual Card Container */
        .ref-price-card {
          position: relative;
          border-radius: 20px;
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }

        /* Standard Red Accent Cards (Cơ bản & Cao cấp) */
        .ref-price-card.is-standard {
          background: #FFFFFF;
          border: 1px solid #FECDD3;
          box-shadow: 0 4px 20px rgba(211, 47, 47, 0.06);
        }

        .ref-price-card.is-standard:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(211, 47, 47, 0.14);
          border-color: #EF4444;
        }

        .ref-price-card.is-standard .ref-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #FEE2E2;
          color: #DC2626;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.18);
        }

        .ref-price-card.is-standard .ref-pkg-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 4px;
          line-height: 1.25;
        }

        .ref-price-card.is-standard .ref-pkg-sub {
          font-size: 0.82rem;
          color: #64748B;
          margin-bottom: 14px;
          line-height: 1.4;
        }

        .ref-price-card.is-standard .ref-price-num {
          font-size: 1.85rem;
          font-weight: 900;
          color: #D32F2F;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .ref-price-card.is-standard .ref-price-unit {
          font-size: 0.85rem;
          color: #DC2626;
          font-weight: 600;
          margin-left: 5px;
        }

        .ref-price-card.is-standard .spec-icon {
          color: #DC2626;
        }

        .ref-price-card.is-standard .spec-text {
          color: #1E293B;
          font-weight: 700;
        }

        .ref-price-card.is-standard .ref-dotted-divider {
          border-top: 1px dashed #FECDD3;
        }

        .ref-price-card.is-standard .check-icon {
          color: #DC2626;
        }

        .ref-price-card.is-standard .feat-text {
          color: #334155;
        }

        /* Middle Featured Dark Navy Card */
        .ref-price-card.is-featured {
          background: linear-gradient(180deg, #182335 0%, #0E1724 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.4);
          color: #FFFFFF;
        }

        .ref-price-card.is-featured:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.5);
        }

        .ref-featured-badge {
          position: absolute;
          top: 0;
          right: 18px;
          background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
          color: #FFFFFF;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          padding: 4px 10px;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          box-shadow: 0 3px 10px rgba(249, 115, 22, 0.4);
        }

        .ref-price-card.is-featured .ref-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, #F97316 0%, #EF4444 100%);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          box-shadow: 0 3px 10px rgba(249, 115, 22, 0.4);
        }

        .ref-price-card.is-featured .ref-pkg-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 4px;
          line-height: 1.25;
        }

        .ref-price-card.is-featured .ref-pkg-sub {
          font-size: 0.82rem;
          color: #94A3B8;
          margin-bottom: 14px;
          line-height: 1.4;
        }

        .ref-price-card.is-featured .ref-price-num {
          font-size: 1.85rem;
          font-weight: 900;
          color: #FFFFFF;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .ref-price-card.is-featured .ref-price-unit {
          font-size: 0.85rem;
          color: #94A3B8;
          font-weight: 600;
          margin-left: 5px;
        }

        .ref-price-card.is-featured .spec-icon {
          color: #F97316;
        }

        .ref-price-card.is-featured .spec-text {
          color: #FFFFFF;
          font-weight: 700;
        }

        .ref-price-card.is-featured .ref-dotted-divider {
          border-top: 1px dashed rgba(255, 255, 255, 0.15);
        }

        .ref-price-card.is-featured .check-icon {
          color: #F97316;
        }

        .ref-price-card.is-featured .feat-text {
          color: #E2E8F0;
        }

        /* Common Price and Button Layout */
        .ref-price-row {
          display: flex;
          align-items: baseline;
          margin-bottom: 14px;
        }

        .ref-cta-btn {
          width: 100%;
          padding: 10px 14px;
          font-size: 0.88rem;
          border-radius: 10px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          margin-bottom: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        /* Outline Red CTA for Standard Cards */
        .btn-outline-red {
          border: 1.5px solid #D32F2F;
          background: #FFFFFF;
          color: #D32F2F;
          font-weight: 700;
        }

        .btn-outline-red:hover {
          background: #D32F2F;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 5px 16px rgba(211, 47, 47, 0.3);
        }

        /* Featured Orange/Red CTA */
        .btn-featured-orange {
          border: none;
          background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
          color: #FFFFFF;
          font-weight: 800;
          box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);
        }

        .btn-featured-orange:hover {
          background: linear-gradient(135deg, #FB923C 0%, #F97316 100%);
          box-shadow: 0 6px 18px rgba(249, 115, 22, 0.5);
          transform: translateY(-2px);
          color: #FFFFFF;
        }

        .ref-spec-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          margin-bottom: 14px;
        }

        .ref-dotted-divider {
          width: 100%;
          margin-bottom: 14px;
        }

        /* Feature List */
        .ref-feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1;
        }

        .ref-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.82rem;
          line-height: 1.45;
        }

        .ref-feature-item .check-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Comparison Table View */
        .table-container {
          width: 100%;
          overflow-x: auto;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          background-color: #FFFFFF;
          box-shadow: var(--shadow-sm);
          margin-bottom: 16px;
        }

        .custom-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.84rem;
        }

        .custom-table th {
          background-color: #F8FAFC;
          color: var(--secondary);
          font-weight: 800;
          padding: 10px 14px;
          border-bottom: 2px solid var(--border-subtle);
          white-space: nowrap;
          font-size: 0.86rem;
        }

        .custom-table td {
          padding: 9px 14px;
          border-bottom: 1px solid var(--border-subtle);
          color: var(--text-muted);
          vertical-align: middle;
        }

        .custom-table tr:hover td {
          background-color: #F8FAFC;
        }

        .doc-notes-strip {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #F8FAFC;
          padding: 10px 16px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin-top: 14px;
        }

        .doc-notes-tag {
          font-weight: 700;
          color: #DC2626;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
}

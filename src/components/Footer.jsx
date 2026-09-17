import React from 'react';
import { Phone, Mail, MapPin, FileText, ArrowUp, ShieldCheck, MessageSquare } from 'lucide-react';

export default function Footer({ onNotify }) {
  const phoneNumber = '0909 163 821';
  const rawPhone = '0909163821';

  const handlePhoneClick = (e) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    if (isMobile) {
      window.location.href = `tel:${rawPhone}`;
    } else {
      e.preventDefault();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(phoneNumber).then(() => {
          if (onNotify) onNotify(`Đã sao chép số điện thoại ${phoneNumber} vào bộ nhớ tạm!`, 'copy');
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="s13-footer" className="sample-footer-root">
      <div className="container footer-content-container">
        <div className="sample-footer-grid">
          {/* Cột 1: Thông tin doanh nghiệp */}
          <div className="sample-footer-col col-info">
            <div className="sample-brand-row">
              <img src="/logo.webp" alt="DUDI Software" className="sample-footer-logo" />
              <span className="sample-brand-name">
                DUDI <span className="sample-brand-red">Software</span>
              </span>
            </div>

            <h4 className="sample-company-name">Công ty TNHH Giải Pháp Phần Mềm DUDI</h4>
            
            <p className="sample-company-desc">
              Đơn vị cung cấp giải pháp thiết kế website giới thiệu doanh nghiệp chuẩn mực, tối ưu trải nghiệm người dùng và chuyển giao công nghệ toàn diện.
            </p>

            <div className="sample-meta-list">
              <div className="sample-meta-row">
                <FileText size={16} className="sample-meta-icon" />
                <span>Mã số thuế: <strong>0319641544</strong></span>
              </div>
              <div className="sample-meta-row">
                <MapPin size={16} className="sample-meta-icon" />
                <span>Địa chỉ: 49/2 Đường 14, Phường Thủ Đức, Thành phố Hồ Chí Minh</span>
              </div>
            </div>
          </div>

          {/* Cột 2: LIÊN HỆ TRỰC TIẾP */}
          <div className="sample-footer-col col-contact">
            <h3 className="sample-col-heading">LIÊN HỆ TRỰC TIẾP</h3>

            <div className="sample-contact-cards">
              {/* Hotline */}
              <button onClick={handlePhoneClick} className="sample-contact-card" title="Hotline 0909 163 821">
                <div className="sample-icon-box">
                  <Phone size={18} />
                </div>
                <div className="sample-contact-text">
                  <span>Hotline: <strong>{phoneNumber}</strong></span>
                </div>
              </button>

              {/* Email */}
              <a href="mailto:contact@dudisoftware.com" className="sample-contact-card" title="Email contact@dudisoftware.com">
                <div className="sample-icon-box">
                  <Mail size={18} />
                </div>
                <div className="sample-contact-text">
                  <span>contact@dudisoftware.com</span>
                </div>
              </a>

              {/* Zalo OA */}
              <a 
                href={`https://zalo.me/${rawPhone}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sample-contact-card"
                title="Zalo OA 0909 163 821"
              >
                <div className="sample-icon-box">
                  <MessageSquare size={18} />
                </div>
                <div className="sample-contact-text">
                  <span>Zalo OA: <strong>{phoneNumber}</strong></span>
                </div>
              </a>
            </div>
          </div>

          {/* Cột 3: ĐIỀU KHOẢN & MINH BẠCH */}
          <div className="sample-footer-col col-terms">
            <h3 className="sample-col-heading">ĐIỀU KHOẢN & MINH BẠCH</h3>

            <ul className="sample-terms-ul">
              <li>
                <span className="sample-bullet">•</span>
                <span>Minh bạch phạm vi theo hợp đồng</span>
              </li>
              <li>
                <span className="sample-bullet">•</span>
                <span>Nghiệm thu theo từng mốc kỹ thuật</span>
              </li>
              <li>
                <span className="sample-bullet">•</span>
                <span>Hỗ trợ xử lý lỗi phát sinh sau bàn giao</span>
              </li>
              <li>
                <span className="sample-bullet">•</span>
                <span>Bảo mật thông tin khách hàng</span>
              </li>
            </ul>

            <button onClick={scrollToTop} className="sample-backtotop-btn">
              <ArrowUp size={16} />
              <span>Về đầu trang</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="sample-footer-bottom">
          <div className="sample-copyright">
            Copyright © 2026 DUDI Software. All rights reserved.
          </div>
          <div className="sample-verified">
            <ShieldCheck size={18} color="#10B981" />
            <span>Thông tin đăng ký kinh doanh chính thức</span>
          </div>
        </div>
      </div>

      <style>{`
        .sample-footer-root {
          background-color: #0B0E14;
          color: #E2E8F0;
          padding: 36px 24px 18px 24px;
          border-top: 1px solid #1E293B;
          font-family: var(--font-main);
        }

        .footer-content-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .sample-footer-grid {
          display: grid;
          grid-template-columns: 1.35fr 1.05fr 1fr;
          gap: 32px;
          margin-bottom: 24px;
        }

        @media (max-width: 992px) {
          .sample-footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        .sample-brand-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .sample-footer-logo {
          height: 32px;
          width: auto;
          object-fit: contain;
          border-radius: 0;
        }

        .sample-brand-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.5px;
        }

        .sample-brand-red {
          color: #EF4444;
        }

        .sample-company-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 8px;
        }

        .sample-company-desc {
          font-size: 0.84rem;
          color: #94A3B8;
          line-height: 1.45;
          margin-bottom: 14px;
          max-width: 440px;
        }

        .sample-meta-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.82rem;
          color: #CBD5E1;
        }

        .sample-meta-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.4;
        }

        .sample-meta-icon {
          color: #EF4444;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .sample-col-heading {
          font-size: 0.9rem;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: 0.5px;
          margin-bottom: 14px;
        }

        .sample-contact-cards {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sample-contact-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-md);
          color: #F1F5F9;
          text-decoration: none;
          cursor: pointer;
          font-size: 0.85rem;
          font-family: inherit;
          transition: all 0.2s ease;
          width: 100%;
          text-align: left;
        }

        .sample-contact-card:hover {
          background: rgba(239, 68, 68, 0.08);
          border-color: rgba(239, 68, 68, 0.3);
          transform: translateX(3px);
        }

        .sample-icon-box {
          width: 32px;
          height: 32px;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.25);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #EF4444;
          flex-shrink: 0;
        }

        .sample-contact-text strong {
          color: #FFFFFF;
          font-weight: 700;
        }

        .sample-terms-ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.84rem;
          color: #CBD5E1;
          margin-bottom: 16px;
        }

        .sample-terms-ul li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.4;
        }

        .sample-bullet {
          color: #94A3B8;
          font-size: 1rem;
          line-height: 1;
        }

        .sample-backtotop-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #1E2530;
          color: #FFFFFF;
          border: 1px solid #334155;
          padding: 8px 14px;
          border-radius: var(--radius-md);
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
        }

        .sample-backtotop-btn:hover {
          background: #2A3444;
          border-color: #475569;
          transform: translateY(-2px);
        }

        .sample-footer-bottom {
          padding-top: 16px;
          border-top: 1px solid #1E293B;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.82rem;
          color: #94A3B8;
        }

        .sample-verified {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #CBD5E1;
          font-weight: 500;
        }
      `}</style>
    </footer>
  );
}

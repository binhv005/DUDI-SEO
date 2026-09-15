import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="s02-hero" className="hero-banner-section">
      <div className="container hero-inner-container">
        <div className="hero-left-content">
          {/* Futuristic Sci-Fi Typography (PANDORA Style) on a single line */}
          <div className="pandora-header-box">
            <div className="pandora-brand-title">
              DUDI <span className="pandora-red-text">SOFTWARE</span>
            </div>
            <div className="pandora-seo-line">
              <span className="pandora-glow-badge">SEO</span>
              <span className="pandora-sub-text">WEBSITE</span>
            </div>
          </div>

          <h1 className="hero-main-desc">
            Dịch vụ SEO website theo tháng chuẩn kỹ thuật
          </h1>

          <p className="hero-packages-sub">
            Gói Cơ bản • Tiêu chuẩn • Cao cấp (Từ 4.000.000 đ/tháng)
          </p>

          {/* Action buttons */}
          <div className="hero-cta-group">
            <a href="#s11-form" className="btn btn-primary btn-hero-main">
              <span>Gửi website để nhận đánh giá SEO</span>
              <ArrowRight size={18} />
            </a>
            <a href="#s06-bang-gia" className="btn btn-hero-secondary">
              <span>Xem 3 gói dịch vụ</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero-banner-section {
          position: relative;
          min-height: calc(100vh - 68px);
          display: flex;
          align-items: center;
          background-image: url('/hero-bg.webp');
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          overflow: hidden;
          padding: 32px 24px;
          box-sizing: border-box;
        }

        .hero-inner-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }

        .hero-left-content {
          position: relative;
          max-width: 650px;
          padding: 16px 12px;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        /* Hiệu ứng loang ánh sáng mờ tự nhiên phía sau chữ */
        .hero-left-content::before {
          content: '';
          position: absolute;
          top: -25%;
          left: -25%;
          width: 150%;
          height: 150%;
          background: radial-gradient(ellipse at 40% 50%, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.65) 42%, rgba(255, 255, 255, 0.15) 72%, transparent 100%);
          filter: blur(28px);
          z-index: -1;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .hero-left-content {
            padding: 16px 0;
            max-width: 100%;
          }
          .hero-left-content::before {
            width: 160%;
            height: 160%;
            background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.2) 80%, transparent 100%);
            filter: blur(20px);
          }
        }

        /* Pandora Style Sci-Fi Typography */
        .pandora-header-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .pandora-brand-title {
          font-family: 'Orbitron', 'Audiowide', 'Michroma', 'Syncopate', sans-serif;
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0F172A;
          line-height: 1.2;
          white-space: nowrap;
          text-shadow: 0 0 16px rgba(255, 255, 255, 0.9), 0 2px 4px rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          gap: 10px;
        }

        .pandora-red-text {
          color: #D32F2F;
          text-shadow: 0 0 16px rgba(239, 68, 68, 0.35), 0 0 8px rgba(255, 255, 255, 0.8);
        }

        .pandora-seo-line {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pandora-glow-badge {
          font-family: 'Orbitron', 'Audiowide', sans-serif;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          background: linear-gradient(135deg, #EF4444 0%, #B91C1C 100%);
          color: #FFFFFF;
          padding: 3px 12px;
          border-radius: 6px;
          box-shadow: 0 4px 14px rgba(239, 68, 68, 0.4);
        }

        .pandora-sub-text {
          font-family: 'Orbitron', 'Audiowide', sans-serif;
          font-size: clamp(1.1rem, 1.8vw, 1.45rem);
          font-weight: 800;
          letter-spacing: 0.22em;
          color: #1E293B;
          text-shadow: 0 0 14px rgba(255, 255, 255, 0.9);
        }

        .hero-main-desc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.1rem, 1.5vw, 1.3rem);
          font-weight: 700;
          color: #0F172A;
          line-height: 1.35;
          margin-bottom: 6px;
          text-shadow: 0 0 14px rgba(255, 255, 255, 0.95), 0 1px 2px rgba(0, 0, 0, 0.08);
        }

        .hero-packages-sub {
          font-size: 0.92rem;
          font-weight: 600;
          color: #334155;
          margin-bottom: 18px;
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .btn-hero-main {
          padding: 13px 26px;
          font-size: clamp(0.82rem, 1.2vw, 0.95rem);
          font-weight: 700;
          border-radius: 10px;
          box-shadow: 0 6px 18px rgba(211, 47, 47, 0.35);
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .btn-hero-main span {
          white-space: nowrap;
        }

        .btn-hero-secondary {
          padding: 13px 22px;
          font-size: 0.92rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          color: #0F172A;
          border: 1.5px solid rgba(203, 213, 225, 0.8);
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          transition: all 0.2s ease;
        }

        .btn-hero-secondary:hover {
          border-color: #D32F2F;
          color: #D32F2F;
          transform: translateY(-1px);
        }

        @media (max-width: 640px) {
          .hero-banner-section {
            padding: 40px 16px;
            min-height: auto;
          }
          .pandora-brand-title {
            font-size: 1.25rem;
            letter-spacing: 0.1em;
            gap: 6px;
          }
          .pandora-sub-text {
            font-size: 1rem;
            letter-spacing: 0.12em;
          }
          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-hero-main, .btn-hero-secondary {
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

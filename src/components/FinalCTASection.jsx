import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function FinalCTASection({ onNotify }) {
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

  return (
    <section id="s12-cta" className="section-wrapper bg-alt cta-section-container">
      <div className="container">
        <div className="payrot-cta-card reveal-scale">
          {/* Top Notch with Mascot Robot Head */}
          <div className="notch-wrapper">
            <div className="notch-circle-cutout">
              <div className="mascot-glow-aura" />
              <img 
                src="/robot-head.webp" 
                alt="DUDI Software Robot Mascot" 
                className="notch-robot-mascot"
              />
            </div>
          </div>

          {/* Centered Content Area */}
          <div className="payrot-cta-body">
            <h2 className="payrot-cta-heading">
              GỬI WEBSITE ĐỂ NHẬN ĐÁNH GIÁ <span className="payrot-red-text">SEO</span>
            </h2>

            <p className="payrot-cta-desc">
              DUDI sẽ liên hệ trực tiếp để xác nhận mục tiêu kinh doanh và gửi bản phân tích kỹ thuật chi tiết trước khi triển khai.
            </p>

            {/* Buttons Group */}
            <div className="payrot-cta-actions">
              <a href="#s11-form" className="btn btn-primary payrot-btn-main">
                <span>Gửi website để nhận đánh giá SEO</span>
                <ArrowRight size={16} />
              </a>

              <button onClick={handlePhoneClick} className="btn payrot-btn-phone" title="Gọi Hotline hoặc Sao chép số">
                <Phone size={16} className="phone-icon-accent" />
                <span>{phoneNumber}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-section-container {
          padding-top: 60px !important;
          padding-bottom: 44px !important;
        }

        .payrot-cta-card {
          position: relative;
          background: linear-gradient(180deg, #10243B 0%, #081320 100%);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 32px;
          margin-top: 80px;
          padding: 85px 44px 44px 44px;
          text-align: center;
          box-shadow: 0 24px 50px -10px rgba(8, 19, 32, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
          overflow: visible;
          max-width: 1040px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Top Notch Component with Deep U-Scoop Cutout */
        .notch-wrapper {
          position: absolute;
          top: -85px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .notch-circle-cutout {
          position: relative;
          width: 210px;
          height: 145px;
          background: #F8FAFC;
          border-bottom-left-radius: 105px;
          border-bottom-right-radius: 105px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 0;
        }

        /* Mascot Robot Head & Glowing Aura */
        .mascot-glow-aura {
          position: absolute;
          width: 170px;
          height: 170px;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, rgba(56, 189, 248, 0.25) 50%, transparent 70%);
          filter: blur(18px);
          z-index: 1;
          pointer-events: none;
        }

        .notch-robot-mascot {
          position: relative;
          z-index: 2;
          width: 175px;
          height: 175px;
          object-fit: contain;
          margin-top: -45px;
          filter: drop-shadow(0 14px 26px rgba(0, 0, 0, 0.55));
          animation: mascot-float 3.5s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .notch-robot-mascot:hover {
          transform: scale(1.06) rotate(2deg);
        }

        @keyframes mascot-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        /* Body Content */
        .payrot-cta-body {
          max-width: 840px;
          margin: 0 auto;
        }

        .payrot-cta-heading {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.35rem, 2.3vw, 1.85rem);
          font-weight: 800;
          letter-spacing: 0.03em;
          color: #FFFFFF;
          margin-bottom: 12px;
          line-height: 1.28;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
        }

        .payrot-red-text {
          color: #EF4444;
          text-shadow: 0 0 18px rgba(239, 68, 68, 0.5);
        }

        .payrot-cta-desc {
          font-size: 0.88rem;
          color: #94A3B8;
          line-height: 1.55;
          margin-bottom: 24px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }

        .payrot-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .payrot-btn-main {
          padding: 11px 26px;
          font-size: clamp(0.78rem, 1.2vw, 0.9rem);
          font-weight: 700;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 18px rgba(239, 68, 68, 0.45);
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .payrot-btn-main span {
          white-space: nowrap;
        }

        .payrot-btn-phone {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 24px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-full);
          color: #F8FAFC;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .payrot-btn-phone:hover {
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(239, 68, 68, 0.6);
          color: #FFFFFF;
          transform: translateY(-1px);
        }

        .phone-icon-accent {
          color: #EF4444;
        }

        @media (max-width: 640px) {
          .payrot-cta-card {
            padding: 60px 18px 28px 18px;
            margin-top: 50px;
          }
          .notch-circle-cutout {
            width: 160px;
            height: 110px;
            border-bottom-left-radius: 80px;
            border-bottom-right-radius: 80px;
          }
          .notch-wrapper {
            top: -65px;
          }
          .notch-robot-mascot {
            width: 130px;
            height: 130px;
            margin-top: -30px;
          }
          .payrot-cta-actions {
            flex-direction: column;
            width: 100%;
          }
          .payrot-btn-main, .payrot-btn-phone {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

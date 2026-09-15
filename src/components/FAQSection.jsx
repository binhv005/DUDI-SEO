import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

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
    <section id="s10-faq" className="section-wrapper faq-section overflow-hidden">
      {/* Cyber Circuit Lines Background Overlay - Full Bleed */}
      <div className="circuit-bg-container" aria-hidden="true">
        <svg
          className="circuit-svg"
          viewBox="0 0 1000 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="circuitGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="lineGradRed1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#F87171" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="lineGradRed2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#EF4444" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#991B1B" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Faint Background Circuit Traces */}
          <path d="M 40 0 V 130 H 170 V 270 H 70 V 430 H 210 V 600" stroke="rgba(239, 68, 68, 0.16)" strokeWidth="1.2" />
          <path d="M 210 0 V 90 H 330 V 230 H 250 V 390 H 410 V 600" stroke="rgba(239, 68, 68, 0.16)" strokeWidth="1.2" />
          <path d="M 0 170 H 130 V 310 H 270 V 130 H 440 V 290 H 590" stroke="rgba(239, 68, 68, 0.16)" strokeWidth="1.2" />
          <path d="M 590 0 V 140 H 740 V 70 H 870 V 270 H 970" stroke="rgba(239, 68, 68, 0.18)" strokeWidth="1.2" />
          <path d="M 740 600 V 440 H 610 V 350 H 770 V 210 H 910 V 470 H 1000" stroke="rgba(239, 68, 68, 0.16)" strokeWidth="1.2" />
          <path d="M 390 600 V 470 H 510 V 330 H 690 V 490 H 850 V 600" stroke="rgba(239, 68, 68, 0.16)" strokeWidth="1.2" />

          {/* Prominent Glowing Circuit Traces (Matching User Sample) */}
          <path d="M 80 0 V 100 H 170 V 250 H 50 V 370 H 160 V 510 H 270" stroke="url(#lineGradRed1)" strokeWidth="2.2" filter="url(#circuitGlow)" className="circuit-trace-pulse-1" />
          <path d="M 170 250 H 300 V 140 H 430 V 280 H 360 V 450 H 510" stroke="url(#lineGradRed1)" strokeWidth="1.8" filter="url(#circuitGlow)" />
          <path d="M 0 330 H 120 V 470 H 240 V 550 H 390 V 600" stroke="url(#lineGradRed2)" strokeWidth="2" filter="url(#circuitGlow)" className="circuit-trace-pulse-2" />

          {/* Right & Center Interconnected Tech Lines */}
          <path d="M 530 0 V 120 H 690 V 50 H 830 V 190 H 750 V 330 H 900 V 220 H 1000" stroke="url(#lineGradRed1)" strokeWidth="2.2" filter="url(#circuitGlow)" className="circuit-trace-pulse-3" />
          <path d="M 690 120 V 270 H 570 V 430 H 730 V 530 H 620 V 600" stroke="url(#lineGradRed2)" strokeWidth="1.8" filter="url(#circuitGlow)" />
          <path d="M 830 190 V 370 H 950 V 520 H 790 V 600" stroke="url(#lineGradRed1)" strokeWidth="2" filter="url(#circuitGlow)" className="circuit-trace-pulse-1" />
          <path d="M 460 190 H 600 V 100 H 730" stroke="url(#lineGradRed1)" strokeWidth="1.8" />
          <path d="M 330 390 H 490 V 490 H 650 V 390 H 800" stroke="url(#lineGradRed2)" strokeWidth="1.6" />

          {/* Glowing High-Tech Junction Nodes / Terminals */}
          <circle cx="80" cy="100" r="4" fill="#EF4444" filter="url(#circuitGlow)" />
          <circle cx="170" cy="250" r="4" fill="#FFFFFF" filter="url(#circuitGlow)" />
          <circle cx="300" cy="140" r="3.5" fill="#EF4444" />
          <circle cx="430" cy="280" r="4" fill="#F87171" filter="url(#circuitGlow)" />
          <circle cx="120" cy="470" r="3.5" fill="#EF4444" />
          <circle cx="240" cy="550" r="4" fill="#FFFFFF" filter="url(#circuitGlow)" />
          <circle cx="530" cy="120" r="3.5" fill="#EF4444" />
          <circle cx="690" cy="120" r="4" fill="#F87171" filter="url(#circuitGlow)" />
          <circle cx="830" cy="190" r="4.5" fill="#FFFFFF" filter="url(#circuitGlow)" />
          <circle cx="750" cy="330" r="3.5" fill="#EF4444" />
          <circle cx="900" cy="220" r="4" fill="#F87171" filter="url(#circuitGlow)" />
          <circle cx="570" cy="430" r="4" fill="#FFFFFF" filter="url(#circuitGlow)" />
          <circle cx="730" cy="530" r="3.5" fill="#EF4444" />
          <circle cx="950" cy="520" r="4" fill="#EF4444" filter="url(#circuitGlow)" />

          {/* Tech Sparks / Data Nodes */}
          <circle cx="150" cy="130" r="2" fill="#EF4444" opacity="0.85" />
          <circle cx="230" cy="350" r="2" fill="#FFFFFF" opacity="0.95" />
          <circle cx="370" cy="210" r="2" fill="#F87171" opacity="0.85" />
          <circle cx="490" cy="430" r="2" fill="#EF4444" opacity="0.8" />
          <circle cx="650" cy="230" r="2" fill="#FFFFFF" opacity="0.95" />
          <circle cx="790" cy="130" r="2" fill="#EF4444" opacity="0.85" />
          <circle cx="870" cy="450" r="2" fill="#F87171" opacity="0.85" />
        </svg>
      </div>

      <div className="container relative-z">
        <div className="section-header-center">
          <div className="section-badge">HỖ TRỢ & TƯ VẤN</div>
          <h2 className="section-title">Câu hỏi thường gặp (FAQ)</h2>
          <p className="section-desc">
            Giải đáp minh bạch mọi thắc mắc về thời gian, thứ hạng, nội dung và chi phí trước khi bắt đầu.
          </p>
        </div>

        <div className="faq-main-layout reveal-scale">
          {/* Mascot Column - Peeking and Holding the White Card */}
          <div className="faq-mascot-wrapper">
            <div className="mascot-ambient-aura-red" />
            <img 
              src="/mascot-faq.webp" 
              alt="DUDI Robot Mascot FAQ" 
              className="faq-mascot-img"
            />
          </div>

          {/* FAQ Accordion List Column - White Card Held by Mascot */}
          <div className="faq-content-wrapper">
            <div className="faq-white-box">
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
      </div>

      <style>{`
        .faq-section {
          background-color: #120306 !important;
          background-image: 
            radial-gradient(circle at 75% 20%, rgba(239, 68, 68, 0.3) 0%, transparent 55%),
            radial-gradient(circle at 20% 70%, rgba(220, 38, 38, 0.24) 0%, transparent 50%),
            radial-gradient(circle at 50% 90%, rgba(185, 28, 28, 0.18) 0%, transparent 60%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 100% 100%, 36px 36px, 36px 36px;
          padding-top: 54px !important;
          padding-bottom: 54px !important;
          position: relative;
          border-bottom: 1px solid rgba(239, 68, 68, 0.2);
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .faq-section .section-badge {
          background: rgba(239, 68, 68, 0.15) !important;
          border-color: rgba(239, 68, 68, 0.35) !important;
          color: #EF4444 !important;
        }

        .faq-section .section-title {
          color: #FFFFFF !important;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
        }

        .faq-section .section-desc {
          color: #94A3B8 !important;
        }

        /* Cyber Circuit Background Layer */
        .circuit-bg-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
          opacity: 0.95;
        }

        .circuit-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Pulse Animations on Traces */
        .circuit-trace-pulse-1 {
          stroke-dasharray: 100 240;
          animation: circuitFlow1 6.5s linear infinite;
        }

        .circuit-trace-pulse-2 {
          stroke-dasharray: 80 200;
          animation: circuitFlow2 8s linear infinite;
        }

        .circuit-trace-pulse-3 {
          stroke-dasharray: 120 280;
          animation: circuitFlow1 7.5s linear infinite reverse;
        }

        @keyframes circuitFlow1 {
          0% {
            stroke-dashoffset: 600;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes circuitFlow2 {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 550;
          }
        }

        .faq-main-layout {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
        }

        /* Mascot Column Holding White Card */
        .faq-mascot-wrapper {
          flex: 0 0 280px;
          position: relative;
          z-index: 3;
          margin-right: -24px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .mascot-ambient-aura-red {
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, rgba(220, 38, 38, 0.18) 50%, transparent 70%);
          filter: blur(28px);
          pointer-events: none;
        }

        .faq-mascot-img {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 280px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 14px 28px rgba(0, 0, 0, 0.45));
          animation: mascotHoldFloat 4.5s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .faq-mascot-img:hover {
          transform: scale(1.02);
        }

        @keyframes mascotHoldFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        /* White Card Enclosing Questions */
        .faq-content-wrapper {
          flex: 1;
          min-width: 0;
          position: relative;
          z-index: 2;
        }

        .faq-white-box {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.75) 0%, rgba(240, 244, 248, 0.65) 100%);
          border-radius: 24px;
          padding: 22px 24px 22px 34px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(14px);
          position: relative;
          z-index: 2;
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .faq-item-clean {
          background: linear-gradient(180deg, #1C070A 0%, #120306 100%);
          border: 1.5px solid rgba(239, 68, 68, 0.28);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .faq-item-clean:hover {
          border-color: rgba(239, 68, 68, 0.6);
          background: linear-gradient(180deg, #2A0A0F 0%, #1A0508 100%);
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.2);
          transform: translateY(-1px);
        }

        .faq-item-clean.active {
          background: linear-gradient(180deg, #320C12 0%, #20080C 100%);
          border-color: #EF4444;
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.28), inset 0 0 14px rgba(239, 68, 68, 0.1);
        }

        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
        }

        .faq-question-text {
          font-size: 0.94rem;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.35;
        }

        .faq-item-clean.active .faq-question-text {
          color: #FFFFFF;
        }

        .faq-icon-arrow {
          color: #EF4444;
          display: flex;
          align-items: center;
          margin-left: 12px;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .faq-item-clean.active .faq-icon-arrow {
          color: #F87171;
        }

        .faq-answer-box {
          padding: 0 18px 14px 18px;
          border-top: 1px dashed rgba(239, 68, 68, 0.3);
          background: transparent;
        }

        .faq-answer-text {
          padding-top: 10px;
          font-size: 0.86rem;
          color: #E2E8F0;
          line-height: 1.55;
        }

        @media (max-width: 860px) {
          .faq-section {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .faq-main-layout {
            flex-direction: column;
            gap: 0;
          }
          .faq-mascot-wrapper {
            display: none !important;
          }
          .faq-content-wrapper {
            width: 100%;
          }
          .faq-white-box {
            padding: 16px;
            border-radius: 18px;
          }
        }
      `}</style>
    </section>
  );
}


import React from 'react';
import { Search, Wrench, ShieldCheck, Rocket, TrendingUp } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      badge: '01. Tiếp nhận',
      title: 'Tiếp nhận & Audit',
      desc: 'Kiểm tra lỗi index, crawl, on-page, kỹ thuật và đối thủ cạnh tranh.',
      icon: Search
    },
    {
      num: '02',
      badge: '02. Kế hoạch',
      title: 'Xác nhận & Kế hoạch',
      desc: 'Nghiên cứu ý định tìm kiếm, lập bộ từ khóa ưu tiên và brief bài viết.',
      icon: Wrench
    },
    {
      num: '03',
      badge: '03. Sản xuất',
      title: 'Triển khai & Sản xuất',
      desc: 'Viết bài chuẩn SEO, sửa lỗi on-page/technical và hoàn tất đúng hạn.',
      icon: ShieldCheck,
      isPeak: true
    },
    {
      num: '04',
      badge: '04. Đo lường',
      title: 'Kiểm tra & Đo lường',
      desc: 'Theo dõi chỉ số hiển thị, click, trang index và chuyển đổi thực tế.',
      icon: Rocket
    },
    {
      num: '05',
      badge: '05. Bàn giao',
      title: 'Báo cáo & Bàn giao',
      desc: 'Tổng hợp báo cáo định kỳ, họp tối ưu và kế hoạch chu kỳ tới.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="s07-quy-trinh" className="section-wrapper process-section overflow-hidden">
      {/* Cyber Circuit Lines Background Overlay - Matching FAQ Section */}
      <div className="circuit-bg-container" aria-hidden="true">
        <svg
          className="circuit-svg"
          viewBox="0 0 1000 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="procCircuitGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="procLineGradRed1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#F87171" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="procLineGradRed2" x1="100%" y1="0%" x2="0%" y2="100%">
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

          {/* Prominent Glowing Circuit Traces */}
          <path d="M 80 0 V 100 H 170 V 250 H 50 V 370 H 160 V 510 H 270" stroke="url(#procLineGradRed1)" strokeWidth="2.2" filter="url(#procCircuitGlow)" className="circuit-trace-pulse-1" />
          <path d="M 170 250 H 300 V 140 H 430 V 280 H 360 V 450 H 510" stroke="url(#procLineGradRed1)" strokeWidth="1.8" filter="url(#procCircuitGlow)" />
          <path d="M 0 330 H 120 V 470 H 240 V 550 H 390 V 600" stroke="url(#procLineGradRed2)" strokeWidth="2" filter="url(#procCircuitGlow)" className="circuit-trace-pulse-2" />

          {/* Right & Center Interconnected Tech Lines */}
          <path d="M 530 0 V 120 H 690 V 50 H 830 V 190 H 750 V 330 H 900 V 220 H 1000" stroke="url(#procLineGradRed1)" strokeWidth="2.2" filter="url(#procCircuitGlow)" className="circuit-trace-pulse-3" />
          <path d="M 690 120 V 270 H 570 V 430 H 730 V 530 H 620 V 600" stroke="url(#procLineGradRed2)" strokeWidth="1.8" filter="url(#procCircuitGlow)" />
          <path d="M 830 190 V 370 H 950 V 520 H 790 V 600" stroke="url(#procLineGradRed1)" strokeWidth="2" filter="url(#procCircuitGlow)" className="circuit-trace-pulse-1" />
          <path d="M 460 190 H 600 V 100 H 730" stroke="url(#procLineGradRed1)" strokeWidth="1.8" />
          <path d="M 330 390 H 490 V 490 H 650 V 390 H 800" stroke="url(#procLineGradRed2)" strokeWidth="1.6" />

          {/* Glowing High-Tech Junction Nodes / Terminals */}
          <circle cx="80" cy="100" r="4" fill="#EF4444" filter="url(#procCircuitGlow)" />
          <circle cx="170" cy="250" r="4" fill="#FFFFFF" filter="url(#procCircuitGlow)" />
          <circle cx="300" cy="140" r="3.5" fill="#EF4444" />
          <circle cx="430" cy="280" r="4" fill="#F87171" filter="url(#procCircuitGlow)" />
          <circle cx="120" cy="470" r="3.5" fill="#EF4444" />
          <circle cx="240" cy="550" r="4" fill="#FFFFFF" filter="url(#procCircuitGlow)" />
          <circle cx="530" cy="120" r="3.5" fill="#EF4444" />
          <circle cx="690" cy="120" r="4" fill="#F87171" filter="url(#procCircuitGlow)" />
          <circle cx="830" cy="190" r="4.5" fill="#FFFFFF" filter="url(#procCircuitGlow)" />
          <circle cx="750" cy="330" r="3.5" fill="#EF4444" />
          <circle cx="900" cy="220" r="4" fill="#F87171" filter="url(#procCircuitGlow)" />
          <circle cx="570" cy="430" r="4" fill="#FFFFFF" filter="url(#procCircuitGlow)" />
          <circle cx="730" cy="530" r="3.5" fill="#EF4444" />
          <circle cx="950" cy="520" r="4" fill="#EF4444" filter="url(#procCircuitGlow)" />

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
        {/* Centered Heading */}
        <div className="section-header-center header-compact">
          <div className="section-badge">QUY TRÌNH TRIỂN KHAI</div>
          <div className="heading-row-center">
            <span className="dash-accent left" aria-hidden="true">
              <span className="dash-bar" />
              <span className="dash-dot" />
            </span>
            <h2 className="section-title">Quy trình triển khai dịch vụ SEO chuẩn hóa</h2>
            <span className="dash-accent right" aria-hidden="true">
              <span className="dash-dot" />
              <span className="dash-bar" />
            </span>
          </div>
          <p className="section-desc">
            Minh bạch 5 bước thực thi từ tiếp nhận, lập kế hoạch đến kiểm tra và bàn giao báo cáo định kỳ.
          </p>
        </div>

        {/* Horizontal on Desktop / Vertical Timeline on Mobile */}
        <div className="process-stage reveal-scale">
          {/* Straight Horizontal Connecting Track (Desktop Only) */}
          <div className="timeline-track-wrapper" aria-hidden="true">
            <div className="timeline-track-glow" />
            <div className="timeline-track-line" />
            <div className="timeline-laser-pulse" />
          </div>

          {/* 5 Process Step Nodes */}
          <div className="timeline-nodes-row">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className={`timeline-step-node ${step.isPeak ? 'is-peak-step' : ''}`}>
                  {/* Left Column on Mobile / Top on Desktop: Icon */}
                  <div className="node-icon-wrapper">
                    {/* Peeking Mascot Head (Desktop Hover Only) */}
                    <div className="hover-robot-peek" aria-hidden="true">
                      <img 
                        src="/robot-head.webp" 
                        alt="Robot Mascot Peeking" 
                        className="hover-robot-img"
                      />
                    </div>
                    {step.isPeak && <div className="peak-badge-scallop" aria-hidden="true" />}
                    <div className="node-icon-circle">
                      <IconComp size={24} color="#FFFFFF" strokeWidth={2.3} />
                    </div>
                    {/* Vertical Connector Line between steps (Mobile Only) */}
                    {idx < steps.length - 1 && <div className="mobile-connector-line" aria-hidden="true" />}
                  </div>

                  {/* Content Container */}
                  <div className="node-content-wrap">
                    <div className="node-badge-pill">{step.badge}</div>
                    <h3 className="node-title">{step.title}</h3>

                    {/* Detailed Description */}
                    <div className="node-hover-desc">
                      <p className="desc-text">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .process-section {
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
          border-top: 1px solid rgba(239, 68, 68, 0.2);
          border-bottom: 1px solid rgba(239, 68, 68, 0.2);
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .process-section .section-badge {
          background: rgba(239, 68, 68, 0.15) !important;
          border: 1px solid rgba(239, 68, 68, 0.35) !important;
          color: #EF4444 !important;
          margin-bottom: 8px;
        }

        .process-section .section-title {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          color: #FFFFFF !important;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
          margin-bottom: 6px !important;
        }

        .process-section .section-desc {
          color: #94A3B8 !important;
          max-width: 680px;
          margin: 0 auto;
        }

        /* Header Accent Pins */
        .heading-row-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .dash-accent {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .dash-accent .dash-bar {
          width: 30px;
          height: 2px;
          background: #EF4444;
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.6);
        }

        .dash-accent .dash-dot {
          width: 6px;
          height: 6px;
          background: #EF4444;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.8);
        }

        @media (max-width: 768px) {
          .dash-accent {
            display: none;
          }
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
          0% { stroke-dashoffset: 600; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes circuitFlow2 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 550; }
        }

        /* Process Stage Layout */
        .process-stage {
          position: relative;
          max-width: 1050px;
          margin: 36px auto 10px auto;
          padding: 0 10px;
        }

        /* Horizontal Connecting Red Dashed Line (Desktop) */
        .timeline-track-wrapper {
          position: absolute;
          top: 31px;
          left: 9%;
          right: 9%;
          height: 2px;
          z-index: 1;
        }

        .timeline-track-glow {
          position: absolute;
          inset: -3px 0;
          background: rgba(239, 68, 68, 0.35);
          filter: blur(4px);
        }

        .timeline-track-line {
          position: absolute;
          inset: 0;
          border-top: 2px dashed rgba(239, 68, 68, 0.8);
        }

        .timeline-laser-pulse {
          position: absolute;
          top: -2px;
          left: 0;
          width: 80px;
          height: 6px;
          background: linear-gradient(90deg, transparent, #EF4444, #FFFFFF, #EF4444, transparent);
          border-radius: 4px;
          filter: blur(1px);
          animation: laserTravel 5s ease-in-out infinite;
        }

        @keyframes laserTravel {
          0% { left: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { left: calc(100% - 80px); opacity: 0; }
        }

        .timeline-nodes-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
          z-index: 2;
          gap: 12px;
        }

        /* Individual Step Node (Desktop Layout) */
        .timeline-step-node {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .timeline-step-node:hover {
          transform: translateY(-4px);
        }

        .node-content-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        /* Icon Wrapper */
        .node-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          z-index: 3;
          background: #120306;
          border-radius: 50%;
          padding: 4px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
        }

        .node-icon-circle {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: linear-gradient(145deg, #DC2626 0%, #EF4444 55%, #B91C1C 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 24px rgba(239, 68, 68, 0.5), inset 0 0 12px rgba(255, 255, 255, 0.25);
          transition: all 0.28s ease;
          position: relative;
          z-index: 2;
        }

        .timeline-step-node:hover .node-icon-circle {
          box-shadow: 0 0 32px rgba(239, 68, 68, 0.8), inset 0 0 16px rgba(255, 255, 255, 0.45);
          transform: scale(1.08);
        }

        /* Peak Step 3 Scalloped Orbital Ring */
        .peak-badge-scallop {
          position: absolute;
          width: 78px;
          height: 78px;
          border-radius: 50%;
          border: 1.8px dashed #EF4444;
          animation: peakRingSpin 24s linear infinite;
        }

        @keyframes peakRingSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Mobile connector line hidden by default on desktop */
        .mobile-connector-line {
          display: none;
        }

        /* Hover Peeking Robot Head on Top */
        .hover-robot-peek {
          position: absolute;
          top: -38px;
          left: 50%;
          transform: translateX(-50%) translateY(16px) scale(0.5);
          opacity: 0;
          pointer-events: none;
          z-index: 10;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 6px 14px rgba(239, 68, 68, 0.5));
        }

        .hover-robot-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          display: block;
        }

        .timeline-step-node:hover .hover-robot-peek {
          opacity: 1;
          transform: translateX(-50%) translateY(0) scale(1);
        }

        /* Badge Pill */
        .node-badge-pill {
          background: linear-gradient(135deg, #DC2626 0%, #EF4444 100%);
          color: #FFFFFF;
          font-weight: 800;
          font-size: 0.78rem;
          padding: 3px 12px;
          border-radius: 9999px;
          box-shadow: 0 0 14px rgba(239, 68, 68, 0.4);
          margin-bottom: 6px;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        /* Title */
        .node-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: #FFFFFF;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
          margin-bottom: 4px;
          line-height: 1.25;
        }

        /* Detailed Description - Futuristic Frosted Glass Tooltip on Desktop Hover */
        .node-hover-desc {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transform: translateY(8px);
          transition: opacity 0.28s ease, transform 0.28s ease, max-height 0.28s ease;
          pointer-events: none;
          background: rgba(24, 7, 10, 0.95);
          border: 1px solid rgba(239, 68, 68, 0.4);
          border-radius: 12px;
          padding: 0 12px;
          margin-top: 6px;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.5), 0 0 16px rgba(239, 68, 68, 0.25);
          backdrop-filter: blur(14px);
        }

        .desc-text {
          font-size: 0.76rem;
          color: #F1F5F9;
          line-height: 1.45;
          margin: 0;
          padding: 10px 0;
        }

        .timeline-step-node:hover .node-hover-desc {
          opacity: 1;
          max-height: 120px;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* ========================================================= */
        /* RESPONSIVE ON TABLET & MOBILE (< 860px)                   */
        /* ========================================================= */
        @media (max-width: 860px) {
          .process-section {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }

          .process-stage {
            margin-top: 24px;
            padding: 0 6px;
          }

          .timeline-track-wrapper {
            display: none !important;
          }

          .hover-robot-peek {
            display: none !important;
          }

          .timeline-nodes-row {
            flex-direction: column;
            gap: 16px;
          }

          /* Mobile Vertical Timeline Step */
          .timeline-step-node {
            flex-direction: row;
            align-items: flex-start;
            text-align: left;
            width: 100%;
            gap: 16px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(239, 68, 68, 0.2);
            border-radius: 16px;
            padding: 16px;
            backdrop-filter: blur(8px);
          }

          .timeline-step-node:hover {
            transform: none;
          }

          .node-icon-wrapper {
            margin-bottom: 0;
            flex-shrink: 0;
            padding: 2px;
          }

          .node-icon-circle {
            width: 50px;
            height: 50px;
          }

          .peak-badge-scallop {
            width: 62px;
            height: 62px;
          }

          .node-content-wrap {
            align-items: flex-start;
            text-align: left;
            flex-grow: 1;
          }

          .node-badge-pill {
            font-size: 0.74rem;
            padding: 2px 10px;
            margin-bottom: 4px;
          }

          .node-title {
            font-size: 0.95rem;
            margin-bottom: 6px;
          }

          /* Full Always-Visible Description on Mobile */
          .node-hover-desc {
            opacity: 1 !important;
            max-height: none !important;
            transform: none !important;
            pointer-events: auto !important;
            background: transparent !important;
            border: none !important;
            padding: 0 !important;
            margin-top: 0 !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
          }

          .desc-text {
            font-size: 0.8rem;
            color: #CBD5E1;
            padding: 0;
            line-height: 1.45;
          }
        }
      `}</style>
    </section>
  );
}

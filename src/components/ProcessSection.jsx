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
                  {/* Icon Column */}
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
          background: linear-gradient(180deg, 
            #FAF5EE 0%, 
            #F4E8D7 20%, 
            #ECCFA8 50%, 
            #DCAC6E 78%, 
            #C8873E 100%
          ) !important;
          padding-top: 56px !important;
          padding-bottom: 60px !important;
          position: relative;
          border-top: 1px solid rgba(210, 145, 75, 0.25);
          border-bottom: 1px solid rgba(190, 120, 50, 0.35);
        }

        .process-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.6) 0%, transparent 60%),
            radial-gradient(circle at 80% 90%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(160, 90, 25, 0.12) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .process-section .section-badge {
          background: rgba(255, 255, 255, 0.85) !important;
          border: 1px solid rgba(185, 28, 28, 0.25) !important;
          color: #B91C1C !important;
          margin-bottom: 8px;
          box-shadow: 0 2px 8px rgba(180, 83, 9, 0.08);
        }

        .process-section .section-title {
          font-family: var(--font-heading);
          color: #1F150D !important;
          margin-bottom: 6px !important;
          font-weight: 800;
        }

        .process-section .section-desc {
          color: #4A3525 !important;
          max-width: 680px;
          margin: 0 auto;
          font-weight: 500;
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
          background: #D32F2F;
          border-radius: 2px;
        }

        .dash-accent .dash-dot {
          width: 6px;
          height: 6px;
          background: #D32F2F;
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          .dash-accent {
            display: none;
          }
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
          background: rgba(211, 47, 47, 0.2);
          filter: blur(4px);
        }

        .timeline-track-line {
          position: absolute;
          inset: 0;
          border-top: 2px dashed rgba(211, 47, 47, 0.7);
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
          background: #FAF5EE;
          border-radius: 50%;
          padding: 4px;
          box-shadow: 0 4px 16px rgba(140, 75, 20, 0.18);
        }

        .node-icon-circle {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: linear-gradient(145deg, #DC2626 0%, #EF4444 55%, #B91C1C 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(211, 47, 47, 0.35), inset 0 0 10px rgba(255, 255, 255, 0.25);
          transition: all 0.28s ease;
          position: relative;
          z-index: 2;
        }

        .timeline-step-node:hover .node-icon-circle {
          box-shadow: 0 8px 28px rgba(211, 47, 47, 0.55), inset 0 0 14px rgba(255, 255, 255, 0.45);
          transform: scale(1.08);
        }

        /* Peak Step 3 Orbital Ring */
        .peak-badge-scallop {
          position: absolute;
          width: 78px;
          height: 78px;
          border-radius: 50%;
          border: 1.8px dashed #DC2626;
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
          filter: drop-shadow(0 6px 14px rgba(185, 28, 28, 0.35));
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
          box-shadow: 0 2px 10px rgba(211, 47, 47, 0.28);
          margin-bottom: 6px;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        /* Title */
        .node-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: #1F150D;
          margin-bottom: 4px;
          line-height: 1.25;
        }

        /* Detailed Description - Warm Frosted Glass Tooltip on Desktop Hover */
        .node-hover-desc {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transform: translateY(8px);
          transition: opacity 0.28s ease, transform 0.28s ease, max-height 0.28s ease;
          pointer-events: none;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(220, 38, 38, 0.25);
          border-radius: 12px;
          padding: 0 12px;
          margin-top: 6px;
          box-shadow: 0 12px 30px rgba(120, 60, 15, 0.16);
          backdrop-filter: blur(14px);
        }

        .desc-text {
          font-size: 0.78rem;
          color: #332215;
          line-height: 1.45;
          margin: 0;
          padding: 10px 0;
          font-weight: 500;
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
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(220, 38, 38, 0.18);
            border-radius: 16px;
            padding: 16px;
            box-shadow: 0 6px 20px rgba(120, 60, 15, 0.08);
          }

          .timeline-step-node:hover {
            transform: none;
          }

          .node-icon-wrapper {
            margin-bottom: 0;
            flex-shrink: 0;
            padding: 2px;
            background: #FFFFFF;
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
            color: #4A3525;
            padding: 0;
            line-height: 1.45;
          }
        }
      `}</style>
    </section>
  );
}
